export const laneStyles = {
  "Producto y negocio": { color: "#ff5535", badge: "orange" },
  Datos: { color: "#2878ff", badge: "" },
  "Desarrollo BI": { color: "#30d174", badge: "green" },
  "Gobierno y experiencia": { color: "#7c5cff", badge: "" },
  "Publicación y operación": { color: "#35c9bd", badge: "green" },
};

export const powerBiFlowCopy = Object.freeze({
  chip: "flujo Power BI/Fabric",
  title: "El camino correcto avanza de decisión en decisión.",
  description:
    "La animación muestra la lógica gerencial del roadmap: definición, datos, modelado, DAX, confianza, acción, aprobación, publicación y operación.",
});

export const roadmapPhases = [
  {
    id: 0,
    title: "PRD y Spec",
    lane: "Producto y negocio",
    objective:
      "Definir qué proceso se quiere automatizar, qué problema operativo resuelve, quién lo usa, qué reglas aplican y cómo se medirá que el trabajo manual disminuyó.",
    secondaryObjectives: [
      "Separar necesidad de negocio de solución técnica",
      "Acordar disparador, alcance, fuera de alcance, KPI, usuarios y excepciones",
      "Convertir reglas de negocio en criterios de aceptación verificables",
      "Dejar PRD y Spec versionados como contrato de trabajo",
    ],
    keyActivities: [
      "Redactar PRD del proceso",
      "Bajar la necesidad a Spec técnica",
      "Validar criterios de aceptación con negocio e ingeniería",
    ],
    deliverables: ["PRD aprobado", "Spec inicial", "Criterios de aceptación", "Matriz proceso-reglas-datos-acción"],
    targetOutcome: "Proceso automatizable aprobado antes de construir.",
    owner: "Negocio + Producto BI + Ingeniería",
    riskIfSkipped:
      "El equipo construye una solución técnicamente prolija, pero no elimina trabajo manual ni resuelve una acción operativa concreta.",
    gate: "Gate 1 - Proceso aprobado",
  },
  {
    id: 1,
    title: "Datos y Power Query",
    lane: "Datos",
    objective:
      "Conectar, preparar y validar los datos que sostienen la automatización, incluyendo fuentes, owners, frecuencia, calidad, Power Query, Query Folding y refresh.",
    secondaryObjectives: [
      "Mapear fuentes, owners, frecuencia, volumen, latencia y restricciones de acceso",
      "Definir si aplica Import, DirectQuery, Direct Lake, Lakehouse, Warehouse, Dataflow o Pipeline",
      "Preparar consultas con nombres claros, parámetros y pasos legibles",
      "Validar calidad, nulos, duplicados, claves huérfanas, Query Folding e incremental refresh",
    ],
    keyActivities: ["Mapear fuentes y contratos de datos", "Preparar consultas o pipelines", "Validar calidad y plan de refresh"],
    deliverables: ["Mapa de fuentes", "Consultas o pipelines preparados", "Checklist de calidad", "Plan de refresh"],
    targetOutcome: "Datos confiables, actualizables y trazables antes del modelado.",
    owner: "Data Engineering + Power BI",
    riskIfSkipped:
      "El modelo y el reporte pueden estar bien diseñados, pero la automatización queda alimentada por datos lentos, opacos o incompletos.",
    gate: "Gate 2 - Datos listos",
  },
  {
    id: 2,
    title: "Modelado",
    lane: "Desarrollo BI",
    objective:
      "Construir el modelo semántico que organiza hechos, dimensiones, relaciones, granularidad, calendario y modo de almacenamiento para que el proceso pueda analizarse sin ambigüedad.",
    secondaryObjectives: [
      "Separar hechos y dimensiones con relaciones uno a muchos",
      "Definir granularidad, tabla calendario, claves y direcciones de filtro",
      "Controlar cardinalidad, columnas necesarias y tipos de datos",
      "Validar storage: Import, Direct Lake, DirectQuery o modelo compuesto cuando aplique",
    ],
    keyActivities: ["Diseñar esquema estrella", "Definir relaciones y granularidad", "Validar storage y performance base"],
    deliverables: ["Modelo semántico", "Diagrama estrella", "Ficha de granularidad", "Diccionario de tablas"],
    targetOutcome: "Modelo semántico entendible, estable y listo para calcular reglas.",
    owner: "Arquitectura BI + Modelado Power BI",
    riskIfSkipped: "Aparecen totales inconsistentes, filtros ambiguos, relaciones frágiles y decisiones difíciles de explicar.",
    gate: "Gate 3 - Modelo validado",
  },
  {
    id: 3,
    title: "DAX",
    lane: "Desarrollo BI",
    objective:
      "Convertir reglas de negocio en medidas DAX claras, mantenibles y performantes, cuidando contexto de filtro, variables, formatos, carpetas y pruebas funcionales.",
    secondaryObjectives: [
      "Separar medidas base, medidas derivadas, KPIs y reglas de estado",
      "Usar VAR para legibilidad y evitar recálculos innecesarios",
      "Reservar iteradores para casos que realmente lo requieran",
      "Documentar criterio funcional, fórmula, formato y prueba de cada medida crítica",
    ],
    keyActivities: ["Crear medidas de negocio", "Ordenar carpetas y formatos", "Probar resultados contra criterios de aceptación"],
    deliverables: ["Diccionario de medidas", "Medidas DAX probadas", "Carpetas de medidas", "Casos de prueba DAX"],
    targetOutcome: "Reglas calculadas de forma consistente y verificable.",
    owner: "Power BI Engineering",
    riskIfSkipped:
      "La automatización calcula con reglas duplicadas, lentas o difíciles de auditar, y los usuarios pierden confianza en el resultado.",
    gate: "Gate 4 - DAX validado",
  },
  {
    id: 4,
    title: "Seguridad y gobierno",
    lane: "Gobierno y experiencia",
    objective:
      "Asegurar que datos, modelo y acciones se publiquen con permisos correctos, RLS/OLS, linaje, owners, stewards, sensibilidad y criterios de certificación.",
    secondaryObjectives: [
      "Diseñar permisos de workspace, semantic model, reporte y app",
      "Probar RLS/OLS con usuarios reales, grupos e invitados B2B",
      "Documentar linaje, owners, stewards, sensibilidad y certificación",
      "Validar que navegación, drill-through y medidas respeten seguridad",
    ],
    keyActivities: ["Definir matriz de permisos", "Configurar y probar RLS/OLS", "Documentar gobierno y linaje"],
    deliverables: ["Matriz de permisos", "Reglas RLS/OLS probadas", "Mapa de linaje", "Criterios de certificación"],
    targetOutcome: "Confianza aprobada antes de abrir la solución a usuarios.",
    owner: "Gobierno de datos + Seguridad + BI",
    riskIfSkipped: "Se exponen datos, se habilitan acciones incorrectas o se publica una automatización sin responsable claro.",
    gate: "Gate 5 - Confianza aprobada",
  },
  {
    id: 5,
    title: "UX y acción",
    lane: "Gobierno y experiencia",
    objective:
      "Diseñar una experiencia que lleve al usuario desde la señal hasta la acción esperada: reporte, alerta, tarea, ticket, aprobación o seguimiento operativo.",
    secondaryObjectives: [
      "Diseñar wireframes y navegación antes de cerrar páginas",
      "Priorizar lectura rápida, análisis guiado y detalle bajo demanda",
      "Reducir visuales, slicers e interacciones que no aportan a la decisión",
      "Validar adopción, acción esperada, trazabilidad y performance percibida",
    ],
    keyActivities: ["Diseñar salida operativa", "Validar navegación y acción esperada", "Probar experiencia con usuarios clave"],
    deliverables: ["Reporte o salida operativa", "Mapa de navegación", "Checklist UX/performance", "Plan de adopción"],
    targetOutcome: "Salida accionable que permite decidir sin volver al circuito manual.",
    owner: "BI + UX + Usuarios clave",
    riskIfSkipped:
      "El modelo puede calcular bien, pero el usuario no entiende qué hacer o vuelve a planillas, correos y validaciones manuales.",
    gate: "Gate 6 - Acción validada",
  },
  {
    id: 6,
    title: "Versionado y aprobación",
    lane: "Publicación y operación",
    objective:
      "Preparar el paso a producción con control de cambios, revisión técnica, pruebas, UAT, ramas, pull requests, PBIP/TMDL y deployment pipeline cuando aplique.",
    secondaryObjectives: [
      "Versionar archivos, modelo, reporte, documentación y Spec",
      "Separar Dev, Test y Prod con reglas por ambiente",
      "Ejecutar pruebas funcionales, seguridad, refresh y performance",
      "Obtener aprobación formal para publicar en producción",
    ],
    keyActivities: ["Revisar cambios por pull request", "Validar en Test", "Preparar checklist de publicación"],
    deliverables: ["Repositorio actualizado", "UAT aprobada", "Checklist de release", "Aprobación de publicación"],
    targetOutcome: "Solución aprobada para publicarse sin cambios manuales improvisados.",
    owner: "BI Engineering + DevOps + Usuarios clave",
    riskIfSkipped: "Se publica sin trazabilidad, sin pruebas suficientes o con diferencias entre ambientes que rompen producción.",
    gate: "Gate 7 - Aprobado para publicar",
  },
  {
    id: 7,
    title: "Publicación",
    lane: "Publicación y operación",
    objective:
      "Publicar la solución en el workspace productivo, configurar app o audiencia, refresh, credenciales, permisos finales, endorsement y comunicación de salida.",
    secondaryObjectives: [
      "Promover contenido desde Test a Prod o publicar en el workspace productivo definido",
      "Configurar semantic model, reporte, app, audiencia, permisos y credenciales",
      "Confirmar refresh inicial, gateway, parámetros y conexiones productivas",
      "Comunicar a usuarios qué cambió, dónde entra cada uno y qué acción se espera",
    ],
    keyActivities: ["Publicar en workspace productivo", "Configurar app, permisos y refresh", "Comunicar salida a usuarios"],
    deliverables: ["Reporte publicado", "Semantic model productivo", "App o acceso configurado", "Comunicación de salida a producción"],
    targetOutcome: "Automatización publicada y disponible para usuarios reales.",
    owner: "BI Engineering + Operación BI + Negocio",
    riskIfSkipped: "La solución queda en desarrollo o prueba, sin acceso real, sin refresh productivo o sin adopción clara.",
    gate: "Gate 8 - Publicado en producción",
  },
  {
    id: 8,
    title: "Operación y mejora",
    lane: "Publicación y operación",
    objective:
      "Sostener la automatización después de publicada con monitoreo, refresh, gateway, capacidad, uso real, incidentes, SLA y backlog de mejora continua.",
    secondaryObjectives: [
      "Monitorear refreshes, errores, duración de consultas, CUs, throttling y gateway",
      "Definir alertas, responsables, runbook, SLA e incidentes",
      "Auditar uso real, adopción y acciones ejecutadas",
      "Priorizar mejoras por impacto operativo y costo de mantenimiento",
    ],
    keyActivities: ["Monitorear operación", "Gestionar incidentes", "Mantener backlog de mejora"],
    deliverables: ["Dashboard operativo", "Runbook de incidentes", "SLA y alertas", "Backlog de mejora continua"],
    targetOutcome: "Proceso publicado, monitoreado y mejorado con evidencia.",
    owner: "Operación BI + Plataforma + Negocio",
    riskIfSkipped:
      "La automatización funciona el día de la salida a producción, pero se degrada sin alertas, responsables claros y aprendizaje operativo.",
    gate: "Gate 9 - Operando y mejorando",
  },
];
