<!-- Generado desde data/documentTemplates.js. No editar manualmente. -->

# Modelo Spec - Power BI y Microsoft Fabric

> Datos, modelo semántico, DAX, seguridad, experiencia, despliegue y operación

| Control          | Valor                       |
| ---------------- | --------------------------- |
| Producto         | Power BI y Microsoft Fabric |
| Tipo             | Spec                        |
| Responsable      | Portal de Datalización YPF  |
| Versión          | 2.0.0                       |
| Estado           | Vigente                     |
| Última revisión  | 2026-07-31                  |
| Próxima revisión | 2027-01-31                  |

## Propósito

Definir las decisiones técnicas y los gates necesarios para entregar una solución Power BI/Fabric segura, trazable y accionable.

## Forma de uso

1. Duplicar la plantilla para el proyecto.
2. Completar cada sección con evidencia y responsables.
3. Resolver supuestos, riesgos y decisiones abiertas.
4. Revisar con negocio, producto y responsables técnicos.
5. Aprobar y versionar antes de pasar al siguiente gate.

## 1. PRD y Spec

### Objetivo

Definir qué proceso se quiere automatizar, qué problema operativo resuelve, quién lo usa, qué reglas aplican y cómo se medirá que el trabajo manual disminuyó, incorporando las decisiones ya validadas con el cliente en la maqueta.

### Preguntas y controles guía

- Redactar PRD del proceso
- Bajar la necesidad a Spec técnica
- Validar criterios de aceptación con negocio e ingeniería

### Entregables esperados

- PRD aprobado
- Spec inicial
- Criterios de aceptación
- Matriz proceso-reglas-datos-acción

### Criterio de aceptación

Gate 1 - Proceso aprobado. Proceso automatizable aprobado antes de construir.

## 2. Datos y Power Query

### Objetivo

Conectar, preparar y validar los datos que sostienen la automatización, incluyendo fuentes, owners, frecuencia, calidad, Power Query, Query Folding y refresh.

### Preguntas y controles guía

- Mapear fuentes y contratos de datos
- Preparar consultas o pipelines
- Validar calidad y plan de refresh

### Entregables esperados

- Mapa de fuentes
- Consultas o pipelines preparados
- Checklist de calidad
- Plan de refresh

### Criterio de aceptación

Gate 2 - Datos listos. Datos confiables, actualizables y trazables antes del modelado.

## 3. Modelado

### Objetivo

Construir el modelo semántico que organiza hechos, dimensiones, relaciones, granularidad, calendario y modo de almacenamiento para que el proceso pueda analizarse sin ambigüedad.

### Preguntas y controles guía

- Diseñar esquema estrella
- Definir relaciones y granularidad
- Validar storage y performance base

### Entregables esperados

- Modelo semántico
- Diagrama estrella
- Ficha de granularidad
- Diccionario de tablas

### Criterio de aceptación

Gate 3 - Modelo validado. Modelo semántico entendible, estable y listo para calcular reglas.

## 4. DAX

### Objetivo

Convertir reglas de negocio en medidas DAX claras, mantenibles y performantes, cuidando contexto de filtro, variables, formatos, carpetas y pruebas funcionales.

### Preguntas y controles guía

- Crear medidas de negocio
- Ordenar carpetas y formatos
- Probar resultados contra criterios de aceptación

### Entregables esperados

- Diccionario de medidas
- Medidas DAX probadas
- Carpetas de medidas
- Casos de prueba DAX

### Criterio de aceptación

Gate 4 - DAX validado. Reglas calculadas de forma consistente y verificable.

## 5. Seguridad y gobierno

### Objetivo

Asegurar que datos, modelo y acciones se publiquen con permisos correctos, RLS/OLS, linaje, owners, stewards, sensibilidad y criterios de certificación.

### Preguntas y controles guía

- Definir matriz de permisos
- Configurar y probar RLS/OLS
- Documentar gobierno y linaje

### Entregables esperados

- Matriz de permisos
- Reglas RLS/OLS probadas
- Mapa de linaje
- Criterios de certificación

### Criterio de aceptación

Gate 5 - Confianza aprobada. Confianza aprobada antes de abrir la solución a usuarios.

## 6. UX y acción

### Objetivo

Diseñar una experiencia que lleve al usuario desde la señal hasta la acción esperada: reporte, alerta, tarea, ticket, aprobación o seguimiento operativo.

### Preguntas y controles guía

- Diseñar salida operativa
- Validar navegación y acción esperada
- Probar experiencia con usuarios clave

### Entregables esperados

- Reporte o salida operativa
- Mapa de navegación
- Checklist UX/performance
- Plan de adopción

### Criterio de aceptación

Gate 6 - Acción validada. Salida accionable que permite decidir sin volver al circuito manual.

## 7. Versionado y aprobación

### Objetivo

Preparar el paso a producción con control de cambios, revisión técnica, pruebas, UAT, ramas, pull requests, PBIP/TMDL y deployment pipeline cuando aplique.

### Preguntas y controles guía

- Revisar cambios por pull request
- Validar en Test
- Preparar checklist de publicación

### Entregables esperados

- Repositorio actualizado
- UAT aprobada
- Checklist de release
- Aprobación de publicación

### Criterio de aceptación

Gate 7 - Aprobado para publicar. Solución aprobada para publicarse sin cambios manuales improvisados.

## 8. Handoff y publicación

### Objetivo

Armar el paquete de release (artefactos, versión, evidencias de QA/UAT, dependencias, permisos, configuración por ambiente, release notes, monitoreo y rollback) para que Ingeniería de Software ejecute el pase a producción.

### Preguntas y controles guía

- Armar paquete de release
- Entregar handoff a Ingeniería de Software
- Acompañar verificación de la promoción a PROD

### Entregables esperados

- Paquete de release
- Evidencias de QA/UAT
- Release notes
- Plan de rollback

### Criterio de aceptación

Gate 8 - Paquete de release aprobado para pase a PROD. Ingeniería de Software promueve la solución a producción con evidencia completa.

## 9. Operación y mejora

### Objetivo

Sostener la automatización después de publicada con monitoreo, refresh, gateway, capacidad, uso real, incidentes, SLA y backlog de mejora continua.

### Preguntas y controles guía

- Monitorear operación
- Gestionar incidentes
- Mantener backlog de mejora

### Entregables esperados

- Dashboard operativo
- Runbook de incidentes
- SLA y alertas
- Backlog de mejora continua

### Criterio de aceptación

Gate 9 - Operando y mejorando. Proceso publicado, monitoreado y mejorado con evidencia.

## Checklist final

- [ ] Documento completo y revisado.
- [ ] Criterios de aceptación trazables y comprobables.
- [ ] Riesgos, decisiones y responsables definidos.
- [ ] Evidencias y aprobaciones adjuntas al proyecto.
- [ ] Gate aprobado antes de iniciar la etapa siguiente.
