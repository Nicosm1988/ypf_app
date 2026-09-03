# Methodology Map

| BI stage                | Main question                                                                | Preferred methods                                | Evidence                                                         |
| ----------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------ | ----------------------------------------------------------------- |
| Maqueta y feedback      | El cliente entiende y valida la direccion antes de construir?                | Walkthrough navegable, registro de feedback       | Maqueta versionada, rondas de feedback, aprobacion de direccion   |
| PRD y Spec              | Que proceso duele y que decision cambia, ya validado con la maqueta          | Definir, VSM actual, SIPOC ligero                | PRD, Spec, alcance, criterio de aceptacion                        |
| Datos y Power Query     | Donde se pierde disponibilidad, eficiencia o calidad                         | Medir, OEE BI, contratos de datos                | Baseline, refresh, latencia, calidad                              |
| Modelado                | Como se representa el proceso sin ambiguedad                                 | Flujo continuo, granularidad, gobierno semantico | Hechos, dimensiones, relaciones, calendario                       |
| DAX                     | Que regla decide y que falla puede inducir                                   | Poka-Yoke, FMEA de reglas                        | Medidas base, casos borde, pruebas                                |
| Seguridad y gobierno    | Quien ve, entiende y responde por el dato                                    | FMEA, Poka-Yoke, ownership                       | RLS/OLS, linaje, owners, certificacion                            |
| UX y accion             | Como pasa el usuario de senal a accion                                       | VSM futuro, flujo continuo                       | Navegacion, detalle, alertas, accion esperada                     |
| Versionado y aprobacion | Como cambiar rapido sin perder control, con OK trazable del cliente en UAT   | SMED, revision por pares, plan de control        | PBIP/TMDL, UAT, rollback                                          |
| Handoff y publicacion   | Como entregar evidencia completa para que Ingenieria de Software promueva a PROD | SMED operativo, Poka-Yoke de go-live          | Paquete de release, permisos, gateway, refresh, comunicacion      |
| Operacion y mejora      | Como sostener y aprender                                                     | Controlar, OEE BI, Kaizen, Kata                  | SLA, incidentes, adopcion, backlog                                |

Use this table as placement logic. If a method does not fit a stage and a question, do not add it.

Nota de responsabilidad: en "Handoff y publicacion", Datalizacion arma y entrega el paquete de release;
Ingenieria de Software es la unica responsable de ejecutar la promocion a PROD.
