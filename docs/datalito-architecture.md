# Datalito Architecture

## Decisión

Datalito se implementa en esta etapa como un vertical slice estático, read-only y gobernado, compatible con la arquitectura actual del repositorio. La experiencia ya permite preguntar, recuperar fuentes locales aprobadas, citar, navegar a la fuente, registrar feedback y registrar brechas en almacenamiento local del navegador.

## Supuestos

- El repositorio actual es una SPA estática con HTML, CSS y JavaScript modular.
- El package manager detectado es npm por `package-lock.json`.
- No hay credenciales aprobadas para proveedor de IA, Microsoft Entra ID, base de datos ni Azure AI Search.
- No se debe instalar Next.js ni dependencias de IA hasta aprobar hosting, identidad, privacidad, retención y proveedor.

## Arquitectura V1

```text
Usuario
  |
  v
Launcher global y página /datalito
  |
  v
Motor local de consulta
  |
  +-- Clasificación simple de intención
  +-- Búsqueda por palabras clave sobre data/datalito.js
  +-- Umbral de evidencia
  +-- Respuesta estructurada
  +-- Citas internas
  +-- Feedback y brechas en localStorage
```

## Evolución enterprise

La arquitectura objetivo debe separar UI, API, proveedor de modelo, recuperación, autorización, persistencia, telemetría y evaluación. El runtime productivo deberá incorporar SSO, permisos por documento antes del retrieval, proveedor de IA aprobado, búsqueda híbrida, streaming, rate limiting, auditoría y observabilidad.

## Decisión pendiente

No se declara operativo ningún backend RAG, SSO ni persistencia corporativa hasta contar con aprobaciones y credenciales.
