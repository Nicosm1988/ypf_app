# Datalito responde desde la misma fuente que sostiene el hub

El conocimiento de Datalito no se corrige mediante respuestas aisladas. Primero se actualiza el módulo estructurado correspondiente y después se regenera o ajusta su entrada en `data/datalito.js`. Así, la página visible, la cita y la respuesta conservan una misma fuente de verdad.

## Cada fuente necesita identidad, contexto y trazabilidad

El contrato `datalitoSourceSchema` exige:

| Grupo        | Campos                                            | Uso                                    |
| ------------ | ------------------------------------------------- | -------------------------------------- |
| Identidad    | `id`, `title`, `slug`, `section`                  | Distinguir y presentar la fuente.      |
| Contenido    | `summary`, `content_type`, `language`, `keywords` | Recuperar y estructurar la respuesta.  |
| Gobierno     | `status`, `version`, `owner`, `steward`           | Declarar vigencia y responsabilidad.   |
| Revisión     | `reviewed_at`, `review_due_at`                    | Advertir sobre revisión vencida.       |
| Alcance      | `confidentiality`, `allowed_roles`                | Describir la clasificación prevista.   |
| Trazabilidad | `canonical_url`, `checksum`                       | Abrir la evidencia y detectar cambios. |

Todas las fuentes incluidas en el bundle actual deben estar aprobadas y tener una URL local válida. El build rechaza registros incompletos y contenido serializado con campos inexistentes.

## Los controles actuales son funcionales

- Una fecha `review_due_at` vencida se muestra como advertencia y reduce la confianza de la respuesta.
- Registros que representan la misma fuente o tema y difieren en versión o contenido pueden generar una alerta de divergencia.
- Las citas muestran el título, la sección, la versión, el estado y las fechas disponibles.
- Una coincidencia por debajo del umbral produce una respuesta de evidencia insuficiente.
- El feedback conserva la pregunta, la respuesta y las fuentes asociadas para revisión local.
- Las brechas agrupan consultas repetidas y mantienen estado y timestamps en el navegador.

Estos controles no implementan aprobación editorial, autorización por rol ni distribución de tareas. Tampoco envían registros a un owner o steward.

## El deploy público limita qué contenido puede indexarse

Datalización Hub no tiene autenticación y publica los módulos de `data/` como archivos estáticos. En consecuencia:

- no incorporar datos internos, personales, productivos o confidenciales;
- no usar `allowed_roles` como si fuera un filtro real;
- no incluir URLs privadas, tokens, IDs de tenant ni nombres de recursos internos;
- no copiar políticas restringidas o documentación no publicada;
- no registrar datos sensibles en preguntas, feedback o brechas.

`localStorage` pertenece al navegador y al origen del sitio. No es una base corporativa, no tiene identidad de usuario y puede borrarse al limpiar los datos del sitio.

## Una modificación completa termina con evidencia

1. Actualizar la fuente estructurada original en `data/`.
2. Revisar la entrada generada o específica en `data/datalito.js`.
3. Confirmar metadata, keywords, URL canónica, versión y fechas.
4. Verificar manualmente una consulta respaldada y otra sin evidencia.
5. Ejecutar los gates proporcionales durante el desarrollo y `npm run quality` antes de publicar.
