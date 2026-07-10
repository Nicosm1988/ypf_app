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
  { path: "/road-y-metodologia", selector: ".road-methodology-page", name: "Road y Metodologia" },
  { path: "/road-y-metodologia/fabric-end-to-end", selector: "#road-fabric-master-guide", name: "Road subseccion Fabric end-to-end" },
  { path: "/road-y-metodologia/oee-bi", selector: "#road-oee-bi", name: "Road subseccion OEE BI" },
  { path: "/guia-power-bi", selector: ".road-methodology-page", name: "Guia + Roadmap compat" },
  { path: "/metodo-datalizacion", selector: ".method-page", name: "Metodo de Datalizacion" },
  { path: "/metodo-datalizacion/backlog", selector: "#metodo-backlog", name: "Metodo subseccion Backlog" },
  { path: "/metodologia", selector: ".road-methodology-page", name: "Metodologia compat" },
  { path: "/design-system", selector: ".design-system-page", name: "Design System" },
  { path: "/design-system/componentes", selector: "#design-componentes", name: "Design System subseccion Componentes" },
  { path: "/datalito", selector: ".datalito-page", name: "Datalito" },
  { path: "/datalito/arquitectura", selector: "#datalito-arquitectura", name: "Datalito subseccion Arquitectura" },
  { path: "/productos", selector: ".products-page", name: "Productos" },
  { path: "/productos/power-bi", selector: ".product-detail-page", name: "Microsoft Power BI" },
  { path: "/productos/power-apps", selector: ".product-detail-page", name: "Microsoft Power Apps" },
  { path: "/productos/power-automate", selector: ".product-detail-page", name: "Microsoft Power Automate" },
  { path: "/diccionario", selector: ".dictionary-layout", name: "Diccionario" },
  { path: "/roadmap", selector: ".road-methodology-page", name: "Roadmap compat" },
  { path: "/proyecto-power-bi", selector: ".project-studio", name: "Proyecto Power BI" },
  { path: "/librerias", selector: ".tooling-grid", name: "Librerias" },
  { path: "/atajos", selector: ".shortcut-grid", name: "Atajos" },
];

const viewports = [
  { label: "desktop", width: 1440, height: 1100 },
  { label: "laptop", width: 1024, height: 900 },
  { label: "tablet", width: 768, height: 1024 },
  { label: "mobile", width: 390, height: 1000 },
  { label: "compact", width: 320, height: 900 },
];

const expectedProductNames = ["Microsoft Power BI", "Microsoft Power Apps", "Microsoft Power Automate"];
const productNamesByRoute = new Map([
  ["/productos/power-bi", "Microsoft Power BI"],
  ["/productos/power-apps", "Microsoft Power Apps"],
  ["/productos/power-automate", "Microsoft Power Automate"],
]);

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
    const networkMessages = [];
    page.on("console", (message) => {
      if (["error", "warning"].includes(message.type())) {
        consoleMessages.push(`${message.type()}: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => consoleMessages.push(`pageerror: ${error.message}`));
    page.on("requestfailed", (failedRequest) => {
      networkMessages.push(`requestfailed: ${failedRequest.method()} ${failedRequest.url()} (${failedRequest.failure()?.errorText || "sin detalle"})`);
    });
    page.on("response", (response) => {
      if (response.status() >= 400) {
        networkMessages.push(`response ${response.status()}: ${response.request().method()} ${response.url()}`);
      }
    });

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
          navRows: new Set([...document.querySelectorAll(".nav-menu-link")].map((item) => Math.round(item.getBoundingClientRect().top)))
            .size,
          mobileMenuButton: Boolean(document.querySelector("[data-mobile-menu-toggle]")),
          mobileMenuExpanded: document.querySelector("[data-mobile-menu-toggle]")?.getAttribute("aria-expanded") === "true",
          dropdowns: document.querySelectorAll(".nav-dropdown").length,
          dropdownLinks: document.querySelectorAll(".nav-dropdown a").length,
          footerColumns: document.querySelectorAll(".footer-map > div").length,
          footerProducts: document.querySelectorAll('.footer-map a[href="/productos"]').length,
          productsTopLevel: [...document.querySelectorAll(".main-nav > .nav-menu-item > .nav-menu-link")].filter(
            (item) => item.textContent.trim() === "Productos" && item.getAttribute("href") === "/productos",
          ).length,
          resourcesTopLevel: [...document.querySelectorAll(".main-nav > .nav-menu-item > .nav-menu-link")].filter(
            (item) => item.textContent.trim() === "Recursos",
          ).length,
          metrics: document.querySelectorAll(".platform-metric").length,
          hubNavCards: document.querySelectorAll(".hub-nav-card").length,
          researchCards: document.querySelectorAll(".home-research-card").length,
          pillars: document.querySelectorAll(".platform-pillar").length,
          definitionCards: document.querySelectorAll(".platform-definition-card").length,
          timelineCards: document.querySelectorAll(".platform-timeline-card").length,
          disciplineCards: document.querySelectorAll(".platform-discipline-card").length,
          evaluationCta: document.querySelectorAll(".method-model-cta").length,
          fragmentedNav: [...document.querySelectorAll(".main-nav a")].some((item) =>
            ["Qué es", "Pilares", "Intake", "Índice", "Ponderación", "Metadata", "Alcance BMC"].includes(item.textContent.trim()),
          ),
          hero: document.querySelector(".hero h1")?.textContent?.trim(),
        }));
        const navStructureOk =
          viewport.width <= 980 ? homeReport.mobileMenuButton && !homeReport.mobileMenuExpanded : homeReport.navRows === 1;
        if (
          !navStructureOk ||
          homeReport.dropdowns < 6 ||
          homeReport.dropdownLinks < 30 ||
          homeReport.footerColumns !== 4 ||
          homeReport.footerProducts !== 1 ||
          homeReport.productsTopLevel !== 1 ||
          homeReport.resourcesTopLevel !== 0 ||
          homeReport.metrics !== 3 ||
          homeReport.hubNavCards !== 8 ||
          homeReport.researchCards !== 5 ||
          homeReport.pillars !== 3 ||
          homeReport.definitionCards !== 3 ||
          homeReport.timelineCards !== 3 ||
          homeReport.disciplineCards !== 4 ||
          homeReport.evaluationCta !== 1 ||
          homeReport.fragmentedNav ||
          !homeReport.hero?.includes("disciplina interna")
        ) {
          throw new Error(`Inicio no cumple estructura ejecutiva esperada: ${JSON.stringify(homeReport)}`);
        }
      }

      if (route.path === "/productos") {
        const catalogReport = await page.evaluate(() => ({
          cards: document.querySelectorAll(".products-page .product-grid .product-card").length,
          names: [...document.querySelectorAll(".products-page .product-card h2")].map((item) => item.textContent.trim()),
          gridColumns: getComputedStyle(document.querySelector(".products-page .product-grid")).gridTemplateColumns.split(" ").length,
        }));
        const expectedGridColumns = viewport.width > 980 ? 3 : 1;
        if (
          catalogReport.cards !== 3 ||
          JSON.stringify(catalogReport.names) !== JSON.stringify(expectedProductNames) ||
          catalogReport.gridColumns !== expectedGridColumns
        ) {
          throw new Error(`Productos no cumple el catálogo esperado: ${JSON.stringify(catalogReport)}`);
        }
      }

      if (productNamesByRoute.has(route.path)) {
        const expectedName = productNamesByRoute.get(route.path);
        const detailReport = await page.evaluate(() => {
          const switcher = document.querySelector(".product-detail-page .product-switcher");
          const activeSwitch = switcher?.querySelector('[aria-current="page"]');
          const switcherRect = switcher?.getBoundingClientRect();
          const activeSwitchRect = activeSwitch?.getBoundingClientRect();
          const logo = document.querySelector(".product-detail-page .product-identity .product-official-icon");
          const logoRect = logo?.getBoundingClientRect();
          const logoStyles = logo ? getComputedStyle(logo) : null;
          const panelIds = [...document.querySelectorAll(".product-detail-page .unified-flow-panel")].map((panel) => panel.id);

          return {
            productName: document.querySelector(".product-detail-page .product-identity h1")?.textContent?.trim(),
            switchLinks: document.querySelectorAll(".product-detail-page .product-switcher a").length,
            switchNames: [...document.querySelectorAll(".product-detail-page .product-switcher a")].map((item) => item.textContent.trim()),
            activeSwitchLinks: document.querySelectorAll('.product-detail-page .product-switcher a[aria-current="page"]').length,
            activeSwitchVisible:
              Boolean(switcherRect && activeSwitchRect) &&
              activeSwitchRect.left >= switcherRect.left - 2 &&
              activeSwitchRect.right <= switcherRect.right + 2,
            nodes: document.querySelectorAll(".product-detail-page .unified-flow-node").length,
            panels: panelIds.length,
            uniquePanelIds: new Set(panelIds).size,
            expandedNodes: document.querySelectorAll('.product-detail-page .unified-flow-node[aria-expanded="true"]').length,
            visiblePanels: document.querySelectorAll(".product-detail-page .unified-flow-panel:not([hidden])").length,
            commonControlItems: document.querySelectorAll(".product-control-groups > div:first-child li").length,
            specificControlItems: document.querySelectorAll(".product-control-groups > div:last-child li").length,
            controlsMatch: [...document.querySelectorAll(".product-detail-page .unified-flow-node")].every((node) => {
              const panelId = node.getAttribute("aria-controls");
              return panelId && document.getElementById(panelId)?.classList.contains("unified-flow-panel");
            }),
            logo: logo
              ? {
                  alt: logo.getAttribute("alt"),
                  local: logo.currentSrc.startsWith(location.origin + "/assets/microsoft/power-platform/"),
                  square: Math.abs(logoRect.width - logoRect.height) < 0.5,
                  filter: logoStyles.filter,
                  transform: logoStyles.transform,
                  animationName: logoStyles.animationName,
                  clipPath: logoStyles.clipPath,
                  objectFit: logoStyles.objectFit,
                  opacity: logoStyles.opacity,
                }
              : null,
          };
        });
        if (
          detailReport.productName !== expectedName ||
          detailReport.switchLinks !== 3 ||
          JSON.stringify(detailReport.switchNames) !== JSON.stringify(expectedProductNames) ||
          detailReport.activeSwitchLinks !== 1 ||
          !detailReport.activeSwitchVisible ||
          detailReport.nodes !== 9 ||
          detailReport.panels !== 9 ||
          detailReport.uniquePanelIds !== 9 ||
          detailReport.expandedNodes !== 1 ||
          detailReport.visiblePanels !== 1 ||
          detailReport.commonControlItems < 1 ||
          detailReport.specificControlItems < 1 ||
          !detailReport.controlsMatch ||
          !detailReport.logo?.local ||
          detailReport.logo.alt !== "" ||
          !detailReport.logo.square ||
          detailReport.logo.filter !== "none" ||
          detailReport.logo.transform !== "none" ||
          detailReport.logo.animationName !== "none" ||
          detailReport.logo.clipPath !== "none" ||
          detailReport.logo.objectFit !== "contain" ||
          detailReport.logo.opacity !== "1"
        ) {
          throw new Error(`${route.name} no cumple el flujo de producto esperado: ${JSON.stringify(detailReport)}`);
        }
      }

      if (route.path === "/productos/power-bi") {
        const nodes = page.locator(".product-detail-page .unified-flow-node");
        await nodes.nth(1).click();
        const clickedGateReport = await page.evaluate(() => ({
          firstExpanded: document.querySelectorAll(".product-detail-page .unified-flow-node")[0]?.getAttribute("aria-expanded"),
          secondExpanded: document.querySelectorAll(".product-detail-page .unified-flow-node")[1]?.getAttribute("aria-expanded"),
          hiddenPanels: [...document.querySelectorAll(".product-detail-page .unified-flow-panel")].map((panel) => panel.hidden),
        }));
        if (
          clickedGateReport.firstExpanded !== "false" ||
          clickedGateReport.secondExpanded !== "true" ||
          clickedGateReport.hiddenPanels[1] !== false ||
          clickedGateReport.hiddenPanels.filter((hidden) => !hidden).length !== 1
        ) {
          throw new Error(`El click de gate no sincroniza aria-expanded/hidden: ${JSON.stringify(clickedGateReport)}`);
        }

        await nodes.nth(2).focus();
        await nodes.nth(2).press("Enter");
        const keyboardGateReport = await page.evaluate(() => ({
          thirdExpanded: document.querySelectorAll(".product-detail-page .unified-flow-node")[2]?.getAttribute("aria-expanded"),
          thirdPanelHidden: document.querySelectorAll(".product-detail-page .unified-flow-panel")[2]?.hidden,
          visiblePanels: document.querySelectorAll(".product-detail-page .unified-flow-panel:not([hidden])").length,
        }));
        if (keyboardGateReport.thirdExpanded !== "true" || keyboardGateReport.thirdPanelHidden || keyboardGateReport.visiblePanels !== 1) {
          throw new Error(`El teclado no activa el gate esperado: ${JSON.stringify(keyboardGateReport)}`);
        }

        await nodes.nth(3).focus();
        await nodes.nth(3).press("Space");
        const spaceGateReport = await page.evaluate(() => ({
          fourthExpanded: document.querySelectorAll(".product-detail-page .unified-flow-node")[3]?.getAttribute("aria-expanded"),
          fourthPanelHidden: document.querySelectorAll(".product-detail-page .unified-flow-panel")[3]?.hidden,
          visiblePanels: document.querySelectorAll(".product-detail-page .unified-flow-panel:not([hidden])").length,
        }));
        if (spaceGateReport.fourthExpanded !== "true" || spaceGateReport.fourthPanelHidden || spaceGateReport.visiblePanels !== 1) {
          throw new Error(`La tecla Espacio no activa el gate esperado: ${JSON.stringify(spaceGateReport)}`);
        }

        const expandedAccessibility = await new AxeBuilder({ page }).analyze();
        if (expandedAccessibility.violations.length) {
          const summary = expandedAccessibility.violations
            .map((violation) => `${violation.id}: ${violation.nodes.length} nodo(s)`)
            .join("; ");
          throw new Error(`Power BI con otro gate abierto (${viewport.label}) tiene violaciones de accesibilidad: ${summary}`);
        }

        await page.locator('.product-switcher a[href="/productos/power-apps"]').click();
        await page.waitForURL(`${baseUrl}/productos/power-apps`);
        await page.locator('.product-detail-page[data-product="power-apps"]').waitFor({ state: "visible" });
        if (viewport.label === "desktop") {
          await page.goBack({ waitUntil: "networkidle" });
          await page.waitForURL(`${baseUrl}/productos/power-bi`);
          await page.locator('.product-detail-page[data-product="power-bi"]').waitFor({ state: "visible" });
          await page.goForward({ waitUntil: "networkidle" });
          await page.waitForURL(`${baseUrl}/productos/power-apps`);
          await page.locator('.product-detail-page[data-product="power-apps"]').waitFor({ state: "visible" });
        }
        await page.locator('.product-switcher a[href="/productos/power-automate"]').click();
        await page.waitForURL(`${baseUrl}/productos/power-automate`);
        await page.locator('.product-detail-page[data-product="power-automate"]').waitFor({ state: "visible" });
        await page.waitForFunction(() => {
          const switcher = document.querySelector(".product-switcher");
          const active = switcher?.querySelector('[aria-current="page"]');
          if (!switcher || !active) return false;
          const switcherRect = switcher.getBoundingClientRect();
          const activeRect = active.getBoundingClientRect();
          return activeRect.left >= switcherRect.left - 2 && activeRect.right <= switcherRect.right + 2;
        });
        if (viewport.label === "desktop") {
          await page.setViewportSize({ width: 320, height: 900 });
          await page.waitForFunction(() => {
            const switcher = document.querySelector(".product-switcher");
            const active = switcher?.querySelector('[aria-current="page"]');
            if (!switcher || !active) return false;
            const switcherRect = switcher.getBoundingClientRect();
            const activeRect = active.getBoundingClientRect();
            return activeRect.left >= switcherRect.left - 2 && activeRect.right <= switcherRect.right + 2;
          });
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
        }
      }

      if (viewport.label === "desktop" && route.path === "/design-system") {
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

      if (viewport.label === "desktop" && route.path === "/datalito") {
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
        await page.waitForFunction(() =>
          [...document.querySelectorAll(".datalito-message")].some((item) => item.textContent.includes("Qué bueno verte por acá")),
        );

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
        await page.waitForFunction(() =>
          [...document.querySelectorAll(".datalito-message")].some((item) =>
            item.textContent.includes("No lo tengo en la base aprobada todavía"),
          ),
        );

        const datalitoChatReport = await page.evaluate(() => ({
          assistantMessages: document.querySelectorAll(".datalito-message.assistant").length,
          greeting: [...document.querySelectorAll(".datalito-message")].some((item) =>
            item.textContent.includes("Qué bueno verte por acá"),
          ),
          workflow: [...document.querySelectorAll(".datalito-message")].some((item) =>
            item.textContent.includes("Roadmap y gates BI end-to-end"),
          ),
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
        await page.waitForFunction(() =>
          [...document.querySelectorAll(".datalito-source-card")].some((item) => item.href.includes("#flujo-continuo")),
        );
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

      if (viewport.label === "desktop" && route.path === "/road-y-metodologia") {
        const methodologyReport = await page.evaluate(() => ({
          thesisCards: document.querySelectorAll(".road-thesis-card").length,
          processSteps: document.querySelectorAll(".methodology-process-step").length,
          processBlocks: document.querySelectorAll(".process-block").length,
          guideSteps: document.querySelectorAll(".guide-journey-step").length,
          flowPanels: document.querySelectorAll(".unified-flow-panel").length,
          oeeFactors: document.querySelectorAll(".oee-factor").length,
          dmaicStages: document.querySelectorAll(".dmaic-stage").length,
          conceptConnector: getComputedStyle(document.querySelector(".concept-tree-grid"), "::before").content,
        }));
        if (
          methodologyReport.thesisCards !== 3 ||
          methodologyReport.processSteps !== 9 ||
          methodologyReport.processBlocks !== 54 ||
          methodologyReport.guideSteps !== 9 ||
          methodologyReport.flowPanels !== 9 ||
          methodologyReport.oeeFactors !== 3 ||
          methodologyReport.dmaicStages !== 5 ||
          methodologyReport.conceptConnector !== "none"
        ) {
          throw new Error(`Road y Metodologia no cumple estructura esperada: ${JSON.stringify(methodologyReport)}`);
        }
      }

      if (viewport.label === "desktop" && route.path === "/metodo-datalizacion") {
        const methodReport = await page.evaluate(() => ({
          operatingSteps: document.querySelectorAll(".method-flow-step").length,
          folders: document.querySelectorAll(".method-folder-detail").length,
          layers: document.querySelectorAll(".method-layer-card").length,
          channels: document.querySelectorAll(".method-channel-card").length,
          disclosures: document.querySelectorAll(".method-disclosure").length,
          evaluationModules: document.querySelectorAll("#modelo-evaluacion-datalizacion").length,
          evaluationPillars: document.querySelectorAll(".method-evaluation-pillar").length,
          evaluationMetadata: document.querySelectorAll(".method-evaluation-metadata span").length,
          vmcCopy: document.querySelector("#modelo-evaluacion-datalizacion")?.textContent.includes("VMC"),
          bmcCopy: document.querySelector("#modelo-evaluacion-datalizacion")?.textContent.includes("BMC"),
        }));
        if (
          methodReport.operatingSteps !== 6 ||
          methodReport.folders !== 12 ||
          methodReport.layers !== 6 ||
          methodReport.channels !== 8 ||
          methodReport.disclosures < 5 ||
          methodReport.evaluationModules !== 1 ||
          methodReport.evaluationPillars !== 5 ||
          methodReport.evaluationMetadata < 20 ||
          !methodReport.vmcCopy ||
          methodReport.bmcCopy
        ) {
          throw new Error(`Metodo de Datalizacion no cumple estructura esperada: ${JSON.stringify(methodReport)}`);
        }
      }
    }

    const sourceFlowLayout = await inspectFlowLayout(page, "/road-y-metodologia", "#road-flujo-bi");
    const productFlowLayout = await inspectFlowLayout(page, "/productos/power-bi", "#power-bi-flow");
    if (JSON.stringify(sourceFlowLayout) !== JSON.stringify(productFlowLayout)) {
      throw new Error(
        `El flujo Power BI no conserva el comportamiento responsive de la fuente (${viewport.label}): ${JSON.stringify({
          sourceFlowLayout,
          productFlowLayout,
        })}`,
      );
    }
    const expectsIntermediateScroller = viewport.width > 720 && viewport.width <= 980;
    if (
      sourceFlowLayout.viewportScrollable !== expectsIntermediateScroller ||
      sourceFlowLayout.viewportRole !== "region" ||
      sourceFlowLayout.viewportTabIndex !== (expectsIntermediateScroller ? 0 : -1) ||
      (expectsIntermediateScroller && sourceFlowLayout.canvasWidth < 1300)
    ) {
      throw new Error(
        `El flujo no conserva una adaptación horizontal identificable en ${viewport.label}: ${JSON.stringify(sourceFlowLayout)}`,
      );
    }

    if (consoleMessages.length) {
      throw new Error(`Consola con warnings/errors en ${viewport.label}: ${consoleMessages.join(" | ")}`);
    }
    if (networkMessages.length) {
      throw new Error(`Red con requests fallidos o respuestas 4xx/5xx en ${viewport.label}: ${networkMessages.join(" | ")}`);
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

async function inspectFlowLayout(page, path, selector) {
  await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
  await page.locator(selector).waitFor({ state: "visible", timeout: 7000 });
  return page.locator(selector).evaluate((flow) => {
    const viewport = flow.querySelector(".unified-flow-viewport");
    const canvas = flow.querySelector(".unified-flow-canvas");
    const line = flow.querySelector(".unified-flow-lines");
    const runner = flow.querySelector(".unified-flow-runner");
    const node = flow.querySelector(".unified-flow-node");
    const rail = flow.querySelector(".unified-flow-rail");
    const canvasStyles = getComputedStyle(canvas);
    const nodeStyles = getComputedStyle(node);
    const railStyles = getComputedStyle(rail);
    const titleStyles = getComputedStyle(flow.querySelector(".flow-canvas-copy h2"));
    const viewportStyles = getComputedStyle(viewport);

    return {
      viewportScrollable:
        ["auto", "scroll"].includes(viewportStyles.overflowX) && viewport.scrollWidth > viewport.clientWidth + 2,
      viewportOverflowX: viewportStyles.overflowX,
      viewportRole: viewport.getAttribute("role"),
      viewportTabIndex: viewport.tabIndex,
      canvasDisplay: canvasStyles.display,
      canvasWidth: canvas.getBoundingClientRect().width,
      canvasGridColumns: canvasStyles.gridTemplateColumns,
      canvasOverflowX: canvasStyles.overflowX,
      canvasOverflowY: canvasStyles.overflowY,
      canvasPadding: canvasStyles.padding,
      linesDisplay: getComputedStyle(line).display,
      runnerDisplay: getComputedStyle(runner).display,
      nodePosition: nodeStyles.position,
      nodeWidth: nodeStyles.width,
      titleWhiteSpace: titleStyles.whiteSpace,
      railGridColumns: railStyles.gridTemplateColumns,
      nodeCount: flow.querySelectorAll(".unified-flow-node").length,
      panelCount: flow.querySelectorAll(".unified-flow-panel").length,
    };
  });
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
