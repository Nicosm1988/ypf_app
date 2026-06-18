# YPF BI Playbook

MVP web para un equipo BI con dos recursos principales:

- Diccionario BI para alinear conceptos de negocio, datos, Power BI, modelado, KPIs, gobierno y adopcion.
- Roadmap BI punta a punta para ordenar el trabajo desde intake hasta operacion y mejora continua.

La app es estatica, sin credenciales, sin datos sensibles y compatible con Vercel.

## Stack

- HTML, CSS y JavaScript vanilla.
- Modulos ES para separar datos de UI.
- Contenido local editable en `data/dictionary.js` y `data/roadmap.js`.
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
```

## Validar build

```bash
npm run build
```

El build valida que:

- Exista Home, Diccionario BI y Roadmap BI.
- El diccionario tenga al menos 40 terminos.
- El roadmap tenga las 14 fases obligatorias.
- Los datos tengan los campos requeridos.
- Vercel tenga rewrites para `/diccionario` y `/roadmap`.

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

## Editar fases del roadmap

Editar `data/roadmap.js` y modificar `roadmapPhases`.

Cada fase debe mantener esta estructura:

```js
{
  id: 0,
  title: "Intake y triage",
  lane: "Consultoria BI",
  objective: "Objetivo de la fase.",
  keyActivities: ["Actividad clave"],
  deliverables: ["Entregable"],
  owner: "Responsable principal",
  riskIfSkipped: "Riesgo si se saltea.",
  gate: "Gate A - Alineacion"
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
- `scripts/dev-server.mjs`
- `scripts/validate-build.mjs`
- `vercel.json`
- `manifest.webmanifest`
- `service-worker.js`
