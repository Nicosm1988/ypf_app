# Datalización Hub

Datalización Hub es una demostración pública y estática del sistema operativo metodológico de Datalización YPF. Reúne criterios, recorridos y herramientas para ordenar productos de Power BI, Microsoft Fabric, Power Apps y Power Automate desde la necesidad inicial hasta la operación y la mejora continua.

> Este sitio se publica sin autenticación. Todo su contenido y sus archivos descargables son accesibles desde Internet: no deben incorporarse datos internos, confidenciales, personales o productivos; tampoco credenciales, secretos, URLs privadas ni documentación con acceso restringido.

## La plataforma convierte conocimiento disperso en un recorrido común

- **Inicio** presenta el propósito, la definición de Datalización, la capacidad organizacional y el mapa del hub con una portada ejecutiva.
- **Road y Metodología** integra el ciclo BI/Fabric, nueve gates, PRD, Specs por producto, Power Query, modelado, DAX, seguridad, UX, publicación, operación, OEE BI, DMAIC y prácticas Lean.
- **Método de Datalización** ordena el trabajo entre DEV y PROD, Microsoft 365, canales, carpetas, naming, backlog, gobierno y el Marco de Datalización VMC.
- **Design System** documenta fundamentos, principios, componentes, entregables y reglas de calidad para mantener una experiencia consistente.
- **Datalito** orienta al usuario mediante búsqueda textual sobre fuentes locales, citas, modos de respuesta, feedback y registro de brechas.
- **Productos** ofrece recorridos end-to-end para Microsoft Power BI, Microsoft Power Apps y Microsoft Power Automate.
- **Diccionario BI** alinea definiciones, ejemplos, riesgos y trazabilidad académica.
- **Proyecto Power BI** explica el trabajo con Power BI Desktop, Visual Studio Code, PBIP, TMDL, Git, PRD y Spec.
- **Librerías y Atajos** reúne el catálogo técnico gobernado y accesos directos a la documentación oficial.

El encabezado permite recorrer las secciones principales y el footer funciona como mapa complementario. Cada página presenta primero la conclusión, después el fundamento y finalmente la evidencia o la acción esperada.

## La arquitectura es una SPA estática y no necesita secretos

El navegador ejecuta HTML, CSS y JavaScript con módulos ES. No hay React, Next.js, API propia, base de datos, proveedor de IA, autenticación ni runtime de servidor.

```text
index.html
  ├── navegación y footer
  └── app.js
        ├── routing e interfaz
        ├── data/*.js
        └── localStorage de Datalito

service-worker.js
  └── precache y actualización de recursos locales

scripts/*.mjs
  └── desarrollo, generación, validación y QA
```

Las responsabilidades principales se distribuyen así:

- `index.html`: shell accesible, navegación principal, metadata y footer.
- `styles.css`: tokens, componentes, layouts y comportamiento responsive.
- `app.js`: routing del lado cliente, renderers e interacciones.
- `data/`: contenido estructurado y contratos de datos.
- `data/practices/`: buenas prácticas por gate y registro único de fuentes Microsoft.
- `data/academicSources.js`: bibliografía, temas y trazabilidad académica.
- `data/documentTemplates.js`: manifiesto canónico del PRD y las Specs; las Specs reutilizan los gates de cada producto.
- `docs/`: documentación técnica y salidas Markdown de los modelos.
- `assets/`: imágenes, identidad, íconos oficiales y salidas Word de los modelos.
- `evals/datalito/`: casos de evaluación de Datalito.
- `.codex/`: skills y agentes repo-locales.
- `.mcp/registry.json`: inventario gobernado de capacidades MCP.
- `scripts/`: servidor local, generadores y gates automatizados.
- `service-worker.js` y `manifest.webmanifest`: instalación PWA y estrategia de caché.
- `vercel.json`: build, rewrites, headers y configuración de publicación.

El proyecto no carga archivos `.env`. El servidor de desarrollo acepta `PORT` como variable opcional de la shell, pero el sitio publicado no consume variables de entorno.

## El entorno local se prepara con Node 24 LTS y npm 12

Requisitos:

- Node.js `24.18.1` LTS.
- npm `12.0.2`.

Instalar exactamente las dependencias del lockfile:

```bash
npm ci
```

Regenerar los modelos e iniciar el servidor:

```bash
npm run dev
```

Abrir [http://127.0.0.1:8001/](http://127.0.0.1:8001/).

Para usar otro puerto:

```bash
PORT=8010 npm run dev
```

## Las rutas canónicas reflejan la navegación vigente

| Área                     | Ruta                        |
| ------------------------ | --------------------------- |
| Inicio                   | `/`                         |
| Road y Metodología       | `/road-y-metodologia`       |
| Método de Datalización   | `/metodo-datalizacion`      |
| Design System            | `/design-system`            |
| Datalito                 | `/datalito`                 |
| Productos                | `/productos`                |
| Microsoft Power BI       | `/productos/power-bi`       |
| Microsoft Power Apps     | `/productos/power-apps`     |
| Microsoft Power Automate | `/productos/power-automate` |
| Diccionario BI           | `/diccionario`              |
| Proyecto Power BI        | `/proyecto-power-bi`        |
| Librerías                | `/librerias`                |
| Atajos                   | `/atajos`                   |

Las subsecciones también tienen rutas estables. Por ejemplo:

- `/road-y-metodologia/fabric-end-to-end`
- `/road-y-metodologia/maqueta`
- `/road-y-metodologia/oee-bi`
- `/metodo-datalizacion/backlog`
- `/design-system/componentes`
- `/datalito/arquitectura`

`/guia-power-bi`, `/metodologia` y `/roadmap` se conservan como aliases de compatibilidad y resuelven a Road y Metodología. El servidor local y Vercel entregan `index.html` para las rutas de la SPA; luego `app.js` renderiza la página y, cuando corresponde, desplaza la vista a la sección solicitada.

## Un solo gate valida el release completo

```bash
npm run quality
```

El gate ejecuta, en este orden:

1. `npm run build`: genera los modelos documentales, valida contratos de contenido, rutas, assets y configuración, y produce `dist/`.
2. `npm run lint`: revisa JavaScript, CSS, HTML y Markdown.
3. `npm run format:check`: comprueba el formato sin modificar archivos.
4. `npm run qa:agents`: valida skills, agentes y registros MCP.
5. `npm run qa:links`: detecta enlaces locales rotos.
6. `npm audit`: controla vulnerabilidades de dependencias.
7. `npm run qa:e2e`: recorre las rutas soportadas en cinco viewports con navegador real y controla accesibilidad, consola, red, overflow, carga e interacciones críticas.

Comandos útiles durante el desarrollo:

| Comando                       | Uso                                                                     |
| ----------------------------- | ----------------------------------------------------------------------- |
| `npm run predev`              | Regenera los modelos antes de iniciar el servidor.                      |
| `npm run dev`                 | Regenera los modelos mediante `predev` e inicia el servidor local.      |
| `npm run docs:modelos`        | Regenera las salidas Markdown y Word desde `data/documentTemplates.js`. |
| `npm run build`               | Genera documentos, valida contratos y crea `dist/`.                     |
| `npm run validate`            | Ejecuta la misma validación estructural del build.                      |
| `npm run lint`                | Ejecuta todos los linters.                                              |
| `npm run lint:js`             | Revisa el JavaScript del repositorio.                                   |
| `npm run lint:css`            | Revisa `styles.css`.                                                    |
| `npm run lint:html`           | Revisa `index.html`.                                                    |
| `npm run lint:md`             | Revisa el Markdown versionado.                                          |
| `npm run format`              | Aplica Prettier.                                                        |
| `npm run format:check`        | Comprueba el formato.                                                   |
| `npm run qa:agents`           | Valida el sistema repo-local de agentes y MCP.                          |
| `npm run qa:links`            | Valida enlaces internos.                                                |
| `npm run qa:e2e`              | Ejecuta QA responsive y accesible en Chromium.                          |
| `npm run qa:install-browsers` | Instala Chromium para Playwright.                                       |
| `npm run quality`             | Ejecuta el gate completo de release.                                    |

`npm run build` elimina y vuelve a crear `dist/`. Esa carpeta es una salida generada y no debe editarse manualmente.

## Los modelos se mantienen en código y se distribuyen en Markdown y Word

`data/documentTemplates.js` es el manifiesto canónico que reúne:

- el PRD común;
- la Spec de Power BI y Microsoft Fabric;
- la Spec de Power Apps;
- la Spec de Power Automate.

El PRD, la metadata y la composición documental se editan allí. Las secciones de cada Spec se derivan de los nueve gates de `data/powerPlatformProducts.js`; así, la ficha web del producto, Datalito y el documento descargable no pueden describir ciclos de vida diferentes.

`npm run docs:modelos` genera dos representaciones del mismo contenido:

- `docs/modelos/*.md`, para lectura, revisión y control de cambios;
- `assets/docs/modelos/*.docx`, para descarga y uso en Microsoft Word.

No editar las salidas a mano: el siguiente build las reemplaza. Los cambios documentales comienzan en `data/documentTemplates.js`; si modifican el ciclo de un producto, comienzan en `data/powerPlatformProducts.js`. En ambos casos terminan regenerando los dos formatos.

## Datalito demuestra el flujo sin simular una plataforma de IA

La versión actual es local, determinística y read-only. Procesa la consulta en el navegador, aplica respuestas conversacionales acotadas, detecta pedidos sensibles mediante reglas explícitas y busca coincidencias textuales en el índice construido desde el contenido del portal. La ruta, el título, la sección activa y una selección de texto pueden aportar contexto.

Cuando encuentra evidencia suficiente, Datalito estructura la respuesta según uno de cinco modos y muestra las citas asociadas. Cuando la base no alcanza, lo informa y permite registrar una brecha. El feedback y las brechas quedan en `localStorage` del navegador; no se envían a un equipo ni se persisten en infraestructura corporativa.

Esta versión no ofrece:

- un LLM o proveedor externo de IA;
- RAG vectorial, embeddings o búsqueda semántica;
- acceso abierto a Internet;
- SSO, RBAC ni autorización por documento;
- lectura de sistemas, datasets o fuentes privadas;
- historial sincronizado entre dispositivos;
- escritura sobre Power BI, Fabric, permisos o documentación.

Los controles de vigencia, divergencia, citas y casos adversariales son controles funcionales del prototipo, no una frontera de seguridad. La metadata de una fuente describe su gobierno, pero no restringe el acceso en este deploy público.

El contrato vigente está documentado en:

- [`docs/datalito-architecture.md`](docs/datalito-architecture.md)
- [`docs/datalito-content-governance.md`](docs/datalito-content-governance.md)
- [`docs/datalito-evaluation.md`](docs/datalito-evaluation.md)
- [`docs/datalito-runbook.md`](docs/datalito-runbook.md)
- [`docs/datalito-threat-model.md`](docs/datalito-threat-model.md)

No existe un prompt maestro separado: el comportamiento ejecutable vive en `app.js`, el conocimiento y sus contratos viven en `data/datalito.js`, y la documentación anterior explica sus límites.

## El contenido se modifica en su fuente estructurada

| Contenido                                | Fuente principal                |
| ---------------------------------------- | ------------------------------- |
| Inicio y definición de Datalización      | `data/platformIntro.js`         |
| Narrativa de las páginas                 | `data/executiveNarrative.js`    |
| Road, PRD/Spec y guía de ingeniería      | `data/engineeringGuide.js`      |
| Gates de Power BI                        | `data/roadmap.js`               |
| OEE BI, DMAIC y Lean                     | `data/methodology.js`           |
| Método y Marco VMC                       | `data/datalizationMethod.js`    |
| Design System                            | `data/designSystem.js`          |
| Productos y gates de Power Apps/Automate | `data/powerPlatformProducts.js` |
| Prácticas por producto                   | `data/practices/*.js`           |
| Diccionario BI                           | `data/dictionary.js`            |
| Fuentes académicas                       | `data/academicSources.js`       |
| Datalito                                 | `data/datalito.js`              |
| Librerías y agentes                      | `data/toolingLibrary.js`        |
| Atajos Power BI                          | `data/powerbiShortcuts.js`      |
| PRD y composición de Specs               | `data/documentTemplates.js`     |
| Gates reutilizados por las Specs         | `data/powerPlatformProducts.js` |

Cada objeto nuevo debe conservar el contrato del módulo, usar identificadores únicos, enlazar rutas locales válidas y distinguir una síntesis propia de una afirmación atribuida a una fuente externa. Las prácticas de los gates referencian las URLs oficiales por `sourceId` desde `data/practices/sources.js`; no deben duplicarlas.

## La PWA prioriza contenido actual y mantiene un fallback local

`manifest.webmanifest` permite instalar el sitio como aplicación. `service-worker.js` precachea el shell, rutas, módulos, documentos y assets necesarios; para navegación, scripts, estilos, manifiesto y módulos de datos intenta primero la red y usa caché ante una falla. Los assets versionados se sirven desde caché cuando están disponibles.

Al cambiar archivos precacheados se debe actualizar `CACHE_NAME` en `service-worker.js`. La PWA funciona en `localhost` y en orígenes HTTPS; el caché no reemplaza una política de publicación ni convierte contenido público en contenido privado.

## Vercel publica únicamente el resultado validado

`vercel.json` define:

- `npm run build` como comando de build;
- `dist/` como directorio de salida;
- rewrites para las rutas de la SPA;
- revalidación de módulos de datos y del service worker;
- CSP y headers defensivos.

El build y los comandos de QA no despliegan. Si el proyecto ya está vinculado y la publicación fue autorizada:

```bash
vercel deploy --prod
```

Una integración con GitHub también puede publicar al recibir un push en la rama configurada. En ambos casos, el resultado queda disponible públicamente y sin autenticación.

## La seguridad empieza por mantener el repositorio publicable

- No versionar credenciales, tokens, archivos `.env` ni endpoints privados.
- No incluir datos reales de personas, operaciones, capacidades, costos o incidentes.
- No activar MCPs con tokens ni herramientas que escriban en sistemas externos sin aprobación explícita.
- No presentar controles de interfaz como autorización real.
- No conectar Datalito a fuentes internas, APIs o proveedores de IA sin definir identidad, permisos previos a la recuperación, privacidad, retención, observabilidad y evaluación.
- Ejecutar `npm run quality` antes de publicar.

## Marcas, fuentes y assets mantienen trazabilidad propia

Los íconos oficiales de Microsoft Power Platform y Microsoft Fabric se conservan como assets locales sin alterar y están documentados en `assets/microsoft/`. La geometría del logo de YPF se documenta en `assets/YPF_BRAND_NOTICE.md`. Las ilustraciones generadas se identifican en `assets/GENERATED_ASSETS.md` y las licencias de terceros en `THIRD_PARTY_NOTICES.md`.

Microsoft, Power BI, Power Apps, Power Automate y Microsoft Fabric son marcas del grupo de empresas Microsoft.
