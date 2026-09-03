# Datalito funciona como un asistente local gobernado

Datalito es un vertical slice estático y read-only integrado a Datalización Hub. Permite demostrar orientación conversacional, recuperación textual, citas, falta de evidencia, feedback y brechas sin presentar como operativa una infraestructura de IA que el repositorio no tiene.

## El alcance ejecutable está en el navegador

La versión actual ofrece:

- un launcher global y una página dedicada en `/datalito`;
- cinco modos que cambian la estructura de la respuesta;
- respuestas conversacionales acotadas para saludos, ayuda y continuaciones;
- un recorrido predefinido para consultas de flujo BI end-to-end;
- búsqueda textual ponderada sobre fuentes locales;
- contexto de ruta, título, anchor activo y selección de texto;
- citas visibles asociadas a cada respuesta respaldada;
- respuesta explícita de evidencia insuficiente;
- controles funcionales de vigencia y posible divergencia;
- feedback y brechas guardados en `localStorage`.

## El flujo prioriza límites antes de recuperar contenido

```text
Consulta del usuario
  |
  +-- reglas de pedidos sensibles
  |
  +-- conversación acotada o flujo BI conocido
  |
  +-- búsqueda textual en data/datalito.js
        |
        +-- ponderación por título, keywords, resumen y contenido
        +-- refuerzo por contexto de página
        +-- umbral mínimo de evidencia
              |
              +-- respuesta estructurada y citas
              └-- falta de evidencia y registro opcional de brecha
```

`data/datalito.js` construye el índice a partir de los módulos de contenido de la plataforma y declara metadata, modos, prompts sugeridos y casos de evaluación. `app.js` ejecuta las reglas, el retrieval textual, la composición de respuestas y la persistencia local.

## La metadata no reemplaza autorización

El build valida la estructura y el estado permitido de las fuentes. El runtime puede mostrar versión, revisión, vigencia y posibles divergencias; sin embargo, todo el bundle se descarga en el navegador. Campos como confidencialidad o roles describen gobierno y no restringen el acceso en este deploy público.

Por eso, el índice solo puede contener material apto para publicación abierta. Una regla de interfaz, un rechazo por palabras clave o una etiqueta de metadata no constituyen una frontera de seguridad.

## La versión actual no tiene componentes enterprise

No están implementados:

- LLM, embeddings ni base vectorial;
- RAG remoto o búsqueda semántica;
- API, base de datos o streaming;
- SSO, RBAC o autorización previa a la recuperación;
- telemetría centralizada, rate limiting o auditoría corporativa;
- sincronización de conversaciones, feedback o brechas;
- acceso a Internet, Power BI, Microsoft Fabric o fuentes privadas.

## La evolución requiere una decisión de arquitectura y gobierno

Antes de conectar un backend se deben aprobar proveedor, hosting, identidad, permisos por documento, privacidad, retención, residencia, observabilidad, evaluación y respuesta a incidentes. Recién entonces corresponde separar UI, API, recuperación, modelo, persistencia y telemetría.
