# Datalito Evaluation

## Objetivo

El dataset de evaluación valida que Datalito encuentre fuentes correctas, cite con precisión, reconozca falta de evidencia y resista pedidos adversariales.

## Dataset

La lista completa de 170 preguntas vive en `data/datalito.js` como `datalitoEvaluationQuestions`. Los archivos de `evals/datalito` documentan los grupos iniciales para golden questions, no-answer y seguridad.

## Métricas

- Grounded Answer Rate.
- Citation Coverage.
- Citation Accuracy.
- Retrieval Hit Rate.
- Answer Correctness.
- No-answer Precision.
- Helpful Rate.
- Knowledge Gap Rate.
- Source Freshness.

## Ejecución V1

1. Ejecutar `npm run quality`.
2. Probar manualmente una muestra de preguntas en `/datalito`.
3. Revisar citas y estado de evidencia.
4. Registrar brechas desde la UI cuando corresponda.

## Evolución

La versión con backend debe incorporar ejecución automática del benchmark, baseline por prompt/modelo/índice y bloqueo de release ante regresiones críticas.
