import AxeBuilder from "@axe-core/playwright";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { request } from "node:http";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const port = Number(process.env.QA_PORT || 8123);
const baseUrl = `http://127.0.0.1:${port}`;
const routes = [
  { path: "/", selector: ".hero", name: "Inicio" },
  { path: "/guia-power-bi", selector: ".guide-journey", name: "Guia + Roadmap" },
  { path: "/metodo-datalizacion", selector: ".method-page", name: "Metodo de Datalizacion" },
  { path: "/metodologia", selector: ".methodology-process", name: "Metodologia" },
  { path: "/design-system", selector: ".design-system-page", name: "Design System" },
  { path: "/diccionario", selector: ".dictionary-layout", name: "Diccionario" },
  { path: "/roadmap", selector: ".guide-journey", name: "Roadmap" },
  { path: "/proyecto-power-bi", selector: ".project-studio", name: "Proyecto Power BI" },
  { path: "/librerias", selector: ".tooling-grid", name: "Librerias" },
  { path: "/atajos", selector: ".shortcut-grid", name: "Atajos" },
];

const viewports = [
  { label: "desktop", width: 1440, height: 1100 },
  { label: "mobile", width: 390, height: 1000 },
];

const server = spawn(process.execPath, ["scripts/dev-server.mjs", String(port)], {
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

let browser;

try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    const consoleMessages = [];
    page.on("console", (message) => {
      if (["error", "warning"].includes(message.type())) {
        consoleMessages.push(`${message.type()}: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => consoleMessages.push(`pageerror: ${error.message}`));

    for (const route of routes) {
      await page.goto(`${baseUrl}${route.path}`, { waitUntil: "networkidle" });
      await page.locator(route.selector).waitFor({ state: "visible", timeout: 7000 });

      const pageReport = await page.evaluate(() => {
        const textSelector = [
          "h1",
          "h2",
          "h3",
          "h4",
          "p",
          "a",
          "button strong",
          "button small",
          ".button",
          ".flow-chip",
          ".badge",
          ".process-block strong",
          ".process-block li",
          ".concept-tree h2",
          ".concept-tree h3",
          ".concept-tree p",
        ].join(",");
        const isInsideHorizontalScroller = (element) => {
          let current = element.parentElement;
          while (current && current !== document.body) {
            const styles = getComputedStyle(current);
            if (["auto", "scroll"].includes(styles.overflowX) && current.scrollWidth > current.clientWidth + 2) {
              return true;
            }
            current = current.parentElement;
          }
          return false;
        };
        const textOverflowing = [...document.querySelectorAll(textSelector)]
          .filter((element) => {
            if (isInsideHorizontalScroller(element)) return false;
            const rect = element.getBoundingClientRect();
            if (!rect.width || rect.bottom < 0 || rect.top > window.innerHeight) return false;
            return rect.left < -2 || rect.right > window.innerWidth + 2;
          })
          .slice(0, 8)
          .map((element) => ({
            tag: element.tagName,
            className: String(element.className),
            text: element.textContent.trim().slice(0, 80),
            scrollWidth: element.scrollWidth,
            clientWidth: element.clientWidth,
          }));
        const navigation = performance.getEntriesByType("navigation")[0];
        return {
          textOverflowing,
          bodyOverflow: document.documentElement.scrollWidth > window.innerWidth + 2,
          loadMs: navigation ? Math.round(navigation.loadEventEnd - navigation.startTime) : 0,
        };
      });

      if (pageReport.bodyOverflow || pageReport.textOverflowing.length) {
        throw new Error(
          `${route.name} (${viewport.label}) tiene overflow horizontal: ${JSON.stringify(pageReport.textOverflowing, null, 2)}`,
        );
      }

      if (pageReport.loadMs > 8000) {
        throw new Error(`${route.name} (${viewport.label}) excede el presupuesto de carga local: ${pageReport.loadMs}ms`);
      }

      const accessibility = await new AxeBuilder({ page }).analyze();
      if (accessibility.violations.length) {
        const summary = accessibility.violations.map((violation) => `${violation.id}: ${violation.nodes.length} nodo(s)`).join("; ");
        throw new Error(`${route.name} (${viewport.label}) tiene violaciones de accesibilidad: ${summary}`);
      }

      if (route.path === "/") {
        const homeReport = await page.evaluate(() => ({
          metrics: document.querySelectorAll(".platform-metric").length,
          hubNavCards: document.querySelectorAll(".hub-nav-card").length,
          pillars: document.querySelectorAll(".platform-pillar").length,
          definitionCards: document.querySelectorAll(".platform-definition-card").length,
          timelineCards: document.querySelectorAll(".platform-timeline-card").length,
          disciplineCards: document.querySelectorAll(".platform-discipline-card").length,
          hero: document.querySelector(".hero h1")?.textContent?.trim(),
        }));
        if (
          homeReport.metrics !== 3 ||
          homeReport.hubNavCards !== 8 ||
          homeReport.pillars !== 3 ||
          homeReport.definitionCards !== 3 ||
          homeReport.timelineCards !== 3 ||
          homeReport.disciplineCards !== 4 ||
          !homeReport.hero?.includes("disciplina interna")
        ) {
          throw new Error(`Inicio no cumple estructura ejecutiva esperada: ${JSON.stringify(homeReport)}`);
        }
      }

      if (route.path === "/design-system") {
        const designSystemReport = await page.evaluate(() => ({
          heroMetrics: document.querySelectorAll(".design-system-hero-metrics article").length,
          definitions: document.querySelectorAll(".design-system-card").length,
          comparisons: document.querySelectorAll(".design-system-compare").length,
          benefits: document.querySelectorAll(".design-system-benefit").length,
          components: document.querySelectorAll(".design-system-component").length,
          finalText: document.querySelector(".design-system-final strong")?.textContent?.trim(),
        }));
        if (
          designSystemReport.heroMetrics !== 3 ||
          designSystemReport.definitions !== 3 ||
          designSystemReport.comparisons !== 2 ||
          designSystemReport.benefits !== 8 ||
          designSystemReport.components < 16 ||
          !designSystemReport.finalText?.includes("Ordena cómo construimos")
        ) {
          throw new Error(`Design System no cumple estructura esperada: ${JSON.stringify(designSystemReport)}`);
        }
      }

      if (route.path === "/metodologia") {
        const methodologyReport = await page.evaluate(() => ({
          processSteps: document.querySelectorAll(".methodology-process-step").length,
          processBlocks: document.querySelectorAll(".process-block").length,
          conceptConnector: getComputedStyle(document.querySelector(".concept-tree-grid"), "::before").content,
        }));
        if (
          methodologyReport.processSteps !== 9 ||
          methodologyReport.processBlocks !== 54 ||
          methodologyReport.conceptConnector !== "none"
        ) {
          throw new Error(`Metodologia no cumple estructura esperada: ${JSON.stringify(methodologyReport)}`);
        }
      }

      if (route.path === "/metodo-datalizacion") {
        const methodReport = await page.evaluate(() => ({
          operatingSteps: document.querySelectorAll(".method-flow-step").length,
          folders: document.querySelectorAll(".method-folder-detail").length,
          layers: document.querySelectorAll(".method-layer-card").length,
          channels: document.querySelectorAll(".method-channel-card").length,
          disclosures: document.querySelectorAll(".method-disclosure").length,
        }));
        if (
          methodReport.operatingSteps !== 6 ||
          methodReport.folders !== 12 ||
          methodReport.layers !== 6 ||
          methodReport.channels !== 8 ||
          methodReport.disclosures < 5
        ) {
          throw new Error(`Metodo de Datalizacion no cumple estructura esperada: ${JSON.stringify(methodReport)}`);
        }
      }
    }

    if (consoleMessages.length) {
      throw new Error(`Consola con warnings/errors en ${viewport.label}: ${consoleMessages.join(" | ")}`);
    }

    await context.close();
  }

  console.log("QA Playwright OK");
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
  await once(server, "exit").catch(() => {});
}

async function waitForServer() {
  const started = once(server.stdout, "data");
  const failed = once(server, "exit").then(([code]) => {
    throw new Error(`El servidor local termino antes de iniciar. Codigo: ${code}`);
  });
  await Promise.race([started, failed]);

  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (await canReachServer()) return;
    await delay(150);
  }
  throw new Error(`No se pudo alcanzar ${baseUrl}`);
}

function canReachServer() {
  return new Promise((resolve) => {
    const req = request(`${baseUrl}/`, { method: "HEAD", timeout: 1000 }, (response) => {
      response.resume();
      resolve(response.statusCode >= 200 && response.statusCode < 500);
    });
    req.on("error", () => resolve(false));
    req.on("timeout", () => {
      req.destroy();
      resolve(false);
    });
    req.end();
  });
}
