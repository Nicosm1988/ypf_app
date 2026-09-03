# El principal límite de Datalito es que todo el bundle es público

Este modelo describe la versión estática desplegada sin autenticación. El navegador del visitante es un entorno no confiable: puede inspeccionar, copiar y modificar localmente JavaScript, metadata, fuentes precargadas y valores de `localStorage`.

## Activos

- integridad del contenido metodológico y de sus citas;
- reputación de la plataforma y claridad sobre sus límites;
- disponibilidad de rutas, documentos y assets;
- feedback y brechas guardados por cada navegador;
- credenciales y datos internos que deben permanecer fuera del repositorio;
- cadena de publicación, dependencias y configuración de Vercel.

## Límites de confianza

```text
Repositorio y pipeline de build
  |
  v
Deploy público y service worker
  |
  v
Navegador no confiable
  ├── consulta del usuario
  ├── bundle y fuentes visibles
  └── localStorage controlado por el origen
```

No existe un límite de autorización entre el visitante y `data/datalito.js`. Si una fuente llega al bundle, se considera publicada.

## Riesgos y controles vigentes

| Riesgo                             | Control actual                                                       | Riesgo residual                                                        |
| ---------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Publicación de contenido sensible  | Política repo-publicable, revisión y ausencia de conectores privados | Un error editorial expone el archivo completo.                         |
| Pedido de secretos o instrucciones | Detección por patrones y respuesta de rechazo                        | Es una regla de UX, no un control de acceso.                           |
| Respuesta sin respaldo             | Umbral de evidencia, citas y respuesta de no-answer                  | La búsqueda léxica puede elegir una fuente imperfecta.                 |
| Cita desactualizada                | Fechas de revisión y advertencia de vigencia                         | No existe workflow automático de renovación.                           |
| Fuentes divergentes                | Detección acotada por identidad temática o URL                       | No resuelve cuál versión es la correcta.                               |
| Manipulación de feedback           | Persistencia local sin identidad                                     | Los registros no son auditables ni comparables entre usuarios.         |
| Datos sensibles en consultas       | No hay envío a un backend                                            | El texto puede quedar visible en el dispositivo o en el storage local. |
| Caché obsoleto                     | Network-first para código y datos, versionado del cache              | Un service worker anterior puede demorar la actualización.             |
| Dependencia vulnerable             | Lockfile, `npm audit` y gate de calidad                              | Requiere actualización y revisión continuas.                           |

La CSP y los headers defensivos reducen superficie del sitio, pero no vuelven privado un recurso público ni validan la exactitud del contenido.

## Uso seguro de la demostración

- Mantener fuera del repositorio secretos, datos personales y fuentes internas.
- Tratar toda consulta como texto potencialmente visible en el dispositivo.
- Confirmar una decisión importante en la fuente citada.
- No interpretar confianza alta como aprobación organizacional.
- Retirar con rapidez cualquier archivo publicado por error y actualizar el service worker.

## Requisitos antes de incorporar IA o datos privados

Una versión enterprise necesita SSO, autorización por documento antes de recuperar contenido, aislamiento de tenants, gestión de secretos, protección frente a prompt injection documental, sanitización de salidas y URLs, rate limiting, logs con redacción de datos personales, retención definida, auditoría administrativa, evaluación adversarial y un proceso probado de rollback.
