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

const concepts = [
  {
    id: "roca",
    label: "Roca",
    group: "Subsuelo",
    module: 2,
    x: 110,
    y: 160,
    aliases: ["geologia", "roca madre", "shale"],
    definition: "Sistema geologico que contiene o genero hidrocarburos. En shale, la roca madre tambien funciona como reservorio.",
    why: "La calidad de roca marca el techo tecnico: sin espesor, presion, madurez y contenido organico adecuados, no hay pozo que arregle el negocio.",
    kpis: ["TOC", "Espesor", "Presion", "Madurez termica"],
    decision: "Elegir areas, landing zones, pilotos y ritmo de appraisal.",
  },
  {
    id: "reservas",
    label: "Reservas",
    group: "Portafolio",
    module: 2,
    x: 280,
    y: 110,
    aliases: ["recursos", "P1", "P2", "P3"],
    definition: "Volumen recuperable comercialmente bajo condiciones tecnicas, economicas y regulatorias.",
    why: "Son la base de valor futuro de la empresa y conectan geologia, precio, capex, permisos y contabilidad.",
    kpis: ["P1", "P2", "P3", "RRR", "Vida de reservas"],
    decision: "Asignar capital a exploracion, desarrollo, adquisiciones o desinversiones.",
  },
  {
    id: "pozo",
    label: "Pozo",
    group: "Operacion",
    module: 2,
    x: 290,
    y: 260,
    aliases: ["perforacion", "pozos horizontales", "pad drilling"],
    definition: "Activo que conecta superficie con reservorio y convierte potencial geologico en flujo medible.",
    why: "En shale, el pozo es una unidad de manufactura: lateral, etapas, arena, agua y NPT definen retorno.",
    kpis: ["Costo por pozo", "Metros laterales", "NPT", "Dias de perforacion"],
    decision: "Optimizar diseno de pozo, contratistas, secuencia de pads y curva de aprendizaje.",
  },
  {
    id: "fractura",
    label: "Fractura",
    group: "Operacion",
    module: 3,
    x: 455,
    y: 220,
    aliases: ["completacion", "etapas de fractura", "arena", "agua"],
    definition: "Estimula la roca con agua, arena y aditivos para crear conductividad artificial.",
    why: "Es una de las palancas mas fuertes de productividad y costo en Vaca Muerta.",
    kpis: ["Etapas/dia", "Arena/pozo", "Agua/pozo", "IP30", "IP90"],
    decision: "Definir intensidad de completacion, proveedores, logistica de arena y abastecimiento de agua.",
  },
  {
    id: "produccion",
    label: "Produccion",
    group: "Operacion",
    module: 2,
    x: 565,
    y: 115,
    aliases: ["IP30", "declino", "EUR", "uptime"],
    definition: "Flujo diario de crudo, gas, agua y solidos que sale del sistema pozo-reservorio.",
    why: "La produccion mueve ingresos, reservas producidas, regalias, opex, emisiones e infraestructura.",
    kpis: ["bbl/d", "Mm3/d", "EUR", "Declino", "Uptime"],
    decision: "Ajustar choke, workovers, mantenimiento, forecast y perforacion necesaria para sostener plateau.",
  },
  {
    id: "facilities",
    label: "Facilities",
    group: "Superficie",
    module: 2,
    x: 620,
    y: 300,
    aliases: ["tratamiento", "separacion", "agua de produccion", "SCADA"],
    definition: "Equipos de superficie que separan, tratan, miden, comprimen y preparan fluidos para transporte.",
    why: "Si superficie queda chica, el subsuelo bueno no se monetiza; aparecen shut-ins, offspec o venteos.",
    kpis: ["Disponibilidad", "Downtime", "Agua producida", "Gas venteado"],
    decision: "Invertir en plantas, compresion, energia, medicion y automatizacion.",
  },
  {
    id: "midstream",
    label: "Midstream",
    group: "Infraestructura",
    module: 4,
    x: 755,
    y: 205,
    aliases: ["oleoductos", "gasoductos", "linepack", "evacuacion"],
    definition: "Red de gathering, plantas, ductos, tanques, compresion y terminales que mueve la produccion.",
    why: "Es el cuello que puede frenar Vaca Muerta aunque haya roca y pozos excelentes.",
    kpis: ["Throughput", "Capacidad usada", "Linepack", "Nominaciones"],
    decision: "Contratar capacidad firme, expandir ductos, priorizar pads o redireccionar mercado.",
  },
  {
    id: "refineria",
    label: "Refineria",
    group: "Downstream",
    module: 5,
    x: 890,
    y: 330,
    aliases: ["downstream", "blending", "margen de refinacion", "crack spread"],
    definition: "Complejo industrial que transforma crudo en combustibles, asfaltos, GLP, lubricantes y feedstocks.",
    why: "Convierte un barril en mix de productos y margen, y sostiene abastecimiento domestico.",
    kpis: ["Utilizacion", "Yield", "Margen", "Disponibilidad mecanica"],
    decision: "Elegir slate, paradas, imports/exports, blending y proyectos de conversion.",
  },
  {
    id: "trading",
    label: "Trading",
    group: "Mercado",
    module: 6,
    x: 835,
    y: 95,
    aliases: ["Brent", "WTI", "netback", "hedging"],
    definition: "Gestion comercial de precios, contratos, fletes, calidad, paridades, inventarios y coberturas.",
    why: "El valor real no es Brent: es precio realizado neto de costos, impuestos, restricciones y timing.",
    kpis: ["Netback", "Realized price", "VaR", "Inventarios"],
    decision: "Exportar, refinar, importar, almacenar, cubrir precio o ajustar produccion.",
  },
  {
    id: "mercado",
    label: "Mercado",
    group: "Cliente",
    module: 6,
    x: 1015,
    y: 190,
    aliases: ["exportacion", "importacion", "estaciones", "demanda"],
    definition: "Demanda domestica, regional o global que paga por crudo, gas, LNG, combustibles o petroquimicos.",
    why: "Sin mercado firme, el recurso no se transforma en caja; con mercado correcto, se vuelve estrategia pais.",
    kpis: ["Market share", "Paridad", "Volumen vendido", "Margen canal"],
    decision: "Balancear mercado interno, exportaciones, precios, inventarios y seguridad energetica.",
  },
  {
    id: "caja",
    label: "Caja",
    group: "Finanzas",
    module: 10,
    x: 1030,
    y: 395,
    aliases: ["EBITDA", "free cash flow", "ROCE", "deuda"],
    definition: "Resultado financiero que queda despues de convertir volumen fisico en ventas, margen y flujo de fondos.",
    why: "La caja decide si la empresa puede perforar mas, bajar deuda, financiar LNG o atravesar ciclos de precio.",
    kpis: ["EBITDA", "FCF", "ROCE", "Deuda neta/EBITDA"],
    decision: "Priorizar capex, financiar proyectos, pagar deuda o asociarse.",
  },
  {
    id: "datos",
    label: "Datos",
    group: "Digital",
    module: 12,
    x: 720,
    y: 465,
    aliases: ["Power BI", "Microsoft Fabric", "SCADA", "IA"],
    definition: "Capa que integra sensores, SCADA, ERP, EAM, laboratorio, trading, ventas, finanzas y emisiones.",
    why: "Permite ver relaciones invisibles: pozo, ducto, refineria, precio, inventario, seguridad y caja en un mismo sistema.",
    kpis: ["Calidad del dato", "Latencia", "Indicadores certificados", "Valor IA"],
    decision: "Certificar KPIs, automatizar alertas, crear gemelos digitales y priorizar casos IA.",
  },
  {
    id: "vaca-muerta",
    label: "Vaca Muerta",
    group: "Argentina",
    module: 9,
    x: 450,
    y: 440,
    aliases: ["Neuquen", "shale oil", "shale gas"],
    definition: "Formacion no convencional de la Cuenca Neuquina con ventanas de petroleo, gas humedo y gas seco.",
    why: "Puede cambiar energia, exportaciones, divisas, proveedores, tecnologia y geopolitica argentina.",
    kpis: ["Produccion shale", "Pozos conectados", "Capacidad evacuacion", "Exportaciones"],
    decision: "Acelerar oil, desarrollar gas, invertir midstream, estructurar LNG y estabilizar reglas.",
  },
  {
    id: "ypf",
    label: "YPF",
    group: "Empresa",
    module: 10,
    x: 220,
    y: 435,
    aliases: ["empresa integrada", "directorio", "capex"],
    definition: "Empresa integrada con upstream, downstream, comercializacion, infraestructura, datos y rol estrategico nacional.",
    why: "Coordina barriles, combustibles, infraestructura, seguridad energetica, deuda, socios y Vaca Muerta.",
    kpis: ["Reservas P1", "RRR", "Capex", "Margen downstream", "FCF"],
    decision: "Asignar capital entre shale, refinerias, infraestructura, LNG, deuda y abastecimiento interno.",
  },
  {
    id: "lng",
    label: "LNG",
    group: "Exportacion",
    module: 9,
    x: 1010,
    y: 505,
    aliases: ["gas natural licuado", "FLNG", "Argentina LNG"],
    definition: "Gas natural enfriado para transporte maritimo, que permite vender gas a mercados globales.",
    why: "Puede romper la estacionalidad del gas argentino y convertir Vaca Muerta en plataforma exportadora.",
    kpis: ["Mtpa", "FID", "Contratos", "Utilizacion gasoducto"],
    decision: "Asegurar gas, ductos, compradores, financiamiento, permisos y estabilidad fiscal.",
  },
];

const conceptLinks = [
  ["roca", "reservas", "certifica potencial"],
  ["roca", "pozo", "define diseno"],
  ["pozo", "fractura", "se completa"],
  ["fractura", "produccion", "desbloquea flujo"],
  ["produccion", "facilities", "entra a superficie"],
  ["facilities", "midstream", "entrega especificado"],
  ["midstream", "refineria", "abastece crudo"],
  ["midstream", "trading", "habilita ruta"],
  ["trading", "mercado", "captura precio"],
  ["refineria", "mercado", "vende combustibles"],
  ["mercado", "caja", "genera ingresos"],
  ["caja", "ypf", "financia capex"],
  ["ypf", "vaca-muerta", "prioriza portafolio"],
  ["vaca-muerta", "roca", "nace en subsuelo"],
  ["vaca-muerta", "midstream", "necesita evacuacion"],
  ["vaca-muerta", "lng", "monetiza gas"],
  ["lng", "mercado", "abre demanda global"],
  ["datos", "pozo", "optimiza operacion"],
  ["datos", "midstream", "detecta cuellos"],
  ["datos", "refineria", "optimiza margen"],
  ["datos", "caja", "certifica decisiones"],
  ["ypf", "datos", "gobierna KPIs"],
];

const flowSteps = [
  {
    id: "rock",
    title: "Roca",
    subtitle: "Potencial geologico",
    body: "TOC, espesor, presion y madurez definen si el recurso puede convertirse en inventario economico.",
    kpi: "TOC / espesor / presion",
  },
  {
    id: "well",
    title: "Pozo",
    subtitle: "Contacto con la roca",
    body: "El pozo horizontal y la completacion convierten roca en caudal inicial, EUR y curva de declino.",
    kpi: "Costo por pozo / IP30 / EUR",
  },
  {
    id: "surface",
    title: "Superficie",
    subtitle: "Tratamiento y medicion",
    body: "Separadores, compresion, agua, energia y medicion fiscal preparan el producto para transportar.",
    kpi: "Uptime / downtime / offspec",
  },
  {
    id: "midstream",
    title: "Midstream",
    subtitle: "Evacuacion",
    body: "Ductos, tanques, linepack y terminales determinan si la produccion llega al mercado sin descuento.",
    kpi: "Capacidad usada / throughput",
  },
  {
    id: "conversion",
    title: "Conversion",
    subtitle: "Refino o LNG",
    body: "El crudo puede ir a refineria; el gas puede ir a demanda interna, exportacion regional o LNG.",
    kpi: "Margen refino / Mtpa LNG",
  },
  {
    id: "market",
    title: "Mercado",
    subtitle: "Precio neto",
    body: "El cliente paga segun calidad, flete, impuestos, paridad, regulacion y oportunidad comercial.",
    kpi: "Netback / margen canal",
  },
  {
    id: "cash",
    title: "Caja",
    subtitle: "Reinversion",
    body: "La caja resultante financia capex, deuda, mantenimiento, seguridad, tecnologia y nuevos proyectos.",
    kpi: "FCF / ROCE / deuda",
  },
];

const flowScenarios = [
  {
    id: "base",
    label: "Base integrada",
    effect: "El sistema fluye si pozo, planta, ducto, refineria/puerto y mercado tienen capacidad alineada.",
    decision: "Mantener ritmo de desarrollo y monitorear desviaciones entre produccion, transporte e inventarios.",
    stress: "mid",
  },
  {
    id: "bottleneck",
    label: "Cuello midstream",
    effect: "La produccion fisica queda limitada por ductos, tanques, compresion o terminales.",
    decision: "Contratar capacidad firme, expandir infraestructura o reordenar el plan de pads.",
    stress: "high",
  },
  {
    id: "price",
    label: "Precio local bajo",
    effect: "El volumen puede existir, pero el netback cae y se posterga capex de crecimiento.",
    decision: "Comparar paridad exportacion/importacion, sensibilidad Brent/FX y caja disponible.",
    stress: "high",
  },
  {
    id: "export",
    label: "Exportacion habilitada",
    effect: "La produccion incremental compite por mercados globales y puede transformarse en dolares.",
    decision: "Asegurar calidad, terminal, contratos, permisos, flete y cobertura de precio.",
    stress: "low",
  },
  {
    id: "refinery",
    label: "Refineria parada",
    effect: "Baja conversion local: suben inventarios de crudo o imports de combustibles segun demanda.",
    decision: "Reprogramar slate, importar producto, exportar crudo o ajustar inventarios criticos.",
    stress: "mid",
  },
];

const state = {
  modules: [],
  activeModule: 0,
  view: "read",
  selectedConcept: "vaca-muerta",
  flowScenario: "base",
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
  document.body.dataset.view = state.view;
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
    .map((item) => {
      const concept = conceptForTerm(item);
      if (!concept) {
        return `<div class="focus-item"><span class="icon" data-icon="check"></span><span>${escapeHtml(item)}</span></div>`;
      }
      return `
        <button class="focus-item focus-link" data-concept="${concept.id}">
          <span class="icon" data-icon="check"></span>
          <span>${escapeHtml(item)}</span>
        </button>
      `;
    })
    .join("");

  els.focusList.querySelectorAll("[data-concept]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedConcept = button.dataset.concept;
      state.view = "map";
      saveState();
      render();
    });
  });
}

function renderView() {
  if (state.view === "read") return renderRead();
  if (state.view === "map") return renderMap();
  if (state.view === "flow") return renderFlow();
  if (state.view === "cards") return renderCards();
  if (state.view === "quiz") return renderQuiz();
  if (state.view === "kpis") return renderKpis();
  if (state.view === "notes") return renderNotes();
  return renderRead();
}

function renderRead() {
  els.mainContent.className = "reader";
  els.mainContent.innerHTML = markdownToHtml(currentModule().content);
  annotateConceptTerms(els.mainContent);
}

function renderMap() {
  const module = currentModule();
  const selected = getConcept(state.selectedConcept) ?? getConcept("vaca-muerta");
  const visible = conceptsForCurrentModule();
  const visibleIds = new Set(visible.map((concept) => concept.id));
  const linkedIds = new Set([selected.id, ...conceptLinks.filter((link) => link.includes(selected.id)).flat()]);
  const svgWidth = 1140;
  const svgHeight = 560;

  els.mainContent.className = "tool-surface";
  els.mainContent.innerHTML = `
    <div class="tool-header">
      <div>
        <h2>Conexiones de negocio</h2>
        <p>${escapeHtml(module.title)}</p>
      </div>
      <button class="ghost-button" id="backToRead"><span class="icon" data-icon="book"></span>Leer modulo</button>
    </div>

    <div class="concept-map">
      <div class="concept-canvas" aria-label="Grafo conceptual oil and gas">
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="xMidYMin meet" role="img" aria-labelledby="conceptGraphTitle conceptGraphDesc">
          <title id="conceptGraphTitle">Grafo conceptual de la industria oil and gas</title>
          <desc id="conceptGraphDesc">Nodos de subsuelo, operacion, midstream, downstream, mercado, finanzas y datos conectados por relaciones de valor.</desc>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8ca096"></path>
            </marker>
          </defs>
          ${conceptLinks
            .map(([from, to, label], index) => {
              const a = getConcept(from);
              const b = getConcept(to);
              const highlighted = linkedIds.has(from) && linkedIds.has(to);
              const muted = !visibleIds.has(from) && !visibleIds.has(to);
              const mx = (a.x + b.x) / 2;
              const my = (a.y + b.y) / 2;
              return `
                <g class="concept-edge ${highlighted ? "active" : ""} ${muted ? "muted" : ""}" style="--edge-delay:${index * 55}ms">
                  <line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" marker-end="url(#arrow)"></line>
                  <text x="${mx}" y="${my - 8}">${escapeHtml(label)}</text>
                </g>
              `;
            })
            .join("")}
          ${concepts
            .map((concept) => {
              const active = concept.id === selected.id;
              const related = linkedIds.has(concept.id);
              const muted = !visibleIds.has(concept.id) && !related;
              return `
                <g class="concept-node ${active ? "active" : ""} ${related ? "related" : ""} ${muted ? "muted" : ""}" data-concept="${concept.id}" tabindex="0" role="button" aria-label="${escapeHtml(concept.label)}">
                  <circle cx="${concept.x}" cy="${concept.y}" r="${active ? 39 : 32}"></circle>
                  <text x="${concept.x}" y="${concept.y + 5}" text-anchor="middle">${escapeHtml(concept.label)}</text>
                </g>
              `;
            })
            .join("")}
        </svg>
      </div>

      <aside class="concept-detail" aria-live="polite">
        <span class="card-label">${escapeHtml(selected.group)}</span>
        <h3>${escapeHtml(selected.label)}</h3>
        <p>${escapeHtml(selected.definition)}</p>
        <div class="detail-block">
          <strong>Por que importa</strong>
          <span>${escapeHtml(selected.why)}</span>
        </div>
        <div class="detail-block">
          <strong>Decision que habilita</strong>
          <span>${escapeHtml(selected.decision)}</span>
        </div>
        <div class="concept-tags">
          ${selected.kpis.map((kpi) => `<span>${escapeHtml(kpi)}</span>`).join("")}
        </div>
        <div class="relation-list">
          ${conceptLinks
            .filter((link) => link.includes(selected.id))
            .map(([from, to, label]) => {
              const other = getConcept(from === selected.id ? to : from);
              return `<button class="relation-button" data-concept="${other.id}"><strong>${escapeHtml(other.label)}</strong><span>${escapeHtml(label)}</span></button>`;
            })
            .join("")}
        </div>
      </aside>
    </div>

    <div class="analysis-grid system-lenses">
      <div class="analysis-card">
        <h3>Subsuelo</h3>
        <p>Roca y reservas definen el potencial, pero solo se vuelven valor si pozo, completacion y superficie lo convierten en caudal repetible.</p>
      </div>
      <div class="analysis-card">
        <h3>Infraestructura</h3>
        <p>Midstream decide la velocidad real de crecimiento: capacidad, linepack, tanques, terminales y contratos pueden habilitar o frenar Vaca Muerta.</p>
      </div>
      <div class="analysis-card">
        <h3>Mercado</h3>
        <p>Trading, refineria, LNG y clientes convierten moleculas en netback. El precio relevante es el realizado, no solo el benchmark.</p>
      </div>
      <div class="analysis-card">
        <h3>Datos</h3>
        <p>SCADA, ERP, EAM, laboratorio, trading y Power BI conectan operacion con caja, riesgo y decisiones del directorio.</p>
      </div>
    </div>
  `;

  document.getElementById("backToRead").addEventListener("click", () => {
    state.view = "read";
    saveState();
    render();
  });
  els.mainContent.querySelectorAll("[data-concept]").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedConcept = node.dataset.concept;
      saveState();
      renderMap();
      paintIcons();
    });
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        node.dispatchEvent(new Event("click"));
      }
    });
  });
}

function renderFlow() {
  const selected = flowScenarios.find((scenario) => scenario.id === state.flowScenario) ?? flowScenarios[0];
  els.mainContent.className = "tool-surface";
  els.mainContent.innerHTML = `
    <div class="tool-header">
      <div>
        <h2>Flujo de valor</h2>
        <p>De recurso geologico a decision financiera.</p>
      </div>
      <button class="ghost-button" id="flowToMap"><span class="icon" data-icon="activity"></span>Ver conexiones</button>
    </div>

    <div class="scenario-bar" aria-label="Escenarios">
      ${flowScenarios
        .map(
          (scenario) => `
            <button class="scenario-button ${scenario.id === selected.id ? "active" : ""}" data-scenario="${scenario.id}" aria-pressed="${scenario.id === selected.id}">
              ${escapeHtml(scenario.label)}
            </button>
          `,
        )
        .join("")}
    </div>

    <div class="flow-board ${selected.stress}" aria-label="Cadena animada de valor">
      <div class="flow-track">
        ${Array.from({ length: 9 })
          .map((_, index) => `<span class="flow-pulse" style="--pulse-delay:${index * 0.42}s"></span>`)
          .join("")}
      </div>
      <div class="flow-steps">
        ${flowSteps
          .map(
            (step, index) => `
              <article class="flow-step" style="--step-index:${index}">
                <span class="step-number">${index + 1}</span>
                <h3>${escapeHtml(step.title)}</h3>
                <strong>${escapeHtml(step.subtitle)}</strong>
                <p>${escapeHtml(step.body)}</p>
                <small>${escapeHtml(step.kpi)}</small>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>

    <div class="scenario-detail">
      <div>
        <span class="card-label">Escenario</span>
        <h3>${escapeHtml(selected.label)}</h3>
        <p>${escapeHtml(selected.effect)}</p>
      </div>
      <div class="detail-block">
        <strong>Decision ejecutiva</strong>
        <span>${escapeHtml(selected.decision)}</span>
      </div>
    </div>
  `;

  document.getElementById("flowToMap").addEventListener("click", () => {
    state.view = "map";
    saveState();
    render();
  });
  els.mainContent.querySelectorAll(".scenario-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.flowScenario = button.dataset.scenario;
      saveState();
      renderFlow();
      paintIcons();
    });
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

function getConcept(id) {
  return concepts.find((concept) => concept.id === id);
}

function conceptsForCurrentModule() {
  const moduleId = state.activeModule;
  if (moduleId === 0) return concepts;
  const linked = new Set(
    concepts
      .filter((concept) => concept.module === moduleId)
      .flatMap((concept) => [concept.id, ...conceptLinks.filter((link) => link.includes(concept.id)).flat()]),
  );
  const result = concepts.filter((concept) => concept.module === moduleId || linked.has(concept.id));
  return result.length ? result : concepts;
}

function conceptForTerm(term) {
  const normalized = normalizeTerm(term);
  return concepts.find((concept) => {
    const labels = [concept.label, ...(concept.aliases ?? [])].map(normalizeTerm);
    return labels.includes(normalized);
  });
}

function conceptGlossary() {
  return concepts
    .flatMap((concept) => [concept.label, ...(concept.aliases ?? [])].map((term) => ({ term, concept })))
    .filter((entry) => entry.term.length > 2)
    .sort((a, b) => b.term.length - a.term.length);
}

function normalizeTerm(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function annotateConceptTerms(root) {
  const glossary = conceptGlossary();
  const used = new Set();
  let count = 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("a, button, code, pre, h1, h2, h3, h4, th")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    if (count >= 28) break;
    const text = node.nodeValue;
    const lower = normalizeTerm(text);
    const match = glossary.find(({ term, concept }) => {
      if (used.has(concept.id)) return false;
      return lower.includes(normalizeTerm(term));
    });
    if (!match) continue;

    const index = lower.indexOf(normalizeTerm(match.term));
    if (index < 0) continue;
    const actual = text.slice(index, index + match.term.length);
    if (!actual.trim()) continue;

    const fragment = document.createDocumentFragment();
    fragment.append(document.createTextNode(text.slice(0, index)));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "concept-chip";
    button.dataset.concept = match.concept.id;
    button.textContent = actual;
    button.setAttribute("aria-label", `Ver concepto ${match.concept.label}`);
    fragment.append(button);
    fragment.append(document.createTextNode(text.slice(index + match.term.length)));
    node.replaceWith(fragment);
    used.add(match.concept.id);
    count += 1;
  }

  root.querySelectorAll(".concept-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedConcept = button.dataset.concept;
      state.view = "map";
      saveState();
      render();
    });
  });
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
    state.view = ["read", "map", "flow", "cards", "quiz", "kpis", "notes"].includes(saved.view) ? saved.view : "read";
    state.selectedConcept = getConcept(saved.selectedConcept) ? saved.selectedConcept : "vaca-muerta";
    state.flowScenario = flowScenarios.some((scenario) => scenario.id === saved.flowScenario) ? saved.flowScenario : "base";
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
        selectedConcept: state.selectedConcept,
        flowScenario: state.flowScenario,
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
