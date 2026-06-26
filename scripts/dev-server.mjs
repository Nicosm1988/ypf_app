import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || process.argv[2] || 8001);

const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
};

function toSafePath(urlPathname) {
  const decoded = decodeURIComponent(urlPathname);
  const routePath = decoded.replace(/\/+$/, "") || "/";
  const appRoutes = new Set([
    "/",
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
  if (appRoutes.has(routePath)) {
    return path.join(root, "index.html");
  }

  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return path.join(root, normalized);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    const filePath = toSafePath(url.pathname);
    const fileStat = await stat(filePath);

    if (!fileStat.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Datalización YPF running at http://127.0.0.1:${port}/`);
});
