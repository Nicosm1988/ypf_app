const CACHE_NAME = "datalizacion-ypf-v21";
const PRECACHE_URLS = [
  "/",
  "/guia-power-bi",
  "/metodo-datalizacion",
  "/metodologia",
  "/design-system",
  "/datalito",
  "/roadmap",
  "/proyecto-power-bi",
  "/atajos",
  "/librerias",
  "/diccionario",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/data/dictionary.js",
  "/data/datalito.js",
  "/data/designSystem.js",
  "/data/engineeringGuide.js",
  "/data/methodology.js",
  "/data/datalizationMethod.js",
  "/data/executiveNarrative.js",
  "/data/platformIntro.js",
  "/data/roadmap.js",
  "/data/powerbiShortcuts.js",
  "/data/toolingLibrary.js",
  "/docs/librerias-agentes-mcp.md",
  "/docs/datalito-architecture.md",
  "/docs/datalito-content-governance.md",
  "/docs/datalito-evaluation.md",
  "/docs/datalito-runbook.md",
  "/docs/datalito-threat-model.md",
  "/docs/modelos/prd-datalizacion.md",
  "/docs/modelos/spec-datalizacion.md",
  "/manifest.webmanifest",
  "/assets/docs/atajos-power-bi.pdf",
  "/assets/docs/modelos/prd-datalizacion.docx",
  "/assets/docs/modelos/spec-datalizacion.docx",
  "/assets/favicon.svg",
  "/assets/datalito-avatar.png",
  "/assets/datalito-avatar-256.webp",
  "/assets/datalito-avatar-512.webp",
  "/assets/ypf-industrial-hero-640.avif",
  "/assets/ypf-industrial-hero-960.avif",
  "/assets/ypf-industrial-hero-1280.avif",
  "/assets/ypf-industrial-hero-1672.avif",
  "/assets/ypf-industrial-hero-640.webp",
  "/assets/ypf-industrial-hero-960.webp",
  "/assets/ypf-industrial-hero-1280.webp",
  "/assets/ypf-industrial-hero-1672.webp",
  "/assets/ypf-industrial-hero.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
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
    }),
  );
});
