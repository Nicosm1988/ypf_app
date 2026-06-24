const CACHE_NAME = "datalizacion-ypf-v12";
const PRECACHE_URLS = [
  "/",
  "/guia-power-bi",
  "/metodologia",
  "/roadmap",
  "/proyecto-power-bi",
  "/atajos",
  "/librerias",
  "/diccionario",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/data/dictionary.js",
  "/data/engineeringGuide.js",
  "/data/methodology.js",
  "/data/executiveNarrative.js",
  "/data/roadmap.js",
  "/data/powerbiShortcuts.js",
  "/data/toolingLibrary.js",
  "/docs/librerias-agentes-mcp.md",
  "/docs/modelos/prd-datalizacion.md",
  "/docs/modelos/spec-datalizacion.md",
  "/manifest.webmanifest",
  "/assets/docs/atajos-power-bi.pdf",
  "/assets/docs/modelos/prd-datalizacion.docx",
  "/assets/docs/modelos/spec-datalizacion.docx",
  "/assets/favicon.svg",
  "/assets/energy-chain-v1-640.avif",
  "/assets/energy-chain-v1-960.avif",
  "/assets/energy-chain-v1-1280.avif",
  "/assets/energy-chain-v1-1672.avif",
  "/assets/energy-chain-v1-640.webp",
  "/assets/energy-chain-v1-960.webp",
  "/assets/energy-chain-v1-1280.webp",
  "/assets/energy-chain-v1-1672.webp",
  "/assets/energy-chain.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  const shouldPreferNetwork =
    request.mode === "navigate" ||
    ["document", "script", "style", "manifest"].includes(request.destination) ||
    url.pathname.startsWith("/data/");

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return shouldPreferNetwork ? networkFetch || cached : cached || networkFetch;
    })
  );
});
