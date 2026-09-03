<!-- Generado desde data/documentTemplates.js. No editar manualmente. -->

# Modelo Spec - Microsoft Power Automate

> Proceso, triggers, conectores, orquestación, resiliencia, seguridad, ALM y operación

| Control          | Valor                      |
| ---------------- | -------------------------- |
| Producto         | Microsoft Power Automate   |
| Tipo             | Spec                       |
| Responsable      | Portal de Datalización YPF |
| Versión          | 2.0.0                      |
| Estado           | Vigente                    |
| Última revisión  | 2026-07-31                 |
| Próxima revisión | 2027-01-31                 |

## Propósito

Definir el contrato de ejecución, las dependencias y los controles operativos de una automatización antes de activarla.

## Forma de uso

1. Duplicar la plantilla para el proyecto.
2. Completar cada sección con evidencia y responsables.
3. Resolver supuestos, riesgos y decisiones abiertas.
4. Revisar con negocio, producto y responsables técnicos.
5. Aprobar y versionar antes de pasar al siguiente gate.

## 1. PRD y Spec

### Objetivo

Definir el proceso, el problema operativo, el resultado esperado, el volumen, el SLA, los actores y las excepciones antes de automatizar.

### Preguntas y controles guía

- Mapear proceso actual.
- Identificar trigger funcional.
- Definir entrada, salida y acción.
- Identificar actores y responsables.
- Registrar pasos manuales.
- Registrar esperas, reprocesos y excepciones.
- Definir volumen y frecuencia.
- Definir SLA.
- Acordar alcance y fuera de alcance.
- Definir KPI de éxito.
- Definir criterios de aceptación.
- Crear PRD y Spec inicial.
- Identificar impacto si el flujo falla.

### Entregables esperados

- PRD.
- Spec.
- Mapa del proceso.
- SIPOC o VSM ligero cuando aplique.
- Matriz de actores.
- Catálogo de excepciones.
- KPI y SLA.
- Criterios de aceptación.

### Criterio de aceptación

Gate 1 - Proceso aprobado. El proceso y el valor de automatizarlo están aprobados y pueden explicarse sin depender de la herramienta.

## 2. Evaluación y diseño del proceso

### Objetivo

Determinar si el proceso es apto para automatización y elegir el tipo de flujo y el diseño objetivo.

### Preguntas y controles guía

- Evaluar estabilidad del proceso.
- Validar reglas explícitas.
- Analizar excepciones.
- Eliminar pasos sin valor antes de automatizar.
- Diseñar estado futuro.
- Definir human-in-the-loop.
- Definir aprobaciones.
- Elegir cloud flow, desktop flow/RPA o business process flow cuando aplique.
- Definir attended o unattended para RPA.
- Evaluar determinismo.
- Evaluar criticidad.
- Evaluar costo y beneficio.
- Evaluar licencias.
- Definir frontera de automatización.
- Definir fallback manual seguro.
- Realizar análisis inicial de riesgos.

### Entregables esperados

- Evaluación de automatización.
- Proceso futuro.
- Tipo de flow.
- Matriz de excepciones.
- Human-in-the-loop.
- Hipótesis de beneficio.
- Riesgos iniciales.
- Decisión go/no-go.

### Criterio de aceptación

Gate 2 - Automatización viable. La automatización es viable, tiene frontera clara y no replica desperdicios evitables.

## 3. Trigger, datos y conectores

### Objetivo

Diseñar cómo se dispara, qué datos consume, qué sistemas conecta, con qué identidad y bajo qué límites operativos.

### Preguntas y controles guía

- Definir trigger real.
- Evaluar event-driven, scheduled, instant o process-driven.
- Definir esquema de entrada y salida.
- Identificar fuentes y destinos.
- Evaluar conectores estándar, premium y custom.
- Revisar APIs.
- Revisar gateway.
- Definir ambiente.
- Crear o seleccionar solución.
- Definir publisher.
- Usar connection references.
- Usar environment variables.
- Definir identity y ownership.
- Revisar DLP.
- Evaluar límites de connector y API.
- Evaluar frecuencia y volumen.
- Diseñar idempotencia.
- Diseñar concurrencia.
- Definir paginación y batching.
- Considerar time zones y formatos.
- Para desktop flows, definir máquina, machine group y credenciales aprobadas.
- Registrar licenciamiento.

### Entregables esperados

- Diagrama de arquitectura.
- Contrato de datos.
- Definición de trigger.
- Inventario de conectores.
- Connection references.
- Environment variables.
- Identidad de ejecución.
- Matriz de límites.
- Decisión de gateway/máquina.
- Evaluación de licencias.

### Criterio de aceptación

Gate 3 - Arquitectura aprobada. La arquitectura puede ejecutar el volumen esperado con conexiones, identidad y configuración reproducibles.

## 4. Construcción y orquestación

### Objetivo

Implementar la lógica del flujo de forma modular, legible, eficiente y mantenible.

### Preguntas y controles guía

- Construir dentro de una solución.
- Aplicar naming.
- Agrupar acciones con scopes.
- Modularizar con child flows cuando corresponda.
- Evitar hardcoding.
- Usar variables solo cuando agregan claridad.
- Minimizar loops y acciones.
- Filtrar en origen.
- Diseñar condiciones claras.
- Configurar concurrencia conscientemente.
- Diseñar aprobaciones.
- Documentar expresiones críticas.
- Definir timeouts.
- Evitar dependencias circulares.
- Diseñar compensaciones.
- Proteger datos sensibles.
- Agregar comentarios funcionales.
- Validar límites.
- Para RPA, estabilizar selectores y evitar dependencias frágiles de pantalla.

### Entregables esperados

- Flujo construido.
- Convenciones aplicadas.
- Child flows cuando corresponda.
- Expresiones críticas documentadas.
- Diagrama lógico.
- Inventario de acciones externas.
- Deuda conocida.

### Criterio de aceptación

Gate 4 - Flujo construido. El happy path y los caminos controlados están implementados con lógica entendible y modular.

## 5. Resiliencia y observabilidad

### Objetivo

Asegurar que el flujo detecte, registre, comunique y gestione fallas sin producir resultados incompletos o silenciosos.

### Preguntas y controles guía

- Configurar Run after.
- Usar scopes con patrón Try/Catch/Finally cuando corresponda.
- Definir retry policy.
- Preferir retry exponencial para fallas transitorias cuando aplique.
- Definir timeout.
- Usar Terminate con estado y mensaje claros.
- Registrar contexto de ejecución.
- Incorporar correlation/run ID.
- Diseñar logging proporcional.
- Evitar logging excesivo.
- Enviar alertas accionables.
- Definir exception queue o registro de pendientes cuando aplique.
- Diseñar replay o reproceso seguro.
- Evitar duplicados mediante idempotencia.
- Diseñar compensating actions.
- Escalar a intervención humana.
- Definir qué información sensible no debe aparecer en logs.
- Preparar métricas de ejecución.

### Entregables esperados

- Estrategia de errores.
- Try/Catch o patrón equivalente.
- Retry/timeout.
- Logging.
- Alertas.
- Registro de excepciones.
- Procedimiento de reproceso.
- Evidencia de pruebas de falla.
- Runbook inicial.

### Criterio de aceptación

Gate 5 - Resiliencia validada. Las fallas críticas producen un estado conocido, evidencia suficiente y una acción de recuperación definida.

## 6. Seguridad y gobierno

### Objetivo

Proteger datos, conexiones, identidades y acciones, y asegurar ownership y cumplimiento.

### Preguntas y controles guía

- Aplicar mínimo privilegio.
- Revisar DLP.
- Clasificar conectores.
- Validar identidad de ejecución.
- Evitar dependencia de cuentas personales.
- Definir owner y co-owner.
- Definir service account o service principal cuando esté aprobado y soportado.
- Proteger secretos.
- Configurar secure inputs/outputs cuando aplique.
- Limitar sharing.
- Revisar permisos del flow y de los sistemas.
- Documentar acciones de alto impacto.
- Definir aprobación humana para acciones sensibles.
- Revisar auditoría.
- Definir retención.
- Revisar segregación de ambientes.
- Validar cumplimiento.
- Revisar licencias y capacidad.

### Entregables esperados

- Matriz de permisos.
- DLP validada.
- Inventario de conexiones.
- Owners.
- Identidad de ejecución.
- Clasificación de datos.
- Controles de acciones sensibles.
- Plan de auditoría.
- Excepciones aprobadas.

### Criterio de aceptación

Gate 6 - Confianza aprobada. El flujo puede ejecutar únicamente las acciones autorizadas con identidad, permisos y ownership conocidos.

## 7. Pruebas y aprobación

### Objetivo

Validar funcionalidad, excepciones, seguridad, volumen, resiliencia y comportamiento operativo antes de activar en producción.

### Preguntas y controles guía

- Probar happy path.
- Probar casos negativos.
- Probar excepciones.
- Probar datos vacíos, inválidos y duplicados.
- Probar permisos.
- Probar conexión caída.
- Probar timeout.
- Probar retries.
- Probar concurrencia.
- Probar idempotencia.
- Probar volumen.
- Probar throttling.
- Probar alertas.
- Probar reproceso.
- Probar cambio de owner.
- Ejecutar UAT.
- Para desktop flows, probar resoluciones, sesiones, máquinas, selectores y recuperación.
- Validar attended/unattended.
- Registrar defectos.
- Obtener aprobación formal.

### Entregables esperados

- Plan de pruebas.
- Matriz de escenarios.
- Resultados.
- Evidencia de fallas controladas.
- Prueba de seguridad.
- Prueba de volumen.
- UAT.
- Defectos resueltos.
- Aprobación.

### Criterio de aceptación

Gate 7 - Aprobado para activar. Los escenarios críticos, incluidos los fallos, se comportan según la Spec y no existen defectos críticos abiertos.

## 8. ALM, handoff y activación

### Objetivo

Datalización arma el paquete de release (artifact, dependencias, checklist, evidencia) e Ingeniería de Software promueve y activa la misma solución aprobada en producción con configuración, identidad y rollback controlados.

### Preguntas y controles guía

- Mantener el flow como solution-aware.
- Versionar solución.
- Mantener unmanaged en Dev.
- Promover artifact managed a Test/UAT/Prod cuando sea el estándar.
- Usar Power Platform Pipelines o CI/CD aprobado.
- Configurar connection references.
- Configurar environment variables.
- Validar owners e identidad.
- Validar máquina/gateway para RPA.
- Ejecutar prevalidation.
- Activar el flow.
- Ejecutar smoke test.
- Validar alertas.
- Documentar release.
- Preparar rollback/redeploy.
- Comunicar activación.
- Conservar artifact y evidencia.

### Entregables esperados

- Solución versionada.
- Artifact.
- Pipeline run.
- Configuración por ambiente.
- Flow activado.
- Smoke test.
- Release notes.
- Rollback.
- Comunicación.

### Criterio de aceptación

Gate 8 - Paquete de release aprobado para pase a PROD. La versión aprobada está activa en producción y ejecuta correctamente con la configuración productiva.

## 9. Operación y mejora

### Objetivo

Operar la automatización como servicio, midiendo salud, valor, errores, capacidad y oportunidades de mejora.

### Preguntas y controles guía

- Monitorear run history.
- Medir success/failure rate.
- Medir duración.
- Medir volumen.
- Medir SLA.
- Medir retries y excepciones.
- Detectar throttling.
- Monitorear conexiones.
- Monitorear gateway, máquina y desktop runtime cuando aplique.
- Gestionar alertas.
- Gestionar incidentes.
- Definir MTTR.
- Mantener runbook.
- Revisar ownership.
- Auditar acciones.
- Revisar consumo y licenciamiento.
- Revisar cambios de API y connectors.
- Medir beneficio real.
- Priorizar backlog.
- Retirar flows obsoletos.
- Ejecutar Kaizen y mejora continua.

### Entregables esperados

- Dashboard o registro operativo.
- Runbook.
- SLA.
- Alertas.
- Registro de incidentes.
- Métricas de valor.
- Backlog.
- Historial de releases.
- Plan de continuidad.

### Criterio de aceptación

Gate 9 - Operando y mejorando. El flow tiene monitoreo, soporte, responsables y una rutina de mejora basada en evidencia.

## Checklist final

- [ ] Documento completo y revisado.
- [ ] Criterios de aceptación trazables y comprobables.
- [ ] Riesgos, decisiones y responsables definidos.
- [ ] Evidencias y aprobaciones adjuntas al proyecto.
- [ ] Gate aprobado antes de iniciar la etapa siguiente.
