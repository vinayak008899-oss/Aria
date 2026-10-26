const CACHE_NAME = 'mythological-v4';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  // Never touch other sites (Jamendo API and audio streams go straight to the network, nothing is cached)
  if (new URL(event.request.url).origin !== self.location.origin) return;

  // Pages: network first, fall back to cache when offline
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(async () => (await caches.match('./index.html')) || (await caches.match('./')))
    );
    return;
  }

  // Everything else: cache first
  event.respondWith(
    caches.match(event.request).then(hit => hit || fetch(event.request))
  );
});
