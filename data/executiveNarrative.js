export const narrativeFrame = {
  actionLabel: "Siguiente decisión",
};

export const pageNarratives = {
  roadMethodology: {
    eyebrow: "criterio de trabajo",
    title: "El Road decide avance; la metodología decide intervención.",
    summary:
      "La sección unificada evita dos discusiones separadas: cuándo una iniciativa puede pasar de etapa y qué pérdida operativa justifica intervenir. A partir de ahí, el equipo puede priorizar con menos intuición y más método.",
    support: [
      {
        title: "El avance se gobierna",
        text: "Cada gate exige decisión, evidencia, owner, riesgo y entregable. En ese sentido, una iniciativa BI no pasa de etapa solo por urgencia.",
      },
      {
        title: "La mejora se explica",
        text: "OEE BI, DMAIC, VSM, FMEA, Kaizen y Kata ayudan a entender pérdida, causa, flujo, error potencial y rutina de aprendizaje. No son teoría aparte: ordenan conversaciones difíciles.",
      },
      {
        title: "La operación se sostiene",
        text: "Publicación, monitoreo, runbook, backlog, incidentes y cadencias convierten la entrega en un activo operable, no en una salida puntual.",
      },
    ],
    action: "Usar esta sección para relevar, priorizar, construir, publicar y mejorar productos BI/Fabric sin separar método de operación.",
  },
  method: {
    eyebrow: "método operativo",
    title: "Orden común, ejecución delegable.",
    summary:
      "Esta página traduce el método en decisiones de setup: ubicación de activos, naming, avance, responsables, backlog y frontera DEV/PROD. En la práctica, responde dónde vive cada cosa y quién la sostiene.",
    support: [
      {
        title: "Organiza el trabajo",
        text: "Teams, SharePoint, canales, carpetas y metadatos separan proyectos vivos, productos en vida, recursos, áreas y archivo. Por eso el equipo encuentra el contexto sin duplicar información.",
      },
      {
        title: "Reduce dependencia",
        text: "La estructura común, los README mínimos, las minutas curadas y el naming permiten que otro integrante mantenga un producto que no desarrolló. Esa es la prueba básica de que el método sirve.",
      },
      {
        title: "Mide con evidencia",
        text: "El backlog evita horas estimadas y esfuerzo subjetivo; prioriza lead time, cycle time, iteraciones, actividad, uso y áreas impactadas. Dicho simple: mide flujo real.",
      },
    ],
    action: "Aprobar la versión vigente, crear la base en Teams/SharePoint y ejecutar un piloto antes de escalar el método.",
  },
  project: {
    eyebrow: "contrato de construcción",
    title: "La pregunta y la respuesta técnica se separan antes de construir.",
    summary:
      "Un proyecto Power BI serio no empieza en un archivo; empieza cuando negocio, datos, BI e ingeniería acuerdan qué decisión se va a automatizar, cómo se va a probar y cómo se va a operar.",
    support: [
      {
        title: "El PRD fija la pregunta",
        text: "Define proceso, usuario, problema, métrica, alcance, exclusiones y criterios de aceptación con lenguaje de negocio.",
      },
      {
        title: "La Spec fija la respuesta",
        text: "Traduce esa pregunta en fuentes, modelo, reglas, seguridad, UX, pruebas, publicación y operación.",
      },
      {
        title: "Git fija el control",
        text: "PBIP y TMDL vuelven revisables los cambios del modelo, de la documentación y de las decisiones técnicas.",
      },
    ],
    action: "No iniciar construcción productiva sin una pregunta aprobada, una solución verificable y un criterio explícito de operación.",
  },
  dictionary: {
    eyebrow: "lenguaje compartido",
    title: "Una definición sirve cuando cambia una decisión.",
    summary:
      "El diccionario reduce ambigüedad cuando cada término trae definición operativa, ejemplo, impacto y riesgo de mala interpretación. Por eso no funciona como glosario escolar, sino como criterio de trabajo.",
    support: [
      {
        title: "Alinea áreas",
        text: "Sponsor, usuarios, BI, datos y operación usan el mismo significado para discutir alcance, reglas, métricas y controles.",
      },
      {
        title: "Acelera decisiones",
        text: "Cuando el lenguaje está acordado, las reuniones se concentran en resolver el proceso y no en reconciliar definiciones.",
      },
      {
        title: "Reduce retrabajo",
        text: "Cada ejemplo y cada riesgo funcionan como criterio de diseño, validación y adopción.",
      },
    ],
    action: "Usarlo como referencia de aceptación, documentación, capacitación e incorporación del equipo.",
  },
};

export const conceptDecantation = [
  {
    level: "Decisión gerencial",
    statement: "Automatizar decisiones operativas con evidencia confiable.",
    branches: [
      {
        title: "Valor operativo",
        text: "Define qué proceso mejora y qué trabajo manual deja de existir.",
      },
      {
        title: "Confiabilidad",
        text: "Demuestra que datos, reglas, seguridad y experiencia sostienen la decisión.",
      },
      {
        title: "Control",
        text: "Instala responsables, alertas, runbook, backlog y cadencia de mejora.",
      },
    ],
  },
  {
    level: "Método de trabajo",
    statement: "Medir pérdida, encontrar causa y diseñar una respuesta controlada.",
    branches: [
      {
        title: "Definir",
        text: "PRD, alcance, usuario, disparador, criterio de aceptación y frontera del problema.",
      },
      {
        title: "Medir y analizar",
        text: "OEE BI, calidad de datos, tiempos, adopción, FMEA y causa raíz.",
      },
      {
        title: "Mejorar y controlar",
        text: "VSM futuro, controles preventivos, release, monitoreo y aprendizaje operativo.",
      },
    ],
  },
  {
    level: "Ejecución BI",
    statement: "Convertir la respuesta en producto, gobierno y operación.",
    branches: [
      {
        title: "Construcción",
        text: "Modelo semántico, DAX, UX, PBIP, TMDL y pruebas.",
      },
      {
        title: "Publicación",
        text: "Ambientes, permisos, app, credenciales, refresh y comunicación de salida.",
      },
      {
        title: "Sostenimiento",
        text: "SLA, incidentes, uso real, optimización y mejora continua.",
      },
    ],
  },
];
