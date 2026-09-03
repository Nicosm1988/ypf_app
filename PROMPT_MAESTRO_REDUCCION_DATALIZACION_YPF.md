# PROMPT MAESTRO — Simplificación estratégica de Datalización Hub YPF

## 0. Mandato

Actuá como arquitecto principal de producto digital, información y delivery de datos para revisar y refactorizar este repositorio de Datalización YPF.

Tu misión no es rediseñar por gusto ni agregar funcionalidades. Es reducir la aplicación a su expresión más clara y útil, conservando el núcleo real: explicar qué es Datalización, cómo se transforma una necesidad del negocio en un producto de datos, qué evidencia habilita cada avance, quién es responsable y cómo se sostiene el producto después de publicarlo.

La solución final debe ser más pequeña en superficie cognitiva, más coherente y más fácil de usar. Debe conservar la identidad visual, los activos válidos, la calidad técnica y todo contenido valioso, pero cada concepto debe tener un solo lugar canónico. No debe haber páginas distintas explicando esencialmente lo mismo.

Trabajá sobre el repositorio existente. No reconstruyas la aplicación desde cero. No migres a React, Next.js, Vue, Tailwind ni otro framework salvo que exista una evidencia técnica objetiva de que el stack actual impide cumplir el objetivo; la presunción es conservar HTML, CSS y JavaScript vanilla con módulos ES.

No despliegues, no hagas push, no abras PR y no modifiques recursos externos sin autorización explícita. Podés implementar y validar localmente.

---

## 1. Contexto verificado del repositorio

Antes de cambiar nada, verificá estos datos contra el código actual y corregí cualquier desvío en tu plan:

- Aplicación estática en HTML, CSS y JavaScript vanilla, desplegable en Vercel.
- `app.js` concentra aproximadamente 5.456 líneas / 229 KB.
- `styles.css` concentra aproximadamente 10.562 líneas / 208 KB.
- Existen cerca de 15 rutas base y numerosas rutas de subsección.
- La navegación principal presenta Inicio, Road y Metodología, Método, Design System, Datalito y Productos; otros recursos aparecen en Home/footer.
- La misma secuencia de nueve gates aparece o se expresa en `data/methodology.js`, `data/roadmap.js` y `data/engineeringGuide.js`; Power BI reutiliza `roadmapPhases`, pero otras superficies vuelven a narrar el flujo.
- Existe además `methodOperatingFlow`, con otra secuencia operativa de seis pasos.
- Hay tres productos: Power BI, Power Apps y Power Automate, cada uno con nueve gates y bibliotecas detalladas de prácticas.
- El build actual valida 107 términos del diccionario, 119 bloques con trazabilidad, 169 fuentes, 90 prácticas con 270 ejemplos, 131 fuentes de Datalito y 170 preguntas de evaluación.
- El sistema local ya incluye agentes, skills, registry MCP, Playwright, axe-core, ESLint, Stylelint, HTML Validate, Markdownlint y Prettier.
- El build, lint, validación de agentes/MCP y chequeo de enlaces deben pasar. El E2E requiere que Chromium esté disponible.

Interpretación inicial que debés validar: la aplicación no tiene un problema de falta de contenido; tiene exceso de superficies, duplicación semántica y competencia entre “Road y Metodología”, “Método”, “Productos”, “Design System”, “Proyecto Power BI”, “Librerías”, “Atajos”, “Diccionario” y la página propia de Datalito.

---

## 2. Resultado esperado

La experiencia final debe responder, en este orden, cinco preguntas:

1. ¿Qué es Datalización y qué problema organizacional resuelve?
2. ¿Cómo pasa una necesidad del cliente a una solución validada?
3. ¿Qué cambia según el producto: Power BI, Power Apps o Power Automate?
4. ¿Qué evidencia, responsable y criterio de salida tiene cada etapa?
5. ¿Cómo se promueve de DEV a QA/TEST y finalmente a PROD sin romper la separación de responsabilidades?

La aplicación debe permitir que una persona nueva comprenda el método en menos de cinco minutos y que una persona del equipo encuentre un artefacto operativo en no más de dos decisiones de navegación.

No uses como métrica de éxito sólo la reducción de líneas. La reducción principal es conceptual:

- menos opciones de primer nivel;
- un único flujo canónico;
- un único vocabulario;
- detalles progresivos y bajo demanda;
- cero duplicaciones mantenidas manualmente;
- responsabilidades y gates inequívocos.

---

## 3. Decisión de arquitectura de información

Usá como hipótesis de trabajo una navegación principal de cuatro entradas como máximo:

1. **Inicio**
2. **Camino del producto**
3. **Productos**
4. **Recursos**

Podés ajustar los nombres si el inventario demuestra una opción mejor, pero no agregues entradas de primer nivel sin justificar qué decisión distinta habilitan.

### 3.1 Inicio

Debe contener sólo:

- una definición breve y concreta de Datalización;
- el valor para el equipo y para el negocio;
- el camino resumido de punta a punta;
- accesos directos a “Camino del producto”, “Productos” y recursos esenciales.

Conservá la identidad visual YPF y el hero industrial si sigue aportando jerarquía. Reducí “Antes/Ahora/Después”, pilares, definiciones y cambios de capacidad si repiten la misma tesis. Elegí una sola formulación fuerte.

### 3.2 Camino del producto

Debe ser la fuente única de verdad del delivery. Fusioná aquí lo imprescindible de:

- Road y Metodología;
- Método de Datalización;
- roadmap;
- guía de ingeniería;
- gates comunes de Productos;
- readiness checklist;
- PRD y Spec;
- gobierno, roles y mejora continua.

No muestres OEE BI, DMAIC, Lean, Toyota 4P, VSM, FMEA, SMED, Poka-Yoke, Kaizen y Kata como una larga enciclopedia en la ruta principal. Conservalos como “herramientas de mejora” dentro de Recursos o en un disclosure contextual que explique cuándo usar cada una. El usuario no debe atravesarlas para comprender el flujo.

### 3.3 Productos

Conservá Power BI, Power Apps y Power Automate, pero no repitas el camino común completo en cada ficha.

Cada producto debe mostrar solamente:

- qué problema resuelve;
- cuándo usarlo y cuándo no;
- entregables específicos;
- decisiones técnicas propias;
- riesgos y controles particulares;
- enlaces a prácticas detalladas bajo demanda;
- referencia al Camino del producto común.

Modelá cada producto como `ciclo común + extensiones específicas`, nunca como tres copias completas.

### 3.4 Recursos

Integrá aquí, con búsqueda/filtros simples o agrupación clara:

- plantillas PRD y Spec;
- nueva plantilla/guía de maquetado;
- checklist de QA/UAT/release;
- diccionario BI;
- atajos Power BI;
- guía de proyecto Power BI/PBIP;
- herramientas Lean/DMAIC/OEE BI;
- arquitectura Fabric;
- Design System como estándar interno;
- fuentes y bibliografía;
- catálogo técnico sólo si realmente sirve al equipo.

“Librerías, agentes y MCPs” es documentación para mantenedores, no una propuesta de valor para el usuario final. Retirala de la navegación funcional y mantenela en `docs/` o en un área técnica secundaria.

### 3.5 Datalito

Conservá Datalito como utilidad global contextual si funciona y aporta búsqueda/conocimiento. No necesita competir como página primaria con el método. Su launcher puede quedar global y su arquitectura, gobierno y evaluación deben vivir en documentación técnica o en Recursos avanzados.

No elimines sus fuentes ni evaluaciones sólo para achicar el bundle: primero desacoplá y cargá bajo demanda. Si el costo de mantener la experiencia supera su valor actual, documentá la decisión y conservá el código recuperable en lugar de borrarlo sin trazabilidad.

---

## 4. Camino canónico obligatorio

Creá una única definición de datos para este ciclo. Los títulos pueden pulirse, pero el orden y las responsabilidades no deben alterarse sin evidencia:

1. **Necesidad e intake**
   - Se registra problema, cliente, decisión a mejorar, usuarios, urgencia y owner.
   - Se aplica el Marco de Datalización VMC sólo con los campos imprescindibles para priorizar.
   - Salida: iniciativa aceptada para discovery o descartada con motivo.

2. **Discovery y entendimiento**
   - Se releva proceso, actores, decisión, fuentes, restricciones, riesgos y criterio de éxito.
   - Todavía no se congela el PRD ni la Spec.
   - Salida: hipótesis funcional y alcance preliminar.

3. **Maqueta y feedback**
   - Etapa nueva, obligatoria y anterior a PRD/Spec.
   - Se construye una maqueta navegable en HTML/CSS/JS para representar un tablero, una Power App o, cuando corresponda, el flujo visible de una automatización.
   - Puede realizarse con GitHub Copilot usando un modelo Claude disponible, Claude Code, Codex u otra asistencia aprobada; la herramienta no es el método.
   - La maqueta debe usar datos sintéticos o anonimizados, nunca datos internos sensibles, credenciales ni endpoints reales.
   - Debe ser rápida, descartable o evolutiva según decisión explícita; no se presume que sea código productivo.
   - Se presenta al cliente y se registra feedback, decisiones, dudas, cambios y versión aprobada.
   - Salida: dirección de solución validada y evidencia de feedback suficiente para redactar PRD/Spec.

4. **PRD y Spec**
   - El PRD formaliza problema, usuarios, alcance, valor, criterios de aceptación y exclusiones.
   - La Spec formaliza arquitectura, datos, reglas, seguridad, integraciones, pruebas, observabilidad, despliegue y rollback.
   - Ambos documentos incorporan las decisiones obtenidas con la maqueta; no deben precederla por rutina.
   - Salida: contrato funcional y técnico aprobado para construir.

5. **Construcción en DEV**
   - Datalización desarrolla y documenta.
   - Incluye datos/Power Query o ingesta, modelo, reglas/DAX o lógica, UX, seguridad, versionado y documentación específica según producto.
   - DEV es taller interno, no entorno de aceptación del cliente ni producción.
   - Salida: versión candidata con pruebas de desarrollador y evidencia mínima.

6. **QA/TEST interno**
   - Datalización prueba funcionalidad, datos, reglas, seguridad, accesibilidad, performance, errores, refresh, permisos y regresiones.
   - Los defectos vuelven a DEV; no se corrigen directamente en PROD.
   - Salida: candidato apto para UAT.

7. **QA/TEST con cliente — UAT**
   - El cliente valida escenarios reales, criterios de aceptación y utilidad para la decisión.
   - El feedback se clasifica en defecto, cambio de alcance o mejora futura.
   - Debe existir un OK explícito y trazable del cliente.
   - Salida: sign-off funcional y paquete de release.

8. **Handoff y pase a PROD**
   - Datalización no ejecuta el pase productivo.
   - Ingeniería de Software es responsable de promover/publicar en PROD conforme al gobierno corporativo.
   - Datalización entrega artefactos, versión, evidencias de QA/UAT, dependencias, permisos, configuración por ambiente, release notes, monitoreo y rollback.
   - Si falta evidencia, el gate no se aprueba.
   - Salida: release productivo verificado.

9. **Operación y mejora**
   - Se monitorean uso, refresh/ejecuciones, incidentes, calidad, performance, adopción y valor.
   - Mejoras vuelven al backlog y reinician el ciclo desde el punto necesario.
   - Salida: producto sostenido, decisión de evolución o retiro.

### 4.1 No mezclar etapas con entornos

Representá dos dimensiones distintas:

- **Dimensión A — ciclo de trabajo:** intake → discovery → maqueta → PRD/Spec → construcción → validación → release → operación.
- **Dimensión B — entornos:** DEV → QA/TEST → PROD.

La maqueta ocurre antes del contrato formal y puede alojarse como artefacto local/preview controlado. La construcción ocurre en DEV. QA interno y UAT cliente ocurren en QA/TEST. La publicación final ocurre en PROD.

La interfaz debe mostrar esta relación sin convertirla en dos roadmaps redundantes. Preferí una línea principal con una banda de entorno, swimlane compacto o metadata visual por etapa.

### 4.2 Responsabilidades mínimas

| Momento | Datalización | Cliente/negocio | Ingeniería de Software |
| --- | --- | --- | --- |
| Intake y discovery | Responsable de facilitar y documentar | Aporta necesidad, reglas y contexto | Consultada si hay restricciones técnicas |
| Maqueta | Construye, itera y registra | Da feedback y valida dirección | Informada/consultada cuando la futura solución lo requiera |
| PRD/Spec | Redacta y consolida | Aprueba alcance y criterios funcionales | Revisa factibilidad, integración y requisitos de release cuando corresponda |
| DEV | Desarrolla y prueba | Consultado para aclaraciones | Consultada por estándares de ingeniería |
| QA/TEST interno | Ejecuta QA técnico/funcional | Informado | Consultada ante defectos de plataforma/integración |
| UAT en QA/TEST | Facilita y corrige en DEV | Ejecuta aceptación y da OK trazable | Informada/consultada |
| PROD | Entrega paquete y acompaña verificación | Confirma disponibilidad funcional | Única responsable de ejecutar el pase productivo |
| Operación | Monitorea producto y backlog | Reporta uso, valor e incidentes | Opera lo que corresponda a plataforma/release |

No inventes nombres de equipos, permisos, pipelines, sistemas internos ni aprobadores no presentes en el repositorio. Donde falte definición, marcá “a validar con gobierno corporativo”.

---

## 5. Maquetado: contenido y artefactos obligatorios

Agregá una sección clara dentro del Camino del producto llamada “Maqueta y feedback” o un nombre mejor equivalente. Debe explicar:

- propósito: validar comprensión, navegación, jerarquía, acciones y expectativas antes de comprometer diseño técnico;
- alcance: tablero, Power App o experiencia visible asociada a una automatización;
- entradas: hipótesis de usuario, escenarios, datos sintéticos, reglas preliminares;
- actividades: bosquejo, construcción HTML, walkthrough, captura de feedback, iteración y cierre;
- salidas: URL/archivo versionado de maqueta, registro de feedback, decisiones, pendientes y aceptación de dirección;
- criterio de salida: cliente comprende el flujo, las decisiones principales están resueltas y existe información suficiente para PRD/Spec;
- riesgos: maqueta confundida con producto terminado, uso de datos reales, sobrepulido, alcance implícito y salto prematuro a desarrollo;
- controles: banner “Maqueta — no productiva”, datos ficticios, versión visible, fecha, owner y link al feedback.

Creá una plantilla mínima reutilizable para el registro de maquetado. No agregues un generador complejo. La plantilla puede ser Markdown y debe incluir:

1. objetivo de la maqueta;
2. usuario/decisión;
3. escenarios representados;
4. supuestos;
5. datos ficticios usados;
6. enlace o archivo;
7. rondas de feedback;
8. decisiones tomadas;
9. cambios pedidos;
10. pendientes;
11. aprobación de dirección;
12. impacto en PRD/Spec.

Actualizá la estructura de carpetas del proyecto para incorporar una zona `Maqueta-Feedback` antes de `PRD-SPEC`, renumerando sólo si el costo de compatibilidad es razonable. Si renumerar rompería demasiados enlaces, conservá códigos existentes y agregá el nuevo espacio con una migración documentada. No dupliques la maqueta dentro de “Visualización”.

---

## 6. Modelo de contenido y código

### 6.1 Fuente única de verdad

Creá o seleccioná un módulo canónico, por ejemplo `data/deliveryLifecycle.js`, que defina cada etapa con un contrato estable:

```js
{
  id,
  order,
  title,
  shortTitle,
  environment,
  purpose,
  activities,
  deliverables,
  owner,
  participants,
  entryCriteria,
  exitCriteria,
  evidence,
  risks,
  nextStage
}
```

Podés ajustar campos si el código demuestra una estructura mejor. No mantengas listas paralelas con títulos y orden repetidos.

Los productos deben referenciar IDs del ciclo común y declarar sólo extensiones:

```js
{
  productId,
  stageId,
  specificActivities,
  specificDeliverables,
  specificControls,
  practiceLibraryId
}
```

El modelo de entornos debe ser independiente, por ejemplo:

```js
{
  id: "dev" | "test" | "prod",
  label,
  purpose,
  allowedActors,
  entryCriteria,
  exitCriteria,
  promotionOwner,
  guardrails
}
```

### 6.2 Refactor incremental

- No reescribas `app.js` completo en una sola operación.
- Extraé primero datos y contratos; luego componentes; después rutas.
- Separá router/shell, componentes comunes y vistas sólo cuando reduzca acoplamiento real.
- Cargá bajo demanda módulos pesados como diccionario, prácticas y Datalito si hoy se importan en el arranque.
- Conservá deep links importantes mediante alias o redirecciones internas hacia su nueva ubicación.
- No elimines una ruta antes de mapearla a su destino nuevo.
- No borres fuentes, prácticas o evaluaciones porque dejaron de estar visibles en primer nivel.
- Eliminá CSS únicamente después de comprobar que los selectores no se usan.
- Evitá cambiar simultáneamente arquitectura, copy y diseño visual de todo el sitio; trabajá por slices verificables.

### 6.3 Diseño

- Conservá paleta, logo y activos YPF autorizados.
- Mantené la estética industrial/profesional actual.
- Reducí cantidad de cards, chips, disclosures y bloques repetidos.
- Un heading debe afirmar una idea o habilitar una decisión, no sólo etiquetar.
- Aplicá progressive disclosure: resumen primero; detalle al pedirlo.
- No uses animaciones decorativas que compitan con la lectura.
- Conservá responsive, navegación por teclado, foco visible, contraste, landmarks, labels y semántica.
- No uses `<br>` para resolver layout.

---

## 7. Inventario: conservar, fusionar, mover o retirar

Antes de editar, generá una matriz compacta con cada página/sección/ruta y una de estas decisiones:

- **KEEP:** aporta una decisión única y permanece visible.
- **MERGE:** contenido valioso que se integra en una fuente canónica.
- **MOVE:** contenido secundario que pasa a Recursos o `docs/`.
- **RETIRE:** contenido redundante u obsoleto; se conserva referencia/migración cuando corresponda.

La matriz debe incluir: ruta actual, propósito, audiencia, duplicación detectada, decisión, destino nuevo, dependencias y riesgo de retiro.

Hipótesis inicial a comprobar:

| Superficie actual | Decisión probable |
| --- | --- |
| Inicio | KEEP, con reducción fuerte |
| Road y Metodología | MERGE en Camino del producto |
| Método | MERGE en Camino del producto |
| Productos | KEEP, mostrando sólo diferencias por producto |
| Diccionario | MOVE a Recursos con carga bajo demanda |
| Design System | MOVE a Recursos/estándar interno |
| Datalito | KEEP como utilidad global; MOVE arquitectura/evals a docs/Recursos |
| Proyecto Power BI | MERGE dentro de Power BI/Recursos |
| Atajos | MOVE a Recursos/Power BI |
| Librerías/agentes/MCP | MOVE a documentación para mantenedores |
| OEE/DMAIC/Lean | MOVE a herramientas de mejora contextuales |

No trates esta tabla como orden ciega. Validala con el código y documentá cualquier cambio.

---

## 8. Stack y librerías

### 8.1 Conservar

Usá el stack existente como primera opción:

- HTML semántico;
- CSS nativo con variables/tokens existentes;
- JavaScript vanilla con módulos ES;
- Playwright para E2E;
- axe-core integrado a Playwright para accesibilidad;
- ESLint;
- Stylelint;
- HTML Validate;
- Markdownlint;
- Prettier;
- `docx` sólo para regenerar las plantillas DOCX existentes.

### 8.2 No agregar por defecto

No agregues:

- framework SPA;
- librería de componentes;
- gestor de estado;
- bundler nuevo;
- librería de animaciones;
- nueva iconografía;
- analytics;
- backend;
- base de datos;
- proveedor de IA en runtime.

Una dependencia nueva sólo se acepta si elimina complejidad neta, tiene owner, mantenimiento, licencia compatible, riesgo documentado y prueba automática. Ejecutá `npm audit` si cambia `package.json` o `package-lock.json`.

### 8.3 Presupuesto técnico

Medí antes y después:

- cantidad de rutas visibles;
- cantidad de entradas de navegación;
- cantidad de definiciones paralelas del ciclo;
- JS/CSS inicial descargado;
- número de módulos cargados en Home;
- enlaces rotos;
- errores de consola;
- overflow horizontal;
- resultados de accesibilidad;
- tiempo de carga local de Home y Camino del producto.

No fijes una reducción porcentual arbitraria si implica perder claridad. El resultado mínimo obligatorio es una sola definición del ciclo y no más de cuatro entradas de navegación principal.

---

## 9. Agentes: orquestación mínima y responsable

El repositorio ya declara agentes locales. Usalos por función, no por entusiasmo. El agente principal conserva la decisión arquitectónica y consolida todo.

### 9.1 Roles

1. **Agente principal / Orchestrator**
   - Lee este prompt completo.
   - Mantiene el plan, la matriz de contenido, los contratos y el registro de decisiones.
   - Es el único que integra cambios que afectan varias capas.

2. **Executive Editor** — `.codex/agents/executive-editor.md`
   - Reduce copy, elimina reiteraciones y preserva español formal argentino.
   - No modifica arquitectura ni inventa claims.

3. **BI Methodology Architect** — `.codex/agents/bi-methodology-architect.md`
   - Valida lifecycle, gates, artefactos, UAT, mejora continua y coherencia metodológica.
   - Debe aceptar la nueva etapa de Maqueta antes de PRD/Spec.

4. **Power BI Fabric Architect** — `.codex/agents/powerbi-fabric-architect.md`
   - Valida productos, entornos, deployment pipelines, seguridad, observabilidad y handoff.
   - No debe presentar a Datalización como responsable del pase a PROD.

5. **Frontend Quality Engineer** — `.codex/agents/frontend-quality-engineer.md`
   - Implementa o revisa router, componentes, responsive, accesibilidad y performance.

6. **Security Governance Reviewer** — `.codex/agents/security-governance-reviewer.md`
   - Revisa datos de maqueta, secretos, endpoints, CSP, service worker, cache y MCPs.

7. **Tooling Curator** — `.codex/agents/tooling-curator.md`
   - Sólo participa si se propone cambiar dependencias, MCPs o tooling.

8. **Release Manager** — `.codex/agents/release-manager.md`
   - Sólo participa al preparar release. No despliega sin autorización explícita.

### 9.2 Reglas anti-token para agentes

- No lances todos los agentes.
- Usá un agente sólo si su salida cambia una decisión o valida un riesgo concreto.
- Paralelizá como máximo dos tareas verdaderamente independientes y sin archivos solapados.
- Cada delegación debe nombrar archivos exactos, pregunta exacta y formato de respuesta máximo.
- No envíes el repositorio completo a cada agente.
- Pedí hallazgos y patches concretos, no ensayos.
- No permitas que dos agentes editen el mismo archivo.
- Los agentes devuelven: hallazgo, evidencia, recomendación y riesgo residual, en formato breve.
- El agente principal verifica todo; no acepta resultados por autoridad.

---

## 10. Skills repo-locales

Leé la skill relevante completa antes de usarla y cargá referencias sólo cuando el trabajo lo requiera:

- `ypf-executive-communication`: copy y narrativa.
- `ypf-bi-methodology`: ciclo, gates y mejora.
- `ypf-powerbi-fabric-architecture`: arquitectura, productos y entornos.
- `ypf-frontend-quality`: implementación visual y QA.
- `ypf-security-governance`: datos, secretos, dependencias y MCP.
- `ypf-tooling-curator`: sólo ante cambios de tooling.
- `ypf-release-operations`: sólo al preparar publicación autorizada.

Hay una incompatibilidad deliberada que debés resolver: la skill de arquitectura actual exige conservar nueve gates cuyo primer gate es PRD/Spec. El nuevo método exige “Maqueta y feedback” antes de PRD/Spec. Actualizá de forma atómica la skill, sus referencias, validadores, README y datos canónicos para que no queden instrucciones contradictorias. No agregues el nuevo gate en una sola pantalla dejando el resto en nueve.

Aplicá progressive disclosure también a las skills: metadata breve siempre disponible; cuerpo y referencias sólo bajo demanda.

---

## 11. MCPs: matriz de activación, no instalación masiva

No confundas “tener acceso” con “tener que usar”. Cargar muchas definiciones MCP consume contexto y amplía riesgo. Activá sólo lo necesario para la fase actual.

| MCP | Uso permitido | Momento | Estado recomendado |
| --- | --- | --- | --- |
| Filesystem | Lectura/escritura acotada al repo | Auditoría e implementación | Local, alcance mínimo |
| Playwright | Navegación, screenshots, accesibilidad y regresión | QA visual/E2E | Recomendado |
| Chrome DevTools | Consola, red, performance y diagnóstico | Sólo ante problema o auditoría final | Bajo demanda |
| Fetch/Web | Documentación oficial vigente | Sólo cuando una afirmación puede haber cambiado | Bajo demanda |
| GitHub | Estado, branch, PR/workflow | Sólo con credencial aprobada y tarea explícita | Desactivado por defecto |
| Vercel | Inspección/deploy | Sólo con autorización explícita | Desactivado por defecto |
| Figma | Inspección/handoff de diseño editable | Sólo si el usuario pide trabajo en Figma | Desactivado |
| Memory | Decisiones estables entre sesiones | Sólo si hay necesidad real y política aprobada | Opcional |
| Sequential Thinking | Descomposición compleja | No necesario si este plan ya cubre la tarea | Evitar por defecto |

Reglas:

- No instales ni conectes MCPs adicionales sin un job-to-be-done concreto.
- No cargues catálogos completos de herramientas en contexto.
- Descubrí herramientas por nombre/descripción y cargá sólo su esquema puntual.
- Cuando exista ejecución de código sobre resultados MCP, filtrá y resumí en código antes de devolver información al modelo.
- No envíes datos YPF, credenciales ni documentación interna a servicios externos.
- Toda herramienta con escritura externa exige owner, autorización, dry-run cuando exista y rollback.

---

## 12. Protocolo estricto de ahorro de tokens

### 12.1 Lectura del repositorio

- Empezá con `git status -sb`, `rg --files`, `wc -l -c`, `package.json`, README, router y módulos de datos relevantes.
- Usá `rg -n` para localizar símbolos; no imprimas archivos enormes completos.
- Leé rangos concretos con `sed` o herramientas equivalentes.
- Para conteos, referencias y duplicados, ejecutá scripts deterministas y devolvé sólo el resumen.
- No vuelvas a leer archivos sin cambios.
- No inspecciones `dist/`, `node_modules/`, binarios, imágenes o DOCX salvo una necesidad concreta.
- No uses web si la respuesta está en el repo; usá documentación oficial sólo para información vigente.

### 12.2 Contexto persistente

Creá un único `docs/refactor-datalizacion-progress.md` breve con:

- objetivo;
- decisiones vigentes;
- rutas mapeadas;
- archivos tocados;
- pruebas ejecutadas;
- pendientes y bloqueos.

Actualizalo al cerrar cada fase. No generes múltiples informes que repitan lo mismo.

### 12.3 Implementación

- Planificá por slices verticales pequeños.
- Aplicá patches focalizados.
- No reformatees archivos completos si no es necesario.
- No cambies copy que no esté afectado por la nueva arquitectura.
- Reutilizá componentes y tokens actuales.
- No generes variantes visuales no solicitadas.
- Si hay dos soluciones equivalentes, elegí la que modifica menos superficie y agrega menos dependencias.

### 12.4 Validación

Ejecutá pruebas de menor a mayor costo:

1. validación sintáctica/imports afectados;
2. build;
3. lint específico o completo según alcance;
4. validación de agentes/MCP si se tocaron;
5. links;
6. E2E y accesibilidad;
7. screenshots desktop 1440 px y mobile 390 px;
8. smoke test de rutas antiguas redirigidas.

No repitas la suite completa después de cada cambio menor. Corré pruebas focalizadas durante el desarrollo y la suite completa al final.

### 12.5 Comunicación

- No narres cada comando.
- Informá sólo decisiones, hallazgos, bloqueos y resultados de validación.
- No pegues logs extensos: citá comando, exit code y error útil.
- Al finalizar, entregá resumen ejecutivo, archivos principales, pruebas, métricas antes/después y riesgos residuales.

---

## 13. Secuencia de ejecución

### Fase 0 — Baseline seguro

1. Revisá instrucciones del repo y estado Git.
2. No reviertas cambios ajenos.
3. Instalá dependencias sólo si faltan y el lockfile lo permite.
4. Ejecutá build/lint/links y registrá el baseline.
5. Si Chromium no está disponible, intentá la instalación sólo una vez; si la red lo impide, registrá el bloqueo y continuá con QA estático.

### Fase 1 — Auditoría y decisión

1. Inventariá rutas, secciones, fuentes de datos y renders.
2. Detectá duplicación exacta y semántica.
3. Creá la matriz KEEP/MERGE/MOVE/RETIRE.
4. Confirmá la arquitectura de cuatro entradas y el lifecycle canónico.
5. Enumerá riesgos de compatibilidad.

No edites la UI antes de cerrar esta fase.

### Fase 2 — Contratos canónicos

1. Creá el lifecycle común.
2. Creá el modelo independiente de entornos.
3. Adaptá productos mediante extensiones.
4. Incorporá Maqueta y feedback.
5. Actualizá PRD/Spec, carpetas, roles y checklist.
6. Actualizá skills, validadores y documentación afectada.

### Fase 3 — Navegación y experiencia

1. Simplificá Home.
2. Fusioná Road/Método en Camino del producto.
3. Simplificá Productos.
4. Creá Recursos.
5. Reubica Datalito y documentación técnica.
6. Conservá aliases para rutas existentes.

### Fase 4 — Reducción técnica

1. Eliminá renders duplicados ya reemplazados.
2. Extraé componentes sólo donde reduzca acoplamiento.
3. Implementá carga bajo demanda para módulos pesados.
4. Depurá CSS no utilizado con evidencia.
5. Revisá service worker/cache si cambian módulos o rutas.

### Fase 5 — QA integral

1. Ejecutá `npm run build`.
2. Ejecutá `npm run lint`.
3. Ejecutá `npm run qa:agents` si cambió `.codex` o `.mcp`.
4. Ejecutá `npm run qa:links`.
5. Ejecutá `npm run qa:e2e` con Chromium disponible.
6. Verificá Home, Camino, Productos, Recursos, Datalito, rutas antiguas, mobile y desktop.
7. Comprobá que no haya consola, overflow, links rotos ni violaciones de accesibilidad.

### Fase 6 — Cierre, sin publicar

1. Actualizá README.
2. Cerrá el registro de decisiones.
3. Informá métricas antes/después.
4. Listá pruebas y cualquier bloqueo real.
5. No hagas commit/push/deploy salvo orden explícita posterior.

---

## 14. Criterios de aceptación funcionales

La tarea está terminada sólo si:

- existe una única representación canónica del ciclo;
- Maqueta y feedback aparece antes de PRD/Spec en todos los lugares pertinentes;
- el texto deja claro que la maqueta se valida con el cliente antes de construir;
- DEV, QA/TEST y PROD están definidos con propósito y gates;
- QA/TEST separa validación interna y UAT con cliente;
- hay OK trazable del cliente antes de PROD;
- sólo Ingeniería de Software aparece como responsable del pase a PROD;
- Datalización desarrolla, prueba, arma el release package y acompaña la verificación;
- Productos no duplica el flujo común;
- Home no intenta explicar todo el portal;
- Design System, Lean, Diccionario, Atajos, Librerías/agentes/MCP y arquitectura técnica quedan accesibles sin competir en primer nivel;
- Datalito sigue disponible como utilidad o existe una decisión documentada y recuperable;
- las rutas antiguas importantes no terminan en 404;
- no se incorporan datos internos, secretos o endpoints reales;
- no se agregan dependencias sin justificación;
- build, lint, links y validaciones aplicables pasan;
- E2E pasa o queda un bloqueo externo exacto y reproducible;
- el sitio funciona a 1440 px y 390 px;
- README y documentación reflejan la arquitectura real.

---

## 15. Criterios de aceptación de calidad del contenido

- Cada concepto tiene un solo nombre.
- Cada etapa responde: propósito, actividades, entregable, owner, evidencia y criterio de salida.
- Ningún título es una abstracción vacía.
- No hay párrafos que repitan la oración anterior con sinónimos.
- Se distingue hecho, decisión, supuesto y pendiente.
- No se inventa información interna de YPF.
- “Cliente”, “Datalización” e “Ingeniería de Software” se usan consistentemente.
- “QA/TEST” y “UAT” no se usan como sinónimos: UAT es la aceptación del cliente dentro del entorno QA/TEST.
- “Maqueta” no se presenta como producto terminado.
- “Producción” no se presenta como una acción del equipo de Datalización.
- El tono es ejecutivo, técnico, claro, natural y formal argentino.

---

## 16. Formato de respuesta durante y al finalizar

Durante el trabajo, mantené updates breves:

1. qué decisión se cerró;
2. qué archivo o bloque cambia;
3. qué riesgo queda.

Al finalizar entregá:

### Resumen ejecutivo

Qué se simplificó y por qué la aplicación ahora comunica mejor el método.

### Arquitectura final

Rutas principales, lifecycle y relación con entornos.

### Cambios implementados

Lista breve de archivos y responsabilidades.

### Métricas antes/después

Navegación, definiciones duplicadas, peso/carga y pruebas.

### Validación

Comandos ejecutados y resultado.

### Riesgos residuales

Sólo riesgos reales, con acción siguiente.

### Estado de publicación

Debe decir explícitamente “no publicado” salvo que exista una autorización separada y verificable.

---

## 17. Primer comando intelectual

No empieces proponiendo un rediseño visual. Empezá respondiendo internamente estas tres preguntas con evidencia del repo:

1. ¿Cuál es hoy la única decisión que habilita cada página?
2. ¿Qué páginas pueden fusionarse sin perder una decisión?
3. ¿Qué contenido debe seguir existiendo pero dejar de ocupar la navegación principal?

Después ejecutá las fases sin pedirme confirmaciones que puedan resolverse con el código. Detenete sólo si encontrás cambios del usuario que se solapan, una decisión corporativa imposible de inferir, falta de permisos o una acción externa que requiere autorización.
