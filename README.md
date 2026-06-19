# YPF BI Playbook

MVP web para un equipo BI con recursos de consulta y trabajo:

- Guia Power BI/Fabric para ordenar el ciclo completo desde PRD y Spec hasta operacion.
- Diccionario BI para alinear conceptos de producto, datos, Power BI, Fabric, performance, gobierno y adopcion.
- Roadmap BI estructurado en 9 gates de ingenieria: PRD/Spec, ETL, modelo, DAX, seguridad, UX, Fabric, CI/CD y operacion.
- Proyecto de Power BI con Visual Studio para trabajar PRD, Spec, PBIP, TMDL, Git y documentacion con criterio.
- Catalogo de librerias, agentes, MCPs y sandboxes guardado en documentacion local.
- Atajos Power BI extraidos del PDF local del repo.

La app es estatica, sin credenciales, sin datos sensibles y compatible con Vercel.

## Stack

- HTML, CSS y JavaScript vanilla.
- Modulos ES para separar datos de UI.
- Contenido local editable en `data/dictionary.js`, `data/engineeringGuide.js`, `data/roadmap.js`, `data/toolingLibrary.js` y `data/powerbiShortcuts.js`.
- Documentacion tecnica en `docs/librerias-agentes-mcp.md`.
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

- Exista Home, Guia Power BI/Fabric, Diccionario BI, Roadmap BI, Proyecto Power BI, Librerias y Atajos.
- El diccionario tenga al menos 65 terminos.
- El roadmap tenga los 9 gates obligatorios y arranque con PRD/Spec.
- La guia tenga capitulos, comparacion PRD vs Spec y checklist de salida a produccion.
- El catalogo tecnico tenga documentacion Markdown y familias de herramientas.
- Los atajos tengan categorias e items navegables.
- Los datos tengan los campos requeridos.
- Vercel tenga rewrites para `/guia-power-bi`, `/diccionario`, `/roadmap`, `/proyecto-power-bi`, `/librerias` y `/atajos`.
- Se genere `dist/` con las rutas estaticas listas para Vercel.

## Desplegar en Vercel

El proyecto esta preparado para deploy estatico.

Si el proyecto ya esta linkeado a Vercel:

```bash
vercel deploy --prod
```

Si se despliega desde GitHub, Vercel puede publicar automaticamente cuando haya push a la rama configurada.

## Agregar terminos al diccionario

Editar `data/dictionary.js` y agregar un objeto en `dictionaryTerms`:

```js
{
  id: "nuevo-termino",
  term: "Nuevo termino",
  category: "Datos",
  definition: "Definicion simple.",
  whyItMatters: "Por que importa para el equipo.",
  example: "Ejemplo breve.",
  risk: "Riesgo de entenderlo mal."
}
```

Las categorias disponibles estan en `dictionaryCategories`.

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

El roadmap debe comenzar con PRD y Spec. PBIP/TMDL viven dentro del gate de CI/CD cuando el proyecto ya requiere modelo como codigo.

## Editar guia Power BI/Fabric

Editar `data/engineeringGuide.js`.

- `prdSpecComparison`: tabla de comparacion entre PRD y Spec.
- `guideSections`: capitulos de la guia.
- `readinessChecklist`: checklist previo a produccion.

## Editar librerias, agentes y MCPs

Editar `data/toolingLibrary.js` para la version navegable y `docs/librerias-agentes-mcp.md` para la documentacion Markdown.

## Editar atajos Power BI

El PDF fuente esta en `assets/docs/atajos-power-bi.pdf`.

El resumen navegable se edita en `data/powerbiShortcuts.js`, agrupando cada atajo por categoria:

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

No subir informacion confidencial, credenciales ni datos sensibles.

No conectar esta version a sistemas internos, APIs privadas, tokens ni fuentes reales sin una revision de seguridad previa.

## Archivos principales

- `index.html`
- `styles.css`
- `app.js`
- `data/dictionary.js`
- `data/engineeringGuide.js`
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
