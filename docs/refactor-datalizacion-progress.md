<!-- Contexto persistente de la ejecución del PROMPT_MAESTRO_REDUCCION_DATALIZACION_YPF.md. Actualizar al cerrar cada fase. -->

# Refactor Datalización YPF — registro de progreso

## Objetivo

Ejecutar `PROMPT_MAESTRO_REDUCCION_DATALIZACION_YPF.md`: incorporar la etapa "Maqueta y feedback" antes de
PRD/Spec, separar responsabilidades DEV → QA/TEST interno → UAT cliente → OK trazable → PROD (sólo
Ingeniería de Software promueve a PROD), crear una fuente única de verdad del ciclo de entrega y reducir la
superficie de navegación sin perder contenido válido.

## Estado de esta ejecución (2026-09-02)

Slice implementado: **contratos canónicos + corrección de responsabilidades + Maqueta y feedback visible**.
**No implementado en este slice:** colapso completo de navegación a 4 entradas de primer nivel, hub
"Recursos" unificado y poda de CSS no usado (ver "Pendientes").

## Fase 1 — Matriz KEEP / MERGE / MOVE / RETIRE

| Ruta actual | Propósito | Duplicación detectada | Decisión | Destino nuevo | Riesgo de retiro |
| --- | --- | --- | --- | --- | --- |
| `/` (Inicio) | Definición de Datalización, valor, accesos | Antes/Ahora/Después + pilares repiten tesis | KEEP, reducción de énfasis pendiente | Sin cambio de ruta | Bajo |
| `/road-y-metodologia` | Proceso end-to-end, Fabric, PRD/Spec, OEE/DMAIC/Lean | Mismos 9 gates que `data/methodology.js` y `data/engineeringGuide.js` (título/orden); Maqueta faltaba | KEEP como "Camino del producto" (aún en URL actual) + **Maqueta agregada** + OEE/DMAIC/Lean movidos a disclosure | Pendiente merge de ruta con `/metodo-datalizacion` | Medio — merge de ruta no ejecutado aún |
| `/metodo-datalizacion` | Estructura M365, naming, backlog, DEV/PROD, VMC/Fabric, gobierno | Solapa "camino de delivery" con Road y Metodología | MERGE en "Camino del producto" (pendiente) | Igual que arriba | Medio |
| `/productos` + 3 fichas | Power BI, Power Apps, Power Automate | Reutilizan `roadmapPhases`/`guideSections` (ya no duplicado por producto) | KEEP | Sin cambio | Bajo |
| `/design-system` | Estándar de UI interno | No es propuesta de valor para usuario final del método | MOVE a Recursos (pendiente) | — | Bajo |
| `/datalito` | Asistente de conocimiento | Ya es utilidad global (`renderDatalitoGlobalShell`) además de página | KEEP como utilidad global; retirar entrada de nav top-level (pendiente) | — | Bajo |
| `/diccionario` | Vocabulario BI | — | MOVE a Recursos con carga bajo demanda (pendiente) | — | Bajo |
| `/proyecto-power-bi` | Flujo PBIP/VS Code | Solapa parcialmente con Power BI/Recursos | MERGE en Power BI/Recursos (pendiente) | — | Medio |
| `/atajos` | Atajos Power BI | — | MOVE a Recursos/Power BI (pendiente) | — | Bajo |
| `/librerias` | Librerías, agentes, MCP | Documentación para mantenedores, no valor de usuario final | MOVE a `docs/` o área técnica secundaria (pendiente) | — | Bajo |
| OEE BI / DMAIC / Toyota 4P / Lean (dentro de Road) | Herramientas de mejora | Aparecían como enciclopedia en la ruta principal | **MOVE ejecutado**: ahora en `<details>` colapsado ("Herramientas de mejora") dentro de la misma página | `#road-herramientas-mejora` | Bajo — anclas preservadas vía `scrollToRouteHash` |
| `methodOperatingFlow` (6 pasos, `/metodo-datalizacion/proceso`) | Rollout del método dentro del equipo | Similar en forma al ciclo de 9 etapas pero de propósito distinto (instalar el método, no entregar un producto) | KEEP, verificado que no es duplicación de contenido — sólo de forma | Sin cambio | Bajo |

## Fase 2 — Contratos canónicos (implementado)

- **`data/deliveryLifecycle.js`** (nuevo): fuente única de las 9 etapas genéricas cross-producto (Necesidad
  e intake → Discovery → **Maqueta y feedback** → PRD/Spec → Construcción DEV → QA/TEST interno → UAT
  cliente → Handoff y pase a PROD → Operación), con el contrato de campos de la sección 6.1, la matriz de
  responsabilidades (4.2) y la plantilla de maquetado (12 campos, sección 5).
- **`data/environments.js`** (nuevo): modelo independiente DEV/QA-TEST/PROD (sección 6.1), con
  `promotionOwner: "Ingeniería de Software"` explícito en PROD.
- **`data/roadmap.js`**: gate 8 renombrado "Handoff y publicación"; objetivo, entregables y owner corregidos
  para que Datalización arme el paquete de release e Ingeniería de Software ejecute la promoción a PROD (antes
  implicaba que el equipo BI publicaba directamente). Gate 1 referencia explícitamente que la maqueta ya
  validó dirección.
- **`data/engineeringGuide.js`** y **`data/methodology.js`**: la entrada "Publicación" se sincronizó con el
  mismo cambio de responsabilidad (mismo texto de fondo en las tres fuentes, ver "Pendiente" sobre
  derivación automática).
- **`data/datalizationMethod.js`**: `methodPlanes` pasa de 2 a 3 (agrega `test` = QA/TEST); `prod.guardrail`
  nombra a Ingeniería de Software; `methodVmcModel.lifecycle` incorpora Maqueta y feedback y aclara quién
  ejecuta la promoción; `methodProjectFolders` incorpora `01 Maqueta-Feedback` y renumera 02-11 (migración
  documentada en `methodFolderMigrationNote`).
- **`docs/modelos/maqueta-feedback.md`** (nuevo, escrito a mano, no generado por `scripts/generate-docx-models.mjs`
  a propósito — sección 5 pide plantilla liviana, no generador nuevo).
- **`data/powerPlatformProducts.js`**: los gates 8 propios de Power Apps ("ALM, despliegue y publicación") y
  Power Automate ("ALM, despliegue y activación") tenían el mismo problema que `roadmap.js` (implicaban que
  el equipo publica directamente). Se corrigieron owner/objective/gate en ambos, en línea con Power BI.
- **Skills**: `.codex/skills/ypf-bi-methodology/SKILL.md` + `references/methodology-map.md` y
  `.codex/skills/ypf-powerbi-fabric-architecture/SKILL.md` + `references/powerbi-fabric-gates.md`
  actualizados atómicamente: Maqueta y feedback antes de PRD/Spec, "Handoff y publicación" en vez de
  "Publicación", y regla explícita de que Ingeniería de Software es la única responsable del pase a PROD.

## Fase 3 — Navegación y experiencia (parcial)

Implementado:

- Sección "Maqueta y feedback" (`#road-maqueta`, ruta `/road-y-metodologia/maqueta`) visible **antes** de la
  sección PRD/Spec dentro de Road y Metodología, con banner "Maqueta — no productiva", actividades, salidas,
  criterio de salida, riesgos y plantilla de registro colapsable.
- OEE BI, DMAIC, 4P Toyota, Lean y Cadencia ahora viven dentro de un único `<details>` colapsado
  ("Herramientas de mejora") en vez de aparecer como enciclopedia lineal en la ruta principal.
- `scrollToRouteHash` abre automáticamente los `<details>` ancestros del ancla destino (antes sólo abría el
  propio elemento si era un `<details>`), preservando todos los deep links existentes hacia OEE/DMAIC/Lean.
- Nav (`index.html`, desktop + mobile): entrada "Maqueta y feedback" agregada antes de "PRD y Spec" en el
  dropdown de Road y Metodología.

No implementado (ver Pendientes): colapso de navegación a 4 entradas de primer nivel (fusión real de rutas
`/road-y-metodologia` + `/metodo-datalizacion` en una única `/camino-del-producto`; hub `/recursos` que
agrupe Diccionario/Atajos/Librerías/Design System; remoción de la entrada top-level "Datalito").

## Pendientes / próximos slices recomendados

1. **Fusión de rutas** `/road-y-metodologia` + `/metodo-datalizacion` → `/camino-del-producto` con alias de
   compatibilidad (patrón `subsectionRoutes`/`routeAliases` ya existente en `app.js`). Riesgo principal:
   ambas páginas usan render functions extensas (~150-230 líneas) con IDs de ancla que deben preservarse.
2. **Hub `/recursos`** agregando Diccionario, Atajos, Librerías, Design System, herramientas Lean/DMAIC/OEE,
   PRD/Spec y arquitectura Fabric, con navegación principal resultante en 4 entradas (Inicio, Camino del
   producto, Productos, Recursos). Retirar "Datalito" de la nav top-level (queda sólo como widget global).
3. **Derivación automática de título/orden** entre `roadmapPhases`, `methodologyProcessFlow` y
   `guideSections` (hoy sincronizados a mano). Se agregó únicamente el guardrail de counts/orden en
   `scripts/validate-build.mjs`; falta la refactorización que derive los tres desde una sola fuente sin
   romper `renderNineGateFlow`/`renderUnifiedFlowPanel`, que indexan por posición (`g01`…`g09`).
4. **Poda de CSS no usado** (Fase 4.4 del prompt maestro) — requiere tooling de verificación de selectores no
   utilizados antes de eliminar reglas; no se ejecutó por riesgo de falsos positivos sin esa herramienta.
5. **Componentización/lazy-load** de módulos pesados (diccionario, prácticas, Datalito) si hoy se importan
   en el arranque — no auditado en este slice.

## Archivos tocados en este slice

- Nuevos: `data/deliveryLifecycle.js`, `data/environments.js`, `docs/modelos/maqueta-feedback.md`,
  `docs/refactor-datalizacion-progress.md`.
- Editados: `data/datalizationMethod.js`, `data/roadmap.js`, `data/engineeringGuide.js`, `data/methodology.js`,
  `app.js`, `index.html`, `styles.css`, `scripts/validate-build.mjs`,
  `.codex/skills/ypf-bi-methodology/SKILL.md`, `.codex/skills/ypf-bi-methodology/references/methodology-map.md`,
  `.codex/skills/ypf-powerbi-fabric-architecture/SKILL.md`,
  `.codex/skills/ypf-powerbi-fabric-architecture/references/powerbi-fabric-gates.md`.

## Fixes de robustez encontrados durante QA (no pedidos explícitamente, pero bloqueaban `qa:e2e`)

- **`html { scrollbar-gutter: stable; }`**: agregar la sección Maqueta hizo que Road y Metodología necesite
  scroll vertical en el viewport "compact" (320×900) donde antes no lo necesitaba, cambiando el ancho
  disponible del flujo de 9 gates compartido (`renderNineGateFlow`) respecto a la misma vista en Productos.
  Reservar el gutter del scrollbar de forma estable evita que el ancho de layout dependa de si la página
  necesita o no scroll.
- **`.page { grid-template-columns: minmax(0, 1fr); }`**: bug preexistente (no causado por este slice, pero
  descubierto al correr `qa:e2e` con más rutas ejercitadas): sin columna explícita, un grid item con ancho en
  porcentaje (`.page-inner`) puede resolver su porcentaje contra el contenido en lugar del contenedor cuando
  el grid track es `auto`/indefinido — el breadcrumb "Microsoft Power Automate" desbordaba ~5px en el
  viewport "compact". `minmax(0, 1fr)` fija el track y elimina la dependencia circular. Verificado con una
  sonda Playwright aislada antes de aplicarlo a todo `.page` (afecta todas las páginas, confirmado en verde
  por `qa:e2e` completo).

## Pruebas ejecutadas

Ver sección "Validación" del resumen ejecutivo entregado en el chat al cierre de este slice.

## Bloqueos

Ninguno bloqueante para este slice. El bloqueo real es de alcance/tiempo: el prompt maestro exige además el
colapso de navegación a 4 entradas y la poda de CSS, que quedan documentados como próximos slices en vez de
ejecutarse apurados sobre una app en producción.
