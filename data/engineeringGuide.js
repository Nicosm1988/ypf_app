export const prdSpecComparison = [
  {
    characteristic: "Enfoque",
    prd: "El porqué y el qué: proceso, usuario, disparador, tarea manual, salida esperada y resultado medible.",
    spec: "El cómo: arquitectura, implementación, reglas técnicas, datos, acción esperada y comportamiento del sistema.",
  },
  {
    characteristic: "Creador principal",
    prd: "Negocio, producto o consultoría BI junto al sponsor y usuarios clave del proceso.",
    spec: "Ingeniería BI, arquitectura de datos, desarrollo Power BI y diseño técnico.",
  },
  {
    characteristic: "Objetivo",
    prd: "Alinear al equipo antes de automatizar y fijar criterios de éxito observables.",
    spec: "Guiar la construcción paso a paso y dejar reglas, datos y decisiones técnicas trazables.",
  },
  {
    characteristic: "Contenido habitual",
    prd: "Contexto, proceso actual, usuarios, disparadores, KPIs, alcance, fuera de alcance y criterios de aceptación.",
    spec: "Fuentes, preparación, modelado, DAX, seguridad, UX, versionado, publicación, pruebas y operación.",
  },
];

export const guideSections = [
  {
    id: "prd-spec",
    title: "PRD y Spec",
    eyebrow: "Inicio del proyecto",
    summary:
      "Antes de construir, el equipo debe separar el proceso que quiere automatizar de la solución técnica que va a implementar. El PRD define el problema; la Spec ordena la construcción.",
    practices: [
      "Definir proceso, disparador, responsables, audiencia, acciones y métricas de éxito",
      "Acordar alcance, fuera de alcance, supuestos, excepciones y riesgos operativos",
      "Convertir reglas de negocio en criterios de aceptación verificables",
      "Evitar documentos híbridos donde negocio y técnica discuten problemas distintos",
    ],
    deliverables: ["PRD aprobado", "Spec inicial", "Criterios de aceptación", "Mapa de stakeholders"],
    risk: "Construir una solución prolija pero equivocada, o automatizar una parte del proceso que todavía no fue entendida.",
  },
  {
    id: "etl-power-query",
    title: "Datos y Power Query",
    eyebrow: "Datos listos",
    summary:
      "La automatización necesita datos confiables antes del modelado. Esta etapa conecta fuentes, define owners, prepara consultas o pipelines, valida calidad, cuida Query Folding y deja claro cómo se actualizará el proceso.",
    practices: [
      "Mapear fuentes, owners, frecuencia, volumen, latencia y restricciones de acceso",
      "Definir si aplica Import, DirectQuery, Direct Lake, Lakehouse, Warehouse, Dataflow o Pipeline",
      "Usar nombres claros, parámetros, carpetas y pasos aplicados legibles",
      "Controlar Query Folding, incremental refresh, nulos, duplicados y claves huérfanas",
    ],
    deliverables: ["Mapa de fuentes", "Consultas o pipelines preparados", "Checklist de calidad", "Plan de refresh"],
    risk: "Refrescos lentos, transformaciones opacas y automatizaciones que disparan acciones con datos incompletos.",
  },
  {
    id: "modelo-vertipaq",
    title: "Modelado",
    eyebrow: "Modelo semántico",
    summary:
      "El modelado convierte datos preparados en un motor analítico entendible: hechos, dimensiones, relaciones, granularidad, calendario, modo de almacenamiento y reglas de filtro.",
    practices: [
      "Separar hechos y dimensiones",
      "Definir granularidad, tabla calendario, claves y direcciones de filtro",
      "Evitar tablas planas gigantes, relaciones ambiguas y columnas innecesarias",
      "Validar Import, Direct Lake, DirectQuery o modo compuesto según cada tabla",
    ],
    deliverables: ["Modelo semántico", "Diagrama estrella", "Ficha de granularidad", "Diccionario de tablas"],
    risk: "Totales inconsistentes, filtros impredecibles, relaciones frágiles y baja confianza en la automatización.",
  },
  {
    id: "dax",
    title: "DAX",
    eyebrow: "Reglas calculadas",
    summary:
      "DAX transforma reglas de negocio en medidas verificables. La etapa debe dejar fórmulas claras, medidas ordenadas, resultados probados y lógica suficiente para sostener decisiones operativas.",
    practices: [
      "Separar medidas base, derivadas, KPIs y reglas de estado",
      "Usar variables VAR para legibilidad y evitar recálculos innecesarios",
      "Reservar iteradores para casos donde realmente hacen falta",
      "Documentar criterio funcional, fórmula, formato y prueba de cada medida crítica",
    ],
    deliverables: ["Diccionario de medidas", "Medidas DAX probadas", "Carpetas de medidas", "Casos de prueba DAX"],
    risk: "Reglas difíciles de encontrar, resultados inconsistentes y cálculos lentos o imposibles de auditar.",
  },
  {
    id: "seguridad-gobierno",
    title: "Seguridad y gobierno",
    eyebrow: "Confianza",
    summary:
      "Antes de abrir la solución a usuarios, hay que asegurar permisos, RLS, OLS, linaje, owners, stewards, sensibilidad y certificación. La confianza se diseña antes de publicar.",
    practices: [
      "Definir permisos de workspace, semantic model, reporte y app",
      "Preferir RLS dinámico con tabla de usuarios y USERPRINCIPALNAME() cuando corresponda",
      "Probar usuarios reales, grupos e invitados B2B",
      "Documentar owners, stewards, linaje y criterios de certificación",
    ],
    deliverables: ["Matriz de permisos", "Reglas RLS/OLS probadas", "Plan de auditoría", "Criterios de certificación"],
    risk: "Exponer datos sensibles, disparar acciones incorrectas o publicar automatizaciones sin responsable claro.",
  },
  {
    id: "ux-reportes",
    title: "UX y acción",
    eyebrow: "Experiencia operativa",
    summary:
      "La salida debe ayudar al usuario a decidir y actuar. Puede ser reporte, alerta, tarea, ticket, aprobación o seguimiento, pero siempre debe reducir trabajo manual y dejar evidencia.",
    practices: [
      "Diseñar wireframes y navegación antes de cerrar páginas",
      "Mostrar estado, causa, impacto y acción esperada con jerarquía clara",
      "Reducir visuales, slicers e interacciones que no aportan a la decisión",
      "Validar adopción, acción esperada, trazabilidad y performance percibida",
    ],
    deliverables: ["Reporte o salida operativa", "Mapa de navegación", "Checklist UX/performance", "Plan de adopción"],
    risk: "Salidas saturadas, lentas o poco accionables aunque los cálculos sean correctos.",
  },
  {
    id: "cicd-pbip",
    title: "Versionado y aprobación",
    eyebrow: "Antes de publicar",
    summary:
      "Antes de producción, la solución debe pasar por versionado, revisión técnica, pruebas, UAT y aprobación. Este es el control que evita publicar cambios manuales improvisados.",
    practices: [
      "Versionar PBIP/TMDL, documentación, Spec y scripts cuando aplique",
      "Separar Dev, Test y Prod con reglas por ambiente",
      "Revisar cambios por pull request",
      "Validar pruebas funcionales, seguridad, refresh y performance antes de la salida a producción",
    ],
    deliverables: ["Repositorio actualizado", "UAT aprobada", "Checklist de release", "Aprobación de publicación"],
    risk: "Publicar sin trazabilidad, sin pruebas suficientes o con diferencias entre ambientes que rompen producción.",
  },
  {
    id: "publicacion",
    title: "Publicación",
    eyebrow: "Go-live",
    summary:
      "Publicar es el paso en el que la automatización pasa a estar disponible para usuarios reales: workspace productivo, app o audiencia, permisos finales, refresh, credenciales y comunicación.",
    practices: [
      "Publicar o promover contenido al workspace productivo",
      "Configurar semantic model, reporte, app, audiencia, permisos y credenciales",
      "Confirmar refresh inicial, gateway, parámetros y conexiones productivas",
      "Comunicar a usuarios dónde entrar, qué cambió y qué acción se espera",
    ],
    deliverables: ["Reporte publicado", "Semantic model productivo", "App o acceso configurado", "Comunicación de salida a producción"],
    risk: "La solución queda en desarrollo o prueba, sin acceso real, sin refresh productivo o sin adopción clara.",
  },
  {
    id: "operacion-capacidad",
    title: "Operación y mejora",
    eyebrow: "Después de publicar",
    summary:
      "Automatizar no termina al publicar. Hay que sostener refresh, gateway, capacidad, uso real, incidentes, SLA, adopción y backlog de mejora continua.",
    practices: [
      "Monitorear refreshes, errores, duración de consultas, CUs, throttling y gateway",
      "Definir alertas, responsables, runbook, SLA e incidentes",
      "Auditar uso real, adopción y acciones ejecutadas",
      "Priorizar mejoras por impacto operativo y costo de mantenimiento",
    ],
    deliverables: ["Dashboard operativo", "Runbook de incidentes", "SLA y alertas", "Backlog de mejora continua"],
    risk: "La automatización funciona el día de la salida a producción, pero se degrada sin alertas, responsables claros ni aprendizaje operativo.",
  },
];

export const readinessChecklist = [
  "PRD del proceso aprobado antes de redactar la Spec",
  "Datos, fuentes, calidad y refresh documentados",
  "Modelado validado antes de crear DAX crítico",
  "Medidas DAX probadas contra criterios de aceptación",
  "RLS/OLS y permisos probados con usuarios reales",
  "Salida operativa validada con usuarios clave",
  "Versionado, UAT y checklist aprobados antes de publicar",
  "Publicación productiva con app, permisos y refresh configurados",
  "Operación monitoreada con métricas, incidentes y backlog",
];
