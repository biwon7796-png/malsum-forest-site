const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');

function harness() {
  const handlers = new Map();
  const stores = new Map();
  let online = true;
  let claimed = false;
  const home = 'https://www.malsumforest.com';
  class MockResponse {
    constructor(body, type = 'text/html', control = '') {
      this.body = body; this.ok = true; this.type = 'basic';
      this.headers = { get: key => key === 'content-type' ? type : key === 'cache-control' ? control : '' };
    }
    clone() { return new MockResponse(this.body, this.headers.get('content-type'), this.headers.get('cache-control')); }
    async blob() { return { size: Buffer.byteLength(this.body) }; }
  }
  function keyOf(req) { return typeof req === 'string' ? new URL(req, home).href : req.url; }
  const caches = {
    async open(name) {
      if (!stores.has(name)) stores.set(name, new Map());
      const data = stores.get(name);
      return {
        async addAll(urls) { for (const url of urls) data.set(keyOf(url), new MockResponse('shell:' + url)); },
        async put(request, response) { data.set(keyOf(request), response); },
        async match(request) { return data.get(keyOf(request)); },
        async keys() { return [...data.keys()].map(url => ({ url })); },
        async delete(request) { return data.delete(keyOf(request)); }
      };
    },
    async match(request) {
      for (const data of stores.values()) if (data.has(keyOf(request))) return data.get(keyOf(request));
    },
    async keys() { return [...stores.keys()]; },
    async delete(name) { return stores.delete(name); }
  };
  const context = {
    URL, caches, console,
    self: { location: { origin: home }, clients: { claim: async () => { claimed = true; } },
      addEventListener: (type, callback) => handlers.set(type, callback) },
    fetch: async request => {
      if (!online) throw new Error('offline');
      return new MockResponse('live:' + new URL(request.url).pathname, request.destination === 'style' ? 'text/css' : request.destination === 'image' ? 'image/png' : request.destination === 'script' ? 'text/javascript' : 'text/html');
    },
    Response: { error: () => ({ error: true }) }
  };
  vm.runInNewContext(fs.readFileSync('sw.js', 'utf8'), context, { filename: 'sw.js' });
  async function lifecycle(type) {
    let job; handlers.get(type)({ waitUntil: p => { job = p; } }); await job;
  }
  async function navigate(path, origin = home, mode = 'navigate', method = 'GET', destination = '') {
    const request = { url: origin + path, method, mode, destination };
    let promise;
    handlers.get('fetch')({ request, respondWith: p => { promise = p; } });
    return promise ? promise : null;
  }
  return { lifecycle, navigate, setOnline: value => { online = value; }, caches, stores, getClaimed: () => claimed };
}

test('install and activate preserve shell, claim clients', async () => {
  const app = harness(); await app.lifecycle('install'); await app.lifecycle('activate');
  assert.ok(await app.caches.match('/offline.html'));
  assert.ok(app.getClaimed());
});
test('online-first navigation caches HTML and reopens the visited page offline', async () => {
  const app = harness(); await app.lifecycle('install');
  assert.equal((await app.navigate('/stories/')).body, 'live:/stories/');
  app.setOnline(false);
  assert.equal((await app.navigate('/stories/')).body, 'live:/stories/');
});
test('unknown offline route returns the cached app home, not a dead end', async () => {
  const app = harness(); await app.lifecycle('install'); app.setOnline(false);
  assert.equal((await app.navigate('/unknown/')).body, 'shell:/');
});
test('installed app starts offline from /index.html and query-based launch URLs', async () => {
  const app = harness(); await app.lifecycle('install'); app.setOnline(false);
  assert.equal((await app.navigate('/index.html')).body, 'shell:/');
  assert.equal((await app.navigate('/?source=homescreen')).body, 'shell:/');
});
test('home fallback does not override a cached visited article', async () => {
  const app = harness(); await app.lifecycle('install');
  assert.equal((await app.navigate('/stories/read-1')).body, 'live:/stories/read-1');
  app.setOnline(false);
  assert.equal((await app.navigate('/stories/read-1')).body, 'live:/stories/read-1');
});
test('offline home uses the pre-cached home document', async () => {
  const app = harness(); await app.lifecycle('install'); app.setOnline(false);
  assert.equal((await app.navigate('/')).body, 'shell:/');
});
test('does not intercept foreign origins, non-GET requests or unknown resources', async () => {
  const app = harness();
  assert.equal(await app.navigate('/x', 'https://elsewhere.test'), null);
  assert.equal(await app.navigate('/x', 'https://www.malsumforest.com', 'cors'), null);
  assert.equal(await app.navigate('/x', 'https://www.malsumforest.com', 'navigate', 'POST'), null);
});
test('limits saved visited pages to twenty', async () => {
  const app = harness(); await app.lifecycle('install');
  for (let i = 0; i < 23; i++) await app.navigate('/stories/test-' + i);
  const saved = app.stores.get('malsum-reading-v3-20261116-pages');
  assert.equal(saved.size, 20);
  assert.ok(!saved.has('https://www.malsumforest.com/stories/test-0'));
  assert.ok(saved.has('https://www.malsumforest.com/stories/test-22'));
});

test('visited image, stylesheet and script work offline', async () => {
  const app = harness(); await app.lifecycle('install');
  for (const [path, dest] of [['/assets/photo.webp','image'], ['/css/site.css','style'], ['/js/app.js','script']]) {
    assert.equal((await app.navigate(path, 'https://www.malsumforest.com', 'same-origin', 'GET', dest)).body, 'live:' + path);
  }
  app.setOnline(false);
  for (const [path, dest] of [['/assets/photo.webp','image'], ['/css/site.css','style'], ['/js/app.js','script']]) {
    assert.equal((await app.navigate(path, 'https://www.malsumforest.com', 'same-origin', 'GET', dest)).body, 'live:' + path);
  }
});
test('uncached assets are not replaced with homepage HTML', async () => {
  const app = harness(); await app.lifecycle('install'); app.setOnline(false);
  assert.equal((await app.navigate('/assets/new.jpg', 'https://www.malsumforest.com','same-origin','GET','image')).error, true);
});
test('cross-origin image, API and unknown types bypass asset storage', async () => {
  const app = harness();
  assert.equal(await app.navigate('/art.png','https://cdn.example.org','no-cors','GET','image'), null);
  assert.equal(await app.navigate('/api/private','https://www.malsumforest.com','same-origin','GET','image'), null);
  assert.equal(await app.navigate('/media/video.mp4','https://www.malsumforest.com','same-origin','GET','video'), null);
});
test('asset cache never exceeds sixty entries', async () => {
  const app = harness(); await app.lifecycle('install');
  for(let i=0;i<63;i++) await app.navigate('/assets/a'+i+'.png','https://www.malsumforest.com','same-origin','GET','image');
  const cache=app.stores.get('malsum-reading-v3-20261116-assets');
  assert.equal(cache.size,60);
  assert.ok(!cache.has('https://www.malsumforest.com/assets/a0.png'));
  assert.ok(cache.has('https://www.malsumforest.com/assets/a62.png'));
});
test('upgrade migrates previously visited documents from v2', async () => {
  const app=harness();
  const old=await app.caches.open('malsum-reading-v2-20261116-pages');
  await old.put('/stories/previous', {body:'previously saved'});
  await app.lifecycle('install'); await app.lifecycle('activate'); app.setOnline(false);
  assert.equal((await app.navigate('/stories/previous')).body,'previously saved');
});
