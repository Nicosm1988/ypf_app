export const powerBiPracticeLibrary = Object.freeze({
  "prd-y-spec": gate("Acordar el problema, la decisión y la evidencia antes de diseñar el reporte.", [
    practice(
      "bi-g01-p01",
      "El resultado de negocio se define antes que la solución técnica.",
      "Precisar qué decisión o acción debe mejorar, su línea de base y la meta verificable.",
      "Evita entregar un reporte correcto que no modifica el proceso ni reduce trabajo manual.",
      ["Línea de base", "Meta con plazo", "KPI y responsable"],
      ["B01"],
      [
        example(
          "Paradas de equipo",
          "El parte se consolida al día siguiente.",
          "Se define una vista de excepciones por turno y equipo.",
          "Baseline de 24 h y meta de disponibilidad antes de la reunión diaria.",
        ),
        example(
          "Desvíos de inventario",
          "La conciliación consume cuatro horas semanales.",
          "Se acuerda identificar diferencias y responsable de regularización.",
          "Meta de reducir 60 % el tiempo y registrar cada acción.",
        ),
        example(
          "Cumplimiento de mantenimiento",
          "Cada sector calcula el indicador de forma distinta.",
          "Se acuerdan numerador, denominador, ventana y exclusiones.",
          "Un caso de prueba firmado reproduce el KPI esperado.",
        ),
      ],
    ),
    practice(
      "bi-g01-p02",
      "Alcance, actores y aceptación forman un contrato verificable.",
      "Registrar usuarios, decisiones, reglas, exclusiones, dependencias y criterios de aceptación en PRD y Spec versionados.",
      "Reduce cambios tardíos, interpretaciones contradictorias y entregas imposibles de aprobar.",
      ["PRD y Spec versionados", "Matriz de actores", "Criterios Given/When/Then o equivalentes"],
      ["B01"],
      [
        example(
          "Primera versión",
          "Negocio solicita historial completo y alertas en el mismo release.",
          "Se limita el MVP a doce meses y se deja alertas fuera de alcance.",
          "Aprobación de alcance y backlog posterior vinculados a la versión.",
        ),
        example(
          "Acceso por planta",
          "No está claro quién puede consultar cada instalación.",
          "Data Owner define grupos, excepciones y responsable de alta.",
          "Matriz de acceso queda como criterio del Gate 5.",
        ),
        example(
          "Regla de atraso",
          "“Vencido” admite interpretaciones diferentes.",
          "La Spec fija fecha de negocio, zona horaria y tolerancia.",
          "Tres casos borde tienen resultado esperado y aprobador.",
        ),
      ],
    ),
    practice(
      "bi-g01-p03",
      "La viabilidad de datos, seguridad y operación se valida temprano.",
      "Convertir fuentes, owners, frecuencia, sensibilidad, volumen y disponibilidad en hipótesis explícitas a confirmar.",
      "Impide comprometer una experiencia que las fuentes, permisos o ventanas de actualización no pueden sostener.",
      ["Mapa preliminar de fuentes", "Registro de supuestos", "Riesgos y decisiones pendientes"],
      ["B01", "B19"],
      [
        example(
          "Fuente on-premises",
          "El KPI requiere SQL en una red privada.",
          "Se identifica gateway, owner y ventana antes de estimar refresh.",
          "Arquitectura confirma conectividad o ajusta la promesa.",
        ),
        example(
          "Dato sensible",
          "El detalle contiene información personal.",
          "Se registra clasificación, audiencia y necesidad de RLS.",
          "Seguridad participa antes del prototipo final.",
        ),
        example(
          "Volumen histórico",
          "La fuente supera cientos de millones de filas.",
          "Se evalúan agregaciones e incremental refresh desde el inicio.",
          "La Spec documenta modo de almacenamiento y prueba de escala.",
        ),
      ],
    ),
  ]),

  "datos-y-power-query": gate("Preparar consultas legibles, plegables, resilientes y operables desde el origen hasta el refresh.", [
    practice(
      "bi-g02-p01",
      "Cada consulta tiene un propósito, nombre y ubicación inequívocos.",
      "Definir alcance, convención y grupos antes de acumular transformaciones.",
      "Una estructura explícita permite revisar dependencias y mantener el proceso sin depender de su autor.",
      ["Convención de nombres", "Grupos Staging/Transform/Output", "Descripción de consultas críticas"],
      ["B02"],
      [
        example(
          "Consulta de origen",
          "Una consulta llamada Query1 extrae órdenes.",
          "Se renombra `stg_Ordenes_SQL` y se documenta que no carga al modelo.",
          "El panel permite distinguir origen, transformación y salida.",
        ),
        example(
          "Dimensión final",
          "Varias consultas parecen representar clientes.",
          "Se usa `dim_Cliente` sólo para la salida y nombres `ref_` para auxiliares.",
          "El linaje se entiende sin abrir el código M.",
        ),
        example(
          "Parámetros",
          "Servidor y fecha están mezclados con tablas.",
          "Se crea un grupo Parámetros y otro Funciones.",
          "La revisión encuentra configuración y lógica reusable en segundos.",
        ),
      ],
    ),
    practice(
      "bi-g02-p02",
      "Filtrar filas y quitar columnas se hace tan temprano como sea seguro.",
      "Reducir datos antes de joins, agrupaciones, ordenamientos y funciones costosas.",
      "Disminuye transferencia, memoria, tiempo de evaluación y carga sobre el origen.",
      ["Comparación de filas/columnas", "Orden de pasos justificado", "Tiempo de refresh medido"],
      ["B02", "B03"],
      [
        example(
          "Ventana histórica",
          "La consulta trae diez años y luego conserva doce meses.",
          "El filtro de fecha se mueve inmediatamente después de Navigation.",
          "El origen recibe el predicado y baja el volumen transferido.",
        ),
        example(
          "Tabla ancha",
          "Un merge utiliza 80 columnas aunque necesita seis.",
          "Se seleccionan claves y atributos requeridos antes del merge.",
          "El payload y el tiempo de combinación disminuyen.",
        ),
        example(
          "Ordenamiento",
          "Se ordena antes de eliminar registros descartados.",
          "Primero se filtra y después se ordena sólo si la salida lo necesita.",
          "Query Diagnostics confirma menos trabajo local.",
        ),
      ],
    ),
    practice(
      "bi-g02-p03",
      "Los tipos de datos y la configuración regional son explícitos.",
      "Asignar tipos correctos cerca del origen y controlar conversiones dependientes de idioma o zona.",
      "Evita errores silenciosos, filtros incorrectos y claves que no relacionan.",
      ["Tipos por columna", "Locale documentado", "Casos de conversión probados"],
      ["B02"],
      [
        example(
          "Fecha en CSV",
          "`01/08/2026` puede interpretarse como enero o agosto.",
          "Se convierte con locale `es-AR` acordado.",
          "Casos 13/08 y 08/13 demuestran el comportamiento esperado.",
        ),
        example(
          "Código con ceros",
          "El código `00124` se detecta como número.",
          "Se tipa como texto antes de usarlo como clave.",
          "La reconciliación conserva longitud y ceros iniciales.",
        ),
        example(
          "Importe decimal",
          "Una coma decimal llega como texto.",
          "Se convierte con cultura explícita y se aíslan errores.",
          "Totales y filas rechazadas se comparan con la fuente.",
        ),
      ],
    ),
    practice(
      "bi-g02-p04",
      "Query folding se conserva y se verifica, no se supone.",
      "Mover al origen las transformaciones compatibles, inspeccionar el plan y detectar el paso que rompe el plegado.",
      "Permite que el motor fuente haga el trabajo y evita materializar volúmenes innecesarios localmente.",
      ["Indicador o plan de consulta", "Paso de ruptura identificado", "Alternativa documentada"],
      ["B03"],
      [
        example(
          "Filtro SQL",
          "Una columna personalizada rompe folding antes del filtro principal.",
          "El filtro se adelanta y la lógica local queda al final.",
          "View Native Query o el indicador confirma el predicado remoto.",
        ),
        example(
          "Merge de fuentes",
          "Se combinan orígenes distintos y todo se evalúa localmente.",
          "Se prepara cada lado en su origen y se evalúa staging aprobado.",
          "El diseño registra qué parte pliega y su costo observado.",
        ),
        example(
          "Función M",
          "Una función fila por fila impide plegado.",
          "Se reemplaza por una transformación nativa o tabla de referencia.",
          "El refresh de prueba cumple el umbral de tiempo.",
        ),
      ],
    ),
    practice(
      "bi-g02-p05",
      "La configuración variable vive en parámetros, no en texto embebido.",
      "Centralizar servidor, base, ruta, ventana y otras decisiones configurables con valores y tipos controlados.",
      "Facilita promoción entre ambientes y reduce cambios manuales inseguros.",
      ["Inventario de parámetros", "Valores por ambiente", "Validación de tipo y rango"],
      ["B02", "B16"],
      [
        example(
          "Servidor",
          "Dev y Prod usan hosts distintos.",
          "`pServidor` cambia mediante regla de despliegue.",
          "El artifact no modifica código M entre ambientes.",
        ),
        example(
          "Ruta de archivos",
          "Una carpeta personal está escrita en cinco consultas.",
          "Se usa un parámetro de ubicación administrada.",
          "Un único cambio actualiza todas las referencias.",
        ),
        example(
          "Ventana de carga",
          "La cantidad de meses está fija en cada filtro.",
          "`pMesesHistoria` controla la ventana con rango documentado.",
          "UAT prueba valores límite sin editar consultas.",
        ),
      ],
    ),
    practice(
      "bi-g02-p06",
      "La lógica repetida se extrae y las dependencias se diseñan.",
      "Usar funciones y consultas de referencia cuando reducen duplicación, sin crear cadenas de evaluación innecesarias.",
      "Mantiene una sola regla y hace visible el costo de cada dependencia.",
      ["Mapa de dependencias", "Funciones con contrato", "Carga habilitada sólo en salidas"],
      ["B02"],
      [
        example(
          "Archivos mensuales",
          "Doce consultas repiten la misma limpieza.",
          "Una función `fxTransformarArchivo` recibe el binario y devuelve el esquema acordado.",
          "Tres archivos distintos producen la misma estructura validada.",
        ),
        example(
          "Tabla base",
          "Dos salidas duplican conexión y filtros.",
          "Una staging sin carga alimenta referencias con propósitos distintos.",
          "El linaje muestra una extracción y dos salidas controladas.",
        ),
        example(
          "Lookup pequeño",
          "Una transformación consulta la misma API por cada fila.",
          "Se obtiene el catálogo una vez y se combina localmente cuando es apropiado.",
          "El conteo de llamadas baja y los resultados coinciden.",
        ),
      ],
    ),
    practice(
      "bi-g02-p07",
      "La consulta tolera cambios previstos de esquema y falla ante cambios peligrosos.",
      "Elegir columnas, nombres y estrategias de expansión con un contrato de datos explícito.",
      "Evita que nuevas columnas se filtren sin control o que una ausencia crítica produzca datos engañosos.",
      ["Contrato de esquema", "Política ante columnas faltantes", "Alerta de ruptura"],
      ["B02"],
      [
        example(
          "Expansión de JSON",
          "La expansión toma todas las propiedades disponibles.",
          "Se enumeran sólo campos aprobados y tipos esperados.",
          "Una propiedad nueva no entra al modelo automáticamente.",
        ),
        example(
          "Columna opcional",
          "Un archivo antiguo no contiene `Observacion`.",
          "Se agrega nulo sólo para el campo declarado opcional.",
          "Archivos nuevos y antiguos pasan casos separados.",
        ),
        example(
          "Clave crítica",
          "La fuente elimina `IdEquipo`.",
          "La consulta falla con mensaje controlado en vez de continuar.",
          "La alerta identifica fuente, columna y owner.",
        ),
      ],
    ),
    practice(
      "bi-g02-p08",
      "Nulos, errores y filas rechazadas se tratan de forma observable.",
      "Distinguir ausencia válida, dato inválido y falla técnica; no reemplazar indiscriminadamente.",
      "Conserva la verdad del dato y permite corregir causas en lugar de ocultarlas.",
      ["Reglas de nulidad", "Tabla o conteo de rechazos", "Umbral de calidad"],
      ["B02"],
      [
        example(
          "Fecha inválida",
          "Al convertir una fecha, los errores se vuelven nulos sin registro.",
          "Se separan filas inválidas con valor original y motivo.",
          "El refresh informa cantidad y porcentaje rechazado.",
        ),
        example(
          "Monto ausente",
          "Nulo se convierte automáticamente en cero.",
          "Negocio decide cuándo cero y ausencia tienen significado distinto.",
          "El KPI prueba ambos escenarios.",
        ),
        example(
          "División",
          "Una tasa falla por denominador vacío.",
          "Se valida el denominador y se devuelve estado de calidad apropiado.",
          "El reporte distingue no aplica de error de fuente.",
        ),
      ],
    ),
    practice(
      "bi-g02-p09",
      "La calidad se prueba sobre reglas de negocio, no sólo sobre tipos.",
      "Medir completitud, unicidad, validez, integridad referencial y reconciliación en puntos críticos.",
      "Un refresh exitoso no garantiza datos confiables para decidir.",
      ["Perfil de columnas", "Reglas y umbrales", "Reconciliación con fuente"],
      ["B02", "B18"],
      [
        example(
          "Clave duplicada",
          "La dimensión Equipo recibe dos filas activas por ID.",
          "Se detecta duplicidad y se bloquea el gate sobre el umbral acordado.",
          "El owner recibe evidencia de IDs afectados.",
        ),
        example(
          "Huérfanos",
          "Órdenes refieren a centros inexistentes.",
          "Se calcula tasa de claves huérfanas antes del modelado.",
          "La regla tiene tolerancia, responsable y acción.",
        ),
        example(
          "Reconciliación",
          "El total de ventas difiere del sistema fuente.",
          "Se comparan conteo, suma y corte temporal.",
          "La diferencia queda dentro de tolerancia aprobada o se investiga.",
        ),
      ],
    ),
    practice(
      "bi-g02-p10",
      "Credenciales, privacidad y gateway se diseñan como parte de la consulta.",
      "Usar identidades administrables, niveles de privacidad coherentes y conectividad productiva con owner.",
      "Evita exposición de datos, combinaciones no autorizadas y refreshes dependientes de una persona.",
      ["Inventario de conexiones", "Owner de gateway", "Prueba con identidad productiva"],
      ["B19"],
      [
        example(
          "Cuenta personal",
          "El semantic model usa la credencial del desarrollador.",
          "Se migra a la identidad aprobada y se documenta rotación.",
          "El refresh sigue funcionando al retirar el acceso personal.",
        ),
        example(
          "Combinación de fuentes",
          "Datos públicos y confidenciales se combinan sin revisar privacidad.",
          "Se configuran niveles según política y se valida el aislamiento.",
          "La evaluación no expone una fuente a otra.",
        ),
        example(
          "Gateway",
          "La consulta funciona en Desktop pero no en el servicio.",
          "Se vincula a una fuente del gateway con drivers y permisos correctos.",
          "Un refresh en Test usa la misma topología que Prod.",
        ),
      ],
    ),
    practice(
      "bi-g02-p11",
      "El refresh incremental parte de una columna confiable y una política probada.",
      "Definir RangeStart/RangeEnd, particiones, detección de cambios y ventana de conservación según el dato.",
      "Reduce costo de actualización sin perder cambios tardíos ni duplicar períodos.",
      ["Política de particiones", "Folding de filtros", "Prueba inicial e incremental"],
      ["B04", "B03"],
      [
        example(
          "Órdenes",
          "Se conservan cinco años y cambian registros de los últimos siete días.",
          "Se archivan cinco años y se actualizan diez días por margen.",
          "Una corrección tardía aparece en la siguiente ejecución.",
        ),
        example(
          "Fecha y hora",
          "RangeStart se convierte a fecha y pierde precisión.",
          "El filtro conserva límites no superpuestos con el tipo correcto.",
          "No hay filas duplicadas entre particiones contiguas.",
        ),
        example(
          "Borrados",
          "La fuente elimina registros sin timestamp de modificación.",
          "Se define estrategia de soft delete o reconciliación adicional.",
          "La limitación y el control compensatorio quedan documentados.",
        ),
      ],
    ),
    practice(
      "bi-g02-p12",
      "El desarrollo se acelera sin alterar el comportamiento productivo.",
      "Trabajar con muestra temporal, diagnósticos y carga selectiva; retirar ayudas antes de liberar.",
      "Permite iterar rápido y deja una consulta final limpia, medible y reproducible.",
      ["Muestra de desarrollo retirada", "Query Diagnostics", "Consultas auxiliares sin carga"],
      ["B02", "B21"],
      [
        example(
          "Muestra",
          "Cada edición espera diez millones de filas.",
          "Se agrega Keep First Rows durante desarrollo y se elimina antes de UAT.",
          "El checklist confirma volumen completo en la prueba final.",
        ),
        example(
          "Cuello de botella",
          "No se sabe qué paso demora.",
          "Query Diagnostics compara lectura, merge y transformación.",
          "La optimización se basa en duración observada.",
        ),
        example(
          "Carga innecesaria",
          "Staging y funciones aparecen en el modelo.",
          "Se deshabilita carga de auxiliares y se conserva sólo la salida.",
          "El modelo contiene únicamente tablas previstas.",
        ),
      ],
    ),
  ]),

  modelado: gate("Convertir datos preparados en un modelo semántico simple, consistente y eficiente.", [
    practice(
      "bi-g03-p01",
      "El modelo declara grano y separa hechos de dimensiones.",
      "Construir un esquema estrella con hechos a grano consistente y dimensiones que filtran y agrupan.",
      "Evita ambigüedad, medidas complejas y resultados que cambian según el visual.",
      ["Ficha de granularidad", "Diagrama estrella", "Reglas de claves"],
      ["B05"],
      [
        example(
          "Producción",
          "Una fila mezcla total diario y evento de parada.",
          "Se separan hecho diario y hecho de eventos con granos explícitos.",
          "Cada tabla tiene una definición de fila única.",
        ),
        example(
          "Equipo",
          "Atributos de equipo se repiten en cada transacción.",
          "Se crea dimensión Equipo con clave estable.",
          "Los hechos sólo conservan claves y métricas aditivas.",
        ),
        example(
          "Objetivos",
          "Metas mensuales se relacionan directamente con hechos diarios.",
          "Se modela el grano mensual y dimensiones conformadas.",
          "La comparación no duplica valores al bajar a día.",
        ),
      ],
    ),
    practice(
      "bi-g03-p02",
      "Relaciones y calendario tienen una dirección y propósito controlados.",
      "Preferir uno-a-muchos, filtro simple y tabla calendario; justificar muchos-a-muchos, bidireccionalidad e inactivas.",
      "Reduce caminos ambiguos y hace predecible el contexto de filtro.",
      ["Matriz de relaciones", "Calendario marcado", "Casos de propagación de filtro"],
      ["B05", "B06"],
      [
        example(
          "Dos fechas",
          "Orden tiene fecha de creación y cierre.",
          "Una relación activa y otra inactiva se usan con medida explícita.",
          "Casos prueban ambas perspectivas sin duplicar tablas de hecho.",
        ),
        example(
          "Muchos a muchos",
          "Usuarios y áreas se conectan directamente con cardinalidad ambigua.",
          "Se introduce tabla puente con claves únicas.",
          "El filtro reproduce la asignación esperada.",
        ),
        example(
          "Bidireccional",
          "Se activa para corregir un visual puntual.",
          "Se rediseña la medida o el esquema antes de aceptar la excepción.",
          "La decisión queda documentada y testeada.",
        ),
      ],
    ),
    practice(
      "bi-g03-p03",
      "Modo de almacenamiento y tamaño responden al patrón de uso.",
      "Eliminar columnas y filas innecesarias, optimizar cardinalidad y elegir Import, DirectQuery, Direct Lake o compuesto con evidencia.",
      "Mejora latencia, refresh y consumo de capacidad sin sacrificar el caso de negocio.",
      ["Inventario de columnas", "Prueba de storage", "Tamaño y latencia base"],
      ["B07", "B08"],
      [
        example(
          "Texto de alta cardinalidad",
          "El hecho carga una descripción nunca usada.",
          "Se elimina o se mueve a una dimensión de detalle.",
          "El tamaño del modelo baja y el requisito sigue cubierto.",
        ),
        example(
          "DirectQuery",
          "Se elige por volumen sin medir la fuente.",
          "Se prueba latencia concurrente y se definen agregaciones.",
          "P95 cumple el umbral o se cambia la arquitectura.",
        ),
        example(
          "Precisión",
          "Un identificador numérico se almacena con tipo mayor al necesario.",
          "Se usa el tipo mínimo compatible y se revisa cardinalidad.",
          "VertiPaq Analyzer evidencia la reducción.",
        ),
      ],
    ),
  ]),

  dax: gate("Traducir reglas de negocio en medidas correctas, legibles y performantes.", [
    practice(
      "bi-g04-p01",
      "Las medidas se componen desde bases reutilizables y variables con nombre.",
      "Separar agregaciones base, derivadas y estados; usar VAR para evitar repetición y explicar intención.",
      "Reduce divergencias entre KPIs y facilita revisión y diagnóstico.",
      ["Árbol de medidas", "Variables descriptivas", "Carpetas de visualización"],
      ["B09", "B10"],
      [
        example(
          "Margen",
          "Tres medidas repiten ventas menos costo.",
          "Se crea `[Margen]` y las tasas la reutilizan.",
          "Todos los visuales devuelven el mismo importe base.",
        ),
        example(
          "Estado",
          "Una fórmula anida condiciones y cálculos largos.",
          "VAR nombra meta, real y desvío antes del RETURN.",
          "La revisión funcional sigue la regla sin recalcular mentalmente.",
        ),
        example(
          "Período anterior",
          "La lógica se copia en cada KPI.",
          "Se construye una medida patrón o calculation group cuando aplique.",
          "Casos de mes y año mantienen consistencia.",
        ),
      ],
    ),
    practice(
      "bi-g04-p02",
      "El contexto de filtro se modifica de forma precisa y eficiente.",
      "Preferir filtros booleanos, DIVIDE y funciones semánticas apropiadas; reservar iteradores y FILTER para necesidad real.",
      "Evita resultados inesperados y evaluaciones costosas sobre tablas completas.",
      ["Explicación de contexto", "Performance Analyzer", "Casos de totales y filtros"],
      ["B09", "B14"],
      [
        example(
          "División",
          "La tasa usa `/` y devuelve error con denominador cero.",
          "Se usa DIVIDE con resultado alternativo definido.",
          "Cero, nulo y valor válido tienen salida esperada.",
        ),
        example(
          "Filtro",
          "CALCULATE filtra toda la tabla con FILTER por una igualdad simple.",
          "Se usa argumento booleano sobre la columna.",
          "La medida conserva resultado y reduce tiempo.",
        ),
        example(
          "Iterador",
          "SUMX recorre una tabla para sumar una columna.",
          "Se reemplaza por SUM salvo que exista cálculo fila a fila.",
          "La prueba compara exactitud y duración.",
        ),
      ],
    ),
    practice(
      "bi-g04-p03",
      "Cada medida crítica tiene significado, formato y pruebas visibles.",
      "Documentar definición, unidad, owner, supuestos y casos; asignar formato sin convertir números a texto.",
      "Sostiene confianza y permite cambiar reglas sin romper comparabilidad.",
      ["Diccionario de medidas", "Formato dinámico cuando aplique", "Casos de prueba"],
      ["B09"],
      [
        example(
          "Porcentaje",
          "La medida multiplica por 100 y concatena `%`.",
          "Conserva valor decimal y usa formato porcentual.",
          "Ordenamiento, exportación y total siguen siendo numéricos.",
        ),
        example(
          "Total",
          "El total de una tasa sorprende al usuario.",
          "Se define si debe recalcular o agregar resultados de filas.",
          "Detalle y total tienen casos aprobados.",
        ),
        example(
          "Cambio de regla",
          "La meta anual cambia sin trazabilidad.",
          "Se actualiza Spec, medida y caso de regresión en el mismo cambio.",
          "El PR vincula regla, fórmula y evidencia.",
        ),
      ],
    ),
  ]),

  "seguridad-y-gobierno": gate("Autorizar personas, datos y contenido con ownership y trazabilidad demostrables.", [
    practice(
      "bi-g05-p01",
      "El acceso se concede por función y con mínimo privilegio.",
      "Separar roles de workspace, permisos de contenido, Build y distribución; administrar audiencias con grupos.",
      "Evita permisos individuales difíciles de revisar y privilegios de edición innecesarios.",
      ["Matriz de acceso", "Grupos de Entra", "Revisión de privilegios"],
      ["B01", "B11"],
      [
        example(
          "Consumidor",
          "Un usuario necesita ver una app pero recibe rol Member.",
          "Se distribuye por audiencia sin acceso de edición.",
          "La prueba confirma lectura y ausencia de acciones administrativas.",
        ),
        example(
          "Analista",
          "Debe crear un reporte sobre el modelo.",
          "Se otorga Build sólo al grupo aprobado.",
          "El acceso queda separado del rol de workspace.",
        ),
        example(
          "Baja",
          "Permisos fueron asignados persona por persona.",
          "Se migra a grupos con owner y revisión periódica.",
          "Retirar al usuario del grupo elimina el acceso esperado.",
        ),
      ],
    ),
    practice(
      "bi-g05-p02",
      "RLS y OLS se diseñan en el modelo y se prueban con identidades reales.",
      "Aplicar reglas simples sobre dimensiones, validar grupos y escenarios de cruce, exportación y Build.",
      "Una regla configurada no garantiza protección en todas las formas de consumo.",
      ["Roles RLS/OLS", "Matriz usuario-resultado", "Prueba en servicio"],
      ["B11"],
      [
        example(
          "Plantas",
          "Cada jefe ve sólo su instalación.",
          "RLS filtra dimensión Planta mediante tabla de autorización.",
          "Tres usuarios reales reciben conteos distintos y correctos.",
        ),
        example(
          "Ejecutivo",
          "Un rol debe ver todas las plantas.",
          "Se crea asignación explícita sin regla `TRUE()` dispersa.",
          "La excepción tiene aprobador y caso de regresión.",
        ),
        example(
          "Columna sensible",
          "El salario no debe exponerse aunque el reporte lo oculte.",
          "OLS protege la columna o se separa el modelo.",
          "Analyze in Excel y Build no revelan el campo al rol.",
        ),
      ],
    ),
    practice(
      "bi-g05-p03",
      "Linaje, clasificación y ownership acompañan al contenido.",
      "Definir Data Owner, steward, owner técnico, sensibilidad, endorsement y dependencias antes de certificar.",
      "Permite interpretar confianza, impacto y responsabilidad cuando cambia una fuente o una regla.",
      ["Mapa de linaje", "Etiqueta de sensibilidad", "Ficha de owners y revisión"],
      ["B12", "B18"],
      [
        example(
          "Certificación",
          "Un modelo se marca Certified sin proceso.",
          "Se exige owner, pruebas, refresh estable y documentación.",
          "La aprobación y fecha de revisión quedan registradas.",
        ),
        example(
          "Cambio de fuente",
          "Una tabla se reemplaza sin conocer consumidores.",
          "Se revisa linaje e impacto antes del cambio.",
          "Cada workspace afectado tiene responsable y plan.",
        ),
        example(
          "Exportación",
          "El reporte contiene datos confidenciales.",
          "Se aplica etiqueta vigente y se prueban políticas de exportación.",
          "El archivo exportado conserva clasificación cuando corresponde.",
        ),
      ],
    ),
  ]),

  "ux-y-accion": gate("Diseñar una experiencia accesible que convierta señales en decisiones y acciones.", [
    practice(
      "bi-g06-p01",
      "Cada página responde una pregunta y prioriza la acción.",
      "Organizar jerarquía, navegación y detalle bajo demanda desde el escenario del usuario.",
      "Reduce ruido visual y evita que el usuario reconstruya el proceso fuera del reporte.",
      ["Mapa pregunta-página", "Wireframe", "Acción esperada"],
      ["B01"],
      [
        example(
          "Sala diaria",
          "Una página muestra treinta KPI sin prioridad.",
          "Se destaca estado, desvíos y responsables; el resto queda en drill-through.",
          "Un supervisor identifica la acción en menos de un minuto.",
        ),
        example(
          "Detalle",
          "Toda la evidencia aparece en la portada.",
          "La portada resume y el detalle se abre por equipo.",
          "La navegación conserva contexto y permite volver.",
        ),
        example(
          "Excepción",
          "El usuario detecta una alarma pero debe enviar correo manual.",
          "Se incluye enlace o integración aprobada a la tarea.",
          "La acción queda trazada con identificador de origen.",
        ),
      ],
    ),
    practice(
      "bi-g06-p02",
      "Accesibilidad se valida con teclado, contraste y significado alternativo.",
      "Configurar orden de tabulación, texto alternativo, títulos, foco, colores y estados comprensibles sin depender sólo del color.",
      "Amplía el acceso y evita que una visualización correcta sea inutilizable para parte de la audiencia.",
      ["Checklist de accesibilidad", "Prueba de teclado", "Texto alternativo revisado"],
      ["B13"],
      [
        example(
          "Semáforo",
          "Rojo y verde son la única señal.",
          "Se agregan estado textual, icono y contraste suficiente.",
          "La lectura en escala de grises mantiene el significado.",
        ),
        example(
          "Orden de foco",
          "El teclado salta entre objetos decorativos.",
          "Se define orden lógico y se excluyen elementos sin interacción.",
          "La tarea crítica se completa sin mouse.",
        ),
        example(
          "Gráfico",
          "El título dice sólo “Ventas”.",
          "Título y alt text explican período, unidad y mensaje principal.",
          "El lector de pantalla comunica la conclusión relevante.",
        ),
      ],
    ),
    practice(
      "bi-g06-p03",
      "La experiencia se prueba con usuarios y rendimiento percibido.",
      "Medir tiempos, cantidad de visuales, interacciones y comprensión sobre dispositivo y datos representativos.",
      "Una página lenta o ambigua pierde adopción aunque el modelo sea correcto.",
      ["Performance Analyzer", "Prueba de tarea", "Hallazgos y decisiones"],
      ["B14"],
      [
        example(
          "Visual lento",
          "Un gráfico tarda ocho segundos.",
          "Performance Analyzer separa consulta DAX y render.",
          "La corrección cumple el P95 acordado.",
        ),
        example(
          "Slicers",
          "Doce filtros ocupan la mitad de la pantalla.",
          "Se conservan los decisivos y se agrupan opciones avanzadas.",
          "Usuarios completan el escenario con menos interacciones.",
        ),
        example(
          "Mobile",
          "La página desktop se comprime automáticamente.",
          "Se diseña layout mobile para las preguntas esenciales.",
          "La prueba en teléfono no requiere zoom lateral.",
        ),
      ],
    ),
  ]),

  "versionado-y-aprobacion": gate("Asegurar que el cambio aprobado sea trazable, probado y desplegable.", [
    practice(
      "bi-g07-p01",
      "PBIP y archivos textuales se versionan con cambios pequeños y revisables.",
      "Mantener código, modelo, reporte y documentación en una rama; revisar diffs y evitar secretos o archivos locales.",
      "Hace posible colaborar, auditar y recuperar sin depender de copias manuales.",
      ["Repositorio PBIP", "Pull request", "Convención de ramas y commits"],
      ["B15"],
      [
        example(
          "Nueva medida",
          "Se cambia modelo y reporte junto con otras tareas.",
          "El PR contiene una unidad funcional y su prueba.",
          "El diff permite relacionar medida, visual y Spec.",
        ),
        example(
          "Conflicto",
          "Dos autores editan la misma página sin coordinación.",
          "Se separan responsabilidades y se integra por rama.",
          "La revisión resuelve el conflicto antes de Test.",
        ),
        example(
          "Credencial",
          "Un parámetro local contiene un secreto.",
          "Se elimina del repositorio y se usa configuración segura.",
          "El escaneo de secretos queda limpio.",
        ),
      ],
    ),
    practice(
      "bi-g07-p02",
      "Test reproduce permisos, datos, refresh y carga de producción.",
      "Promover a un ambiente controlado y ejecutar regresión funcional, seguridad, accesibilidad y performance antes de UAT.",
      "Evita que la primera prueba integral ocurra con usuarios productivos.",
      ["Plan y resultados de prueba", "UAT firmada", "Defectos por severidad"],
      ["B16"],
      [
        example(
          "RLS",
          "El desarrollador prueba sólo con su cuenta administradora.",
          "UAT incluye usuarios de cada rol real.",
          "La matriz usuario-resultado queda adjunta al release.",
        ),
        example(
          "Refresh",
          "El PBIP abre pero nunca se refrescó en el servicio.",
          "Test usa gateway y credenciales equivalentes a Prod.",
          "Dos refreshes consecutivos finalizan dentro del SLA.",
        ),
        example(
          "Regresión",
          "Una medida nueva altera totales históricos.",
          "Se comparan casos críticos contra la versión vigente.",
          "Diferencias esperadas están aprobadas y explicadas.",
        ),
      ],
    ),
    practice(
      "bi-g07-p03",
      "El despliegue tiene dirección, configuración y recuperación definidas.",
      "Promover Dev → Test → Prod, revisar diferencias, parametrizar fuentes y conservar una versión recuperable.",
      "Reduce cambios manuales e improvisación cuando una publicación falla.",
      ["Checklist de release", "Reglas por ambiente", "Plan de rollback"],
      ["B16"],
      [
        example(
          "Parámetro",
          "Test apunta por error a la base productiva.",
          "La regla de despliegue asigna la fuente por etapa.",
          "La prevalidación confirma cada destino.",
        ),
        example(
          "Deploy selectivo",
          "Se promueve un reporte sin su modelo dependiente.",
          "Se revisa linaje y se despliega el conjunto coherente.",
          "La comparación de etapas no deja dependencias rotas.",
        ),
        example(
          "Rollback",
          "Una medida crítica falla tras publicar.",
          "Se conserva artifact y procedimiento de reversión.",
          "El simulacro restaura servicio dentro del objetivo.",
        ),
      ],
    ),
  ]),

  publicacion: gate("Publicar contenido productivo con acceso, refresh y comunicación comprobados.", [
    practice(
      "bi-g08-p01",
      "Workspace, app y audiencias separan creación de consumo.",
      "Publicar en el destino aprobado, distribuir mediante app y asignar contenido por audiencia con grupos.",
      "Mantiene estable la experiencia del consumidor y limita acceso de edición.",
      ["Workspace productivo", "Audiencias de app", "Matriz de distribución"],
      ["B17"],
      [
        example(
          "Operaciones",
          "Todos reciben todos los reportes del workspace.",
          "La app presenta una audiencia por función.",
          "Cada grupo ve únicamente navegación y contenido previstos.",
        ),
        example(
          "Enlace",
          "Se comparte URL directa del workspace.",
          "La comunicación apunta a la app publicada.",
          "El usuario no necesita rol de workspace.",
        ),
        example(
          "Actualización",
          "Cambios parciales quedan visibles antes de aprobar.",
          "La app se actualiza después del smoke test.",
          "La versión comunicada coincide con la disponible.",
        ),
      ],
    ),
    practice(
      "bi-g08-p02",
      "Refresh, gateway y credenciales se validan en el servicio.",
      "Configurar conexiones productivas, owner, frecuencia y alertas; ejecutar refresh inicial completo.",
      "Un archivo publicado sin datos actualizables no constituye una salida productiva.",
      ["Refresh exitoso", "Conexiones y owners", "Horario y zona documentados"],
      ["B19", "B18"],
      [
        example(
          "Horario",
          "El refresh corre durante la carga del origen.",
          "Se coordina ventana y zona horaria con el Data Owner.",
          "Dos ciclos cumplen frescura y duración.",
        ),
        example(
          "Gateway",
          "El nodo único está fuera de línea.",
          "Se valida monitoreo o cluster según criticidad.",
          "La alerta llega al owner operativo.",
        ),
        example(
          "Credencial",
          "El token expira a la semana.",
          "Se usa método aprobado y runbook de renovación.",
          "La fecha y responsable se registran antes de salida.",
        ),
      ],
    ),
    practice(
      "bi-g08-p03",
      "La publicación termina con smoke test, endorsement y comunicación accionable.",
      "Validar entrada, filtros, RLS, datos, exportación y acción principal con usuario de mínimo privilegio.",
      "Confirma la experiencia real y explica qué cambió, dónde acceder y a quién escalar.",
      ["Smoke test", "Release notes", "Canal de soporte"],
      ["B12", "B17"],
      [
        example(
          "Usuario real",
          "El admin ve el reporte y da por cerrado el release.",
          "Un consumidor de cada audiencia ejecuta el escenario crítico.",
          "Acceso, datos y RLS coinciden con lo aprobado.",
        ),
        example(
          "Certificación",
          "Se certifica antes de validar linaje y soporte.",
          "Endorsement se aplica al completar el checklist.",
          "La ficha de owner y revisión queda enlazada.",
        ),
        example(
          "Comunicación",
          "El correo dice sólo “reporte publicado”.",
          "Incluye propósito, enlace, cambio, acción y soporte.",
          "Los usuarios saben qué hacer sin pedir instrucciones adicionales.",
        ),
      ],
    ),
  ]),

  "operacion-y-mejora": gate("Operar el producto con alertas, responsables, capacidad y mejora basada en uso real.", [
    practice(
      "bi-g09-p01",
      "Refresh, gateway, consultas y capacidad se observan en conjunto.",
      "Monitorear éxito, duración, frescura, consumo, throttling y disponibilidad con umbrales accionables.",
      "Permite detectar degradación antes de que el usuario pierda confianza.",
      ["Dashboard operativo", "Umbrales", "Tendencias de capacidad"],
      ["B18", "B19", "B20"],
      [
        example(
          "Refresh",
          "La duración crece cada semana pero aún finaliza.",
          "Se alerta por tendencia y percentil, no sólo por falla.",
          "Operación investiga antes de superar la ventana.",
        ),
        example(
          "Capacidad",
          "Usuarios reportan lentitud en horario pico.",
          "Capacity Metrics relaciona CUs, operación e item.",
          "El backlog prioriza el consumidor responsable.",
        ),
        example(
          "Gateway",
          "Una máquina se satura de forma intermitente.",
          "Se combinan logs, contadores y estado del cluster.",
          "La acción de scale-up o scale-out tiene evidencia.",
        ),
      ],
    ),
    practice(
      "bi-g09-p02",
      "Cada alerta tiene owner, severidad y procedimiento de recuperación.",
      "Definir SLA, runbook, escalamiento, comunicación y cierre con causa para incidentes previsibles.",
      "Convierte telemetría en respuesta y reduce dependencia de conocimiento tácito.",
      ["Runbook", "Matriz de soporte", "Registro de incidentes y causa"],
      ["B18", "B19"],
      [
        example(
          "Credencial vencida",
          "Falla un refresh fuera de horario.",
          "La alerta identifica modelo, fuente, owner y pasos de renovación.",
          "El soporte recupera dentro del SLA sin contactar al autor.",
        ),
        example(
          "Dato incompleto",
          "El refresh termina pero llegan menos filas.",
          "Un control de volumen abre incidente de calidad.",
          "La publicación informa frescura y estado conocido.",
        ),
        example(
          "Cambio de API",
          "Un conector modifica esquema.",
          "El runbook conserva payload, prueba y rollback.",
          "La causa y prevención alimentan la retrospectiva.",
        ),
      ],
    ),
    practice(
      "bi-g09-p03",
      "Uso, decisión y costo determinan la evolución o el retiro.",
      "Revisar usuarios activos, acciones completadas, valor, deuda e incidentes con una cadencia de backlog.",
      "Evita mantener contenido sin impacto y prioriza mejoras por evidencia.",
      ["Métricas de adopción", "Backlog priorizado", "Criterio de retiro"],
      ["B01", "B18"],
      [
        example(
          "Baja adopción",
          "El reporte tiene aperturas pero no acciones registradas.",
          "Se entrevista a usuarios y se mide el paso posterior.",
          "La mejora se prioriza por barrera comprobada.",
        ),
        example(
          "Contenido duplicado",
          "Dos reportes responden la misma pregunta.",
          "Se compara uso, owner y cobertura y se consolida.",
          "El retiro tiene comunicación y fecha.",
        ),
        example(
          "Mejora",
          "Se pide una nueva página por preferencia individual.",
          "Se contrasta impacto, frecuencia y costo de mantenimiento.",
          "El backlog registra decisión y evidencia.",
        ),
      ],
    ),
  ]),
});

function gate(intro, practices) {
  return Object.freeze({ intro, practices: Object.freeze(practices) });
}

function practice(id, title, decision, why, evidence, sourceIds, examples) {
  return Object.freeze({
    id,
    title,
    decision,
    why,
    evidence: Object.freeze(evidence),
    appliesTo: Object.freeze(["Power BI", "Microsoft Fabric cuando aplique"]),
    sourceIds: Object.freeze(sourceIds),
    examples: Object.freeze(examples),
  });
}

function example(title, scenario, application, proof) {
  return Object.freeze({ title, scenario, application, proof });
}
