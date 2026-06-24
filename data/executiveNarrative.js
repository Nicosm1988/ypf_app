export const narrativeFrame = {
  label: "Síntesis",
  actionLabel: "Siguiente decisión",
};

export const pageNarratives = {
  home: {
    eyebrow: "síntesis ejecutiva",
    title: "Sistema de decisiones datalizadas.",
    summary:
      "La propuesta central es directa: el equipo necesita transformar procesos manuales en decisiones trazables, con datos confiables, reglas explícitas y control operativo permanente.",
    support: [
      {
        title: "Primero, proceso",
        text: "Porque el valor no nace del reporte, sino de la decisión operativa que deja de depender de planillas, correos o criterios dispersos.",
      },
      {
        title: "Luego, evidencia",
        text: "Porque la confianza se sostiene con fuentes gobernadas, reglas documentadas, calidad medible, seguridad probada y linaje claro.",
      },
      {
        title: "Finalmente, control",
        text: "Porque una mejora solo se captura cuando hay responsables, acciones, SLA, incidentes gestionados y aprendizaje continuo.",
      },
    ],
    action: "Recorrer la web como una secuencia de trabajo: entender el proceso, medir la pérdida, construir la solución, gobernarla y sostenerla.",
  },
  guide: {
    eyebrow: "decisión de avance",
    title: "Evidencia de control BI.",
    summary:
      "El roadmap existe para evitar saltos de fe: cada gate resume una decisión, exige evidencia suficiente y deja preparado el control de la etapa siguiente.",
    support: [
      {
        title: "Se acuerda el proceso",
        text: "PRD y Spec separan la necesidad de negocio de la solución técnica; de ese modo, cada área valida lo que efectivamente le corresponde.",
      },
      {
        title: "Se prueba la confiabilidad",
        text: "Fuentes, modelo, DAX, seguridad y experiencia de usuario se verifican como una misma cadena, no como frentes aislados.",
      },
      {
        title: "Se opera la mejora",
        text: "Publicación, monitoreo, incidentes y backlog aseguran que el beneficio sobreviva al go-live y no vuelva al circuito manual.",
      },
    ],
    action: "Avanzar de gate únicamente cuando la evidencia anterior permita decidir sin improvisación.",
  },
  methodology: {
    eyebrow: "criterio de mejora",
    title: "Pérdida, causa y control.",
    summary:
      "La metodología organiza el trabajo en una secuencia simple: medir dónde se pierde efectividad, entender por qué ocurre y sostener una mejora verificable.",
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
    title: "Contrato operativo Power BI.",
    summary:
      "Un proyecto Power BI serio no empieza en un archivo; empieza cuando negocio, datos, BI e ingeniería acuerdan qué decisión se va a automatizar y cómo se va a controlar.",
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
    title: "Lenguaje común, menor riesgo.",
    summary:
      "El diccionario reduce ambigüedad porque convierte cada concepto en una definición operativa, con ejemplo, impacto y riesgo de mala interpretación.",
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
    action: "Usarlo como referencia de aceptación, documentación, capacitación y onboarding del equipo.",
  },
  tooling: {
    eyebrow: "criterio técnico",
    title: "Herramientas por decisión.",
    summary:
      "El catálogo se entiende como un mapa de capacidades: no se trata de instalar más tecnología, sino de elegir lo que reduce riesgo, acelera flujo o fortalece gobierno.",
    support: [
      {
        title: "Responde a una necesidad",
        text: "Cada herramienta se evalúa desde el proceso: almacenar, ejecutar, observar, colaborar, extender, aislar o gobernar.",
      },
      {
        title: "Exige control",
        text: "MCPs, agentes y APIs requieren permisos claros, trazabilidad, límites de uso y revisión humana cuando corresponda.",
      },
      {
        title: "Escala con evidencia",
        text: "Primero se prueba valor y riesgo; recién después se amplía la adopción dentro del equipo.",
      },
    ],
    action: "Elegir herramientas por caso de uso, criticidad, seguridad, costo de operación y capacidad real del equipo.",
  },
  shortcuts: {
    eyebrow: "productividad aplicada",
    title: "Menos fricción diaria.",
    summary:
      "Los atajos importan cuando eliminan microinterrupciones repetidas: navegar, editar, revisar visuales, escribir DAX y controlar el modelo con mayor precisión.",
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
