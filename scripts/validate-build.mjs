import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dictionaryCategories, dictionaryTerms } from "../data/dictionary.js";
import { powerBiShortcuts, shortcutsPdf } from "../data/powerbiShortcuts.js";
import { roadmapPhases } from "../data/roadmap.js";

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
assert(appJs.includes("renderProjectPage"), "app.js debe renderizar el proyecto Power BI.");
assert(appJs.includes("renderShortcutsPage"), "app.js debe renderizar los atajos Power BI.");

assert(dictionaryCategories.length >= 11, "El diccionario debe incluir las categorias base.");
assert(dictionaryTerms.length >= 40, "El diccionario debe incluir al menos 40 terminos.");
assert(dictionaryTerms.every((term) => hasFields(term, requiredTermFields)), "Cada termino debe tener todos los campos requeridos.");
assert(new Set(dictionaryTerms.map((term) => term.id)).size === dictionaryTerms.length, "Los ids del diccionario deben ser unicos.");

assert(roadmapPhases.length === 5, "El roadmap debe incluir exactamente los 5 pilares definidos.");
assert(roadmapPhases.every((phase) => hasFields(phase, requiredPhaseFields)), "Cada fase debe tener todos los campos requeridos.");
assert(roadmapPhases.every((phase, index) => phase.id === index), "Los pilares deben estar numerados de 0 a 4.");
assert(!roadmapPhases.some((phase) => normalizeForCheck(Object.values(phase).flat().join(" ")).includes("pbip")), "PBIP debe vivir fuera del roadmap.");

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
assert(rewriteSources.has("/diccionario"), "Vercel debe reescribir /diccionario a index.html.");
assert(rewriteSources.has("/roadmap"), "Vercel debe reescribir /roadmap a index.html.");
assert(rewriteSources.has("/proyecto-power-bi"), "Vercel debe reescribir /proyecto-power-bi a index.html.");
assert(rewriteSources.has("/atajos"), "Vercel debe reescribir /atajos a index.html.");
assert(vercelJson.outputDirectory === "dist", "Vercel debe publicar la carpeta dist.");

await rm("dist", { force: true, recursive: true });
await mkdir("dist/diccionario", { recursive: true });
await mkdir("dist/roadmap", { recursive: true });
await mkdir("dist/proyecto-power-bi", { recursive: true });
await mkdir("dist/atajos", { recursive: true });
await cp("assets", "dist/assets", { recursive: true });
await cp("data", "dist/data", { recursive: true });

const rootFiles = ["index.html", "styles.css", "app.js", "manifest.webmanifest", "service-worker.js"];
for (const file of rootFiles) {
  await cp(file, `dist/${file}`);
}

await writeFile("dist/diccionario/index.html", indexHtml);
await writeFile("dist/roadmap/index.html", indexHtml);
await writeFile("dist/proyecto-power-bi/index.html", indexHtml);
await writeFile("dist/atajos/index.html", indexHtml);

console.log("Build validation OK");
console.log(`- ${dictionaryTerms.length} terminos BI`);
console.log(`- ${roadmapPhases.length} pilares de roadmap`);
console.log(`- ${powerBiShortcuts.length} categorias de atajos`);
console.log("- dist generado para Vercel");

function normalizeForCheck(value) {
  return String(value).toLowerCase();
}
