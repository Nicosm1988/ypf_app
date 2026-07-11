const verifiedAt = "2026-07-10";

export const practiceSources = Object.freeze({
  B01: source(
    "Planificación de una solución de BI",
    "https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-bi-strategy-bi-solution-planning",
  ),
  B02: source("Buenas prácticas de Power Query", "https://learn.microsoft.com/en-us/power-query/best-practices"),
  B03: source("Guía de query folding", "https://learn.microsoft.com/en-us/power-bi/guidance/power-query-folding"),
  B04: source(
    "Actualización incremental y datos en tiempo real",
    "https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview",
  ),
  B05: source("Esquema estrella en Power BI", "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"),
  B06: source(
    "Guía de filtrado bidireccional",
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering",
  ),
  B07: source(
    "Técnicas de reducción de datos para modelos Import",
    "https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction",
  ),
  B08: source("Guía de modelos DirectQuery", "https://learn.microsoft.com/en-us/power-bi/guidance/directquery-model-guidance"),
  B09: source("Información general sobre DAX", "https://learn.microsoft.com/en-us/dax/dax-overview"),
  B10: source("Uso de variables en expresiones DAX", "https://learn.microsoft.com/en-us/dax/best-practices/dax-variables"),
  B11: source("Guía de seguridad de nivel de fila", "https://learn.microsoft.com/en-us/power-bi/guidance/rls-guidance"),
  B12: source(
    "Etiquetas de confidencialidad en Power BI",
    "https://learn.microsoft.com/en-us/fabric/enterprise/powerbi/service-security-sensitivity-label-overview",
  ),
  B13: source(
    "Diseñar informes accesibles",
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-creating-reports",
  ),
  B14: source(
    "Analizador de rendimiento de Power BI Desktop",
    "https://learn.microsoft.com/en-us/power-bi/create-reports/performance-analyzer",
  ),
  B15: source("Proyectos de Power BI Desktop (PBIP)", "https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-overview"),
  B16: source(
    "Planificar el despliegue de contenido",
    "https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-deploy",
  ),
  B17: source(
    "Crear y distribuir una app de Power BI",
    "https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps",
  ),
  B18: source(
    "Auditoría y monitoreo a nivel de datos",
    "https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-auditing-monitoring-data-level-auditing",
  ),
  B19: source(
    "Planificación y monitoreo de gateways",
    "https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-data-gateways",
  ),
  B20: source("Aplicación Microsoft Fabric Capacity Metrics", "https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app"),
  B21: source("Diagnósticos de consultas de Power Query", "https://learn.microsoft.com/en-us/power-query/query-diagnostics"),
  C01: source(
    "Power Platform Well-Architected",
    "https://learn.microsoft.com/en-us/power-platform/well-architected/what-is-power-well-architected",
  ),
  C02: source(
    "Identificar flujos de usuario y de sistema",
    "https://learn.microsoft.com/en-us/power-platform/well-architected/reliability/identify-flows",
  ),
  C03: source(
    "Estrategia de monitoreo y alertas",
    "https://learn.microsoft.com/en-us/power-platform/well-architected/reliability/monitoring-alerting-strategy",
  ),
  C04: source("Ambientes de Power Platform", "https://learn.microsoft.com/en-us/power-platform/admin/environments-overview"),
  C05: source("Políticas de datos de Power Platform", "https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention"),
  C06: source("ALM con Microsoft Power Platform", "https://learn.microsoft.com/en-us/power-platform/alm/"),
  C07: source("Estrategia de ambientes para ALM", "https://learn.microsoft.com/en-us/power-platform/alm/environment-strategy-alm"),
  C08: source("Pipelines en Power Platform", "https://learn.microsoft.com/en-us/power-platform/alm/pipelines"),
  C09: source("Variables de entorno", "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables"),
  C10: source("Seguridad basada en roles de Dataverse", "https://learn.microsoft.com/en-us/power-platform/admin/database-security"),
  C11: source(
    "Soluciones administradas y validación UAT",
    "https://learn.microsoft.com/en-us/power-platform/alm/move-from-unmanaged-managed-alm",
  ),
  A01: source("Planificar un proyecto de Power Apps", "https://learn.microsoft.com/en-us/training/modules/plan-app-project/"),
  A02: source(
    "Introducción a las aplicaciones basadas en modelos",
    "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview",
  ),
  A03: source("Crear canvas apps accesibles", "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/accessible-apps"),
  A04: source("Crear canvas apps responsivas", "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/build-responsive-apps"),
  A05: source(
    "Guías de diseño de aplicaciones Power Apps",
    "https://learn.microsoft.com/en-us/power-apps/guidance/coding-guidelines/app-design-guidelines",
  ),
  A06: source("Componentes de canvas apps", "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/create-component"),
  A07: source("Delegación en canvas apps", "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview"),
  A08: source(
    "Optimización de código de Power Apps",
    "https://learn.microsoft.com/en-us/power-apps/guidance/coding-guidelines/code-optimization",
  ),
  A09: source("Manejo de errores en Power Apps", "https://learn.microsoft.com/en-us/power-apps/guidance/coding-guidelines/error-handling"),
  A10: source(
    "Integrar cloud flows con Power Apps",
    "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/integrating-cloud-flows-power-apps",
  ),
  A11: source("Test Studio", "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/test-studio"),
  A12: source("Live Monitor para canvas apps", "https://learn.microsoft.com/en-us/power-apps/maker/monitor-canvasapps"),
  A13: source(
    "Herramientas para medir performance",
    "https://learn.microsoft.com/en-us/power-platform/architecture/key-concepts/performance/tools",
  ),
  A14: source(
    "Métricas y recomendaciones de Power Apps",
    "https://learn.microsoft.com/en-us/power-platform/admin/monitoring/monitor-power-apps",
  ),
  A15: source("Admin Analytics for Power Apps", "https://learn.microsoft.com/en-us/power-platform/admin/analytics-powerapps"),
  A16: source("Compartir una canvas app", "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/share-app"),
  T01: source(
    "Planificar un proyecto de Power Automate",
    "https://learn.microsoft.com/en-us/power-automate/guidance/planning/planning-phase",
  ),
  T02: source("Definir entradas y salidas", "https://learn.microsoft.com/en-us/power-automate/guidance/planning/define-input-output"),
  T03: source("Diseño del proceso", "https://learn.microsoft.com/en-us/power-automate/guidance/planning/process-design"),
  T04: source(
    "Elegir métodos de automatización",
    "https://learn.microsoft.com/en-us/power-automate/guidance/planning/determine-automation-methods",
  ),
  T05: source(
    "Analizar y evaluar una automatización",
    "https://learn.microsoft.com/en-us/power-automate/guidance/planning/analyze-and-assess",
  ),
  T06: source(
    "Optimizar triggers de Power Automate",
    "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/optimize-power-automate-triggers",
  ),
  T07: source("Límites de cloud flows", "https://learn.microsoft.com/en-us/power-automate/limits-and-config"),
  T08: source("Organizar flows con scopes", "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/create-scopes"),
  T09: source("Crear child flows", "https://learn.microsoft.com/en-us/power-automate/create-child-flows"),
  T10: source(
    "Manejo de errores en Power Automate",
    "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/error-handling",
  ),
  T11: source(
    "Proteger entradas y salidas sensibles",
    "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-secure-inputs-outputs-triggers",
  ),
  T12: source(
    "Ownership y acceso a flows",
    "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/understand-access-to-flows",
  ),
  T13: source(
    "Beneficios de los solution-aware flows",
    "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/understand-benefits-solution-aware-flows",
  ),
  T14: source(
    "Monitoreo y alertas de Power Automate",
    "https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/monitoring-and-alerting",
  ),
  T15: source(
    "Buenas prácticas para desktop flows",
    "https://learn.microsoft.com/en-us/power-automate/desktop-flows/run-desktop-flows-best-practices",
  ),
  T16: source("Administrar machine groups", "https://learn.microsoft.com/en-us/power-automate/desktop-flows/manage-machine-groups"),
  T17: source("Service principal como owner de un flow", "https://learn.microsoft.com/en-us/power-automate/service-principal-support"),
  T18: source("Referencia de errores de cloud flows", "https://learn.microsoft.com/en-us/power-automate/error-reference"),
});

function source(label, url) {
  return Object.freeze({ label, url, publisher: "Microsoft Learn", verifiedAt });
}
