export const methodologyProcessFlow = [
  {
    stage: "PRD y Spec",
    method: "Definir + VSM actual + SIPOC ligero",
    why: "Porque antes de hablar de datos o visuales hay que explicitar qué proceso duele, dónde se pierde valor y qué decisión debe quedar mejor resuelta.",
    purpose:
      "Alinear sponsor, usuarios, BI y datos alrededor de una misma pregunta de negocio. En ese sentido, alcance, exclusiones y criterios de aceptación dejan de ser supuestos.",
    how: "Se describe el flujo actual, se identifican entradas y salidas, se ordenan actores y se separa la necesidad funcional de la respuesta técnica.",
    technicalDefinition:
      "Contrato inicial que transforma una necesidad de negocio en requerimientos verificables, criterios de aceptación, alcance técnico y base de trazabilidad.",
    functionalDefinition:
      "Acuerdo que deja claro qué trabajo manual se quiere reducir, quién lo usa, qué decisión habilita y cómo se sabrá que mejoró.",
    examples: [
      "Mapear cómo se detecta hoy un desvío operativo y qué validaciones manuales demoran la respuesta.",
      "Separar en PRD el problema de negocio y en Spec las fuentes, reglas, seguridad y pruebas necesarias.",
    ],
  },
  {
    stage: "Datos y Power Query",
    method: "Medir + OEE BI + calidad de datos",
    why: "Porque una automatización no puede sostener una decisión si las fuentes llegan tarde, incompletas, duplicadas o sin responsable claro.",
    purpose:
      "Construir una línea base de disponibilidad, eficiencia y calidad para entender si los datos están en condiciones de alimentar el proceso. Si esa base falla, el tablero solo acelera una duda.",
    how: "Se relevan fuentes, owners, frecuencia, latencia, volumen, reglas de limpieza, controles de nulos, duplicados, claves huérfanas y plan de refresh.",
    technicalDefinition:
      "Capa de ingesta, preparación y control que convierte fuentes dispersas en datos actualizables, trazables y aptos para modelado.",
    functionalDefinition:
      "Base confiable para que el usuario no discuta si el dato llegó, si está vigente o si representa correctamente el proceso.",
    examples: [
      "Medir cuántos refresh fallan por semana y qué impacto tienen sobre la reunión operativa.",
      "Bloquear registros sin clave válida antes de que lleguen al modelo semántico.",
    ],
  },
  {
    stage: "Modelado",
    method: "Proceso + flujo continuo + criterio de granularidad",
    why: "Porque un modelo mal diseñado multiplica dudas: totales que no cierran, filtros ambiguos y decisiones que nadie puede explicar con seguridad.",
    purpose: "Ordenar hechos, dimensiones, relaciones y granularidad para que el negocio lea una única versión del proceso.",
    how: "Se define el grano de análisis, se separan hechos y dimensiones, se validan relaciones, calendario, cardinalidad y modo de almacenamiento. A partir de ahí, los KPIs tienen una base defendible.",
    technicalDefinition:
      "Estructura semántica que organiza tablas, relaciones y reglas de filtro para responder preguntas analíticas con consistencia y performance.",
    functionalDefinition:
      "Representación entendible del proceso para que áreas distintas puedan comparar el mismo número sin reinterpretarlo.",
    examples: [
      "Definir si el análisis ocurre por orden, día, activo, producto o cliente antes de calcular KPIs.",
      "Evitar relaciones muchos a muchos cuando generan totales difíciles de defender.",
    ],
  },
  {
    stage: "DAX",
    method: "Poka-Yoke + FMEA de reglas",
    why: "Porque las medidas son decisiones codificadas; si la regla es ambigua, lenta o duplicada, el reporte parece correcto pero induce retrabajo.",
    purpose: "Prevenir errores de cálculo y priorizar las reglas críticas que podrían afectar decisiones operativas o gerenciales.",
    how: "Se documenta cada medida relevante, se separan medidas base y derivadas, se prueban casos borde y se revisan severidad, ocurrencia y detección de fallas.",
    technicalDefinition:
      "Capa de cálculo que implementa reglas de negocio mediante medidas, formatos, dependencias y pruebas sobre el modelo semántico.",
    functionalDefinition: "Traducción transparente de los criterios del negocio en indicadores que el usuario puede interpretar, discutir y auditar.",
    examples: [
      "Probar una medida de margen contra casos con descuentos, devoluciones y costos faltantes.",
      "Crear medidas base reutilizables para evitar que cada página calcule una variante distinta.",
    ],
  },
  {
    stage: "Seguridad y gobierno",
    method: "FMEA + Poka-Yoke + responsables explícitos",
    why: "Porque una solución confiable también debe impedir accesos incorrectos, datos sensibles expuestos y decisiones sin dueño.",
    purpose: "Asegurar permisos, linaje, certificación, responsables y controles antes de abrir la solución a usuarios reales. En la práctica, confianza también significa saber quién responde.",
    how: "Se definen roles, RLS/OLS, owners, stewards, sensibilidad, linaje, criterios de certificación y pruebas con usuarios reales.",
    technicalDefinition:
      "Conjunto de controles de acceso, trazabilidad, linaje, clasificación y administración que protege el activo BI durante su ciclo de vida.",
    functionalDefinition:
      "Garantía de que cada usuario ve lo que corresponde, entiende el origen del dato y sabe quién responde por la información.",
    examples: [
      "Probar un rol comercial y uno operativo con usuarios reales antes de publicar.",
      "Documentar owner de datos y owner del producto para resolver incidentes sin ambigüedad.",
    ],
  },
  {
    stage: "UX y acción",
    method: "VSM futuro + flujo continuo",
    why: "Porque el valor no se captura cuando el usuario mira un tablero, sino cuando entiende la señal, decide y actúa sin reconstruir el caso.",
    purpose: "Diseñar la experiencia futura con menos esperas, menos pasos manuales y una acción claramente indicada.",
    how: "Se prioriza la lectura ejecutiva, se muestra estado, causa, impacto y acción esperada, y se deja el detalle disponible sin saturar la primera vista. Dicho de otro modo, la pantalla guía el trabajo.",
    technicalDefinition:
      "Capa de experiencia, navegación e interacción que conecta indicadores, filtros, detalle, alertas y salida operativa.",
    functionalDefinition:
      "Forma concreta en que el usuario pasa de una señal a una decisión, con evidencia suficiente y sin salir del flujo.",
    examples: [
      "Mostrar primero desvíos críticos, responsable y acción pendiente; dejar el detalle en drill-through.",
      "Evitar slicers redundantes que obligan al usuario a reconstruir manualmente el contexto.",
    ],
  },
  {
    stage: "Versionado y aprobación",
    method: "SMED + plan de control + revisión por pares",
    why: "Porque cada cambio productivo debe ser rápido, pero también revisable, reversible y suficientemente probado.",
    purpose: "Reducir fricción de release sin perder trazabilidad ni calidad. Por eso el cambio debe ser rápido, pero también revisable.",
    how: "Se separa preparación previa y ventana de publicación, se versionan PBIP/TMDL, se revisan cambios, se ejecuta UAT y se deja rollback definido.",
    technicalDefinition: "Proceso de control de cambios que combina versionado, pruebas, revisión, aprobación y promoción entre ambientes.",
    functionalDefinition:
      "Acuerdo de salida que le permite al negocio saber qué cambia, por qué cambia, quién aprobó y cómo se vuelve atrás si algo falla.",
    examples: [
      "Preparar parámetros, credenciales, pruebas y comunicación antes de la ventana de puesta en producción.",
      "Revisar diferencias de medidas y relaciones antes de promover a producción.",
    ],
  },
  {
    stage: "Publicación",
    method: "SMED operativo + Poka-Yoke de salida a producción",
    why: "Porque publicar no es subir un archivo; es habilitar un servicio con permisos, refresh, comunicación y soporte inicial.",
    purpose: "Asegurar que la solución llegue a usuarios reales sin improvisar accesos, credenciales, actualización ni mensaje de salida.",
    how: "Se confirma workspace productivo, app, audiencia, permisos, gateway, credenciales, refresh inicial, comunicación y monitoreo posterior.",
    technicalDefinition:
      "Promoción controlada de contenido BI a un ambiente productivo, con configuración de acceso, actualización, credenciales y disponibilidad.",
    functionalDefinition:
      "Momento en que la automatización queda disponible para operar, con usuarios informados y condiciones mínimas de servicio.",
    examples: [
      "Validar que la app productiva muestre la versión correcta y que el refresh inicial termine antes de comunicar la salida.",
      "Confirmar que cada audiencia vea solo los reportes y datos que corresponden.",
    ],
  },
  {
    stage: "Operación y mejora",
    method: "Controlar + OEE BI + Kaizen + Kata",
    why: "Porque la salida a producción no cierra el trabajo; apenas inaugura la etapa en la que la solución debe sostenerse, aprender y mejorar.",
    purpose: "Mantener el servicio BI saludable, medir adopción real, gestionar incidentes y priorizar mejoras con evidencia. En consecuencia, publicar no es el cierre: es el inicio de la operación.",
    how: "Se monitorean refresh, errores, capacidad, uso, acciones pendientes, incidentes, SLA y backlog; luego se ejecutan mejoras incrementales con cadencia.",
    technicalDefinition:
      "Disciplina de operación que observa disponibilidad, performance, calidad, incidentes, adopción y evolución del producto BI.",
    functionalDefinition:
      "Rutina que asegura que la automatización siga sirviendo al negocio, aun cuando cambien datos, usuarios, reglas o prioridades.",
    examples: [
      "Revisar semanalmente qué alertas no se atienden y rediseñar la acción esperada.",
      "Usar un incidente de refresh como aprendizaje para ajustar agenda, capacidad o modelo.",
    ],
  },
];

export const methodologyPrinciples = [
  {
    title: "Marco gerencial",
    text: "Conecta cada iniciativa BI con una pregunta de gestión concreta: qué decisión mejora, qué pérdida reduce y cómo se demuestra el resultado.",
  },
  {
    title: "Trabajo diario",
    text: "Le da al equipo una rutina práctica para priorizar problemas, documentar causas, probar mejoras y sostenerlas sin depender de conversaciones sueltas.",
  },
  {
    title: "Producto BI",
    text: "Integra PRD, Spec, modelo, publicación y operación en un ciclo verificable, versionable y presentable ante dirección.",
  },
];

export const oeeFactors = [
  {
    id: "availability",
    title: "Disponibilidad",
    short: "La solución está disponible cuando la operación la necesita.",
    formula: "Tiempo útil de servicio / tiempo comprometido",
    biMeaning:
      "Mide si las fuentes, el refresh, el gateway, el modelo semántico, el reporte, los permisos y la salida operativa están disponibles dentro de la ventana acordada. Si no está a tiempo, no sirve para decidir.",
    signals: ["Refresh exitoso", "SLA cumplido", "Gateway estable", "Accesos correctos"],
    failureModes: ["Datos vencidos", "Reporte caído", "Permisos mal aplicados", "Incidente sin responsable"],
  },
  {
    id: "performance",
    title: "Eficiencia",
    short: "La solución entrega señales sin fricción ni esperas innecesarias.",
    formula: "Rendimiento real / rendimiento esperado",
    biMeaning:
      "Mide velocidad y fluidez: tiempo de carga, duración del refresh, consumo de capacidad, pasos manuales eliminados y tiempo hasta la acción.",
    signals: ["Consultas rápidas", "Menos reproceso", "Capacidad estable", "Flujo sin esperas"],
    failureModes: ["Modelo lento", "Pasos manuales excesivos", "Throttling", "Exportaciones recurrentes a Excel"],
  },
  {
    id: "quality",
    title: "Calidad",
    short: "La salida es confiable, entendible y accionable.",
    formula: "Casos correctos / casos procesados",
    biMeaning:
      "Mide errores de datos, cálculos, reglas, segmentación, UX y decisiones. En definitiva, una salida disponible y rápida también falla si genera retrabajo.",
    signals: ["Datos conciliados", "Medidas validadas", "Reglas trazables", "Acciones aceptadas"],
    failureModes: ["Número discutido", "Regla ambigua", "Dato incompleto", "Acción incorrecta"],
  },
];

export const dmaicStages = [
  {
    id: "define",
    title: "Definir",
    question: "¿Qué proceso se quiere mejorar y qué decisión debe habilitar?",
    biApplication:
      "Se acuerdan PRD, alcance, sponsor, usuarios, disparador, problema actual, métrica de éxito, fuera de alcance y criterios de aceptación. Dicho de otro modo, se decide qué vale la pena automatizar antes de construir.",
    evidence: ["PRD aprobado", "VSM actual", "SIPOC ligero", "Hipótesis de pérdida"],
    tools: ["PRD", "VSM actual", "4P Toyota"],
  },
  {
    id: "measure",
    title: "Medir",
    question: "¿Dónde se pierde disponibilidad, eficiencia o calidad?",
    biApplication:
      "Se arma una línea base con OEE BI, tiempos de refresh, latencia, adopción, volumen de excepciones, errores de datos y esfuerzo manual. Así, la discusión deja de apoyarse en percepciones.",
    evidence: ["Línea base OEE BI", "Mapa de fuentes", "Definición de KPIs", "Plan de medición"],
    tools: ["OEE BI", "Contratos de datos", "Checklist de calidad"],
  },
  {
    id: "analyze",
    title: "Analizar",
    question: "¿Cuál es la causa raíz y qué falla podría repetirse?",
    biApplication:
      "Se analizan modos y efectos de falla en fuentes, reglas, modelo, seguridad, UX, despliegue y operación. Por lo tanto, el equipo distingue el síntoma visible de la causa que debe corregirse.",
    evidence: ["FMEA", "Causa raíz", "Priorización por riesgo", "Decisión técnica documentada"],
    tools: ["FMEA", "5 porqués", "Pareto"],
  },
  {
    id: "improve",
    title: "Mejorar",
    question: "¿Qué diseño futuro elimina desperdicio y reduce variación?",
    biApplication:
      "Se diseña el mapa de valor futuro, se simplifica el flujo, se automatizan controles y se preparan releases con menos fricción. A partir de ahí, la mejora deja de ser intención y se convierte en una solución verificable.",
    evidence: ["VSM futuro", "Spec actualizada", "Backlog priorizado", "Piloto validado"],
    tools: ["VSM futuro", "SMED", "Poka-Yoke", "Flujo continuo"],
  },
  {
    id: "control",
    title: "Controlar",
    question: "¿Cómo se sostiene la mejora sin volver al modo manual?",
    biApplication:
      "Se instala monitoreo de operación, runbook, SLA, alertas, tablero de salud, responsables explícitos, ritual Kaizen y Kata de mejora. En consecuencia, el resultado queda incorporado a la rutina del equipo.",
    evidence: ["Runbook", "Tablero operativo", "SLA", "Cadencia Kaizen"],
    tools: ["Kaizen", "Kata", "Plan de control"],
  },
];

export const methodologyTools = [
  {
    title: "Lean Six Sigma",
    role: "Marco integrador",
    when: "Durante todo el ciclo",
    purpose:
      "Lean ayuda a eliminar esperas, reprocesos y pasos que no agregan valor; Six Sigma, por su parte, reduce variación y defectos en datos, reglas y decisiones.",
    biUse:
      "Sirve para explicar por qué una solución BI no se mide por cantidad de páginas, sino por pérdida eliminada, estabilidad ganada y decisión mejor sustentada.",
  },
  {
    title: "VSM actual",
    role: "Diagnóstico",
    when: "Definir y medir",
    purpose: "Mapea cómo fluye hoy el trabajo: entradas, esperas, aprobaciones, planillas, reprocesos, sistemas y decisiones.",
    biUse: "Muestra dónde debe intervenir el BI: no solo qué dato falta, sino qué espera, validación o retrabajo debe desaparecer.",
  },
  {
    title: "OEE BI",
    role: "Medición ejecutiva",
    when: "Medir y controlar",
    purpose: "Traduce disponibilidad, eficiencia y calidad en una lectura única de efectividad del proceso analítico.",
    biUse: "Permite presentar si la automatización opera como servicio y, sobre todo, dónde se concentra la pérdida.",
  },
  {
    title: "FMEA",
    role: "Riesgo y causa",
    when: "Analizar",
    purpose:
      "Identifica modos de falla, efectos, causas, controles actuales y prioridad de acción antes de que el error llegue al usuario.",
    biUse: "Aplica a fuentes, refresh, modelo, DAX, seguridad, UX, deployment y operación. Dicho simple: anticipa errores antes de que lleguen al usuario.",
  },
  {
    title: "VSM futuro",
    role: "Diseño objetivo",
    when: "Mejorar",
    purpose: "Redibuja el flujo con menos esperas, menos pases manuales, controles embebidos y acción directa desde la señal.",
    biUse: "Se convierte en roadmap de automatización y en criterio para priorizar releases.",
  },
  {
    title: "Kaizen y Kata",
    role: "Sostenimiento",
    when: "Controlar",
    purpose:
      "Kaizen captura mejoras incrementales; Kata instala una rutina de objetivo, condición actual, obstáculo, experimento y aprendizaje.",
    biUse: "Mantiene vivo el producto BI con evidencia de uso, incidentes, adopción y mejoras pequeñas pero constantes.",
  },
];

export const toyotaFourP = [
  {
    title: "Filosofía",
    subtitle: "Propósito de largo plazo",
    biTranslation:
      "La solución existe para mejorar un proceso operativo, no para sumar visuales. Por eso, cada KPI debe responder a una decisión o acción concreta.",
    evidence: ["Objetivo ejecutivo", "Problema operativo", "Criterio de éxito"],
  },
  {
    title: "Proceso",
    subtitle: "Flujo correcto",
    biTranslation:
      "El diseño elimina esperas, reprocesos, validaciones duplicadas y pasos manuales. En ese sentido, el reporte es una parte del flujo, no el final.",
    evidence: ["VSM actual/futuro", "Flujo continuo", "Poka-Yoke"],
  },
  {
    title: "Personas",
    subtitle: "Roles y aprendizaje",
    biTranslation:
      "Sponsor, owners, usuarios clave, BI y data engineering comparten lenguaje, responsabilidades, cadencia y criterios de aceptación.",
    evidence: ["RACI", "UAT", "Rituales de adopción"],
  },
  {
    title: "Resolución de problemas",
    subtitle: "Mejora continua",
    biTranslation:
      "Los incidentes y desvíos no se esconden; al contrario, se transforman en causa raíz, backlog, experimento y control operativo.",
    evidence: ["FMEA", "Kaizen", "Kata", "Runbook"],
  },
];

export const leanPractices = [
  {
    title: "Flujo continuo",
    focus: "Reducir esperas",
    text: "El usuario pasa de señal a acción sin exportar, reinterpretar ni pedir validaciones por fuera del sistema.",
    example: "Un desvío crítico abre evidencia, responsable, acción esperada y estado de seguimiento dentro del mismo flujo.",
  },
  {
    title: "SMED",
    focus: "Preparaciones rápidas",
    text: "Separa preparación interna y externa para que releases, cambios de regla y pruebas demanden menos tiempo y tengan menos riesgo.",
    example: "Checklist, parámetros, ambientes Dev-Test-Prod y pruebas listas antes de la ventana de publicación.",
  },
  {
    title: "Poka-Yoke",
    focus: "Prevenir errores",
    text: "El sistema evita que datos inválidos, filtros peligrosos o reglas incompletas lleguen a la decisión operativa.",
    example: "Validaciones de nulos, duplicados, claves huérfanas, permisos y medidas críticas antes de la salida a producción.",
  },
  {
    title: "Kaizen",
    focus: "Mejoras incrementales",
    text: "La mejora no espera un proyecto grande; cada incidente, queja o fricción puede convertirse en una acción pequeña, observable y medible.",
    example: "Reducir un refresh de 42 a 18 minutos, eliminar un paso manual o aclarar una regla ambigua.",
  },
  {
    title: "Kata",
    focus: "Rutina de aprendizaje",
    text: "Define condición objetivo, condición actual, obstáculos, siguiente experimento y aprendizaje observado.",
    example: "Subir calidad de datos del 92% al 98% probando controles por fuente durante dos sprints.",
  },
];

export const methodologyCadence = [
  {
    title: "Revisión diaria",
    text: "Mirar disponibilidad, refresh, incidentes, excepciones y acciones pendientes. El objetivo es sostener el servicio BI en condiciones reales de uso, no solo cuando alguien reclama.",
  },
  {
    title: "Kaizen semanal",
    text: "Elegir una pérdida concreta del OEE BI, analizar la causa, definir una contramedida pequeña y registrar el aprendizaje.",
  },
  {
    title: "Gate de release",
    text: "Antes de publicar, confirmar Spec, pruebas, seguridad, VSM futuro, FMEA actualizado, rollback y comunicación. En ese punto no debería quedar nada crítico implícito.",
  },
  {
    title: "Comité mensual",
    text: "Presentar efectividad, tendencia, pérdidas principales, mejoras cerradas y próximas decisiones de roadmap.",
  },
];
