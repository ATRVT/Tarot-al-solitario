// sw.js — PWA para Tarot (network-first en index.html)
// Sube este nombre para forzar actualización en móviles:
const CACHE = 'tarot-pwa-v15';

// Archivos básicos a precachear (NO metemos las cartas para no inflar el caché)
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-256.png',
  './assets/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  // Toma control lo antes posible
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  // Limpia caches viejos y toma control de las páginas abiertas
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : Promise.resolve())));
    await self.clients.claim();
  })());
});

// Estrategia:
// - index.html y navegaciones → NETWORK FIRST (para evitar quedar pegados a una versión vieja)
// - resto de archivos estáticos → CACHE FIRST
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  const isNavigation = req.mode === 'navigate';
  const isIndex = isNavigation || url.pathname === '/' || url.pathname.endsWith('/index.html');

  if (isIndex) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: 'no-store' });
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch (e) {
        const cached = await caches.match(req);
        return cached || caches.match('./index.html');
      }
    })());
    return;
  }

  // Cache-first para el resto (JS, CSS, iconos, imágenes, etc.)
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const resp = await fetch(req);
      // guarda en caché solo GETs exitosos
      if (req.method === 'GET' && resp && resp.status === 200 && resp.type !== 'opaque') {
        const cache = await caches.open(CACHE);
        cache.put(req, resp.clone());
      }
      return resp;
    } catch (e) {
      // sin fallback específico aquí
      throw e;
    }
  })());
});
