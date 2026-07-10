export const powerAppsPracticeLibrary = {
  "prd-y-spec": {
    intro:
      "La aplicación empieza con una decisión de negocio verificable: qué problema resuelve, para quién, con qué alcance y cómo se comprobará el resultado.",
    practices: [
      {
        id: "pa-g01-p01",
        title: "El problema y el resultado se acuerdan antes de elegir la app.",
        decision: "Definir qué decisión o tarea operativa debe cambiar y qué indicador demostrará que la aplicación genera valor.",
        why: "Una aplicación puede cumplir la especificación técnica y aun así digitalizar el proceso equivocado. El baseline y la meta mantienen el trabajo enfocado en el resultado.",
        evidence: [
          "Baseline del proceso actual.",
          "Meta cuantificada y plazo de evaluación.",
          "Criterios de aceptación vinculados al resultado.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A01", "C02"],
        examples: [
          {
            title: "Inspecciones de campo",
            scenario: "Las novedades se consolidan dos días después de la recorrida.",
            application: "La app registra, clasifica y deriva cada anomalía desde el lugar de inspección.",
            proof: "Baseline de 48 horas y meta de cierre menor a 4 horas.",
          },
          {
            title: "Permisos operativos",
            scenario: "Las solicitudes y rechazos se gestionan por correo sin trazabilidad común.",
            application: "La app centraliza la solicitud, la evidencia, la aprobación y el motivo de rechazo.",
            proof: "Al menos el 95 % de los casos se resuelve dentro del SLA de 8 horas.",
          },
          {
            title: "Diferencias de inventario",
            scenario: "El equipo vuelve a cargar en una planilla lo que ya anotó durante el conteo.",
            application: "La app captura una vez, valida los datos y deriva sólo las diferencias que requieren acción.",
            proof: "Reducción mínima del 50 % en el tiempo de corrección.",
          },
        ],
      },
      {
        id: "pa-g01-p02",
        title: "El contexto real del usuario condiciona el producto.",
        decision: "Acordar quién usará la aplicación, en qué dispositivo, bajo qué condiciones y para completar qué tarea crítica.",
        why: "El mismo proceso exige experiencias distintas según movilidad, conectividad, volumen de casos y capacidades de los usuarios.",
        evidence: [
          "Perfiles de usuario y escenarios prioritarios.",
          "Matriz de dispositivos, conectividad y contexto de uso.",
          "Validación temprana con usuarios representativos.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A01", "C02"],
        examples: [
          {
            title: "Operador con tablet",
            scenario: "La tarea se realiza en campo, con guantes y poco tiempo de lectura.",
            application: "Se priorizan controles grandes, pocas decisiones por pantalla y confirmaciones visibles.",
            proof: "El prototipo se completa en campo sin teclado físico ni ayuda externa.",
          },
          {
            title: "Supervisor con cola de trabajo",
            scenario: "El supervisor procesa veinte o más casos por sesión desde una computadora.",
            application: "La experiencia muestra prioridad, vencimiento y acciones por lote antes del detalle.",
            proof: "La tarea crítica se completa sin abrir individualmente cada registro.",
          },
          {
            title: "Contratista con conectividad intermitente",
            scenario: "El usuario trabaja desde un teléfono en zonas con red inestable.",
            application: "Se reduce la captura inicial y se define cómo conservar o recuperar el trabajo pendiente.",
            proof: "La prueba en red degradada no pierde los datos ya ingresados.",
          },
        ],
      },
      {
        id: "pa-g01-p03",
        title: "El alcance, los responsables y la aceptación deben ser verificables.",
        decision: "Fijar qué entra, qué queda afuera, quién decide y qué condiciones deben cumplirse para cerrar el gate.",
        why: "Los límites explícitos reducen expectativas contradictorias, dependencias tardías y aplicaciones sin continuidad de ownership.",
        evidence: [
          "Alcance y exclusiones aprobados.",
          "Matriz de responsables y suplencias.",
          "Criterios de aceptación funcionales y no funcionales.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A01", "C06"],
        examples: [
          {
            title: "Lectura sin escritura en ERP",
            scenario: "La API de escritura todavía no cuenta con aprobación corporativa.",
            application: "La primera versión consulta órdenes, pero excluye su modificación hasta aprobar la integración.",
            proof: "La exclusión y la dependencia quedan registradas en el PRD y la Spec.",
          },
          {
            title: "Inspección con evidencia mínima",
            scenario: "Los registros incompletos no permiten investigar el resultado.",
            application: "Se exige equipo, fecha, resultado y fotografía cuando corresponda antes de confirmar.",
            proof: "El caso de aceptación rechaza cualquier inspección que omita evidencia obligatoria.",
          },
          {
            title: "Ownership compartido",
            scenario: "La aplicación depende de una sola persona para decidir y mantenerla.",
            application: "Negocio asume el ownership funcional y Power Platform el técnico, con suplencias y escalamiento.",
            proof: "La matriz de responsables está aprobada junto con el alcance.",
          },
        ],
      },
    ],
  },
  "arquitectura-y-datos": {
    intro:
      "La arquitectura debe resolver tipo de app, datos, ambientes, integraciones y restricciones antes de que esas decisiones queden incorporadas al desarrollo.",
    practices: [
      {
        id: "pa-g02-p01",
        title: "El tipo de app se elige por proceso, datos y experiencia.",
        decision:
          "Elegir canvas, model-driven o una composición de ambas según el control de interfaz, el modelo de datos y la forma de trabajo.",
        why: "Elegir por preferencia técnica puede forzar una experiencia innecesaria, limitar el modelo o aumentar el costo de mantenimiento.",
        evidence: [
          "ADR con alternativas y tradeoffs.",
          "Modelo conceptual de datos y relaciones.",
          "Mapa de experiencia por tipo de usuario.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A02", "C04"],
        examples: [
          {
            title: "Canvas app para inspección móvil",
            scenario: "La tarea requiere captura guiada, fotografía y control preciso de la interfaz.",
            application: "Se elige canvas app y se documenta cómo accederá a los datos aprobados.",
            proof: "El ADR relaciona la decisión con dispositivo, experiencia y conectividad.",
          },
          {
            title: "Model-driven app para gestión de casos",
            scenario: "Los usuarios navegan entre registros relacionados, vistas, estados y actividades.",
            application: "Se elige model-driven app sobre Dataverse para aprovechar el modelo y la seguridad por roles.",
            proof: "Tablas, relaciones, vistas y roles están definidos antes de construir.",
          },
          {
            title: "Experiencia combinada",
            scenario: "El proceso usa una experiencia estándar salvo una captura especializada de escaneo.",
            application: "Se usa model-driven app con una custom page canvas para la tarea puntual.",
            proof: "El diagrama delimita qué resuelve cada experiencia y evita duplicar lógica.",
          },
        ],
      },
      {
        id: "pa-g02-p02",
        title: "Ambientes y soluciones se definen antes de construir.",
        decision: "Acordar ambientes, solución, publisher, dependencias y configuración portable desde el inicio.",
        why: "Una app creada sin estrategia de ambientes o fuera de una solución resulta difícil de probar, promover y reproducir.",
        evidence: [
          "Mapa de ambientes y propósito de cada uno.",
          "Inventario de componentes de la solución.",
          "Catálogo de connection references y environment variables.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["C04", "C06", "C07", "C09"],
        examples: [
          {
            title: "Separación Dev, UAT y Prod",
            scenario: "Makers y usuarios de prueba trabajan hoy sobre el mismo ambiente productivo.",
            application: "Se asigna un ambiente a desarrollo, otro a aceptación y otro a operación.",
            proof: "Cada ambiente tiene propósito, owner y criterio de acceso documentados.",
          },
          {
            title: "Solución y publisher aprobados",
            scenario: "Los componentes se crean en la solución predeterminada sin límite claro.",
            application: "La app nace en una solución específica con publisher y convención aprobados.",
            proof: "El inventario contiene tablas, app, flows y dependencias esperadas.",
          },
          {
            title: "Configuración por ambiente",
            scenario: "La URL de API, el buzón funcional y el sitio cambian entre ambientes.",
            application: "Los valores se externalizan mediante variables de entorno y referencias de conexión.",
            proof: "La misma solución se promueve sin editar su lógica.",
          },
        ],
      },
      {
        id: "pa-g02-p03",
        title: "Conectividad, políticas y licencias son restricciones de arquitectura.",
        decision: "Validar conectores, gateway, data policies, volumen, latencia y licenciamiento antes de comprometer el diseño.",
        why: "Una integración técnicamente posible puede no ser operable, estar bloqueada por gobierno o exigir capacidad no prevista.",
        evidence: [
          "Matriz de conectores, APIs y límites.",
          "Validación de data policy y gateway.",
          "Hipótesis de volumen, performance y licenciamiento aprobadas.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["C05", "C09", "A10"],
        examples: [
          {
            title: "SQL on-premises",
            scenario: "La aplicación necesita leer y actualizar una base dentro de la red corporativa.",
            application: "Se valida gateway, conector premium, identidad, capacidad y ownership antes de desarrollar.",
            proof: "La decisión técnica y el costo quedan aprobados en la arquitectura.",
          },
          {
            title: "Conectores incompatibles por política",
            scenario: "La solución propone combinar correo corporativo con una API externa no aprobada.",
            application: "Se revisa la data policy y se rediseña la integración antes de construir.",
            proof: "La arquitectura final sólo usa combinaciones permitidas o excepciones aprobadas.",
          },
          {
            title: "API con demanda concurrente",
            scenario: "Doscientos usuarios pueden consultar a la vez un servicio con límites conocidos.",
            application: "Se acuerdan payload, caché, paginación y umbrales de latencia con el equipo de integración.",
            proof: "El diseño incluye supuestos medibles de carga y respuesta.",
          },
        ],
      },
    ],
  },
  "ux-y-accesibilidad": {
    intro:
      "La experiencia se aprueba cuando el usuario completa la tarea con claridad, en su dispositivo y sin barreras de acceso conocidas.",
    practices: [
      {
        id: "pa-g03-p01",
        title: "La navegación sigue la tarea, no la estructura técnica.",
        decision: "Organizar pantallas, vistas y acciones según la secuencia real que el usuario necesita completar.",
        why: "Exponer tablas o componentes técnicos obliga al usuario a reconstruir el proceso y aumenta errores y tiempos de aprendizaje.",
        evidence: ["User journey de escenarios críticos.", "Prototipo navegable.", "Prueba de tarea con usuarios representativos."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A02", "A05"],
        examples: [
          {
            title: "Inspección en tres pasos",
            scenario: "La pantalla original mezcla identificación, hallazgos y cierre sin una secuencia visible.",
            application: "La experiencia se ordena en identificar equipo, registrar resultado y confirmar.",
            proof: "El usuario completa el escenario crítico sin retroceder ni pedir ayuda.",
          },
          {
            title: "Cola de casos vencidos",
            scenario: "El supervisor necesita actuar sobre prioridades, no navegar primero por tablas.",
            application: "La model-driven app abre con una vista de casos vencidos y sus acciones disponibles.",
            proof: "Prioridad, vencimiento y owner son visibles antes de entrar al detalle.",
          },
          {
            title: "Aprobación con evidencia",
            scenario: "El aprobador recibe muchos metadatos antes de entender qué debe decidir.",
            application: "La pantalla muestra primero decisión, impacto y evidencia; el resto queda en detalle.",
            proof: "El usuario identifica la acción esperada y su fundamento en la primera vista.",
          },
        ],
      },
      {
        id: "pa-g03-p02",
        title: "Cada pantalla contempla dispositivo y estado operativo.",
        decision: "Diseñar comportamiento responsive y estados de carga, vacío, éxito, advertencia y error.",
        why: "Una pantalla sólo diseñada para el estado ideal falla cuando cambia el tamaño, demora una integración o no hay datos.",
        evidence: [
          "Matriz de breakpoints o factores de forma.",
          "Especificación de estados de interfaz.",
          "Pruebas con dispositivo y conectividad objetivo.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A04", "A05"],
        examples: [
          {
            title: "Formulario responsive en tablet",
            scenario: "Los campos se cortan cuando cambia la orientación del dispositivo.",
            application: "Formulario y evidencia usan contenedores responsivos y reorganizan columnas según el ancho.",
            proof: "La tarea no presenta scroll horizontal en los tamaños aprobados.",
          },
          {
            title: "Consulta lenta",
            scenario: "El usuario vuelve a pulsar Enviar porque no sabe si la operación comenzó.",
            application: "Se muestra carga, se bloquea el reenvío y se informa el resultado.",
            proof: "Una demora controlada no genera solicitudes duplicadas.",
          },
          {
            title: "Guardado fallido",
            scenario: "Una falla de red borra lo ingresado y navega a una pantalla ambigua.",
            application: "El formulario conserva los datos, explica la falla y ofrece reintento.",
            proof: "La prueba de error mantiene la información y nunca muestra un éxito falso.",
          },
        ],
      },
      {
        id: "pa-g03-p03",
        title: "La accesibilidad se prueba como parte de la tarea.",
        decision: "Validar etiquetas, foco, teclado, lector de pantalla, contraste y zoom sobre los escenarios críticos.",
        why: "El checker ayuda a detectar problemas, pero la aprobación requiere comprobar que una persona puede completar la tarea.",
        evidence: ["Resultado de Accessibility Checker.", "Prueba de teclado y lector de pantalla.", "Registro de contraste, foco y zoom."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A03", "A05"],
        examples: [
          {
            title: "Inputs con propósito anunciado",
            scenario: "El lector de pantalla sólo anuncia nombres genéricos de controles.",
            application: "Cada input recibe un AccessibleLabel que explica dato, formato y obligatoriedad.",
            proof: "Narrator anuncia propósito y error sin depender de información visual.",
          },
          {
            title: "Operación sólo con teclado",
            scenario: "El foco salta entre controles en un orden que no coincide con la tarea.",
            application: "Se corrige la estructura y el orden de tabulación de los elementos interactivos.",
            proof: "El flujo completo funciona sin mouse y conserva foco visible.",
          },
          {
            title: "Contraste y zoom",
            scenario: "Mensajes y botones pierden legibilidad al ampliar la interfaz.",
            application: "Se ajustan colores, tamaños y distribución para mantener lectura y acción.",
            proof: "La app sigue siendo utilizable con zoom y no conserva errores críticos de accesibilidad.",
          },
        ],
      },
    ],
  },
  "construccion-y-power-fx": {
    intro:
      "La lógica low-code se trata como software mantenible: componentes reutilizables, Power Fx legible, errores controlados y consultas que devuelven resultados completos.",
    practices: [
      {
        id: "pa-g04-p01",
        title: "La estructura reusable reduce deuda y variación.",
        decision: "Centralizar patrones visuales y funcionales que deban mantenerse de forma consistente.",
        why: "Copiar controles y fórmulas multiplica defectos, diferencias visuales y esfuerzo de cambio.",
        evidence: ["Inventario de componentes reutilizados.", "Tema y constantes centralizados.", "Revisión de estructura y dependencias."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A05", "A06"],
        examples: [
          {
            title: "Componentes compartidos",
            scenario: "Cada pantalla mantiene su propio encabezado, mensaje de estado y confirmación.",
            application: "Los patrones se consumen desde una component library aprobada.",
            proof: "Una actualización publicada se refleja en todas las instancias dependientes.",
          },
          {
            title: "Tema centralizado",
            scenario: "Colores y tamaños están repetidos como valores literales en decenas de controles.",
            application: "Los valores estables se definen en fórmulas nombradas o en el mecanismo de tema aprobado.",
            proof: "Un cambio central actualiza la aplicación sin búsqueda manual de valores.",
          },
          {
            title: "Estructura semántica",
            scenario: "Los controles se agrupan sólo de forma visual y no expresan relación lógica.",
            application: "Los formularios usan contenedores para organizar contenido relacionado.",
            proof: "La estructura se adapta al ancho y puede ser interpretada por tecnologías de asistencia.",
          },
        ],
      },
      {
        id: "pa-g04-p02",
        title: "La lógica crítica debe ser legible y controlar el error.",
        decision: "Escribir fórmulas pequeñas, nombrar cálculos y manejar localmente los errores que cambian el resultado de negocio.",
        why: "Las fórmulas opacas y los errores tratados como valores vacíos producen fallas difíciles de detectar y mantener.",
        evidence: ["Revisión por pares de fórmulas críticas.", "Casos de error y mensajes definidos.", "Trazabilidad de reglas y cambios."],
        appliesTo: ["Canvas apps"],
        sourceIds: ["A08", "A09"],
        examples: [
          {
            title: "Guardado con IfError",
            scenario: "Un Patch fallido deja al usuario sin saber si el registro se creó.",
            application: "IfError conserva el formulario, informa la falla y evita navegar a éxito.",
            proof: "La prueba de conexión caída nunca confirma una operación inexistente.",
          },
          {
            title: "Cálculo expresado con With",
            scenario: "Tarifa, impuesto y total dependen de variables globales dispersas.",
            application: "With asigna nombres locales a cada parte del cálculo y limita su alcance.",
            proof: "La regla puede revisarse en una sola fórmula sin seguir mutaciones externas.",
          },
          {
            title: "Reporte global de errores",
            scenario: "Una falla no manejada expone texto técnico o desaparece sin registro.",
            application: "App.OnError registra un identificador técnico y presenta un mensaje neutro.",
            proof: "Soporte puede correlacionar el incidente sin exponer datos sensibles al usuario.",
          },
        ],
      },
      {
        id: "pa-g04-p03",
        title: "Delegar y reducir datos evita resultados incompletos.",
        decision: "Ejecutar filtros en el origen, recuperar sólo datos necesarios y reducir trabajo bloqueante al inicio.",
        why: "Una fórmula no delegable puede mostrar un subconjunto como si fuera completo y degradar la experiencia a medida que crecen los datos.",
        evidence: ["Revisión de advertencias de delegación.", "Medición de payload y llamadas.", "Prueba con volumen representativo."],
        appliesTo: ["Canvas apps"],
        sourceIds: ["A07", "A08"],
        examples: [
          {
            title: "Filtro delegable por planta",
            scenario: "La galería debe consultar una tabla con cientos de miles de inspecciones.",
            application: "Se usa una expresión delegable equivalente a Filter por PlantaId sobre el origen aprobado.",
            proof: "La búsqueda encuentra registros fuera de los primeros dos mil y no muestra advertencias.",
          },
          {
            title: "Payload limitado",
            scenario: "La lista inicial recupera todas las columnas, incluidos adjuntos que no muestra.",
            application: "La consulta obtiene únicamente identificador, estado y descripción necesarios.",
            proof: "Live Monitor confirma menos datos transferidos y menor tiempo de carga.",
          },
          {
            title: "Inicio no bloqueante",
            scenario: "App.OnStart carga datos y navega antes de mostrar la primera pantalla.",
            application: "App.StartScreen y fórmulas nombradas reemplazan inicialización que puede resolverse de forma declarativa.",
            proof: "La primera pantalla resulta interactiva antes y conserva el comportamiento esperado.",
          },
        ],
      },
    ],
  },
  "integraciones-y-automatizacion": {
    intro:
      "La integración debe ser portable y observable: cada lógica se ubica en el componente correcto, la configuración cambia por ambiente y una repetición no genera resultados ambiguos.",
    practices: [
      {
        id: "pa-g05-p01",
        title: "Cada lógica se ubica donde responde mejor.",
        decision:
          "Resolver en Power Fx la interacción inmediata y usar Power Automate o una API cuando la operación deba continuar, orquestar o desacoplar sistemas.",
        why: "Enviar toda la lógica a un flow agrega latencia; concentrarla en la app dificulta operaciones largas, asíncronas o multisistema.",
        evidence: [
          "Mapa de responsabilidades por componente.",
          "Contrato de entradas y salidas.",
          "Justificación de latencia y continuidad.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A10"],
        examples: [
          {
            title: "Validación inmediata",
            scenario: "El usuario necesita saber al instante si los campos cumplen una regla simple.",
            application: "La validación queda en Power Fx y no realiza una ida y vuelta innecesaria a un flow.",
            proof: "El feedback aparece dentro del umbral de interacción definido.",
          },
          {
            title: "Aprobación multisistema",
            scenario: "La operación debe continuar después de que el usuario cierre la aplicación.",
            application: "Power Automate orquesta aprobación, notificación y actualización de sistemas.",
            proof: "La app recibe un identificador y el proceso conserva estado fuera de la sesión.",
          },
          {
            title: "API aprobada",
            scenario: "Un sistema externo expone una API estable pero no un conector estándar.",
            application: "La integración se encapsula en un custom connector aprobado en lugar de reproducir navegación de pantalla.",
            proof: "El contrato, la autenticación y los errores quedan documentados y probados.",
          },
        ],
      },
      {
        id: "pa-g05-p02",
        title: "La configuración debe cambiar sin alterar la solución.",
        decision: "Separar lógica, conexiones y valores específicos de cada ambiente mediante mecanismos de solución.",
        why: "Editar manualmente una app después del despliegue rompe la equivalencia con UAT y elimina trazabilidad.",
        evidence: ["Inventario de connection references.", "Catálogo de environment variables.", "Configuración y owners por ambiente."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["C06", "C09"],
        examples: [
          {
            title: "Identidades separadas",
            scenario: "Desarrollo y producción deben usar cuentas de conexión diferentes.",
            application: "La referencia de conexión se resuelve con la conexión aprobada en cada ambiente.",
            proof: "La aplicación promovida no conserva credenciales de desarrollo.",
          },
          {
            title: "Endpoint por ambiente",
            scenario: "La API tiene una URL para Dev y otra para Prod.",
            application: "ApiBaseUrl se define como variable de entorno consumida por la solución.",
            proof: "El despliegue cambia el valor sin modificar fórmulas ni componentes.",
          },
          {
            title: "Gateway productivo",
            scenario: "La fuente on-premises usa infraestructura distinta en UAT y producción.",
            application: "La conexión productiva al gateway se asigna mediante configuración controlada.",
            proof: "El checklist confirma gateway, identidad y conectividad antes de publicar.",
          },
        ],
      },
      {
        id: "pa-g05-p03",
        title: "Una acción repetida debe producir un resultado conocido.",
        decision: "Diseñar correlación, estado de interfaz e idempotencia para operaciones que pueden reenviarse.",
        why: "Un doble toque, un timeout o un reintento puede duplicar transacciones si la aplicación no distingue solicitud de resultado.",
        evidence: [
          "Correlation ID trazable de punta a punta.",
          "Estados pendientes, éxito y error definidos.",
          "Pruebas de repetición e idempotencia.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A09", "A10", "C03"],
        examples: [
          {
            title: "Solicitud correlacionada",
            scenario: "La app invoca un flow y necesita conocer qué ejecución corresponde al usuario.",
            application: "La app genera un correlation ID y el flow devuelve el identificador de solicitud.",
            proof: "Soporte puede seguir la operación desde la pantalla hasta el sistema destino.",
          },
          {
            title: "Envío pendiente",
            scenario: "El usuario vuelve a pulsar Enviar mientras la primera solicitud continúa.",
            application: "El botón se deshabilita durante la operación y muestra éxito o reintento.",
            proof: "La prueba de latencia genera una sola solicitud.",
          },
          {
            title: "Clave de negocio idempotente",
            scenario: "La red corta la respuesta y la app reenvía la misma alta.",
            application: "La integración busca la clave de negocio y recupera el registro existente antes de crear.",
            proof: "Dos envíos equivalentes producen una sola transacción.",
          },
        ],
      },
    ],
  },
  "seguridad-y-gobierno": {
    intro:
      "La confianza se aprueba cuando app, datos, conexiones y acciones aplican mínimo privilegio y mantienen ownership, auditoría y continuidad.",
    practices: [
      {
        id: "pa-g06-p01",
        title: "Compartir la app no reemplaza autorizar los datos.",
        decision: "Diseñar acceso a la aplicación y a cada fuente con roles y grupos que otorguen únicamente las acciones necesarias.",
        why: "Una persona puede abrir la app y aun así carecer de permisos correctos, o recibir acceso excesivo sobre los datos subyacentes.",
        evidence: [
          "Matriz de roles y privilegios.",
          "Pruebas positivas y negativas por perfil.",
          "Registro de grupos y recursos compartidos.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A16", "C10"],
        examples: [
          {
            title: "Canvas app con grupo de Entra",
            scenario: "La app usa tablas Dataverse y debe habilitarse a un equipo operativo.",
            application: "Se comparte con el grupo y se asigna el rol Dataverse mínimo necesario.",
            proof: "Los miembros acceden a sus datos y no pueden ejecutar operaciones no autorizadas.",
          },
          {
            title: "Model-driven app por rol",
            scenario: "Supervisores y operadores necesitan acciones diferentes sobre las mismas tablas.",
            application: "La app se asocia a roles con privilegios distintos de lectura y actualización.",
            proof: "Cada usuario de prueba sólo ve y modifica lo que corresponde a su función.",
          },
          {
            title: "Colaborador sin administración productiva",
            scenario: "Un maker necesita mantener componentes, pero no administrar todo el ambiente.",
            application: "Se otorgan permisos de colaboración limitados sin elevarlo a administrador de producción.",
            proof: "Puede realizar su tarea y no acceder a funciones administrativas ajenas al alcance.",
          },
        ],
      },
      {
        id: "pa-g06-p02",
        title: "Los datos y conectores se protegen por diseño.",
        decision: "Aplicar data policies, clasificación, protección de secretos y controles específicos sobre acciones sensibles.",
        why: "Los conectores amplían el alcance de los datos; sin guardrails pueden combinar información corporativa con destinos no autorizados.",
        evidence: [
          "Validación de data policy.",
          "Clasificación de datos y conectores.",
          "Revisión de secretos y acciones de alto impacto.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["C05", "C10"],
        examples: [
          {
            title: "Separación de conectores",
            scenario: "Una aplicación corporativa podría enviar datos a un servicio personal.",
            application: "Los conectores corporativos y personales quedan en grupos incompatibles de la data policy.",
            proof: "La solución no puede guardar una combinación bloqueada.",
          },
          {
            title: "Sin secretos en Power Fx",
            scenario: "Una integración requiere una credencial que algunos makers intentan guardar como texto.",
            application:
              "La credencial se mantiene en el mecanismo corporativo aprobado y nunca en fórmulas, variables visibles o archivos.",
            proof: "La revisión de solución no encuentra secretos embebidos.",
          },
          {
            title: "Exportación controlada",
            scenario: "Una función permite descargar información clasificada.",
            application: "La acción se restringe por rol y registra quién exporta, cuándo y qué alcance.",
            proof: "Un usuario no autorizado no ve ni ejecuta la acción y la auditoría conserva evidencia.",
          },
        ],
      },
      {
        id: "pa-g06-p03",
        title: "Ownership y auditoría sostienen la continuidad.",
        decision: "Asignar responsables, suplencias, grupos de acceso y una cadencia de revisión antes de publicar.",
        why: "Una app segura hoy puede quedar expuesta o inoperable cuando cambian personas, conexiones, licencias o políticas.",
        evidence: [
          "Owners funcionales y técnicos con suplencias.",
          "Plan de auditoría y recertificación.",
          "Excepciones con aprobación y vencimiento.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A16", "C04", "C10"],
        examples: [
          {
            title: "Suplencias definidas",
            scenario: "La aplicación depende de un único owner funcional y uno técnico.",
            application: "Cada rol identifica una persona o grupo suplente y el mecanismo de transferencia.",
            proof: "La ausencia del owner no impide aprobar, operar ni mantener la solución.",
          },
          {
            title: "Acceso administrado por grupos",
            scenario: "Los usuarios se agregan uno por uno y nadie conoce la lista vigente.",
            application: "La membresía se gestiona mediante grupos aprobados con owner de negocio.",
            proof: "Altas y bajas se reflejan sin editar individualmente la app.",
          },
          {
            title: "Recertificación trimestral",
            scenario: "Roles, conexiones y excepciones permanecen sin revisión después de publicar.",
            application: "Gobierno revisa trimestralmente owners, accesos, conexiones y excepciones.",
            proof: "Cada revisión deja fecha, aprobador, hallazgos y acciones de cierre.",
          },
        ],
      },
    ],
  },
  "pruebas-performance-y-uat": {
    intro:
      "La aprobación para publicar requiere evidencia sobre función, permisos, accesibilidad y performance en escenarios y volúmenes representativos.",
    practices: [
      {
        id: "pa-g07-p01",
        title: "La aprobación cubre riesgo, no sólo happy path.",
        decision: "Priorizar pruebas sobre reglas críticas, permisos, estados alternativos, concurrencia y recuperación.",
        why: "Una demostración exitosa del maker no prueba cómo se comporta la aplicación ante errores, usuarios distintos o datos reales.",
        evidence: ["Plan de pruebas basado en riesgo.", "Resultados y defectos por severidad.", "UAT firmada por negocio."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A11", "C11"],
        examples: [
          {
            title: "Ciclo completo de inspección",
            scenario: "La app fue probada sólo al crear un registro nuevo.",
            application: "Se prueban creación, edición, cancelación y reapertura contra los estados de la Spec.",
            proof: "Cada transición produce estado, permisos y auditoría esperados.",
          },
          {
            title: "Acceso negativo",
            scenario: "Un usuario sin rol intenta consultar o modificar un registro ajeno.",
            application: "La matriz incluye pruebas explícitas con identidades de mínimo privilegio.",
            proof: "El acceso se rechaza sin revelar información protegida.",
          },
          {
            title: "Actualización concurrente",
            scenario: "Dos supervisores modifican el mismo caso casi al mismo tiempo.",
            application: "Se prueba la regla de concurrencia y el feedback ante una versión desactualizada.",
            proof: "Ninguna modificación se pierde de forma silenciosa.",
          },
        ],
      },
      {
        id: "pa-g07-p02",
        title: "Performance se mide con datos y usuarios representativos.",
        decision: "Validar delegación, carga, llamadas y tiempos de interacción con volumen y dispositivo cercanos a producción.",
        why: "Una app rápida con pocos datos puede devolver resultados parciales o degradarse cuando crece la demanda.",
        evidence: ["Dataset y perfil de carga de prueba.", "Sesiones de Live Monitor.", "Umbrales de apertura e interacción aprobados."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A07", "A12", "A13"],
        examples: [
          {
            title: "Búsqueda sobre diez mil registros",
            scenario: "La fórmula funciona con datos de prueba, pero puede dejar registros fuera del límite local.",
            application: "Se ejecuta la búsqueda sobre volumen representativo y se revisa delegación.",
            proof: "Devuelve resultados completos sin advertencias de delegación.",
          },
          {
            title: "Diagnóstico de solicitudes 429",
            scenario: "La app se vuelve lenta de forma intermitente y la causa no es visible.",
            application: "Live Monitor identifica la fórmula que repite llamadas y produce throttling.",
            proof: "La corrección reduce llamadas y elimina el 429 en la prueba equivalente.",
          },
          {
            title: "Tiempo hasta interacción",
            scenario: "La pantalla aparece, pero permanece bloqueada mientras termina la carga.",
            application: "Se mide apertura y tiempo hasta interacción en el dispositivo objetivo.",
            proof: "Ambos valores cumplen los umbrales no funcionales acordados.",
          },
        ],
      },
      {
        id: "pa-g07-p03",
        title: "Accesibilidad y regresión forman parte de la UAT.",
        decision: "Combinar pruebas automatizadas estables con validación manual de accesibilidad, dispositivo y navegador.",
        why: "La automatización acelera la regresión, pero no reemplaza escenarios que requieren percepción, tecnología de asistencia o contexto real.",
        evidence: [
          "Suite de regresión y resultados.",
          "Prueba de teclado y lector de pantalla.",
          "Matriz de dispositivos y navegadores aprobada.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A03", "A11"],
        examples: [
          {
            title: "Alta automatizada con Test Studio",
            scenario: "El escenario estable de alta se repite en cada release.",
            application: "Test Studio ejecuta pasos pequeños y verifica el resultado esperado.",
            proof: "La suite detecta una regresión antes de promover la solución.",
          },
          {
            title: "Tarea con tecnología de asistencia",
            scenario: "El checker no demuestra que la navegación completa sea comprensible.",
            application: "Un usuario realiza el flujo crítico con teclado y lector de pantalla.",
            proof: "Completa la tarea, entiende errores y mantiene foco visible.",
          },
          {
            title: "Matriz de dispositivos",
            scenario: "La app fue validada únicamente en el navegador del maker.",
            application: "Se prueba la versión en teléfono, tablet y navegador corporativo definidos.",
            proof: "Todos los escenarios críticos quedan aprobados antes de la publicación.",
          },
        ],
      },
    ],
  },
  "alm-despliegue-y-publicacion": {
    intro:
      "La publicación es confiable cuando producción recibe el artifact aprobado, con configuración reproducible, smoke test y una recuperación preparada.",
    practices: [
      {
        id: "pa-g08-p01",
        title: "La misma solución aprobada llega a producción.",
        decision:
          "Mantener desarrollo en solución unmanaged y promover artifacts managed a ambientes downstream según el estándar aprobado.",
        why: "Corregir o reconstruir manualmente en producción rompe la equivalencia con UAT y genera capas difíciles de sostener.",
        evidence: [
          "Artifact versionado de la solución.",
          "Resultado de prevalidación y dependencias.",
          "Ausencia de cambios manuales no documentados.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["C06", "C11"],
        examples: [
          {
            title: "Unmanaged en desarrollo, managed en producción",
            scenario: "El equipo necesita editar en Dev y proteger el artifact liberado en Prod.",
            application: "La solución se mantiene unmanaged en Dev y se exporta managed para producción.",
            proof: "La versión instalada coincide con el artifact aprobado en UAT.",
          },
          {
            title: "Sin correcciones en la solución predeterminada",
            scenario: "Aparece un defecto después del release y se propone editar directamente en Prod.",
            application: "La corrección vuelve a Dev, se prueba y se promueve como nueva versión.",
            proof: "Producción no conserva una capa activa sin trazabilidad.",
          },
          {
            title: "Dependencia detectada antes de importar",
            scenario: "La app depende de una tabla o flow ausente en el ambiente destino.",
            application: "La prevalidación del despliegue verifica componentes y dependencias.",
            proof: "La ejecución se detiene antes de alterar producción y señala el componente faltante.",
          },
        ],
      },
      {
        id: "pa-g08-p02",
        title: "Pipeline y configuración eliminan ajustes manuales.",
        decision: "Promover secuencialmente y resolver conexiones y variables como parte del proceso de despliegue.",
        why: "Una configuración manual posterior puede conectar la app al sistema equivocado y no deja una ejecución reproducible.",
        evidence: [
          "Registro del pipeline y aprobaciones.",
          "Configuración validada del ambiente destino.",
          "Vínculo entre artifact, versión y fuente aprobada.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["C06", "C08", "C09"],
        examples: [
          {
            title: "Promoción Dev, UAT y Prod",
            scenario: "La solución puede saltar ambientes o publicarse sin aprobación formal.",
            application: "El pipeline exige secuencia y registra la aprobación antes de producción.",
            proof: "El run conserva origen, destino, versión, hora y aprobador.",
          },
          {
            title: "Referencias resueltas en destino",
            scenario: "La solución incluye connections y valores que cambian por ambiente.",
            application: "Connection references y environment variables se proporcionan y validan antes de desplegar.",
            proof: "La app productiva usa únicamente fuentes e identidades productivas aprobadas.",
          },
          {
            title: "Artifact vinculado a control de versiones",
            scenario: "No puede determinarse qué cambio generó la solución liberada.",
            application: "El artifact y su versión se asocian al commit o registro fuente aprobado.",
            proof: "La release permite reconstruir alcance, autor y evidencia del cambio.",
          },
        ],
      },
      {
        id: "pa-g08-p03",
        title: "El release termina con prueba y recuperación preparada.",
        decision:
          "Ejecutar smoke test de mínimo privilegio, conservar evidencia y disponer de un procedimiento probado de redeploy o rollback.",
        why: "Un despliegue exitoso no demuestra que permisos, conexiones y experiencia funcionen para el usuario final.",
        evidence: ["Smoke test productivo.", "Release notes y comunicación.", "Artifact y procedimiento de recuperación."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["C08", "C11"],
        examples: [
          {
            title: "Prueba con mínimo privilegio",
            scenario: "El deploy fue ejecutado por un administrador con acceso superior al usuario real.",
            application: "Un usuario de perfil operativo abre la app y completa la transacción crítica.",
            proof: "Acceso, datos, integración y resultado funcionan con permisos reales.",
          },
          {
            title: "Versión recuperable",
            scenario: "La nueva versión introduce un defecto crítico después de publicar.",
            application: "La versión previa y el procedimiento aprobado quedan disponibles para redeploy.",
            proof: "El equipo puede restaurar servicio dentro del objetivo de recuperación.",
          },
          {
            title: "Evidencia única de release",
            scenario: "Aprobaciones, pruebas y comunicación quedan dispersas en varios canales.",
            application: "Release notes, smoke test, aprobador y hora se registran juntos.",
            proof: "Operación puede auditar la salida sin reconstruir información manualmente.",
          },
        ],
      },
    ],
  },
  "operacion-adopcion-y-mejora": {
    intro:
      "La aplicación se sostiene como producto cuando salud, adopción y valor se revisan con responsables, soporte y una cadencia explícita de mejora o retiro.",
    practices: [
      {
        id: "pa-g09-p01",
        title: "Salud, uso y valor se observan juntos.",
        decision: "Definir indicadores técnicos, de adopción y de resultado de negocio con owner y frecuencia de revisión.",
        why: "Una app disponible puede ser lenta, poco utilizada o no modificar el proceso que justificó su inversión.",
        evidence: ["Dashboard o registro de salud.", "Métricas de usuarios y sesiones.", "KPI de negocio comparado con el baseline."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A14", "A15"],
        examples: [
          {
            title: "Salud de apertura",
            scenario: "Los usuarios reportan demoras, pero no existe un indicador común.",
            application: "Operación sigue app-open success rate y tiempo hasta interacción cuando la métrica aplica.",
            proof: "Cada desvío supera un umbral acordado y genera una acción trazable.",
          },
          {
            title: "Adopción por población objetivo",
            scenario: "La cantidad total de aperturas no muestra quién incorporó realmente la app.",
            application: "Producto compara usuarios activos y sesiones contra la población y los roles esperados.",
            proof: "La revisión identifica brechas concretas de adopción por grupo.",
          },
          {
            title: "Resultado del proceso",
            scenario: "La app tiene uso, pero no se sabe si aceleró la gestión.",
            application: "Negocio mide el ciclo de inspección y lo compara con el baseline del PRD.",
            proof: "La mejora se expresa en tiempo y calidad, no sólo en aperturas.",
          },
        ],
      },
      {
        id: "pa-g09-p02",
        title: "Cada incidente tiene detección, owner y respuesta.",
        decision: "Mantener un runbook con señales, responsables, diagnóstico, escalamiento y continuidad para fallas previsibles.",
        why: "Sin un proceso operativo, los errores se descubren por el usuario y dependen de la memoria de quien construyó la app.",
        evidence: ["Runbook y matriz de soporte.", "SLA y registro de incidentes.", "Owners y conexiones revisados."],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A12", "C03"],
        examples: [
          {
            title: "Investigación de errores 429",
            scenario: "La app se degrada de forma intermitente por exceso de solicitudes.",
            application: "El runbook indica cómo abrir Live Monitor, identificar la llamada y reducir su frecuencia.",
            proof: "Soporte diagnostica y escala con una sesión y evidencia reproducible.",
          },
          {
            title: "Salida de un owner",
            scenario: "La persona propietaria cambia de función y conserva conexiones críticas.",
            application: "El proceso transfiere ownership y revisa conexiones, grupos y licencias.",
            proof: "La aplicación continúa operativa y cada recurso tiene responsable vigente.",
          },
          {
            title: "Cambio de conector o política",
            scenario: "Una modificación del conector o de la data policy puede afectar la aplicación.",
            application: "Gobierno notifica el cambio y operación ejecuta una revisión de impacto antes de la fecha efectiva.",
            proof: "La app se adapta o cuenta con una excepción aprobada antes de afectar usuarios.",
          },
        ],
      },
      {
        id: "pa-g09-p03",
        title: "La evolución se decide con evidencia y también contempla retiro.",
        decision: "Priorizar mejoras por impacto observado y retirar versiones o aplicaciones que ya no justifican su operación.",
        why: "Un backlog sin evidencia acumula pedidos, mientras que una app obsoleta mantiene costo, riesgo y confusión.",
        evidence: [
          "Backlog priorizado por impacto.",
          "Revisión periódica de performance y adopción.",
          "Plan de retiro, comunicación y respaldo.",
        ],
        appliesTo: ["Canvas apps", "Model-driven apps"],
        sourceIds: ["A15", "C03"],
        examples: [
          {
            title: "Incidente convertido en mejora",
            scenario: "El mismo error aparece en varios tickets sin una corrección estructural.",
            application: "Los incidentes se agrupan por causa, frecuencia e impacto y originan un ítem priorizado.",
            proof: "El backlog vincula la mejora con evidencia operativa y criterio de cierre.",
          },
          {
            title: "Revisión mensual de producto",
            scenario: "Las mejoras se aprueban por urgencia percibida sin revisar datos.",
            application: "Producto compara performance, adopción, valor y deuda antes de decidir el siguiente cambio.",
            proof: "Cada decisión deja prioridad, fundamento, owner y fecha objetivo.",
          },
          {
            title: "Retiro de una versión sin uso",
            scenario: "Una app anterior permanece compartida y genera registros incompatibles.",
            application: "Se comunica el reemplazo, se bloquea nueva operación y se retira con respaldo y owner.",
            proof: "No quedan usuarios activos, conexiones huérfanas ni rutas de acceso obsoletas.",
          },
        ],
      },
    ],
  },
};
