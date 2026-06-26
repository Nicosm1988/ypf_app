export const datalizationDefinition =
  "Datalizar no es simplemente automatizar. Es transformar un flujo, tablero, indicador, proceso o activo analítico para que dependa de una fuente original confiable, esté centralizado, trazado, automatizado, gobernado y documentado, con capacidad de auditoría y sostenimiento.";

export const frameworkNavigation = [
  {
    title: "Inicio",
    shortTitle: "Inicio",
    route: "/",
    iconName: "layers",
    text: "La visión ejecutiva del modelo y sus decisiones principales.",
  },
  {
    title: "Qué es Datalización",
    shortTitle: "Qué es",
    route: "/que-es-datalizacion",
    iconName: "book",
    text: "La definición común y las condiciones que separan automatizar de datalizar.",
  },
  {
    title: "Pilares de Datalización",
    shortTitle: "Pilares",
    route: "/pilares-datalizacion",
    iconName: "shield",
    text: "Cinco dimensiones obligatorias que completan el 100% del modelo.",
  },
  {
    title: "Intake y Aprobación",
    shortTitle: "Intake",
    route: "/intake-aprobacion",
    iconName: "filter",
    text: "El gate que decide si un trabajo entra al proceso de datalización.",
  },
  {
    title: "Índice de Datalización",
    shortTitle: "Índice",
    route: "/indice-datalizacion",
    iconName: "gauge",
    text: "El score ponderado que mide madurez por activo.",
  },
  {
    title: "Ponderación y Esfuerzo",
    shortTitle: "Ponderación",
    route: "/ponderacion-esfuerzo",
    iconName: "route",
    text: "El factor que evita medir todos los activos como si pesaran igual.",
  },
  {
    title: "Metadata y Documentación",
    shortTitle: "Metadata",
    route: "/metadata-documentacion",
    iconName: "clipboard",
    text: "La ficha mínima para evaluar, auditar y sostener cada activo.",
  },
  {
    title: "Alcance BMC",
    shortTitle: "Alcance BMC",
    route: "/alcance-bmc",
    iconName: "folder",
    text: "El universo inicial de aplicación y su expansión futura.",
  },
  {
    title: "Metodología / Flujo",
    shortTitle: "Flujo",
    route: "/metodologia-flujo",
    iconName: "arrowRight",
    text: "El proceso de siete etapas desde intake hasta mejora continua.",
  },
  {
    title: "Diccionario / Glosario",
    shortTitle: "Glosario",
    route: "/diccionario",
    iconName: "book",
    text: "Lenguaje común para negocio, datos, BI, gobierno y operación.",
  },
  {
    title: "Recursos / Templates",
    shortTitle: "Recursos",
    route: "/recursos-templates",
    iconName: "terminal",
    text: "Modelos, guías, librerías, atajos y recursos operativos.",
  },
  {
    title: "Roadmap futuro",
    shortTitle: "Roadmap",
    route: "/roadmap-futuro",
    iconName: "spark",
    text: "La evolución incremental del método hacia una práctica escalable.",
  },
];

export const datalizationPillars = [
  {
    id: "centralizacion",
    title: "Centralización",
    weight: 20,
    color: "#35c9bd",
    iconName: "layers",
    status: "Base obligatoria",
    score: 78,
    definition:
      "La información deja de depender de archivos sueltos, fuentes dispersas o repositorios personales y se consolida en estructuras comunes y sostenibles.",
    why: "Sin una base central, el activo puede funcionar, pero no puede escalar ni sostenerse con control.",
    implies: "Trabajar sobre fuentes comunes, accesos ordenados y una arquitectura que no dependa de una persona.",
    subcriteria: [
      "Existe una fuente central o repositorio controlado.",
      "Se eliminaron dependencias de archivos aislados.",
      "La información no depende de una persona.",
      "El acceso está organizado.",
      "El activo vive en una arquitectura común.",
    ],
    evidence: ["Repositorio controlado", "Mapa de accesos", "Fuente original identificada"],
    compliantExample: "El KPI consume una tabla gobernada o una fuente operativa identificada, con acceso administrado.",
    nonCompliantExample: "El tablero depende de un Excel personal enviado por correo o guardado fuera del repositorio común.",
    questions: ["¿Dónde vive la fuente original?", "¿Quién administra el acceso?", "¿Qué archivo manual dejó de ser necesario?"],
    indicators: ["% de fuentes centralizadas", "dependencias manuales eliminadas", "activos con repositorio controlado"],
  },
  {
    id: "trazabilidad-linaje",
    title: "Trazabilidad y Linaje",
    weight: 20,
    color: "#3aa0ff",
    iconName: "gitBranch",
    status: "Auditabilidad",
    score: 64,
    definition: "Puede explicarse el recorrido completo del dato desde su origen hasta su consumo final.",
    why: "La trazabilidad permite defender el número, encontrar fallas y explicar cambios sin depender de memoria informal.",
    implies: "Documentar origen, transformación, modelo, KPI, visualización y consumo.",
    subcriteria: [
      "Se conoce la fuente original.",
      "Se documentaron transformaciones.",
      "Existe linaje origen, transformación, modelo, tablero o KPI.",
      "Puede auditarse el recorrido.",
      "Se entiende qué dato alimenta qué salida.",
    ],
    evidence: ["Diagrama de linaje", "Reglas de transformación", "Relación fuente-KPI"],
    compliantExample: "Un indicador muestra de qué tabla nace, qué reglas lo transforman y qué reporte lo consume.",
    nonCompliantExample: "El valor se actualiza, pero nadie puede explicar qué transformación lo modificó.",
    questions: ["¿Qué transforma el dato?", "¿Qué KPI consume cada campo?", "¿El recorrido puede auditarse?"],
    indicators: ["% de KPIs con linaje", "transformaciones documentadas", "incidentes con causa trazada"],
  },
  {
    id: "automatizacion",
    title: "Automatización",
    weight: 20,
    color: "#ffe650",
    iconName: "spark",
    status: "Repetibilidad",
    score: 72,
    definition: "Se reducen tareas manuales, se sistematizan cargas y actualizaciones, y el flujo se vuelve repetible y sostenible.",
    why: "La automatización reduce fricción, pero solo suma madurez cuando se integra a reglas, controles y responsables.",
    implies: "Refresh controlado, cargas repetibles, menor intervención diaria y tratamiento estable.",
    subcriteria: [
      "Actualización automática o semiautomática.",
      "Eliminación de cargas manuales recurrentes.",
      "Refresh controlado.",
      "Tratamiento repetible.",
      "Menor dependencia de intervención humana cotidiana.",
    ],
    evidence: ["Plan de refresh", "Registro de fallas", "Runbook operativo"],
    compliantExample: "El flujo actualiza con agenda conocida, alerta fallas y deja evidencia operativa.",
    nonCompliantExample: "La actualización requiere copiar, pegar, renombrar y avisar manualmente cada semana.",
    questions: ["¿Qué tareas manuales quedan?", "¿Cómo se detecta un refresh fallido?", "¿El flujo puede repetirse sin el autor original?"],
    indicators: ["horas manuales eliminadas", "refresh exitosos", "intervenciones manuales por ciclo"],
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    weight: 20,
    color: "#30d878",
    iconName: "shield",
    status: "Ownership",
    score: 58,
    definition: "Existen responsables, reglas, ownership, criterios de uso y mecanismos de control.",
    why: "Un dato sin dueño puede ser útil por un tiempo, pero no puede sostener decisiones críticas.",
    implies: "Identificar owners funcionales y técnicos, reglas de acceso, clasificación, uso y mantenimiento.",
    subcriteria: [
      "Owner del dato identificado.",
      "Owner del producto identificado.",
      "Reglas de acceso y uso.",
      "Responsables funcionales y técnicos.",
      "Clasificación del activo.",
      "Reglas claras de mantenimiento y control.",
    ],
    evidence: ["RACI liviano", "Matriz de acceso", "Criterios de mantenimiento"],
    compliantExample: "El activo tiene owner funcional, owner técnico, reglas de acceso y criterios de cambio.",
    nonCompliantExample: "El tablero se publica sin responsable claro y cualquier cambio depende de encontrar al desarrollador.",
    questions: ["¿Quién aprueba cambios?", "¿Quién responde por el dato?", "¿Qué regla define quién puede consumirlo?"],
    indicators: ["activos con owner", "accesos revisados", "cambios aprobados con evidencia"],
  },
  {
    id: "calidad-auditoria",
    title: "Calidad y Auditoría",
    weight: 20,
    color: "#9d7cff",
    iconName: "clipboard",
    status: "Control",
    score: 66,
    definition: "El activo analítico tiene documentación, validaciones, versionado, historial y capacidad de revisión.",
    why: "La calidad protege la confianza; la auditoría permite demostrar que el control existe y se sostiene.",
    implies: "Definir reglas de validación, documentación mínima, versionado, historial y evidencias de revisión.",
    subcriteria: [
      "Documentación mínima obligatoria.",
      "Criterios de validación.",
      "Reglas de calidad.",
      "Versionado.",
      "Histórico de cambios.",
      "Posibilidad de auditoría.",
      "Consistencia y reproducibilidad.",
    ],
    evidence: ["Checklist de calidad", "Historial de versiones", "Evidencia de validación"],
    compliantExample: "Cada release tiene versión, pruebas, observaciones y evidencia de aprobación.",
    nonCompliantExample: "El tablero cambió, pero no existe historial ni criterio para explicar qué se validó.",
    questions: ["¿Qué validaciones son obligatorias?", "¿Dónde queda la evidencia?", "¿Qué versión está publicada?"],
    indicators: ["activos con checklist", "releases versionados", "hallazgos auditables cerrados"],
  },
];

export const intakeStates = [
  { label: "Aprobado para datalizar", tone: "green", text: "Cumple alcance, sponsor, activo, fuente y valor." },
  { label: "Aprobado con observaciones", tone: "blue", text: "Puede iniciar, pero requiere resolver brechas menores." },
  { label: "Pendiente de información", tone: "yellow", text: "Falta evidencia mínima para decidir el ingreso." },
  { label: "No apto por ahora", tone: "orange", text: "No tiene fuente, dueño, valor o activo suficientemente definido." },
  { label: "Fuera de alcance inicial", tone: "violet", text: "No pertenece al universo BMC de esta etapa." },
];

export const eligibilityCriteria = [
  "Pertenece al universo BMC.",
  "Tiene objetivo de negocio claro.",
  "Existe un activo concreto: tablero, proceso, KPI, fuente, modelo o flujo.",
  "Tiene fuente identificable.",
  "Puede trabajar sobre fuente original o arquitectura objetivo clara.",
  "Tiene sponsor, dueño o referente.",
  "Aporta valor o impacto.",
  "Puede documentarse.",
];

export const intakeWorkflow = [
  { step: "Solicitud", text: "Se registra la necesidad y el activo candidato.", state: "Entrada" },
  { step: "Elegibilidad", text: "Se valida alcance BMC, valor, fuente, sponsor y evidencia.", state: "Gate" },
  { step: "Decisión", text: "Se asigna estado y condiciones de ingreso.", state: "Aprobación" },
  { step: "Registro", text: "Si entra, se crea metadata mínima y próximo paso.", state: "Backlog" },
];

export const datalizationIndex = {
  formula: "Índice de Datalización = Σ (peso del pilar x grado de cumplimiento del pilar)",
  baseWeights: "Cinco pilares con peso base de 20% cada uno.",
  levels: [
    { range: "0-20", label: "Inicial", tone: "muted" },
    { range: "21-40", label: "Bajo", tone: "orange" },
    { range: "41-60", label: "En desarrollo", tone: "yellow" },
    { range: "61-80", label: "Avanzado", tone: "blue" },
    { range: "81-100", label: "Datalizado", tone: "green" },
  ],
};

export const scoreExample = {
  asset: "Tablero BMC de seguimiento operativo",
  finalScore: 68,
  reading: "Avanzado, con brechas de gobernanza y auditoría pendientes.",
};

export const weightingVariables = [
  {
    id: "complejidad-tecnica",
    title: "Complejidad técnica",
    weight: 30,
    score: 4,
    text: "Cantidad de fuentes, transformaciones, modelo, seguridad, refresh e integración.",
  },
  {
    id: "criticidad-negocio",
    title: "Criticidad de negocio",
    weight: 30,
    score: 5,
    text: "Impacto de la decisión, exposición operativa y relevancia gerencial.",
  },
  {
    id: "alcance-volumen",
    title: "Alcance / volumen",
    weight: 20,
    score: 4,
    text: "Cantidad de KPIs, usuarios, procesos, dominios o frecuencia de consumo.",
  },
  {
    id: "dependencia-esfuerzo",
    title: "Dependencia / esfuerzo",
    weight: 20,
    score: 3,
    text: "Dependencias externas, disponibilidad de fuentes, permisos y coordinación requerida.",
  },
];

export const weightingModel = {
  formula:
    "Factor de Ponderación = 0,30 x Complejidad técnica + 0,30 x Criticidad de negocio + 0,20 x Alcance / volumen + 0,20 x Dependencia / esfuerzo",
  aggregateFormula:
    "Avance agregado ponderado = Σ (Índice del activo x Factor de Ponderación del activo) / Σ (Factores de Ponderación)",
  normalized: "La escala se puntúa de 1 a 5 y luego se normaliza para lectura agregada.",
};

export const weightingComparison = [
  {
    title: "Tablero con 75 KPIs",
    datalizationScore: 62,
    effortFactor: 4.6,
    text: "Alta complejidad, alto volumen y mayor exposición de negocio.",
  },
  {
    title: "Dependencia puntual de Excel",
    datalizationScore: 82,
    effortFactor: 1.8,
    text: "Menor alcance relativo, aunque pueda cerrarse con alta madurez.",
  },
];

export const metadataGroups = [
  {
    title: "Identificación",
    fields: ["ID", "Nombre del activo", "Tipo de activo", "Área / dominio", "¿Pertenece a BMC?"],
  },
  {
    title: "Ownership",
    fields: ["Owner funcional", "Owner técnico", "Estado de elegibilidad", "Próximo paso"],
  },
  {
    title: "Fuentes y linaje",
    fields: ["Fuente original", "Fuente actual", "Estado de centralización", "Estado de trazabilidad"],
  },
  {
    title: "Madurez",
    fields: [
      "Estado de automatización",
      "Estado de gobernanza",
      "Estado de calidad/auditoría",
      "Índice de datalización",
      "Factor de ponderación",
    ],
  },
  {
    title: "Evidencia",
    fields: ["Fecha de revisión", "Evidencia documental", "Observaciones"],
  },
];

export const metadataSamples = [
  {
    id: "BMC-ACT-001",
    name: "Tablero de margen operativo",
    type: "Tablero",
    bmc: "Sí",
    owner: "Owner funcional BMC",
    source: "Fuente operativa identificada",
    score: 68,
    factor: 4.6,
    state: "Aprobado con observaciones",
    next: "Completar linaje y evidencia de calidad.",
  },
  {
    id: "BMC-KPI-014",
    name: "KPI de desvío presupuestario",
    type: "KPI",
    bmc: "Sí",
    owner: "Referente financiero",
    source: "Modelo centralizado",
    score: 74,
    factor: 3.2,
    state: "Aprobado para datalizar",
    next: "Versionar regla de cálculo.",
  },
  {
    id: "BMC-FLU-006",
    name: "Carga manual recurrente",
    type: "Flujo",
    bmc: "Sí",
    owner: "Referente operativo",
    source: "Excel controlado transitorio",
    score: 36,
    factor: 2.4,
    state: "Pendiente de información",
    next: "Identificar fuente original y sponsor.",
  },
];

export const bmcScopeStages = [
  {
    moment: "Hoy",
    title: "Universo BMC / VMC",
    text: "La medición aplica al conjunto inicial de activos del Value Management Center.",
    status: "En foco",
  },
  {
    moment: "Próximo",
    title: "Método replicable",
    text: "El modelo se estabiliza con metadata, scoring, responsables y revisión periódica.",
    status: "En diseño",
  },
  {
    moment: "Futuro",
    title: "Escalabilidad a otros ámbitos",
    text: "La práctica puede extenderse cuando el estándar esté probado y gobernado.",
    status: "Expansión",
  },
];

export const frameworkFlow = [
  { stage: "0", title: "Intake y aprobación", text: "Decide si el trabajo entra al proceso.", badge: "Gate" },
  { stage: "1", title: "Registro y metadata", text: "Crea la ficha mínima del activo.", badge: "Evidencia" },
  { stage: "2", title: "Evaluación por pilares", text: "Mide cumplimiento de las cinco dimensiones.", badge: "Score" },
  { stage: "3", title: "Índice de datalización", text: "Calcula madurez ponderada por pilar.", badge: "Madurez" },
  { stage: "4", title: "Ponderación", text: "Asigna complejidad, criticidad, alcance y esfuerzo.", badge: "Peso relativo" },
  { stage: "5", title: "Lectura agregada BMC", text: "Ordena avance real del universo inicial.", badge: "Portfolio" },
  { stage: "6", title: "Seguimiento y mejora", text: "Revisa brechas, evidencias, releases y control.", badge: "Control" },
];

export const resourceTemplateGroups = [
  { title: "PRD y Spec", route: "/guia-power-bi", text: "Contrato de problema, solución, reglas, datos y evidencia." },
  { title: "Proyecto Power BI", route: "/proyecto-power-bi", text: "PBIP, TMDL, Git, documentación y calidad técnica." },
  { title: "Método operativo", route: "/metodo-datalizacion", text: "Teams, SharePoint, naming, backlog, VMC y roles." },
  { title: "Librerías y MCPs", route: "/librerias", text: "Herramientas evaluables para construir, probar y operar." },
  { title: "Atajos Power BI", route: "/atajos", text: "Acciones frecuentes para reducir fricción diaria." },
  { title: "Datalito", route: "/datalito", text: "Asistente de conocimiento, citas y brechas." },
];

export const futureRoadmap = [
  {
    horizon: "0-30 días",
    title: "Modelo base",
    text: "Definir pesos, metadata mínima, intake y primera lectura del universo BMC.",
  },
  {
    horizon: "31-60 días",
    title: "Piloto gobernado",
    text: "Aplicar scoring a activos priorizados, ajustar criterios y registrar evidencias.",
  },
  {
    horizon: "61-90 días",
    title: "Tablero de madurez",
    text: "Consolidar avance ponderado, brechas, owners y próximos pasos.",
  },
  {
    horizon: "Después",
    title: "Escala controlada",
    text: "Extender el estándar cuando el método esté estable, medido y documentado.",
  },
];

export const uiComponentModel = [
  "Pillar cards con expand/collapse",
  "Score ring central",
  "Barras por pilar",
  "Embudo de intake",
  "Badges de estado",
  "Tabla de metadata",
  "Roadmap horizontal",
  "Chips de alcance",
  "Deep links por módulo",
  "Hover glow sobrio",
];
