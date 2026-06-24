# Datalización YPF

Portal interno para el área de Datalización de YPF con recursos de consulta y trabajo.

Datalización es la práctica de automatizar procesos mediante datos confiables, reglas explícitas, acciones trazables y operación monitoreada. La web está replanteada con una estructura ejecutiva de síntesis, razones, evidencia, acción y control.

- Guía + roadmap BI/Fabric para ordenar el ciclo completo desde proceso y reglas hasta operación.
- Metodología de mejora continua BI con OEE BI, DMAIC, Lean Six Sigma, 4P Toyota, VSM, FMEA, Kaizen, flujo continuo, SMED, Poka-Yoke y Kata.
- Narrativa ejecutiva en cada página para presentar primero la conclusión, luego los argumentos y finalmente la evidencia operativa.
- Diccionario BI para alinear conceptos de automatización, datos, Power BI, Fabric, performance, gobierno y adopción.
- Roadmap BI integrado en la guía, estructurado en 9 gates de ingeniería: PRD/Spec, datos/Power Query, modelado, DAX, seguridad/gobierno, UX/acción, versionado/aprobación, publicación y operación/mejora.
- Proyecto de Power BI con Visual Studio para trabajar procesos, Spec, PBIP, TMDL, Git y documentación con criterio.
- Catálogo de librerías, agentes, MCPs y sandboxes guardado en documentación local.
- Sistema repo-local de skills, agentes, MCP registry y QA automatizada para evolucionar la web con criterio productivo.
- Atajos Power BI extraidos del PDF local del repo.

La app es estatica, sin credenciales, sin datos sensibles y compatible con Vercel.

## Stack

- HTML, CSS y JavaScript vanilla.
- Modulos ES para separar datos de UI.
- Contenido local editable en `data/dictionary.js`, `data/engineeringGuide.js`, `data/methodology.js`, `data/executiveNarrative.js`, `data/roadmap.js`, `data/toolingLibrary.js` y `data/powerbiShortcuts.js`.
- Documentación técnica en `docs/librerias-agentes-mcp.md`.
- Skills repo-locales en `.codex/skills`.
- Agentes operativos en `.codex/agents`.
- Registry MCP gobernado en `.mcp/registry.json`.
- QA automatizada con Playwright, axe-core, ESLint, Stylelint, HTML Validate, Markdownlint y Prettier.
- Modelos descargables en `docs/modelos/prd-datalizacion.md` y `docs/modelos/spec-datalizacion.md`.
- Deploy estatico en Vercel.

## Correr localmente

```bash
npm run dev
```

Luego abrir:

```text
http://127.0.0.1:8001/
```

El servidor local tambien soporta:

```text
http://127.0.0.1:8001/guia-power-bi
http://127.0.0.1:8001/metodologia
http://127.0.0.1:8001/diccionario
http://127.0.0.1:8001/roadmap
http://127.0.0.1:8001/proyecto-power-bi
http://127.0.0.1:8001/librerias
http://127.0.0.1:8001/atajos
```

## Validar build

```bash
npm run build
```

El build valida que:

- Exista Home, Guía Power BI/Fabric, Metodología, Diccionario BI, Roadmap BI, Proyecto Power BI, Librerías y Atajos.
- El diccionario tenga al menos 65 términos.
- El roadmap tenga los 9 gates obligatorios y arranque con PRD/Spec.
- La guía tenga capítulos, comparacion PRD vs Spec y checklist de salida a producción.
- La metodología tenga OEE BI, DMAIC, Lean Six Sigma, 4P Toyota, VSM, FMEA, Kaizen, SMED, Poka-Yoke, Kata y cadencias de operación.
- Cada página principal tenga narrativa ejecutiva con tesis, tres soportes y acción.
- El sitio incluya un árbol de decantación conceptual con niveles y ramas claras.
- El catálogo técnico tenga documentación Markdown y familias de herramientas.
- Los atajos tengan categorías e items navegables.
- Los datos tengan los campos requeridos.
- Vercel tenga rewrites para `/guia-power-bi`, `/metodologia`, `/diccionario`, `/roadmap`, `/proyecto-power-bi`, `/librerias` y `/atajos`.
- Se genere `dist/` con las rutas estaticas listas para Vercel.

## Validar calidad completa

```bash
npm run quality
```

Este comando corre build, lint, validacion de agentes/skills/MCP y QA con navegador real.

Comandos parciales:

```bash
npm run lint
npm run qa:agents
npm run qa:links
npm run qa:e2e
npm audit
```

Si Playwright necesita instalar Chromium en una maquina nueva:

```bash
npm run qa:install-browsers
```

## Desplegar en Vercel

El proyecto está preparado para deploy estatico.

Si el proyecto ya está linkeado a Vercel:

```bash
vercel deploy --prod
```

Si se despliega desde GitHub, Vercel puede publicar automáticamente cuando haya push a la rama configurada.

## Agregar términos al diccionario

Editar `data/dictionary.js` y agregar un objeto en `dictionaryTerms`:

```js
{
  id: "nuevo-término",
  term: "Nuevo término",
  category: "Datos",
  definition: "Definición simple.",
  whyItMatters: "Por qué importa para el equipo.",
  example: "Ejemplo breve.",
  risk: "Riesgo de entenderlo mal."
}
```

Las categorías disponibles estan en `dictionaryCategories`.

## Editar gates del roadmap

Editar `data/roadmap.js` y modificar `roadmapPhases`.

Cada gate debe mantener esta estructura:

```js
{
  id: 0,
  title: "PRD y Spec",
  lane: "Producto y negocio",
  objective: "Objetivo del gate.",
  keyActivities: ["Actividad clave"],
  deliverables: ["Entregable"],
  owner: "Responsable principal",
  riskIfSkipped: "Riesgo si se saltea.",
  gate: "Gate A - Alineacion"
}
```

El roadmap debe comenzar con PRD y Spec. La publicación productiva es un gate propio y ocurre después de versionado, pruebas y aprobación.

## Editar guía + roadmap Power BI/Fabric

Editar `data/engineeringGuide.js`.

- `prdSpecComparison`: tabla de comparacion entre PRD y Spec.
- `guideSections`: capítulos de la guía.
- `readinessChecklist`: checklist previo a producción.

El flujo interactivo combina esos capítulos con los 9 gates de `data/roadmap.js`.

## Editar metodología de mejora continua BI

Editar `data/methodology.js`.

- `oeeFactors`: disponibilidad, eficiencia y calidad traducidas al contexto BI.
- `dmaicStages`: ciclo definir, medir, analizar, mejorar y controlar.
- `methodologyTools`: ubicación de Lean Six Sigma, VSM, OEE BI, FMEA, VSM futuro y Kaizen/Kata.
- `toyotaFourP`: filosofía, proceso, personas y resolución de problemas.
- `leanPractices`: flujo continuo, SMED, Poka-Yoke, Kaizen y Kata.
- `methodologyCadence`: rutina diaria, semanal, release y comité mensual.

## Editar narrativa ejecutiva

Editar `data/executiveNarrative.js`.

- Cada página debe tener una tesis ejecutiva, un resumen, tres soportes no superpuestos y una acción.
- Los títulos deben funcionar como conclusiones, no como etiquetas decorativas.
- No usar saltos de línea HTML forzados para construir sentido; el texto debe fluir correctamente con el wrap natural del navegador.
- El árbol de decantación conceptual debe bajar desde decisión gerencial hasta ejecución y control.

## Editar librerías, agentes y MCPs

Editar `data/toolingLibrary.js` para la versión navegable y `docs/librerias-agentes-mcp.md` para la documentación Markdown.

El sistema de trabajo vive en:

- `.codex/skills`: skills especializados del portal.
- `.codex/agents`: agentes operativos y registry.
- `.mcp/registry.json`: MCPs recomendados, estado, riesgo y requerimiento de token.

Los MCPs que requieren credenciales no deben activarse sin aprobacion explicita ni guardar tokens en el repo.

## Editar atajos Power BI

El PDF fuente está en `assets/docs/atajos-power-bi.pdf`.

El resumen navegable se edita en `data/powerbiShortcuts.js`, agrupando cada atajo por categoría:

```js
{
  category: "Uso frecuente",
  intro: "Descripcion corta.",
  items: [
    { action: "Mover el foco entre secciones", keys: ["Ctrl", "F6"] }
  ]
}
```

## Seguridad

No subir información confidencial, credenciales ni datos sensibles.

No conectar esta versión a sistemas internos, APIs privadas, tokens ni fuentes reales sin una revisión de seguridad previa.

## Archivos principales

- `index.html`
- `styles.css`
- `app.js`
- `data/dictionary.js`
- `data/engineeringGuide.js`
- `data/methodology.js`
- `data/executiveNarrative.js`
- `data/roadmap.js`
- `data/toolingLibrary.js`
- `data/powerbiShortcuts.js`
- `docs/librerias-agentes-mcp.md`
- `assets/docs/atajos-power-bi.pdf`
- `scripts/dev-server.mjs`
- `scripts/validate-build.mjs`
- `vercel.json`
- `manifest.webmanifest`
- `service-worker.js`
