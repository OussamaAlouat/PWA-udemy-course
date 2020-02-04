/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-arrow-callback */

self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Installing service worker ...', event);
});

self.addEventListener('activate', function (event) {
  console.log('[ServiceWorker] Activate service worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  console.log('[ServiceWorker] Fetching something ...', event);
  event.respondWith(fetch(event.request));
});
