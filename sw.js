/* 말씀의 숲 PWA v3: online-first HTML and local reading assets.
 * Visited public pages and requested same-origin CSS, JS, images and fonts
 * are available when offline. No cross-origin resources, APIs or POST caching.
 */
const VERSION = 'malsum-reading-v3-20261116';
const SHELL = VERSION + '-shell';
const PAGES = VERSION + '-pages';
const ASSETS = VERSION + '-assets';
const PREFIX = 'malsum-reading-';
const MAX_PAGES = 20;
const MAX_ASSETS = 60;
const MAX_ASSET_BYTES = 2 * 1024 * 1024;
const SHELL_URLS = ['/', '/offline.html', '/android-chrome-192x192.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(SHELL).then(cache => cache.addAll(SHELL_URLS)));
});

async function trim(cache, limit) {
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - limit)).map(key => cache.delete(key)));
}
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    const pages = await caches.open(PAGES);
    // Keep already-read documents from v2 when upgrading offline.
    for (const name of names.filter(name => name.startsWith(PREFIX) && name.endsWith('-pages') && name !== PAGES)) {
      const old = await caches.open(name);
      for (const request of await old.keys()) {
        if (!(await pages.match(request))) {
          const response = await old.match(request);
          if (response) await pages.put(request, response);
        }
      }
    }
    await trim(pages, MAX_PAGES);
    // Deleting old caches only after migration succeeds.
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && ![SHELL, PAGES, ASSETS].includes(name)).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

async function savePage(request, response) {
  if (!response.ok || response.type !== 'basic') return;
  const type = response.headers.get('content-type') || '';
  const control = response.headers.get('cache-control') || '';
  if (!type.includes('text/html') || /(?:private|no-store)/i.test(control)) return;
  const cache = await caches.open(PAGES);
  await cache.put(request, response.clone());
  await trim(cache, MAX_PAGES);
}
function isReadingAsset(request, url) {
  if (request.mode === 'navigate') return false;
  if (!['style', 'script', 'image', 'font'].includes(request.destination)) return false;
  return /\.(?:css|js|mjs|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf)$/i.test(url.pathname);
}
async function saveAsset(request, response) {
  if (!response.ok || response.type !== 'basic') return;
  const control = response.headers.get('cache-control') || '';
  if (/(?:private|no-store)/i.test(control)) return;
  const size = Number(response.headers.get('content-length'));
  if (size > MAX_ASSET_BYTES) return;
  // Check actual bytes when Content-Length is absent or inaccurate.
  const body = await response.clone().blob();
  if (body.size > MAX_ASSET_BYTES) return;
  const cache = await caches.open(ASSETS);
  await cache.put(request, response.clone());
  await trim(cache, MAX_ASSETS);
}
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  const navigation = request.mode === 'navigate';
  if (!navigation && !isReadingAsset(request, url)) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      await (navigation ? savePage(request, response) : saveAsset(request, response)).catch(error => {
        console.warn('말씀의 숲 오프라인 저장 건너뜀:', error);
      });
      return response;
    } catch (_) {
      if (navigation) {
        const pages = await caches.open(PAGES);
        const visited = await pages.match(request);
        if (visited) return visited;
        return (await caches.match('/')) || (await caches.match('/offline.html')) || Response.error();
      }
      return (await (await caches.open(ASSETS)).match(request)) ||
        (await caches.match(request)) || Response.error();
    }
  })());
});
