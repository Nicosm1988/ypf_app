# Datalito Content Governance

## Principio

Datalito debe responder con la misma fuente que alimenta la plataforma. La corrección del conocimiento se hace en la fuente, no en una respuesta hardcodeada.

## Metadata mínima

Cada fuente debe tener identificador, título, sección, resumen, tipo de contenido, estado, versión, owner, steward, confidencialidad, roles permitidos, idioma, keywords, URL canónica y checksum.

## Estados

- `approved`: disponible para usuarios generales.
- `draft`: solo para roles habilitados.
- `in_review`: solo para revisión controlada.
- `deprecated`: puede mostrarse como contexto histórico con advertencia.

## Reglas

- Una fuente sin owner no debe entrar al índice.
- Una fuente vencida debe bajar confianza y mostrar alerta.
- Una contradicción entre fuentes debe registrarse como alerta de gobierno.
- Una pregunta frecuente sin respuesta debe convertirse en contenido aprobado o aclaración.

## V1

La V1 usa `data/datalito.js` como índice local aprobado. Las brechas y feedback se guardan en `localStorage` para demostrar el flujo sin simular persistencia corporativa.
