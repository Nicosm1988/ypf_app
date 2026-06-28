# Datalización YPF

Portal interno para el área de Datalización de YPF con recursos de consulta, gobierno y trabajo.

Datalización es la práctica de automatizar procesos mediante datos confiables, reglas explícitas, acciones trazables y operación monitoreada. La web está replanteada con una estructura ejecutiva de síntesis, razones, evidencia, acción y control.

- Portada ejecutiva Datalización Hub / BI Delivery Playbook para posicionar la plataforma como capacidad organizacional.
- Portadas con imagen industrial de alta calidad vinculada a refinería, ductos y puerto energético.
- Road y Metodología BI/Fabric para ordenar en una sola sección el ciclo completo, los gates, OEE BI, DMAIC y mejora continua.
- Método de Datalización v0.1 para organizar DEV/PROD, Teams, SharePoint, canales, carpetas, naming, backlog, VMC, gobierno y el Marco de Datalización VMC.
- Design System para consolidar patrones visuales, componentes, reglas de experiencia y criterios de calidad.
- Datalito, asistente interno de conocimiento con personaje animado, conversación natural, búsqueda local, citas, feedback y brechas.
- Narrativa ejecutiva en cada página para presentar primero la conclusión, luego los argumentos y finalmente la evidencia operativa.
- Mega menú y footer tipo mapa de plataforma, con secciones y subsecciones navegables como páginas internas.
- Diccionario BI para alinear conceptos de automatización, datos, Power BI, Fabric, performance, gobierno y adopción.
- Roadmap BI integrado en Road y Metodología, estructurado en 9 gates de ingeniería: PRD/Spec, datos/Power Query, modelado, DAX, seguridad/gobierno, UX/acción, versionado/aprobación, publicación y operación/mejora.
- Proyecto de Power BI con Visual Studio para trabajar procesos, Spec, PBIP, TMDL, Git y documentación con criterio.
- Catálogo de librerías, agentes, MCPs y sandboxes guardado en documentación local.
- Sistema repo-local de skills, agentes, MCP registry y QA automatizada para evolucionar la web con criterio productivo.
- Atajos Power BI extraidos del PDF local del repo.

La app es estatica, sin credenciales, sin datos sensibles y compatible con Vercel.

## Stack

- HTML, CSS y JavaScript vanilla.
- Modulos ES para separar datos de UI.
- Contenido local editable en `data/platformIntro.js`, `data/datalito.js`, `data/designSystem.js`, `data/dictionary.js`, `data/engineeringGuide.js`, `data/datalizationMethod.js`, `data/methodology.js`, `data/executiveNarrative.js`, `data/roadmap.js`, `data/toolingLibrary.js` y `data/powerbiShortcuts.js`.
- Documentación técnica en `docs/librerias-agentes-mcp.md` y documentación operativa de Datalito en `docs/datalito-*.md`.
- Casos de evaluación de Datalito en `evals/datalito`.
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
http://127.0.0.1:8001/road-y-metodologia
http://127.0.0.1:8001/metodo-datalizacion
http://127.0.0.1:8001/design-system
http://127.0.0.1:8001/datalito
http://127.0.0.1:8001/diccionario
http://127.0.0.1:8001/proyecto-power-bi
http://127.0.0.1:8001/librerias
http://127.0.0.1:8001/atajos
```

Las subsecciones principales también tienen URL propia para que el menú, el footer y los links internos puedan llevar directo al bloque correcto:

```text
http://127.0.0.1:8001/road-y-metodologia/oee-bi
http://127.0.0.1:8001/metodo-datalizacion/backlog
http://127.0.0.1:8001/design-system/componentes
http://127.0.0.1:8001/datalito/arquitectura
```

## Validar build

```bash
npm run build
```

El build valida que:

- Exista Home, Road y Metodología, Método de Datalización, Design System, Datalito, Diccionario BI, Proyecto Power BI, Librerías y Atajos.
- Exista mega menú con grupos, dropdowns y subsecciones; el footer funcione como mapa completo de navegación.
- La Home tenga portada ejecutiva Datalización Hub, narrativa Antes/Ahora/Después y transición de tableros a disciplina.
- La Home tenga una primera lectura con estructura de estudio, tesis y contribución operativa.
- La Home tenga botonera para las secciones principales, el Design System tenga estructura ejecutiva completa y Datalito tenga vertical slice funcional.
- El diccionario tenga al menos 65 términos.
- Road y Metodología tenga los 9 gates obligatorios, PRD/Spec, checklist de salida, OEE BI, DMAIC, Lean Six Sigma, 4P Toyota, VSM, FMEA, Kaizen, SMED, Poka-Yoke, Kata y cadencias de operación.
- El Método de Datalización tenga proceso end to end, separación DEV/PROD, 8 canales base, 12 subcarpetas estándar y naming gobernado.
- Cada página principal tenga narrativa ejecutiva con tesis, tres soportes y acción.
- El sitio incluya un árbol de decantación conceptual con niveles y ramas claras.
- Datalito tenga fuentes locales aprobadas, cinco modos de respuesta, controles de gobierno, KPIs, feedback, brechas y 170 preguntas benchmark.
- El catálogo técnico tenga documentación Markdown y familias de herramientas.
- Los atajos tengan categorías e items navegables.
- Los datos tengan los campos requeridos.
- Vercel tenga rewrites para páginas principales y subsecciones como `/road-y-metodologia/oee-bi`, manteniendo compatibilidad con `/guia-power-bi`, `/metodologia` y `/roadmap`.
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

## Editar Road y Metodología BI/Fabric

Editar `data/engineeringGuide.js`, `data/roadmap.js` y `data/methodology.js`.

- `prdSpecComparison`: tabla de comparacion entre PRD y Spec.
- `guideSections`: capítulos de la guía.
- `readinessChecklist`: checklist previo a producción.
- `roadmapPhases`: gates del roadmap.
- `oeeFactors`, `dmaicStages`, `methodologyTools`, `toyotaFourP`, `leanPractices` y `methodologyCadence`: marco metodológico de mejora continua BI.

La sección navegable vive en `/road-y-metodologia`; las subsecciones se exponen como rutas internas, por ejemplo `/road-y-metodologia/oee-bi` y `/road-y-metodologia/dmaic`. Las rutas antiguas `/guia-power-bi`, `/metodologia` y `/roadmap` quedan como compatibilidad.

## Editar portada ejecutiva

Editar `data/platformIntro.js`.

- `platformHeroMetrics`: capacidades principales que aparecen en el hero.
- `platformPillars`: ganancias ejecutivas del área.
- `platformDefinitionCards`: dimensiones de la definición de datalización.
- `platformBeforeAfter`: narrativa Antes, Ahora y Después.
- `platformCapabilityShift`: transición de tableros aislados a disciplina interna de inteligencia.

## Editar Design System

Editar `data/designSystem.js`.

- `designSystemDefinition`: definición ejecutiva del sistema.
- `designSystemComparison`: comparación Sin Design System / Con Design System.
- `designSystemBenefits`: beneficios esperados.
- `designSystemFoundations`: fundamentos.
- `designSystemPrinciples`: principios de diseño.
- `designSystemScope`: alcance inicial.
- `designSystemComponents`: componentes esperados.
- `designSystemDeliverables` y `designSystemQualityRules`: entregables y reglas.

## Editar Datalito

Editar `data/datalito.js`.

- `datalitoKnowledgeSources`: índice local de fuentes aprobadas con metadata, contenido, URL canónica y checksum.
- `datalitoAnswerModes`: modos breve, ejecutivo, funcional, técnico y paso a paso.
- `datalitoSuggestedPrompts`: preguntas sugeridas por ruta.
- `datalitoProductPrinciples`, `datalitoGovernanceControls` y `datalitoKpis`: contrato de producto, gobierno y medición.
- `datalitoEvaluationQuestions`: banco de 170 preguntas benchmark.
- `datalitoSecurityCases` y `datalitoNoAnswerCases`: pruebas adversariales y de falta de evidencia.

La V1 conversa en frontend, responde saludos, repreguntas y pedidos de continuidad, y usa fuentes cuando la consulta requiere conocimiento aprobado. El acceso global se presenta como un personaje animado, no como un botón visual rígido. Es read-only y local: no usa proveedor externo de IA, no tiene SSO real y no persiste conversaciones en backend. Feedback y brechas se guardan en `localStorage` para demostrar el flujo sin inventar infraestructura corporativa.

El avatar vive en:

- `assets/datalito-robot-v22.png`
- `assets/datalito-robot-v22-512.webp`
- `assets/datalito-robot-v22-256.webp`

Documentación relacionada:

- `docs/datalito-architecture.md`
- `docs/datalito-content-governance.md`
- `docs/datalito-runbook.md`
- `docs/datalito-threat-model.md`
- `docs/datalito-evaluation.md`
- `.env.example`

## Editar Método de Datalización

Editar `data/datalizationMethod.js`.

- `methodOperatingFlow`: proceso end to end con qué es, por qué, para qué, cómo, definición técnica, funcional y ejemplo.
- `methodEvaluationModel`: módulo único del Marco de Datalización VMC con definición, cinco pilares, intake, índice, ponderación, metadata mínima y alcance.
- `methodPlanes`: separación entre DEV Datalización y PROD VMC.
- `methodFunctionalLayers`: capas Microsoft 365 para comunicación, documentos, co-creación, seguimiento, conocimiento e IA contextual.
- `methodChannels`: canales Teams con criterio PARA + Johnny.Decimal lite.
- `methodProjectFolders`: plantilla intra-proyecto de 12 subcarpetas.
- `methodNaming`: patrón de nombres, reglas, ejemplos y catálogos.
- `methodRoadmap`, `methodRoles`, `methodDecisions` y `methodPendingDecisions`: adopción, gobierno y decisiones.

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
- `data/platformIntro.js`
- `data/designSystem.js`
- `data/dictionary.js`
- `data/engineeringGuide.js`
- `data/datalizationMethod.js`
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
