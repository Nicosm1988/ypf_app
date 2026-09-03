# Prompt corto de ejecución

Leé completo el archivo `PROMPT_MAESTRO_REDUCCION_DATALIZACION_YPF.md`, ubicado en la raíz del repositorio, y ejecutalo de punta a punta sobre este proyecto.

Tomalo como especificación autoritativa de producto, contenido, arquitectura, método, agentes, skills, MCPs, seguridad, ahorro de tokens y criterios de aceptación.

Reglas de arranque:

1. Revisá primero `git status -sb` y preservá cualquier cambio existente que no pertenezca a esta tarea.
2. Leé sólo los archivos necesarios mediante búsqueda y rangos; no vuelques archivos grandes completos en contexto.
3. Auditá y cerrá la matriz KEEP/MERGE/MOVE/RETIRE antes de modificar la interfaz.
4. Implementá por fases y verificá cada slice con las pruebas de menor costo aplicables.
5. Usá agentes, skills y MCPs únicamente cuando el prompt maestro los habilite y sólo con contexto mínimo.
6. No agregues frameworks o dependencias sin evidencia objetiva.
7. No hagas commit, push, PR ni deploy sin autorización explícita posterior.
8. No te detengas para pedirme confirmaciones que puedan resolverse leyendo el repositorio. Si aparece un bloqueo real, informá evidencia, impacto y alternativa segura.

El resultado obligatorio debe incluir la etapa **Maqueta y feedback antes de PRD/Spec**, el circuito **DEV → QA/TEST interno → UAT con cliente → OK trazable → PROD**, y la responsabilidad exclusiva de **Ingeniería de Software** sobre el pase a producción.

Al terminar, entregá únicamente el resumen ejecutivo, la arquitectura final, los cambios principales, las métricas antes/después, las validaciones y los riesgos residuales. Indicá expresamente que el resultado no fue publicado.
