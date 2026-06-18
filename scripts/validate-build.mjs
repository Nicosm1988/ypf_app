import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dictionaryCategories, dictionaryTerms } from "../data/dictionary.js";
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

assert(dictionaryCategories.length >= 11, "El diccionario debe incluir las categorias base.");
assert(dictionaryTerms.length >= 40, "El diccionario debe incluir al menos 40 terminos.");
assert(dictionaryTerms.every((term) => hasFields(term, requiredTermFields)), "Cada termino debe tener todos los campos requeridos.");
assert(new Set(dictionaryTerms.map((term) => term.id)).size === dictionaryTerms.length, "Los ids del diccionario deben ser unicos.");

assert(roadmapPhases.length === 14, "El roadmap debe incluir exactamente 14 fases.");
assert(roadmapPhases.every((phase) => hasFields(phase, requiredPhaseFields)), "Cada fase debe tener todos los campos requeridos.");
assert(roadmapPhases.every((phase, index) => phase.id === index), "Las fases deben estar numeradas de 0 a 13.");

const rewriteSources = new Set((vercelJson.rewrites || []).map((rewrite) => rewrite.source));
assert(rewriteSources.has("/diccionario"), "Vercel debe reescribir /diccionario a index.html.");
assert(rewriteSources.has("/roadmap"), "Vercel debe reescribir /roadmap a index.html.");
assert(vercelJson.outputDirectory === "dist", "Vercel debe publicar la carpeta dist.");

await rm("dist", { force: true, recursive: true });
await mkdir("dist/diccionario", { recursive: true });
await mkdir("dist/roadmap", { recursive: true });
await cp("assets", "dist/assets", { recursive: true });
await cp("data", "dist/data", { recursive: true });

const rootFiles = ["index.html", "styles.css", "app.js", "manifest.webmanifest", "service-worker.js"];
for (const file of rootFiles) {
  await cp(file, `dist/${file}`);
}

await writeFile("dist/diccionario/index.html", indexHtml);
await writeFile("dist/roadmap/index.html", indexHtml);

console.log("Build validation OK");
console.log(`- ${dictionaryTerms.length} terminos BI`);
console.log(`- ${roadmapPhases.length} fases de roadmap`);
console.log("- dist generado para Vercel");
