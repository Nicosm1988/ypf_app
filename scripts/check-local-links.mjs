import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const appRoutes = new Set([
  "/",
  "/road-y-metodologia",
  "/guia-power-bi",
  "/metodo-datalizacion",
  "/metodologia",
  "/design-system",
  "/datalito",
  "/diccionario",
  "/roadmap",
  "/proyecto-power-bi",
  "/atajos",
  "/librerias",
]);
const sourceFiles = ["index.html", "app.js", "styles.css", "manifest.webmanifest", "service-worker.js"];
const problems = [];
let checked = 0;

for (const file of sourceFiles) {
  const text = await readFile(path.join(root, file), "utf8");
  const links = extractLinks(text);
  for (const link of links) {
    if (shouldSkip(link)) continue;
    checked += 1;
    const normalized = normalizeLocalLink(link);
    if (appRoutes.has(normalized)) continue;
    const filePath = toFilePath(file, normalized);
    try {
      await access(filePath);
    } catch {
      problems.push({ file, link, expected: path.relative(root, filePath) });
    }
  }
}

if (problems.length) {
  console.error("Local link check failed:");
  for (const problem of problems) {
    console.error(`- ${problem.file}: ${problem.link} -> missing ${problem.expected}`);
  }
  process.exit(1);
}

console.log(`Local links OK (${checked} checked)`);

function extractLinks(text) {
  const links = new Set();
  const attrPattern = /\b(?:href|src)\s*=\s*["']([^"']+)["']/gi;
  const cssUrlPattern = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;
  const stringPathPattern = /["'](\/(?:assets|docs|data)\/[^"']+)["']/g;

  for (const pattern of [attrPattern, cssUrlPattern, stringPathPattern]) {
    for (const match of text.matchAll(pattern)) {
      links.add(match[1]);
    }
  }

  return [...links];
}

function shouldSkip(link) {
  return (
    !link ||
    link.includes("${") ||
    link.startsWith("#") ||
    link.startsWith("data:") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:") ||
    link.startsWith("http://") ||
    link.startsWith("https://") ||
    link.startsWith("javascript:") ||
    /^[a-zA-Z_$][\w.$]*$/.test(link)
  );
}

function normalizeLocalLink(link) {
  const withoutHash = link.split("#")[0];
  const withoutQuery = withoutHash.split("?")[0];
  return withoutQuery.replace(/\/+$/, "") || "/";
}

function toFilePath(sourceFile, link) {
  if (link.startsWith("/")) {
    return path.join(root, link);
  }
  return path.join(root, path.dirname(sourceFile), link);
}
