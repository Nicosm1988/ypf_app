import { dictionaryCategories, dictionaryTerms } from "./data/dictionary.js";
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
  filter:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 3H2l8 9.5V20l4 2v-9.5L22 3z"></path></svg>',
  gauge:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>',
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
};

const routeTitles = {
  "/": "YPF BI Playbook",
  "/diccionario": "Diccionario BI | YPF BI Playbook",
  "/roadmap": "Roadmap BI | YPF BI Playbook",
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
  if (cleanPath === "/diccionario" || cleanPath === "/roadmap") return cleanPath;
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

  renderHomePage();
}

function renderHomePage() {
  const phasePreview = roadmapPhases.slice(0, 4);
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
            <p class="hero-kicker">Diccionario y roadmap operativo para proyectos BI de punta a punta.</p>
            <p class="hero-text">
              Una guia simple para alinear conceptos, procesos y buenas practicas BI. Centraliza un
              diccionario para hablar el mismo idioma y un roadmap para ordenar el trabajo desde la
              necesidad de negocio hasta la adopcion del producto.
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
                <span>fases del roadmap</span>
              </div>
              <div class="stat">
                <strong>7</strong>
                <span>gates operativos</span>
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
          <p>Dos entradas directas para consulta diaria, discovery y delivery BI.</p>
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
          <p>Mapa del proceso completo para construir productos BI desde el intake hasta la operacion.</p>
          <a class="button small secondary" href="/roadmap" data-route>
            Ver roadmap
            ${icon("arrowRight")}
          </a>
        </article>
      </section>

      <section class="story-band">
        <div class="page-inner story-content">
          <span class="eyebrow">energia para decidir</span>
          <h2>Un playbook simple para operar con una misma fuente de lenguaje.</h2>
          <p>
            La estetica acompana el trabajo: mucho aire, jerarquia clara, acentos amarillos y modulos
            pensados para que el equipo encuentre rapido conceptos, fases y criterios de entrega.
          </p>
        </div>
      </section>

      <div class="section-title page-inner">
        <div>
          <h2>De la necesidad a la adopcion</h2>
          <p>El roadmap completo queda en una vista navegable; estas son las primeras decisiones del flujo.</p>
        </div>
      </div>

      <section class="mini-roadmap page-inner" aria-label="Primeras fases del roadmap">
        ${phasePreview
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
        <span class="eyebrow">Proceso punta a punta</span>
        <h1>Roadmap BI</h1>
        <p class="lede">
          Mapa operativo desde la necesidad de negocio hasta la entrega, adopcion y mejora continua.
          En desktop se navega como timeline horizontal; en mobile se apila en vertical.
        </p>
      </header>

      <section class="roadmap-toolbar page-inner" aria-label="Leyenda del roadmap">
        <div class="result-count">${roadmapPhases.length} fases</div>
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
}

function renderPhaseCard(phase) {
  const lane = laneStyles[phase.lane] || laneStyles["Consultoria BI"];
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
