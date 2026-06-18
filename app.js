import { dictionaryCategories, dictionaryTerms } from "./data/dictionary.js";
import { powerBiShortcuts, shortcutsPdf } from "./data/powerbiShortcuts.js";
import { laneStyles, roadmapPhases } from "./data/roadmap.js";

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
  "/diccionario": "Diccionario BI | YPF BI Playbook",
  "/roadmap": "Roadmap BI | YPF BI Playbook",
  "/proyecto-power-bi": "Proyecto de Power BI con Visual Studio | YPF BI Playbook",
  "/atajos": "Atajos Power BI | YPF BI Playbook",
};

const dictionaryState = {
  query: "",
  category: "Todas",
};

let expandedPhase = 0;

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
  if (["/diccionario", "/roadmap", "/proyecto-power-bi", "/atajos"].includes(cleanPath)) return cleanPath;
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
    return;
  }

  if (route === "/roadmap") {
    renderRoadmapPage();
    return;
  }

  if (route === "/proyecto-power-bi") {
    renderProjectPage();
    return;
  }

  if (route === "/atajos") {
    renderShortcutsPage();
    return;
  }

  renderHomePage();
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
        <p class="hero-kicker">Diccionario, roadmap y practica de trabajo para proyectos BI mantenibles.</p>
        <p class="hero-text">
              Una guia simple para alinear conceptos, procesos y buenas practicas BI. Centraliza un
              diccionario para hablar el mismo idioma, un roadmap de cinco pilares y una forma de
              trabajar modelos Power BI con mas criterio, versionado y foco.
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
                <span>pilares de trabajo</span>
              </div>
              <div class="stat">
                <strong>${powerBiShortcuts.length}</strong>
                <span>familias de atajos</span>
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

      <div class="section-title page-inner">
        <div>
          <h2>Recursos principales</h2>
          <p>Entradas directas para consulta diaria, discovery, desarrollo y delivery BI.</p>
        </div>
      </div>

      <section class="feature-grid page-inner" aria-label="Secciones principales">
        <article class="feature-card">
          <span class="feature-icon">${icon("book")}</span>
          <h3>Diccionario BI</h3>
          <p>Conceptos clave de negocio, datos, Power BI, modelado, KPIs, gobierno y adopcion.</p>
          <a class="button small" href="/diccionario" data-route>
            Explorar diccionario
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("route")}</span>
          <h3>Roadmap BI</h3>
          <p>Contexto, mapa, reglas, skills y diseno: las cinco piezas para construir modelos que se puedan sostener.</p>
          <a class="button small secondary" href="/roadmap" data-route>
            Ver roadmap
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("code")}</span>
          <h3>Proyecto Power BI</h3>
          <p>Una forma de trabajar el modelo con archivos, Git, terminal y Visual Studio Code sin perder criterio de negocio.</p>
          <a class="button small secondary" href="/proyecto-power-bi" data-route>
            Ver proyecto
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
          <h2>De hacer graficos a construir productos BI mantenibles.</h2>
          <p>
            La diferencia no esta en tener mas visuales. Esta en dejar contexto, modelo, reglas,
            documentacion y diseno para que otra persona pueda seguir sin tener que adivinar.
          </p>
        </div>
      </section>

      <div class="section-title page-inner">
        <div>
          <h2>Las cinco piezas que sostienen el modelo</h2>
          <p>El roadmap ahora arranca donde suelen romperse los proyectos reales: cuando el modelo crece y hay que mantenerlo.</p>
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
}

function renderRoadmapPage() {
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">Modelo mantenible</span>
        <h1>Roadmap BI</h1>
        <p class="lede">
          Antes de pedirle ayuda a una IA, a una persona nueva o al propio equipo de BI, el proyecto
          necesita una base compartida: contexto, mapa, reglas, skills y diseno.
        </p>
      </header>

      ${renderBiFlowCanvas()}

      <section class="roadmap-toolbar page-inner" aria-label="Leyenda del roadmap">
        <div class="result-count">${roadmapPhases.length} pilares</div>
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
        <button class="flow-tab active" type="button" data-flow-tab="context">
          <strong>Contexto</strong>
          <span>Modelo, usuarios, negocio y decisiones</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="map">
          <strong>Mapa</strong>
          <span>Estrella, granularidad y relaciones</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="rules">
          <strong>Reglas</strong>
          <span>DAX, naming, carpetas y patrones</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="skills">
          <strong>Skills</strong>
          <span>Manuales de trabajo por dominio</span>
        </button>
        <button class="flow-tab" type="button" data-flow-tab="design">
          <strong>Diseno</strong>
          <span>Diagramas, bocetos y experiencia</span>
        </button>
      </aside>

      <div class="flow-canvas" aria-label="Canvas del proceso BI">
        <div class="flow-canvas-copy">
          <span class="flow-chip">BI model canvas</span>
          <h2>La IA no adivina el negocio</h2>
          <p>Si el proyecto deja estas cinco piezas visibles, el equipo trabaja mejor y la IA ayuda con menos ruido.</p>
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

        <div class="flow-node trigger spotlight" data-flow-node="context" style="--x: 13%; --y: 48%;">
          <span class="node-icon cyan">${icon("clipboard")}</span>
          <strong>Contexto</strong>
          <small>para quien y que decision</small>
        </div>

        <div class="flow-node agent" data-flow-node="map" style="--x: 45%; --y: 48%;">
          <span class="node-icon white">${icon("layers")}</span>
          <strong>Mapa semantico</strong>
          <small>estrella + granularidad</small>
          <div class="node-ports">
            <span>Hechos</span>
            <span>Dims</span>
            <span>Relaciones</span>
          </div>
        </div>

        <div class="flow-node decision" data-flow-node="rules" style="--x: 69%; --y: 48%;">
          <span class="node-icon green">${icon("gitBranch")}</span>
          <strong>Reglas claras?</strong>
          <small>naming, DAX, carpetas</small>
          <em class="branch-label true">si</em>
          <em class="branch-label false">no</em>
        </div>

        <div class="flow-node output" data-flow-node="design" style="--x: 87%; --y: 20%;">
          <span class="node-icon blue">${icon("route")}</span>
          <strong>Diseno del report</strong>
          <small>boceto y flujo de lectura</small>
        </div>

        <div class="flow-node output" data-flow-node="rules" style="--x: 87%; --y: 70%;">
          <span class="node-icon orange">${icon("route")}</span>
          <strong>Volver a reglas</strong>
          <small>ajuste antes de escalar</small>
        </div>

        <div class="flow-orbit" data-flow-node="map" style="--x: 31%; --y: 82%;">
          <span>${icon("search")}</span>
          <strong>Granularidad</strong>
          <small>nivel de detalle</small>
        </div>

        <div class="flow-orbit" data-flow-node="rules" style="--x: 45%; --y: 82%;">
          <span>${icon("gauge")}</span>
          <strong>Convenciones</strong>
          <small>DAX + Power Query</small>
        </div>

        <div class="flow-orbit" data-flow-node="skills" style="--x: 60%; --y: 82%;">
          <span>${icon("book")}</span>
          <strong>Skills</strong>
          <small>manuales por dominio</small>
        </div>

        <div class="flow-orbit" data-flow-node="design" style="--x: 76%; --y: 82%;">
          <span>${icon("shield")}</span>
          <strong>Diseno</strong>
          <small>diagramas + UX</small>
        </div>
      </div>
    </section>
  `;
}

function renderProjectPage() {
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">PBIP + TMDL + Git</span>
        <h1>Proyecto de Power BI con Visual Studio</h1>
        <p class="lede">
          Cuando el modelo deja de ser un archivo cerrado y pasa a vivir como texto, el trabajo cambia:
          se puede revisar, versionar, comparar y mejorar con el mismo cuidado con el que se cuida codigo.
        </p>
      </header>

      <section class="project-studio page-inner">
        <div class="project-copy">
          <span class="flow-chip">filosofia de trabajo</span>
          <h2>No se trata de reemplazar criterio por IA. Se trata de darle contexto para que ayude mejor.</h2>
          <p>
            En proyectos reales, el problema rara vez es hacer un grafico mas. El problema es que el modelo crece,
            las medidas se duplican, las relaciones empiezan a ser dificiles de explicar y cada cambio se vuelve
            una pequena investigacion. Trabajar con una estructura clara permite que el equipo y la IA colaboren
            sin romper la confianza del negocio.
          </p>
          <div class="hero-actions">
            <a class="button" href="/roadmap" data-route>${icon("route")} Ver los 5 pilares</a>
            <a class="button secondary" href="/atajos" data-route>${icon("terminal")} Ver atajos</a>
          </div>
        </div>

        <div class="code-window" aria-label="Estructura sugerida de proyecto Power BI">
          <div class="window-dots"><span></span><span></span><span></span></div>
          <pre><code>proyecto_power_bi/
├─ README.md
├─ CLAUDE.md
├─ documentacion/
│  ├─ contexto.md
│  ├─ mapa-modelo.md
│  ├─ reglas-dax.md
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
            <span>PBIP guarda el proyecto como carpetas y archivos; TMDL vuelve legible el modelo semantico.</span>
          </div>
        </div>
      </section>

      <section class="quality-grid page-inner" aria-label="Buenas practicas Power BI avanzado">
        ${renderQualityCard("Modelo en estrella", "Menos relaciones raras, menos filtros ambiguos y mas confianza cuando alguien pregunta de donde sale un numero.", ["Hechos y dimensiones claras", "Granularidad escrita", "Relaciones revisadas"])}
        ${renderQualityCard("Medidas organizadas", "No alcanza con que una medida funcione. Tiene que poder encontrarse, entenderse y reutilizarse dentro de seis meses.", ["Carpetas por dominio", "Medidas base y derivadas", "Diccionario de formulas"])}
        ${renderQualityCard("Reportes guiados", "Un informe saturado cansa. Uno guiado acompana: muestra lo importante primero y deja el detalle para cuando hace falta.", ["Marcadores", "Panel de seleccion", "Jerarquia visual"])}
        ${renderQualityCard("Publicacion cuidada", "Produccion no es publicar y esperar. Es controlar refresh, credenciales, gateways, seguridad y performance.", ["Refresh monitoreado", "RLS si aplica", "Modelo hibrido con criterio"])}
      </section>

      <section class="pbip-note page-inner">
        <div>
          <span class="eyebrow">modo proyecto</span>
          <h2>PBIP como puente entre BI e ingenieria</h2>
          <p>
            Segun la documentacion oficial de Microsoft, Power BI Project permite guardar el reporte y el modelo
            semantico como carpetas con archivos de texto. En ese escenario, Visual Studio Code, Git y la terminal
            dejan de ser herramientas ajenas al BI: pasan a ser parte de una forma mas ordenada de cuidar el modelo.
          </p>
        </div>
        <ul>
          <li>Versionar cambios antes de tocar un modelo productivo.</li>
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

renderRoute();
