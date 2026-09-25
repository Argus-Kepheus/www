/**
 * Offline cache for the static portfolio. No precache list: everything is
 * cached opportunistically as the visitor loads it, so this file needs no
 * coordination with the hashed build output (see scripts/build.mjs).
 *
 * Hashed assets (app-<hash>.js, style-<hash>.css, chunk-<hash>.js,
 * <locale>.<hash>.json) are immutable per build, so they're safe to serve
 * cache-first forever. Everything else (index.html, manifest.json,
 * locales/manifest.json, images, robots.txt, sitemap.xml) can change
 * between deploys without changing URL, so it's served network-first with a
 * cache fallback for offline use.
 */

const CACHE_NAME = 'portfolio-v1';
const IMMUTABLE_PATTERN = /-[A-Za-z0-9]{6,}\.(?:css|js)$|\.[0-9a-f]{10}\.json$/u;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    IMMUTABLE_PATTERN.test(url.pathname) ? cacheFirst(request) : networkFirst(request)
  );
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  await cachePut(request, response);
  return response;
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    await cachePut(request, response);
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

async function cachePut(request, response) {
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
}
