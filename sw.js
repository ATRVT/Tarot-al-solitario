// sw.js — v6
const CACHE = 'tarot-pwa-v6';
const ASSETS = [
  './','./index.html','./app.js','./manifest.json',
  './assets/icons/icon-192.png','./assets/icons/icon-256.png','./assets/icons/icon-512.png'
  // Si precacheas cartas demo, añade sus rutas aquí.
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => k !== CACHE && caches.delete(k)));
    await self.clients.claim();
  })());
});

// Network-first para index.html (y raíz), cache-first para el resto
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  const isIndex = url.pathname === '/' || url.pathname.endsWith('/index.html');
  if (isIndex) {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(e.request, { cache: 'no-store' });
        const cache = await caches.open(CACHE);
        cache.put(e.request, fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(e.request);
        return cached || caches.match('./index.html');
      }
    })());
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
