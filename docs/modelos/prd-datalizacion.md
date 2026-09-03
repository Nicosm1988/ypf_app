<!-- Generado desde data/documentTemplates.js. No editar manualmente. -->

# Modelo PRD - Proyecto de datalización

> Proceso, usuarios, reglas, alcance, riesgos y criterios de éxito

| Control          | Valor                                 |
| ---------------- | ------------------------------------- |
| Producto         | Power BI, Power Apps y Power Automate |
| Tipo             | PRD                                   |
| Responsable      | Portal de Datalización YPF            |
| Versión          | 2.0.0                                 |
| Estado           | Vigente                               |
| Última revisión  | 2026-07-31                            |
| Próxima revisión | 2027-01-31                            |

## Propósito

Alinear a sponsor, usuarios, negocio y equipo técnico sobre qué proceso se quiere mejorar, por qué importa y cómo se aceptará el resultado.

## Forma de uso

1. Duplicar la plantilla para el proyecto.
2. Completar cada sección con evidencia y responsables.
3. Resolver supuestos, riesgos y decisiones abiertas.
4. Revisar con negocio, producto y responsables técnicos.
5. Aprobar y versionar antes de pasar al siguiente gate.

## 1. Resumen ejecutivo

### Objetivo

Explicar qué proceso se quiere datalizar, por qué importa y qué resultado operativo debe producir.

### Preguntas y controles guía

- ¿Qué tarea manual, fragmentada o repetitiva se quiere eliminar o reducir?
- ¿Qué decisión, acción, alerta o aprobación debe quedar habilitada?
- ¿Qué evidencia demuestra que el problema existe y cuál es su impacto?

### Entregables esperados

- Resumen de una página
- Objetivo de negocio
- Resultado esperado

### Criterio de aceptación

Sponsor y responsable funcional acuerdan el problema, el resultado y la prioridad.

## 2. Proceso actual

### Objetivo

Describir el flujo vigente de punta a punta para distinguir valor, esperas, retrabajo, controles y excepciones.

### Preguntas y controles guía

- ¿Qué evento inicia el proceso y quién lo ejecuta?
- ¿Qué sistemas, planillas, correos, archivos o validaciones intervienen?
- ¿Dónde aparecen demoras, duplicación, pérdida de trazabilidad o riesgo?

### Entregables esperados

- Mapa del proceso actual
- Actores y sistemas
- Dolores priorizados

### Criterio de aceptación

El flujo actual puede explicarse con entrada, pasos, responsables, excepciones y salida.

## 3. Problema y oportunidad

### Objetivo

Cuantificar la brecha entre la situación actual y la operación deseada sin anticipar una solución técnica.

### Preguntas y controles guía

- ¿Cuál es la causa observable y cuál es solamente un síntoma?
- ¿Qué costo, tiempo, error, riesgo o decisión tardía genera?
- ¿Qué pasaría si el proceso no se modifica?

### Entregables esperados

- Declaración del problema
- Línea base
- Oportunidad cuantificada

### Criterio de aceptación

La necesidad está respaldada por evidencia y no por una preferencia de herramienta.

## 4. Disparador, entradas y salidas

### Objetivo

Definir el contrato funcional del proceso: cuándo comienza, qué recibe, qué transforma y qué entrega.

### Preguntas y controles guía

- ¿Qué evento, frecuencia, umbral o solicitud inicia el proceso?
- ¿Qué datos o documentos necesita y quién es su owner?
- ¿Qué salida recibe cada usuario y qué acción debe realizar después?

### Entregables esperados

- Disparador definido
- Inventario de entradas
- Salidas y acciones esperadas

### Criterio de aceptación

Cada entrada y salida tiene responsable, frecuencia y condición funcional verificable.

## 5. Usuarios y responsabilidades

### Objetivo

Acordar quién patrocina, decide, usa, opera, mantiene y responde por los datos y la solución.

### Preguntas y controles guía

- ¿Quiénes son los usuarios principales, secundarios y afectados?
- ¿Quién aprueba alcance, reglas y salida a producción?
- ¿Quién asume ownership funcional, técnico, de datos y de operación?

### Entregables esperados

- Mapa de stakeholders
- Matriz RACI
- Owners y suplencias

### Criterio de aceptación

No quedan decisiones o activos críticos sin una persona o rol responsable.

## 6. Reglas de negocio y excepciones

### Objetivo

Convertir el conocimiento del proceso en reglas claras, priorizadas y comprobables.

### Preguntas y controles guía

- ¿Qué condiciones, umbrales, prioridades y cálculos deben aplicarse?
- ¿Qué casos borde, excepciones o aprobaciones humanas existen?
- ¿Qué acción corresponde a cada resultado y qué evidencia debe conservarse?

### Entregables esperados

- Catálogo de reglas
- Matriz condición-acción
- Tratamiento de excepciones

### Criterio de aceptación

Negocio puede revisar cada regla con ejemplos positivos, negativos y de borde.

## 7. KPIs y criterios de éxito

### Objetivo

Definir cómo se medirá el impacto operativo, la calidad, la adopción y la sostenibilidad.

### Preguntas y controles guía

- ¿Cuál es la línea base, la meta, la frecuencia y el owner de cada KPI?
- ¿Cómo se medirán tiempo ahorrado, retrabajo, errores, SLA y adopción?
- ¿Qué señales obligan a corregir, pausar o retirar la solución?

### Entregables esperados

- Matriz de KPIs
- Línea base y meta
- Plan de medición

### Criterio de aceptación

Cada criterio de éxito tiene fórmula, fuente, frecuencia, meta y responsable.

## 8. Alcance y exclusiones

### Objetivo

Delimitar la primera entrega para evitar expectativas implícitas y expansión no controlada.

### Preguntas y controles guía

- ¿Qué procesos, usuarios, ubicaciones, fuentes y salidas están incluidos?
- ¿Qué queda explícitamente fuera de alcance y por qué?
- ¿Qué dependencias o etapas futuras deben registrarse sin incorporarse ahora?

### Entregables esperados

- Alcance incluido
- Fuera de alcance
- Dependencias y backlog posterior

### Criterio de aceptación

Sponsor, usuarios y equipo técnico comparten los mismos límites de la entrega.

## 9. Riesgos, supuestos y restricciones

### Objetivo

Hacer visibles las condiciones que podrían impedir el resultado o cambiar la viabilidad.

### Preguntas y controles guía

- ¿Qué restricciones de datos, seguridad, licencias, capacidad, tiempo o integración existen?
- ¿Qué supuestos deben validarse antes de construir?
- ¿Cuál es la mitigación, el owner y la fecha de decisión de cada riesgo?

### Entregables esperados

- Registro de riesgos
- Supuestos por validar
- Mitigaciones y decisiones

### Criterio de aceptación

Los riesgos críticos tienen owner, tratamiento y criterio de escalamiento.

## 10. Criterios de aceptación funcional

### Objetivo

Establecer evidencia observable para decidir si el producto resuelve el proceso definido.

### Preguntas y controles guía

- ¿Qué escenarios principales, negativos y de borde deben pasar?
- ¿Qué resultado, permiso, tiempo de respuesta y trazabilidad se espera?
- ¿Quién valida cada criterio y qué bloquea la aprobación?

### Entregables esperados

- Criterios Given/When/Then o equivalentes
- Casos de UAT
- Aprobadores

### Criterio de aceptación

Los criterios son específicos, medibles y trazables al problema, las reglas y los KPIs.

## Checklist final

- [ ] Documento completo y revisado.
- [ ] Criterios de aceptación trazables y comprobables.
- [ ] Riesgos, decisiones y responsables definidos.
- [ ] Evidencias y aprobaciones adjuntas al proyecto.
- [ ] Gate aprobado antes de iniciar la etapa siguiente.
