export const methodologyPrinciples = [
  {
    title: "Marco gerencial",
    text:
      "Conecta cada iniciativa BI con una pregunta de gestión concreta: qué decisión mejora, qué pérdida reduce y cómo se demuestra el resultado.",
  },
  {
    title: "Trabajo diario",
    text:
      "Le da al equipo una rutina práctica para priorizar problemas, documentar causas, probar mejoras y sostener controles sin depender de conversaciones sueltas.",
  },
  {
    title: "Producto BI",
    text:
      "Integra PRD, Spec, modelo, publicación y operación en un ciclo verificable, versionable y presentable ante dirección.",
  },
];

export const oeeFactors = [
  {
    id: "availability",
    title: "Disponibilidad",
    short: "La solución está disponible cuando la operación la necesita.",
    formula: "Tiempo útil de servicio / tiempo comprometido",
    biMeaning:
      "Mide si las fuentes, el refresh, el gateway, el modelo semántico, el reporte, los permisos y la salida operativa están disponibles dentro de la ventana acordada.",
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
      "Mide errores de datos, cálculos, reglas, segmentación, UX y decisiones. En definitiva, una salida disponible y rápida también falla si induce retrabajo.",
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
      "Se arma una línea base con OEE BI, tiempos de refresh, latencia, adopción, volumen de excepciones, errores de datos y esfuerzo manual. Así, la discusión deja de apoyarse en percepciones y pasa a apoyarse en evidencia.",
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
      "Se instala monitoreo de operación, runbook, SLA, alertas, tablero de salud, ownership, ritual Kaizen y Kata de mejora. En consecuencia, el resultado queda incorporado a la rutina del equipo.",
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
    purpose:
      "Mapea cómo fluye hoy el trabajo: entradas, esperas, aprobaciones, planillas, reprocesos, sistemas y decisiones.",
    biUse:
      "Muestra dónde debe intervenir el BI; no solo qué dato falta, sino qué espera, validación o retrabajo debe desaparecer.",
  },
  {
    title: "OEE BI",
    role: "Medición ejecutiva",
    when: "Medir y controlar",
    purpose:
      "Traduce disponibilidad, eficiencia y calidad en una lectura única de efectividad del proceso analítico.",
    biUse:
      "Permite presentar si la automatización opera como servicio y, sobre todo, dónde se concentra la pérdida.",
  },
  {
    title: "FMEA",
    role: "Riesgo y causa",
    when: "Analizar",
    purpose:
      "Identifica modos de falla, efectos, causas, controles actuales y prioridad de acción antes de que el error llegue al usuario.",
    biUse:
      "Aplica a fuentes, refresh, modelo, DAX, seguridad, UX, deployment y operación.",
  },
  {
    title: "VSM futuro",
    role: "Diseño objetivo",
    when: "Mejorar",
    purpose:
      "Redibuja el flujo con menos esperas, menos pases manuales, controles embebidos y acción directa desde la señal.",
    biUse:
      "Se convierte en roadmap de automatización y en criterio para priorizar releases.",
  },
  {
    title: "Kaizen y Kata",
    role: "Sostenimiento",
    when: "Controlar",
    purpose:
      "Kaizen captura mejoras incrementales; Kata instala una rutina de objetivo, condición actual, obstáculo, experimento y aprendizaje.",
    biUse:
      "Mantiene vivo el producto BI con evidencia de uso, incidentes, adopción y mejoras pequeñas pero constantes.",
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
    text:
      "El usuario pasa de señal a acción sin exportar, reinterpretar ni pedir validaciones por fuera del sistema.",
    example: "Un desvío crítico abre evidencia, responsable, acción esperada y estado de seguimiento dentro del mismo flujo.",
  },
  {
    title: "SMED",
    focus: "Preparaciones rápidas",
    text:
      "Separa preparación interna y externa para que releases, cambios de regla y pruebas demanden menos tiempo y tengan menos riesgo.",
    example: "Checklist, parámetros, ambientes Dev-Test-Prod y pruebas listas antes de la ventana de publicación.",
  },
  {
    title: "Poka-Yoke",
    focus: "Prevenir errores",
    text:
      "El sistema evita que datos inválidos, filtros peligrosos o reglas incompletas lleguen a la decisión operativa.",
    example: "Validaciones de nulos, duplicados, claves huérfanas, permisos y medidas críticas antes del go-live.",
  },
  {
    title: "Kaizen",
    focus: "Mejoras incrementales",
    text:
      "La mejora no espera un proyecto grande; cada incidente, queja o fricción genera una acción pequeña, observable y medible.",
    example: "Reducir un refresh de 42 a 18 minutos, eliminar un paso manual o aclarar una regla ambigua.",
  },
  {
    title: "Kata",
    focus: "Rutina de aprendizaje",
    text:
      "Define condición objetivo, condición actual, obstáculos, siguiente experimento y aprendizaje observado.",
    example: "Subir calidad de datos del 92% al 98% probando controles por fuente durante dos sprints.",
  },
];

export const methodologyCadence = [
  {
    title: "Revisión diaria",
    text:
      "Mirar disponibilidad, refresh, incidentes, excepciones y acciones pendientes. El objetivo es sostener el servicio BI en condiciones reales de uso.",
  },
  {
    title: "Kaizen semanal",
    text:
      "Elegir una pérdida concreta del OEE BI, analizar la causa, definir una contramedida pequeña y registrar el aprendizaje.",
  },
  {
    title: "Gate de release",
    text:
      "Antes de publicar, confirmar Spec, pruebas, seguridad, VSM futuro, FMEA actualizado, rollback y comunicación.",
  },
  {
    title: "Comité mensual",
    text:
      "Presentar efectividad, tendencia, pérdidas principales, mejoras cerradas y próximas decisiones de roadmap.",
  },
];
