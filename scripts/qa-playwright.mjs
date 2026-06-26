import AxeBuilder from "@axe-core/playwright";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { request } from "node:http";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const port = Number(process.env.QA_PORT || 8123);
const baseUrl = `http://127.0.0.1:${port}`;
const routes = [
  { path: "/", selector: ".datalization-home", name: "Inicio" },
  { path: "/que-es-datalizacion", selector: ".definition-compare", name: "Que es Datalizacion" },
  { path: "/pilares-datalizacion", selector: ".pillar-system", name: "Pilares de Datalizacion" },
  { path: "/intake-aprobacion", selector: ".intake-funnel", name: "Intake y Aprobacion" },
  { path: "/indice-datalizacion", selector: ".score-ring", name: "Indice de Datalizacion" },
  { path: "/ponderacion-esfuerzo", selector: ".weight-grid", name: "Ponderacion y Esfuerzo" },
  { path: "/metadata-documentacion", selector: ".metadata-grid", name: "Metadata y Documentacion" },
  { path: "/alcance-bmc", selector: ".scope-grid", name: "Alcance BMC" },
  { path: "/metodologia-flujo", selector: ".framework-flow-track", name: "Metodologia y Flujo" },
  { path: "/recursos-templates", selector: ".resource-grid", name: "Recursos y Templates" },
  { path: "/roadmap-futuro", selector: ".future-roadmap", name: "Roadmap futuro" },
  { path: "/guia-power-bi", selector: ".guide-journey", name: "Guia + Roadmap" },
  { path: "/metodo-datalizacion", selector: ".method-page", name: "Metodo de Datalizacion" },
  { path: "/metodologia", selector: ".methodology-process", name: "Metodologia" },
  { path: "/design-system", selector: ".design-system-page", name: "Design System" },
  { path: "/datalito", selector: ".datalito-page", name: "Datalito" },
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
          metrics: document.querySelectorAll(".framework-strip .framework-card").length,
          pillarCards: document.querySelectorAll(".pillar-card").length,
          actionCards: document.querySelectorAll(".framework-action").length,
          scoreRing: Boolean(document.querySelector(".score-ring")),
          flowSteps: document.querySelectorAll(".framework-flow-step").length,
          hero: document.querySelector(".framework-hero h1")?.textContent?.trim(),
        }));
        if (
          homeReport.metrics !== 4 ||
          homeReport.pillarCards !== 5 ||
          homeReport.actionCards !== 8 ||
          !homeReport.scoreRing ||
          homeReport.flowSteps !== 7 ||
          !homeReport.hero?.includes("Datalizar no es solo automatizar")
        ) {
          throw new Error(`Inicio no cumple estructura de datalizacion esperada: ${JSON.stringify(homeReport)}`);
        }
      }

      if (route.path === "/pilares-datalizacion") {
        const pillarReport = await page.evaluate(() => ({
          pillarCards: document.querySelectorAll(".pillar-card").length,
          openCards: document.querySelectorAll(".pillar-card[open]").length,
          total: document.querySelector(".pillar-core strong")?.textContent?.trim(),
        }));
        if (pillarReport.pillarCards !== 5 || pillarReport.openCards !== 5 || pillarReport.total !== "100%") {
          throw new Error(`Pilares no cumple estructura esperada: ${JSON.stringify(pillarReport)}`);
        }
      }

      if (route.path === "/metadata-documentacion") {
        const metadataReport = await page.evaluate(() => ({
          groups: document.querySelectorAll(".metadata-group").length,
          samples: document.querySelectorAll(".metadata-sample").length,
        }));
        if (metadataReport.groups !== 5 || metadataReport.samples < 3) {
          throw new Error(`Metadata no cumple estructura esperada: ${JSON.stringify(metadataReport)}`);
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

      if (route.path === "/datalito") {
        const datalitoReport = await page.evaluate(() => ({
          heroMetrics: document.querySelectorAll(".datalito-hero-metrics article").length,
          avatars: document.querySelectorAll(".datalito-avatar img").length,
          principles: document.querySelectorAll(".datalito-intro .datalito-card").length,
          architecture: document.querySelectorAll(".datalito-architecture .datalito-card").length,
          kpis: document.querySelectorAll(".datalito-kpi-card").length,
          launcher: Boolean(document.querySelector(".datalito-launcher")),
        }));
        if (
          datalitoReport.heroMetrics !== 3 ||
          datalitoReport.avatars < 3 ||
          datalitoReport.principles !== 3 ||
          datalitoReport.architecture !== 4 ||
          datalitoReport.kpis < 6 ||
          !datalitoReport.launcher
        ) {
          throw new Error(`Datalito no cumple estructura esperada: ${JSON.stringify(datalitoReport)}`);
        }

        await page.locator("#datalitoInput-page").fill("hola");
        await page.locator('[data-datalito-chat="page"] form button[type="submit"]').click();
        await page.waitForFunction(() => [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("Qué bueno verte por acá")));

        await page.locator("#datalitoInput-page").fill("¿Cuál es la diferencia entre PRD y Spec?");
        await page.locator('[data-datalito-chat="page"] form button[type="submit"]').click();
        await page.waitForFunction(() => document.querySelectorAll(".datalito-source-card").length > 0);

        await page.locator("#datalitoInput-page").fill("cómo armo un flujo de trabajo completo en bi?");
        await page.locator('[data-datalito-chat="page"] form button[type="submit"]').click();
        await page.waitForFunction(() =>
          [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("Roadmap y gates BI end-to-end")),
        );

        await page.locator("#datalitoInput-page").fill("Dame un ejemplo funcional.");
        await page.locator('[data-datalito-chat="page"] form button[type="submit"]').click();
        await page.waitForFunction(() =>
          [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("ejemplo funcional")),
        );

        await page.locator("#datalitoInput-page").fill("¿Cuál es el color del tanque 782 del puerto Alpha?");
        await page.locator('[data-datalito-chat="page"] form button[type="submit"]').click();
        await page.waitForFunction(() => [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("No lo tengo en la base aprobada todavía")));

        const datalitoChatReport = await page.evaluate(() => ({
          assistantMessages: document.querySelectorAll(".datalito-message.assistant").length,
          greeting: [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("Qué bueno verte por acá")),
          workflow: [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("Roadmap y gates BI end-to-end")),
          followUp: [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("ejemplo funcional")),
          citations: document.querySelectorAll(".datalito-source-card").length,
          unresolved: [...document.querySelectorAll(".datalito-message")].some((item) =>
            item.textContent.includes("No lo tengo en la base aprobada todavía"),
          ),
          mascot: Boolean(document.querySelector(".datalito-launcher .datalito-avatar.launcher img")),
          mascotSource: document.querySelector(".datalito-launcher .datalito-avatar.launcher img")?.currentSrc || "",
          mascotFrame: getComputedStyle(document.querySelector(".datalito-avatar.launcher")).borderWidth !== "0px",
          mascotBackground: getComputedStyle(document.querySelector(".datalito-avatar.launcher")).backgroundColor,
          altNoise: document.body.innerText.includes("Datalito, asistente de conocimiento"),
        }));
        if (
          datalitoChatReport.assistantMessages < 6 ||
          !datalitoChatReport.greeting ||
          !datalitoChatReport.workflow ||
          !datalitoChatReport.followUp ||
          datalitoChatReport.citations < 1 ||
          !datalitoChatReport.unresolved ||
          !datalitoChatReport.mascot ||
          !datalitoChatReport.mascotSource.includes("datalito-robot-v22") ||
          datalitoChatReport.mascotFrame ||
          datalitoChatReport.mascotBackground !== "rgba(0, 0, 0, 0)" ||
          datalitoChatReport.altNoise
        ) {
          throw new Error(`Datalito no responde con citas y no-answer: ${JSON.stringify(datalitoChatReport)}`);
        }

        await page.locator("#datalitoInput-page").fill("¿Qué es flujo continuo?");
        await page.locator('[data-datalito-chat="page"] form button[type="submit"]').click();
        await page.waitForFunction(() => [...document.querySelectorAll(".datalito-source-card")].some((item) => item.href.includes("#flujo-continuo")));
        await page.locator('.datalito-source-card[href*="#flujo-continuo"]').first().click();
        await page.waitForURL(/\/diccionario#flujo-continuo$/);
        await page.waitForFunction(() => {
          const target = document.getElementById("flujo-continuo");
          if (!target) return false;
          const rect = target.getBoundingClientRect();
          return window.location.hash === "#flujo-continuo" && rect.top >= 0 && rect.top < window.innerHeight * 0.55;
        });
        const anchored = await page.evaluate(() => {
          const target = document.getElementById("flujo-continuo");
          if (!target) return false;
          const rect = target.getBoundingClientRect();
          return window.location.hash === "#flujo-continuo" && rect.top >= 0 && rect.top < window.innerHeight * 0.55;
        });
        if (!anchored) throw new Error("El link de fuente de Datalito no navega al ancla #flujo-continuo.");
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
