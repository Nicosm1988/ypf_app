# YPF BI Playbook

MVP web para un equipo BI con recursos de consulta y trabajo:

- Diccionario BI para alinear conceptos de negocio, datos, Power BI, modelado, KPIs, gobierno y adopcion.
- Roadmap BI estructurado en cinco pilares: contexto, mapa, reglas, skills y diseno.
- Proyecto de Power BI con Visual Studio para trabajar PBIP, TMDL, Git y documentacion con criterio.
- Atajos Power BI extraidos del PDF local del repo.

La app es estatica, sin credenciales, sin datos sensibles y compatible con Vercel.

## Stack

- HTML, CSS y JavaScript vanilla.
- Modulos ES para separar datos de UI.
- Contenido local editable en `data/dictionary.js`, `data/roadmap.js` y `data/powerbiShortcuts.js`.
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
http://127.0.0.1:8001/diccionario
http://127.0.0.1:8001/roadmap
http://127.0.0.1:8001/proyecto-power-bi
http://127.0.0.1:8001/atajos
```

## Validar build

```bash
npm run build
```

El build valida que:

- Exista Home, Diccionario BI, Roadmap BI, Proyecto Power BI y Atajos.
- El diccionario tenga al menos 40 terminos.
- El roadmap tenga los 5 pilares obligatorios.
- Los atajos tengan categorias e items navegables.
- Los datos tengan los campos requeridos.
- Vercel tenga rewrites para `/diccionario`, `/roadmap`, `/proyecto-power-bi` y `/atajos`.
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

## Editar pilares del roadmap

Editar `data/roadmap.js` y modificar `roadmapPhases`.

Cada pilar debe mantener esta estructura:

```js
{
  id: 0,
  title: "Contexto",
  lane: "Direccion BI",
  objective: "Objetivo del pilar.",
  keyActivities: ["Actividad clave"],
  deliverables: ["Entregable"],
  owner: "Responsable principal",
  riskIfSkipped: "Riesgo si se saltea.",
  gate: "Gate A - Alineacion"
}
```

PBIP no va dentro del roadmap: vive en la pagina `Proyecto de Power BI con Visual Studio`.

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
- `data/roadmap.js`
- `data/powerbiShortcuts.js`
- `assets/docs/atajos-power-bi.pdf`
- `scripts/dev-server.mjs`
- `scripts/validate-build.mjs`
- `vercel.json`
- `manifest.webmanifest`
- `service-worker.js`
