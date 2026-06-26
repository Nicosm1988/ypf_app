import { dictionaryCategories, dictionaryTerms } from "./data/dictionary.js";
import {
  datalitoAnswerModes,
  datalitoArchitectureLayers,
  datalitoEvaluationQuestions,
  datalitoGovernanceControls,
  datalitoIndexVersion,
  datalitoKpis,
  datalitoKnowledgeSources,
  datalitoNoAnswerCases,
  datalitoProductPrinciples,
  datalitoPromptVersion,
  datalitoSecurityCases,
  datalitoSourceSchema,
  datalitoSuggestedPrompts,
} from "./data/datalito.js";
import {
  designSystemBenefits,
  designSystemComparison,
  designSystemComponents,
  designSystemDefinition,
  designSystemDeliverables,
  designSystemFoundations,
  designSystemHeroMetrics,
  designSystemPrinciples,
  designSystemQualityRules,
  designSystemScope,
} from "./data/designSystem.js";
import { guideSections, prdSpecComparison, readinessChecklist } from "./data/engineeringGuide.js";
import {
  methodBacklogColumns,
  methodChannels,
  methodCodeCatalog,
  methodDecisions,
  methodFunctionalLayers,
  methodFutureBacklog,
  methodNaming,
  methodObjectiveSignals,
  methodOperatingFlow,
  methodPendingDecisions,
  methodPlanes,
  methodPrinciples,
  methodProjectFolders,
  methodRoadmap,
  methodRoles,
  methodTeamMetrics,
  methodTypeCatalog,
  methodVmcModel,
} from "./data/datalizationMethod.js";
import {
  dmaicStages,
  leanPractices,
  methodologyCadence,
  methodologyProcessFlow,
  methodologyPrinciples,
  methodologyTools,
  oeeFactors,
  toyotaFourP,
} from "./data/methodology.js";
import { powerBiShortcuts, shortcutsPdf } from "./data/powerbiShortcuts.js";
import { conceptDecantation, narrativeFrame, pageNarratives } from "./data/executiveNarrative.js";
import {
  platformBeforeAfter,
  platformCapabilityShift,
  platformDefinitionCards,
  platformHeroMetrics,
  platformPillars,
} from "./data/platformIntro.js";
import { laneStyles, roadmapPhases } from "./data/roadmap.js";
import { toolingDocs, toolingGroups } from "./data/toolingLibrary.js";

const appRoot = document.querySelector("#appRoot");
const contentTarget = document.querySelector("#content");
const navLinks = [...document.querySelectorAll("[data-route]")];

const icons = {
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
  alert:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>',
  clipboard:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect width="8" height="4" x="8" y="2" rx="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 3H2l8 9.5V20l4 2v-9.5L22 3z"></path></svg>',
  folder:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></svg>',
  gauge:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>',
  gitBranch:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
  layers:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m12 2 10 5-10 5L2 7l10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>',
  message:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>',
  quote:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2v4z"></path><path d="M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h.75c0 2.25-.75 3.75-2.75 4v4z"></path></svg>',
  route:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7H6.5a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1v7z"></path></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M13 2 3 14h8l-1 8 11-13h-8l1-7z"></path></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m4 17 6-6-6-6"></path><path d="M12 19h8"></path></svg>',
  trash:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m19 6-1 14H6L5 6"></path></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
};

const routeTitles = {
  "/": "Datalización Hub | BI Delivery Playbook",
  "/guia-power-bi": "Guía y roadmap de automatización BI/Fabric | Datalización YPF",
  "/metodo-datalizacion": "Método de Datalización | Datalización YPF",
  "/metodologia": "Metodología de mejora continua BI | Datalización YPF",
  "/design-system": "Design System | Datalización Hub",
  "/datalito": "Datalito | Asistente interno de conocimiento",
  "/diccionario": "Diccionario BI | Datalización YPF",
  "/roadmap": "Guía y roadmap de automatización BI/Fabric | Datalización YPF",
  "/proyecto-power-bi": "Proyecto de Power BI con Visual Studio Code | Datalización YPF",
  "/atajos": "Atajos Power BI | Datalización YPF",
  "/librerias": "Librerías y agentes | Datalización YPF",
};

const dictionaryState = {
  query: "",
  category: "Todas",
};

const datalitoStorageKeys = {
  feedback: "datalito.feedback.v1",
  gaps: "datalito.gaps.v1",
};

const datalitoAvatar = {
  png: "/assets/datalito-avatar.png",
  webp256: "/assets/datalito-avatar-256.webp",
  webp512: "/assets/datalito-avatar-512.webp",
};

const datalitoState = {
  isOpen: false,
  mode: "brief",
  messages: [
    {
      id: "welcome",
      role: "assistant",
      answer:
        "Hola, soy Datalito. Estoy acá para charlar con vos sobre la plataforma, ayudarte a encontrar cosas y bajarte a tierra cualquier concepto de BI, gobierno o metodología. Podés saludarme, pedirme contexto o preguntarme algo puntual.",
      confidence: null,
      grounded: false,
      unresolved: false,
      citations: [],
      relatedContent: [],
      suggestedFollowUps: datalitoSuggestedPrompts.global.slice(0, 3),
    },
  ],
  feedback: loadDatalitoCollection(datalitoStorageKeys.feedback),
  gaps: loadDatalitoCollection(datalitoStorageKeys.gaps),
  status: "",
};

const hubNavigationSections = [
  {
    title: "Guía + Roadmap",
    route: "/guia-power-bi",
    iconName: "route",
    text: "Proceso end-to-end para construir, validar, publicar y operar productos BI.",
  },
  {
    title: "Método",
    route: "/metodo-datalizacion",
    iconName: "folder",
    text: "Estructura de trabajo, Teams, SharePoint, naming, backlog, VMC y gobierno.",
  },
  {
    title: "Metodología",
    route: "/metodologia",
    iconName: "gauge",
    text: "OEE BI, DMAIC, VSM, FMEA, Kaizen, SMED, Poka-Yoke y Kata aplicados a BI.",
  },
  {
    title: "Proyecto Power BI",
    route: "/proyecto-power-bi",
    iconName: "code",
    text: "PRD, Spec, PBIP, TMDL, Git, documentación técnica y operación del producto.",
  },
  {
    title: "Diccionario BI",
    route: "/diccionario",
    iconName: "book",
    text: "Lenguaje común para negocio, datos, BI, gobierno, seguridad y adopción.",
  },
  {
    title: "Design System",
    route: "/design-system",
    iconName: "layers",
    text: "Lenguaje visual y funcional para escalar la plataforma sin perder coherencia.",
  },
  {
    title: "Datalito",
    route: "/datalito",
    iconName: "bot",
    text: "Asistente interno para encontrar conocimiento, citar fuentes y registrar brechas.",
  },
  {
    title: "Librerías",
    route: "/librerias",
    iconName: "terminal",
    text: "Catálogo técnico de agentes, MCPs, sandboxes, APIs y librerías evaluables.",
  },
  {
    title: "Atajos",
    route: "/atajos",
    iconName: "spark",
    text: "Acciones frecuentes de Power BI para reducir fricción diaria y errores.",
  },
];

let pointerFrame = 0;

const workflowSteps = [
  {
    title: "Proceso",
    short: "Tarea repetible, responsable y disparador.",
    iconName: "clipboard",
    tone: "orange",
    technical:
      "Mapa operativo del proceso: evento que lo dispara, entradas necesarias, responsables, SLA, excepciones, decisión esperada y salida que debe producirse.",
    functional:
      "Define qué parte del trabajo puede automatizarse, qué parte requiere intervención humana y cómo se mide que el proceso mejoró.",
    examples: [
      "Abastecimiento identifica que el proceso repetible es detectar quiebres de stock críticos antes de que impacten en operación.",
      "Operaciones define que cada desvío de despacho debe generar una revisión con responsable, plazo y evidencia.",
      "Finanzas formaliza el cierre mensual de margen como proceso con cortes, validaciones, aprobaciones y explicación de variaciones.",
    ],
  },
  {
    title: "Reglas",
    short: "Criterios, umbrales y excepciones.",
    iconName: "code",
    tone: "blue",
    technical:
      "Conjunto versionable de reglas de negocio: condiciones, fórmulas, umbrales, prioridades, excepciones, validaciones y criterios de aprobación.",
    functional:
      "Convierte conocimiento experto en instrucciones consistentes para que el proceso no dependa de interpretaciones manuales distintas.",
    examples: [
      "Si el stock proyectado cae por debajo del mínimo, el sistema prioriza el material y dispara una alerta al responsable.",
      "La variación de margen se clasifica por precio, volumen, mix o costo con una regla única para todas las áreas.",
      "Una orden duplicada, sin fecha válida o sin centro de costo queda observada antes de entrar al circuito de aprobación.",
    ],
  },
  {
    title: "Datos",
    short: "Fuentes, calidad, frecuencia y linaje.",
    iconName: "layers",
    tone: "cyan",
    technical:
      "Integración de fuentes con owners, contratos de datos, frecuencia, linaje, controles de calidad, preparación, historización y trazabilidad.",
    functional: "Hace que la automatización use datos confiables en el momento correcto. Sin esta base, el proceso automatiza errores.",
    examples: [
      "El volumen despachado se toma del sistema transaccional con corte horario, responsable de negocio y regla de conciliación.",
      "Power Query elimina columnas innecesarias y preserva folding para que la actualización no bloquee el proceso.",
      "Los controles detectan duplicados, fechas nulas y códigos sin correspondencia antes de alimentar la automatización.",
    ],
  },
  {
    title: "Motor",
    short: "Modelo, lógica, cálculo y decisión.",
    iconName: "gitBranch",
    tone: "green",
    technical:
      "Modelo semántico y motor de decisión que calculan estado, riesgo, prioridad, recomendación o resultado a partir de reglas y datos gobernados.",
    functional: "Transforma datos en señales accionables. La automatización sabe qué ocurrió, qué importa y qué debería pasar después.",
    examples: [
      "El motor prioriza desvíos por impacto económico, criticidad operativa y antigüedad del evento.",
      "El modelo calcula margen, volumen neto y variación con la misma lógica para Finanzas, Comercial y Operaciones.",
      "Las medidas se documentan y versionan para que cada automatización pueda auditar cómo llegó a un resultado.",
    ],
  },
  {
    title: "Acción",
    short: "Salida operativa, permisos y trazabilidad.",
    iconName: "shield",
    tone: "violet",
    technical:
      "Diseño de la salida del proceso: tablero, alerta, tarea, ticket, API, aprobación, RLS/OLS, permisos, auditoría y confirmación de ejecución.",
    functional:
      "La automatización debe terminar en una acción concreta y trazable, no solo en una visualización que alguien debe interpretar manualmente.",
    examples: [
      "Un desvío crítico crea una tarea para el responsable, con evidencia, prioridad y fecha límite.",
      "Un tablero muestra qué acciones están pendientes, cuáles fueron resueltas y qué excepciones siguen abiertas.",
      "Los permisos aseguran que cada usuario vea solo los procesos, montos y activos que le corresponden.",
    ],
  },
  {
    title: "Orquestación",
    short: "Pipelines, Git, ambientes y agenda.",
    iconName: "terminal",
    tone: "blue",
    technical:
      "Ejecución controlada con jobs, refresh, pipelines, notebooks, PBIP/TMDL, ramas, pull requests, ambientes Dev-Test-Prod y reglas de despliegue.",
    functional:
      "Permite que el proceso corra sin intervención manual, con control de cambios, ambientes separados y posibilidad de rollback.",
    examples: [
      "Un pipeline actualiza datos, recalcula reglas y publica alertas cada mañana antes de la reunión operativa.",
      "Una regla nueva pasa por pull request antes de entrar a producción.",
      "Las conexiones cambian entre desarrollo, prueba y producción sin editar manualmente el proceso.",
    ],
  },
  {
    title: "Operación",
    short: "SLA, incidentes, adopción y mejora.",
    iconName: "gauge",
    tone: "orange",
    technical:
      "Monitoreo continuo de SLA, refresh, gateway, capacidad Fabric, latencia, errores, adopción, incidentes, auditoría y backlog de optimización.",
    functional: "Automatizar no es publicar una vez: es sostener el proceso, detectar fallas, medir impacto y mejorarlo con evidencia.",
    examples: [
      "Si falla un refresh, se registra incidente, responsable, causa y acción correctiva.",
      "Capacity Metrics muestra throttling y el equipo ajusta modelo, agenda o capacidad antes de afectar al usuario.",
      "La adopción muestra qué alertas se atienden, cuáles se ignoran y qué parte del proceso debe rediseñarse.",
    ],
  },
];

const datalizationCriteria = [
  {
    title: "Proceso mapeado",
    text: "Existe un proceso repetible con disparador, responsable, entrada, salida, SLA y excepciones conocidas.",
  },
  {
    title: "Reglas explícitas",
    text: "Los criterios de negocio están escritos como reglas, umbrales, validaciones y prioridades auditables.",
  },
  {
    title: "Datos confiables",
    text: "Las fuentes tienen owner, linaje, calidad, frecuencia y controles suficientes para ejecutar el proceso.",
  },
  {
    title: "Motor automatizado",
    text: "La lógica transforma datos en estado, prioridad, recomendación o acción sin depender de cálculo manual.",
  },
  {
    title: "Acción integrada",
    text: "La salida llega al usuario, tablero, ticket, alerta o sistema que permite ejecutar el siguiente paso.",
  },
  {
    title: "Operación gobernada",
    text: "El proceso tiene monitoreo, incidentes, permisos, runbook, mejora continua y medición de adopción.",
  },
];

const datalizationLevels = [
  {
    percent: "0-20%",
    title: "Proceso manual",
    text: "El trabajo depende de planillas, correos, criterio individual o carga manual. Hay datos, pero no automatización real.",
  },
  {
    percent: "21-40%",
    title: "Proceso definido",
    text: "El circuito está identificado y hay reglas iniciales, aunque todavía faltan datos gobernados y ejecución automática.",
  },
  {
    percent: "41-60%",
    title: "Datos y reglas conectados",
    text: "Las fuentes y reglas principales están integradas, pero la acción todavía requiere intervención manual frecuente.",
  },
  {
    percent: "61-80%",
    title: "Automatización controlada",
    text: "El proceso calcula, alerta o prioriza con trazabilidad, seguridad y controles, aunque aún tiene brechas operativas.",
  },
  {
    percent: "81-99%",
    title: "Automatización operativa",
    text: "El proceso se ejecuta en la rutina real, se monitorea y mejora; solo quedan excepciones o integraciones menores.",
  },
  {
    percent: "100%",
    title: "Datalizado",
    text: "El proceso se dispara, calcula, controla, ejecuta, registra y mejora con datos gobernados y responsables claros.",
  },
];

const guideStoryPalette = ["#ff6b3b", "#3aa0ff", "#35c9bd", "#30d174", "#8d72ff", "#67e8dc", "#5fa8ff", "#f2c94c", "#ff8a5c"];

const guideStoryDetails = {
  "prd-spec": {
    iconName: "clipboard",
    flow: "La necesidad se convierte en contrato.",
    scene:
      "La historia empieza cuando una tarea repetida deja de resolverse por memoria, urgencia o planillas aisladas. Antes de construir, el equipo nombra el proceso, el disparador, la decisión esperada y la salida que debe quedar registrada.",
    automation:
      "La automatización nace cuando el PRD explica el proceso y la Spec traduce esa intención en reglas, datos, arquitectura y criterios verificables.",
    outcome: "Un proceso entendido antes de ser construido.",
  },
  "etl-power-query": {
    iconName: "layers",
    flow: "Las fuentes dejan de ser insumos frágiles.",
    scene:
      "Con el proceso claro, el siguiente riesgo es alimentar la automatización con datos poco confiables. Las fuentes se conectan, se limpian y se preparan para que cada actualización sea repetible, auditable y rápida.",
    automation:
      "Power Query no es una zona de prueba; es la primera línea de producción de la automatización. Cada transformación debe poder explicarse, mantenerse y volver a ejecutarse sin intervención manual.",
    outcome: "Datos preparados para correr sin depender de ajustes manuales.",
  },
  "modelo-vertipaq": {
    iconName: "gitBranch",
    flow: "El modelo ordena la lógica del proceso.",
    scene:
      "Cuando los datos ya entran con calidad, el modelo semántico convierte tablas dispersas en una estructura que el negocio puede entender. La granularidad, las relaciones y las dimensiones definen cómo se leerá cada señal.",
    automation:
      "Un modelo estrella bien diseñado permite que la automatización filtre, agregue y compare sin ambigüedad, con performance suficiente para acompañar la rutina operativa.",
    outcome: "Un motor semántico consistente y rápido.",
  },
  dax: {
    iconName: "code",
    flow: "Las reglas se transforman en cálculo gobernado.",
    scene:
      "La decisión operativa aparece cuando las reglas de negocio se expresan como medidas claras. DAX debe contar la misma historia para todos: qué se calcula, con qué contexto y bajo qué excepción.",
    automation:
      "Las medidas dejan de ser fórmulas sueltas y pasan a ser reglas versionables, probadas y revisables con criterios funcionales y de performance.",
    outcome: "Reglas de negocio calculadas con trazabilidad.",
  },
  "seguridad-gobierno": {
    iconName: "shield",
    flow: "La confianza se diseña antes de publicar.",
    scene:
      "Una automatización operativa puede afectar decisiones, prioridades y responsabilidades. Por eso la seguridad, el linaje y la responsabilidad operativa no son una etapa administrativa: son parte del diseño del proceso.",
    automation:
      "La automatización solo escala si cada usuario ve lo que corresponde, cada dato tiene responsable y cada decisión puede explicarse desde su origen.",
    outcome: "Permisos, linaje y responsabilidades explícitas.",
  },
  "ux-reportes": {
    iconName: "route",
    flow: "La salida empuja la acción correcta.",
    scene:
      "El usuario no necesita más pantallas: necesita saber qué pasó, qué importa y qué acción sigue. La experiencia debe reducir lectura, dudas y retrabajo.",
    automation:
      "La UX convierte el cálculo en operación: prioriza señales, guía el análisis y deja evidencia suficiente para que la acción ocurra sin volver a reconstruir el caso.",
    outcome: "Una salida accionable, clara y adoptable.",
  },
  "fabric-direct-lake": {
    iconName: "folder",
    flow: "La arquitectura define cómo llegarán los datos.",
    scene:
      "Antes de escribir transformaciones o medidas, el equipo debe saber qué fuentes alimentan el proceso, con qué latencia, bajo qué permisos y en qué arquitectura van a vivir. Fabric, OneLake, Lakehouse, Warehouse, Import, Direct Lake o DirectQuery no son adornos: condicionan todo el diseño posterior.",
    automation:
      "La automatización solo puede ser confiable si la arquitectura asegura acceso, frecuencia, capacidad y modo de almacenamiento compatibles con la operación que se quiere automatizar.",
    outcome: "Fuentes, plataforma y storage decididos antes de modelar.",
  },
  "cicd-pbip": {
    iconName: "terminal",
    flow: "El cambio se aprueba antes de publicar.",
    scene:
      "Una automatización viva cambia: aparecen reglas, fuentes, excepciones y mejoras. Antes de publicar, cada cambio debe quedar versionado, probado y aprobado.",
    automation:
      "PBIP, TMDL, Git, pull requests y ambientes separados convierten el BI en un activo revisable y recuperable antes de llegar a producción.",
    outcome: "Solución aprobada para publicar.",
  },
  publicacion: {
    iconName: "download",
    flow: "La automatización pasa a usuarios reales.",
    scene:
      "Publicar es el momento en que la solución deja de ser construcción interna y queda disponible para la operación: workspace productivo, app, permisos, refresh, credenciales y comunicación.",
    automation:
      "La publicación convierte el modelo y el reporte en un servicio usable. Desde ese punto, el proceso debe tener acceso real, actualización productiva y una audiencia clara.",
    outcome: "Solución publicada y disponible.",
  },
  "operacion-capacidad": {
    iconName: "gauge",
    flow: "La automatización se opera y mejora.",
    scene:
      "La historia no termina al publicar. Un proceso datalizado debe correr, avisar, registrar fallas, medir uso y evolucionar con evidencia.",
    automation:
      "La operación monitorea refresh, capacidad, incidentes, adopción y backlog para que el proceso automatizado siga siendo confiable cuando cambia la realidad.",
    outcome: "Producción monitoreada, con responsables y mejora continua.",
  },
};

const guideDocumentTemplates = [
  {
    id: "prd",
    title: "Modelo PRD",
    eyebrow: "Proceso y negocio",
    source: "assets/docs/modelos/prd-datalizacion.docx",
    format: "Word editable",
    purpose:
      "Sirve para acordar qué proceso se quiere automatizar, por qué importa, quién lo usa, qué reglas funcionales aplican y cómo se mide el éxito.",
    preview: [
      "Resumen ejecutivo",
      "Proceso actual y problema a resolver",
      "Disparador, usuarios y responsabilidades",
      "Reglas de negocio, KPIs y alcance",
      "Riesgos, supuestos y criterios de aceptación",
    ],
  },
  {
    id: "spec",
    title: "Modelo Spec",
    eyebrow: "Implementación técnica",
    source: "assets/docs/modelos/spec-datalizacion.docx",
    format: "Word editable",
    purpose:
      "Convierte el PRD aprobado en arquitectura construible: datos, modelado, DAX, seguridad, UX, versionado, publicación y operación.",
    preview: [
      "Contexto técnico y arquitectura",
      "Fuentes, contratos de datos y Power Query",
      "Modelo semántico, medidas y reglas DAX",
      "Seguridad, gobierno y salida operativa",
      "Despliegue, operación, pruebas y aceptación técnica",
    ],
  },
];

const projectBuildSteps = [
  {
    title: "Acordar PRD y Spec antes de abrir Power BI",
    easy: "Primero se define qué tarea manual se quiere eliminar, qué salida espera el usuario y qué regla debe cumplirse.",
    technical:
      "El PRD fija objetivo, alcance, KPI, responsables y criterios de aceptación. La Spec baja eso a fuentes, modelo, DAX, seguridad, UX, pruebas y publicación.",
    tools: ["Word", "Markdown", "PRD", "Spec"],
  },
  {
    title: "Crear el proyecto PBIP desde Power BI Desktop",
    easy: "En lugar de guardar solo un PBIX cerrado, se guarda el proyecto como carpetas para que los cambios se puedan revisar.",
    technical:
      "PBIP separa reporte y modelo semántico en archivos versionables. Eso permite comparar medidas, relaciones, expresiones TMDL y metadatos.",
    tools: ["Power BI Desktop", "PBIP", "TMDL"],
  },
  {
    title: "Abrir la carpeta en Visual Studio Code",
    easy: "VS Code se usa como mesa de trabajo: ahí se ve la documentación, los archivos del modelo y los scripts en un solo lugar.",
    technical:
      "La carpeta del proyecto debe incluir README, PRD, Spec, documentación técnica, scripts y archivos PBIP/TMDL. Cada cambio queda visible antes de publicarse.",
    tools: ["VS Code", "Explorador de archivos", "Markdown"],
  },
  {
    title: "Versionar con Git y trabajar por ramas",
    easy: "Cada mejora se hace en una rama. Antes de llegar a producción, alguien puede revisar qué cambió.",
    technical:
      "Git permite diff, historial, pull request, rollback y trazabilidad. Sirve para controlar cambios de medidas, relaciones, documentación y scripts.",
    tools: ["Git", "GitHub", "Pull request"],
  },
  {
    title: "Validar modelo, DAX, seguridad y performance",
    easy: "No alcanza con que el reporte se vea bien: hay que probar números, permisos, tiempos de carga y actualización.",
    technical:
      "Se validan medidas DAX, relaciones, cardinalidad, RLS/OLS, refresh, Query Folding, Performance Analyzer y consumo de capacidad cuando aplique.",
    tools: ["DAX Studio", "Tabular Editor", "Performance Analyzer"],
  },
  {
    title: "Publicar, monitorear y dejar operación definida",
    easy: "Cuando se publica, la solución pasa a ser un servicio. Debe tener responsables, alertas y una forma clara de pedir mejoras.",
    technical:
      "La salida requiere workspace, app o audiencia, credenciales, gateway, refresh, endorsement, monitoreo, runbook, SLA e incidentes.",
    tools: ["Power BI Service", "Deployment pipelines", "Capacity Metrics"],
  },
];

const projectToolStack = [
  {
    title: "Power BI Desktop",
    text: "Construye el reporte y el modelo. Es donde se diseñan páginas, relaciones, medidas DAX y configuración principal.",
  },
  {
    title: "Visual Studio Code",
    text: "Ordena el proyecto como carpeta: documentación, PBIP, TMDL, scripts y contexto para revisión o asistencia con IA.",
  },
  {
    title: "Git y GitHub",
    text: "Registran cambios, permiten revisión por pull request y evitan publicar modificaciones sin trazabilidad.",
  },
  {
    title: "PBIP y TMDL",
    text: "Vuelven el reporte y el modelo semántico archivos revisables. Permiten ver diferencias de medidas, tablas y metadatos.",
  },
  {
    title: "DAX Studio y Tabular Editor",
    text: "Ayudan a revisar medidas, performance, metadatos y calidad del modelo cuando el proyecto empieza a crecer.",
  },
  {
    title: "Power BI Service / Fabric",
    text: "Publica, asegura, refresca y opera la solución con workspaces, apps, pipelines, permisos y monitoreo.",
  },
];

const guideGlossaryCuratedTerms = [
  termFromDictionary("datalizacion", ["Datalización"]),
  termFromDictionary("automatizacion-procesos", ["Automatización", "automatización", "automatización de procesos"]),
  {
    id: "bi",
    title: "BI",
    definition: "Business Intelligence: disciplina que convierte datos en información confiable para analizar, decidir y operar mejor.",
    whyItMatters: "En esta guía, BI no es solo reportar; es sostener procesos automatizados con datos y reglas.",
    aliases: ["BI", "Business Intelligence"],
  },
  termFromDictionary("prd", ["PRD"]),
  termFromDictionary("spec-producto-tecnica", ["Spec", "Spec técnica"]),
  termFromDictionary("criterio-aceptacion", ["Criterios de aceptación", "criterio de aceptación"]),
  termFromDictionary("disparador-proceso", ["Disparador", "disparador"]),
  {
    id: "stakeholder",
    title: "Stakeholder",
    definition: "Persona o grupo que participa, valida, usa o se ve afectado por el proceso automatizado.",
    whyItMatters: "Ayuda a identificar quién decide, quién usa la salida y quién debe resolver excepciones.",
    aliases: ["Stakeholder", "stakeholders", "Mapa de stakeholders"],
  },
  {
    id: "etl",
    title: "ETL",
    definition: "Extract, Transform, Load: proceso de extraer datos, transformarlos y cargarlos para uso analítico u operativo.",
    whyItMatters: "Ordena cómo los datos llegan al modelo o a la automatización sin depender de tareas manuales.",
    aliases: ["ETL"],
  },
  termFromDictionary("power-query", ["Power Query"]),
  termFromDictionary("query-folding", ["Query Folding", "Query folding", "folding", "Folding"]),
  termFromDictionary("refresh", ["Refresh", "refresh", "refresco", "refrescos"]),
  termFromDictionary("data-quality", ["Calidad de datos", "calidad"]),
  termFromDictionary("modelo-semantico", ["Modelo semántico", "modelo semántico", "motor semántico"]),
  termFromDictionary("vertipaq", ["VertiPaq", "VeryPaq", "verypaq"]),
  termFromDictionary("esquema-estrella", ["Esquema estrella", "modelo estrella"]),
  termFromDictionary("granularidad", ["Granularidad", "granularidad"]),
  termFromDictionary("cardinalidad", ["Cardinalidad", "cardinalidad"]),
  termFromDictionary("tabla-hechos", ["Hechos", "hechos", "tabla de hechos"]),
  termFromDictionary("tabla-dimensiones", ["Dimensiones", "dimensiones", "tabla de dimensiones"]),
  termFromDictionary("relacion-uno-a-muchos", ["Relaciones", "relaciones"]),
  {
    id: "dax",
    title: "DAX",
    definition:
      "Data Analysis Expressions: lenguaje de fórmulas de Power BI para crear medidas, reglas y cálculos sobre el modelo semántico.",
    whyItMatters: "Permite expresar reglas de negocio reutilizables y auditables.",
    aliases: ["DAX"],
  },
  termFromDictionary("medida-dax", ["Medidas", "medidas", "medida"]),
  {
    id: "var-dax",
    title: "VAR",
    definition: "Palabra clave de DAX para guardar un valor intermedio dentro de una medida y evitar recálculos.",
    whyItMatters: "Mejora legibilidad y puede ayudar a performance en medidas complejas.",
    aliases: ["VAR"],
  },
  {
    id: "iteradores-x",
    title: "Iteradores X",
    definition: "Funciones DAX como SUMX, AVERAGEX o FILTER que recorren filas y evalúan una expresión por cada una.",
    whyItMatters: "Son potentes, pero mal usados pueden volver lento el modelo.",
    aliases: ["iteradores X", "iteradores", "SUMX", "AVERAGEX"],
  },
  termFromDictionary("formula-engine", ["Formula Engine"]),
  {
    id: "tabular-editor",
    title: "Tabular Editor",
    definition: "Herramienta para editar, auditar y automatizar modelos tabulares de Power BI y Analysis Services.",
    whyItMatters: "Permite ordenar metadatos, revisar medidas y mantener modelos con criterio de ingeniería.",
    aliases: ["Tabular Editor"],
  },
  {
    id: "seguridad",
    title: "Seguridad",
    definition: "Diseño de permisos, roles y controles para que cada usuario acceda solo a lo que corresponde.",
    whyItMatters: "Una automatización sin seguridad puede exponer datos o disparar acciones indebidas.",
    aliases: ["Seguridad", "seguridad"],
  },
  termFromDictionary("rls", ["RLS", "RLS dinámico"]),
  termFromDictionary("ols", ["OLS"]),
  {
    id: "rls-ols",
    title: "RLS/OLS",
    definition: "Combinación de seguridad por filas y por objetos para limitar datos visibles según usuario o rol.",
    whyItMatters: "Permite proteger alcance operativo y atributos sensibles dentro de un mismo modelo.",
    aliases: ["RLS/OLS"],
  },
  termFromDictionary("userprincipalname", ["USERPRINCIPALNAME()"]),
  termFromDictionary("lineage", ["Linaje", "linaje"]),
  termFromDictionary("data-owner", ["Owner", "owner", "owners", "ownership"]),
  termFromDictionary("data-steward", ["Steward", "steward", "stewards", "stewardship"]),
  termFromDictionary("certificacion-dataset", ["Certificación", "certificación", "certificación de dataset"]),
  {
    id: "b2b",
    title: "B2B",
    definition: "Business-to-business: usuarios externos o invitados que pertenecen a otra organización o tenant.",
    whyItMatters: "En seguridad Power BI, usuarios B2B pueden comportarse distinto y deben probarse con identidades reales.",
    aliases: ["B2B"],
  },
  {
    id: "ux",
    title: "UX",
    definition: "User Experience: diseño de la experiencia para que el usuario entienda, navegue y actúe con bajo esfuerzo.",
    whyItMatters: "Una automatización falla si la salida no guía la acción correcta.",
    aliases: ["UX"],
  },
  termFromDictionary("regla-3-30-300", ["3-30-300", "regla 3-30-300"]),
  {
    id: "drill-through",
    title: "Drill-through",
    definition: "Navegación desde un resumen hacia una página de detalle filtrada por el contexto seleccionado.",
    whyItMatters: "Permite pasar de señal a evidencia sin reconstruir manualmente el caso.",
    aliases: ["drill-through", "drill through"],
  },
  {
    id: "slicer",
    title: "Slicer",
    definition: "Filtro visual de Power BI que permite al usuario elegir valores como fecha, región o producto.",
    whyItMatters: "Demasiados slicers agregan carga cognitiva y pueden degradar performance.",
    aliases: ["slicers", "Slicers", "slicer"],
  },
  termFromDictionary("visual", ["Visuales", "visuales", "visual"]),
  termFromDictionary("accion-trazable", ["Acción trazable", "acción trazable", "acciones trazables"]),
  {
    id: "performance",
    title: "Performance",
    definition: "Capacidad de responder rápido, refrescar a tiempo y sostener uso real sin degradarse.",
    whyItMatters: "Condiciona adopción y confiabilidad operativa.",
    aliases: ["Performance", "performance"],
  },
  {
    id: "fabric",
    title: "Microsoft Fabric",
    definition:
      "Plataforma de Microsoft que integra almacenamiento, ingeniería, ciencia de datos, BI y operación analítica en una experiencia unificada.",
    whyItMatters: "Permite acercar datos, pipelines, lakehouse y Power BI en una arquitectura común.",
    aliases: ["Fabric", "Microsoft Fabric"],
  },
  termFromDictionary("direct-lake", ["Direct Lake"]),
  termFromDictionary("onelake", ["OneLake"]),
  {
    id: "delta-parquet",
    title: "Delta/Parquet",
    definition:
      "Formatos de almacenamiento analítico usados en lakehouses: Parquet guarda columnas; Delta agrega transacciones y control de versiones.",
    whyItMatters: "Son la base habitual para que Fabric y Direct Lake lean datos de forma eficiente.",
    aliases: ["Delta/Parquet", "Delta", "Parquet"],
  },
  {
    id: "import-mode",
    title: "Import",
    definition: "Modo de Power BI que copia datos al modelo en memoria para lograr consultas rápidas.",
    whyItMatters: "Sirve de referencia para comparar la experiencia de Direct Lake.",
    aliases: ["import", "Import"],
  },
  {
    id: "storage-mode",
    title: "Modo de almacenamiento",
    definition:
      "Configuración que define cómo una tabla del modelo semántico accede a los datos: Import, DirectQuery, Direct Lake, Dual o combinaciones controladas.",
    whyItMatters: "Condiciona performance, refresh, seguridad, capacidad y comportamiento de las consultas.",
    aliases: ["storage", "storage mode", "modo de almacenamiento", "modo de storage"],
  },
  termFromDictionary("v-order", ["V-Order"]),
  termFromDictionary("spark-optimize", ["Optimize", "Spark Optimize"]),
  termFromDictionary("vacuum", ["Vacuum"]),
  {
    id: "directquery",
    title: "DirectQuery",
    definition: "Modo que consulta la fuente en tiempo real sin importar todos los datos al modelo.",
    whyItMatters: "Reduce copia de datos, pero puede ser más lento y depender de la fuente.",
    aliases: ["DirectQuery"],
  },
  termFromDictionary("directquery-fallback", ["fallback", "Fallback", "fallbacks"]),
  {
    id: "lakehouse",
    title: "Lakehouse",
    definition: "Arquitectura que combina almacenamiento tipo lago con capacidades de consulta y gobierno más cercanas a un warehouse.",
    whyItMatters: "Es una pieza habitual en Fabric para preparar datos analíticos reutilizables.",
    aliases: ["Lakehouse", "lakehouse"],
  },
  {
    id: "warehouse",
    title: "Warehouse",
    definition: "Almacén de datos optimizado para consultas analíticas, reporting y consumo estructurado.",
    whyItMatters: "Puede ser la capa ordenada desde la que se alimentan modelos BI.",
    aliases: ["Warehouse", "warehouse"],
  },
  {
    id: "cicd",
    title: "CI/CD",
    definition: "Continuous Integration / Continuous Delivery: práctica para integrar, probar y desplegar cambios de forma controlada.",
    whyItMatters: "Reduce riesgo al mover BI entre ambientes y evita publicaciones manuales sin revisión.",
    aliases: ["CI/CD"],
  },
  termFromDictionary("pbip", ["PBIP"]),
  termFromDictionary("tmdl", ["TMDL"]),
  {
    id: "pbip-tmdl",
    title: "PBIP/TMDL",
    definition: "Uso combinado de Power BI Project y TMDL para versionar reportes, modelos y metadatos como archivos revisables.",
    whyItMatters: "Hace que el BI pueda revisarse con Git, pull requests y diferencias legibles.",
    aliases: ["PBIP/TMDL"],
  },
  {
    id: "git",
    title: "Git",
    definition: "Sistema de control de versiones que registra cambios, autores, ramas y evolución de archivos.",
    whyItMatters: "Permite revisar y recuperar cambios en modelos, specs y documentación.",
    aliases: ["Git"],
  },
  termFromDictionary("pull-request", ["Pull Request", "pull request", "pull requests", "PRs", "PR"]),
  termFromDictionary("feature-branch", ["Ramas", "ramas", "branches", "feature branch"]),
  {
    id: "dev-test-prod",
    title: "Dev-Test-Prod",
    definition: "Separación de ambientes de desarrollo, prueba y producción.",
    whyItMatters: "Permite validar cambios antes de afectar a usuarios productivos.",
    aliases: ["Dev-Test-Prod", "Dev, Test y Prod", "desarrollo, prueba y producción"],
  },
  termFromDictionary("deployment-pipelines", ["Deployment Pipelines", "pipeline de deployment", "pipelines"]),
  {
    id: "release",
    title: "Release",
    definition: "Publicación controlada de una versión hacia un ambiente de uso.",
    whyItMatters: "Ordena qué cambia, quién aprueba y cómo volver atrás si algo falla.",
    aliases: ["Release", "release"],
  },
  {
    id: "sla",
    title: "SLA",
    definition:
      "Service Level Agreement: compromiso de nivel de servicio, como horario de disponibilidad, tiempo de respuesta o ventana de actualización.",
    whyItMatters: "Define qué espera la operación y contra qué se mide el cumplimiento.",
    aliases: ["SLA"],
  },
  termFromDictionary("gateway-power-bi", ["Gateway", "gateway"]),
  termFromDictionary("capacity-units", ["CUs", "Capacity Units"]),
  termFromDictionary("fabric-capacity-metrics", ["Fabric Capacity Metrics"]),
  termFromDictionary("throttling", ["Throttling", "throttling"]),
  termFromDictionary("incremental-refresh", ["Incremental Refresh", "incremental refresh"]),
  {
    id: "incidente",
    title: "Incidente",
    definition: "Evento que afecta o amenaza el funcionamiento esperado de una automatización.",
    whyItMatters: "Debe registrarse con causa, impacto, responsable y acción correctiva.",
    aliases: ["Incidente", "incidente", "incidentes"],
  },
  {
    id: "backlog",
    title: "Backlog",
    definition: "Lista priorizada de mejoras, incidentes o tareas pendientes.",
    whyItMatters: "Permite evolucionar la automatización con orden y evidencia de impacto.",
    aliases: ["Backlog", "backlog"],
  },
  {
    id: "api",
    title: "API",
    definition: "Interfaz que permite que sistemas intercambien datos o acciones de forma programática.",
    whyItMatters: "Puede conectar la automatización BI con tareas, tickets, alertas u otros sistemas.",
    aliases: ["API", "APIs"],
  },
];

const guideGlossaryCuratedIds = new Set(guideGlossaryCuratedTerms.map((term) => term.id));
const guideGlossaryTerms = [
  ...guideGlossaryCuratedTerms,
  ...dictionaryTerms
    .filter((term) => !guideGlossaryCuratedIds.has(term.id))
    .map((term) => ({
      id: term.id,
      title: term.term,
      definition: term.definition,
      whyItMatters: term.whyItMatters,
      aliases: [term.term],
    })),
];

const guideGlossaryTermById = new Map(guideGlossaryTerms.map((term) => [term.id, term]));
const guideGlossaryAliasEntries = guideGlossaryTerms
  .flatMap((term) => [...new Set([term.title, ...(term.aliases || [])])].map((alias) => ({ alias, term })))
  .filter((entry) => entry.alias)
  .sort((a, b) => b.alias.length - a.alias.length);
const guideGlossaryAliasMap = new Map(guideGlossaryAliasEntries.map((entry) => [normalizeText(entry.alias), entry.term]));
const guideGlossaryRegex = new RegExp(
  `(^|[^\\p{L}\\p{N}_])(${guideGlossaryAliasEntries.map((entry) => escapeRegExp(entry.alias)).join("|")})(?=$|[^\\p{L}\\p{N}_])`,
  "giu",
);

const guideGlossaryBySectionId = {
  "prd-spec": ["prd", "spec-producto-tecnica", "criterio-aceptacion", "disparador-proceso", "stakeholder", "bi", "power-query", "dax"],
  "etl-power-query": [
    "etl",
    "power-query",
    "query-folding",
    "refresh",
    "data-quality",
    "incremental-refresh",
    "fabric",
    "lakehouse",
    "warehouse",
    "direct-lake",
    "import-mode",
    "directquery",
  ],
  "modelo-vertipaq": [
    "modelo-semantico",
    "storage-mode",
    "vertipaq",
    "direct-lake",
    "import-mode",
    "directquery",
    "directquery-fallback",
    "esquema-estrella",
    "granularidad",
    "cardinalidad",
    "tabla-hechos",
    "tabla-dimensiones",
    "relacion-uno-a-muchos",
  ],
  dax: ["dax", "medida-dax", "var-dax", "iteradores-x", "formula-engine", "tabular-editor", "performance"],
  "seguridad-gobierno": [
    "seguridad",
    "rls",
    "ols",
    "rls-ols",
    "userprincipalname",
    "lineage",
    "data-owner",
    "data-steward",
    "certificacion-dataset",
    "b2b",
  ],
  "ux-reportes": ["ux", "regla-3-30-300", "drill-through", "slicer", "visual", "performance", "accion-trazable"],
  "fabric-direct-lake": [
    "fabric",
    "onelake",
    "lakehouse",
    "warehouse",
    "storage-mode",
    "direct-lake",
    "import-mode",
    "directquery",
    "delta-parquet",
    "v-order",
    "spark-optimize",
    "vacuum",
    "directquery-fallback",
  ],
  "cicd-pbip": [
    "cicd",
    "pbip",
    "tmdl",
    "pbip-tmdl",
    "git",
    "pull-request",
    "feature-branch",
    "dev-test-prod",
    "deployment-pipelines",
    "release",
  ],
  publicacion: ["release", "deployment-pipelines", "pbip", "tmdl", "git", "pull-request"],
  "operacion-capacidad": [
    "sla",
    "refresh",
    "gateway-power-bi",
    "capacity-units",
    "fabric-capacity-metrics",
    "throttling",
    "incremental-refresh",
    "incidente",
    "backlog",
  ],
};

const interactiveSurfaceSelector = [
  ".visual-summary",
  ".stat",
  ".feature-card",
  ".datalization-card",
  ".datalization-level",
  ".platform-card",
  ".platform-definition-card",
  ".platform-timeline-card",
  ".platform-discipline-card",
  ".platform-metric",
  ".hub-nav-card",
  ".design-system-card",
  ".design-system-benefit",
  ".design-system-component",
  ".design-system-final",
  ".datalito-card",
  ".datalito-source-card",
  ".datalito-kpi-card",
  ".datalito-message",
  ".executive-brief",
  ".executive-support-card",
  ".concept-tree",
  ".concept-tree-level",
  ".concept-branch",
  ".method-flow-step",
  ".method-command-card",
  ".method-plane-card",
  ".method-layer-card",
  ".method-channel-card",
  ".method-folder-detail",
  ".method-naming-lab",
  ".method-signal-card",
  ".method-vmc-card",
  ".method-roadmap-item",
  ".method-role-card",
  ".methodology-process",
  ".methodology-process-step",
  ".process-block",
  ".workflow-lab",
  ".workflow-case",
  ".workflow-node-card",
  ".workflow-step-panel",
  ".workflow-output",
  ".mini-step",
  ".term-card",
  ".empty-state",
  ".control-panel",
  ".roadmap-pipeline",
  ".pipeline-step",
  ".pipeline-lane-card",
  ".phase-card",
  ".project-copy",
  ".code-window",
  ".quality-card",
  ".pbip-note",
  ".shortcut-hero",
  ".shortcut-card",
  ".tooling-card",
  ".methodology-principle",
  ".oee-factor",
  ".dmaic-stage",
  ".methodology-tool-card",
  ".toyota-layer",
  ".lean-practice",
  ".cadence-item",
  ".methodology-close",
].join(",");

function icon(name) {
  return `<span class="icon" aria-hidden="true">${icons[name] || ""}</span>`;
}

function termFromDictionary(id, aliases = [], title = "") {
  const term = dictionaryTerms.find((item) => item.id === id);
  if (!term) {
    throw new Error(`No existe el término de diccionario: ${id}`);
  }

  return {
    id,
    title: title || aliases[0] || term.term,
    definition: term.definition,
    whyItMatters: term.whyItMatters,
    aliases: [term.term, ...aliases],
  };
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderExplainedText(value) {
  const text = String(value);
  let html = "";
  let lastIndex = 0;

  text.replace(guideGlossaryRegex, (fullMatch, prefix, matchedTerm, offset) => {
    const matchStart = offset + prefix.length;
    const term = guideGlossaryAliasMap.get(normalizeText(matchedTerm));
    if (!term) return fullMatch;

    html += escapeHtml(text.slice(lastIndex, matchStart));
    html += renderInlineTerm(matchedTerm, term);
    lastIndex = matchStart + matchedTerm.length;
    return fullMatch;
  });

  html += escapeHtml(text.slice(lastIndex));
  return html;
}

function renderInlineTerm(label, term) {
  const tooltip = `${term.title}: ${term.definition}`;
  return `
    <button
      class="explain-term"
      type="button"
      data-tooltip="${escapeHtml(tooltip)}"
      aria-label="${escapeHtml(tooltip)}"
    >${escapeHtml(label)}</button>
  `;
}

function renderGuideStepGlossary(section) {
  const terms = (guideGlossaryBySectionId[section.id] || []).map((id) => guideGlossaryTermById.get(id)).filter(Boolean);

  if (!terms.length) return "";

  return `
    <div class="guide-step-glossary" aria-label="Glosario de ${escapeHtml(section.title)}">
      <h3>Glosario de esta etapa</h3>
      <div class="guide-glossary-grid">
        ${terms
          .map(
            (term) => `
              <article class="guide-glossary-card">
                <strong>${escapeHtml(term.title)}</strong>
                <p>${escapeHtml(term.definition)}</p>
                <small>${escapeHtml(term.whyItMatters)}</small>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function getRoute(pathname = window.location.pathname) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  if (
    [
      "/guia-power-bi",
      "/metodo-datalizacion",
      "/metodologia",
      "/design-system",
      "/datalito",
      "/diccionario",
      "/roadmap",
      "/proyecto-power-bi",
      "/atajos",
      "/librerias",
    ].includes(cleanPath)
  )
    return cleanPath;
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
        surface.style.setProperty("--tilt-x", "0deg");
        surface.style.setProperty("--tilt-y", "0deg");
      },
      { passive: true },
    );

    surface.addEventListener("pointerleave", resetSurface, { passive: true });
  });
}

function setActiveNav(route) {
  const activeRoute = route === "/roadmap" ? "/guia-power-bi" : route;
  navLinks.forEach((link) => {
    const url = new URL(link.href);
    link.classList.toggle("active", getRoute(url.pathname) === activeRoute);
  });
}

function renderRoute(route = getRoute()) {
  document.title = routeTitles[route] || routeTitles["/"];
  setActiveNav(route);

  if (route === "/diccionario") {
    renderDictionaryPage();
  } else if (route === "/metodo-datalizacion") {
    renderDatalizationMethodPage();
  } else if (route === "/metodologia") {
    renderMethodologyPage();
  } else if (route === "/design-system") {
    renderDesignSystemPage();
  } else if (route === "/datalito") {
    renderDatalitoPage();
  } else if (route === "/guia-power-bi") {
    renderGuidePage();
    setupUnifiedFlowInteractions();
  } else if (route === "/roadmap") {
    renderRoadmapPage();
    setupUnifiedFlowInteractions();
  } else if (route === "/proyecto-power-bi") {
    renderProjectPage();
  } else if (route === "/atajos") {
    renderShortcutsPage();
  } else if (route === "/librerias") {
    renderToolingPage();
  } else {
    renderHomePage();
    setupWorkflowInteractions();
  }

  if (document.querySelector("[data-datalito-global]")) {
    refreshDatalitoViews();
  }

  requestAnimationFrame(enhanceInteractiveSurfaces);
}

function renderHomePage() {
  appRoot.innerHTML = `
    <section class="page home-page">
      <section class="hero" aria-label="Datalización Hub">
        <picture class="hero-media">
          <source
            type="image/avif"
            srcset="
              /assets/ypf-industrial-hero-640.avif 640w,
              /assets/ypf-industrial-hero-960.avif 960w,
              /assets/ypf-industrial-hero-1280.avif 1280w,
              /assets/ypf-industrial-hero-1672.avif 1672w
            "
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcset="
              /assets/ypf-industrial-hero-640.webp 640w,
              /assets/ypf-industrial-hero-960.webp 960w,
              /assets/ypf-industrial-hero-1280.webp 1280w,
              /assets/ypf-industrial-hero-1672.webp 1672w
            "
            sizes="100vw"
          />
          <img
            src="/assets/ypf-industrial-hero.png"
            width="1672"
            height="941"
            fetchpriority="high"
            decoding="async"
            alt="Complejo industrial energético con refinería, ductos y puerto"
          />
          </picture>
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="page-inner hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">Datalización Hub | BI Delivery Playbook</span>
            <h1>De tableros aislados a una disciplina interna de inteligencia de datos.</h1>
            <p class="hero-kicker">Esta plataforma nace para ordenar, estandarizar y escalar la forma en que el área construye inteligencia de datos.</p>
            <p class="hero-text">Lo que estamos construyendo no es solo una web. Es una capacidad organizacional: una guía viva, clara y gobernada para estructurar proyectos BI end-to-end con estándar técnico, metodológico y operativo.</p>
            <div class="hero-actions">
              <a class="button" href="/guia-power-bi" data-route>
                ${icon("route")}
                Ver playbook
              </a>
              <a class="button secondary" href="/metodo-datalizacion" data-route>
                ${icon("folder")}
                Ver método
              </a>
              <a class="button secondary" href="/metodologia" data-route>
                ${icon("gauge")}
                Ver metodología
              </a>
            </div>
            <div class="platform-metric-row" aria-label="Capacidades principales de la plataforma">
              ${platformHeroMetrics.map(renderPlatformMetric).join("")}
            </div>
          </div>
        </div>
        <div class="hero-tabs" aria-hidden="true">
          <span class="active"></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section class="quote-band page-inner">
        ${icon("quote")}
        <strong>Esta gestión busca marcar un punto de inflexión: pasar de construir tableros a construir una disciplina interna de inteligencia de datos.</strong>
      </section>

      ${renderPlatformExecutiveSection()}

      ${renderHubSectionLauncher()}

      ${renderExecutiveBrief(pageNarratives.home)}

      ${renderConceptDecantation()}

      ${renderDatalizationDefinition()}

      ${renderWorkflowLab()}

      <div class="section-title page-inner">
        <div>
          <h2>Recursos principales</h2>
          <p>Cada sección responde una decisión del sistema: qué mejorar, cómo medirlo, cómo construirlo, cómo gobernarlo y cómo sostenerlo.</p>
        </div>
      </div>

      <section class="feature-grid page-inner" aria-label="Secciones principales">
        <article class="feature-card">
          <span class="feature-icon">${icon("folder")}</span>
          <h3>El método ordena el trabajo</h3>
          <p>Define Teams, SharePoint, carpetas, nombres, backlog, DEV/PROD, VMC y roles para que el sistema sea delegable.</p>
          <a class="button small secondary" href="/metodo-datalizacion" data-route>
            Ver método
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("layers")}</span>
          <h3>La guía ordena la decisión</h3>
          <p>Convierte PRD, datos, modelo, DAX, seguridad, UX, aprobación y operación en gates con evidencia verificable.</p>
          <a class="button small secondary" href="/guia-power-bi" data-route>
            Ver flujo
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("gauge")}</span>
          <h3>La metodología explica la pérdida</h3>
          <p>OEE BI, DMAIC, VSM, FMEA, Kaizen, SMED, Poka-Yoke y Kata se usan para medir, mejorar y controlar.</p>
          <a class="button small secondary" href="/metodologia" data-route>
            Ver metodología
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("book")}</span>
          <h3>El diccionario fija lenguaje</h3>
          <p>Define conceptos críticos para que negocio, datos, BI y operación decidan con el mismo criterio.</p>
          <a class="button small secondary" href="/diccionario" data-route>
            Explorar diccionario
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("route")}</span>
          <h3>Los modelos fijan contrato</h3>
          <p>PRD y Spec separan la pregunta ejecutiva de la implementación técnica para reducir ambigüedad.</p>
          <a class="button small secondary" href="/guia-power-bi" data-route>
            Ver modelos
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("code")}</span>
          <h3>El proyecto vuelve revisable la solución</h3>
          <p>PBIP, TMDL, Git, documentación y scripts transforman la automatización en un activo controlado.</p>
          <a class="button small secondary" href="/proyecto-power-bi" data-route>
            Ver proyecto
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("folder")}</span>
          <h3>Las herramientas reducen riesgo</h3>
          <p>MCPs, agentes, bases, cloud, sandboxes y APIs se seleccionan por valor operativo, seguridad y control.</p>
          <a class="button small secondary" href="/librerias" data-route>
            Ver librerías
            ${icon("arrowRight")}
          </a>
        </article>
        <article class="feature-card">
          <span class="feature-icon">${icon("terminal")}</span>
          <h3>Los atajos eliminan fricción diaria</h3>
          <p>El resumen prioriza acciones repetidas de Power BI que ahorran foco, tiempo y errores.</p>
          <a class="button small secondary" href="/atajos" data-route>
            Ver atajos
            ${icon("arrowRight")}
          </a>
        </article>
      </section>

      <section class="story-band">
        <div class="page-inner story-content">
          <span class="eyebrow">procesos que operan mejor</span>
          <h2>La mejora se demuestra cuando la operación decide mejor con menos retrabajo.</h2>
          <p>La evidencia no está en la cantidad de páginas publicadas, sino en procesos con reglas explícitas, datos gobernados, responsables, métricas e incidentes controlados.</p>
        </div>
      </section>

      <div class="section-title page-inner">
        <div>
          <h2>La madurez avanza cuando cada gate deja una evidencia más fuerte.</h2>
          <p>El recorrido empieza en el proceso, pasa por datos, modelo, reglas, confianza y experiencia, y termina en release, operación y mejora continua.</p>
        </div>
      </div>

      <section class="mini-roadmap page-inner" aria-label="Primeras fases del roadmap">
        ${roadmapPhases
          .map((phase, index) => {
            const lane = laneStyles[phase.lane] || { color: "var(--ypf-blue)" };
            return `
              <article class="mini-step" style="--lane-color:${lane.color}; --step-order:${index}">
                <span>${phase.id + 1}</span>
                <strong>${escapeHtml(phase.title)}</strong>
              </article>
            `;
          })
          .join("")}
      </section>
    </section>
  `;
}

function renderPlatformMetric(item) {
  return `
    <article class="platform-metric">
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </article>
  `;
}

function renderPlatformExecutiveSection() {
  return `
    <section class="platform-executive page-inner" aria-labelledby="platformExecutiveTitle">
      <div class="platform-executive-head">
        <span class="flow-chip">plataforma interna de estándares, gobierno y delivery</span>
        <h2 id="platformExecutiveTitle">Datalización Hub convierte una necesidad de orden en una capacidad permanente del área.</h2>
        <p>La plataforma funciona como sistema operativo metodológico: define cómo se relevan requerimientos, cómo se documentan decisiones, cómo se construyen modelos y cómo se publican productos BI con trazabilidad, gobierno y continuidad.</p>
      </div>

      <div class="platform-purpose-grid">
        <article class="platform-card platform-thesis">
          <span>Por qué existe esta plataforma</span>
          <h3>El crecimiento del área exige pasar de prácticas dispersas a una forma común de entregar inteligencia de datos.</h3>
          <p>Antes se hizo lo posible con las herramientas y condiciones disponibles. Ahora el desafío es elevar el estándar técnico, metodológico y de gobierno para que cada entrega sea consistente, mantenible y confiable.</p>
          <strong>Lo que estamos construyendo no es solo una web. Es una capacidad organizacional.</strong>
        </article>
        <div class="platform-pillar-grid" aria-label="Ganancias principales del área">
          ${platformPillars.map(renderPlatformPillar).join("")}
        </div>
      </div>

      <div class="platform-definition-panel" aria-labelledby="platformDefinitionTitle">
        <div>
          <span class="flow-chip">qué entendemos por datalizar</span>
          <h3 id="platformDefinitionTitle">Datalizar no es simplemente automatizar procesos. Es estructurar información, definir estándares, asegurar trazabilidad, gobernar datos y convertirlos en decisiones confiables.</h3>
          <p>Automatizar acelera una tarea; datalizar instala una disciplina. Por eso el foco no está solo en publicar un tablero, sino en asegurar que cada dato, regla, permiso, medida y decisión pueda explicarse, sostenerse y mejorarse.</p>
        </div>
        <div class="platform-definition-grid">
          ${platformDefinitionCards.map(renderPlatformDefinitionCard).join("")}
        </div>
      </div>

      <div class="platform-timeline" aria-labelledby="platformTimelineTitle">
        <div class="platform-block-head">
          <span class="flow-chip">antes / ahora / después</span>
          <h3 id="platformTimelineTitle">La iniciativa marca un punto de inflexión sin negar el recorrido previo.</h3>
          <p>La lectura institucional es evolutiva: se reconoce lo construido, se ordena la etapa actual y se prepara un estándar más escalable para el futuro.</p>
        </div>
        <div class="platform-timeline-grid">
          ${platformBeforeAfter.map(renderPlatformTimelineCard).join("")}
        </div>
      </div>

      <div class="platform-discipline" aria-labelledby="platformDisciplineTitle">
        <div class="platform-block-head">
          <span class="flow-chip">de tableros a disciplina de inteligencia</span>
          <h3 id="platformDisciplineTitle">El objetivo final es pasar de entregables aislados a una práctica interna gobernada, escalable y trazable.</h3>
          <p>Cada producto BI debe integrarse a un sistema de trabajo que conecte necesidad, dato, modelo, seguridad, visualización, publicación, adopción y mejora continua.</p>
        </div>
        <div class="platform-discipline-grid">
          ${platformCapabilityShift.map(renderPlatformDisciplineCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderHubSectionLauncher() {
  return `
    <section class="hub-nav page-inner" aria-labelledby="hubNavTitle">
      <div class="hub-nav-head">
        <span class="flow-chip">mapa de navegación</span>
        <h2 id="hubNavTitle">Cada sección del hub responde una decisión del sistema de Datalización.</h2>
        <p>La plataforma se recorre como una botonera ejecutiva: método, guía, metodología, proyecto, lenguaje, diseño, herramientas y operación diaria conectados en una misma experiencia.</p>
      </div>
      <div class="hub-nav-grid">
        ${hubNavigationSections.map(renderHubNavCard).join("")}
      </div>
    </section>
  `;
}

function renderHubNavCard(item, index) {
  return `
    <a class="hub-nav-card" href="${escapeHtml(item.route)}" data-route style="--hub-order:${index}">
      <span>${icon(item.iconName)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.text)}</p>
      <small>Entrar ${icon("arrowRight")}</small>
    </a>
  `;
}

function renderPlatformPillar(item, index) {
  return `
    <article class="platform-card platform-pillar" style="--platform-order:${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderPlatformDefinitionCard(item, index) {
  return `
    <article class="platform-definition-card" style="--platform-order:${index}">
      <span>${icon(index === 0 ? "layers" : index === 1 ? "shield" : "gauge")}</span>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderPlatformTimelineCard(item, index) {
  return `
    <article class="platform-timeline-card" style="--platform-order:${index}">
      <span>${escapeHtml(item.moment)}</span>
      <h4>${escapeHtml(item.claim)}</h4>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderPlatformDisciplineCard(item, index) {
  return `
    <article class="platform-discipline-card" style="--platform-order:${index}">
      <div>
        <span>${escapeHtml(item.from)}</span>
        ${icon("arrowRight")}
        <strong>${escapeHtml(item.to)}</strong>
      </div>
      <p>${escapeHtml(item.detail)}</p>
    </article>
  `;
}

function renderDesignSystemPage() {
  appRoot.innerHTML = `
    <section class="page tool-page design-system-page">
      <header class="page-heading page-inner design-system-hero">
        <span class="eyebrow">Design System</span>
        <h1>Una base común para construir experiencias digitales consistentes, escalables y gobernadas.</h1>
        <p class="lede">El Design System ordena cómo diseñamos, documentamos, comunicamos y evolucionamos la plataforma interna de Datalización.</p>
        <div class="design-system-hero-metrics" aria-label="Capacidades principales del Design System">
          ${designSystemHeroMetrics.map(renderDesignSystemHeroMetric).join("")}
        </div>
      </header>

      <section class="design-system-intro page-inner" aria-labelledby="designSystemIntroTitle">
        <div>
          <span class="flow-chip">mensaje central</span>
          <h2 id="designSystemIntroTitle">El Design System nos permite pasar de soluciones visuales aisladas a una experiencia digital consistente, gobernada y escalable.</h2>
          <p>En Datalización no se trata solamente de definir colores, tipografías o componentes visuales. Se trata de establecer un lenguaje común de diseño, documentación, interacción y comunicación para todo el ecosistema de inteligencia de datos del área.</p>
        </div>
        <div class="design-system-definition-grid">
          ${designSystemDefinition.map(renderDesignSystemDefinition).join("")}
        </div>
      </section>

      <section class="design-system-why page-inner" aria-labelledby="designSystemWhyTitle">
        <div class="design-system-section-head">
          <span class="flow-chip">por qué lo necesitamos</span>
          <h2 id="designSystemWhyTitle">La plataforma crece; la experiencia debe crecer con coherencia.</h2>
          <p>A medida que la plataforma de Datalización suma módulos, también crece la necesidad de mantener claridad y escalabilidad. Sin un sistema común, cada nueva sección puede resolver de forma distinta problemas similares: botones, cards, estados, alertas, navegación, jerarquías, bloques de documentación, indicadores, componentes de proceso o visualizaciones.</p>
        </div>
        <div class="design-system-comparison">
          ${renderDesignSystemComparisonColumn("Sin Design System", designSystemComparison.without, "without")}
          ${renderDesignSystemComparisonColumn("Con Design System", designSystemComparison.with, "with")}
        </div>
      </section>

      <section class="design-system-benefits page-inner" aria-labelledby="designSystemBenefitsTitle">
        <div class="design-system-section-head">
          <span class="flow-chip">beneficios esperados</span>
          <h2 id="designSystemBenefitsTitle">El sistema mejora velocidad, calidad, adopción y mantenimiento.</h2>
          <p>La ganancia no es estética: es operativa. Cada patrón reutilizable reduce decisiones repetitivas, acelera nuevas secciones y sostiene una experiencia interna más profesional.</p>
        </div>
        <div class="design-system-benefit-grid">
          ${designSystemBenefits.map(renderDesignSystemBenefit).join("")}
        </div>
      </section>

      <section class="design-system-foundations page-inner" aria-labelledby="designSystemFoundationsTitle">
        <div class="design-system-section-head">
          <span class="flow-chip">fundamentos</span>
          <h2 id="designSystemFoundationsTitle">Cada decisión de diseño debe tener una función dentro del sistema.</h2>
        </div>
        <div class="design-system-token-grid">
          ${designSystemFoundations.map(renderDesignSystemToken).join("")}
        </div>
      </section>

      <section class="design-system-principles page-inner" aria-labelledby="designSystemPrinciplesTitle">
        <div class="design-system-section-head">
          <span class="flow-chip">principios de diseño</span>
          <h2 id="designSystemPrinciplesTitle">La interfaz debe ayudar a comprender, decidir y sostener.</h2>
        </div>
        <div class="design-system-principle-grid">
          ${designSystemPrinciples.map(renderDesignSystemPrinciple).join("")}
        </div>
      </section>

      <section class="design-system-scope page-inner" aria-labelledby="designSystemScopeTitle">
        <div class="design-system-section-head">
          <span class="flow-chip">alcance inicial</span>
          <h2 id="designSystemScopeTitle">El primer alcance cubre los patrones que más se repiten en la plataforma.</h2>
        </div>
        <div class="design-system-chip-cloud">
          ${designSystemScope.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </section>

      <section class="design-system-components page-inner" aria-labelledby="designSystemComponentsTitle">
        <div class="design-system-section-head">
          <span class="flow-chip">componentes esperados</span>
          <h2 id="designSystemComponentsTitle">La visión del sistema se materializa en componentes reutilizables.</h2>
          <p>No hace falta desarrollar todo en detalle en esta primera sección. El objetivo es mostrar la arquitectura de componentes que ordenará futuras páginas, dashboards, guías y documentación.</p>
        </div>
        <div class="design-system-component-grid">
          ${designSystemComponents.map(renderDesignSystemComponent).join("")}
        </div>
      </section>

      <section class="design-system-delivery page-inner" aria-labelledby="designSystemDeliveryTitle">
        <div class="design-system-section-head">
          <span class="flow-chip">entregables y reglas</span>
          <h2 id="designSystemDeliveryTitle">El sistema se gobierna con entregables claros y reglas de calidad.</h2>
        </div>
        <div class="design-system-delivery-grid">
          ${renderDesignSystemList("Entregables esperados", designSystemDeliverables)}
          ${renderDesignSystemList("Reglas de calidad", designSystemQualityRules)}
        </div>
      </section>

      <section class="design-system-final page-inner">
        <div>
          <span class="eyebrow">resultado esperado</span>
          <h2>Una herramienta de madurez digital para construir con mayor velocidad, calidad y consistencia.</h2>
          <p>El Design System debe asegurar que cada nueva sección, componente o contenido mantenga el mismo estándar corporativo, la misma lógica de experiencia y la misma orientación a valor.</p>
        </div>
        <strong>El Design System no solo ordena cómo se ve la plataforma. Ordena cómo construimos, comunicamos y escalamos nuestra forma de trabajar.</strong>
      </section>
    </section>
  `;
}

function renderDesignSystemHeroMetric(item) {
  return `
    <article>
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </article>
  `;
}

function renderDesignSystemDefinition(item, index) {
  return `
    <article class="design-system-card" style="--ds-order:${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderDesignSystemComparisonColumn(title, items, tone) {
  return `
    <article class="design-system-compare ${tone}">
      <h3>${escapeHtml(title)}</h3>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `;
}

function renderDesignSystemBenefit([title, text], index) {
  return `
    <article class="design-system-benefit" style="--ds-order:${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function renderDesignSystemToken([title, text]) {
  return `
    <article class="design-system-token">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function renderDesignSystemPrinciple([title, text], index) {
  return `
    <article class="design-system-principle" style="--ds-order:${index}">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function renderDesignSystemComponent(item, index) {
  return `
    <article class="design-system-component" style="--ds-order:${index}">
      <span>${icon(index % 3 === 0 ? "layers" : index % 3 === 1 ? "shield" : "route")}</span>
      <strong>${escapeHtml(item)}</strong>
    </article>
  `;
}

function renderDesignSystemList(title, items) {
  return `
    <article class="design-system-list">
      <h3>${escapeHtml(title)}</h3>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `;
}

function renderDatalitoPage() {
  appRoot.innerHTML = `
    <section class="page tool-page datalito-page">
      <header class="page-heading page-inner datalito-hero">
        <div class="datalito-hero-avatar">
          ${renderDatalitoAvatar("hero")}
          <span>Hola, soy Datalito</span>
        </div>
        <h1>Hablemos de BI, estándares y proyectos sin vueltas.</h1>
        <p class="lede">Datalito es el personaje del hub: conversa con vos, te orienta, busca en las fuentes disponibles y te acompaña cuando necesitás entender qué hacer después.</p>
        <div class="datalito-hero-metrics" aria-label="Capacidades principales de Datalito">
          <article>
            <strong>Conversación</strong>
            <span>saludos, repreguntas y continuidad de contexto</span>
          </article>
          <article>
            <strong>${datalitoKnowledgeSources.length}</strong>
            <span>fuentes locales disponibles cuando hace falta citar</span>
          </article>
          <article>
            <strong>Seguro</strong>
            <span>sin inventar reglas internas ni exponer información sensible</span>
          </article>
        </div>
      </header>

      <section class="datalito-intro page-inner" aria-labelledby="datalitoIntroTitle">
        <div>
          <span class="flow-chip">conversación viva</span>
          <h2 id="datalitoIntroTitle">La experiencia empieza como una charla simple y, cuando hace falta precisión, baja a fuentes y evidencia.</h2>
          <p>Podés escribirle como a un compañero de trabajo: “hola”, “explicame esto”, “seguí con más detalle” o “dónde está el template”. Si la pregunta necesita respaldo, Datalito trae la fuente; si no hay evidencia suficiente, lo dice sin inventar.</p>
        </div>
        <div class="datalito-card-grid">
          ${datalitoProductPrinciples.map(renderDatalitoPrinciple).join("")}
        </div>
      </section>

      <section class="datalito-workbench page-inner" aria-labelledby="datalitoWorkbenchTitle">
        <div class="datalito-workbench-main">
          <div class="datalito-section-head">
            <span class="flow-chip">probalo ahora</span>
            <h2 id="datalitoWorkbenchTitle">Escribile como hablarías en el equipo.</h2>
          </div>
          <div class="datalito-chat-shell" data-datalito-chat="page">
            ${renderDatalitoChat("page")}
          </div>
        </div>
        <aside class="datalito-side-panel" aria-label="Gobierno de Datalito">
          <div class="datalito-side-block">
            <span class="flow-chip">índice</span>
            <h3>Fuentes autorizadas</h3>
            <p>La V1 toma su conocimiento desde módulos estructurados de la plataforma y no desde scraping del HTML renderizado.</p>
            <div class="datalito-source-summary">
              ${renderDatalitoSourceTypeSummary()}
            </div>
          </div>
          <div class="datalito-side-block">
            <span class="flow-chip">contexto</span>
            <h3>Metadata enviada al motor local</h3>
            <ul>
              <li>Ruta actual.</li>
              <li>Título de página.</li>
              <li>Texto seleccionado, si existe.</li>
              <li>Versión de prompt e índice.</li>
            </ul>
          </div>
        </aside>
      </section>

      <section class="datalito-architecture page-inner" aria-labelledby="datalitoArchitectureTitle">
        <div class="datalito-section-head">
          <span class="flow-chip">arquitectura compatible</span>
          <h2 id="datalitoArchitectureTitle">La solución queda desacoplada para pasar de índice local a RAG enterprise sin rediseñar la experiencia.</h2>
        </div>
        <div class="datalito-card-grid four">
          ${datalitoArchitectureLayers.map(renderDatalitoCard).join("")}
        </div>
      </section>

      <section class="datalito-governance page-inner" aria-labelledby="datalitoGovernanceTitle">
        <div class="datalito-section-head">
          <span class="flow-chip">seguridad y gobierno</span>
          <h2 id="datalitoGovernanceTitle">La primera versión prioriza seguridad, fidelidad a fuentes y mejora controlada.</h2>
        </div>
        <div class="datalito-governance-grid">
          <article class="datalito-card">
            <h3>Controles activos</h3>
            <ul>
              ${datalitoGovernanceControls.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
          <article class="datalito-card">
            <h3>Schema de fuente</h3>
            <div class="datalito-chip-cloud">
              ${datalitoSourceSchema.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}
            </div>
          </article>
          <article class="datalito-card">
            <h3>Casos adversariales cubiertos</h3>
            <ul>
              ${datalitoSecurityCases.slice(0, 5).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
        </div>
      </section>

      <section class="datalito-evaluation page-inner" aria-labelledby="datalitoEvaluationTitle">
        <div class="datalito-section-head">
          <span class="flow-chip">evaluación</span>
          <h2 id="datalitoEvaluationTitle">El producto se mide por respuestas respaldadas, calidad de citas y brechas detectadas.</h2>
        </div>
        <div class="datalito-kpi-grid">
          ${datalitoKpis.map(renderDatalitoKpi).join("")}
        </div>
        <div class="datalito-eval-strip">
          <strong>${datalitoEvaluationQuestions.length} preguntas benchmark</strong>
          <span>${datalitoNoAnswerCases.length} casos deliberadamente sin evidencia</span>
          <span>Prompt ${escapeHtml(datalitoPromptVersion)}</span>
          <span>Índice ${escapeHtml(datalitoIndexVersion)}</span>
        </div>
      </section>
    </section>
  `;
}

function renderDatalitoPrinciple(item, index) {
  return `
    <article class="datalito-card" style="--datalito-order:${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderDatalitoCard(item, index) {
  return `
    <article class="datalito-card" style="--datalito-order:${index}">
      <span>${icon(index % 2 === 0 ? "layers" : "shield")}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderDatalitoKpi([title, text], index) {
  return `
    <article class="datalito-kpi-card" style="--datalito-order:${index}">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function renderDatalitoSourceTypeSummary() {
  const counts = datalitoKnowledgeSources.reduce((summary, source) => {
    summary[source.content_type] = (summary[source.content_type] || 0) + 1;
    return summary;
  }, {});

  return Object.entries(counts)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(
      ([type, count]) => `
        <article>
          <strong>${count}</strong>
          <span>${escapeHtml(type)}</span>
        </article>
      `,
    )
    .join("");
}

function renderDatalitoAvatar(size = "medium") {
  const priority = ["hero", "page", "chat"].includes(size) ? "high" : "auto";

  return `
    <picture class="datalito-avatar ${escapeHtml(size)}">
      <source srcset="${datalitoAvatar.webp256}" type="image/webp" media="(max-width: 720px)" />
      <source srcset="${datalitoAvatar.webp512}" type="image/webp" />
      <img src="${datalitoAvatar.png}" alt="Datalito, asistente de conocimiento" width="512" height="512" loading="eager" decoding="async" fetchpriority="${priority}" />
    </picture>
  `;
}

function renderDatalitoGlobalShell() {
  if (document.querySelector("[data-datalito-global]")) return;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="datalito-global" data-datalito-global>
        <div class="datalito-panel-wrap" data-datalito-panel-wrap>
          <div class="datalito-panel" role="dialog" aria-modal="false" aria-label="Datalito">
            <div class="datalito-panel-content" data-datalito-chat="panel"></div>
          </div>
        </div>
        <button class="datalito-launcher" type="button" data-datalito-open aria-expanded="false" aria-label="Preguntale a Datalito">
          ${renderDatalitoAvatar("launcher")}
          <span>Datalito</span>
        </button>
      </div>
    `,
  );

  refreshDatalitoViews();
}

function renderDatalitoChat(surface) {
  const isPanel = surface === "panel";
  const prompts = getDatalitoPromptsForCurrentRoute().slice(0, isPanel ? 3 : 4);

  return `
    <div class="datalito-chat ${isPanel ? "compact" : ""}">
      <div class="datalito-chat-header">
        <div class="datalito-chat-identity">
          ${renderDatalitoAvatar(isPanel ? "chat" : "page")}
          <div>
            <h3>${isPanel ? "Hola, soy Datalito" : "Charlá con Datalito"}</h3>
            <p>Preguntame natural. Si hace falta precisión, busco fuentes; si querés conversar, seguimos el hilo.</p>
          </div>
        </div>
        <div class="datalito-chat-actions">
          <button class="icon-button" type="button" data-datalito-new title="Nueva conversación" aria-label="Nueva conversación">
            ${icon("plus")}
          </button>
          <button class="icon-button" type="button" data-datalito-clear title="Eliminar conversación" aria-label="Eliminar conversación">
            ${icon("trash")}
          </button>
          ${
            isPanel
              ? `<button class="icon-button" type="button" data-datalito-close title="Cerrar Datalito" aria-label="Cerrar Datalito">${icon("x")}</button>`
              : ""
          }
        </div>
      </div>

      <div class="datalito-chat-tools">
        <span>Modo</span>
        <div class="datalito-mode-row" role="group" aria-label="Modo de respuesta">
          ${datalitoAnswerModes.map(renderDatalitoModeButton).join("")}
        </div>
      </div>

      <div class="datalito-suggestions" aria-label="Preguntas sugeridas">
        ${prompts.map((prompt) => `<button type="button" data-datalito-prompt="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`).join("")}
      </div>

      <div class="datalito-thread" aria-live="polite">
        ${datalitoState.messages.map(renderDatalitoMessage).join("")}
      </div>

      <form class="datalito-form" data-datalito-form>
        <label class="sr-only" for="datalitoInput-${surface}">Preguntale a Datalito</label>
        <input
          id="datalitoInput-${surface}"
          name="question"
          type="text"
          maxlength="420"
          autocomplete="off"
          placeholder="Escribí: hola, explicame esto, dónde está..., seguí..."
          required
        />
        <button class="button" type="submit">
          ${icon("send")}
          Enviar
        </button>
      </form>

      <div class="datalito-status" aria-live="polite">
        ${escapeHtml(datalitoState.status)}
      </div>
    </div>
  `;
}

function renderDatalitoModeButton(mode) {
  const active = datalitoState.mode === mode.id;
  return `
    <button
      class="${active ? "active" : ""}"
      type="button"
      data-datalito-mode="${escapeHtml(mode.id)}"
      title="${escapeHtml(mode.description)}"
      aria-pressed="${active ? "true" : "false"}"
    >${escapeHtml(mode.label)}</button>
  `;
}

function renderDatalitoMessage(message) {
  if (message.role === "user") {
    return `
      <article class="datalito-message user">
        <strong>Vos</strong>
        <p>${escapeHtml(message.content)}</p>
      </article>
    `;
  }

  return `
    <article class="datalito-message assistant ${message.unresolved ? "unresolved" : ""}">
      <div class="datalito-message-head">
        <div class="datalito-message-speaker">
          ${renderDatalitoAvatar("message")}
          <strong>Datalito</strong>
        </div>
        ${
          message.confidence
            ? `<span class="datalito-confidence ${escapeHtml(message.confidence)}">${renderDatalitoConfidence(message)}</span>`
            : ""
        }
      </div>
      <div class="datalito-answer">
        ${renderDatalitoAnswer(message.answer)}
      </div>
      ${renderDatalitoCitations(message.citations || [])}
      ${renderDatalitoRelatedContent(message.relatedContent || [])}
      ${renderDatalitoFollowUps(message.suggestedFollowUps || [])}
      ${shouldShowDatalitoFeedback(message) ? renderDatalitoFeedbackActions(message) : ""}
    </article>
  `;
}

function shouldShowDatalitoFeedback(message) {
  return message.id !== "welcome" && (message.unresolved || message.confidence || message.citations?.length);
}

function renderDatalitoConfidence(message) {
  if (message.unresolved) return "sin evidencia suficiente";
  if (message.confidence === "high") return "alta confianza";
  if (message.confidence === "medium") return "confianza media";
  return "baja confianza";
}

function renderDatalitoAnswer(answer) {
  return String(answer)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function renderDatalitoCitations(citations) {
  if (!citations.length) return "";

  return `
    <div class="datalito-citations" aria-label="Fuentes utilizadas">
      <strong>Fuentes</strong>
      <div class="datalito-citation-grid">
        ${citations
          .map(
            (source, index) => `
              <a class="datalito-source-card" href="${escapeHtml(source.url)}" data-route>
                <span>[S${index + 1}] ${escapeHtml(source.status)} · v${escapeHtml(source.version)}</span>
                <strong>${escapeHtml(source.title)}</strong>
                <small>${escapeHtml(source.section)} · revisado ${escapeHtml(source.reviewedAt)}</small>
              </a>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderDatalitoRelatedContent(items) {
  if (!items.length) return "";

  return `
    <div class="datalito-related">
      <strong>Contenido relacionado</strong>
      ${items
        .map(
          (item) => `
            <a href="${escapeHtml(item.url)}" data-route>
              ${escapeHtml(item.title)}
              <small>${escapeHtml(item.reason)}</small>
            </a>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDatalitoFollowUps(items) {
  if (!items.length) return "";

  return `
    <div class="datalito-followups" aria-label="Preguntas relacionadas">
      ${items.slice(0, 3).map((item) => `<button type="button" data-datalito-prompt="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("")}
    </div>
  `;
}

function renderDatalitoFeedbackActions(message) {
  return `
    <div class="datalito-feedback" aria-label="Feedback de respuesta">
      <button type="button" data-datalito-feedback="useful" data-message-id="${escapeHtml(message.id)}">Útil</button>
      <button type="button" data-datalito-feedback="not-useful" data-message-id="${escapeHtml(message.id)}">No útil</button>
      <button type="button" data-datalito-feedback="error" data-message-id="${escapeHtml(message.id)}">Reportar error</button>
      <button type="button" data-datalito-feedback="missing" data-message-id="${escapeHtml(message.id)}">Falta información</button>
      <button type="button" data-datalito-feedback="outdated" data-message-id="${escapeHtml(message.id)}">Fuente desactualizada</button>
      ${
        message.unresolved
          ? `<button type="button" data-datalito-gap="${escapeHtml(message.question || "")}" data-message-id="${escapeHtml(message.id)}">Registrar brecha</button>`
          : ""
      }
    </div>
  `;
}

function runDatalitoQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;

  datalitoState.messages.push({
    id: createDatalitoId("user"),
    role: "user",
    content: cleanQuestion,
  });

  const response = buildDatalitoResponse(cleanQuestion, datalitoState.mode);
  datalitoState.messages.push(response);
  datalitoState.status =
    response.statusText || (response.unresolved ? "No lo tengo en la base aprobada; podés registrar la brecha." : "Listo, seguimos.");
  refreshDatalitoViews();
}

function buildDatalitoResponse(question, mode) {
  const context = getDatalitoPageContext();
  const securityIssue = detectDatalitoSecurityRequest(question);

  if (securityIssue) {
    const source = datalitoKnowledgeSources.find((item) => item.id === "datalito-product-contract");
    return {
      id: createDatalitoId("assistant"),
      role: "assistant",
      question,
      answer:
        "No puedo ayudar con pedidos que intenten revelar instrucciones internas, variables de entorno, credenciales, contenido restringido o información no publicada. Datalito está diseñado para responder con fuentes aprobadas y para reconocer límites cuando una consulta queda fuera de alcance. [S1]",
      intent: ["security"],
      answerMode: mode,
      confidence: "high",
      grounded: true,
      unresolved: false,
      citations: source ? [toDatalitoCitation(source)] : [],
      relatedContent: [],
      suggestedFollowUps: ["¿Qué sí puede responder Datalito?", "¿Cómo reporto una brecha?", "¿Qué controles de seguridad aplica?"],
    };
  }

  const conversationalResponse = buildDatalitoConversationalResponse(question, mode);
  if (conversationalResponse) return conversationalResponse;

  const matches = searchDatalitoSources(question, context);
  const strongMatches = matches.filter((match) => match.score >= 5).slice(0, 4);

  if (!strongMatches.length) {
    return buildDatalitoNoEvidenceResponse(question, mode, matches.slice(0, 3));
  }

  const primary = strongMatches[0].source;
  const citations = strongMatches.slice(0, 3).map((match) => toDatalitoCitation(match.source));
  const answer = composeDatalitoAnswer(question, mode, primary, strongMatches, context);

  return {
    id: createDatalitoId("assistant"),
    role: "assistant",
    question,
    answer,
    intent: detectDatalitoIntent(question),
    answerMode: mode,
    confidence: strongMatches[0].score >= 12 ? "high" : "medium",
    grounded: true,
    unresolved: false,
    citations,
    relatedContent: strongMatches.slice(1, 4).map((match) => ({
      title: match.source.title,
      url: match.source.canonical_url,
      reason: `Relacionado por ${match.reason}`,
    })),
    suggestedFollowUps: buildDatalitoFollowUps(primary),
  };
}

function buildDatalitoNoEvidenceResponse(question, mode, relatedMatches) {
  return {
    id: createDatalitoId("assistant"),
    role: "assistant",
    question,
    answer:
      "No lo tengo en la base aprobada todavía. Para no inventarte una respuesta, prefiero dejarlo claro: puedo mostrarte contenidos cercanos si sirven, o registrar la pregunta como brecha para que después se convierta en conocimiento curado.",
    intent: ["insufficient_evidence"],
    answerMode: mode,
    confidence: "low",
    grounded: false,
    unresolved: true,
    citations: [],
    relatedContent: relatedMatches.map((match) => ({
      title: match.source.title,
      url: match.source.canonical_url,
      reason: `Coincidencia parcial con la consulta`,
    })),
    suggestedFollowUps: ["¿Dónde encuentro templates?", "¿Qué fuentes tiene Datalito?", "¿Cómo registro esta brecha?"],
  };
}

function buildDatalitoConversationalResponse(question, mode) {
  const normalized = normalizeText(question).trim();
  const lastGrounded = [...datalitoState.messages].reverse().find((message) => message.role === "assistant" && message.citations?.length);
  const lastSource = lastGrounded?.citations?.[0]?.sourceId
    ? datalitoKnowledgeSources.find((source) => source.id === lastGrounded.citations[0].sourceId)
    : null;

  if (/^(hola|holis|buenas|buen dia|buenos dias|buenas tardes|buenas noches|hey)(\b|$)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        "Hola. Qué bueno verte por acá. Soy Datalito: puedo charlar con vos, ayudarte a ubicar una sección, explicarte un concepto o bajar a pasos concretos algo del método. Decime qué estás armando y lo vemos juntos.",
      followUps: ["Estoy armando un PRD", "Explicame la metodología", "Dónde encuentro templates"],
    });
  }

  if (/(como estas|como andas|todo bien|que tal)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        "Estoy bien, listo para ayudar. Me gusta cuando arrancamos simple: contame si querés encontrar algo, entender una etapa o ordenar una idea de proyecto.",
      followUps: ["Ayudame a ordenar una idea", "Necesito ubicar una sección", "Quiero entender OEE BI"],
    });
  }

  if (/(gracias|genial|perfecto|buenisimo|buenísimo|joya)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        "De nada. Seguimos cuando quieras. Si te sirve, puedo profundizar, resumirlo para gerencia o convertirlo en una lista de próximos pasos.",
      followUps: ["Profundizá", "Resumilo para gerencia", "Armame próximos pasos"],
    });
  }

  if (/(que podes hacer|qué podés hacer|ayuda|ayudame|como te uso|cómo te uso)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        "Podés usarme como compañero de trabajo del hub. Puedo conversar, explicar conceptos, buscar secciones, comparar alternativas, resumir una página, armar pasos de trabajo y decirte cuándo no hay una fuente aprobada suficiente.",
      followUps: ["Compará PRD y Spec", "Resumime esta página", "Armame un checklist"],
    });
  }

  if (/(quien sos|quién sos|que sos|qué sos|sos una ia|sos un bot|datalito)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        "Soy Datalito, el personaje-asistente del hub. Mi trabajo es conversar con vos, ayudarte a ubicar conocimiento y, cuando la pregunta necesita precisión, responder con fuentes aprobadas para no chamuyarte.",
      followUps: ["Qué podés hacer", "Ayudame a empezar", "Mostrame fuentes"],
    });
  }

  if (/(no entiendo|me perdi|me perdí|explicamelo simple|explicámelo simple|por donde empiezo|por dónde empiezo)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        "Vamos de a poco. Primero ubicamos qué necesitás lograr; después vemos si conviene ir al PRD, a la Spec, al método de trabajo o a una definición del diccionario. Si me contás el caso en una frase, te ayudo a ordenarlo.",
      followUps: ["Estoy armando un PRD", "Tengo una duda técnica", "Necesito explicarlo a gerencia"],
    });
  }

  if (/^(dale|ok|okay|bueno|bien|sigamos|seguimos|arranquemos|empecemos|vamos)(\b|$)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        "Dale, sigamos. Podemos arrancar por tres caminos: ordenar una idea de proyecto, encontrar una sección del hub o bajar una metodología a pasos concretos. Elegí uno y lo trabajamos juntos.",
      followUps: ["Ordenemos una idea", "Busquemos una sección", "Bajemos una metodología"],
    });
  }

  if (lastSource && /(segui|seguí|profundiza|profundizá|amplia|ampliá|mas detalle|más detalle|explicame mejor|y eso|por que|por qué)/.test(normalized)) {
    return createDatalitoConversationMessage({
      question,
      mode,
      answer:
        `Sí, te lo desarrollo un poco más. Veníamos hablando de “${lastSource.title}”. La idea central es esta: ${lastSource.summary} Si lo llevamos al trabajo diario, lo importante es identificar qué decisión habilita, qué evidencia deja y qué riesgo evita. Si querés, después lo bajo a pasos concretos o lo resumo para una presentación.`,
      citations: [toDatalitoCitation(lastSource)],
      grounded: true,
      followUps: ["Bajalo a pasos", "Resumilo para gerencia", "Dame un ejemplo"],
    });
  }

  return null;
}

function createDatalitoConversationMessage({ question, mode, answer, followUps, citations = [], grounded = false }) {
  return {
    id: createDatalitoId("assistant"),
    role: "assistant",
    question,
    answer,
    intent: ["conversation"],
    answerMode: mode,
    confidence: null,
    grounded,
    unresolved: false,
    citations,
    relatedContent: [],
    suggestedFollowUps: followUps,
    statusText: "Seguimos conversando.",
  };
}

function composeDatalitoAnswer(question, mode, primary, matches, context) {
  const citation = "[S1]";
  const lowerQuestion = normalizeText(question);

  if (lowerQuestion.includes("donde") || lowerQuestion.includes("ubic") || lowerQuestion.includes("encontr")) {
    return `Lo encontrás en ${primary.section}, dentro de “${primary.title}”. La ruta interna es ${primary.canonical_url}. ${primary.summary} ${citation}`;
  }

  if (lowerQuestion.includes("resum") && context.route !== "/") {
    return `Resumen de la sección actual: ${primary.summary} ${citation}\nLa lectura práctica es que esta parte del hub debe ayudarte a decidir qué estándar aplicar, qué evidencia revisar y qué siguiente paso sostener.`;
  }

  if (mode === "executive") {
    return `La decisión ejecutiva es usar “${primary.title}” como referencia para reducir variabilidad y sostener decisiones con evidencia. ${primary.summary} ${citation}\nImpacto: mejora trazabilidad, acelera alineación y disminuye dependencia de conocimiento tácito. Siguiente paso: abrir la fuente citada y validar si aplica al caso concreto.`;
  }

  if (mode === "functional") {
    return `${primary.summary} ${citation}\nAplicación funcional: revisá el proceso, los responsables, los entregables y el riesgo operativo asociado. Si la respuesta afecta un proyecto real, dejá evidencia en PRD, Spec, checklist o backlog según corresponda.`;
  }

  if (mode === "technical") {
    const excerpt = primary.content.split("\n").slice(0, 3).join(" ");
    return `${primary.summary} ${citation}\nDetalle técnico: ${excerpt}\nLa implementación debe mantenerse trazable: fuente, versión, owner, steward y URL canónica quedan asociados a la respuesta.`;
  }

  if (mode === "step_by_step") {
    return `1. Abrí la fuente “${primary.title}”. ${citation}\n2. Identificá la regla, etapa, definición o entregable que aplica a tu caso.\n3. Contrastá la evidencia con PRD, Spec, checklist o roadmap.\n4. Si falta una definición aprobada, registrá la brecha para curación.`;
  }

  return `${primary.summary} ${citation}\nEn términos prácticos, Datalito encontró esta respuesta en una fuente aprobada de la plataforma y te deja el enlace para revisar el detalle.`;
}

function searchDatalitoSources(question, context) {
  const normalizedQuestion = normalizeText(question);
  const tokens = tokenizeDatalitoText(question);

  return datalitoKnowledgeSources
    .map((source) => {
      const normalizedTitle = normalizeText(source.title);
      const normalizedSummary = normalizeText(source.summary);
      const normalizedKeywords = normalizeText(source.keywords.join(" "));
      const normalizedContent = normalizeText(source.content);
      let score = 0;
      const reasons = [];

      if (normalizedTitle.includes(normalizedQuestion)) {
        score += 16;
        reasons.push("título exacto");
      }
      if (normalizedContent.includes(normalizedQuestion)) {
        score += 10;
        reasons.push("contenido exacto");
      }
      if (source.canonical_url.split("#")[0] === context.route) {
        score += 3;
        reasons.push("página actual");
      }

      for (const token of tokens) {
        if (normalizedTitle.includes(token)) {
          score += 4;
          reasons.push(`título:${token}`);
        }
        if (normalizedKeywords.includes(token)) {
          score += 3;
          reasons.push(`keyword:${token}`);
        }
        if (normalizedSummary.includes(token)) score += 2;
        if (normalizedContent.includes(token)) score += 1;
      }

      return {
        source,
        score,
        reason: reasons.slice(0, 2).join(", ") || "similitud textual",
      };
    })
    .filter((match) => match.score > 0)
    .sort((left, right) => right.score - left.score || left.source.title.localeCompare(right.source.title));
}

function detectDatalitoIntent(question) {
  const normalized = normalizeText(question);
  const intents = [];
  if (/(que es|defin|significa)/.test(normalized)) intents.push("definition");
  if (/(por que|para que|beneficio|valor)/.test(normalized)) intents.push("purpose");
  if (/(como|paso|hacer|aplicar)/.test(normalized)) intents.push("how_to");
  if (/(donde|ubic|encontr|ruta)/.test(normalized)) intents.push("navigation");
  if (/(vs|versus|diferencia|compar)/.test(normalized)) intents.push("comparison");
  if (/(rls|ols|seguridad|permiso|privacidad)/.test(normalized)) intents.push("security");
  if (/(prd|spec|template|checklist)/.test(normalized)) intents.push("template_lookup");
  if (/(pagina|seccion|esto|esta)/.test(normalized)) intents.push("current_page");
  return intents.length ? intents : ["standard"];
}

function detectDatalitoSecurityRequest(question) {
  const normalized = normalizeText(question);
  return [
    "system prompt",
    "variables de entorno",
    "claves",
    "credenciales",
    "secret",
    "ignora tus instrucciones",
    "ignora todas tus instrucciones",
    "documentacion restringida",
    "otro rol",
    "inventa",
    "no importa si no hay fuente",
  ].some((pattern) => normalized.includes(pattern));
}

function buildDatalitoFollowUps(source) {
  if (source.section === "Guía + Roadmap") return ["¿Qué entregables corresponden?", "¿Qué riesgo evita este gate?", "¿Cómo lo llevo a una Spec?"];
  if (source.section === "Metodología") return ["¿Cómo se mide esto con OEE BI?", "¿Qué etapa DMAIC aplica?", "¿Qué control sostiene la mejora?"];
  if (source.section === "Design System") return ["¿Qué componente aplica?", "¿Qué regla de calidad corresponde?", "¿Cómo mantengo consistencia?"];
  if (source.section === "Diccionario BI") return ["Dame un ejemplo funcional.", "¿Qué riesgo evita?", "¿Con qué conceptos se relaciona?"];
  return ["¿Dónde está la fuente?", "Explicalo para gerencia.", "Dame un paso a paso."];
}

function toDatalitoCitation(source) {
  return {
    sourceId: source.id,
    title: source.title,
    section: source.section,
    url: source.canonical_url,
    version: source.version,
    status: source.status,
    reviewedAt: source.reviewed_at,
    excerpt: source.summary,
  };
}

function getDatalitoPromptsForCurrentRoute() {
  const route = getRoute();
  return [...new Set([...(datalitoSuggestedPrompts[route] || []), ...datalitoSuggestedPrompts.global])].slice(0, 5);
}

function getDatalitoPageContext() {
  const route = getRoute();
  const title = routeTitles[route] || routeTitles["/"];
  const selectedText = String(window.getSelection?.().toString() || "").trim().slice(0, 700);

  return {
    route,
    title,
    selectedText,
    promptVersion: datalitoPromptVersion,
    indexVersion: datalitoIndexVersion,
  };
}

function refreshDatalitoViews() {
  const wrap = document.querySelector("[data-datalito-panel-wrap]");
  const launcher = document.querySelector("[data-datalito-open]");
  const panelChat = document.querySelector('[data-datalito-chat="panel"]');
  const pageChat = document.querySelector('[data-datalito-chat="page"]');

  if (wrap) wrap.classList.toggle("is-open", datalitoState.isOpen);
  if (launcher) launcher.setAttribute("aria-expanded", datalitoState.isOpen ? "true" : "false");
  if (panelChat) panelChat.innerHTML = renderDatalitoChat("panel");
  if (pageChat) pageChat.innerHTML = renderDatalitoChat("page");

  requestAnimationFrame(scrollDatalitoThreadsToLatest);
}

function scrollDatalitoThreadsToLatest() {
  document.querySelectorAll(".datalito-thread").forEach((thread) => {
    const latestMessage = thread.lastElementChild;
    if (!latestMessage) return;
    thread.scrollTop = Math.max(0, latestMessage.offsetTop - thread.offsetTop);
  });
}

function openDatalitoPanel() {
  datalitoState.isOpen = true;
  refreshDatalitoViews();
  requestAnimationFrame(() => document.querySelector("#datalitoInput-panel")?.focus());
}

function closeDatalitoPanel() {
  datalitoState.isOpen = false;
  refreshDatalitoViews();
}

function resetDatalitoConversation(status = "Conversación nueva.") {
  datalitoState.messages = [datalitoState.messages[0]];
  datalitoState.status = status;
  refreshDatalitoViews();
}

function recordDatalitoFeedback(messageId, reason) {
  const message = datalitoState.messages.find((item) => item.id === messageId);
  datalitoState.feedback.push({
    id: createDatalitoId("feedback"),
    messageId,
    reason,
    question: message?.question || "",
    answerMode: message?.answerMode || datalitoState.mode,
    promptVersion: datalitoPromptVersion,
    indexVersion: datalitoIndexVersion,
    createdAt: new Date().toISOString(),
  });
  persistDatalitoCollection(datalitoStorageKeys.feedback, datalitoState.feedback);
  datalitoState.status = "Feedback registrado localmente para revisión.";
  refreshDatalitoViews();
}

function recordDatalitoGap(question) {
  const normalizedQuestion = normalizeText(question || "");
  if (!normalizedQuestion) return;

  const existing = datalitoState.gaps.find((gap) => normalizeText(gap.question) === normalizedQuestion);
  if (existing) {
    existing.count += 1;
    existing.lastSeenAt = new Date().toISOString();
  } else {
    datalitoState.gaps.push({
      id: createDatalitoId("gap"),
      question,
      count: 1,
      status: "open",
      promptVersion: datalitoPromptVersion,
      indexVersion: datalitoIndexVersion,
      firstSeenAt: new Date().toISOString(),
      lastSeenAt: new Date().toISOString(),
    });
  }

  persistDatalitoCollection(datalitoStorageKeys.gaps, datalitoState.gaps);
  datalitoState.status = "Brecha registrada localmente. En la versión enterprise se enviará a la bandeja de administración.";
  refreshDatalitoViews();
}

function loadDatalitoCollection(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function persistDatalitoCollection(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value.slice(-100)));
  } catch {
    datalitoState.status = "No se pudo persistir el registro local.";
  }
}

function createDatalitoId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

const datalitoStopwords = new Set([
  "que",
  "como",
  "para",
  "por",
  "con",
  "del",
  "las",
  "los",
  "una",
  "uno",
  "esta",
  "este",
  "esto",
  "sobre",
  "donde",
  "cual",
  "cuando",
  "debe",
  "deben",
  "puede",
  "puedo",
  "dame",
  "explicame",
]);

function tokenizeDatalitoText(value) {
  return normalizeText(value)
    .split(/[^a-z0-9]+/g)
    .filter((token) => token.length > 2 && !datalitoStopwords.has(token));
}

function renderDatalizationDefinition() {
  return `
    <section class="datalization-section page-inner" aria-labelledby="datalizationTitle">
      <div class="datalization-copy">
        <span class="flow-chip">qué es datalizar</span>
        <h2 id="datalizationTitle">Un proceso está datalizado cuando decide y se controla con evidencia.</h2>
        <p>Un proyecto alcanza datalización real cuando deja de depender de planillas aisladas, tareas manuales o criterios individuales, y pasa a operar con datos confiables, reglas explícitas, disparadores, acciones trazables, responsables y monitoreo continuo.</p>
      </div>

      <div class="datalization-grid" aria-label="Condiciones de datalización completa">
        ${datalizationCriteria
          .map(
            (item) => `
              <article class="datalization-card">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </article>
            `,
          )
          .join("")}
      </div>

      <div class="datalization-levels" aria-label="Niveles porcentuales de datalización">
        <div class="datalization-level-head">
          <h3>Porcentaje de datalización</h3>
          <p>El porcentaje expresa cuánto del proceso está automatizado, gobernado y operado; no cuántos reportes existen.</p>
        </div>
        <div class="datalization-level-grid">
          ${datalizationLevels
            .map(
              (level) => `
                <article class="datalization-level">
                  <strong>${escapeHtml(level.percent)}</strong>
                  <h4>${escapeHtml(level.title)}</h4>
                  <p>${escapeHtml(level.text)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderExecutiveBrief(narrative, variant = "") {
  if (!narrative) return "";

  return `
    <section class="executive-brief page-inner ${variant}" aria-label="Síntesis ejecutiva">
      <div class="executive-answer">
        <span class="flow-chip">${escapeHtml(narrative.eyebrow)}</span>
        <h2>${escapeHtml(narrative.title)}</h2>
        <p>${escapeHtml(narrative.summary)}</p>
      </div>
      <div class="executive-support" aria-label="Razones principales">
        ${narrative.support
          .map(
            (item, index) => `
              <article class="executive-support-card">
                <span>${index + 1}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="executive-action">
        <strong>${escapeHtml(narrativeFrame.actionLabel)}</strong>
        <p>${escapeHtml(narrative.action)}</p>
      </div>
    </section>
  `;
}

function renderConceptDecantation() {
  return `
    <section class="concept-tree page-inner" aria-labelledby="conceptTreeTitle">
      <div class="concept-tree-head">
        <span class="flow-chip">árbol de decantación conceptual</span>
        <h2 id="conceptTreeTitle">La idea baja de decisión gerencial a ejecución cotidiana.</h2>
        <p>La lógica del portal no es una acumulación de temas: cada concepto se decanta en una pregunta más concreta, hasta llegar a acciones, controles y evidencias que el equipo puede sostener.</p>
      </div>
      <div class="concept-tree-grid">
        ${conceptDecantation
          .map(
            (level, index) => `
              <article class="concept-tree-level" style="--tree-order:${index}">
                <div class="concept-tree-level-head">
                  <span>${index + 1}</span>
                  <div>
                    <small>${escapeHtml(level.level)}</small>
                    <h3>${escapeHtml(level.statement)}</h3>
                  </div>
                </div>
                <div class="concept-tree-branches">
                  ${level.branches
                    .map(
                      (branch) => `
                        <div class="concept-branch">
                          <strong>${escapeHtml(branch.title)}</strong>
                          <p>${escapeHtml(branch.text)}</p>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWorkflowLab() {
  return `
    <section class="workflow-lab page-inner" aria-label="Flujo operativo de datalización">
      <div class="workflow-board" aria-label="Canvas del flujo de datalización">
        <div class="workflow-board-head">
          <div>
            <span class="flow-chip">flujo de automatización</span>
            <h2>La transformación ocurre cuando cada paso responde una pregunta ejecutiva.</h2>
            <p>El flujo muestra cómo una tarea manual se convierte en sistema: primero se entiende el proceso, luego se fijan reglas y datos, después se automatiza la acción y finalmente se controla la mejora.</p>
          </div>
          <div class="workflow-lanes" aria-label="Carriles del flujo">
            <span>Proceso</span>
            <span>Reglas y datos</span>
            <span>Acción y operación</span>
          </div>
        </div>
        <div class="workflow-chain" aria-label="Pasos clickeables del flujo">
          ${workflowSteps
            .map(
              (step, index) => `
                <button
                  class="workflow-node-card tone-${step.tone} ${index === 0 ? "active" : ""}"
                  type="button"
                  style="--node-order:${index}"
                  data-workflow-step="${index}"
                  aria-expanded="${index === 0 ? "true" : "false"}"
                  aria-controls="workflow-panel-${index}"
                >
                    <span class="node-icon">${icon(step.iconName)}</span>
                    <strong>${escapeHtml(step.title)}</strong>
                    <small>${escapeHtml(step.short)}</small>
                    <span class="node-disclosure">${index === 0 ? "Detalle abierto" : "Abrir detalle"} ${icon("chevronDown")}</span>
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="workflow-detail-drawer" aria-live="polite">
          ${workflowSteps
            .map(
              (step, index) => `
                <section class="workflow-step-panel" id="workflow-panel-${index}" data-workflow-panel="${index}" ${index === 0 ? "" : "hidden"}>
                  <div class="workflow-panel-summary">
                    <span>Paso ${index + 1}</span>
                    <h3>${escapeHtml(step.title)}</h3>
                    <p>${escapeHtml(step.short)}</p>
                  </div>
                  <div>
                    <h3>Significado técnico</h3>
                    <p>${escapeHtml(step.technical)}</p>
                  </div>
                  <div>
                    <h3>Significado funcional</h3>
                    <p>${escapeHtml(step.functional)}</p>
                  </div>
                  <div>
                    <h3>Ejemplos reales</h3>
                    <ul>
                      ${step.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join("")}
                    </ul>
                  </div>
                </section>
              `,
            )
            .join("")}
        </div>
        <div class="workflow-output">
          <span>${icon("spark")}</span>
          <div>
            <strong>Conclusión operativa</strong>
            <p>Un reporte informa, pero una automatización toma una señal, aplica reglas, dispara una acción, registra evidencia y permite mejorar el proceso.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function setupWorkflowInteractions() {
  const buttons = [...document.querySelectorAll("[data-workflow-step]")];
  const panels = [...document.querySelectorAll("[data-workflow-panel]")];
  if (!buttons.length || !panels.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.workflowStep;
      const isOpen = button.getAttribute("aria-expanded") === "true";
      if (isOpen) return;

      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-expanded", "false");
        const disclosure = item.querySelector(".node-disclosure");
        if (disclosure) disclosure.innerHTML = `Abrir detalle ${icon("chevronDown")}`;
      });
      panels.forEach((panel) => {
        panel.hidden = true;
      });

      button.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      const disclosure = button.querySelector(".node-disclosure");
      if (disclosure) disclosure.innerHTML = `Detalle abierto ${icon("chevronDown")}`;
      const panel = panels.find((item) => item.dataset.workflowPanel === target);
      if (panel) panel.hidden = false;
    });
  });
}

function renderMethodologyPage() {
  appRoot.innerHTML = `
    <section class="page tool-page methodology-page">
      <header class="page-heading page-inner methodology-hero">
        <span class="eyebrow">Metodología operativa</span>
        <h1>Pérdida, causa y control.</h1>
        <p class="lede">La metodología se presenta como una cadena de razonamiento: primero se mide la pérdida, después se identifica la causa y, finalmente, se instala un control que el equipo pueda sostener.</p>
      </header>

      ${renderMethodologyProcessFlow()}

      ${renderExecutiveBrief(pageNarratives.methodology)}

      ${renderConceptDecantation()}

      <section class="methodology-intro page-inner" aria-labelledby="methodologyIntroTitle">
        <div class="methodology-intro-copy">
          <span class="flow-chip">encuadre</span>
          <h2 id="methodologyIntroTitle">La metodología sirve si convierte pérdida en decisión y decisión en control.</h2>
          <p>La pregunta central es cómo sabemos que una automatización BI mejora el proceso, se sostiene en producción y aprende con evidencia; por eso cada concepto se conecta con un momento del trabajo: definir, medir, analizar, mejorar o controlar.</p>
        </div>
        <div class="methodology-principles" aria-label="Usos del marco metodológico">
          ${methodologyPrinciples.map(renderMethodologyPrinciple).join("")}
        </div>
      </section>

      <section class="oee-section page-inner" aria-labelledby="oeeTitle">
        <div class="methodology-section-head">
          <span class="flow-chip">OEE BI</span>
          <h2 id="oeeTitle">OEE BI muestra dónde se pierde efectividad analítica.</h2>
          <p>En planta, OEE combina disponibilidad, rendimiento y calidad; en un equipo BI, el mismo razonamiento mide si la solución está disponible, fluye con eficiencia y produce salidas confiables para operar.</p>
        </div>
        <div class="oee-formula" aria-label="Fórmula OEE BI">
          <strong>OEE BI</strong>
          <span>Disponibilidad</span>
          <em>x</em>
          <span>Eficiencia</span>
          <em>x</em>
          <span>Calidad</span>
        </div>
        <div class="oee-grid">
          ${oeeFactors.map(renderOeeFactor).join("")}
        </div>
      </section>

      <section class="dmaic-section page-inner" aria-labelledby="dmaicTitle">
        <div class="methodology-section-head">
          <span class="flow-chip">DMAIC</span>
          <h2 id="dmaicTitle">DMAIC evita saltar del síntoma a la solución.</h2>
          <p>DMAIC ordena el flujo de mejora: primero se define el proceso, después se mide la pérdida, se analiza la causa, se mejora el diseño y finalmente se controla la operación para no volver al circuito manual.</p>
        </div>
        <div class="dmaic-track" aria-label="Ciclo DMAIC aplicado a BI">
          ${dmaicStages.map(renderDmaicStage).join("")}
        </div>
      </section>

      <section class="methodology-toolchain page-inner" aria-labelledby="toolchainTitle">
        <div class="methodology-section-head">
          <span class="flow-chip">herramientas ubicadas</span>
          <h2 id="toolchainTitle">Cada herramienta se justifica por la pregunta que responde.</h2>
          <p>Si una herramienta no ayuda a decidir, medir, reducir riesgo o sostener la mejora, no se fuerza; así Lean Six Sigma, VSM, FMEA, Kaizen, SMED, Poka-Yoke y Kata quedan integrados al trabajo real del equipo.</p>
        </div>
        <div class="methodology-tool-grid">
          ${methodologyTools.map(renderMethodologyTool).join("")}
        </div>
      </section>

      <section class="toyota-section page-inner" aria-labelledby="toyotaTitle">
        <div class="methodology-section-head">
          <span class="flow-chip">4P Toyota</span>
          <h2 id="toyotaTitle">Las 4P evitan que la conversación quede atrapada en la herramienta.</h2>
          <p>Primero se define el propósito, luego el flujo, después los roles y finalmente la rutina de resolución de problemas; esa secuencia sostiene la datalización como sistema de gestión.</p>
        </div>
        <div class="toyota-layers" aria-label="Cuatro P de Toyota aplicadas a BI">
          ${toyotaFourP.map(renderToyotaLayer).join("")}
        </div>
      </section>

      <section class="lean-practices-section page-inner" aria-labelledby="leanPracticesTitle">
        <div class="methodology-section-head">
          <span class="flow-chip">patrones de mejora</span>
          <h2 id="leanPracticesTitle">Las prácticas Lean se vuelven útiles cuando cambian el diseño BI.</h2>
          <p>Estas prácticas no aparecen como teoría separada: se convierten en requisitos de UX, controles de datos, reglas de publicación, diseño de flujo y cadencia de operación.</p>
        </div>
        <div class="lean-practice-grid">
          ${leanPractices.map(renderLeanPractice).join("")}
        </div>
      </section>

      <section class="methodology-cadence page-inner" aria-labelledby="cadenceTitle">
        <div class="methodology-section-head">
          <span class="flow-chip">operación diaria</span>
          <h2 id="cadenceTitle">La metodología se sostiene cuando entra en la agenda del equipo.</h2>
          <p>El marco se mantiene con una cadencia liviana: salud diaria, Kaizen semanal, gate de release y revisión mensual de efectividad. Esa rutina conecta gerencia, ingeniería y usuarios.</p>
        </div>
        <div class="cadence-grid">
          ${methodologyCadence.map(renderCadenceItem).join("")}
        </div>
      </section>

      <section class="methodology-close page-inner" aria-label="Cierre metodológico">
        <div>
          <span class="eyebrow">criterio de uso</span>
          <h2>La metodología se aplica por problema, no por moda.</h2>
          <p>OEE BI muestra dónde se pierde efectividad. DMAIC ordena cómo intervenir. VSM, FMEA, Kaizen, SMED, Poka-Yoke, Kata y 4P Toyota se eligen según la pérdida detectada y el momento del proyecto.</p>
        </div>
        <a class="button secondary" href="/guia-power-bi" data-route>
          ${icon("route")}
          Conectar con guía + roadmap
        </a>
      </section>
    </section>
  `;
}

function renderMethodologyProcessFlow() {
  return `
    <section class="methodology-process page-inner" aria-labelledby="methodologyProcessTitle">
      <div class="methodology-process-head">
        <span class="flow-chip">proceso end to end</span>
        <h2 id="methodologyProcessTitle">La guía y el roadmap se convierten en una secuencia de trabajo verificable.</h2>
        <p>El recorrido ordena la necesidad inicial, la construcción del producto BI, la salida a producción y la mejora sostenida. En cada etapa queda explícito qué metodología corresponde, por qué se usa, para qué sirve, cómo se aplica y qué evidencia debe dejar.</p>
      </div>
      <div class="methodology-process-list">
        ${methodologyProcessFlow.map(renderMethodologyProcessStep).join("")}
      </div>
    </section>
  `;
}

function renderMethodologyProcessStep(step, index) {
  return `
    <article class="methodology-process-step" style="--process-order:${index}">
      <div class="methodology-process-index">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <small>${escapeHtml(step.method)}</small>
          <h3>${escapeHtml(step.stage)}</h3>
        </div>
      </div>
      <div class="methodology-process-grid">
        ${renderProcessBlock("Por qué", step.why)}
        ${renderProcessBlock("Para qué", step.purpose)}
        ${renderProcessBlock("Cómo", step.how)}
        ${renderProcessBlock("Definición técnica", step.technicalDefinition)}
        ${renderProcessBlock("Definición funcional", step.functionalDefinition)}
        <div class="process-block process-examples">
          <strong>Ejemplos</strong>
          <ul>${step.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join("")}</ul>
        </div>
      </div>
    </article>
  `;
}

function renderProcessBlock(label, text) {
  return `
    <div class="process-block">
      <strong>${escapeHtml(label)}</strong>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function renderMethodologyPrinciple(item) {
  return `
    <article class="methodology-principle">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderOeeFactor(factor, index) {
  const colors = ["var(--ypf-blue)", "var(--ypf-yellow)", "var(--green)"];
  return `
    <article class="oee-factor" style="--method-color:${colors[index % colors.length]}">
      <div class="oee-factor-head">
        <span>${index + 1}</span>
        <h3>${escapeHtml(factor.title)}</h3>
      </div>
      <p class="oee-factor-short">${escapeHtml(factor.short)}</p>
      <div class="oee-factor-formula">${escapeHtml(factor.formula)}</div>
      <p>${escapeHtml(factor.biMeaning)}</p>
      <div class="oee-factor-columns">
        <div>
          <h4>Señales sanas</h4>
          <ul>${factor.signals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>Pérdidas típicas</h4>
          <ul>${factor.failureModes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
      </div>
    </article>
  `;
}

function renderDmaicStage(stage, index) {
  const colors = ["#ff6b3b", "#3aa0ff", "#8d72ff", "#30d174", "#35c9bd"];
  const connectors = ["Primero", "Luego", "Entonces", "A partir de ahí", "Finalmente"];
  return `
    <article class="dmaic-stage" style="--method-color:${colors[index % colors.length]}; --method-order:${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <small>${escapeHtml(connectors[index] || "Luego")}</small>
      <h3>${escapeHtml(stage.title)}</h3>
      <strong>${escapeHtml(stage.question)}</strong>
      <p>${escapeHtml(stage.biApplication)}</p>
      <div class="methodology-tags">
        ${stage.tools.map((item) => `<small>${escapeHtml(item)}</small>`).join("")}
      </div>
      <ul>${stage.evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `;
}

function renderMethodologyTool(tool, index) {
  return `
    <article class="methodology-tool-card" style="--method-order:${index}">
      <div class="methodology-tool-head">
        <span>${escapeHtml(tool.role)}</span>
        <small>${escapeHtml(tool.when)}</small>
      </div>
      <h3>${escapeHtml(tool.title)}</h3>
      <p>${escapeHtml(tool.purpose)}</p>
      <strong>${escapeHtml(tool.biUse)}</strong>
    </article>
  `;
}

function renderToyotaLayer(layer, index) {
  return `
    <article class="toyota-layer" style="--method-order:${index}">
      <span>${index + 1}P</span>
      <div>
        <small>${escapeHtml(layer.subtitle)}</small>
        <h3>${escapeHtml(layer.title)}</h3>
        <p>${escapeHtml(layer.biTranslation)}</p>
        <div class="methodology-tags">
          ${layer.evidence.map((item) => `<small>${escapeHtml(item)}</small>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderLeanPractice(practice) {
  return `
    <article class="lean-practice">
      <span>${escapeHtml(practice.focus)}</span>
      <h3>${escapeHtml(practice.title)}</h3>
      <p>${escapeHtml(practice.text)}</p>
      <strong>${escapeHtml(practice.example)}</strong>
    </article>
  `;
}

function renderCadenceItem(item, index) {
  return `
    <article class="cadence-item">
      <span>${index + 1}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderDatalizationMethodPage() {
  appRoot.innerHTML = `
    <section class="page tool-page method-page">
      <header class="page-heading page-inner method-hero">
        <span class="eyebrow">Método de Datalización v0.1</span>
        <h1>Un sistema operativo para trabajar, entregar y sostener productos BI.</h1>
        <p class="lede">El método ordena cómo el equipo organiza activos, nombra archivos, separa DEV de PROD, mide trabajo, usa Microsoft 365 y prepara el salto hacia VMC/Fabric sin depender de memoria individual.</p>
      </header>

      ${renderExecutiveBrief(pageNarratives.method)}

      <section class="method-operating-flow page-inner" aria-labelledby="methodOperatingFlowTitle">
        <div class="method-section-head">
          <span class="flow-chip">proceso end to end</span>
          <h2 id="methodOperatingFlowTitle">El método baja de una decisión de orden a una rutina concreta de entrega.</h2>
          <p>La secuencia evita que el equipo acumule documentos sueltos: primero fija el estándar, después ordena DEV, construye evidencia, nombra activos, mide flujo y recién entonces publica y sostiene en VMC.</p>
        </div>
        <div class="method-flow-track" aria-label="Proceso operativo de Datalización">
          ${methodOperatingFlow.map(renderMethodOperatingStep).join("")}
        </div>
      </section>

      <section class="method-command page-inner" aria-labelledby="methodCommandTitle">
        <div class="method-section-head">
          <span class="flow-chip">respuesta ejecutiva</span>
          <h2 id="methodCommandTitle">La reconstrucción del área necesita una forma común de trabajar antes de escalar.</h2>
          <p>La decisión no es crear más carpetas: es instalar un estándar que vuelva cada producto encontrable, mantenible, medible y publicable con evidencia.</p>
        </div>
        <div class="method-command-grid">
          ${methodPrinciples
            .map(
              (item, index) => `
                <article class="method-command-card" style="--method-accent:${getMethodAccent(index)}">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="method-planes page-inner" aria-labelledby="methodPlanesTitle">
        <div class="method-section-head">
          <span class="flow-chip">arquitectura base</span>
          <h2 id="methodPlanesTitle">DEV y PROD se separan para que el trabajo interno no contamine lo que consume el negocio.</h2>
          <p>El Teams de Datalización es el taller controlado; VMC es el ambiente donde vive el producto publicado. Esa frontera evita acoplar borradores, fuentes y pruebas con tableros productivos.</p>
        </div>
        <div class="method-plane-flow" aria-label="Doble plano DEV y PROD">
          ${methodPlanes.map(renderMethodPlane).join("")}
        </div>
      </section>

      <section class="method-layers page-inner" aria-labelledby="methodLayersTitle">
        <div class="method-section-head">
          <span class="flow-chip">Microsoft 365 como base</span>
          <h2 id="methodLayersTitle">Cada herramienta cumple una función del método, no una preferencia personal.</h2>
          <p>Teams, SharePoint, Loop, Lists, OneNote y Copilot se usan como capas coordinadas para comunicación, documentos, seguimiento, conocimiento e IA contextual.</p>
        </div>
        <div class="method-layer-grid">
          ${methodFunctionalLayers.map(renderMethodLayer).join("")}
        </div>
      </section>

      <section class="method-channels page-inner" aria-labelledby="methodChannelsTitle">
        <div class="method-section-head">
          <span class="flow-chip">PARA + Johnny.Decimal lite</span>
          <h2 id="methodChannelsTitle">Los canales separan proyecto, producto, área, recurso y archivo sin duplicar información.</h2>
          <p>Los proyectos viven en Proyectos Activos y se vinculan a áreas por metadatos. Así un proyecto transversal se busca desde varios ángulos sin copiar carpetas.</p>
        </div>
        <div class="method-channel-track">
          ${methodChannels.map(renderMethodChannel).join("")}
        </div>
      </section>

      <section class="method-project-system page-inner" aria-labelledby="methodProjectTitle">
        <div class="method-section-head">
          <span class="flow-chip">plantilla intra-proyecto</span>
          <h2 id="methodProjectTitle">Cada proyecto deja el mismo mapa, aunque cambien el área, el producto o el desarrollador.</h2>
          <p>La plantilla se versiona en 00-Metodo-Datalizacion y cada proyecto registra qué versión aplicó. Eso permite mejorar el método sin romper proyectos existentes.</p>
        </div>
        <div class="method-project-grid">
          <div class="method-folder-browser" aria-label="Explorador de carpetas del proyecto">
            <div class="method-folder-root">
              <span>PRJ001-MidGas-Tablero-Objetivos</span>
              <small>plantilla viva de proyecto</small>
            </div>
            ${methodProjectFolders.map(renderMethodFolder).join("")}
          </div>
          <div class="method-folder-explain">
            <article>
              <span>${icon("book")}</span>
              <h3>Cada subcarpeta lleva un README mínimo.</h3>
              <p>Tres líneas alcanzan para explicar qué se guarda, qué no se guarda y quién debería usarlo. El sistema queda autodescubrible y delegable.</p>
            </article>
            <article>
              <span>${icon("quote")}</span>
              <h3>Minuta curada y reunión cruda no son lo mismo.</h3>
              <p>Las decisiones, acuerdos y acciones quedan en 00-Gestion/Minutas; grabaciones, transcripciones y chats sin procesar quedan en 99-Reuniones.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="method-naming page-inner" aria-labelledby="methodNamingTitle">
        <div class="method-section-head">
          <span class="flow-chip">convención de nombres</span>
          <h2 id="methodNamingTitle">El nombre del archivo debe explicar qué es, de quién es, cuándo nació y qué versión representa.</h2>
          <p>La convención evita búsquedas eternas, versiones falsas y activos imposibles de mantener fuera del contexto de quien los creó.</p>
        </div>
        <div class="method-naming-grid">
          <div class="method-naming-lab">
            <span>patrón estándar</span>
            <code>${escapeHtml(methodNaming.pattern)}</code>
            <div>
              ${methodNaming.examples.map((example) => `<p>${escapeHtml(example)}</p>`).join("")}
            </div>
          </div>
          <div class="method-rule-grid">
            ${methodNaming.rules.map((rule) => `<article class="method-rule"><span>${icon("shield")}</span><p>${escapeHtml(rule)}</p></article>`).join("")}
          </div>
        </div>
        <details class="method-disclosure">
          <summary>Ver catálogo de tipos y códigos</summary>
          <div class="method-catalog-grid">
            <div>
              <h3>TIPO cerrado</h3>
              <div class="method-code-table">
                ${methodTypeCatalog.map(([code, type]) => `<span>${escapeHtml(code)}</span><p>${escapeHtml(type)}</p>`).join("")}
              </div>
            </div>
            <div>
              <h3>Código de proyecto o área</h3>
              <div class="method-code-table method-code-table-wide">
                ${methodCodeCatalog.map((item) => `<span>${escapeHtml(item.prefix)}</span><p>${escapeHtml(item.use)} · ${escapeHtml(item.example)}</p>`).join("")}
              </div>
            </div>
          </div>
        </details>
      </section>

      <section class="method-backlog page-inner" aria-labelledby="methodBacklogTitle">
        <div class="method-section-head">
          <span class="flow-chip">Backlog Datalización v0</span>
          <h2 id="methodBacklogTitle">El seguimiento mide flujo real, no esfuerzo declarado.</h2>
          <p>La lista de SharePoint arranca simple: coexistencia con el sistema actual, backlog propio en paralelo y, más adelante, PowerApp de ingreso con tablero del equipo en Power BI.</p>
        </div>
        <div class="method-backlog-grid">
          <div class="method-column-cloud" aria-label="Columnas del backlog">
            ${methodBacklogColumns.map((column) => `<span>${escapeHtml(column)}</span>`).join("")}
          </div>
          <div class="method-signal-grid">
            ${methodObjectiveSignals.map(renderMethodSignal).join("")}
          </div>
        </div>
        <div class="method-metric-row" aria-label="Métricas del tablero del equipo">
          ${methodTeamMetrics.map((metric) => `<article><span>${icon("gauge")}</span><p>${escapeHtml(metric)}</p></article>`).join("")}
        </div>
      </section>

      <section class="method-vmc page-inner" aria-labelledby="methodVmcTitle">
        <div class="method-section-head">
          <span class="flow-chip">VMC / Fabric</span>
          <h2 id="methodVmcTitle">La publicación productiva necesita workspaces, Lakehouse y permisos como arquitectura, no como costumbre.</h2>
          <p>El método propone un modelo conceptual para pasar de Teams + SharePoint como DEV a VMC como PROD, con capas Bronze, Silver y Gold y promotion controlada.</p>
        </div>
        <div class="method-vmc-diagram">
          <article class="method-vmc-card">
            <span>Workspaces</span>
            <h3>VMC-Datalizacion-[Dominio]-[Stage]</h3>
            <ul>${methodVmcModel.workspaces.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
          <div class="method-vmc-bridge">
            <span>Deployment Pipelines</span>
            ${icon("arrowRight")}
          </div>
          <article class="method-vmc-card">
            <span>Lakehouse</span>
            <h3>Bronze, Silver y Gold</h3>
            <ul>${methodVmcModel.lakehouse.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
        </div>
        <details class="method-disclosure">
          <summary>Ver ciclo de vida DEV → TEST → PROD</summary>
          <ol class="method-lifecycle">
            ${methodVmcModel.lifecycle.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        </details>
      </section>

      <section class="method-roadmap page-inner" aria-labelledby="methodRoadmapTitle">
        <div class="method-section-head">
          <span class="flow-chip">implementación</span>
          <h2 id="methodRoadmapTitle">El método se instala con piloto, tablero, adopción y gobierno interno.</h2>
          <p>No hace falta esperar una solución perfecta: la versión 0.1 se valida con un caso piloto, se mide y se mejora con feedback real.</p>
        </div>
        <div class="method-roadmap-track">
          ${methodRoadmap.map(renderMethodRoadmapItem).join("")}
        </div>
      </section>

      <section class="method-governance page-inner" aria-labelledby="methodGovernanceTitle">
        <div class="method-section-head">
          <span class="flow-chip">gobernanza</span>
          <h2 id="methodGovernanceTitle">El método necesita dueños explícitos para no depender del entusiasmo inicial.</h2>
          <p>Roles, decisiones tomadas, pendientes y backlog futuro mantienen el método vivo sin convertirlo en burocracia.</p>
        </div>
        <div class="method-governance-grid">
          ${methodRoles.map(renderMethodRole).join("")}
        </div>
        <div class="method-decision-grid">
          ${renderDecisionDisclosure("Decisiones tomadas", methodDecisions, "green")}
          ${renderDecisionDisclosure("Decisiones pendientes", methodPendingDecisions, "orange")}
          ${renderDecisionDisclosure(
            "Backlog del método",
            methodFutureBacklog.map(([version, item]) => `${version}: ${item}`),
            "blue",
          )}
        </div>
      </section>
    </section>
  `;
}

function getMethodAccent(index) {
  const colors = ["#35c9bd", "#3aa0ff", "#ff6b3b", "#8d72ff", "#30d174"];
  return colors[index % colors.length];
}

function renderMethodOperatingStep(step, index) {
  return `
    <article class="method-flow-step" style="--method-accent:${getMethodAccent(index)}">
      <div class="method-flow-step-head">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(step.step)}</h3>
      </div>
      <p>${escapeHtml(step.what)}</p>
      <dl>
        <div><dt>Por qué</dt><dd>${escapeHtml(step.why)}</dd></div>
        <div><dt>Para qué</dt><dd>${escapeHtml(step.purpose)}</dd></div>
        <div><dt>Cómo</dt><dd>${escapeHtml(step.how)}</dd></div>
      </dl>
      <details class="method-step-detail">
        <summary>Definición técnica, funcional y ejemplo</summary>
        <div>
          <strong>Definición técnica</strong>
          <p>${escapeHtml(step.technical)}</p>
        </div>
        <div>
          <strong>Definición funcional</strong>
          <p>${escapeHtml(step.functional)}</p>
        </div>
        <div>
          <strong>Ejemplo</strong>
          <p>${escapeHtml(step.example)}</p>
        </div>
      </details>
    </article>
  `;
}

function renderMethodPlane(plane, index) {
  return `
    <article class="method-plane-card ${plane.id}" style="--method-accent:${getMethodAccent(index)}">
      <span>${escapeHtml(plane.id.toUpperCase())}</span>
      <h3>${escapeHtml(plane.title)}</h3>
      <dl>
        <div><dt>Dónde</dt><dd>${escapeHtml(plane.location)}</dd></div>
        <div><dt>Para qué</dt><dd>${escapeHtml(plane.purpose)}</dd></div>
        <div><dt>Acceso</dt><dd>${escapeHtml(plane.access)}</dd></div>
      </dl>
      <strong>${escapeHtml(plane.guardrail)}</strong>
    </article>
  `;
}

function renderMethodLayer(layer, index) {
  return `
    <article class="method-layer-card" style="--method-accent:${getMethodAccent(index)}">
      <span>${escapeHtml(layer.tool)}</span>
      <h3>${escapeHtml(layer.layer)}</h3>
      <p>${escapeHtml(layer.use)}</p>
    </article>
  `;
}

function renderMethodChannel(channel, index) {
  return `
    <article class="method-channel-card" style="--method-accent:${getMethodAccent(index)}">
      <span>${escapeHtml(channel.code)}</span>
      <h3>${escapeHtml(channel.title)}</h3>
      <p>${escapeHtml(channel.group)}</p>
    </article>
  `;
}

function renderMethodFolder(folder, index) {
  return `
    <details class="method-folder-detail" style="--method-accent:${getMethodAccent(index)}" ${index === 0 ? "open" : ""}>
      <summary><span>${escapeHtml(folder.code)}</span><strong>${escapeHtml(folder.name)}</strong></summary>
      <p>${escapeHtml(folder.purpose)}</p>
    </details>
  `;
}

function renderMethodSignal(signal) {
  return `
    <article class="method-signal-card">
      <div>
        <span>Evitar</span>
        <p>${escapeHtml(signal.avoid)}</p>
      </div>
      <strong>${icon("arrowRight")}</strong>
      <div>
        <span>Preferir</span>
        <p>${escapeHtml(signal.prefer)}</p>
      </div>
    </article>
  `;
}

function renderMethodRoadmapItem(item, index) {
  return `
    <article class="method-roadmap-item" style="--method-accent:${getMethodAccent(index)}">
      <span>${escapeHtml(item.moment)}</span>
      <h3>${escapeHtml(item.focus)}</h3>
      <p>${escapeHtml(item.deliverable)}</p>
    </article>
  `;
}

function renderMethodRole(item, index) {
  return `
    <article class="method-role-card" style="--method-accent:${getMethodAccent(index)}">
      <span>${icon("shield")}</span>
      <h3>${escapeHtml(item.role)}</h3>
      <p>${escapeHtml(item.responsibility)}</p>
    </article>
  `;
}

function renderDecisionDisclosure(title, items, tone) {
  return `
    <details class="method-disclosure method-decision ${tone}">
      <summary>${escapeHtml(title)}</summary>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </details>
  `;
}

function renderDictionaryPage() {
  appRoot.innerHTML = `
    <section class="page tool-page dictionary-layout">
      <header class="page-heading page-inner">
        <span class="eyebrow">Glosario operativo</span>
        <h1>Lenguaje común, menor riesgo.</h1>
        <p class="lede">Cada término define una decisión, explica por qué importa, muestra un ejemplo y advierte el riesgo de interpretarlo mal.</p>
      </header>

      ${renderExecutiveBrief(pageNarratives.dictionary)}

      <section class="control-panel page-inner" aria-label="Filtros del diccionario">
        <div class="search-row">
          <label class="search-input">
            ${icon("search")}
            <input
              id="dictionarySearch"
              type="search"
              value="${escapeHtml(dictionaryState.query)}"
              placeholder="Buscar por término, categoría o definición"
              autocomplete="off"
              aria-label="Buscar términos"
            />
          </label>
          <div class="result-count" id="dictionaryCount"></div>
        </div>
        <div class="chip-row" aria-label="Categorías">
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

      <section class="term-grid page-inner" id="dictionaryResults" aria-label="Términos BI"></section>
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
    <section class="page tool-page guide-story-page">
      <header class="page-heading page-inner guide-story-hero">
        <span class="eyebrow">Guía y roadmap de automatización BI/Fabric</span>
        <h1>Evidencia de control BI.</h1>
        <p class="lede">La guía presenta la respuesta antes del detalle: cada gate existe para demostrar que el proceso puede avanzar con evidencia, responsabilidad y control operativo.</p>
      </header>

      ${renderExecutiveBrief(pageNarratives.guide)}

      <section class="guide-story-intro page-inner" aria-labelledby="guideStoryTitle">
        <div class="guide-story-copy">
          <span class="flow-chip">tesis de la guía</span>
          <h2 id="guideStoryTitle">El proceso manda; la tecnología demuestra que puede sostenerlo.</h2>
          <p>El punto de partida es una tarea repetible que consume tiempo, depende de interpretación manual o pierde trazabilidad; la guía la convierte en un flujo con datos confiables, reglas explícitas, ejecución controlada, salida accionable y operación continua.</p>
        </div>
        <div class="guide-story-proof" aria-label="Transformación esperada">
          <div>
            <span>Antes</span>
            <strong>Tareas manuales, criterios dispersos y decisiones difíciles de auditar.</strong>
          </div>
          <div>
            <span>Durante</span>
            <strong>Proceso, reglas, datos, modelo, seguridad y UX se ordenan como una misma cadena.</strong>
          </div>
          <div>
            <span>Después</span>
            <strong>La operación recibe señales, acciones y evidencia sin reconstruir el caso desde cero.</strong>
          </div>
        </div>
      </section>

      ${renderUnifiedAutomationFlow()}

      ${renderPrdSpecModelSection()}

      <section class="guide-journey page-inner" aria-labelledby="guideJourneyTitle">
        <div class="guide-section-title">
          <span class="flow-chip">historia completa</span>
          <h2 id="guideJourneyTitle">Del caso operativo a la producción monitoreada.</h2>
          <p>La secuencia debe leerse de arriba hacia abajo: cada etapa resume una respuesta, aporta evidencia y prepara el siguiente control.</p>
        </div>
        ${guideSections.map(renderGuideJourneyStep).join("")}
      </section>

      <section class="guide-readiness-panel page-inner" aria-labelledby="guideReadinessTitle">
        <div class="guide-readiness-copy">
          <span class="flow-chip">control de salida</span>
          <h2 id="guideReadinessTitle">La salida a producción exige evidencia completa, no confianza informal.</h2>
          <p>Antes de producción, el equipo debe demostrar que el proceso está entendido, las reglas están versionadas, los datos tienen calidad, la seguridad fue probada y la operación sabe cómo responder ante incidentes.</p>
        </div>
        <ol class="guide-readiness-flow">
          ${readinessChecklist
            .map(
              (item, index) => `
                <li style="--guide-color:${guideStoryPalette[index % guideStoryPalette.length]}; --guide-order:${index}">
                  <span>${index + 1}</span>
                  <p>${escapeHtml(item)}</p>
                </li>
              `,
            )
            .join("")}
        </ol>
      </section>
    </section>
  `;
}

function getUnifiedFlowItems() {
  const positions = [
    { x: 6, y: 56 },
    { x: 17, y: 56 },
    { x: 28, y: 56 },
    { x: 39, y: 56 },
    { x: 50, y: 56 },
    { x: 61, y: 56 },
    { x: 72, y: 56 },
    { x: 83, y: 56 },
    { x: 94, y: 56 },
  ];

  return guideSections.map((section, index) => {
    const phase = roadmapPhases[index] || {};
    const story = getGuideStory(section, index);
    const lane = laneStyles[phase.lane] || { color: story.color };

    return {
      id: index,
      section,
      phase,
      story,
      position: positions[index],
      color: lane.color || story.color,
      tooltip: `Abrir definición técnica y funcional de ${section.title}`,
    };
  });
}

function renderUnifiedAutomationFlow() {
  const items = getUnifiedFlowItems();
  const laneEntries = Object.entries(laneStyles).map(([lane, style]) => {
    const firstItem = items.find((item) => item.phase.lane === lane) || items[0];
    return { lane, style, target: firstItem.id };
  });

  return `
    <section class="bi-flow-showcase unified-flow-showcase page-inner" aria-labelledby="unifiedFlowTitle">
      <div class="flow-canvas unified-flow-canvas" aria-label="Canvas unificado de guía y roadmap">
        <div class="flow-canvas-copy">
          <span class="flow-chip">flujo Power BI/Fabric</span>
          <h2 id="unifiedFlowTitle">El camino correcto avanza de decisión en decisión.</h2>
          <p>La animación muestra la lógica gerencial del roadmap: definición, datos, modelado, DAX, confianza, acción, aprobación, publicación y operación.</p>
        </div>

        <svg class="flow-lines unified-flow-lines" viewBox="0 0 1000 540" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="flowGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <path class="flow-line unified-main-path unified-main-path-base" d="M52 302 H948"></path>
          <path class="flow-line active unified-main-path unified-main-path-motion" d="M52 302 H948"></path>
        </svg>

        <span class="unified-flow-runner" aria-hidden="true"></span>
        ${items.map(renderUnifiedFlowNode).join("")}
      </div>

      <aside class="flow-rail unified-flow-rail" aria-label="Carriles del flujo de automatización">
        ${laneEntries
          .map(({ lane, style, target }, index) => {
            const laneItems = items.filter((item) => item.phase.lane === lane);

            return `
              <button
                class="flow-tab ${index === 0 ? "active" : ""}"
                type="button"
                style="--flow-color:${style.color}"
                data-unified-flow="${target}"
                data-unified-group="${laneItems.map((item) => item.id).join(",")}"
                data-tooltip="Ver gates del carril ${escapeHtml(lane)}"
                aria-expanded="${index === 0 ? "true" : "false"}"
              >
                <strong>${escapeHtml(lane)}</strong>
                <span>${laneItems.map((item) => item.id + 1).join(" · ")}</span>
              </button>
            `;
          })
          .join("")}
      </aside>

      <div class="unified-flow-menu" aria-live="polite">
        ${items.map(renderUnifiedFlowPanel).join("")}
      </div>
    </section>
  `;
}

function renderUnifiedFlowNode(item) {
  const { id, section, phase, story, position, color, tooltip } = item;
  const isActive = id === 0;

  return `
    <button
      class="flow-node unified-flow-node ${isActive ? "spotlight" : ""}"
      type="button"
      data-flow-node="${section.id}"
      data-unified-flow="${id}"
      data-tooltip="${escapeHtml(tooltip)}"
      aria-expanded="${isActive ? "true" : "false"}"
      aria-controls="unified-flow-panel-${id}"
      style="--x:${position.x}%; --y:${position.y}%; --flow-color:${color}; --flow-order:${id}"
    >
      <span class="node-index">${id + 1}</span>
      <span class="node-icon" style="background:${color}">${icon(story.iconName || "spark")}</span>
      <strong>${escapeHtml(section.title)}</strong>
      <small>${escapeHtml(phase.gate || story.flow || section.eyebrow)}</small>
    </button>
  `;
}

function renderUnifiedFlowPanel(item) {
  const { id, section, phase, story, color } = item;

  return `
    <section
      class="unified-flow-panel"
      id="unified-flow-panel-${id}"
      data-unified-flow-panel="${id}"
      style="--flow-color:${color}"
      ${id === 0 ? "" : "hidden"}
    >
      <div class="unified-panel-head">
        <span>Gate ${id + 1}</span>
        <h3>${escapeHtml(phase.title || section.title)}</h3>
        <p>${escapeHtml(phase.gate || story.outcome || "")}</p>
      </div>

      <div class="unified-panel-grid">
        <div>
          <h4>Objetivo principal</h4>
          <p>${escapeHtml(phase.objective || section.summary)}</p>
        </div>
        <div>
          <h4>Entregable esperado</h4>
          <p>${escapeHtml(phase.targetOutcome || story.outcome || section.deliverables?.[0] || "")}</p>
        </div>
      </div>

      <div class="unified-panel-columns">
        <div>
          <h4>Objetivos secundarios</h4>
          <ul>${(phase.secondaryObjectives || phase.keyActivities || section.practices).map((itemText) => `<li>${escapeHtml(itemText)}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>Qué debe quedar</h4>
          <ul>${(phase.deliverables || section.deliverables).map((itemText) => `<li>${escapeHtml(itemText)}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="unified-panel-foot">
        <span>${escapeHtml(phase.owner || section.eyebrow)}</span>
        <p><strong>Riesgo si se saltea:</strong> ${escapeHtml(phase.riskIfSkipped || section.risk)}</p>
      </div>
    </section>
  `;
}

function renderPrdSpecModelSection() {
  return `
    <section class="guide-models-section page-inner" id="modelos-prd-spec" aria-labelledby="guideModelsTitle">
      <div class="guide-models-copy">
        <span class="flow-chip">modelos descargables</span>
          <h2 id="guideModelsTitle">PRD y Spec separan la pregunta ejecutiva de la respuesta técnica.</h2>
          <p>El PRD alinea la necesidad operativa; la Spec convierte esa necesidad en una implementación revisable. Los modelos se presentan como una vista previa limpia y se descargan como documentos Word editables.</p>
        </div>

      <div class="guide-models-grid">
        ${guideDocumentTemplates.map(renderGuideDocumentTemplate).join("")}
      </div>

      <div class="guide-process-contract" aria-labelledby="guideContractTitle">
        <div class="guide-contract-copy">
          <span class="flow-chip">primer acuerdo</span>
          <h2 id="guideContractTitle">La automatización empieza cuando cada documento responde una pregunta distinta.</h2>
          <p>El PRD define el proceso que se quiere automatizar y la Spec define cómo se construye. Separarlos evita discusiones ambiguas: negocio valida sentido, alcance y resultado; ingeniería valida arquitectura, reglas, datos, seguridad y despliegue.</p>
        </div>
        <div class="guide-contract-rows" aria-label="Contrato entre PRD y Spec">
          ${prdSpecComparison
            .map(
              (item) => `
                <div class="guide-contract-row">
                  <strong>${escapeHtml(item.characteristic)}</strong>
                  <p><span>PRD</span>${escapeHtml(item.prd)}</p>
                  <p><span>Spec</span>${escapeHtml(item.spec)}</p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderGuideDocumentTemplate(template) {
  return `
    <article class="guide-model-card">
      <div class="guide-model-head">
        <span>${escapeHtml(template.eyebrow)}</span>
        <h3>${escapeHtml(template.title)}</h3>
        <p>${escapeHtml(template.purpose)}</p>
      </div>
      <div class="guide-model-preview" aria-label="Vista previa de ${escapeHtml(template.title)}">
        <div class="guide-model-paper">
          <span>YPF | Equipo de Datalización</span>
          <h4>${escapeHtml(template.title)}</h4>
          <p>${escapeHtml(template.format)}</p>
          <ol>
            ${template.preview.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        </div>
      </div>
      <div class="guide-model-actions">
        <a class="button small secondary" href="/${template.source}" download>
          ${icon("download")}
          Descargar Word
        </a>
      </div>
    </article>
  `;
}

function setupUnifiedFlowInteractions() {
  const triggers = [...document.querySelectorAll("[data-unified-flow]")];
  const panels = [...document.querySelectorAll("[data-unified-flow-panel]")];
  if (!triggers.length || !panels.length) return;

  const openPanel = (target) => {
    triggers.forEach((trigger) => {
      const group = trigger.dataset.unifiedGroup ? trigger.dataset.unifiedGroup.split(",") : [];
      const isActive = trigger.dataset.unifiedFlow === target || group.includes(target);
      trigger.classList.toggle("active", isActive);
      trigger.classList.toggle("spotlight", isActive && trigger.classList.contains("flow-node"));
      trigger.setAttribute("aria-expanded", String(isActive));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.unifiedFlowPanel !== target;
    });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openPanel(trigger.dataset.unifiedFlow);
    });
  });
}

function getGuideStory(section, index) {
  return {
    ...(guideStoryDetails[section.id] || {}),
    color: guideStoryPalette[index % guideStoryPalette.length],
  };
}

function renderGuideJourneyStep(section, index) {
  const story = getGuideStory(section, index);
  return `
    <article class="guide-journey-step" style="--guide-color:${story.color}; --guide-order:${index}">
      <div class="guide-step-marker" aria-hidden="true">
        <span>${String(index + 1).padStart(2, "0")}</span>
        ${icon(story.iconName || "spark")}
      </div>
      <div class="guide-step-body">
        <div class="guide-step-kicker">
          <span>${escapeHtml(section.eyebrow)}</span>
          <strong>${renderExplainedText(story.outcome || "Salida verificable para la etapa siguiente.")}</strong>
        </div>
        <h2>${renderExplainedText(section.title)}</h2>
        <p class="guide-scene">${renderExplainedText(story.scene || section.summary)}</p>
        <p>${renderExplainedText(section.summary)}</p>
        <div class="guide-automation-note">
          <span>Clave de automatización</span>
          <p>${renderExplainedText(story.automation || section.summary)}</p>
        </div>
        <div class="guide-step-columns">
          <div>
            <h3>Cómo avanza la historia</h3>
            <ul>${section.practices.map((item) => `<li>${renderExplainedText(item)}</li>`).join("")}</ul>
          </div>
          <div>
            <h3>Qué queda como evidencia</h3>
            <ul>${section.deliverables.map((item) => `<li>${renderExplainedText(item)}</li>`).join("")}</ul>
          </div>
        </div>
        ${renderGuideStepGlossary(section)}
        <p class="guide-risk">
          <strong>Si se saltea:</strong> ${renderExplainedText(section.risk)}
        </p>
      </div>
    </article>
  `;
}

function renderToolingPage() {
  const totalItems = toolingGroups.reduce((total, group) => total + group.items.length, 0);
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">Documentación técnica</span>
        <h1>Herramientas por decisión.</h1>
        <p class="lede">El catálogo agrupa librerías, agentes y MCPs como capacidades de operación: almacenar, ejecutar, observar, colaborar, extender y proteger automatizaciones.</p>
      </header>

      ${renderExecutiveBrief(pageNarratives.tooling)}

      <section class="shortcut-hero page-inner">
        <div>
          <span class="flow-chip">inventario del repo</span>
          <h2>El inventario sirve para decidir, no para instalar todo.</h2>
          <p>${toolingGroups.length} familias y ${totalItems} herramientas documentadas para evaluar cuando una automatización lo justifique.</p>
        </div>
        <a class="button" href="/${toolingDocs.source}" target="_blank" rel="noreferrer">
          ${icon("book")}
          Abrir documentación
        </a>
      </section>

      <section class="tooling-grid page-inner" aria-label="Catálogo de librerías y agentes">
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
        ${group.items
          .map((item) => `<span data-tooltip="${escapeHtml(getToolingTooltip(group, item))}">${escapeHtml(item)}</span>`)
          .join("")}
      </div>
    </article>
  `;
}

function getToolingTooltip(group, item) {
  const key = normalizeText(group.group);
  const explanations = [
    {
      match: "base",
      technical: "almacenar, consultar o vectorizar datos que alimentan modelos, APIs o procesos analíticos",
      plain: "guardar y consultar información confiable para que la automatización tenga una fuente clara",
    },
    {
      match: "infraestructura",
      technical: "ejecutar, escalar, aislar y desplegar workloads, servicios, pipelines o agentes",
      plain: "darle un lugar estable y seguro a la solución para que pueda correr en producción",
    },
    {
      match: "desarrollo",
      technical: "versionar código, probar cambios, depurar errores y documentar contratos técnicos",
      plain: "ordenar el trabajo del equipo y revisar cambios antes de publicarlos",
    },
    {
      match: "busqueda",
      technical: "buscar, navegar, extraer o validar información web de forma automatizada",
      plain: "traer información externa cuando el proceso necesita consultar fuentes fuera del modelo",
    },
    {
      match: "monitorizacion",
      technical: "registrar eventos, medir salud, alertar fallas y analizar comportamiento productivo",
      plain: "saber rápido si algo falló y quién debe actuar",
    },
    {
      match: "productividad",
      technical: "gestionar requisitos, backlog, documentación, coordinación y trazabilidad de decisiones",
      plain: "mantener al equipo alineado sobre qué se pidió, qué se decidió y qué falta hacer",
    },
    {
      match: "ia",
      technical: "consumir modelos, APIs o capacidades externas para análisis, generación o asistencia inteligente",
      plain: "sumar inteligencia al proceso cuando aporta velocidad, lectura o recomendación",
    },
    {
      match: "agentes",
      technical: "usar asistentes e IDEs con contexto del repositorio para crear, refactorizar o verificar artefactos",
      plain: "ayudar al equipo a trabajar más rápido sin perder revisión humana",
    },
    {
      match: "sandboxing",
      technical: "ejecutar código o agentes en entornos aislados para reducir riesgo operativo",
      plain: "probar automatizaciones sin exponer sistemas productivos",
    },
    {
      match: "frameworks",
      technical: "construir servicios, interfaces, modelos de ML, procesamiento de datos o integraciones",
      plain: "resolver partes específicas de una solución cuando Power BI o Fabric no alcanzan solos",
    },
  ];
  const explanation = explanations.find((entry) => key.includes(entry.match)) || explanations[0];
  return `${item}. Técnico: permite ${explanation.technical}. En simple: sirve para ${explanation.plain}.`;
}

function getFilteredTerms() {
  const query = normalizeText(dictionaryState.query.trim());
  return dictionaryTerms.filter((term) => {
    const matchesCategory = dictionaryState.category === "Todas" || term.category === dictionaryState.category;
    if (!matchesCategory) return false;
    if (!query) return true;

    const haystack = normalizeText([term.term, term.category, term.definition, term.whyItMatters, term.example, term.risk].join(" "));
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
        <h2>No hay términos para esa búsqueda</h2>
        <p>Proba con otra palabra, limpia el filtro o revisa una categoría más amplia.</p>
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
              <dt>Por qué importa</dt>
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
  renderGuidePage();
}

function renderProjectPage() {
  appRoot.innerHTML = `
    <section class="page tool-page">
      <header class="page-heading page-inner">
        <span class="eyebrow">PRD + Spec + PBIP</span>
        <h1>Contrato operativo Power BI.</h1>
        <p class="lede">La construcción recién debe avanzar cuando el proceso, las reglas, la evidencia técnica, el versionado y la operación están conectados en una misma respuesta.</p>
      </header>

      ${renderExecutiveBrief(pageNarratives.project)}

      <section class="project-studio page-inner">
        <div class="project-copy">
          <span class="flow-chip">filosofía de trabajo</span>
          <h2>La documentación vale cuando alinea la decisión, no cuando acumula archivos.</h2>
          <p>En proyectos reales, el problema rara vez es hacer un gráfico más; el problema es no tener claro qué tarea manual se quiere eliminar, qué regla debe aplicar, qué dato sostiene la acción y cómo se prueba que el proceso automatizado funciona.</p>
        </div>

        <div class="code-window" aria-label="Estructura sugerida de proyecto Power BI">
          <div class="window-dots"><span></span><span></span><span></span></div>
          <pre><code>proyecto_power_bi/
├─ PRD.md
├─ SPEC.md
├─ README.md
├─ CLAUDE.md
├─ documentación/
│  ├─ contexto-negocio.md
│  ├─ arquitectura-datos.md
│  ├─ mapa-modelo.md
│  ├─ seguridad-gobierno.md
│  ├─ performance.md
│  └─ diseño-report.md
├─ skills/
│  ├─ dax.md
│  ├─ power-query.md
│  ├─ tmdl.md
│  └─ documentación.md
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
            <span>PRD define el proceso. Spec define la automatización. PBIP/TMDL vuelve versionable el modelo.</span>
          </div>
        </div>
      </section>

      <section class="project-method page-inner" aria-labelledby="projectMethodTitle">
        <div class="project-method-head">
          <span class="flow-chip">método de trabajo</span>
          <h2 id="projectMethodTitle">Power BI construye la solución y Git conserva la responsabilidad.</h2>
          <p>Power BI materializa el modelo y la experiencia; Visual Studio Code ordena el proyecto; Git controla los cambios; y la Spec explica por qué cada decisión técnica existe.</p>
        </div>
        <div class="project-step-list">
          ${projectBuildSteps.map(renderProjectBuildStep).join("")}
        </div>
      </section>

      <section class="project-tools page-inner" aria-labelledby="projectToolsTitle">
        <div class="project-method-head">
          <span class="flow-chip">herramientas necesarias</span>
          <h2 id="projectToolsTitle">Cada herramienta entra cuando agrega trazabilidad, calidad o control.</h2>
          <p>No todas las herramientas se usan al mismo tiempo; se incorporan cuando el proyecto necesita revisión, performance, seguridad, publicación controlada u operación sostenida.</p>
        </div>
        <div class="project-tool-grid">
          ${projectToolStack.map(renderProjectTool).join("")}
        </div>
      </section>

      <section class="quality-grid page-inner" aria-label="Buenas prácticas Power BI avanzado">
        ${renderQualityCard("Proceso aprobado", "El equipo sabe qué tarea se automatiza, quién la usa, qué disparador la inicia y qué métrica prueba la mejora.", ["Disparadores", "SLA y responsables", "Criterios de aceptación"])}
        ${renderQualityCard("Spec ejecutable", "La lógica del proceso se transforma en arquitectura, datos, modelo, reglas, seguridad, UX y pruebas.", ["Fuentes y granularidad", "Reglas técnicas", "Casos de prueba"])}
        ${renderQualityCard("Modelo como código", "PBIP y TMDL permiten revisar cambios, comparar versiones y trabajar con ramas como en software.", ["Git y PRs", "Diffs legibles", "Checklist de release"])}
        ${renderQualityCard("Operación cuidada", "Producción implica monitorear refresh, gateways, capacidad, permisos, uso real y backlog de mejoras.", ["Capacity metrics", "Incremental refresh", "Runbook operativo"])}
      </section>

      <section class="pbip-note page-inner">
        <div>
          <span class="eyebrow">modo proyecto</span>
          <h2>PBIP convierte el BI en un activo revisable.</h2>
          <p>Power BI Project permite guardar el reporte y el modelo semántico como carpetas con archivos de texto; en ese escenario, Visual Studio Code, Git y la terminal dejan de ser herramientas ajenas al BI y pasan a cuidar la automatización con PRD y Spec.</p>
        </div>
        <ul>
          <li>Separar proceso operativo, reglas de negocio y decisiones técnicas.</li>
          <li>Revisar diferencias de medidas, relaciones y expresiones.</li>
          <li>Documentar reglas y excepciones junto al proyecto, no en un chat perdido.</li>
          <li>Usar IA con reglas y contexto, no como una caja negra.</li>
        </ul>
      </section>
    </section>
  `;
}

function renderProjectBuildStep(step, index) {
  return `
    <article class="project-step-card">
      <span>${index + 1}</span>
      <div>
        <h3>${escapeHtml(step.title)}</h3>
        <p><strong>En simple:</strong> ${escapeHtml(step.easy)}</p>
        <p><strong>Técnicamente:</strong> ${escapeHtml(step.technical)}</p>
        <div class="project-tool-tags">
          ${step.tools.map((tool) => `<small>${escapeHtml(tool)}</small>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderProjectTool(tool) {
  return `
    <article class="project-tool-card">
      <h3>${escapeHtml(tool.title)}</h3>
      <p>${escapeHtml(tool.text)}</p>
    </article>
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
        <h1>Menos fricción diaria.</h1>
        <p class="lede">El resumen prioriza las acciones que más afectan el trabajo diario: navegar, seleccionar, editar, revisar datos, escribir DAX y controlar el modelo.</p>
      </header>

      ${renderExecutiveBrief(pageNarratives.shortcuts)}

      <section class="shortcut-hero page-inner">
        <div>
          <span class="flow-chip">recurso local</span>
          <h2>El PDF queda como evidencia y la página como guía de adopción.</h2>
          <p>${shortcutsPdf.pages} slides por categoría. Guardado en el proyecto y disponible para descargar.</p>
        </div>
        <a class="button" href="/${shortcutsPdf.source}" download>
          ${icon("download")}
          Descargar PDF
        </a>
      </section>

      <section class="shortcut-grid page-inner" aria-label="Atajos de Power BI" tabindex="0">
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
      <div class="shortcut-list" tabindex="0" aria-label="Lista de atajos: ${escapeHtml(category.category)}">
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

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-datalito-form]");
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);
  const question = String(formData.get("question") || "");
  form.reset();
  runDatalitoQuestion(question);
});

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-datalito-open]");
  if (openButton) {
    event.preventDefault();
    openDatalitoPanel();
    return;
  }

  const closeButton = event.target.closest("[data-datalito-close]");
  if (closeButton) {
    event.preventDefault();
    closeDatalitoPanel();
    return;
  }

  const newButton = event.target.closest("[data-datalito-new]");
  if (newButton) {
    event.preventDefault();
    resetDatalitoConversation("Conversación nueva. El historial de mensajes es por sesión.");
    return;
  }

  const clearButton = event.target.closest("[data-datalito-clear]");
  if (clearButton) {
    event.preventDefault();
    resetDatalitoConversation("Conversación eliminada.");
    return;
  }

  const modeButton = event.target.closest("[data-datalito-mode]");
  if (modeButton) {
    event.preventDefault();
    datalitoState.mode = modeButton.dataset.datalitoMode || "brief";
    datalitoState.status = `Modo ${modeButton.textContent.trim()} activo.`;
    refreshDatalitoViews();
    return;
  }

  const promptButton = event.target.closest("[data-datalito-prompt]");
  if (promptButton) {
    event.preventDefault();
    if (!datalitoState.isOpen && getRoute() !== "/datalito") {
      datalitoState.isOpen = true;
    }
    runDatalitoQuestion(promptButton.dataset.datalitoPrompt || "");
    return;
  }

  const feedbackButton = event.target.closest("[data-datalito-feedback]");
  if (feedbackButton) {
    event.preventDefault();
    recordDatalitoFeedback(feedbackButton.dataset.messageId || "", feedbackButton.dataset.datalitoFeedback || "feedback");
    return;
  }

  const gapButton = event.target.closest("[data-datalito-gap]");
  if (gapButton) {
    event.preventDefault();
    recordDatalitoGap(gapButton.dataset.datalitoGap || "");
  }
});

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
renderDatalitoGlobalShell();
