<!-- Generado desde data/documentTemplates.js. No editar manualmente. -->

# Modelo Spec - Microsoft Power Apps

> Arquitectura, datos, UX, Power Fx, integraciones, gobierno, ALM y operación

| Control          | Valor                      |
| ---------------- | -------------------------- |
| Producto         | Microsoft Power Apps       |
| Tipo             | Spec                       |
| Responsable      | Portal de Datalización YPF |
| Versión          | 2.0.0                      |
| Estado           | Vigente                    |
| Última revisión  | 2026-07-31                 |
| Próxima revisión | 2027-01-31                 |

## Propósito

Definir tipo de app, datos, experiencia, lógica, integraciones, controles y ciclo de vida antes de construir y publicar.

## Forma de uso

1. Duplicar la plantilla para el proyecto.
2. Completar cada sección con evidencia y responsables.
3. Resolver supuestos, riesgos y decisiones abiertas.
4. Revisar con negocio, producto y responsables técnicos.
5. Aprobar y versionar antes de pasar al siguiente gate.

## 1. PRD y Spec

### Objetivo

Definir el problema de negocio, el proceso actual, los usuarios, la acción que debe habilitar la aplicación y el resultado medible antes de elegir pantallas o tecnología.

### Preguntas y controles guía

- Describir el proceso actual y el problema.
- Identificar sponsor, product owner, usuarios y actores.
- Definir personas y escenarios principales.
- Acordar alcance y fuera de alcance.
- Identificar dispositivos y contexto de uso.
- Definir acciones que la aplicación debe permitir.
- Definir KPI de éxito.
- Registrar reglas, excepciones y criterios de aceptación.
- Elaborar PRD y Spec inicial.
- Estimar licenciamiento y dependencias como hipótesis a validar.

### Entregables esperados

- PRD aprobado.
- Spec inicial.
- Mapa del proceso.
- Matriz de usuarios y roles.
- Alcance y exclusiones.
- Criterios de aceptación.
- KPI de adopción y resultado.

### Criterio de aceptación

Gate 1 - Caso aprobado. Existe un caso de uso aprobado, con usuario, proceso, valor, alcance y criterios de éxito verificables.

## 2. Arquitectura y datos

### Objetivo

Definir el tipo de aplicación, la arquitectura de datos, los ambientes, las integraciones, las dependencias y la estrategia ALM antes de construir.

### Preguntas y controles guía

- Decidir entre canvas app y model-driven app según el caso.
- Definir fuentes de datos.
- Evaluar Dataverse, SharePoint, SQL, APIs u otras fuentes aprobadas.
- Diseñar tablas, relaciones, claves y ownership.
- Identificar volumen, latencia, concurrencia y crecimiento.
- Evaluar conectividad, mobile y offline cuando aplique.
- Definir ambientes Dev, Test/UAT y Prod.
- Crear o definir solución, publisher y versionado.
- Identificar connection references y environment variables.
- Evaluar conectores estándar, premium y custom.
- Revisar gateway y APIs cuando aplique.
- Verificar políticas DLP.
- Registrar dependencias y supuestos de licenciamiento.
- Definir arquitectura de integración con Power Automate.

### Entregables esperados

- Diagrama de solución.
- Modelo de datos.
- Decisión canvas/model-driven.
- Mapa de integraciones.
- Estrategia de ambientes.
- Registro de conectores.
- Matriz de dependencias.
- Evaluación de licencias.
- Decisión ALM.

### Criterio de aceptación

Gate 2 - Arquitectura aprobada. La solución puede construirse sin decisiones estructurales críticas pendientes.

## 3. UX y accesibilidad

### Objetivo

Diseñar una experiencia que permita completar la tarea operativa de forma clara, rápida, accesible y consistente.

### Preguntas y controles guía

- Diseñar journeys y flujos de tarea.
- Crear arquitectura de información.
- Diseñar wireframes y prototipo.
- Definir navegación.
- Reutilizar el Design System aprobado.
- Diseñar estados loading, empty, success, warning y error.
- Definir validaciones y feedback.
- Diseñar responsive según dispositivo.
- Validar teclado, lector de pantalla, foco, labels y contraste.
- Ejecutar Accessibility Checker cuando aplique.
- Validar con usuarios clave.
- Definir contenido y mensajes.
- Considerar localización e idioma cuando corresponda.

### Entregables esperados

- User journey.
- Wireframes.
- Prototipo.
- Mapa de navegación.
- Especificación de estados.
- Checklist de accesibilidad.
- Validación de usuarios.

### Criterio de aceptación

Gate 3 - Experiencia validada. El usuario puede completar los escenarios críticos con claridad y sin barreras conocidas.

## 4. Construcción y Power Fx

### Objetivo

Construir la aplicación con componentes, fórmulas, reglas y convenciones mantenibles, cuidando delegación, rendimiento y reutilización.

### Preguntas y controles guía

- Crear la aplicación dentro de la solución aprobada.
- Aplicar la convención de nombres aprobada, cuando exista.
- Construir componentes reutilizables.
- Centralizar tema y variables.
- Implementar Power Fx con fórmulas legibles.
- Evitar hardcoding.
- Revisar delegación.
- Reducir llamadas y payloads innecesarios.
- Evitar sobrecargar OnStart.
- Mantener pequeñas las cargas iniciales.
- Implementar validaciones.
- Gestionar errores.
- Documentar lógica crítica.
- Ejecutar App Checker.
- Revisar dependencias.
- Preparar trazabilidad de cambios.

### Entregables esperados

- Aplicación construida.
- Librería de componentes usada.
- Convenciones aplicadas.
- Fórmulas críticas documentadas.
- App Checker revisado.
- Registro de deuda conocida.

### Criterio de aceptación

Gate 4 - Aplicación construida. Los escenarios funcionales principales están implementados y la solución cumple el criterio técnico acordado.

## 5. Integraciones y automatización

### Objetivo

Conectar la aplicación con datos, APIs y automatizaciones de forma trazable, desacoplada y controlada.

### Preguntas y controles guía

- Implementar conectores aprobados.
- Integrar Power Automate cuando corresponda.
- Usar child flows o componentes reutilizables cuando agreguen valor.
- Validar custom connectors y APIs.
- Evitar credenciales personales críticas.
- Usar connection references.
- Usar environment variables.
- Definir contratos de entrada y salida.
- Manejar timeouts y errores.
- Mostrar feedback al usuario.
- Diseñar idempotencia cuando una acción pueda repetirse.
- Validar gateway.
- Documentar dependencias.
- Probar integraciones por ambiente.

### Entregables esperados

- Integraciones implementadas.
- Contratos documentados.
- Inventario de conexiones.
- Environment variables.
- Connection references.
- Casos de error.
- Evidencia de prueba.

### Criterio de aceptación

Gate 5 - Integraciones validadas. Las integraciones críticas funcionan en Test/UAT con configuración separada por ambiente y manejo de errores conocido.

## 6. Seguridad y gobierno

### Objetivo

Asegurar identidad, acceso, datos, conexiones, ownership, cumplimiento y continuidad antes de publicar.

### Preguntas y controles guía

- Definir matriz de acceso.
- Usar grupos de Microsoft Entra cuando corresponda.
- Configurar roles de seguridad de Dataverse cuando aplique.
- Evaluar seguridad por fila y columna.
- Aplicar mínimo privilegio.
- Revisar sharing de app, datos y flows.
- Validar DLP y conectores.
- Clasificar datos.
- Definir owner funcional y técnico.
- Definir cuentas técnicas o service principals cuando estén aprobados.
- Proteger secretos.
- Revisar auditoría y retención.
- Validar segregación Dev/Test/Prod.
- Documentar excepciones.
- Revisar licencias y capacidad.

### Entregables esperados

- Matriz de seguridad.
- Roles probados.
- DLP validada.
- Owners definidos.
- Registro de conexiones.
- Clasificación de datos.
- Plan de auditoría.
- Excepciones aprobadas.

### Criterio de aceptación

Gate 6 - Confianza aprobada. Usuarios de prueba acceden únicamente a los datos y acciones que les corresponden.

## 7. Pruebas, performance y UAT

### Objetivo

Demostrar que la aplicación cumple requisitos funcionales, seguridad, accesibilidad y performance en escenarios reales.

### Preguntas y controles guía

- Probar happy paths.
- Probar casos negativos y borde.
- Probar validaciones.
- Probar permisos y roles.
- Probar distintos usuarios.
- Probar dispositivos y navegadores.
- Probar offline cuando aplique.
- Ejecutar pruebas de accesibilidad.
- Ejecutar Test Studio o herramienta vigente cuando corresponda.
- Usar Live Monitor para diagnóstico.
- Evaluar tiempos de carga y llamadas.
- Verificar delegación.
- Probar concurrencia y volumen.
- Ejecutar regression testing.
- Realizar UAT.
- Registrar defectos.
- Definir severidad y criterio de cierre.
- Obtener aprobación formal.

### Entregables esperados

- Plan de pruebas.
- Casos y resultados.
- Evidencia de accesibilidad.
- Evidencia de performance.
- Registro de defectos.
- UAT aprobada.
- Aprobación de publicación.

### Criterio de aceptación

Gate 7 - Aprobada para publicar. No existen defectos críticos abiertos y negocio aprueba la aplicación para producción.

## 8. ALM, handoff y publicación

### Objetivo

Datalización arma el paquete de release (artifact, dependencias, checklist, evidencia) e Ingeniería de Software promueve la misma solución aprobada a producción mediante un proceso controlado, repetible y auditable.

### Preguntas y controles guía

- Versionar la solución.
- Mantener fuente en solución unmanaged en Dev.
- Generar artifact managed para ambientes downstream cuando sea el estándar aprobado.
- Usar Power Platform Pipelines o CI/CD aprobado.
- Promover secuencialmente Dev → Test/UAT → Prod.
- Validar dependencias.
- Configurar connection references.
- Configurar environment variables.
- Confirmar owners.
- Publicar y compartir la app.
- Asignar roles.
- Ejecutar smoke test.
- Documentar release.
- Preparar rollback o redeploy.
- Comunicar salida.
- Conservar artifact y evidencia.

### Entregables esperados

- Versión liberada.
- Artifact de solución.
- Registro de pipeline.
- Checklist de release.
- Configuración productiva.
- Smoke test.
- Release notes.
- Plan de rollback.
- Comunicación.

### Criterio de aceptación

Gate 8 - Paquete de release aprobado para pase a PROD. La versión aprobada está disponible en producción, configurada y validada sin ajustes manuales no documentados.

## 9. Operación, adopción y mejora

### Objetivo

Sostener la aplicación como producto, monitoreando salud, uso, incidentes, performance, ownership y evolución.

### Preguntas y controles guía

- Monitorear errores.
- Usar Live Monitor para investigación cuando aplique.
- Revisar analytics de uso.
- Medir adopción.
- Monitorear conexiones.
- Monitorear performance.
- Gestionar incidentes.
- Definir SLA y soporte.
- Mantener owners y co-owners.
- Revisar capacidad y licenciamiento.
- Gestionar cambios de conectores o DLP.
- Mantener release notes.
- Priorizar backlog.
- Retirar versiones obsoletas.
- Capacitar usuarios.
- Ejecutar mejora continua.

### Entregables esperados

- Dashboard o registro operativo.
- Runbook.
- SLA.
- Matriz de soporte.
- Métricas de adopción.
- Registro de incidentes.
- Backlog.
- Historial de versiones.

### Criterio de aceptación

Gate 9 - Operando y evolucionando. La aplicación tiene responsables, monitoreo, soporte y una cadencia de evolución basada en evidencia.

## Checklist final

- [ ] Documento completo y revisado.
- [ ] Criterios de aceptación trazables y comprobables.
- [ ] Riesgos, decisiones y responsables definidos.
- [ ] Evidencias y aprobaciones adjuntas al proyecto.
- [ ] Gate aprobado antes de iniciar la etapa siguiente.
