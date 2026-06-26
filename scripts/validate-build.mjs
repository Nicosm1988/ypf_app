import { access, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
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
import { methodChannels, methodNaming, methodOperatingFlow, methodPlanes, methodProjectFolders } from "../data/datalizationMethod.js";
import { roadmapPhases } from "../data/roadmap.js";
import { toolingDocs, toolingGroups } from "../data/toolingLibrary.js";

const requiredTermFields = ["id", "term", "category", "definition", "whyItMatters", "example", "risk"];
const requiredPhaseFields = ["id", "title", "lane", "objective", "keyActivities", "deliverables", "owner", "riskIfSkipped", "gate"];

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
const vercelJson = JSON.parse(await readFile("vercel.json", "utf8"));

assert(indexHtml.includes("Datalización YPF"), "index.html debe exponer el nombre del producto.");
assert(indexHtml.includes('type="module" src="/app.js"'), "index.html debe cargar app.js como modulo.");
assert(appJs.includes("renderDictionaryPage"), "app.js debe renderizar el diccionario.");
assert(appJs.includes("renderMethodologyPage"), "app.js debe renderizar la metodología.");
assert(appJs.includes("renderDatalizationMethodPage"), "app.js debe renderizar el Método de Datalización.");
assert(appJs.includes("renderDesignSystemPage"), "app.js debe renderizar el Design System.");
assert(appJs.includes("renderDatalitoPage"), "app.js debe renderizar Datalito.");
assert(appJs.includes("renderDatalitoGlobalShell"), "app.js debe montar el launcher global de Datalito.");
assert(appJs.includes("renderDatalitoAvatar"), "Datalito debe usar un avatar propio.");
assert(appJs.includes("buildDatalitoConversationalResponse"), "Datalito debe manejar conversación natural antes del retrieval.");
assert(appJs.includes("renderMethodologyProcessFlow"), "app.js debe renderizar el proceso metodológico end to end.");
assert(appJs.includes("renderExecutiveBrief"), "app.js debe renderizar la síntesis ejecutiva.");
assert(appJs.includes("renderPlatformExecutiveSection"), "app.js debe renderizar la sección ejecutiva inicial.");
assert(appJs.includes("renderHubSectionLauncher"), "app.js debe renderizar la botonera de secciones.");
assert(appJs.includes("renderConceptDecantation"), "app.js debe renderizar el árbol de decantación conceptual.");
assert(appJs.includes("renderRoadmapPage"), "app.js debe renderizar el roadmap.");
assert(appJs.includes("renderGuidePage"), "app.js debe renderizar la guía Power BI/Fabric.");
assert(appJs.includes("renderProjectPage"), "app.js debe renderizar el proyecto Power BI.");
assert(appJs.includes("renderShortcutsPage"), "app.js debe renderizar los atajos Power BI.");
assert(appJs.includes("renderToolingPage"), "app.js debe renderizar librerías y agentes.");

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

const requiredNarratives = ["home", "guide", "method", "methodology", "project", "dictionary", "tooling", "shortcuts"];
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
await access("assets/datalito-avatar.png");
await access("assets/datalito-avatar-512.webp");
await access("assets/datalito-avatar-256.webp");
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

const rewriteSources = new Set((vercelJson.rewrites || []).map((rewrite) => rewrite.source));
assert(rewriteSources.has("/guia-power-bi"), "Vercel debe reescribir /guia-power-bi a index.html.");
assert(rewriteSources.has("/metodo-datalizacion"), "Vercel debe reescribir /metodo-datalizacion a index.html.");
assert(rewriteSources.has("/metodologia"), "Vercel debe reescribir /metodologia a index.html.");
assert(rewriteSources.has("/design-system"), "Vercel debe reescribir /design-system a index.html.");
assert(rewriteSources.has("/datalito"), "Vercel debe reescribir /datalito a index.html.");
assert(rewriteSources.has("/diccionario"), "Vercel debe reescribir /diccionario a index.html.");
assert(rewriteSources.has("/roadmap"), "Vercel debe reescribir /roadmap a index.html.");
assert(rewriteSources.has("/proyecto-power-bi"), "Vercel debe reescribir /proyecto-power-bi a index.html.");
assert(rewriteSources.has("/atajos"), "Vercel debe reescribir /atajos a index.html.");
assert(rewriteSources.has("/librerias"), "Vercel debe reescribir /librerias a index.html.");
assert(vercelJson.outputDirectory === "dist", "Vercel debe publicar la carpeta dist.");
const dataCacheHeader = (vercelJson.headers || [])
  .find((item) => item.source === "/data/(.*)")
  ?.headers.find((header) => header.key.toLowerCase() === "cache-control")?.value;
assert(
  dataCacheHeader && dataCacheHeader.includes("max-age=0") && dataCacheHeader.includes("must-revalidate"),
  "Los módulos de data deben revalidar para no mezclar app.js nuevo con datos viejos.",
);

await rm("dist", { force: true, recursive: true });
await mkdir("dist/guia-power-bi", { recursive: true });
await mkdir("dist/metodo-datalizacion", { recursive: true });
await mkdir("dist/metodologia", { recursive: true });
await mkdir("dist/design-system", { recursive: true });
await mkdir("dist/datalito", { recursive: true });
await mkdir("dist/diccionario", { recursive: true });
await mkdir("dist/roadmap", { recursive: true });
await mkdir("dist/proyecto-power-bi", { recursive: true });
await mkdir("dist/atajos", { recursive: true });
await mkdir("dist/librerias", { recursive: true });
await cp("assets", "dist/assets", { recursive: true });
await cp("data", "dist/data", { recursive: true });
await cp("docs", "dist/docs", { recursive: true });

const rootFiles = ["index.html", "styles.css", "app.js", "manifest.webmanifest", "service-worker.js"];
for (const file of rootFiles) {
  await cp(file, `dist/${file}`);
}

await writeFile("dist/guia-power-bi/index.html", indexHtml);
await writeFile("dist/metodo-datalizacion/index.html", indexHtml);
await writeFile("dist/metodologia/index.html", indexHtml);
await writeFile("dist/design-system/index.html", indexHtml);
await writeFile("dist/datalito/index.html", indexHtml);
await writeFile("dist/diccionario/index.html", indexHtml);
await writeFile("dist/roadmap/index.html", indexHtml);
await writeFile("dist/proyecto-power-bi/index.html", indexHtml);
await writeFile("dist/atajos/index.html", indexHtml);
await writeFile("dist/librerias/index.html", indexHtml);

console.log("Build validation OK");
console.log(`- ${dictionaryTerms.length} términos BI`);
console.log(`- ${guideSections.length} capítulos de guía`);
console.log(`- ${dmaicStages.length} etapas DMAIC y ${oeeFactors.length} factores OEE BI`);
console.log(`- ${roadmapPhases.length} gates de roadmap`);
console.log(`- ${toolingGroups.length} familias de librerías/agentes`);
console.log(`- ${powerBiShortcuts.length} categorías de atajos`);
console.log(`- ${datalitoKnowledgeSources.length} fuentes Datalito y ${datalitoEvaluationQuestions.length} preguntas de evaluación`);
console.log("- dist generado para Vercel");

function normalizeForCheck(value) {
  return String(value).toLowerCase();
}
