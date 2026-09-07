const CACHE_NAME = 'coshix-pwa-cache-v1';

// Install the service worker and immediately activate it
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// A basic fetch handler is strictly required for PWA installation
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If the request is successful, return it
        return response;
      })
      .catch(() => {
        // If offline, try to return a cached fallback (if you implement caching later)
        return caches.match(event.request);
      })
  );
});