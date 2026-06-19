import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dictionaryCategories, dictionaryTerms } from "../data/dictionary.js";
import { guideSections, prdSpecComparison, readinessChecklist } from "../data/engineeringGuide.js";
import { powerBiShortcuts, shortcutsPdf } from "../data/powerbiShortcuts.js";
import { roadmapPhases } from "../data/roadmap.js";
import { toolingDocs, toolingGroups } from "../data/toolingLibrary.js";

const requiredTermFields = ["id", "term", "category", "definition", "whyItMatters", "example", "risk"];
const requiredPhaseFields = [
  "id",
  "title",
  "lane",
  "objective",
  "keyActivities",
  "deliverables",
  "owner",
  "riskIfSkipped",
  "gate",
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
const vercelJson = JSON.parse(await readFile("vercel.json", "utf8"));

assert(indexHtml.includes("YPF BI Playbook"), "index.html debe exponer el nombre del producto.");
assert(indexHtml.includes('type="module" src="/app.js"'), "index.html debe cargar app.js como modulo.");
assert(appJs.includes("renderDictionaryPage"), "app.js debe renderizar el diccionario.");
assert(appJs.includes("renderRoadmapPage"), "app.js debe renderizar el roadmap.");
assert(appJs.includes("renderGuidePage"), "app.js debe renderizar la guia Power BI/Fabric.");
assert(appJs.includes("renderProjectPage"), "app.js debe renderizar el proyecto Power BI.");
assert(appJs.includes("renderShortcutsPage"), "app.js debe renderizar los atajos Power BI.");
assert(appJs.includes("renderToolingPage"), "app.js debe renderizar librerias y agentes.");

assert(dictionaryCategories.length >= 15, "El diccionario debe incluir categorias de producto, Fabric, performance y operacion.");
assert(dictionaryTerms.length >= 65, "El diccionario debe incluir al menos 65 terminos.");
assert(dictionaryTerms.every((term) => hasFields(term, requiredTermFields)), "Cada termino debe tener todos los campos requeridos.");
assert(new Set(dictionaryTerms.map((term) => term.id)).size === dictionaryTerms.length, "Los ids del diccionario deben ser unicos.");
assert(dictionaryTerms.some((term) => term.id === "prd"), "El diccionario debe incluir PRD.");
assert(dictionaryTerms.some((term) => term.id === "spec-producto-tecnica"), "El diccionario debe incluir Spec.");

assert(roadmapPhases.length === 9, "El roadmap debe incluir exactamente los 9 gates de ingenieria.");
assert(roadmapPhases.every((phase) => hasFields(phase, requiredPhaseFields)), "Cada fase debe tener todos los campos requeridos.");
assert(roadmapPhases.every((phase, index) => phase.id === index), "Los gates deben estar numerados de 0 a 8.");
assert(normalizeForCheck(roadmapPhases[0].title).includes("prd"), "El roadmap debe comenzar con PRD y Spec.");

assert(guideSections.length >= 9, "La guia debe cubrir el ciclo completo de Power BI/Fabric.");
assert(prdSpecComparison.length >= 4, "La guia debe comparar PRD y Spec.");
assert(readinessChecklist.length >= 8, "La guia debe incluir checklist de salida a produccion.");

assert(toolingDocs.source === "docs/librerias-agentes-mcp.md", "El catalogo tecnico debe apuntar a la documentacion Markdown.");
assert(toolingGroups.length >= 10, "El catalogo tecnico debe incluir las familias principales.");
assert(toolingGroups.reduce((total, group) => total + group.items.length, 0) >= 100, "El catalogo tecnico debe registrar al menos 100 herramientas.");

assert(shortcutsPdf.source === "assets/docs/atajos-power-bi.pdf", "El PDF de atajos debe estar publicado en assets/docs.");
assert(powerBiShortcuts.length >= 7, "Los atajos deben estar agrupados en categorias utiles.");
assert(
  powerBiShortcuts.every((category) => category.category && category.intro && Array.isArray(category.items) && category.items.length),
  "Cada categoria de atajos debe tener intro e items.",
);
assert(
  powerBiShortcuts.every((category) => category.items.every((item) => item.action && Array.isArray(item.keys) && item.keys.length)),
  "Cada atajo debe incluir accion y teclas.",
);

const rewriteSources = new Set((vercelJson.rewrites || []).map((rewrite) => rewrite.source));
assert(rewriteSources.has("/guia-power-bi"), "Vercel debe reescribir /guia-power-bi a index.html.");
assert(rewriteSources.has("/diccionario"), "Vercel debe reescribir /diccionario a index.html.");
assert(rewriteSources.has("/roadmap"), "Vercel debe reescribir /roadmap a index.html.");
assert(rewriteSources.has("/proyecto-power-bi"), "Vercel debe reescribir /proyecto-power-bi a index.html.");
assert(rewriteSources.has("/atajos"), "Vercel debe reescribir /atajos a index.html.");
assert(rewriteSources.has("/librerias"), "Vercel debe reescribir /librerias a index.html.");
assert(vercelJson.outputDirectory === "dist", "Vercel debe publicar la carpeta dist.");

await rm("dist", { force: true, recursive: true });
await mkdir("dist/guia-power-bi", { recursive: true });
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
await writeFile("dist/diccionario/index.html", indexHtml);
await writeFile("dist/roadmap/index.html", indexHtml);
await writeFile("dist/proyecto-power-bi/index.html", indexHtml);
await writeFile("dist/atajos/index.html", indexHtml);
await writeFile("dist/librerias/index.html", indexHtml);

console.log("Build validation OK");
console.log(`- ${dictionaryTerms.length} terminos BI`);
console.log(`- ${guideSections.length} capitulos de guia`);
console.log(`- ${roadmapPhases.length} gates de roadmap`);
console.log(`- ${toolingGroups.length} familias de librerias/agentes`);
console.log(`- ${powerBiShortcuts.length} categorias de atajos`);
console.log("- dist generado para Vercel");

function normalizeForCheck(value) {
  return String(value).toLowerCase();
}
