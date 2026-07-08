export const narrativeFrame = {
  label: "Síntesis",
  actionLabel: "Siguiente decisión",
};

export const pageNarratives = {
  home: {
    eyebrow: "síntesis ejecutiva",
    title: "Capacidad organizacional, no inventario de tableros.",
    summary:
      "La idea es simple: Datalización Hub ordena el paso entre una necesidad de negocio y un producto BI que pueda explicarse, auditarse y sostenerse. Por eso, la plataforma habla tanto de método como de operación.",
    support: [
      {
        title: "Orden común",
        text: "Cada iniciativa necesita el mismo hilo conductor: problema, alcance, dato, regla, modelo, experiencia, seguridad y operación. Sin esa secuencia, el conocimiento queda demasiado atado a cada persona.",
      },
      {
        title: "Gobierno técnico",
        text: "La confianza se sostiene con documentación, linaje, RLS, calidad, performance, permisos y publicación controlada. En la práctica, eso permite discutir hechos y no versiones sueltas.",
      },
      {
        title: "Escala operativa",
        text: "El área gana continuidad cuando los productos BI se construyen con criterios reutilizables y responsables explícitos. Dicho de otro modo, otro integrante puede retomar el trabajo sin reconstruir toda la historia.",
      },
    ],
    action:
      "Usar la plataforma como referencia viva para iniciar, construir, revisar, publicar y sostener productos BI con criterio corporativo.",
  },
  guide: {
    eyebrow: "decisión de avance",
    title: "Un gate se aprueba cuando la evidencia alcanza para decidir.",
    summary:
      "El roadmap existe para evitar saltos de fe. Cada gate resume una decisión, pide evidencia suficiente y deja preparada la condición de la etapa siguiente.",
    support: [
      {
        title: "Se acuerda el proceso",
        text: "PRD y Spec separan la necesidad de negocio de la solución técnica; de ese modo, cada área valida lo que efectivamente le corresponde.",
      },
      {
        title: "Se prueba la confiabilidad",
        text: "Fuentes, modelo, DAX, seguridad y experiencia de usuario se verifican como una misma cadena. Así, una falla técnica no aparece tarde como problema funcional.",
      },
      {
        title: "Se opera la mejora",
        text: "Publicación, monitoreo, incidentes y backlog aseguran que el beneficio sobreviva a la salida a producción. En consecuencia, la mejora no vuelve al circuito manual.",
      },
    ],
    action: "Avanzar de gate únicamente cuando la evidencia anterior permita decidir sin improvisación.",
  },
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
    action: "Aprobar la versión 0.1, crear la base en Teams/SharePoint y ejecutar un piloto antes de escalar el método.",
  },
  methodology: {
    eyebrow: "criterio de mejora",
    title: "Pérdida, causa y control.",
    summary:
      "La metodología organiza el trabajo en una secuencia simple: medir dónde se pierde efectividad, entender por qué ocurre y sostener una mejora verificable. Así se evita saltar del síntoma al tablero.",
    support: [
      {
        title: "La pérdida se mide",
        text: "Disponibilidad, eficiencia y calidad muestran, con números, dónde el proceso analítico deja de cumplir su función.",
      },
      {
        title: "La causa se explica",
        text: "El análisis ordena fallas de datos, reglas, modelo, seguridad, experiencia y operación para no confundir síntomas con causas.",
      },
      {
        title: "El control se instala",
        text: "Las mejoras se vuelven rutina mediante tableros de salud, runbooks, cadencias, responsables y aprendizaje documentado.",
      },
    ],
    action: "Elegir cada herramienta por la pérdida concreta que permite reducir y por la decisión que habilita.",
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
  tooling: {
    eyebrow: "criterio técnico",
    title: "El catálogo ordena adopción técnica, no preferencias de instalación.",
    summary:
      "El catálogo se entiende como un mapa de capacidades: no se trata de instalar más tecnología, sino de elegir lo que reduce riesgo, acelera flujo o mejora la operación.",
    support: [
      {
        title: "Responde a una necesidad",
        text: "Cada herramienta se evalúa desde el proceso: almacenar, ejecutar, observar, colaborar, extender, aislar o gobernar.",
      },
      {
        title: "Exige control",
        text: "MCPs, agentes y APIs requieren permisos claros, límites de uso y revisión humana cuando corresponda. En la práctica, no toda capacidad útil debe instalarse de inmediato.",
      },
      {
        title: "Escala con evidencia",
        text: "Primero se prueba valor y riesgo; recién después se amplía la adopción dentro del equipo. Ese orden evita incorporar herramientas por entusiasmo.",
      },
    ],
    action: "Elegir herramientas por caso de uso, criticidad, seguridad, costo de operación y capacidad real del equipo.",
  },
  shortcuts: {
    eyebrow: "productividad aplicada",
    title: "La productividad mejora cuando el hábito cambia.",
    summary:
      "Los atajos importan cuando eliminan microinterrupciones repetidas: navegar, editar, revisar visuales, escribir DAX y controlar el modelo con mayor precisión. En el día a día, esa fricción es la que más se acumula.",
    support: [
      {
        title: "Se gana foco",
        text: "La navegación por teclado reduce cambios de contexto y conserva concentración en tareas de análisis.",
      },
      {
        title: "Se gana precisión",
        text: "La edición de visuales, tablas y matrices se vuelve más estable cuando disminuye la dependencia del mouse.",
      },
      {
        title: "Se gana velocidad",
        text: "DAX y vista de modelo aceleran tareas técnicas que suelen requerir atención sostenida.",
      },
    ],
    action: "Adoptar pocos atajos por semana y revisar qué tareas repetidas empiezan a desaparecer.",
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
