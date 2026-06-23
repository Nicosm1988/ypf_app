export const methodologyPrinciples = [
  {
    title: "Marco gerencial",
    text:
      "Conecta cada iniciativa BI con efectividad operativa: disponibilidad de la informacion, eficiencia del flujo analitico y calidad de la decision.",
  },
  {
    title: "Trabajo diario",
    text:
      "Da al equipo una forma concreta de priorizar problemas, documentar causas, probar mejoras y sostener controles sin depender de discusiones ad hoc.",
  },
  {
    title: "Producto BI",
    text:
      "Integra PRD, Spec, modelo, publicacion y operacion en un ciclo de mejora que puede auditarse, versionarse y presentarse ante direccion.",
  },
];

export const oeeFactors = [
  {
    id: "availability",
    title: "Disponibilidad",
    short: "La solucion esta disponible cuando la operacion la necesita.",
    formula: "Tiempo util de servicio / tiempo comprometido",
    biMeaning:
      "Mide si datos, refresh, gateway, semantic model, reporte, permisos y salida operativa estan disponibles dentro de la ventana acordada.",
    signals: ["Refresh exitoso", "SLA cumplido", "Gateway estable", "Accesos correctos"],
    failureModes: ["Datos vencidos", "Reporte caido", "Permisos mal aplicados", "Incidente sin responsable"],
  },
  {
    id: "performance",
    title: "Eficiencia",
    short: "La solucion entrega senales sin friccion ni esperas innecesarias.",
    formula: "Rendimiento real / rendimiento esperado",
    biMeaning:
      "Mide velocidad y fluidez: tiempo de carga, duracion de refresh, costo de capacidad, pasos manuales eliminados y tiempo hasta la accion.",
    signals: ["Consultas rapidas", "Menos reproceso", "Capacidad estable", "Flujo sin esperas"],
    failureModes: ["Modelo lento", "Demasiados pasos manuales", "Throttling", "Usuarios exportando a Excel"],
  },
  {
    id: "quality",
    title: "Calidad",
    short: "La salida es confiable, entendible y accionable.",
    formula: "Casos correctos / casos procesados",
    biMeaning:
      "Mide errores de datos, calculos, reglas, segmentacion, UX y decisiones. Una salida disponible y rapida igual falla si induce retrabajo.",
    signals: ["Datos conciliados", "Medidas validadas", "Reglas trazables", "Acciones aceptadas"],
    failureModes: ["Numero discutido", "Regla ambigua", "Dato incompleto", "Accion incorrecta"],
  },
];

export const dmaicStages = [
  {
    id: "define",
    title: "Definir",
    question: "Que proceso se quiere mejorar y que decision debe habilitar?",
    biApplication:
      "PRD, alcance, sponsor, usuarios, disparador, problema actual, metrica de exito, fuera de alcance y criterios de aceptacion.",
    evidence: ["PRD aprobado", "VSM actual", "SIPOC ligero", "Hipotesis de perdida"],
    tools: ["PRD", "VSM actual", "4P Toyota"],
  },
  {
    id: "measure",
    title: "Medir",
    question: "Donde se pierde disponibilidad, eficiencia o calidad?",
    biApplication:
      "Linea base de OEE BI, tiempos de refresh, latencia, adopcion, volumen de excepciones, errores de datos y esfuerzo manual.",
    evidence: ["Baseline OEE BI", "Mapa de fuentes", "Definicion de KPIs", "Plan de medicion"],
    tools: ["OEE BI", "Contratos de datos", "Checklist de calidad"],
  },
  {
    id: "analyze",
    title: "Analizar",
    question: "Cual es la causa raiz y que falla podria repetirse?",
    biApplication:
      "Analisis de modo y efecto de fallas para fuentes, reglas, modelo, seguridad, UX, despliegue y operacion.",
    evidence: ["FMEA", "Causa raiz", "Priorizacion por riesgo", "Decision tecnica documentada"],
    tools: ["FMEA", "5 porques", "Pareto"],
  },
  {
    id: "improve",
    title: "Mejorar",
    question: "Que diseno futuro elimina desperdicio y reduce variacion?",
    biApplication:
      "Mapa de valor futuro, simplificacion de flujo, automatizacion de controles, SMED para releases, Poka-Yoke y pruebas.",
    evidence: ["VSM futuro", "Spec actualizada", "Backlog priorizado", "Piloto validado"],
    tools: ["VSM futuro", "SMED", "Poka-Yoke", "Flujo continuo"],
  },
  {
    id: "control",
    title: "Controlar",
    question: "Como se sostiene la mejora sin volver al modo manual?",
    biApplication:
      "Monitoreo de operacion, runbook, SLA, alertas, tablero de salud, ownership, ritual Kaizen y Kata de mejora.",
    evidence: ["Runbook", "Dashboard operativo", "SLA", "Cadencia Kaizen"],
    tools: ["Kaizen", "Kata", "Control plan"],
  },
];

export const methodologyTools = [
  {
    title: "Lean Six Sigma",
    role: "Marco integrador",
    when: "Durante todo el ciclo",
    purpose:
      "Lean reduce esperas, reprocesos y pasos que no agregan valor; Six Sigma reduce variacion y defectos en datos, reglas y decisiones.",
    biUse:
      "Sirve para justificar por que una solucion BI no se mide por cantidad de paginas, sino por perdida eliminada y estabilidad ganada.",
  },
  {
    title: "VSM actual",
    role: "Diagnostico",
    when: "Definir y medir",
    purpose:
      "Mapea como fluye hoy el trabajo: entradas, esperas, aprobaciones, planillas, reprocesos, sistemas y decisiones.",
    biUse:
      "Muestra donde el BI debe intervenir: no solo que dato falta, sino que espera, validacion o retrabajo debe desaparecer.",
  },
  {
    title: "OEE BI",
    role: "Medicion ejecutiva",
    when: "Medir y controlar",
    purpose:
      "Traduce disponibilidad, eficiencia y calidad a una lectura unica de efectividad del proceso analitico.",
    biUse:
      "Permite presentar si la automatizacion esta operando como servicio y donde se concentra la perdida.",
  },
  {
    title: "FMEA",
    role: "Riesgo y causa",
    when: "Analizar",
    purpose:
      "Identifica modos de falla, efectos, causas, controles actuales y prioridad de accion antes de que el error llegue al usuario.",
    biUse:
      "Aplica a fuentes, refresh, modelo, DAX, seguridad, UX, deployment y operacion.",
  },
  {
    title: "VSM futuro",
    role: "Diseno objetivo",
    when: "Mejorar",
    purpose:
      "Redibuja el flujo con menos esperas, menos pases manuales, controles embebidos y accion directa desde la senal.",
    biUse:
      "Se convierte en roadmap de automatizacion y en criterio para priorizar releases.",
  },
  {
    title: "Kaizen y Kata",
    role: "Sostenimiento",
    when: "Controlar",
    purpose:
      "Kaizen captura mejoras incrementales; Kata instala una rutina de objetivo, condicion actual, obstaculo, experimento y aprendizaje.",
    biUse:
      "Mantiene vivo el producto BI con evidencia de uso, incidentes, adopcion y mejoras pequenas pero constantes.",
  },
];

export const toyotaFourP = [
  {
    title: "Filosofia",
    subtitle: "Proposito de largo plazo",
    biTranslation:
      "La solucion existe para mejorar un proceso operativo, no para sumar visuales. Cada KPI debe responder a una decision o accion.",
    evidence: ["Objetivo ejecutivo", "Problema operativo", "Criterio de exito"],
  },
  {
    title: "Proceso",
    subtitle: "Flujo correcto",
    biTranslation:
      "El diseno elimina esperas, reprocesos, validaciones duplicadas y pasos manuales; el reporte es una parte del flujo, no el final.",
    evidence: ["VSM actual/futuro", "Flujo continuo", "Poka-Yoke"],
  },
  {
    title: "Personas",
    subtitle: "Roles y aprendizaje",
    biTranslation:
      "Sponsor, owners, usuarios clave, BI y data engineering comparten lenguaje, responsabilidades, cadencia y criterios de aceptacion.",
    evidence: ["RACI", "UAT", "Rituales de adopcion"],
  },
  {
    title: "Resolucion de problemas",
    subtitle: "Mejora continua",
    biTranslation:
      "Los incidentes y desvíos no se esconden: se convierten en causa raiz, backlog, experimento y control operativo.",
    evidence: ["FMEA", "Kaizen", "Kata", "Runbook"],
  },
];

export const leanPractices = [
  {
    title: "Flujo continuo",
    focus: "Reducir esperas",
    text:
      "El usuario pasa de senal a accion sin exportar, reinterpretar ni pedir validaciones fuera del sistema.",
    example: "Un desvio critico abre evidencia, responsable, accion esperada y estado de seguimiento en el mismo flujo.",
  },
  {
    title: "SMED",
    focus: "Preparaciones rapidas",
    text:
      "Separa preparacion interna y externa para que releases, cambios de regla y pruebas tarden menos y tengan menos riesgo.",
    example: "Checklist, parametros, ambientes Dev-Test-Prod y pruebas automatizables antes de la ventana de publicacion.",
  },
  {
    title: "Poka-Yoke",
    focus: "Prevenir errores",
    text:
      "El sistema evita que datos invalidos, filtros peligrosos o reglas incompletas lleguen a la decision operativa.",
    example: "Validaciones de nulos, duplicados, claves huerfanas, permisos y medidas criticas antes del go-live.",
  },
  {
    title: "Kaizen",
    focus: "Mejoras incrementales",
    text:
      "La mejora no espera a un proyecto grande: cada incidente, queja o friccion genera una accion pequena y medible.",
    example: "Reducir un refresh de 42 a 18 minutos, eliminar un paso manual o aclarar una regla ambigua.",
  },
  {
    title: "Kata",
    focus: "Rutina de aprendizaje",
    text:
      "Define condicion objetivo, condicion actual, obstaculos, siguiente experimento y aprendizaje observado.",
    example: "Subir calidad de datos del 92% al 98% probando controles por fuente durante dos sprints.",
  },
];

export const methodologyCadence = [
  {
    title: "Revisión diaria",
    text:
      "Mirar disponibilidad, refresh, incidentes, excepciones y acciones pendientes. El objetivo es sostener el servicio BI.",
  },
  {
    title: "Kaizen semanal",
    text:
      "Elegir una perdida concreta del OEE BI, analizar causa, definir contramedida pequena y registrar aprendizaje.",
  },
  {
    title: "Gate de release",
    text:
      "Antes de publicar, confirmar Spec, pruebas, seguridad, VSM futuro, FMEA actualizado, rollback y comunicacion.",
  },
  {
    title: "Comité mensual",
    text:
      "Presentar efectividad, tendencia, perdidas principales, mejoras cerradas y proximas decisiones de roadmap.",
  },
];
