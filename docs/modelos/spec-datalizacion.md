# Modelo Spec - Automatización BI/Fabric

## 1. Contexto técnico

Proyecto:

PRD asociado:

Repositorio:

Ambientes:

Responsables técnicos:

## 2. Objetivo de la implementación

Explicar cómo la solución técnica automatiza el proceso definido en el PRD.

Debe quedar claro:

- Qué datos entran.
- Qué reglas se aplican.
- Qué motor calcula o prioriza.
- Qué salida operativa se genera.
- Cómo se despliega y opera.

## 3. Arquitectura propuesta

Describir componentes, fuentes, capas de datos, modelo semántico, reportes, pipelines, gateways e integraciones.

```text
PRD/Spec -> Datos/Power Query -> Modelado -> DAX -> Seguridad/gobierno -> UX/acción -> Versionado/aprobación -> Publicación -> Operación/mejora
```

## 4. Datos, fuentes y preparación

| Fuente / capa | Owner | Frecuencia | Storage esperado                                           | Uso en el proceso |
| ------------- | ----- | ---------- | ---------------------------------------------------------- | ----------------- |
|               |       |            | Import / Direct Lake / DirectQuery / Lakehouse / Warehouse |                   |

Documentar:

- Fuentes y contratos de datos.
- Nombres de consultas.
- Parámetros.
- Pasos aplicados relevantes.
- Query Folding.
- Incremental Refresh.
- Controles de calidad.
- Gateway, red, región, permisos y capacidad cuando aplique.

## 5. Modelado

Documentar:

- Tablas de hechos.
- Dimensiones.
- Granularidad.
- Relaciones.
- Cardinalidad.
- Jerarquías.
- Tablas de calendario.
- VertiPaq, Direct Lake, Import, DirectQuery o modo compuesto según aplique.

## 6. DAX

| Medida o regla | Descripción | Fórmula / criterio | Validación |
| -------------- | ----------- | ------------------ | ---------- |
|                |             |                    |            |

Buenas prácticas esperadas:

- Medidas antes que columnas calculadas cuando corresponda.
- Uso de variables.
- Carpetas de medidas.
- Formatos consistentes.
- Pruebas funcionales y revisión de performance sobre visuales reales.

## 7. Seguridad y gobierno

Documentar:

- RLS.
- OLS.
- Grupos de seguridad.
- Owners.
- Linaje.
- Certificación.
- Tratamiento de datos sensibles.

## 8. UX y salida operativa

Definir la salida del proceso:

- Tablero.
- Alerta.
- Tarea.
- Ticket.
- Aprobación.
- API.

La salida debe indicar qué acción espera del usuario y qué evidencia deja registrada.

## 9. Versionado y aprobación

Documentar:

- Estructura PBIP/TMDL.
- Ramas.
- Pull requests.
- UAT.
- Pruebas funcionales.
- Checklist de publicación.

## 10. Publicación

Documentar:

- Workspace productivo.
- App o audiencia.
- Permisos finales.
- Credenciales.
- Refresh inicial.
- Deployment Pipelines.
- Reglas por ambiente.
- Comunicación de salida a producción.

## 11. Operación

Definir:

- SLA.
- Ventanas de refresh.
- Monitoreo de capacidad.
- Gateway.
- Alertas.
- Runbook de incidentes.
- Backlog de optimización.

## 12. Pruebas y aceptación técnica

La Spec queda aprobada cuando:

- Las fuentes están documentadas.
- El modelo responde al proceso.
- Las reglas calculan lo esperado.
- La seguridad fue probada con usuarios reales.
- El despliegue es controlado.
- La operación tiene monitoreo y responsable.
