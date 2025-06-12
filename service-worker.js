const CACHE_NAME = 'rov-app-cache-v1';
const urlsToCache = [
  '/rov-reference-app/',
  '/rov-reference-app/index.html',
  '/rov-reference-app/styles.css',
  '/rov-reference-app/app.js',
  '/rov-reference-app/pages/fitting-finder.js',
  '/rov-reference-app/src/data/fittings2.json',
  '/rov-reference-app/manifest.json',
  '/rov-reference-app/icons/icon-192.png',
  '/rov-reference-app/icons/icon-512.png'
];

self.addEventListener('install', event => {
  console.log('[Service Worker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('[Service Worker] Failed to cache:', err);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(err => {
        console.error('[Service Worker] Fetch failed:', err);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});
