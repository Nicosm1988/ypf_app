import { dictionaryCategories, dictionaryTerms } from "./data/dictionary.js";
import { guideSections, prdSpecComparison, readinessChecklist } from "./data/engineeringGuide.js";
import { powerBiShortcuts, shortcutsPdf } from "./data/powerbiShortcuts.js";
import { laneStyles, roadmapPhases } from "./data/roadmap.js";
import { toolingDocs, toolingGroups } from "./data/toolingLibrary.js";

const appRoot = document.querySelector("#appRoot");
const contentTarget = document.querySelector("#content");
const navLinks = [...document.querySelectorAll("[data-route]")];

const icons = {
  arrowRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
  book:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>',
  chevronDown:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>',
  clipboard:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect width="8" height="4" x="8" y="2" rx="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>',
  code:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>',
  filter:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 3H2l8 9.5V20l4 2v-9.5L22 3z"></path></svg>',
  folder:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></svg>',
  gauge:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>',
  gitBranch:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
  layers:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m12 2 10 5-10 5L2 7l10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>',
  quote:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2v4z"></path><path d="M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h.75c0 2.25-.75 3.75-2.75 4v4z"></path></svg>',
  route:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7H6.5a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1v7z"></path></svg>',
  spark:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M13 2 3 14h8l-1 8 11-13h-8l1-7z"></path></svg>',
  terminal:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m4 17 6-6-6-6"></path><path d="M12 19h8"></path></svg>',
};

const routeTitles = {
  "/": "YPF BI Playbook",
  "/guia-power-bi": "Guia Power BI/Fabric | YPF BI Playbook",
  "/diccionario": "Diccionario BI | YPF BI Playbook",
  "/roadmap": "Roadmap BI | YPF BI Playbook",
  "/proyecto-power-bi": "Proyecto de Power BI con Visual Studio | YPF BI Playbook",
  "/atajos": "Atajos Power BI | YPF BI Playbook",
  "/librerias": "Librerias y agentes | YPF BI Playbook",
};

const dictionaryState = {
  query: "",
  category: "Todas",
};

let expandedPhase = 0;
let pointerFrame = 0;

const interactiveSurfaceSelector = [
  ".visual-summary",
  ".stat",
  ".feature-card",
  ".workflow-lab",
  ".workflow-case",
  ".workflow-node-card",
  ".workflow-output",
  ".mini-step",
  ".term-card",
  ".empty-state",
  ".control-panel",
  ".roadmap-pipeline",
  ".pipeline-step",
  ".pipeline-lane-card",
  ".phase-card",
  ".prd-copy",
  ".comparison-table",
  ".guide-card",
  ".readiness-panel",
  ".project-copy",
  ".code-window",
  ".quality-card",
  ".pbip-note",
  ".shortcut-hero",
  ".shortcut-card",
  ".tooling-card",
].join(",");

function icon(name) {
  return `<span class="icon" aria-hidden="true">${icons[name] || ""}</span>`;
}

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getRoute(pathname = window.location.pathname) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  if (["/guia-power-bi", "/diccionario", "/roadmap", "/proyecto-power-bi", "/atajos", "/librerias"].includes(cleanPath)) return cleanPath;
  return "/";
}

function navigate(path) {
  const route = getRoute(path);
  if (window.location.pathname !== route) {
    window.history.pushState({}, "", route);
  }
  renderRoute(route);
  contentTarget.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupAmbientPointer() {
  const root = document.documentElement;
  const applyPointer = (clientX, clientY) => {
    root.style.setProperty("--pointer-x", `${Math.round(clientX)}px`);
    root.style.setProperty("--pointer-y", `${Math.round(clientY)}px`);
    root.style.setProperty("--pointer-ratio-x", `${clientX / Math.max(window.innerWidth, 1)}`);
    root.style.setProperty("--pointer-ratio-y", `${clientY / Math.max(window.innerHeight, 1)}`);
  };

  applyPointer(window.innerWidth * 0.5, window.innerHeight * 0.3);

  window.addEventListener(
    "pointermove",
    (event) => {
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        applyPointer(event.clientX, event.clientY);
        pointerFrame = 0;
      });
    },
    { passive: true },
  );
}

function enhanceInteractiveSurfaces() {
  const surfaces = appRoot.querySelectorAll(interactiveSurfaceSelector);

  surfaces.forEach((surface) => {
    if (surface.dataset.interactiveBound === "true") return;

    const resetSurface = () => {
      surface.style.setProperty("--spot-x", "50%");
      surface.style.setProperty("--spot-y", "50%");
      surface.style.setProperty("--tilt-x", "0deg");
      surface.style.setProperty("--tilt-y", "0deg");
    };

    surface.dataset.interactiveBound = "true";
    surface.classList.add("interactive-surface");
    resetSurface();

    surface.addEventListener(
      "pointermove",
      (event) => {
        const rect = surface.getBoundingClientRect();
        const x = rect.width ? (event.clientX - rect.left) / rect.width : 0.5;
        const y = rect.height ? (event.clientY - rect.top) / rect.height : 0.5;
        const clampedX = Math.min(Math.max(x, 0), 1);
        const clampedY = Math.min(Math.max(y, 0), 1);

        surface.style.setProperty("--spot-x", `${Math.round(clampedX * 100)}%`);
        surface.style.setProperty("--spot-y", `${Math.round(clampedY * 100)}%`);
        surface.style.setProperty("--tilt-x", `${((0.5 - clampedY) * 5).toFixed(2)}deg`);
        surface.style.setProperty("--tilt-y", `${((clampedX - 0.5) * 6).toFixed(2)}deg`);
      },
      { passive: true },
    );

    surface.addEventListener("pointerleave", resetSurface, { passive: true });
  });
}

function setActiveNav(route) {
  navLinks.forEach((link) => {
    const url = new URL(link.href);
    link.classList.toggle("active", getRoute(url.pathname) === route);
  });
}

function renderRoute(route = getRoute()) {
  document.title = routeTitles[route] || routeTitles["/"];
  setActiveNav(route);

  if (route === "/diccionario") {
    renderDictionaryPage();
  } else if (route === "/guia-power-bi") {
    renderGuidePage();
  } else if (route === "/roadmap") {
    renderRoadmapPage();
  } else if (route === "/proyecto-power-bi") {
    renderProjectPage();
  } else if (route === "/atajos") {
    renderShortcutsPage();
  } else if (route === "/librerias") {
    renderToolingPage();
  } else {
    renderHomePage();
  }

  requestAnimationFrame(enhanceInteractiveSurfaces);
}

function renderHomePage() {
  appRoot.innerHTML = `
    <section class="page home-page">
      <section class="hero" aria-label="YPF BI Playbook">
        <picture class="hero-media">
          <source
            type="image/avif"
            srcset="
              /assets/energy-chain-v1-640.avif 640w,
              /assets/energy-chain-v1-960.avif 960w,
              /assets/energy-chain-v1-1280.avif 1280w,
              /assets/energy-chain-v1-1672.avif 1672w
            "
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcset="
              /assets/energy-chain-v1-640.webp 640w,
              /assets/energy-chain-v1-960.webp 960w,
              /assets/energy-chain-v1-1280.webp 1280w,
              /assets/energy-chain-v1-1672.webp 1672w
            "
            sizes="100vw"
          />
          <img
            src="/assets/energy-chain.png"
            width="1672"
            height="941"
            fetchpriority="high"
            decoding="async"
            alt="Cadena operativa de energia con pozo, ductos, refineria y mercado"
          />
        </picture>
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="page-inner hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">YPF energia argentina</span>
            <h1>YPF BI Playbook</h1>
            <p class="hero-kicker">Ingenieria Power BI/Fabric desde PRD hasta operacion.</p>
            <p class="hero-text">
              Una guia viva para convertir necesidades de negocio en productos analiticos confiables:
              PRD, Spec, ETL, modelo semantico, DAX, seguridad, UX, Fabric, CI/CD y monitoreo.
            </p>
            <div class="hero-actions">
              <a class="button" href="/diccionario" data-route>
                ${icon("book")}
                Explorar diccionario
              </a>
              <a class="button secondary" href="/roadmap" data-route>
                ${icon("route")}
                Ver roadmap
              </a>
            </div>
          </div>

          <aside class="visual-summary" aria-label="Resumen del playbook">
            <h2>Base clara para crecer sin sobredisenar.</h2>
            <p>Contenido local editable con foco en decisiones, metricas, gobierno y adopcion.</p>
            <div class="stat-grid" aria-label="Metricas del playbook">
              <div class="stat">
                <strong>${dictionaryTerms.length}</strong>
                <span>terminos iniciales</span>
              </div>
              <div class="stat">
                <strong>${roadmapPhases.length}</strong>
                <span>gates de entrega</span>
              </div>
              <div class="stat">
                <strong>${guideSections.length}</strong>
                <span>capitulos guia</span>
              </div>
            </div>
          </aside>
        </div>
        <div class="hero-tabs" aria-hidden="true">
          <span class="active"></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section class="quote-band page-inner">
        ${icon("quote")}
        <strong>Un buen producto BI no empieza en Power BI. Empieza en una decision de negocio clara.</strong>
      </section>

      ${renderWorkflowLab()}

      <div class="section-title page-inner">
        <div>
          <h2>Recursos principales</h2>
          <p>Entradas directas para producto, ingenieria, delivery, consulta diaria y futuras automatizaciones.</p>
        </div>
      </div>

      <section class="feature-grid page-inner" aria-label="Secciones principales">
        <article class="feature-card">
          <span class="feature-icon">${icon("layers")}</span>
          <h3>Guia Power BI/Fabric</h3>
          <p>Ciclo completo: PRD, Spec, ETL, VertiPaq, DAX, seguridad, UX, Direct Lake, CI/CD y operacion.</p>
          <a class="button small" href="/guia-power-bi" data-route>
            Ver guia
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("book")}</span>
          <h3>Diccionario BI</h3>
          <p>Conceptos clave de producto, Fabric, Power BI, modelado, DAX, performance, gobierno y operacion.</p>
          <a class="button small secondary" href="/diccionario" data-route>
            Explorar diccionario
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("route")}</span>
          <h3>Roadmap BI</h3>
          <p>Gates de entrega desde PRD/Spec hasta produccion monitoreada y mejora continua.</p>
          <a class="button small secondary" href="/roadmap" data-route>
            Ver roadmap
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("code")}</span>
          <h3>Proyecto Power BI</h3>
          <p>Estructura de proyecto con PRD, Spec, PBIP, TMDL, Git, documentacion y scripts.</p>
          <a class="button small secondary" href="/proyecto-power-bi" data-route>
            Ver proyecto
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("folder")}</span>
          <h3>Librerias y agentes</h3>
          <p>Inventario documentado de MCPs, bases, cloud, agentes, sandboxes, APIs y frameworks para futuras specs.</p>
          <a class="button small secondary" href="/librerias" data-route>
            Ver librerias
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("terminal")}</span>
          <h3>Atajos Power BI</h3>
          <p>Resumen navegable de atajos del PDF subido al repo para trabajar mas rapido en Desktop.</p>
          <a class="button small secondary" href="/atajos" data-route>
            Ver atajos
            ${icon("arrowRight")}
          </a>
        </article>
      </section>

      <section class="story-band">
        <div class="page-inner story-content">
          <span class="eyebrow">energia para decidir</span>
          <h2>De pedir un reporte a construir un producto analitico serio.</h2>
          <p>
            La diferencia esta en separar el PRD de la Spec, modelar con criterio, versionar cambios
            y operar la solucion cuando ya esta en manos del negocio.
          </p>
        </div>
      </section>

      <div class="section-title page-inner">
        <div>
          <h2>Los gates que sostienen un proyecto BI</h2>
          <p>El roadmap arranca en PRD/Spec y termina cuando produccion esta monitoreada.</p>
        </div>
      </div>

      <section class="mini-roadmap page-inner" aria-label="Primeras fases del roadmap">
        ${roadmapPhases
          .map(
            (phase) => `
              <article class="mini-step">
                <span>${phase.id}</span>
                <strong>${escapeHtml(phase.title)}</strong>
              </article>
            `,
          )
          .join("")}
      </section>
    </section>
  `;
}

function renderWorkflowLab() {
  const cases = [
    ["Producto", "Define decision, KPI, usuario y alcance antes de construir."],
    ["Ingenieria", "Convierte la Spec en fuentes, modelo, DAX, pruebas y release."],
    ["Operacion", "Monitorea refresh, capacidad, uso real e incidentes."],
  ];
  const nodes = [
    { title: "PRD", text: "por que, para quien y exito", iconName: "clipboard", tone: "orange" },
    { title: "Spec", text: "arquitectura y reglas tecnicas", iconName: "code", tone: "blue" },
    { title: "Datos", text: "fuentes, M y calidad", iconName: "layers", tone: "cyan" },
    { title: "Modelo", text: "estrella, VertiPaq y DAX", iconName: "gitBranch", tone: "green" },
    { title: "UX + seguridad", text: "RLS, OLS y lectura guiada", iconName: "shield", tone: "violet" },
    { title: "Release", text: "PBIP, Git y pipelines", iconName: "terminal", tone: "yellow" },
    { title: "Operacion", text: "capacidad, refresh y mejora", iconName: "gauge", tone: "orange" },
  ];

  return `
    <section class="workflow-lab page-inner" aria-label="Flujo inmersivo de proyecto BI">
      <div class="workflow-copy">
        <span class="flow-chip">workflow vivo</span>
        <h2>Que cada paso del proyecto se pueda ver, revisar y controlar.</h2>
        <p>
          La experiencia toma la logica de un canvas visual: cada decision deja una huella, cada etapa tiene
          salida clara y el flujo completo se entiende sin perder la profundidad tecnica.
        </p>
        <div class="workflow-case-list" aria-label="Carriles de trabajo">
          ${cases
            .map(
              ([title, text], index) => `
                <article class="workflow-case ${index === 0 ? "active" : ""}">
                  <strong>${escapeHtml(title)}</strong>
                  <span>${escapeHtml(text)}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="workflow-board" aria-label="Canvas del flujo BI">
        <div class="workflow-board-head">
          <span class="flow-chip">BI flow</span>
          <strong>De necesidad a producto operativo</strong>
        </div>
        <div class="workflow-chain">
          ${nodes
            .map(
              (node, index) => `
                <article class="workflow-node-card tone-${node.tone}" style="--node-order:${index}">
                  <span class="node-icon">${icon(node.iconName)}</span>
                  <strong>${escapeHtml(node.title)}</strong>
                  <small>${escapeHtml(node.text)}</small>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="workflow-output">
          <span>${icon("spark")}</span>
          <div>
            <strong>Resultado esperable</strong>
            <p>Menos retrabajo, mas trazabilidad y una experiencia de BI que acompana la decision real.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderDictionaryPage() {
  appRoot.innerHTML = `
    <section class="page tool-page dictionary-layout">
      <header class="page-heading page-inner">
        <span class="eyebrow">Glosario operativo</span>
        <h1>Diccionario BI</h1>
        <p class="lede">Conceptos esenciales para hablar el mismo idioma entre negocio, datos y Power BI.</p>
      </header>

      <section class="control-panel page-inner" aria-label="Filtros del diccionario">
        <div class="search-row">
          <label class="search-input">
            ${icon("search")}
            <input
              id="dictionarySearch"
              type="search"
              value="${escapeHtml(dictionaryState.query)}"
              placeholder="Buscar por termino, categoria o definicion"
              autocomplete="off"
              aria-label="Buscar terminos"
            />
          </label>
          <div class="result-count" id="dictionaryCount"></div>
        </div>
        <div class="chip-row" aria-label="Categorias">
          ${["Todas", ...dictionaryCategories]
            .map(
              (category) => `
                <button
                  class="chip ${dictionaryState.category === category ? "active" : ""}"
                  type="button"
                  data-category="${escapeHtml(category)}"
                >
                  ${escapeHtml(category)}
                </button>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="term-grid page-inner" id="dictionaryResults" aria-label="Terminos BI"></section>
    </section>
  `;

  document.querySelector("#dictionarySearch").addEventListener("input", (event) => {
    dictionaryState.query = event.target.value;
    renderDictionaryResults();
  });

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      dictionaryState.category = button.dataset.category;
      document.querySelectorAll("[data-category]").forEach((item) => {
        item.classList.toggle("active", item.dataset.category === dictionaryState.category);
      });
      renderDictionaryResults();
    });
  });

  renderDictionaryResults();
}

function renderGuidePage() {
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">Guia de ingenieria BI</span>
        <h1>Power BI y Microsoft Fabric</h1>
        <p class="lede">
          Un ciclo de vida completo para productos analiticos: empieza con PRD y Spec,
          sigue con datos, modelo, DAX, seguridad y UX, y termina en CI/CD, monitoreo y mejora continua.
        </p>
      </header>

      <section class="prd-panel page-inner">
        <div class="prd-copy">
          <span class="flow-chip">antes de construir</span>
          <h2>PRD primero. Spec despues. Desarrollo con menos ruido.</h2>
          <p>
            El PRD ordena el problema, los usuarios y el exito esperado. La Spec convierte esa
            direccion en una arquitectura ejecutable. Cuando se mezclan, nadie sabe si esta
            discutiendo negocio o implementacion.
          </p>
        </div>
        <div class="comparison-table" role="table" aria-label="Comparacion PRD y Spec">
          <div class="comparison-row head" role="row">
            <span>Caracteristica</span>
            <span>PRD</span>
            <span>Spec</span>
          </div>
          ${prdSpecComparison
            .map(
              (item) => `
                <div class="comparison-row" role="row">
                  <strong>${escapeHtml(item.characteristic)}</strong>
                  <span data-label="PRD">${escapeHtml(item.prd)}</span>
                  <span data-label="Spec">${escapeHtml(item.spec)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="guide-grid page-inner" aria-label="Capitulos de la guia Power BI y Fabric">
        ${guideSections.map(renderGuideSectionCard).join("")}
      </section>

      <section class="readiness-panel page-inner">
        <div>
          <span class="eyebrow">checklist</span>
          <h2>Antes de poner en produccion</h2>
          <p>
            Esta lista funciona como control simple para no publicar reportes que todavia no tienen
            producto, modelo, seguridad u operacion suficientemente claros.
          </p>
        </div>
        <ul>
          ${readinessChecklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
    </section>
  `;
}

function renderGuideSectionCard(section) {
  return `
    <article class="guide-card">
      <div class="guide-card-head">
        <span>${escapeHtml(section.eyebrow)}</span>
        <h2>${escapeHtml(section.title)}</h2>
      </div>
      <p>${escapeHtml(section.summary)}</p>
      <div class="guide-card-grid">
        <div>
          <h3>Practicas clave</h3>
          <ul>${section.practices.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>Entregables</h3>
          <ul>${section.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="risk-note">
        <strong>Riesgo si se saltea:</strong> ${escapeHtml(section.risk)}
      </div>
    </article>
  `;
}

function renderToolingPage() {
  const totalItems = toolingGroups.reduce((total, group) => total + group.items.length, 0);
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">Documentacion tecnica</span>
        <h1>Librerias, agentes y MCPs</h1>
        <p class="lede">
          Inventario para futuras specs: bases de datos, nube, desarrollo, busqueda, observabilidad,
          colaboracion, IA, agentes, sandboxes y frameworks. No se instala todo por defecto; se elige con criterio.
        </p>
      </header>

      <section class="shortcut-hero page-inner">
        <div>
          <span class="flow-chip">inventario del repo</span>
          <h2>${escapeHtml(toolingDocs.title)}</h2>
          <p>${toolingGroups.length} familias y ${totalItems} herramientas documentadas para evaluar cuando una Spec lo justifique.</p>
        </div>
        <a class="button" href="/${toolingDocs.source}" target="_blank" rel="noreferrer">
          ${icon("book")}
          Abrir documentacion
        </a>
      </section>

      <section class="tooling-grid page-inner" aria-label="Catalogo de librerias y agentes">
        ${toolingGroups.map(renderToolingGroup).join("")}
      </section>
    </section>
  `;
}

function renderToolingGroup(group) {
  return `
    <article class="tooling-card">
      <div class="tooling-card-head">
        <h2>${escapeHtml(group.group)}</h2>
        <span>${group.items.length}</span>
      </div>
      <p>${escapeHtml(group.description)}</p>
      <div class="tooling-tags">
        ${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </article>
  `;
}

function getFilteredTerms() {
  const query = normalizeText(dictionaryState.query.trim());
  return dictionaryTerms.filter((term) => {
    const matchesCategory = dictionaryState.category === "Todas" || term.category === dictionaryState.category;
    if (!matchesCategory) return false;
    if (!query) return true;

    const haystack = normalizeText(
      [
        term.term,
        term.category,
        term.definition,
        term.whyItMatters,
        term.example,
        term.risk,
      ].join(" "),
    );
    return haystack.includes(query);
  });
}

function renderDictionaryResults() {
  const results = getFilteredTerms();
  const count = document.querySelector("#dictionaryCount");
  const container = document.querySelector("#dictionaryResults");
  count.textContent = `${results.length} resultado${results.length === 1 ? "" : "s"}`;

  if (!results.length) {
    container.className = "page-inner";
    container.innerHTML = `
      <div class="empty-state">
        ${icon("filter")}
        <h2>No hay terminos para esa busqueda</h2>
        <p>Proba con otra palabra, limpia el filtro o revisa una categoria mas amplia.</p>
      </div>
    `;
    requestAnimationFrame(enhanceInteractiveSurfaces);
    return;
  }

  container.className = "term-grid page-inner";
  container.innerHTML = results
    .map(
      (term) => `
        <article class="term-card">
          <div class="card-topline">
            <h2>${escapeHtml(term.term)}</h2>
            <span class="badge">${escapeHtml(term.category)}</span>
          </div>
          <p class="term-definition">${escapeHtml(term.definition)}</p>
          <dl class="detail-list">
            <div>
              <dt>Por que importa</dt>
              <dd>${escapeHtml(term.whyItMatters)}</dd>
            </div>
            <div>
              <dt>Ejemplo</dt>
              <dd>${escapeHtml(term.example)}</dd>
            </div>
            <div>
              <dt>Riesgo de entenderlo mal</dt>
              <dd>${escapeHtml(term.risk)}</dd>
            </div>
          </dl>
        </article>
      `,
    )
    .join("");
  requestAnimationFrame(enhanceInteractiveSurfaces);
}

function renderRoadmapPage() {
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">Roadmap de ingenieria</span>
        <h1>Roadmap BI/Fabric</h1>
        <p class="lede">
          Un recorrido con gates claros: PRD, Spec, datos, modelo, DAX, seguridad, UX,
          plataforma, CI/CD y operacion. La idea no es burocracia: es construir con menos retrabajo.
        </p>
      </header>

      ${renderBiFlowCanvas()}

      ${renderRoadmapPipeline()}

      <section class="roadmap-toolbar page-inner" aria-label="Leyenda del roadmap">
        <div class="result-count">${roadmapPhases.length} gates</div>
        <div class="lane-legend">
          ${Object.entries(laneStyles)
            .map(
              ([lane, style]) => `
                <span class="lane-pill">
                  <span class="lane-dot" style="background:${style.color}"></span>
                  ${escapeHtml(lane)}
                </span>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="timeline page-inner" aria-label="Fases del roadmap BI">
        ${roadmapPhases.map(renderPhaseCard).join("")}
      </section>

      <div class="footer-note page-inner">
        ${icon("shield")}
        <span>No subir informacion confidencial, credenciales ni datos sensibles. El contenido de este MVP es local y editable.</span>
      </div>
    </section>
  `;

  document.querySelectorAll("[data-phase-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      expandedPhase = Number(button.dataset.phaseToggle);
      document.querySelectorAll(".phase-card").forEach((card) => {
        card.classList.toggle("expanded", Number(card.dataset.phase) === expandedPhase);
      });
    });
  });

  document.querySelectorAll("[data-flow-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-flow-tab]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const target = button.dataset.flowTab;
      document.querySelectorAll("[data-flow-node]").forEach((node) => {
        node.classList.toggle("spotlight", node.dataset.flowNode === target);
      });
    });
  });
}

function renderBiFlowCanvas() {
  return `
    <section class="bi-flow-showcase page-inner" aria-label="Flujo BI estilo workflow visual">
      <aside class="flow-rail" aria-label="Escenarios del flujo BI">
        <button class="flow-tab active" type="button" data-flow-tab="prd">
          <strong>PRD</strong>
          <span>Problema, usuario, KPIs y alcance</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="etl">
          <strong>Datos</strong>
          <span>Fuentes, Power Query y folding</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="model">
          <strong>Modelo</strong>
          <span>VertiPaq, estrella y DAX</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="security">
          <strong>Confianza</strong>
          <span>RLS, OLS, gobierno y UX</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="ops">
          <strong>Operacion</strong>
          <span>CI/CD, capacity y monitoreo</span>
        </button>
      </aside>

      <div class="flow-canvas" aria-label="Canvas del proceso BI">
        <div class="flow-canvas-copy">
          <span class="flow-chip">BI model canvas</span>
          <h2>Del PRD a produccion</h2>
          <p>La IA ayuda mas cuando el proyecto deja problema, Spec, modelo, seguridad y operacion por escrito.</p>
        </div>

        <svg class="flow-lines" viewBox="0 0 940 520" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="flowGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <path class="flow-line active" d="M150 236 C220 236 240 236 310 236"></path>
          <path class="flow-line active" d="M500 236 C565 236 585 236 650 236"></path>
          <path class="flow-line active" d="M735 210 C785 118 815 105 865 105"></path>
          <path class="flow-line" d="M735 262 C785 350 815 363 865 363"></path>
          <path class="flow-line dashed" d="M406 285 C374 346 348 370 318 418"></path>
          <path class="flow-line dashed" d="M446 285 C445 348 445 372 445 420"></path>
          <path class="flow-line dashed" d="M488 285 C526 350 556 373 590 420"></path>
          <path class="flow-line dashed" d="M530 285 C614 346 681 370 742 420"></path>
          <circle class="flow-pulse" cx="306" cy="236" r="5"></circle>
          <circle class="flow-pulse delay-1" cx="646" cy="236" r="5"></circle>
          <circle class="flow-pulse delay-2" cx="860" cy="105" r="5"></circle>
        </svg>

        <div class="flow-node trigger spotlight" data-flow-node="prd" style="--x: 13%; --y: 48%;">
          <span class="node-icon cyan">${icon("clipboard")}</span>
          <strong>PRD</strong>
          <small>por que, que y exito</small>
        </div>

        <div class="flow-node agent" data-flow-node="etl" style="--x: 45%; --y: 48%;">
          <span class="node-icon white">${icon("layers")}</span>
          <strong>Spec + ETL</strong>
          <small>fuentes + folding</small>
          <div class="node-ports">
            <span>Fuentes</span>
            <span>Power Query</span>
            <span>Calidad</span>
          </div>
        </div>

        <div class="flow-node decision" data-flow-node="model" style="--x: 69%; --y: 48%;">
          <span class="node-icon green">${icon("gitBranch")}</span>
          <strong>Modelo listo?</strong>
          <small>VertiPaq, DAX, BPA</small>
          <em class="branch-label true">si</em>
          <em class="branch-label false">no</em>
        </div>

        <div class="flow-node output" data-flow-node="security" style="--x: 87%; --y: 20%;">
          <span class="node-icon blue">${icon("route")}</span>
          <strong>Confianza</strong>
          <small>RLS/OLS + UX</small>
        </div>

        <div class="flow-node output" data-flow-node="ops" style="--x: 87%; --y: 70%;">
          <span class="node-icon orange">${icon("route")}</span>
          <strong>Produccion</strong>
          <small>CI/CD + capacity</small>
        </div>

        <div class="flow-orbit" data-flow-node="etl" style="--x: 31%; --y: 82%;">
          <span>${icon("search")}</span>
          <strong>Query Folding</strong>
          <small>pushdown al origen</small>
        </div>

        <div class="flow-orbit" data-flow-node="model" style="--x: 45%; --y: 82%;">
          <span>${icon("gauge")}</span>
          <strong>VertiPaq</strong>
          <small>cardinalidad baja</small>
        </div>

        <div class="flow-orbit" data-flow-node="security" style="--x: 60%; --y: 82%;">
          <span>${icon("book")}</span>
          <strong>3-30-300</strong>
          <small>UX para decidir</small>
        </div>

        <div class="flow-orbit" data-flow-node="ops" style="--x: 76%; --y: 82%;">
          <span>${icon("shield")}</span>
          <strong>PBIP/TMDL</strong>
          <small>Git + releases</small>
        </div>
      </div>
    </section>
  `;
}

function renderRoadmapPipeline() {
  const lanes = Object.keys(laneStyles).map((lane) => ({
    lane,
    style: laneStyles[lane],
    phases: roadmapPhases.filter((phase) => phase.lane === lane),
  }));

  return `
    <section class="roadmap-pipeline page-inner" aria-label="Pipeline estructurado del roadmap BI">
      <div class="pipeline-intro">
        <span class="flow-chip">roadmap por flujo</span>
        <h2>Una secuencia, cinco carriles y gates que ordenan la entrega.</h2>
        <p>
          El proyecto avanza como un sistema: producto define el norte, datos sostienen la respuesta,
          el modelo organiza la logica, UX y seguridad cuidan la adopcion, y delivery mantiene vivo lo publicado.
        </p>
      </div>

      <div class="pipeline-track" aria-label="Secuencia de gates">
        ${roadmapPhases
          .map((phase) => {
            const lane = laneStyles[phase.lane] || { color: "var(--ypf-blue)" };
            return `
              <article class="pipeline-step" style="--lane-color:${lane.color}">
                <span>${phase.id + 1}</span>
                <strong>${escapeHtml(phase.title)}</strong>
                <small>${escapeHtml(phase.gate)}</small>
              </article>
            `;
          })
          .join("")}
      </div>

      <div class="pipeline-lanes" aria-label="Carriles del roadmap">
        ${lanes
          .map(
            ({ lane, style, phases }) => `
              <article class="pipeline-lane-card" style="--lane-color:${style.color}">
                <h3><span></span>${escapeHtml(lane)}</h3>
                <ol>
                  ${phases.map((phase) => `<li><strong>${phase.id + 1}.</strong> ${escapeHtml(phase.title)}</li>`).join("")}
                </ol>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProjectPage() {
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">PRD + Spec + PBIP</span>
        <h1>Proyecto de Power BI con Visual Studio</h1>
        <p class="lede">
          Un proyecto Power BI serio no empieza en el PBIX: empieza con un PRD claro, baja a una Spec
          tecnica y recien despues se versiona el modelo como codigo con PBIP, TMDL, Git y scripts.
        </p>
      </header>

      <section class="project-studio page-inner">
        <div class="project-copy">
          <span class="flow-chip">filosofia de trabajo</span>
          <h2>No se trata de documentar por cumplir. Se trata de que negocio, BI e IA trabajen con el mismo mapa.</h2>
          <p>
            En proyectos reales, el problema rara vez es hacer un grafico mas. El problema es no tener claro
            que decision se quiere mejorar, que queda fuera, que datos sostienen la respuesta y como se prueba
            que la solucion funciona. El PRD alinea el producto; la Spec ordena la implementacion.
          </p>
          <div class="hero-actions">
            <a class="button" href="/guia-power-bi" data-route>${icon("layers")} Ver guia</a>
            <a class="button secondary" href="/roadmap" data-route>${icon("route")} Ver roadmap</a>
          </div>
        </div>

        <div class="code-window" aria-label="Estructura sugerida de proyecto Power BI">
          <div class="window-dots"><span></span><span></span><span></span></div>
          <pre><code>proyecto_power_bi/
├─ PRD.md
├─ SPEC.md
├─ README.md
├─ CLAUDE.md
├─ documentacion/
│  ├─ contexto-negocio.md
│  ├─ arquitectura-datos.md
│  ├─ mapa-modelo.md
│  ├─ seguridad-gobierno.md
│  ├─ performance.md
│  └─ diseno-report.md
├─ skills/
│  ├─ dax.md
│  ├─ power-query.md
│  ├─ tmdl.md
│  └─ documentacion.md
├─ Modelo.SemanticModel/
│  └─ definition/
│     ├─ tables/
│     ├─ relationships.tmdl
│     └─ expressions.tmdl
├─ Modelo.Report/
└─ scripts/
   └─ deploy.ps1</code></pre>
          <div class="code-note">
            ${icon("folder")}
            <span>PRD define el producto. Spec define la construccion. PBIP/TMDL vuelve versionable el modelo.</span>
          </div>
        </div>
      </section>

      <section class="quality-grid page-inner" aria-label="Buenas practicas Power BI avanzado">
        ${renderQualityCard("PRD aprobado", "El equipo sabe que problema se resuelve, para quien, con que metrica de exito y que queda fuera del alcance.", ["Historias de usuario", "KPIs y objetivos", "Criterios de aceptacion"])}
        ${renderQualityCard("Spec ejecutable", "La decision de producto se transforma en arquitectura, datos, modelo, DAX, seguridad, UX y pruebas.", ["Fuentes y granularidad", "Reglas tecnicas", "Casos de prueba"])}
        ${renderQualityCard("Modelo como codigo", "PBIP y TMDL permiten revisar cambios, comparar versiones y trabajar con ramas como en software.", ["Git y PRs", "Diffs legibles", "Checklist de release"])}
        ${renderQualityCard("Operacion cuidada", "Produccion implica monitorear refresh, gateways, capacidad, permisos, uso real y backlog de mejoras.", ["Capacity metrics", "Incremental refresh", "Runbook operativo"])}
      </section>

      <section class="pbip-note page-inner">
        <div>
          <span class="eyebrow">modo proyecto</span>
          <h2>PBIP como puente entre producto BI e ingenieria</h2>
          <p>
            Segun la documentacion oficial de Microsoft, Power BI Project permite guardar el reporte y el modelo
            semantico como carpetas con archivos de texto. En ese escenario, Visual Studio Code, Git y la terminal
            dejan de ser herramientas ajenas al BI: pasan a ser parte de una forma mas ordenada de cuidar el modelo,
            siempre apoyadas por PRD y Spec.
          </p>
        </div>
        <ul>
          <li>Separar problema de negocio, requisitos y decisiones tecnicas.</li>
          <li>Revisar diferencias de medidas, relaciones y expresiones.</li>
          <li>Documentar decisiones junto al proyecto, no en un chat perdido.</li>
          <li>Usar IA con reglas y contexto, no como una caja negra.</li>
        </ul>
      </section>
    </section>
  `;
}

function renderQualityCard(title, text, bullets) {
  return `
    <article class="quality-card">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
      <ul>
        ${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderShortcutsPage() {
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">Power BI Desktop</span>
        <h1>Atajos Power BI</h1>
        <p class="lede">
          Un resumen practico del PDF de atajos cargado en el repo. La idea no es memorizar todo:
          es empezar por los que ahorran tiempo todos los dias.
        </p>
      </header>

      <section class="shortcut-hero page-inner">
        <div>
          <span class="flow-chip">recurso local</span>
          <h2>${escapeHtml(shortcutsPdf.title)}</h2>
          <p>${shortcutsPdf.pages} slides por categoria. Guardado en el proyecto y disponible para descargar.</p>
        </div>
        <a class="button" href="/${shortcutsPdf.source}" download>
          ${icon("download")}
          Descargar PDF
        </a>
      </section>

      <section class="shortcut-grid page-inner" aria-label="Atajos de Power BI">
        ${powerBiShortcuts.map(renderShortcutCategory).join("")}
      </section>
    </section>
  `;
}

function renderShortcutCategory(category) {
  return `
    <article class="shortcut-card">
      <div class="shortcut-card-head">
        <h2>${escapeHtml(category.category)}</h2>
        <p>${escapeHtml(category.intro)}</p>
      </div>
      <div class="shortcut-list">
        ${category.items
          .map(
            (item) => `
              <div class="shortcut-row">
                <span>${escapeHtml(item.action)}</span>
                <span class="key-group">${item.keys.map((key) => `<kbd>${escapeHtml(key)}</kbd>`).join("<em>+</em>")}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderPhaseCard(phase) {
  const lane = laneStyles[phase.lane] || { color: "var(--ypf-blue)", badge: "" };
  const isExpanded = phase.id === expandedPhase;
  return `
    <article
      class="phase-card ${isExpanded ? "expanded" : ""}"
      data-phase="${phase.id}"
      style="--lane-color:${lane.color}"
    >
      <div class="phase-index">
        <span class="phase-number">${phase.id}</span>
        <div class="phase-meta">
          <span>${escapeHtml(phase.lane)}</span>
          <span class="badge ${lane.badge}">${escapeHtml(phase.gate)}</span>
        </div>
      </div>
      <h2>${escapeHtml(phase.title)}</h2>
      <p>${escapeHtml(phase.objective)}</p>

      <button class="phase-toggle" type="button" data-phase-toggle="${phase.id}" aria-expanded="${isExpanded}">
        Ver detalle
        ${icon("chevronDown")}
      </button>

      <div class="phase-detail">
        <div class="phase-block">
          <h3>Actividades clave</h3>
          <ul>
            ${phase.keyActivities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="phase-block">
          <h3>Entregables</h3>
          <ul>
            ${phase.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="phase-block">
          <h3>Responsable principal</h3>
          <p>${escapeHtml(phase.owner)}</p>
        </div>
        <div class="risk-note">
          <strong>Riesgo si se saltea:</strong> ${escapeHtml(phase.riskIfSkipped)}
        </div>
      </div>
    </article>
  `;
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-route]");
  if (!link) return;

  const url = new URL(link.href);
  if (url.origin !== window.location.origin) return;

  event.preventDefault();
  navigate(url.pathname);
});

window.addEventListener("popstate", () => renderRoute());

if ("serviceWorker" in navigator && window.location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  });
}

setupAmbientPointer();
renderRoute();
