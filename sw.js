/* 말씀의 숲 · 읽기 중심 PWA v1
 * Online-first for fresh editorial content; offline copies for previously visited public pages.
 * This worker intentionally never caches third-party URLs or API requests.
 */
const VERSION = 'malsum-reading-v2-20261116';
const SHELL = VERSION + '-shell';
const PAGES = VERSION + '-pages';
const SHELL_URLS = ['/', '/offline.html', '/android-chrome-192x192.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(SHELL).then(cache => cache.addAll(SHELL_URLS)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('malsum-reading-') && name !== SHELL && name !== PAGES).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

async function saveVisitedPage(request, response) {
  if (!response.ok || response.type !== 'basic') return;
  const type = response.headers.get('content-type') || '';
  const control = response.headers.get('cache-control') || '';
  if (!type.includes('text/html') || /(?:no-store|private)/i.test(control)) return;
  const cache = await caches.open(PAGES);
  await cache.put(request, response.clone());
  const keys = await cache.keys();
  if (keys.length > 20) await cache.delete(keys[0]);
}

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || request.mode !== 'navigate') return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      // Preserve online freshness, and do not block navigation on disk writes.
      await saveVisitedPage(request, response.clone()).catch(error => {
        console.warn('Offline page save skipped:', error);
      });
      return response;
    } catch (_) {
      const pages = await caches.open(PAGES);
      const saved = await pages.match(request);
      if (saved) return saved;
      // The installed app can relaunch with /index.html, a query string, or a
      // previously-opened uncached route. Prefer the cached home to a dead end.
      const home = await caches.match('/');
      if (home) return home;
      return (await caches.match('/offline.html')) || Response.error();
    }
  })());
});
