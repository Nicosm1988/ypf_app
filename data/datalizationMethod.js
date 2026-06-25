export const methodPrinciples = [
  {
    title: "Convención sobre configuración",
    text: "Pocas reglas claras, obligatorias y fáciles de recordar. El método debe ordenar sin volver lento al equipo.",
  },
  {
    title: "Objetivo antes que subjetivo",
    text: "El seguimiento se apoya en lead time, cycle time, iteraciones, actividad y uso real; no en esfuerzo declarado.",
  },
  {
    title: "Preparado para Copilot",
    text: "Nombres, carpetas y metadatos se diseñan para que Microsoft 365, búsqueda y Copilot encuentren el contexto correcto.",
  },
  {
    title: "Iterativo y versionado",
    text: "La versión 0.1 es punto de partida: se valida con el uso, se ajusta y cada cambio de plantilla queda trazado.",
  },
];

export const methodOperatingFlow = [
  {
    step: "Definir el estándar",
    what: "Un acuerdo mínimo sobre canales, carpetas, nombres, roles y evidencias obligatorias.",
    why: "Sin estándar, cada entrega depende de la memoria de quien la hizo y el equipo no puede sostener ni delegar.",
    purpose: "Crear una forma común de trabajar que sirva para proyectos nuevos, productos en vida e incorporación de integrantes.",
    how: "Aprobar la versión vigente del método, publicar plantillas y usarla como criterio de aceptación interno.",
    technical:
      "Metodología operativa versionada sobre Microsoft 365, con estructura PARA + Johnny.Decimal lite y catálogo cerrado de códigos.",
    functional: "Reglas simples para que cualquier integrante sepa dónde guardar, cómo nombrar, qué documentar y cuándo escalar.",
    example:
      "Antes de iniciar PRJ001, el equipo toma la plantilla vigente, crea la carpeta estándar y registra owner, alcance y versión aplicada.",
  },
  {
    step: "Organizar el plano DEV",
    what: "El Teams privado de Datalización funciona como taller de trabajo interno.",
    why: "Borradores, fuentes auxiliares, minutas y pruebas no deben mezclarse con productos publicados al negocio.",
    purpose: "Proteger la construcción, mejorar la búsqueda y ordenar la colaboración diaria sin exponer material inmaduro.",
    how: "Usar canales por naturaleza de trabajo, SharePoint como repositorio y metadatos para vincular proyectos con áreas.",
    technical: "Repositorio documental con permisos restringidos, versionado de SharePoint, canales controlados y naming estándar.",
    functional: "El equipo encuentra el contexto correcto sin preguntar quién lo tiene, en qué chat quedó o cuál archivo es el último.",
    example: "Una transcripción cruda queda en 99-Reuniones; la decisión aprobada se resume en una minuta curada dentro de 00-Gestion.",
  },
  {
    step: "Construir el proyecto",
    what: "Cada iniciativa usa una carpeta con las mismas doce zonas de evidencia.",
    why: "El valor del BI se pierde cuando datos, reglas, DAX, permisos, despliegue y soporte quedan dispersos.",
    purpose: "Hacer que el proyecto sea auditable, continuable y entendible por alguien que no participó de todas las reuniones.",
    how: "Completar PRD, Spec, fuentes, modelo, medidas, gobierno, calidad, visualización, código, despliegue y postventa.",
    technical: "Estructura documental que acompaña PBIX/PBIP, linaje, reglas de datos, release notes, permisos y rollback.",
    functional:
      "Negocio, BI y operación pueden revisar la misma historia: qué se pidió, qué se construyó, cómo se prueba y cómo se sostiene.",
    example: "La carpeta 09-Despliegue-VMC conserva release notes, checklist, links a la app, mapa de permisos y plan de vuelta atrás.",
  },
  {
    step: "Nombrar y versionar",
    what: "Cada activo lleva código, tipo, descripción, fecha y versión.",
    why: "Los nombres informales crean duplicados, versiones falsas y retrabajo cada vez que alguien necesita retomar un tema.",
    purpose: "Volver los activos legibles para personas, búsqueda, SharePoint, Copilot y futuras automatizaciones.",
    how: "Aplicar el patrón estándar, evitar espacios y tildes en archivos, usar fecha ISO y versionar hitos formales.",
    technical: "Convención compatible con orden alfabético, límites de path, historial de SharePoint y clasificación por sensibilidad.",
    functional: "El nombre del archivo cuenta suficiente contexto como para decidir si corresponde abrirlo, reemplazarlo o archivarlo.",
    example: "PRJ001_PRD_Tablero-Objetivos_2026-06-10_v2.docx identifica proyecto, tipo, tema, fecha y versión sin abrir el documento.",
  },
  {
    step: "Medir el flujo",
    what: "El Backlog v0 captura estado, responsable, etapa, fechas, producto vinculado y áreas impactadas.",
    why: "Las horas estimadas no prueban flujo ni valor; el equipo necesita señales objetivas sobre avance, espera y sostenimiento.",
    purpose: "Gestionar capacidad, prioridades, mantenimiento y salud de productos con evidencia operativa.",
    how: "Medir lead time, cycle time, iteraciones, actividad, antigüedad, uso real y cantidad de áreas involucradas.",
    technical: "SharePoint List como base transaccional inicial, preparada para vistas, Power BI y una futura PowerApp de ingreso.",
    functional: "La conversación deja de ser quién está ocupado y pasa a ser qué trabajo avanza, dónde se trabó y qué decisión falta.",
    example:
      "Un producto con muchas intervenciones post-publicación entra al radar como activo crítico, aunque nadie lo haya declarado urgente.",
  },
  {
    step: "Publicar y sostener",
    what: "VMC concentra los productos publicados, con workspaces, permisos, refresh, apps, soporte y mejora continua.",
    why: "Una entrega BI no termina en la salida a producción; termina cuando el producto se usa, se monitorea y mantiene controlada la operación.",
    purpose: "Separar construcción de consumo, proteger producción y preparar una arquitectura escalable sobre Fabric.",
    how: "Promover por DEV, TEST y PROD; documentar la publicación; validar permisos; monitorear incidentes; devolver mejoras al backlog.",
    technical: "Modelo de workspaces VMC, Lakehouse Bronze/Silver/Gold, deployment pipelines, release checklist y plan de rollback.",
    functional: "El negocio consume una app confiable y el equipo conserva una ruta clara para soporte, evolución y aprendizaje.",
    example:
      "La publicación a PROD se realiza después de UAT técnica y funcional, con responsables, links, permisos y rollback registrados.",
  },
];

export const methodPlanes = [
  {
    id: "dev",
    title: "DEV — Datalización",
    location: "Teams + SharePoint del equipo",
    purpose: "Producción interna: borradores, papeles de trabajo, PBIX/PBIP, código, documentación y minutas.",
    access: "Solo equipo de Datalización.",
    guardrail: "El Teams nunca es fuente de datos para tableros productivos.",
  },
  {
    id: "prod",
    title: "PROD — VMC",
    location: "Workspaces Power BI/Fabric",
    purpose: "Productos publicados que consume el negocio, con permisos, apps, refresh, soporte y operación.",
    access: "Organización o segmentos amplios según gobierno.",
    guardrail: "La publicación ocurre mediante TEST/PROD y no por archivos sueltos.",
  },
];

export const methodFunctionalLayers = [
  { layer: "Comunicación", tool: "Canales de Teams", use: "Conversaciones, reuniones y transcripciones en contexto." },
  { layer: "Documentos", tool: "SharePoint", use: "Archivos versionados, permisos y estructura común." },
  { layer: "Co-creación", tool: "Loop + páginas SharePoint", use: "PRD, Spec, minutas y acuerdos colaborativos." },
  { layer: "Seguimiento", tool: "SharePoint List", use: "Backlog v0 con estados, responsables y métricas objetivas." },
  { layer: "Conocimiento", tool: "OneNote", use: "Guías, manuales, snippets DAX y aprendizaje reutilizable." },
  { layer: "IA contextual", tool: "Copilot Notebooks", use: "Segundo cerebro por iniciativa, alimentado por activos bien nombrados." },
];

export const methodChannels = [
  { code: "General", title: "Anuncios e incorporación", group: "Entrada" },
  { code: "00", title: "Metodo-Datalizacion", group: "Método, PRD, plantillas y estándares" },
  { code: "10", title: "Proyectos-Activos", group: "Desarrollo vivo" },
  { code: "20", title: "Productos-En-Vida", group: "Producción y mantenimiento" },
  { code: "30", title: "Areas-Negocio", group: "Conocimiento por dominio" },
  { code: "40", title: "Recursos", group: "Plantillas, fuentes, snippets y capacitación" },
  { code: "50", title: "Archivo", group: "Histórico cerrado" },
  { code: "90", title: "Admin-Equipo", group: "Gestión interna y métricas" },
];

export const methodProjectFolders = [
  { code: "00", name: "Gestion", purpose: "Minutas curadas, decisiones, acuerdos y acciones." },
  { code: "01", name: "PRD-SPEC", purpose: "Problema, necesidad, alcance, criterios de éxito y definición técnica." },
  { code: "02", name: "Datos-Fuentes", purpose: "Orígenes, conexiones, diccionario de datos y linaje de fuentes." },
  { code: "03", name: "Modelado", purpose: "Modelo semántico, relaciones y documentación de Power Query." },
  { code: "04", name: "DAX-Medidas", purpose: "Librería de medidas, lógica de negocio y reglas de cálculo." },
  { code: "05", name: "Gobierno-Datos", purpose: "Dueños, sensibilidad, linaje y mapeo Bronze/Silver/Gold." },
  { code: "06", name: "Calidad-Datos", purpose: "Reglas, controles, monitoreo y evidencia de confiabilidad." },
  { code: "07", name: "Visualizacion", purpose: "PBIX/PBIP DEV como fuente controlada del producto BI." },
  { code: "08", name: "Codigo", purpose: "Notebooks, scripts, repositorios y automatizaciones auxiliares." },
  { code: "09", name: "Despliegue-VMC", purpose: "Release notes, links, permisos, checklist, performance y rollback." },
  { code: "10", name: "Postventa", purpose: "Manuales, capacitación, soporte, feedback y operación del producto." },
  { code: "99", name: "Reuniones", purpose: "Grabaciones, transcripciones y chats crudos para consulta o auditoría." },
];

export const methodNaming = {
  pattern: "[CODIGO]_[TIPO]_[Descripcion-corta]_[YYYY-MM-DD]_v[N].[ext]",
  examples: [
    "PRJ001_MIN_KickOff-MidGas_2026-06-03_v1.docx",
    "PRJ001_PRD_Tablero-Objetivos_2026-06-10_v2.docx",
    "PRJ001_PBIP_Objetivos-MidGas_2026-06-19_v3.pbip",
    "MET_TPL_Estructura-Proyecto_2026-06-24_v1.md",
  ],
  rules: [
    "Sin tildes ni ñ.",
    "Sin espacios: guiones dentro de palabras y guion bajo entre bloques.",
    "Fecha ISO YYYY-MM-DD para ordenar alfabéticamente.",
    "Versión v1, v2, v3; prohibido vFinal o variantes informales.",
    "Máximo 80 caracteres por límite de path en SharePoint.",
    "Sufijo _CONF antes de la extensión para archivos clasificados.",
  ],
};

export const methodTypeCatalog = [
  ["MIN", "Minuta curada"],
  ["PRD", "Documento de requerimientos de producto"],
  ["SPEC", "Especificación técnica"],
  ["PBIX/PBIP", "Power BI"],
  ["XLS", "Excel papel de trabajo"],
  ["DAX", "Librería de medidas"],
  ["PQ", "Power Query"],
  ["MOD", "Documentación de modelo"],
  ["TRX", "Transcripción"],
  ["REL", "Release notes"],
  ["MAN", "Manual de usuario"],
  ["TPL", "Plantilla"],
  ["NB", "Notebook"],
  ["COD", "Código fuente"],
  ["IMG", "Captura o imagen"],
  ["PPT", "Presentación"],
];

export const methodCodeCatalog = [
  { prefix: "PRJ###", use: "Proyecto activo", example: "PRJ001" },
  { prefix: "PRD###", use: "Producto publicado en VMC", example: "PRD001" },
  { prefix: "ARE###", use: "Área de negocio", example: "AREMDG, ARELOG" },
  { prefix: "MET", use: "Método transversal", example: "MET_TPL_Estructura-Proyecto" },
];

export const methodBacklogColumns = [
  "Proyecto",
  "Tipo de trabajo",
  "Responsable",
  "Estado",
  "Etapa metodología",
  "Fecha creación",
  "Fecha en curso",
  "Fecha hecho",
  "Áreas impactadas",
  "Producto vinculado",
  "Notas",
];

export const methodObjectiveSignals = [
  { avoid: "Horas estimadas", prefer: "Lead time desde creación hasta hecho" },
  { avoid: "Esfuerzo S/M/L", prefer: "Cycle time por etapa" },
  { avoid: "Complejidad percibida", prefer: "Iteraciones y validaciones" },
  { avoid: "Trabajé mucho", prefer: "Cambios en historial de SharePoint" },
  { avoid: "Es urgente", prefer: "Antigüedad en backlog y fecha compromiso" },
  { avoid: "Importancia declarada", prefer: "Usuarios, sesiones y áreas impactadas" },
];

export const methodTeamMetrics = [
  "Throughput por persona y por etapa.",
  "Mix de trabajo: creación, mantenimiento, investigación y reuniones.",
  "Lead time y cycle time por proyecto.",
  "Health de proyectos activos y alertas de inactividad.",
  "Productos más mantenidos como señal de criticidad real.",
];

export const methodVmcModel = {
  workspaces: ["VMC-Datalizacion-[Dominio]-DEV", "VMC-Datalizacion-[Dominio]-TEST", "VMC-Datalizacion-[Dominio]-PROD"],
  lakehouse: ["bronze_[dominio]_[fuente]", "silver_[dominio]_[entidad]", "gold_[dominio]_[modelo]"],
  lifecycle: [
    "PRD y Spec en Datalización",
    "Desarrollo PBIP en Visualización",
    "Validación controlada con negocio",
    "Deploy a TEST en VMC",
    "UAT técnica y funcional",
    "Promoción a PROD por pipeline",
    "App publicada a usuarios",
    "Mantenimiento vuelve al ciclo",
  ],
  deploymentFolder: ["Release notes", "Links a workspace y app", "Checklist de pre-publicación", "Mapa de permisos", "Rollback plan"],
};

export const methodRoles = [
  { role: "Owner del método", responsibility: "Mantener el documento, evolucionar plantillas y coordinar cambios." },
  { role: "Owner del catálogo de códigos", responsibility: "Aprobar nuevos códigos PRJ, PRD, ARE y MET." },
  { role: "Owner de proyecto", responsibility: "Mantener carpeta, README, minutas, release notes y trazabilidad." },
  { role: "Owner de producto en vida", responsibility: "Gestionar mantenimiento, feedback y operación post-publicación." },
  { role: "Owner del Backlog", responsibility: "Cuidar la calidad de datos de seguimiento y sus vistas." },
];

export const methodRoadmap = [
  { moment: "Semana 1", focus: "Decisiones de fondo", deliverable: "Aprobación del método, Teams y canales creados." },
  { moment: "Semana 1", focus: "Plantillas", deliverable: "Estructura de proyecto, naming y catálogo de códigos." },
  { moment: "Semana 2", focus: "Migración piloto", deliverable: "Caso MidGas migrado con estándar completo." },
  { moment: "Semana 2", focus: "Seguimiento", deliverable: "Backlog Datalización v0 y primer tablero del equipo." },
  { moment: "Semana 3", focus: "Adopción", deliverable: "Capacitación de 1 hora, retro y ajustes." },
  { moment: "Semana 3", focus: "Gobernanza interna", deliverable: "Roles asignados y owner del catálogo definido." },
  { moment: "Mes 2", focus: "VMC", deliverable: "Propuesta de workspaces y Lakehouse Fabric." },
  { moment: "Mes 2-3", focus: "PBIP + Git", deliverable: "Equipo preparado para trabajar en formato versionable." },
];

export const methodFutureBacklog = [
  ["v0.2", "PowerApp de ingreso al Backlog"],
  ["v0.2", "Automatización para mover transcripciones externas"],
  ["v0.2", "Alerta de inactividad a 60 días en productos"],
  ["v0.2", "Catálogo de medidas DAX reutilizables"],
  ["v0.3", "Impacto económico con tres niveles de evidencia"],
  ["v0.3", "Fabric Lakehouse Datalización Bronze/Silver/Gold"],
  ["v0.3", "Deployment Pipelines DEV → TEST → PROD"],
  ["v0.4", "Migración de fuentes SharePoint/Excel a Bronze"],
  ["v0.4", "Propuesta de gobierno de datos corporativo"],
];

export const methodDecisions = [
  "Teams privado con SharePoint detrás como base.",
  "PARA + Johnny.Decimal lite con huecos numéricos.",
  "Proyectos en 10-Proyectos-Activos y áreas por metadata.",
  "Plantilla intra-proyecto versionada.",
  "README mínimo por subcarpeta.",
  "Naming estándar con código, tipo, descripción, fecha y versión.",
  "Minutas curadas separadas de reuniones crudas.",
  "Backlog sin horas estimadas ni esfuerzo subjetivo.",
  "Doble plano DEV Datalización y PROD VMC.",
  "Lakehouse Fabric propuesto con arquitectura medallion.",
];

export const methodPendingDecisions = [
  "Confirmar formalmente si VMC corre sobre Microsoft Fabric.",
  "Confirmar disponibilidad de Deployment Pipelines.",
  "Definir owner del catálogo de códigos.",
  "Definir owner del Backlog.",
  "Validar convención previa de workspaces con IT.",
  "Identificar equipo corporativo de gobierno de datos.",
];
