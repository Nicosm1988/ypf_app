# Datalito Runbook

## Uso diario

1. Abrir el launcher global o la página `/datalito`.
2. Elegir modo de respuesta.
3. Preguntar en lenguaje natural.
4. Revisar respuesta, citas y contenido relacionado.
5. Abrir la fuente si se necesita validar detalle.
6. Marcar feedback o registrar brecha si la respuesta no alcanza.

## Agregar contenido al índice local

1. Actualizar la fuente estructurada original de la plataforma.
2. Si aplica, sumar una fuente específica en `data/datalito.js`.
3. Verificar metadata, keywords y URL canónica.
4. Ejecutar `npm run quality`.
5. Publicar con el flujo normal de GitHub y Vercel.

## Incidentes

- Si Datalito responde sin evidencia, revisar el threshold y la fuente citada.
- Si cita una fuente incorrecta, ajustar keywords, resumen o contenido indexado.
- Si falta información, convertir la brecha en contenido aprobado.
- Si aparece una consulta sensible, escalar a Seguridad y Gobierno antes de ampliar alcance.

## Evolución backend

Antes de conectar un LLM real, confirmar proveedor, contrato, retención, residencia, SSO, roles, base de datos, rate limiting y observabilidad.
