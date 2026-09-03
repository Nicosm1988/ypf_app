import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const appSource = await readFile(path.join(root, "app.js"), "utf8");
const appRoutes = extractRegisteredRoutes(appSource);
const sourceFiles = [
  "index.html",
  "app.js",
  "styles.css",
  "manifest.webmanifest",
  "service-worker.js",
  ...(await collectFiles("data", (file) => file.endsWith(".js"))),
  "README.md",
  ...(await collectFiles("docs", (file) => file.endsWith(".md"))),
];
const problems = [];
let checked = 0;

for (const file of [...new Set(sourceFiles)].sort()) {
  const text = await readFile(path.join(root, file), "utf8");
  const links = extractLinks(text, file);

  for (const link of links) {
    if (shouldSkip(link)) continue;
    checked += 1;

    let normalized;
    try {
      normalized = normalizeLocalLink(link);
    } catch {
      problems.push({ file, link, expected: "una ruta local válida" });
      continue;
    }

    if (isAppRoute(normalized)) {
      if (!appRoutes.has(normalized)) {
        problems.push({ file, link, expected: "una ruta registrada en app.js" });
      }
      continue;
    }

    const filePath = toFilePath(file, normalized);
    if (!filePath) {
      problems.push({ file, link, expected: "un archivo dentro del repositorio" });
      continue;
    }

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
    console.error(`- ${problem.file}: ${problem.link} -> falta ${problem.expected}`);
  }
  process.exit(1);
}

console.log(`Local links OK (${checked} checked across ${sourceFiles.length} files; ${appRoutes.size} exact routes)`);

async function collectFiles(directory, predicate) {
  const directoryPath = path.join(root, directory);
  const entries = await readdir(directoryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.posix.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(relativePath, predicate)));
    } else if (entry.isFile() && predicate(relativePath)) {
      files.push(relativePath);
    }
  }

  return files;
}

function extractRegisteredRoutes(source) {
  const routes = new Set();
  const baseRouteBlock = extractBlock(source, "const baseRoutes = new Set([", "]);", "baseRoutes");
  const subsectionRouteBlock = extractBlock(source, "const subsectionRoutes = {", "\n};", "subsectionRoutes");

  for (const match of baseRouteBlock.matchAll(/"(\/[^"?#]*)"/g)) {
    routes.add(normalizeLocalLink(match[1]));
  }
  for (const match of subsectionRouteBlock.matchAll(/^\s*"(\/[^"?#]*)"\s*:/gm)) {
    routes.add(normalizeLocalLink(match[1]));
  }

  if (!routes.has("/") || routes.size < 2) {
    throw new Error("No se pudieron extraer las rutas registradas en app.js.");
  }
  return routes;
}

function extractBlock(source, startMarker, endMarker, label) {
  const start = source.indexOf(startMarker);
  const end = start === -1 ? -1 : source.indexOf(endMarker, start + startMarker.length);
  if (start === -1 || end === -1) {
    throw new Error(`No se pudo leer ${label} desde app.js.`);
  }
  return source.slice(start + startMarker.length, end);
}

function extractLinks(text, sourceFile) {
  const links = new Set();
  const patterns = [
    /\b(?:href|src)\s*=\s*["']([^"']+)["']/gi,
    /["'](\/[^"'`\s]+)["']/g,
    /\b(?:route|path|iconPath)\s*:\s*["']([^"']+)["']/g,
  ];

  if (sourceFile.endsWith(".css")) {
    patterns.push(/url\(\s*["']?([^"')]+)["']?\s*\)/gi);
  }

  if (sourceFile.endsWith(".md")) {
    patterns.push(/!?\[[^\]]*\]\(\s*(?:<([^>]+)>|([^\s)]+))/g, /^\s*\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))/gm);
  }

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const link = match.slice(1).find(Boolean);
      if (link) links.add(link);
    }
  }

  return [...links];
}

function shouldSkip(link) {
  const value = link.trim();
  return !value || value.includes("${") || value.startsWith("#") || value.startsWith("//") || /^[a-z][a-z\d+.-]*:/i.test(value);
}

function normalizeLocalLink(link) {
  const withoutHash = link.trim().split("#")[0];
  const withoutQuery = withoutHash.split("?")[0];
  const decoded = decodeURIComponent(withoutQuery);
  return decoded.replace(/\/+$/, "") || "/";
}

function isAppRoute(link) {
  if (!link.startsWith("/")) return false;
  if (["/assets", "/data", "/docs"].some((prefix) => link === prefix || link.startsWith(`${prefix}/`))) return false;
  return link === "/" || path.posix.extname(link) === "";
}

function toFilePath(sourceFile, link) {
  const filePath = link.startsWith("/") ? path.resolve(root, link.replace(/^\/+/, "")) : path.resolve(root, path.dirname(sourceFile), link);
  const rootPrefix = `${root}${path.sep}`;
  return filePath === root || filePath.startsWith(rootPrefix) ? filePath : null;
}
