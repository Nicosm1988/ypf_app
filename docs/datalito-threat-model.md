# Datalito Threat Model

## Activos a proteger

- Fuentes internas aprobadas.
- Contenido restringido o no publicado.
- Variables de entorno, tokens y credenciales.
- Identidad, roles y permisos.
- Feedback, brechas y posibles datos personales.
- Prompt de sistema y reglas internas del agente.

## Riesgos principales

- Prompt injection desde usuario o documento.
- Exposición de contenido no autorizado.
- Invención de políticas, responsables o cifras.
- Registro indebido de contenido sensible.
- Citas que no respaldan la respuesta.
- Confusión entre conocimiento general y norma interna.

## Controles V1

- Sin proveedor externo de IA.
- Sin acceso a secretos ni variables de entorno.
- Sin búsqueda abierta en Internet.
- Sin contenido restringido.
- Respuesta insuficiente cuando no hay evidencia local.
- Feedback y brechas locales, no corporativas.

## Controles requeridos para producción enterprise

- SSO con Microsoft Entra ID.
- Filtro de autorización antes del retrieval.
- Rate limiting server-side.
- Sanitización de Markdown y URLs.
- Logs con redacción de PII.
- Auditoría de acciones administrativas.
- Evaluaciones adversariales antes de cada release.
