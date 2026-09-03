# Datalito se opera como una función local del portal

La versión actual no tiene servicios, colas ni procesos de backend que monitorear. Operarla significa mantener fuentes, verificar respuestas y publicar el bundle estático mediante el mismo flujo que el resto de Datalización Hub.

## Uso de la interfaz

1. Abrir el launcher global o `/datalito`.
2. Elegir el modo de respuesta adecuado.
3. Formular una consulta sin incluir información sensible.
4. Revisar la respuesta, la confianza, las alertas y las citas.
5. Abrir la fuente canónica antes de aplicar una decisión importante.
6. Marcar feedback o registrar una brecha si la base no alcanza.

El historial conversacional vive en memoria durante la sesión. Feedback y brechas se guardan localmente en el navegador y pueden desaparecer al borrar los datos del sitio.

## Incorporación o corrección de conocimiento

1. Identificar el módulo original en `data/`.
2. Corregir allí la definición, el proceso o la práctica.
3. Revisar en `data/datalito.js` la metadata, keywords, contenido y URL canónica.
4. Confirmar que la ruta y el anchor citados existan.
5. Probar una consulta directa, una paráfrasis y un caso sin evidencia.
6. Ejecutar `npm run build`, los linters relacionados y `npm run qa:e2e`.
7. Antes del release, ejecutar `npm run quality`.

No agregar una frase hardcodeada en `app.js` para compensar una fuente incorrecta. Las respuestas conversacionales y de seguridad son excepciones deliberadas; el conocimiento del dominio debe conservar trazabilidad.

## Diagnóstico de incidentes

| Síntoma                                    | Revisión                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------ |
| No encuentra una fuente existente          | Revisar título, keywords, resumen, contenido y umbral.                         |
| Cita una fuente incorrecta                 | Comparar ponderación textual, contexto de página y coincidencias competidoras. |
| El enlace abre una sección equivocada      | Corregir `canonical_url` y verificar el anchor real.                           |
| Responde con una fuente vencida            | Revisar `review_due_at` y renovar o retirar el contenido.                      |
| Muestra una posible divergencia            | Comparar versiones y consolidar una fuente canónica.                           |
| No guarda feedback o brechas               | Revisar disponibilidad y cuota de `localStorage`.                              |
| Persiste una versión anterior              | Verificar el cache name del service worker y los headers de revalidación.      |
| Aparece contenido que no debía ser público | Retirar el deploy o el asset, invalidar caché y escalar el incidente.          |

## Un backend exige un runbook distinto

No conectar un LLM o una fuente privada como cambio incremental de frontend. Esa evolución requiere definir SSO, autorización antes del retrieval, retención, redacción de datos personales, rate limiting, auditoría, observabilidad, evaluación, rollback y responsables de incidentes.
