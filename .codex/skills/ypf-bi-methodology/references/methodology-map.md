# Methodology Map

| BI stage | Main question | Preferred methods | Evidence |
| --- | --- | --- | --- |
| PRD y Spec | Que proceso duele y que decision cambia | Definir, VSM actual, SIPOC ligero | PRD, Spec, alcance, criterio de aceptacion |
| Datos y Power Query | Donde se pierde disponibilidad, eficiencia o calidad | Medir, OEE BI, contratos de datos | Baseline, refresh, latencia, calidad |
| Modelado | Como se representa el proceso sin ambiguedad | Flujo continuo, granularidad, gobierno semantico | Hechos, dimensiones, relaciones, calendario |
| DAX | Que regla decide y que falla puede inducir | Poka-Yoke, FMEA de reglas | Medidas base, casos borde, pruebas |
| Seguridad y gobierno | Quien ve, entiende y responde por el dato | FMEA, Poka-Yoke, ownership | RLS/OLS, linaje, owners, certificacion |
| UX y accion | Como pasa el usuario de senal a accion | VSM futuro, flujo continuo | Navegacion, detalle, alertas, accion esperada |
| Versionado y aprobacion | Como cambiar rapido sin perder control | SMED, revision por pares, plan de control | PBIP/TMDL, UAT, rollback |
| Publicacion | Como habilitar un servicio BI productivo | SMED operativo, Poka-Yoke de go-live | App, permisos, gateway, refresh, comunicacion |
| Operacion y mejora | Como sostener y aprender | Controlar, OEE BI, Kaizen, Kata | SLA, incidentes, adopcion, backlog |

Use this table as placement logic. If a method does not fit a stage and a question, do not add it.
