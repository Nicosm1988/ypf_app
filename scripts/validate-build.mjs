import { access, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import {
  datalitoAnswerModes,
  datalitoEvaluationQuestions,
  datalitoGovernanceControls,
  datalitoKnowledgeSources,
  datalitoKpis,
  datalitoNoAnswerCases,
  datalitoProductPrinciples,
  datalitoSecurityCases,
  datalitoSourceSchema,
} from "../data/datalito.js";
import {
  designSystemBenefits,
  designSystemComparison,
  designSystemComponents,
  designSystemDeliverables,
  designSystemFoundations,
  designSystemPrinciples,
  designSystemQualityRules,
  designSystemScope,
} from "../data/designSystem.js";
import { dictionaryCategories, dictionaryTerms } from "../data/dictionary.js";
import { guideSections, prdSpecComparison, readinessChecklist } from "../data/engineeringGuide.js";
import {
  dmaicStages,
  leanPractices,
  methodologyCadence,
  methodologyProcessFlow,
  methodologyPrinciples,
  methodologyTools,
  oeeFactors,
  toyotaFourP,
} from "../data/methodology.js";
import {
  platformBeforeAfter,
  platformCapabilityShift,
  platformDefinitionCards,
  platformHeroMetrics,
  platformPillars,
} from "../data/platformIntro.js";
import { powerBiShortcuts, shortcutsPdf } from "../data/powerbiShortcuts.js";
import { conceptDecantation, pageNarratives } from "../data/executiveNarrative.js";
import {
  methodChannels,
  methodEvaluationModel,
  methodNaming,
  methodOperatingFlow,
  methodPlanes,
  methodProjectFolders,
} from "../data/datalizationMethod.js";
import { products } from "../data/powerPlatformProducts.js";
import { powerBiFlowCopy, roadmapPhases } from "../data/roadmap.js";
import { toolingDocs, toolingGroups } from "../data/toolingLibrary.js";

const requiredTermFields = ["id", "term", "category", "definition", "whyItMatters", "example", "risk"];
const requiredPhaseFields = ["id", "title", "lane", "objective", "keyActivities", "deliverables", "owner", "riskIfSkipped", "gate"];
const requiredProductPhaseFields = [
  "id",
  "title",
  "objective",
  "keyActivities",
  "deliverables",
  "owner",
  "riskIfSkipped",
  "gate",
  "targetOutcome",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function hasFields(item, fields) {
  return fields.every((field) => {
    const value = item[field];
    return Array.isArray(value) ? value.length > 0 : value !== undefined && value !== null && value !== "";
  });
}

const indexHtml = await readFile("index.html", "utf8");
const appJs = await readFile("app.js", "utf8");
const stylesCss = await readFile("styles.css", "utf8");
const serviceWorkerJs = await readFile("service-worker.js", "utf8");
const vercelJson = JSON.parse(await readFile("vercel.json", "utf8"));

assert(indexHtml.includes("Datalización YPF"), "index.html debe exponer el nombre del producto.");
assert(indexHtml.includes('type="module" src="/app.js"'), "index.html debe cargar app.js como modulo.");
assert(appJs.includes("renderDictionaryPage"), "app.js debe renderizar el diccionario.");
assert(appJs.includes("renderRoadMethodologyPage"), "app.js debe renderizar Road y Metodología como sección unificada.");
assert(appJs.includes("renderDatalizationMethodPage"), "app.js debe renderizar el Método de Datalización.");
assert(appJs.includes("renderDesignSystemPage"), "app.js debe renderizar el Design System.");
assert(appJs.includes("renderDatalitoPage"), "app.js debe renderizar Datalito.");
assert(appJs.includes("renderDatalitoGlobalShell"), "app.js debe montar el launcher global de Datalito.");
assert(appJs.includes("renderDatalitoAvatar"), "Datalito debe usar un avatar propio.");
assert(appJs.includes("buildDatalitoConversationalResponse"), "Datalito debe manejar conversación natural antes del retrieval.");
assert(appJs.includes("buildDatalitoWorkflowResponse"), "Datalito debe responder flujos BI end-to-end con criterio propio.");
assert(appJs.includes("scrollToRouteHash"), "Los enlaces de Datalito deben navegar a la seccion exacta de la plataforma.");
assert(appJs.includes("renderMethodologyProcessFlow"), "app.js debe renderizar el proceso metodológico end to end.");
assert(appJs.includes("renderFabricMasterGuide"), "app.js debe renderizar la guía maestra Fabric end-to-end.");
assert(appJs.includes('id="road-fabric-master-guide"'), "La guía maestra Fabric debe tener ancla propia.");
assert(appJs.includes("fabric-route-layer"), "La guía Fabric debe incluir caminos dinámicos de recorrido.");
assert(appJs.includes("syncFabricRoutes"), "La guía Fabric debe recalcular caminos según los anclajes reales.");
assert(!appJs.includes("process-consumption"), "La guía Fabric no debe dibujar flujo directo desde procesamiento hacia consumo.");
assert(appJs.includes("flow-arrival"), "Los bloques Fabric deben iluminarse cuando llega el flujo.");
assert(
  !appJs.includes("fabric-processing-card flow-arrival"),
  "Las tarjetas chicas de procesamiento no deben iluminarse con la llegada del flujo.",
);
assert(
  !appJs.includes("flow-arrival-direct-lake") && !appJs.includes("flow-arrival-power-bi"),
  "El consumo Direct Lake no debe formar parte de la iluminación automática del flujo principal.",
);
assert(
  appJs.includes("Cada modo define la velocidad de consulta"),
  "La comparativa Fabric debe explicar la relación modo, velocidad y frescura.",
);
assert(appJs.includes("renderFabricArchitectureLayer"), "La guía Fabric debe incluir la Capa 2 de arquitectura end-to-end.");
assert(appJs.includes("road-fabric-architecture-layer"), "La Capa 2 de arquitectura Fabric debe tener ancla propia.");
assert(appJs.includes("La causalidad es deliberada"), "La Capa 2 debe explicar la causalidad de la arquitectura.");
assert(
  appJs.includes("architectureIngestion") && appJs.includes("architectureConsumption"),
  "La arquitectura Fabric debe usar iconos compuestos alineados al esquema original.",
);
assert(
  appJs.includes("fabric-architecture-gap"),
  "La arquitectura Fabric debe cortar el flujo visual entre almacenamiento y procesamiento.",
);
assert(appJs.includes("renderFabricArchitectureConnector"), "La arquitectura Fabric debe usar conectores entre limites de bloque.");
assert(!appJs.toLowerCase().includes("notebooklm"), "La guía maestra Fabric no debe incluir marca NotebookLM.");
assert(indexHtml.includes("/road-y-metodologia"), "La navegación principal debe exponer Road y Metodología.");
assert(
  !indexHtml.includes("Guía + Roadmap") && !indexHtml.includes('href="/metodologia"'),
  "La navegación principal no debe separar guía y metodología.",
);
assert(indexHtml.includes("nav-dropdown"), "El menú principal debe incluir dropdowns por sección.");
const mainNavMarkup = indexHtml.match(/<nav class="main-nav"[\s\S]*?<\/nav>/)?.[0] || "";
const topLevelNavLinks = [...mainNavMarkup.matchAll(/<a class="nav-menu-link" href="([^"]+)"[^>]*>([^<]+)<\/a>/g)].map(
  ([, href, label]) => ({ href, label: label.trim() }),
);
const productsTopLevelLinks = topLevelNavLinks.filter((link) => link.label === "Productos");
assert(productsTopLevelLinks.length === 1, "La navegación principal debe incluir un único ítem top-level Productos.");
assert(productsTopLevelLinks[0].href === "/productos", "El ítem top-level Productos debe enlazar a /productos.");
assert(!topLevelNavLinks.some((link) => link.label === "Recursos"), "Recursos no debe ocupar un segundo slot top-level.");
assert(
  [
    ["/productos/power-bi", "Microsoft Power BI"],
    ["/productos/power-apps", "Microsoft Power Apps"],
    ["/productos/power-automate", "Microsoft Power Automate"],
  ].every(([href, label]) => mainNavMarkup.includes(`href="${href}"`) && mainNavMarkup.includes(`<strong>${label}</strong>`)),
  "El dropdown Productos debe incluir las tres rutas y nombres oficiales.",
);
assert(indexHtml.includes("/assets/ypf-logo.svg"), "La navegación debe usar el logo original de YPF como asset.");
assert(indexHtml.includes("/road-y-metodologia/oee-bi"), "El menú debe exponer subsecciones como rutas navegables.");
assert(indexHtml.includes("/road-y-metodologia/fabric-end-to-end"), "El menú debe exponer la guía maestra Fabric como subsección.");
assert(indexHtml.includes("/road-y-metodologia/arquitectura-fabric"), "El menú debe exponer la Capa 2 Fabric como subsección.");
assert(!indexHtml.includes("Capa 2 Fabric"), "La navegación visible no debe mostrar el rótulo Capa 2.");
assert(indexHtml.includes("footer-map"), "El footer debe incluir un mapa de secciones.");
assert(indexHtml.includes('<a href="/productos" data-route>Productos</a>'), "El footer debe enlazar al catálogo de Productos.");
assert(appJs.includes("renderProductsPage"), "app.js debe renderizar el catálogo de Productos.");
assert(appJs.includes("renderProductDetailPage"), "app.js debe compartir un renderer para las fichas de producto.");
assert(appJs.includes("renderNineGateFlow"), "app.js debe compartir el renderer de nueve gates.");
assert(appJs.includes(".products-page") || appJs.includes('class="page products-page"'), "El catálogo debe exponer .products-page.");
assert(appJs.includes("product-detail-page"), "Las fichas deben exponer .product-detail-page.");
assert(
  ["/productos", "/productos/power-bi", "/productos/power-apps", "/productos/power-automate"].every((route) => appJs.includes(route)),
  "app.js debe registrar el catálogo y las tres fichas de Productos.",
);
assert(appJs.includes("renderExecutiveBrief"), "app.js debe renderizar la síntesis ejecutiva.");
assert(appJs.includes("renderPlatformExecutiveSection"), "app.js debe renderizar la sección ejecutiva inicial.");
assert(appJs.includes("renderHubSectionLauncher"), "app.js debe renderizar la botonera de secciones.");
assert(appJs.includes("renderConceptDecantation"), "app.js debe renderizar el árbol de decantación conceptual.");
assert(appJs.includes("renderRoadmapPage"), "app.js debe mantener compatibilidad con /roadmap.");
assert(appJs.includes("renderRoadMethodologyPage"), "app.js debe renderizar la guía, roadmap y metodología como una sección unificada.");
assert(appJs.includes("renderProjectPage"), "app.js debe renderizar el proyecto Power BI.");
assert(appJs.includes("renderShortcutsPage"), "app.js debe renderizar los atajos Power BI.");
assert(appJs.includes("renderToolingPage"), "app.js debe renderizar librerías y agentes.");
assert(appJs.includes("renderMethodEvaluationModel"), "El Método debe integrar el Modelo de Evaluación de Datalización.");
assert(appJs.includes('id="modelo-evaluacion-datalizacion"'), "El módulo de evaluación debe tener ancla #modelo-evaluacion-datalizacion.");
assert(
  !indexHtml.includes("/que-es-datalizacion") &&
    !indexHtml.includes("/pilares-datalizacion") &&
    !indexHtml.includes("/intake-aprobacion") &&
    !indexHtml.includes("/indice-datalizacion") &&
    !indexHtml.includes("/ponderacion-esfuerzo") &&
    !indexHtml.includes("/metadata-documentacion"),
  "La navegación principal no debe fragmentar el marco de datalización en páginas separadas.",
);

assert(methodEvaluationModel.pillars.length === 5, "El modelo debe tener cinco pilares.");
assert(
  methodEvaluationModel.pillars.every((pillar) => pillar.weight === 20 && pillar.definition && pillar.implies && pillar.evidence),
  "Cada pilar debe tener peso 20%, definición, implicancia y evidencia.",
);
assert(methodEvaluationModel.pillars.reduce((total, pillar) => total + pillar.weight, 0) === 100, "Los pilares deben sumar 100%.");
assert(
  methodEvaluationModel.definition.includes("Datalizar no es simplemente automatizar"),
  "El modelo debe incluir la definición actualizada.",
);
assert(methodEvaluationModel.scope.includes("VMC") && !methodEvaluationModel.scope.includes("BMC"), "El alcance debe usar VMC, no BMC.");
assert(methodEvaluationModel.intake.states.length === 5, "El intake debe incluir cinco estados.");
assert(methodEvaluationModel.intake.criteria.length >= 7, "El intake debe incluir criterios mínimos.");
assert(methodEvaluationModel.index.formula.includes("Peso del pilar"), "El índice debe explicar la fórmula base.");
assert(methodEvaluationModel.weighting.variables.length === 4, "La ponderación debe incluir cuatro variables.");
assert(methodEvaluationModel.metadataFields.length >= 20, "La metadata mínima debe incluir los campos requeridos.");

assert(dictionaryCategories.length >= 15, "El diccionario debe incluir categorías de producto, Fabric, performance y operación.");
assert(dictionaryTerms.length >= 65, "El diccionario debe incluir al menos 65 términos.");
assert(
  dictionaryTerms.every((term) => hasFields(term, requiredTermFields)),
  "Cada término debe tener todos los campos requeridos.",
);
assert(new Set(dictionaryTerms.map((term) => term.id)).size === dictionaryTerms.length, "Los ids del diccionario deben ser únicos.");
assert(
  dictionaryTerms.some((term) => term.id === "prd"),
  "El diccionario debe incluir PRD.",
);
assert(
  dictionaryTerms.some((term) => term.id === "spec-producto-tecnica"),
  "El diccionario debe incluir Spec.",
);

assert(roadmapPhases.length === 9, "El roadmap debe incluir exactamente los 9 gates de ingeniería.");
assert(
  roadmapPhases.every((phase) => hasFields(phase, requiredPhaseFields)),
  "Cada fase debe tener todos los campos requeridos.",
);
assert(
  roadmapPhases.every((phase, index) => phase.id === index),
  "Los gates deben estar numerados de 0 a 8.",
);
assert(normalizeForCheck(roadmapPhases[0].title).includes("prd"), "El roadmap debe comenzar con PRD y Spec.");

const expectedProducts = [
  {
    slug: "power-bi",
    officialName: "Microsoft Power BI",
    route: "/productos/power-bi",
    iconSha256: "264abad01f50acaffb697b3ede22215b7d87f387c1af92f0a0b14117d2c2e4f1",
  },
  {
    slug: "power-apps",
    officialName: "Microsoft Power Apps",
    route: "/productos/power-apps",
    iconSha256: "c357907ad0a2d24a6d8c82b23fe4d2aaa4a4524076991f74770fc043a4cc455a",
  },
  {
    slug: "power-automate",
    officialName: "Microsoft Power Automate",
    route: "/productos/power-automate",
    iconSha256: "2025db7bb3feec49d75681934b8561fb958cf11bdf0e2acf6e2b28db5c755e8d",
  },
];
assert(Array.isArray(products) && products.length === 3, "Productos debe incluir exactamente tres productos.");
assert(
  products.map((product) => product.slug).join("|") === expectedProducts.map((product) => product.slug).join("|"),
  "Productos debe mantener el orden Power BI, Power Apps y Power Automate.",
);
assert(new Set(products.map((product) => product.slug)).size === products.length, "Los slugs de Productos deben ser únicos.");
assert(new Set(products.map((product) => product.route)).size === products.length, "Las rutas de Productos deben ser únicas.");

for (const expectedProduct of expectedProducts) {
  const product = products.find((item) => item.slug === expectedProduct.slug);
  assert(product, `Falta el producto ${expectedProduct.officialName}.`);
  assert(product.officialName === expectedProduct.officialName, `${expectedProduct.slug} debe usar el nombre oficial.`);
  assert(product.route === expectedProduct.route, `${expectedProduct.officialName} debe usar la ruta ${expectedProduct.route}.`);
  assert(product.category && product.tagline, `${expectedProduct.officialName} debe incluir categoría y propósito.`);
  assert(Array.isArray(product.phases) && product.phases.length === 9, `${expectedProduct.officialName} debe incluir nueve gates.`);
  assert(
    product.phases.every((phase, index) => phase.id === index),
    `${expectedProduct.officialName} debe numerar sus gates con ids de 0 a 8.`,
  );
  assert(
    product.phases.every((phase) => hasFields(phase, requiredProductPhaseFields)),
    `${expectedProduct.officialName} debe completar todos los campos obligatorios de cada gate.`,
  );
  assert(
    product.phases.every(
      (phase) =>
        Array.isArray(phase.keyActivities) && phase.keyActivities.length && Array.isArray(phase.deliverables) && phase.deliverables.length,
    ),
    `${expectedProduct.officialName} debe incluir actividades y entregables no vacíos en cada gate.`,
  );
  assert(
    Array.isArray(product.crossCuttingControls) && product.crossCuttingControls.length,
    `${expectedProduct.officialName} debe incluir controles transversales.`,
  );
  assert(
    Array.isArray(product.commonControls) &&
      product.commonControls.length > 0 &&
      Array.isArray(product.specificControls) &&
      product.specificControls.length > 0 &&
      product.crossCuttingControls.length === product.commonControls.length + product.specificControls.length,
    `${expectedProduct.officialName} debe distinguir controles comunes y específicos sin crear gates adicionales.`,
  );
  assert(
    typeof product.iconPath === "string" &&
      product.iconPath.startsWith("/assets/microsoft/power-platform/") &&
      product.iconPath.endsWith(".svg") &&
      !/^https?:\/\//i.test(product.iconPath) &&
      !product.iconPath.startsWith("//"),
    `${expectedProduct.officialName} debe usar un SVG local de un paquete oficial documentado de Microsoft.`,
  );
  const iconBuffer = await readFile(product.iconPath.slice(1));
  const iconSha256 = createHash("sha256").update(iconBuffer).digest("hex");
  assert(
    iconSha256 === expectedProduct.iconSha256,
    `${expectedProduct.officialName} debe conservar byte a byte el SVG oficial documentado.`,
  );
}

const powerBiProduct = products.find((product) => product.slug === "power-bi");
assert(powerBiProduct.phases === roadmapPhases, "Microsoft Power BI debe referenciar roadmapPhases sin duplicar sus gates.");
assert(
  powerBiProduct.flowCopy === powerBiFlowCopy,
  "Microsoft Power BI debe compartir también la introducción visual del flujo fuente.",
);
assert(
  ["Reliability", "Security", "Operational Excellence", "Performance Efficiency", "Experience Optimization"].every((pillar) =>
    appJs.includes(pillar),
  ),
  "Productos debe presentar los cinco pilares de Power Platform Well-Architected como controles transversales.",
);
const serviceWorkerCacheVersion = Number(
  serviceWorkerJs.match(/^const CACHE_NAME = "datalizacion-ypf-v(\d+)";$/m)?.[1],
);
assert(serviceWorkerCacheVersion >= 37, "El service worker debe declarar una caché vigente para Productos.");
assert(
  serviceWorkerJs.includes("keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))"),
  "El service worker debe eliminar cachés anteriores durante la activación.",
);
assert(
  ["/productos", ...expectedProducts.map((product) => product.route), "/data/powerPlatformProducts.js"].every((path) =>
    serviceWorkerJs.includes(`"${path}"`),
  ),
  "El service worker debe precachear las rutas y el módulo de Productos.",
);
assert(
  products.every((product) => serviceWorkerJs.includes(`"${product.iconPath}"`)),
  "El service worker debe precachear los tres iconos de producto.",
);
const productIconCss = [...stylesCss.matchAll(/\.product-official-icon[^{]*\{([^}]*)\}/g)]
  .map(([, declarations]) => declarations)
  .join("\n");
assert(productIconCss, "styles.css debe dimensionar los iconos oficiales mediante clases scoped.");
assert(
  !/(?:^|;)\s*(?:filter|animation|transform)\s*:/im.test(productIconCss),
  "Los iconos oficiales no deben recibir filtros, animaciones ni transformaciones CSS.",
);

assert(guideSections.length >= 9, "La guía debe cubrir el ciclo completo de Power BI/Fabric.");
assert(prdSpecComparison.length >= 4, "La guía debe comparar PRD y Spec.");
assert(readinessChecklist.length >= 8, "La guía debe incluir checklist de salida a producción.");

assert(methodologyPrinciples.length >= 3, "La metodología debe explicar su uso gerencial, diario y de producto.");
assert(methodologyProcessFlow.length === 9, "La metodología debe cubrir el proceso end to end de 9 etapas.");
assert(
  methodologyProcessFlow.every(
    (step) =>
      step.stage &&
      step.method &&
      step.why &&
      step.purpose &&
      step.how &&
      step.technicalDefinition &&
      step.functionalDefinition &&
      Array.isArray(step.examples) &&
      step.examples.length >= 2,
  ),
  "Cada etapa end to end debe tener metodología, por qué, para qué, cómo, definiciones y ejemplos.",
);
assert(oeeFactors.length === 3, "OEE BI debe tener disponibilidad, eficiencia y calidad.");
assert(
  oeeFactors.every((factor) => factor.title && factor.formula && factor.biMeaning),
  "Cada factor OEE BI debe tener fórmula y traducción BI.",
);
assert(
  dmaicStages.map((stage) => normalizeForCheck(stage.title)).join("|") === "definir|medir|analizar|mejorar|controlar",
  "DMAIC debe mantener las cinco etapas en orden.",
);
assert(methodologyTools.length >= 6, "La metodología debe ubicar Lean Six Sigma, VSM, OEE, FMEA, VSM futuro y Kaizen/Kata.");
assert(toyotaFourP.length === 4, "La metodología debe incluir las 4P de Toyota.");
assert(leanPractices.length >= 5, "La metodología debe cubrir flujo continuo, SMED, Poka-Yoke, Kaizen y Kata.");
assert(methodologyCadence.length >= 4, "La metodología debe incluir cadencias de operación.");

assert(methodOperatingFlow.length === 6, "El Método de Datalización debe incluir el proceso operativo end to end.");
assert(
  methodOperatingFlow.every(
    (step) => step.step && step.what && step.why && step.purpose && step.how && step.technical && step.functional && step.example,
  ),
  "Cada etapa del Método de Datalización debe explicar qué es, por qué, para qué, cómo, definición técnica, funcional y ejemplo.",
);
assert(methodPlanes.length === 2, "El Método de Datalización debe separar DEV y PROD.");
assert(methodChannels.length === 8, "El Método de Datalización debe incluir los 8 canales base.");
assert(methodProjectFolders.length === 12, "La plantilla de proyecto debe incluir 12 subcarpetas estándar.");
assert(methodNaming.pattern.includes("[CODIGO]"), "La convención de nombres debe incluir código, tipo, fecha y versión.");

assert(designSystemBenefits.length === 8, "El Design System debe incluir 8 beneficios esperados.");
assert(designSystemComparison.without.length === 8, "El Design System debe explicar 8 problemas sin sistema.");
assert(designSystemComparison.with.length === 8, "El Design System debe explicar 8 mejoras con sistema.");
assert(designSystemFoundations.length === 8, "El Design System debe incluir 8 fundamentos.");
assert(designSystemPrinciples.length === 6, "El Design System debe incluir 6 principios.");
assert(designSystemScope.length >= 18, "El Design System debe cubrir el alcance inicial completo.");
assert(designSystemComponents.length >= 16, "El Design System debe mostrar componentes esperados.");
assert(designSystemDeliverables.length >= 13, "El Design System debe listar entregables esperados.");
assert(designSystemQualityRules.length >= 11, "El Design System debe listar reglas de calidad.");
assert(appJs.includes("/design-system"), "La UI debe incluir acceso a /design-system.");
assert(appJs.includes("Design System"), "La UI debe exponer el módulo Design System.");
assert(appJs.includes("ypf-industrial-hero"), "Las portadas deben usar el asset industrial de alta calidad.");
assert(!appJs.includes("/assets/energy-chain.png"), "La portada principal no debe usar el asset viejo.");

assert(datalitoKnowledgeSources.length >= 90, "Datalito debe indexar fuentes locales aprobadas de la plataforma.");
assert(
  datalitoKnowledgeSources.every((source) =>
    ["id", "title", "section", "summary", "content_type", "status", "version", "owner", "canonical_url", "content"].every(
      (field) => source[field],
    ),
  ),
  "Cada fuente de Datalito debe incluir metadata y contenido.",
);
assert(
  datalitoKnowledgeSources.every((source) => source.status === "approved" && source.confidentiality === "internal"),
  "La V1 de Datalito debe exponer solo fuentes internas aprobadas.",
);
assert(datalitoSourceSchema.length >= 14, "Datalito debe documentar el schema mínimo de fuente.");
assert(datalitoAnswerModes.length === 5, "Datalito debe incluir cinco modos de respuesta.");
assert(datalitoProductPrinciples.length === 3, "Datalito debe declarar tres principios de producto.");
assert(datalitoGovernanceControls.length >= 6, "Datalito debe listar controles de gobierno.");
assert(datalitoKpis.length >= 6, "Datalito debe listar KPIs de producto.");
assert(datalitoEvaluationQuestions.length === 170, "Datalito debe cargar el banco de 170 preguntas de evaluación.");
assert(datalitoNoAnswerCases.length >= 5, "Datalito debe incluir casos sin evidencia.");
assert(datalitoSecurityCases.length >= 5, "Datalito debe incluir casos adversariales.");
assert(appJs.includes("recordDatalitoFeedback"), "Datalito debe registrar feedback.");
assert(appJs.includes("recordDatalitoGap"), "Datalito debe registrar brechas de conocimiento.");
assert(appJs.includes("No lo tengo en la base aprobada todavía"), "Datalito debe manejar falta de evidencia sin inventar.");

assert(platformHeroMetrics.length === 3, "La portada ejecutiva debe mostrar tres capacidades principales.");
assert(platformPillars.length === 3, "La sección ejecutiva debe explicar tres ganancias del área.");
assert(platformDefinitionCards.length === 3, "La definición de datalización debe tener tres dimensiones.");
assert(
  platformBeforeAfter.map((item) => normalizeForCheck(item.moment)).join("|") === "antes|ahora|después",
  "La narrativa ejecutiva debe mantener Antes, Ahora y Después.",
);
assert(platformCapabilityShift.length === 4, "La transición de tableros a disciplina debe tener cuatro cambios de capacidad.");
assert(
  appJs.includes("Esta plataforma nace para ordenar, estandarizar y escalar la forma en que el área construye inteligencia de datos."),
  "La portada debe incluir el texto clave de origen de la plataforma.",
);
assert(
  appJs.includes("Lo que estamos construyendo no es solo una web. Es una capacidad organizacional."),
  "La portada debe incluir el texto clave de capacidad organizacional.",
);
assert(
  appJs.includes(
    "Datalizar no es simplemente automatizar procesos. Es estructurar información, definir estándares, asegurar trazabilidad, gobernar datos y convertirlos en decisiones confiables.",
  ),
  "La sección debe incluir la definición estratégica de datalización.",
);

const requiredNarratives = ["home", "roadMethodology", "guide", "method", "methodology", "project", "dictionary", "tooling", "shortcuts"];
assert(
  requiredNarratives.every((key) => pageNarratives[key]),
  "Todas las páginas principales deben tener narrativa ejecutiva.",
);
assert(
  requiredNarratives.every(
    (key) =>
      pageNarratives[key].title && pageNarratives[key].summary && pageNarratives[key].support.length === 3 && pageNarratives[key].action,
  ),
  "Cada narrativa ejecutiva debe incluir tesis, resumen, tres soportes y acción.",
);
assert(conceptDecantation.length >= 3, "El sitio debe incluir árbol de decantación conceptual.");
assert(
  conceptDecantation.every((level) => level.level && level.statement && Array.isArray(level.branches) && level.branches.length === 3),
  "Cada nivel del árbol conceptual debe tener tres ramas.",
);
assert(!appJs.includes("<br"), "La UI no debe depender de saltos de línea HTML forzados.");
assert(!stylesCss.includes(".concept-tree-grid::before"), "El árbol conceptual no debe dibujar conectores horizontales.");

assert(toolingDocs.source === "docs/librerias-agentes-mcp.md", "El catálogo técnico debe apuntar a la documentación Markdown.");
assert(toolingGroups.length >= 10, "El catálogo técnico debe incluir las familias principales.");
assert(
  toolingGroups.reduce((total, group) => total + group.items.length, 0) >= 100,
  "El catálogo técnico debe registrar al menos 100 herramientas.",
);

assert(shortcutsPdf.source === "assets/docs/atajos-power-bi.pdf", "El PDF de atajos debe estar publicado en assets/docs.");
await access("assets/docs/modelos/prd-datalizacion.docx");
await access("assets/docs/modelos/spec-datalizacion.docx");
await access("assets/ypf-industrial-hero-1280.webp");
await access("assets/ypf-industrial-hero-1280.avif");
await access("assets/ypf-industrial-hero.png");
await access("assets/ypf-logo.svg");
await access("assets/datalito-robot-v22.png");
await access("assets/datalito-robot-v22-512.webp");
await access("assets/datalito-robot-v22-256.webp");
await access("docs/datalito-architecture.md");
await access("docs/datalito-content-governance.md");
await access("docs/datalito-runbook.md");
await access("docs/datalito-threat-model.md");
await access("docs/datalito-evaluation.md");
await access("evals/datalito/golden-questions.json");
await access("evals/datalito/no-answer-cases.json");
await access("evals/datalito/security-cases.json");
await access(".env.example");
assert(powerBiShortcuts.length >= 7, "Los atajos deben estar agrupados en categorías útiles.");
assert(
  powerBiShortcuts.every((category) => category.category && category.intro && Array.isArray(category.items) && category.items.length),
  "Cada categoría de atajos debe tener intro e items.",
);
assert(
  powerBiShortcuts.every((category) => category.items.every((item) => item.action && Array.isArray(item.keys) && item.keys.length)),
  "Cada atajo debe incluir acción y teclas.",
);

const rewriteDestinations = new Map((vercelJson.rewrites || []).map((rewrite) => [rewrite.source, rewrite.destination]));
const rewriteSources = new Set(rewriteDestinations.keys());
assert(rewriteSources.has("/road-y-metodologia"), "Vercel debe reescribir /road-y-metodologia a index.html.");
assert(rewriteSources.has("/road-y-metodologia/:path*"), "Vercel debe reescribir subsecciones de /road-y-metodologia a index.html.");
assert(rewriteSources.has("/metodo-datalizacion/:path*"), "Vercel debe reescribir subsecciones de /metodo-datalizacion a index.html.");
assert(rewriteSources.has("/inicio/:path*"), "Vercel debe reescribir subsecciones de /inicio a index.html.");
assert(rewriteSources.has("/guia-power-bi"), "Vercel debe reescribir /guia-power-bi a index.html.");
assert(rewriteSources.has("/metodo-datalizacion"), "Vercel debe reescribir /metodo-datalizacion a index.html.");
assert(rewriteSources.has("/metodologia"), "Vercel debe reescribir /metodologia a index.html.");
assert(rewriteSources.has("/design-system"), "Vercel debe reescribir /design-system a index.html.");
assert(rewriteSources.has("/datalito"), "Vercel debe reescribir /datalito a index.html.");
assert(rewriteSources.has("/productos"), "Vercel debe reescribir /productos a index.html.");
assert(rewriteSources.has("/productos/:path*"), "Vercel debe reescribir las fichas de /productos a index.html.");
assert(rewriteSources.has("/diccionario"), "Vercel debe reescribir /diccionario a index.html.");
assert(rewriteSources.has("/roadmap"), "Vercel debe reescribir /roadmap a index.html.");
assert(rewriteSources.has("/proyecto-power-bi"), "Vercel debe reescribir /proyecto-power-bi a index.html.");
assert(rewriteSources.has("/atajos"), "Vercel debe reescribir /atajos a index.html.");
assert(rewriteSources.has("/librerias"), "Vercel debe reescribir /librerias a index.html.");
assert(
  ["/productos", "/productos/:path*"].every((source) => rewriteDestinations.get(source) === "/index.html"),
  "Vercel debe resolver el catálogo y todas las fichas de Productos mediante /index.html.",
);
assert(vercelJson.outputDirectory === "dist", "Vercel debe publicar la carpeta dist.");
const dataCacheHeader = (vercelJson.headers || [])
  .find((item) => item.source === "/data/(.*)")
  ?.headers.find((header) => header.key.toLowerCase() === "cache-control")?.value;
assert(
  dataCacheHeader && dataCacheHeader.includes("max-age=0") && dataCacheHeader.includes("must-revalidate"),
  "Los módulos de data deben revalidar para no mezclar app.js nuevo con datos viejos.",
);

await rm("dist", { force: true, recursive: true });
await mkdir("dist", { recursive: true });
await cp("assets", "dist/assets", { recursive: true });
await cp("data", "dist/data", { recursive: true });
await cp("docs", "dist/docs", { recursive: true });

const rootFiles = ["index.html", "styles.css", "app.js", "manifest.webmanifest", "service-worker.js"];
for (const file of rootFiles) {
  await cp(file, `dist/${file}`);
}

const staticRoutes = [
  "guia-power-bi",
  "road-y-metodologia",
  "metodo-datalizacion",
  "metodologia",
  "design-system",
  "datalito",
  "productos",
  "productos/power-bi",
  "productos/power-apps",
  "productos/power-automate",
  "diccionario",
  "roadmap",
  "proyecto-power-bi",
  "atajos",
  "librerias",
  "inicio/proposito",
  "inicio/estudio",
  "inicio/capacidad",
  "inicio/secciones",
  "inicio/decantacion",
  "inicio/workflow",
  "road-y-metodologia/enfoque",
  "road-y-metodologia/tesis",
  "road-y-metodologia/proceso",
  "road-y-metodologia/fabric-end-to-end",
  "road-y-metodologia/arquitectura-fabric",
  "road-y-metodologia/flujo-bi",
  "road-y-metodologia/prd-spec",
  "road-y-metodologia/gates",
  "road-y-metodologia/checklist",
  "road-y-metodologia/oee-bi",
  "road-y-metodologia/dmaic",
  "road-y-metodologia/lean",
  "road-y-metodologia/cadencia",
  "metodo-datalizacion/marco-vmc",
  "metodo-datalizacion/proceso",
  "metodo-datalizacion/dev-prod",
  "metodo-datalizacion/microsoft-365",
  "metodo-datalizacion/canales",
  "metodo-datalizacion/proyecto",
  "metodo-datalizacion/naming",
  "metodo-datalizacion/backlog",
  "metodo-datalizacion/vmc-fabric",
  "metodo-datalizacion/gobernanza",
  "design-system/fundamentos",
  "design-system/componentes",
  "design-system/alcance",
  "design-system/entrega",
  "datalito/conversacion",
  "datalito/arquitectura",
  "datalito/gobierno",
  "datalito/evaluacion",
  "proyecto-power-bi/estudio",
  "proyecto-power-bi/metodo",
  "proyecto-power-bi/herramientas",
  "diccionario/busqueda",
  "librerias/catalogo",
  "atajos/power-bi",
];

for (const route of staticRoutes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, indexHtml);
}

await access("dist/road-y-metodologia/oee-bi/index.html");
await access("dist/road-y-metodologia/fabric-end-to-end/index.html");
await access("dist/road-y-metodologia/arquitectura-fabric/index.html");
await access("dist/metodo-datalizacion/backlog/index.html");
await access("dist/design-system/componentes/index.html");
await access("dist/productos/index.html");
await access("dist/productos/power-bi/index.html");
await access("dist/productos/power-apps/index.html");
await access("dist/productos/power-automate/index.html");
await access("dist/data/powerPlatformProducts.js");
await access("dist/assets/microsoft/power-platform/power-bi.svg");
await access("dist/assets/microsoft/power-platform/power-apps.svg");
await access("dist/assets/microsoft/power-platform/power-automate.svg");

console.log("Build validation OK");
console.log(`- ${dictionaryTerms.length} términos BI`);
console.log(`- ${guideSections.length} capítulos de guía`);
console.log(`- ${dmaicStages.length} etapas DMAIC y ${oeeFactors.length} factores OEE BI`);
console.log(`- ${roadmapPhases.length} gates de roadmap`);
console.log(`- ${products.length} productos con ${products.reduce((total, product) => total + product.phases.length, 0)} gates`);
console.log(`- ${toolingGroups.length} familias de librerías/agentes`);
console.log(`- ${powerBiShortcuts.length} categorías de atajos`);
console.log(`- ${datalitoKnowledgeSources.length} fuentes Datalito y ${datalitoEvaluationQuestions.length} preguntas de evaluación`);
console.log("- dist generado para Vercel");

function normalizeForCheck(value) {
  return String(value).toLowerCase();
}
