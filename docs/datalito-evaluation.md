# La evaluación separa cobertura declarada de calidad comprobada

Datalito incluye un banco de preguntas y casos adversariales para hacer repetible la revisión. La existencia de esos datasets no implica que las métricas estén automatizadas ni que exista un benchmark productivo.

## El repositorio conserva tres niveles de casos

- `data/datalito.js` contiene el banco completo de 170 preguntas y las colecciones de seguridad y falta de evidencia.
- `evals/datalito/golden-questions.json` reúne una muestra de consultas con respuesta esperable.
- `evals/datalito/no-answer-cases.json` y `evals/datalito/security-cases.json` cubren ausencia de evidencia y pedidos adversariales.

El build valida que las colecciones requeridas existan y mantengan su contrato. `qa:e2e` comprueba los flujos de interfaz cubiertos por Playwright. Ninguno de esos gates ejecuta automáticamente las 170 preguntas ni califica semánticamente cada respuesta.

## Las métricas son criterios de evaluación, no telemetría activa

| Métrica              | Pregunta que responde                                        |
| -------------------- | ------------------------------------------------------------ |
| Grounded Answer Rate | ¿Qué proporción de respuestas factuales tiene respaldo?      |
| Citation Coverage    | ¿Cuándo correspondía citar y la respuesta mostró citas?      |
| Citation Accuracy    | ¿La fuente citada respalda realmente la afirmación?          |
| Retrieval Hit Rate   | ¿La fuente esperada apareció entre los primeros resultados?  |
| Answer Correctness   | ¿La respuesta conserva el sentido de la fuente?              |
| No-answer Precision  | ¿Datalito evitó responder cuando faltaba evidencia?          |
| Helpful Rate         | ¿El feedback local marcó la respuesta como útil?             |
| Knowledge Gap Rate   | ¿Qué proporción de consultas terminó como brecha?            |
| Source Freshness     | ¿Las fuentes citadas estaban dentro de su fecha de revisión? |

La versión estática no agrega ni publica estos indicadores. Para obtenerlos se necesita ejecutar una muestra, registrar resultados y calcularlos fuera de la UI.

## Una revisión manual mínima cubre seis comportamientos

1. Hacer una consulta con una fuente inequívoca y comprobar respuesta, cita y enlace.
2. Hacer una consulta ausente y comprobar que no invente una respuesta.
3. Ejecutar un caso adversarial y comprobar el rechazo previsto.
4. Cambiar el modo de respuesta y verificar que cambie la estructura sin alterar la fuente.
5. Revisar una continuación para confirmar que conserva la cita anterior cuando corresponde.
6. Validar advertencias de vigencia o divergencia con datos de prueba controlados.

Antes de publicar, ejecutar `npm run quality`. Una futura versión con backend deberá automatizar el dataset, guardar baseline por versión e impedir releases ante regresiones críticas definidas de antemano.
