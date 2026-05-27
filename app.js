const icons = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 6 9 17l-5-5"></path></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12h14"></path></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 12h-4l-3 8L9 4l-3 8H2"></path></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1"></circle></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M8.5 14.5A3.5 3.5 0 0 0 12 18a3.5 3.5 0 0 0 3.5-3.5c0-1.7-1-2.9-2.1-4.2C12.1 8.8 10.8 7.2 11.2 5c-3 1.9-5.2 4.7-5.2 8a6 6 0 0 0 12 0c0-2.3-1.1-4.3-2.8-5.5"></path></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 3v18h18"></path><path d="m7 15 4-4 3 3 5-7"></path></svg>',
  note: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 4h16v16H4z"></path><path d="M8 8h8"></path><path d="M8 12h8"></path><path d="M8 16h5"></path></svg>',
};

const storageKey = "oilGasStudyDesk.v1";

const focusBank = {
  0: ["Cadena de valor", "Decisiones ejecutivas", "Datos oficiales", "Fuentes base"],
  1: ["Activos y procesos", "Margen por eslabon", "Cuellos de botella", "Tablero integrado"],
  2: ["Reservas y recursos", "Pozo y completacion", "Declino y EUR", "Facilities y SCADA"],
  3: ["Factory mode", "Pad drilling", "Breakeven shale", "US shale vs Vaca Muerta"],
  4: ["Gathering y ductos", "Linepack", "Take-or-pay", "Evacuacion Vaca Muerta"],
  5: ["Unidades de refinacion", "Blending", "Margen de refinacion", "Calidad e inventarios"],
  6: ["Benchmarks", "Netback", "Paridades", "Hedging"],
  7: ["NOCs regionales", "Riesgo politico", "Infraestructura", "Comparacion Argentina"],
  8: ["Provincias", "Regalias", "Balanza energetica", "Restriccion externa"],
  9: ["Roca", "Pozo", "Infraestructura", "Exportacion"],
  10: ["Portafolio capex", "Disciplina financiera", "Integracion", "Gobierno de datos"],
  11: ["Definicion", "Formula", "Fuente de datos", "Errores comunes"],
  12: ["Lakehouse", "Modelo semantico", "Data governance", "IA industrial"],
  13: ["Usuarios", "Alertas", "Cortes analiticos", "Modelo semantico"],
  14: ["Respuestas ejecutivas", "Riesgo regulatorio", "LNG", "Valor de IA"],
  15: ["Ruta semanal", "Lectura activa", "Repaso", "Criterio propio"],
};

const cards = [
  {
    module: 1,
    tag: "Cadena de valor",
    q: "Que diferencia hay entre producir un barril y monetizarlo?",
    a: "Producir es sacar volumen del subsuelo; monetizar es venderlo con especificacion, transporte, precio neto, contrato, cobro y riesgo controlado.",
  },
  {
    module: 2,
    tag: "Reservas",
    q: "Que separa recursos de reservas?",
    a: "Las reservas son volumen recuperable comercialmente bajo condiciones tecnicas, economicas y regulatorias; los recursos tienen menor certeza o aun no son comerciales.",
  },
  {
    module: 2,
    tag: "EUR",
    q: "Por que EUR no debe confundirse con produccion inicial?",
    a: "El EUR estima recuperacion total del pozo; la produccion inicial puede verse afectada por choke, restricciones, diseno de completacion y no captura todo el declino.",
  },
  {
    module: 3,
    tag: "Shale",
    q: "Por que el shale se gestiona como una fabrica?",
    a: "Porque el valor aparece por repeticion de pads, curvas tipo, aprendizaje operativo, contratos de servicios y reduccion sistematica de costos y tiempos.",
  },
  {
    module: 3,
    tag: "Breakeven",
    q: "Que variables mueven el breakeven shale?",
    a: "EUR, costo por pozo, costo por etapa, lifting, transporte, precio realizado, impuestos, retenciones, tipo de cambio, costo de capital y disponibilidad midstream.",
  },
  {
    module: 4,
    tag: "Midstream",
    q: "Como limita un ducto lleno a Vaca Muerta?",
    a: "Obliga a cerrar pozos, bajar produccion, vender con descuento, mover por rutas mas caras o demorar nuevos pads aunque la roca sea atractiva.",
  },
  {
    module: 4,
    tag: "Linepack",
    q: "Que es linepack?",
    a: "Es gas almacenado fisicamente dentro de un gasoducto por presion; da flexibilidad diaria pero no reemplaza almacenamiento estacional.",
  },
  {
    module: 5,
    tag: "Refinacion",
    q: "Que es el margen de refinacion?",
    a: "Es el valor de los productos obtenidos menos costo de crudo y costos variables como energia, hidrogeno, catalizadores y logistica.",
  },
  {
    module: 5,
    tag: "Blending",
    q: "Por que blending es una decision economica?",
    a: "Porque mezcla corrientes para cumplir calidad al menor costo, capturando valor de productos sin sobrerrefinar ni generar offspec.",
  },
  {
    module: 6,
    tag: "Trading",
    q: "Que es netback?",
    a: "Precio final menos flete, terminal, seguros, calidad, impuestos, retenciones, financiamiento y otros costos hasta el punto de realizacion.",
  },
  {
    module: 8,
    tag: "Argentina",
    q: "Por que Vaca Muerta impacta la macro argentina?",
    a: "Puede reducir importaciones, generar exportaciones, atraer capex, aportar regalias e impuestos y mejorar disponibilidad de dolares.",
  },
  {
    module: 9,
    tag: "Vaca Muerta",
    q: "Que hay que separar al analizar Vaca Muerta?",
    a: "Potencial geologico, capacidad productiva real, infraestructura disponible, mercado, precio neto, financiamiento y estabilidad regulatoria.",
  },
  {
    module: 10,
    tag: "YPF",
    q: "Que tension central enfrenta YPF?",
    a: "Debe actuar con disciplina de capital y, al mismo tiempo, cumplir un rol estrategico de abastecimiento y desarrollo energetico nacional.",
  },
  {
    module: 11,
    tag: "KPI",
    q: "Que error comun tiene el BOE?",
    a: "Permite comparar energia, pero no implica que gas y crudo tengan el mismo margen, precio neto o restriccion comercial.",
  },
  {
    module: 12,
    tag: "Datos",
    q: "Que diferencia hay entre dashboard y decision product?",
    a: "Un dashboard muestra informacion; un decision product combina dato certificado, contexto, alerta, responsable y accion operativa o ejecutiva.",
  },
  {
    module: 13,
    tag: "Power BI",
    q: "Por que es critico el modelo semantico?",
    a: "Porque evita discusiones de 'mi numero vs tu numero' y certifica definiciones de volumen, margen, costo, emisiones y caja.",
  },
];

const quiz = [
  {
    module: 1,
    q: "Cual es la pregunta ejecutiva central de una petrolera integrada?",
    options: [
      "Como convertir produccion fisica en valor neto, caja y opcion estrategica.",
      "Como maximizar volumen sin considerar precio.",
      "Como reducir todos los inventarios a cero.",
      "Como separar upstream de downstream para que no se hablen.",
    ],
    answer: 0,
    why: "La integracion se justifica cuando conecta volumen, margen, riesgo, caja e infraestructura.",
  },
  {
    module: 2,
    q: "Que significa P1 en reservas?",
    options: [
      "Reservas probadas.",
      "Recursos prospectivos.",
      "Produccion inicial de 1 dia.",
      "Primer precio de venta.",
    ],
    answer: 0,
    why: "P1 refiere a reservas probadas; P2 agrega probables y P3 agrega posibles.",
  },
  {
    module: 3,
    q: "Que condicion vuelve repetible al shale?",
    options: [
      "Pad drilling, curva tipo, datos y aprendizaje de completacion.",
      "Un unico pozo vertical de gran caudal.",
      "Evitar toda estandarizacion.",
      "Depender solo de precio alto.",
    ],
    answer: 0,
    why: "El shale escala como una fabrica cuando se repite y mejora el diseno pozo por pozo.",
  },
  {
    module: 4,
    q: "Que contrato reduce riesgo de capacidad para un productor?",
    options: ["Capacidad firme take-or-pay.", "Venta spot sin reserva.", "Flete no nominado.", "Capacidad interrumpible unica."],
    answer: 0,
    why: "La capacidad firme da prioridad, aunque normalmente exige pago aun si no se usa.",
  },
  {
    module: 5,
    q: "Que unidad ayuda a remover azufre en refineria?",
    options: ["Hidrotratamiento.", "Tanque de producto terminado.", "Medicion fiscal.", "Pad drilling."],
    answer: 0,
    why: "El hidrotratamiento usa hidrogeno para cumplir especificaciones ambientales y de calidad.",
  },
  {
    module: 6,
    q: "Por que Brent alto no garantiza rentabilidad local?",
    options: [
      "Porque importa el precio realizado neto de calidad, flete, impuestos, regulacion y tipo de cambio.",
      "Porque Brent solo aplica a gas seco.",
      "Porque todos los crudos valen exactamente lo mismo.",
      "Porque el netback nunca cambia.",
    ],
    answer: 0,
    why: "La empresa captura netback, no el benchmark bruto.",
  },
  {
    module: 8,
    q: "Quien tiene el dominio originario de los recursos hidrocarburiferos provinciales en Argentina?",
    options: ["Las provincias.", "Solo las refinerias.", "Los traders internacionales.", "Las estaciones de servicio."],
    answer: 0,
    why: "Las provincias otorgan concesiones y cobran regalias, mientras Nacion regula otras dimensiones clave.",
  },
  {
    module: 9,
    q: "Cual es una restriccion comercial tipica del gas de Vaca Muerta?",
    options: ["Estacionalidad de demanda y falta de salida firme.", "Ausencia total de roca generadora.", "Imposibilidad fisica de compresion.", "Falta de uso industrial global."],
    answer: 0,
    why: "El gas necesita demanda, transporte, almacenamiento o LNG para monetizarse todo el ano.",
  },
  {
    module: 10,
    q: "Que KPI del directorio conecta reservas y sostenibilidad del negocio?",
    options: ["Reserve replacement ratio.", "Color del surtidor.", "Numero de reuniones.", "Cantidad de logos."],
    answer: 0,
    why: "Si una compania no repone reservas, consume su base futura de produccion.",
  },
  {
    module: 12,
    q: "Que capa del lakehouse contiene datos certificados para decision?",
    options: ["Gold.", "Bronze crudo sin validar.", "Papel operativo.", "Captura manual aislada."],
    answer: 0,
    why: "Gold contiene data products gobernados y listos para consumo ejecutivo u operativo.",
  },
];

const kpis = [
  { area: "Upstream", name: "Produccion diaria", formula: "bbl/d, Mm3/d o boe/d", source: "SCADA y medicion fiscal", use: "Mide escala, plan y restricciones." },
  { area: "Upstream", name: "IP30", formula: "Promedio de los primeros 30 dias", source: "Produccion por pozo", use: "Compara productividad inicial normalizada." },
  { area: "Upstream", name: "EUR", formula: "Recuperacion final estimada", source: "Reservorios y curvas", use: "Soporta valor economico del pozo." },
  { area: "Upstream", name: "Lifting cost", formula: "Opex produccion / boe", source: "ERP + produccion", use: "Mide costo operativo unitario." },
  { area: "Upstream", name: "NPT", formula: "Tiempo no productivo / tiempo total", source: "Drilling y completions", use: "Detecta ineficiencias de ejecucion." },
  { area: "Midstream", name: "Capacidad utilizada", formula: "Throughput / capacidad disponible", source: "SCADA ductos", use: "Senala cuellos de evacuacion." },
  { area: "Midstream", name: "Linepack", formula: "Gas contenido en ducto", source: "Gas control", use: "Gestiona flexibilidad diaria." },
  { area: "Midstream", name: "Cumplimiento de nominaciones", formula: "Volumen entregado / nominado", source: "Scheduling", use: "Controla disciplina contractual." },
  { area: "Downstream", name: "Margen de refinacion", formula: "Valor productos - crudo - costos variables", source: "Refineria, trading y ERP", use: "Mide rentabilidad real de refino." },
  { area: "Downstream", name: "Yield", formula: "Producto obtenido / crudo cargado", source: "Refineria y laboratorio", use: "Muestra rendimiento por producto." },
  { area: "Downstream", name: "Utilizacion", formula: "Carga real / capacidad", source: "Operacion refineria", use: "Mide uso de activos." },
  { area: "Comercial", name: "Margen por canal", formula: "Margen / volumen vendido", source: "ERP, POS y pricing", use: "Compara rentabilidad retail, agro, B2B." },
  { area: "Comercial", name: "Rotacion de inventarios", formula: "Ventas / inventario promedio", source: "Inventarios y ventas", use: "Controla capital de trabajo." },
  { area: "Finanzas", name: "Free cash flow", formula: "Cash flow operativo - capex", source: "Tesoreria y contabilidad", use: "Mide caja libre para deuda o crecimiento." },
  { area: "Finanzas", name: "ROCE", formula: "EBIT despues de impuestos / capital empleado", source: "Finanzas", use: "Compara retorno de proyectos y negocios." },
  { area: "Sustentabilidad", name: "Intensidad de emisiones", formula: "kgCO2e / boe o t producto", source: "HSE, energia y sensores", use: "Compara huella operativa por activo." },
];

const state = {
  modules: [],
  activeModule: 0,
  view: "read",
  query: "",
  done: new Set(),
  notes: {},
  textSize: 16,
  cardIndex: 0,
  cardReveal: false,
  quizIndex: 0,
  quizAnswers: {},
  kpiFilter: "Todos",
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  cacheElements();
  paintIcons();
  loadState();
  attachEvents();

  try {
    const text = await fetch("manual_oil_gas_ypf.md").then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    });
    state.modules = parseManual(text);
    const moduleIds = new Set(state.modules.map((module) => module.id));
    state.done = new Set([...state.done].filter((id) => moduleIds.has(id)));
    if (!state.modules[state.activeModule]) state.activeModule = 0;
    render();
  } catch (error) {
    renderEmpty();
    console.error(error);
  }

  registerServiceWorker();
}

function cacheElements() {
  els.moduleList = document.getElementById("moduleList");
  els.searchInput = document.getElementById("searchInput");
  els.searchResults = document.getElementById("searchResults");
  els.mainContent = document.getElementById("mainContent");
  els.pageTitle = document.getElementById("pageTitle");
  els.activeContext = document.getElementById("activeContext");
  els.markDone = document.getElementById("markDone");
  els.quickMetrics = document.getElementById("quickMetrics");
  els.studyStats = document.getElementById("studyStats");
  els.progressRing = document.getElementById("progressRing");
  els.progressMeta = document.getElementById("progressMeta");
  els.focusList = document.getElementById("focusList");
  els.increaseText = document.getElementById("increaseText");
  els.decreaseText = document.getElementById("decreaseText");
}

function attachEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderSearch();
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      state.cardReveal = false;
      saveState();
      render();
    });
  });

  els.markDone.addEventListener("click", () => {
    if (state.done.has(state.activeModule)) state.done.delete(state.activeModule);
    else state.done.add(state.activeModule);
    saveState();
    render();
  });

  els.increaseText.addEventListener("click", () => {
    state.textSize = Math.min(20, state.textSize + 1);
    saveState();
    render();
  });

  els.decreaseText.addEventListener("click", () => {
    state.textSize = Math.max(14, state.textSize - 1);
    saveState();
    render();
  });
}

function parseManual(text) {
  const moduleRegex = /^# Modulo\s+(\d+)\.\s+(.+)$/gm;
  const starts = [];
  let match;
  while ((match = moduleRegex.exec(text))) {
    starts.push({
      id: Number(match[1]),
      title: match[2].trim(),
      index: match.index,
    });
  }

  const introEnd = starts[0]?.index ?? text.length;
  const introText = text.slice(0, introEnd).trim();
  const modules = [
    {
      id: 0,
      title: "Mapa general de la industria",
      shortTitle: "Mapa general",
      objective: "Panorama inicial, fuentes y datos publicos clave.",
      content: introText,
      plainText: cleanMarkdown(introText).replace(/\s+/g, " "),
      words: countWords(introText),
    },
  ];

  starts.forEach((item, index) => {
    const end = starts[index + 1]?.index ?? text.length;
    const content = text.slice(item.index, end).trim();
    const plainText = cleanMarkdown(content).replace(/\s+/g, " ");
    modules.push({
      id: item.id,
      title: item.title,
      shortTitle: makeShortTitle(item.title),
      objective: extractObjective(content),
      content,
      plainText,
      words: countWords(content),
    });
  });

  return modules;
}

function makeShortTitle(title) {
  return title
    .replace(/:.*$/, "")
    .replace("oil and gas", "O&G")
    .trim();
}

function extractObjective(content) {
  const match = content.match(/## 2\. Objetivo\s+([\s\S]*?)(?=\n##\s+\d+\.|\n#\s|$)/);
  if (!match) return "Modulo de estudio ejecutivo y tecnico.";
  return cleanMarkdown(match[1]).split("\n").find(Boolean)?.slice(0, 120) ?? "Modulo de estudio.";
}

function render() {
  document.documentElement.style.setProperty("--reader-size", `${state.textSize}px`);
  const module = currentModule();
  els.pageTitle.textContent = module.title;
  els.activeContext.textContent = module.id === 0 ? "Manual ejecutivo" : `Modulo ${module.id}`;
  renderModules();
  renderControls();
  renderSearch();
  renderFocus();
  renderView();
  paintIcons();
}

function renderModules() {
  els.moduleList.innerHTML = state.modules
    .map((module) => {
      const done = state.done.has(module.id);
      const active = module.id === state.activeModule;
      return `
        <button class="module-button ${active ? "active" : ""} ${done ? "done" : ""}" data-module="${module.id}">
          <span class="module-number">${module.id === 0 ? "IN" : module.id}</span>
          <span>
            <span class="module-name">${escapeHtml(module.shortTitle)}</span>
            <span class="module-objective">${escapeHtml(module.objective)}</span>
          </span>
          <span class="done-dot" aria-hidden="true"></span>
        </button>
      `;
    })
    .join("");

  els.moduleList.querySelectorAll(".module-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeModule = Number(button.dataset.module);
      state.view = "read";
      state.cardReveal = false;
      state.searchQuery = "";
      saveState();
      render();
    });
  });
}

function renderControls() {
  document.querySelectorAll(".segment").forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const total = state.modules.length;
  const done = state.done.size;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const words = state.modules.reduce((sum, module) => sum + module.words, 0);
  const minutes = Math.max(1, Math.round(words / 190));
  const noteCount = Object.values(state.notes).filter((value) => value.trim()).length;

  els.studyStats.textContent = `${done}/${total} modulos completados`;
  els.quickMetrics.innerHTML = `
    <span class="metric-pill"><span class="icon" data-icon="book"></span><strong>${minutes} min</strong> lectura</span>
    <span class="metric-pill"><span class="icon" data-icon="chart"></span><strong>${percent}%</strong> avance</span>
    <span class="metric-pill"><span class="icon" data-icon="note"></span><strong>${noteCount}</strong> notas</span>
  `;

  els.markDone.classList.toggle("is-done", state.done.has(state.activeModule));
  els.markDone.setAttribute("aria-pressed", String(state.done.has(state.activeModule)));
  els.markDone.innerHTML = `<span class="icon" data-icon="check"></span>${state.done.has(state.activeModule) ? "Completado" : "Estudiado"}`;
  els.progressRing.style.setProperty("--progress", `${percent * 3.6}deg`);
  els.progressRing.querySelector("span").textContent = `${percent}%`;
  els.progressMeta.textContent = `${done} de ${total} modulos marcados`;
}

function renderSearch() {
  const query = els.searchInput.value.trim().toLowerCase();
  if (query.length < 2 || !state.modules.length) {
    els.searchResults.hidden = true;
    els.searchResults.innerHTML = "";
    return;
  }

  const results = state.modules
    .map((module) => {
      const haystack = `${module.title}\n${module.objective}\n${module.plainText}`.toLowerCase();
      const index = haystack.indexOf(query);
      if (index === -1) return null;
      const plain = module.plainText;
      const plainIndex = plain.toLowerCase().indexOf(query);
      const start = Math.max(0, plainIndex - 70);
      const snippet = plainIndex >= 0 ? plain.slice(start, start + 190) : module.objective;
      return { module, snippet };
    })
    .filter(Boolean)
    .slice(0, 8);

  els.searchResults.hidden = results.length === 0;
  els.searchResults.innerHTML = results
    .map(
      ({ module, snippet }) => `
      <button class="search-result" data-module="${module.id}">
        <strong>${module.id === 0 ? "Intro" : `Modulo ${module.id}`}: ${escapeHtml(module.shortTitle)}</strong>
        <span>${escapeHtml(snippet)}</span>
      </button>
    `,
    )
    .join("");

  els.searchResults.querySelectorAll(".search-result").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeModule = Number(button.dataset.module);
      state.view = "read";
      els.searchInput.value = "";
      saveState();
      render();
    });
  });
}

function renderFocus() {
  const items = focusBank[state.activeModule] ?? focusBank[0];
  els.focusList.innerHTML = items
    .map((item) => `<div class="focus-item"><span class="icon" data-icon="check"></span><span>${escapeHtml(item)}</span></div>`)
    .join("");
}

function renderView() {
  if (state.view === "read") return renderRead();
  if (state.view === "map") return renderMap();
  if (state.view === "cards") return renderCards();
  if (state.view === "quiz") return renderQuiz();
  if (state.view === "kpis") return renderKpis();
  if (state.view === "notes") return renderNotes();
  return renderRead();
}

function renderRead() {
  els.mainContent.className = "reader";
  els.mainContent.innerHTML = markdownToHtml(currentModule().content);
}

function renderMap() {
  const module = currentModule();
  els.mainContent.className = "tool-surface";
  els.mainContent.innerHTML = `
    <div class="tool-header">
      <div>
        <h2>Mapa de decision</h2>
        <p>${escapeHtml(module.title)}</p>
      </div>
      <button class="ghost-button" id="backToRead"><span class="icon" data-icon="book"></span>Lectura</button>
    </div>

    <div class="value-chain">
      ${[
        ["Roca", "Calidad geologica, presion, ventana de fluidos y recursos."],
        ["Pozo", "Perforacion, completacion, EUR, costo y declino."],
        ["Superficie", "Separacion, tratamiento, medicion, agua y energia."],
        ["Midstream", "Evacuacion, ductos, tanques, nominaciones y capacidad."],
        ["Mercado", "Refinacion, trading, ventas, netback, caja y riesgo."],
      ]
        .map(([title, body]) => `<div class="chain-node"><strong>${title}</strong><span>${body}</span></div>`)
        .join("")}
    </div>

    <div class="analysis-grid">
      <div class="analysis-card">
        <h3>Director</h3>
        <p>Pregunta por retorno, riesgo, caja, deuda, permisos, socios, opcion exportadora y resiliencia del portafolio.</p>
      </div>
      <div class="analysis-card">
        <h3>Gerente operativo</h3>
        <p>Mira plan vs real, uptime, restricciones, seguridad, mantenimiento, contratistas y capacidad de respuesta diaria.</p>
      </div>
      <div class="analysis-card">
        <h3>Analista de datos</h3>
        <p>Conecta activos, produccion, costos, precios, calidad, inventarios y emisiones en indicadores certificados.</p>
      </div>
      <div class="analysis-card">
        <h3>Riesgo critico</h3>
        <p>El error mas caro suele estar en la interfaz: pozo sin ducto, refineria sin unidad disponible o precio sin netback.</p>
      </div>
    </div>
  `;

  document.getElementById("backToRead").addEventListener("click", () => {
    state.view = "read";
    saveState();
    render();
  });
}

function renderCards() {
  const activeCards = cards.filter((card) => card.module === state.activeModule);
  const deck = activeCards.length ? activeCards : cards;
  state.cardIndex = clamp(state.cardIndex, 0, deck.length - 1);
  const card = deck[state.cardIndex];

  els.mainContent.className = "tool-surface";
  els.mainContent.innerHTML = `
    <div class="tool-header">
      <div>
        <h2>Tarjetas de repaso</h2>
        <p>${state.cardIndex + 1} de ${deck.length} | ${escapeHtml(card.tag)}</p>
      </div>
      <button class="ghost-button" id="shuffleCards"><span class="icon" data-icon="activity"></span>Mezclar</button>
    </div>

    <div class="flashcard">
      <span class="card-label">${escapeHtml(card.tag)}</span>
      <h2>${escapeHtml(card.q)}</h2>
      ${state.cardReveal ? `<p>${escapeHtml(card.a)}</p>` : ""}
    </div>

    <div class="card-actions">
      <button class="ghost-button" id="prevCard"><span class="icon" data-icon="minus"></span>Anterior</button>
      <button class="primary-button" id="revealCard"><span class="icon" data-icon="check"></span>${state.cardReveal ? "Ocultar" : "Respuesta"}</button>
      <button class="ghost-button" id="nextCard"><span class="icon" data-icon="plus"></span>Siguiente</button>
    </div>
  `;

  document.getElementById("prevCard").addEventListener("click", () => {
    state.cardIndex = (state.cardIndex - 1 + deck.length) % deck.length;
    state.cardReveal = false;
    render();
  });
  document.getElementById("nextCard").addEventListener("click", () => {
    state.cardIndex = (state.cardIndex + 1) % deck.length;
    state.cardReveal = false;
    render();
  });
  document.getElementById("revealCard").addEventListener("click", () => {
    state.cardReveal = !state.cardReveal;
    render();
  });
  document.getElementById("shuffleCards").addEventListener("click", () => {
    state.cardIndex = Math.floor(Math.random() * deck.length);
    state.cardReveal = false;
    render();
  });
}

function renderQuiz() {
  state.quizIndex = clamp(state.quizIndex, 0, quiz.length - 1);
  const item = quiz[state.quizIndex];
  const selected = state.quizAnswers[state.quizIndex];
  const answered = selected !== undefined;
  const correctCount = Object.entries(state.quizAnswers).filter(([index, value]) => quiz[Number(index)].answer === value).length;

  els.mainContent.className = "tool-surface";
  els.mainContent.innerHTML = `
    <div class="tool-header">
      <div>
        <h2>Quiz ejecutivo</h2>
        <p>${state.quizIndex + 1} de ${quiz.length} | ${correctCount} correctas</p>
      </div>
      <button class="danger-button" id="resetQuiz"><span class="icon" data-icon="minus"></span>Reiniciar</button>
    </div>

    <div class="quiz-question">
      <h3>${escapeHtml(item.q)}</h3>
      ${item.options
        .map((option, index) => {
          let klass = "";
          if (answered && index === item.answer) klass = "correct";
          if (answered && index === selected && selected !== item.answer) klass = "wrong";
          if (!answered && index === selected) klass = "selected";
          return `<button class="quiz-option ${klass}" data-option="${index}">${escapeHtml(option)}</button>`;
        })
        .join("")}
    </div>

    ${answered ? `<div class="analysis-card quiz-explain"><h3>Lectura</h3><p>${escapeHtml(item.why)}</p></div>` : ""}

    <div class="quiz-actions">
      <button class="ghost-button" id="prevQuiz"><span class="icon" data-icon="minus"></span>Anterior</button>
      <button class="primary-button" id="nextQuiz"><span class="icon" data-icon="plus"></span>Siguiente</button>
    </div>
  `;

  els.mainContent.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.quizAnswers[state.quizIndex] === undefined) {
        state.quizAnswers[state.quizIndex] = Number(button.dataset.option);
        saveState();
        render();
      }
    });
  });

  document.getElementById("prevQuiz").addEventListener("click", () => {
    state.quizIndex = (state.quizIndex - 1 + quiz.length) % quiz.length;
    saveState();
    render();
  });
  document.getElementById("nextQuiz").addEventListener("click", () => {
    state.quizIndex = (state.quizIndex + 1) % quiz.length;
    saveState();
    render();
  });
  document.getElementById("resetQuiz").addEventListener("click", () => {
    state.quizAnswers = {};
    state.quizIndex = 0;
    saveState();
    render();
  });
}

function renderKpis() {
  const areas = ["Todos", ...Array.from(new Set(kpis.map((kpi) => kpi.area)))];
  const visible = state.kpiFilter === "Todos" ? kpis : kpis.filter((kpi) => kpi.area === state.kpiFilter);

  els.mainContent.className = "tool-surface";
  els.mainContent.innerHTML = `
    <div class="tool-header">
      <div>
        <h2>Diccionario KPI</h2>
        <p>${visible.length} indicadores visibles</p>
      </div>
    </div>
    <div class="kpi-toolbar">
      ${areas.map((area) => `<button class="kpi-filter ${area === state.kpiFilter ? "active" : ""}" data-area="${area}">${area}</button>`).join("")}
    </div>
    <div class="kpi-grid">
      ${visible
        .map(
          (kpi) => `
          <div class="kpi-card">
            <h3>${escapeHtml(kpi.name)}</h3>
            <dl>
              <div><dt>Area</dt><dd>${escapeHtml(kpi.area)}</dd></div>
              <div><dt>Formula</dt><dd>${escapeHtml(kpi.formula)}</dd></div>
              <div><dt>Fuente</dt><dd>${escapeHtml(kpi.source)}</dd></div>
              <div><dt>Uso</dt><dd>${escapeHtml(kpi.use)}</dd></div>
            </dl>
          </div>
        `,
        )
        .join("")}
    </div>
  `;

  els.mainContent.querySelectorAll(".kpi-filter").forEach((button) => {
    button.addEventListener("click", () => {
      state.kpiFilter = button.dataset.area;
      saveState();
      render();
    });
  });
}

function renderNotes() {
  const module = currentModule();
  const value = state.notes[module.id] ?? "";
  els.mainContent.className = "tool-surface";
  els.mainContent.innerHTML = `
    <div class="tool-header">
      <div>
        <h2>Notas del modulo</h2>
        <p>${escapeHtml(module.title)}</p>
      </div>
      <button class="danger-button" id="clearNote"><span class="icon" data-icon="minus"></span>Limpiar</button>
    </div>
    <textarea class="notes-area" id="notesArea" spellcheck="true" placeholder="Ideas, dudas, formulas, decisiones y preguntas para repasar...">${escapeHtml(value)}</textarea>
    <div class="notes-actions">
      <button class="primary-button" id="saveNote"><span class="icon" data-icon="check"></span>Guardar</button>
      <button class="ghost-button" id="copyNote"><span class="icon" data-icon="file"></span>Copiar</button>
    </div>
  `;

  const textarea = document.getElementById("notesArea");
  textarea.addEventListener("input", () => {
    state.notes[module.id] = textarea.value;
    saveState();
    renderControls();
  });
  document.getElementById("saveNote").addEventListener("click", () => {
    state.notes[module.id] = textarea.value;
    saveState();
    renderControls();
  });
  document.getElementById("clearNote").addEventListener("click", () => {
    textarea.value = "";
    state.notes[module.id] = "";
    saveState();
    renderControls();
  });
  document.getElementById("copyNote").addEventListener("click", async () => {
    await navigator.clipboard?.writeText(textarea.value);
  });
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let i = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      i += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      flushParagraph();
      const code = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      i += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      const level = heading[1].length;
      html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      i += 1;
      continue;
    }

    if (isTableStart(lines, i)) {
      flushParagraph();
      const tableLines = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        tableLines.push(lines[i]);
        i += 1;
      }
      html.push(renderTable(tableLines));
      continue;
    }

    if (/^-\s+/.test(trimmed)) {
      flushParagraph();
      const items = [];
      while (i < lines.length && /^-\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^-\s+/, ""));
        i += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ol>`);
      continue;
    }

    if (/^-{3,}$/.test(trimmed)) {
      flushParagraph();
      html.push("<hr>");
      i += 1;
      continue;
    }

    paragraph.push(trimmed);
    i += 1;
  }

  flushParagraph();
  return html.join("\n");
}

function isTableStart(lines, index) {
  const current = lines[index]?.trim() ?? "";
  const next = lines[index + 1]?.trim() ?? "";
  return current.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(next);
}

function renderTable(tableLines) {
  const rows = tableLines
    .filter((line, index) => index !== 1)
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim()),
    );

  const [head, ...body] = rows;
  return `
    <div class="table-scroll" role="region" aria-label="Tabla de datos" tabindex="0">
    <table>
      <thead><tr>${head.map((cell) => `<th scope="col">${inline(cell)}</th>`).join("")}</tr></thead>
      <tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
    </div>
  `;
}

function inline(value) {
  const links = [];
  const withLinkTokens = escapeHtml(value).replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => {
    const token = `@@LINK_${links.length}@@`;
    links.push(`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`);
    return token;
  });

  return withLinkTokens
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/@@LINK_(\d+)@@/g, (_, index) => links[Number(index)] ?? "");
}

function cleanMarkdown(value) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^#+\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/[*_`>#-]/g, "")
    .trim();
}

function currentModule() {
  return state.modules.find((module) => module.id === state.activeModule) ?? state.modules[0];
}

function countWords(value) {
  return cleanMarkdown(value).split(/\s+/).filter(Boolean).length;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    state.activeModule = Number.isFinite(saved.activeModule) ? saved.activeModule : 0;
    state.view = ["read", "map", "cards", "quiz", "kpis", "notes"].includes(saved.view) ? saved.view : "read";
    state.done = new Set(Array.isArray(saved.done) ? saved.done.map(Number).filter(Number.isFinite) : []);
    state.notes = typeof saved.notes === "object" && saved.notes ? saved.notes : {};
    state.textSize = clamp(Number(saved.textSize) || 16, 14, 20);
    state.quizIndex = clamp(Number(saved.quizIndex) || 0, 0, quiz.length - 1);
    state.quizAnswers = typeof saved.quizAnswers === "object" && saved.quizAnswers ? saved.quizAnswers : {};
    state.kpiFilter = saved.kpiFilter || "Todos";
  } catch {
    state.done = new Set();
  }
}

function saveState() {
  try {
    const notes = Object.fromEntries(
      Object.entries(state.notes).map(([key, value]) => [key, String(value).slice(0, 12000)]),
    );
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        activeModule: state.activeModule,
        view: state.view,
        done: [...state.done],
        notes,
        textSize: state.textSize,
        quizIndex: state.quizIndex,
        quizAnswers: state.quizAnswers,
        kpiFilter: state.kpiFilter,
      }),
    );
  } catch (error) {
    console.warn("No se pudo guardar el progreso local", error);
  }
}

function renderEmpty() {
  els.pageTitle.textContent = "Manual no disponible";
  els.mainContent.className = "reader";
  const template = document.getElementById("emptyStateTemplate");
  els.mainContent.innerHTML = template.innerHTML;
  paintIcons();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  if (location.protocol !== "https:" && !isLocal) return;
  navigator.serviceWorker.register("service-worker.js").catch((error) => {
    console.warn("No se pudo registrar el service worker", error);
  });
}

function paintIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.dataset.icon;
    if (icons[name]) node.innerHTML = icons[name];
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
