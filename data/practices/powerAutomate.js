export const powerAutomatePracticeLibrary = {
  "prd-y-spec": {
    intro:
      "La automatización empieza con un proceso entendido: resultado, volumen, SLA, actores, excepciones y fallback deben quedar acordados antes de elegir el flow.",
    practices: [
      {
        id: "at-g01-p01",
        title: "La automatización empieza con baseline y resultado.",
        decision: "Definir qué desempeño debe cambiar, cuál es el punto de partida y qué meta demostrará el valor de automatizar.",
        why: "Sin baseline, el equipo puede medir ejecuciones y aun así no saber si redujo tiempo, errores o trabajo manual.",
        evidence: [
          "Baseline de tiempo, volumen y calidad.",
          "Meta cuantificada y horizonte de evaluación.",
          "Criterios de aceptación vinculados al resultado.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["T01", "T05"],
        examples: [
          {
            title: "Carga de facturas",
            scenario: "Cada factura requiere ocho minutos de carga manual.",
            application: "La automatización captura, valida y registra la información sin eliminar los controles acordados.",
            proof: "Duración media menor a dos minutos con la misma calidad de validación.",
          },
          {
            title: "Aprobación operativa",
            scenario: "Una solicitud demora 48 horas por esperas y recordatorios manuales.",
            application: "El flow deriva, recuerda y escala según el plazo funcional.",
            proof: "Al menos el 95 % de los casos se resuelve dentro de 8 horas.",
          },
          {
            title: "Conciliación nocturna",
            scenario: "El proceso actual presenta un 6 % de reproceso por diferencias de carga.",
            application: "El flow compara, clasifica y deriva únicamente las diferencias que requieren revisión.",
            proof: "El reproceso baja a menos del 1 % durante el período de control.",
          },
        ],
      },
      {
        id: "at-g01-p02",
        title: "Entradas, salidas y excepciones forman el contrato funcional.",
        decision: "Especificar qué recibe el proceso, qué produce, qué reglas aplica y cómo trata cada excepción conocida.",
        why: "Una secuencia de acciones no define por sí sola el comportamiento esperado ante datos incompletos, reglas incumplidas o dependencias caídas.",
        evidence: [
          "Contrato de entradas y salidas.",
          "Catálogo de reglas y excepciones.",
          "Mapa de actores, sistemas y responsabilidades.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["T01", "T02"],
        examples: [
          {
            title: "Contrato de factura",
            scenario: "El proceso recibe archivos con estructuras y datos variables.",
            application: "La entrada exige proveedor, importe, moneda y documento; la salida devuelve ID y estado.",
            proof: "Cada campo tiene formato, obligatoriedad y respuesta esperada documentados.",
          },
          {
            title: "Catálogo de excepciones",
            scenario: "Proveedor inexistente, monto inválido y sistema indisponible terminan en el mismo error genérico.",
            application: "La Spec distingue cada excepción y define si se corrige, reintenta o deriva.",
            proof: "Cada caso produce un estado y una acción de recuperación verificables.",
          },
          {
            title: "Responsabilidad por etapa",
            scenario: "Cuando el proceso se detiene, no está claro quién debe actuar.",
            application: "Cada paso identifica responsable humano, sistema ejecutor y evidencia producida.",
            proof: "El mapa permite asignar owner y escalamiento sin depender del maker.",
          },
        ],
      },
      {
        id: "at-g01-p03",
        title: "Criticidad y fallback se acuerdan antes de automatizar.",
        decision: "Clasificar el impacto de falla y definir una alternativa manual o una detención segura para cada flujo crítico.",
        why: "Una automatización puede acelerar un error o detener una operación si no se determina de antemano qué hacer cuando una dependencia falla.",
        evidence: ["Clasificación de criticidad.", "Fallback o detención segura documentados.", "Owner y SLA de recuperación."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C02", "T01"],
        examples: [
          {
            title: "ERP no disponible",
            scenario: "El sistema de destino no responde durante la ejecución de un pago.",
            application: "La transacción queda en una cola manual y nunca se confirma como completada.",
            proof: "Operación puede continuar el caso sin duplicar ni perder el pago.",
          },
          {
            title: "Notificación de baja criticidad",
            scenario: "Un aviso informativo no se envía por una interrupción temporal.",
            application: "El flow reintenta en la siguiente ventana sin activar un incidente crítico.",
            proof: "El retraso queda registrado y no afecta una decisión operativa.",
          },
          {
            title: "Alta regulada incompleta",
            scenario: "Falta una evidencia obligatoria para completar un alta sensible.",
            application: "El proceso se detiene y deriva a una persona autorizada en lugar de completar automáticamente.",
            proof: "Ningún registro regulado se activa sin la evidencia requerida.",
          },
        ],
      },
    ],
  },
  "evaluacion-y-diseno-del-proceso": {
    intro:
      "La automatización sólo avanza cuando el proceso fue simplificado, el método elegido es viable y la intervención humana conserva las decisiones que no deben delegarse.",
    practices: [
      {
        id: "at-g02-p01",
        title: "Primero se simplifica; después se automatiza.",
        decision: "Eliminar pasos sin valor, estandarizar reglas y resolver problemas de datos antes de diseñar el flow.",
        why: "Automatizar desperdicios o reglas ambiguas aumenta velocidad, pero también volumen de errores y costo de mantenimiento.",
        evidence: ["Proceso actual y proceso futuro.", "Pasos eliminados o estandarizados.", "Reglas y datos mínimos acordados."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["T03"],
        examples: [
          {
            title: "Aprobación duplicada",
            scenario: "Dos responsables revisan el mismo criterio sin cambiar ninguna decisión.",
            application: "Se elimina la segunda aprobación antes de configurar el proceso futuro.",
            proof: "El nuevo diseño conserva control y reduce una espera completa.",
          },
          {
            title: "Motivos escritos libremente",
            scenario: "Cada operador describe excepciones con textos distintos.",
            application: "Negocio acuerda códigos y criterios antes de automatizar derivaciones.",
            proof: "La misma situación produce siempre la misma clasificación y tratamiento.",
          },
          {
            title: "Maestro inconsistente",
            scenario: "La consulta de proveedores falla por duplicados y claves incompletas.",
            application: "El maestro se corrige y se define ownership de calidad antes de conectarlo al flow.",
            proof: "Los casos de prueba encuentran una única entidad válida por clave de negocio.",
          },
        ],
      },
      {
        id: "at-g02-p02",
        title: "Se elige el método menos frágil que cubre el proceso.",
        decision:
          "Priorizar conectores y APIs estables, y reservar la automatización de interfaz para sistemas sin otra integración viable.",
        why: "Una solución basada en pantalla cambia con mayor facilidad y exige más control de máquina, sesión y selectores.",
        evidence: ["Evaluación de conectores y APIs.", "ADR del método de automatización.", "Dependencias y límites identificados."],
        appliesTo: ["Cloud flows", "Desktop flows"],
        sourceIds: ["T04"],
        examples: [
          {
            title: "Evento de Dataverse",
            scenario: "La plataforma expone un trigger y acciones soportadas para el caso.",
            application: "Se usa el conector Dataverse y un cloud flow orientado al evento.",
            proof: "La integración no depende de una interfaz visual ni de una máquina dedicada.",
          },
          {
            title: "API sin conector estándar",
            scenario: "El sistema tiene una API aprobada, pero no existe un conector listo para usar.",
            application: "Se crea o reutiliza un custom connector gobernado en lugar de automatizar la pantalla.",
            proof: "Autenticación, contrato y errores se prueban directamente contra la API.",
          },
          {
            title: "Aplicación legacy sin API",
            scenario: "El sistema sólo permite operar mediante una aplicación de escritorio.",
            application: "Se utiliza desktop flow y se documentan interfaz, resolución, sesión y selectores críticos.",
            proof: "La decisión explicita la mayor fragilidad y sus controles compensatorios.",
          },
        ],
      },
      {
        id: "at-g02-p03",
        title: "Intervención humana, beneficio y riesgo determinan el go/no-go.",
        decision: "Definir qué decisiones siguen siendo humanas, el modo attended o unattended y si el beneficio justifica costo y riesgo.",
        why: "No todo paso determinista debe automatizarse ni toda automatización debe operar sin supervisión.",
        evidence: ["Matriz de human-in-the-loop.", "Evaluación attended o unattended.", "Caso de negocio y decisión go/no-go."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C02", "T05"],
        examples: [
          {
            title: "Umbral de aprobación",
            scenario: "Una transacción de alto importe no puede ejecutarse sólo por una regla automática.",
            application: "Los casos superiores al umbral requieren aprobación humana antes de continuar.",
            proof: "La prueba demuestra que ningún importe crítico evita la aprobación.",
          },
          {
            title: "Attended frente a unattended",
            scenario: "Una tarea sensible necesita supervisión, mientras una carga nocturna es estable y repetitiva.",
            application: "La primera se diseña attended y la segunda se evalúa como unattended con fallback.",
            proof: "Cada modo cuenta con justificación, licencia y control operativo.",
          },
          {
            title: "Automatización sin caso económico",
            scenario: "El volumen es bajo y la solución exige conectores y capacidad de alto costo.",
            application: "El equipo compara ahorro, costo, riesgo y alternativas antes de aprobar.",
            proof: "La decisión no-go queda documentada y evita una inversión sin retorno esperado.",
          },
        ],
      },
    ],
  },
  "trigger-datos-y-conectores": {
    intro:
      "La arquitectura debe disparar sólo los eventos correctos y ejecutar con contratos, identidades, conexiones y límites reproducibles.",
    practices: [
      {
        id: "at-g03-p01",
        title: "El trigger y el contrato evitan ejecuciones innecesarias.",
        decision: "Elegir el evento, filtrar en el trigger y validar esquema, versión, zona horaria y datos mínimos de entrada.",
        why: "Un trigger amplio consume capacidad, amplifica duplicados y ejecuta lógica que pudo descartarse antes de iniciar.",
        evidence: ["Definición y condiciones del trigger.", "Contrato de datos versionado.", "Pruebas de eventos válidos e ignorados."],
        appliesTo: ["Cloud flows", "Business process flows"],
        sourceIds: ["T02", "T04", "T06"],
        examples: [
          {
            title: "Cambio de estado en Dataverse",
            scenario: "El flow se inicia ante cualquier modificación de una fila.",
            application: "El trigger observa las columnas relevantes y exige la condición funcional sobre Estado.",
            proof: "Cambios ajenos al proceso no crean nuevas ejecuciones.",
          },
          {
            title: "Conciliación diaria",
            scenario: "Una recurrencia puede procesar fechas distintas según la zona horaria del ambiente.",
            application: "El schedule declara zona horaria y calcula explícitamente la fecha de negocio.",
            proof: "La prueba en cambio de día procesa una sola ventana correcta.",
          },
          {
            title: "Solicitud HTTP autenticada",
            scenario: "Un sistema externo inicia el proceso mediante un endpoint.",
            application: "El trigger exige token de Entra y valida esquema, versión y correlation ID.",
            proof: "Solicitudes no autorizadas o incompatibles se rechazan antes de ejecutar acciones.",
          },
        ],
      },
      {
        id: "at-g03-p02",
        title: "Identidad y configuración deben ser reproducibles.",
        decision:
          "Usar solución, connection references, environment variables y un modelo de ownership compatible con continuidad y licencias.",
        why: "Una conexión personal o un valor hardcodeado impide promover el flow de forma segura y puede detenerlo cuando cambia una persona.",
        evidence: [
          "Inventario de conexiones e identidades.",
          "Catálogo de variables por ambiente.",
          "Validación de data policy y licenciamiento.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C05", "C09", "T12"],
        examples: [
          {
            title: "Connection references en solución",
            scenario: "El flow apunta directamente a la conexión personal del maker.",
            application: "Las acciones usan referencias de conexión incluidas en la solución.",
            proof: "UAT y producción resuelven conexiones propias sin editar el flow.",
          },
          {
            title: "Configuración por ambiente",
            scenario: "Sitio, endpoint y buzón operativo cambian entre Dev y Prod.",
            application: "Los valores se leen desde variables de entorno aprobadas.",
            proof: "La misma definición ejecuta con la configuración correcta en cada ambiente.",
          },
          {
            title: "Owner no personal para un proceso crítico",
            scenario: "La continuidad no puede depender del ciclo laboral de una persona.",
            application: "Se usa service principal cuando está soportado, aprobado y correctamente licenciado.",
            proof: "El flow conserva ownership y capacidad ante la baja del maker original.",
          },
        ],
      },
      {
        id: "at-g03-p03",
        title: "Volumen, orden e idempotencia se diseñan explícitamente.",
        decision: "Acordar claves idempotentes, concurrencia, paginación, batching y límites de conectores según la carga esperada.",
        why: "El comportamiento predeterminado puede ejecutar en paralelo, repetir eventos o superar límites de requests y payload.",
        evidence: ["Perfil de volumen y frecuencia.", "Configuración de concurrencia y paginación.", "Pruebas de duplicados y límites."],
        appliesTo: ["Cloud flows"],
        sourceIds: ["T06", "T07"],
        examples: [
          {
            title: "Clave de transacción",
            scenario: "El origen puede reenviar el mismo evento después de un timeout.",
            application: "El flow verifica una clave idempotente antes de crear o actualizar.",
            proof: "Dos eventos equivalentes producen una única transacción.",
          },
          {
            title: "Actualización secuencial de saldo",
            scenario: "Varias ejecuciones leen y modifican el mismo registro compartido.",
            application: "La concurrencia del trigger se limita a uno para preservar orden y consistencia.",
            proof: "La prueba paralela no genera lecturas sucias ni pérdida de actualizaciones.",
          },
          {
            title: "Listado de gran volumen",
            scenario: "El conector devuelve más registros que el límite de una respuesta.",
            application: "Se configuran filtro, paginación y lotes dentro de los límites documentados.",
            proof: "El proceso cubre todo el conjunto sin exceder requests ni memoria.",
          },
        ],
      },
    ],
  },
  "construccion-y-orquestacion": {
    intro:
      "El flow se construye como una solución modular: scopes, child flows y filtros claros reducen complejidad, mientras la RPA incorpora controles específicos de interfaz y máquina.",
    practices: [
      {
        id: "at-g04-p01",
        title: "La modularidad mantiene el flow legible y desplegable.",
        decision:
          "Crear el flow dentro de una solución, agrupar responsabilidades y extraer funciones reutilizables cuando reduzcan repetición.",
        why: "Un flow extenso y plano dificulta revisión, pruebas, manejo de errores y despliegue entre ambientes.",
        evidence: ["Flow solution-aware.", "Diagrama de scopes y responsabilidades.", "Contratos de child flows reutilizados."],
        appliesTo: ["Cloud flows"],
        sourceIds: ["T08", "T09", "T13"],
        examples: [
          {
            title: "Flow creado en solución",
            scenario: "La automatización comenzó en My flows y no agrupa sus dependencias.",
            application: "Se crea como solution-aware desde el inicio junto con sus componentes.",
            proof: "El artifact puede promover flow, conexiones y configuración de forma controlada.",
          },
          {
            title: "Scopes funcionales",
            scenario: "Las acciones de validación, proceso y cierre aparecen mezcladas.",
            application: "Se agrupan en scopes con nombres funcionales y límites de responsabilidad claros.",
            proof: "Un revisor identifica el recorrido y el punto de falla sin abrir cada acción.",
          },
          {
            title: "Notificación reusable",
            scenario: "Varios flows repiten la misma lógica de mensaje, destinatario y formato.",
            application: "La notificación corporativa se implementa como child flow dentro de la misma solución.",
            proof: "Los flows padres usan un contrato común y una corrección se realiza una sola vez.",
          },
        ],
      },
      {
        id: "at-g04-p02",
        title: "Filtrar en origen y eliminar hardcoding reduce costo y fallas.",
        decision: "Evitar ejecuciones y datos innecesarios, externalizar configuración y minimizar loops y acciones.",
        why: "Cada ejecución, iteración y retry consume requests; el hardcoding además impide mover y mantener el flow.",
        evidence: [
          "Revisión de trigger conditions y filtros.",
          "Inventario de configuración externalizada.",
          "Conteo de acciones, loops y requests esperados.",
        ],
        appliesTo: ["Cloud flows"],
        sourceIds: ["T06", "T07", "T08"],
        examples: [
          {
            title: "Condición en el trigger",
            scenario: "El flow inicia para cada registro y descarta la mayoría en la primera condición.",
            application: "La condición se mueve al trigger para evitar ejecuciones sin trabajo útil.",
            proof: "Los eventos fuera de alcance no consumen un run.",
          },
          {
            title: "Destinatarios configurables",
            scenario: "Buzones y endpoints aparecen escritos dentro de varias acciones.",
            application: "Los valores provienen de variables de entorno con owner y propósito definidos.",
            proof: "La promoción no exige editar acciones ni expresiones.",
          },
          {
            title: "Filtro OData en origen",
            scenario: "El flow descarga miles de filas para filtrarlas en un Apply to each.",
            application: "La consulta solicita únicamente filas y columnas necesarias al conector.",
            proof: "La ejecución reduce elementos, acciones y tiempo sin cambiar el resultado.",
          },
        ],
      },
      {
        id: "at-g04-p03",
        title: "La RPA se diseña para cambios de interfaz y capacidad.",
        decision: "Estabilizar selectores, estandarizar máquinas y separar subprocesos recuperables antes de escalar desktop flows.",
        why: "La automatización visual depende de pantalla, sesión, versiones y disponibilidad de máquina de una forma que un conector no comparte.",
        evidence: [
          "Inventario de selectores críticos.",
          "Baseline de imagen y configuración de máquinas.",
          "Pruebas de subflows y recuperación.",
        ],
        appliesTo: ["Desktop flows"],
        sourceIds: ["T15", "T16"],
        examples: [
          {
            title: "Selectores de elementos UI",
            scenario: "El robot hace clic mediante coordenadas que cambian con tamaño o resolución.",
            application: "Se capturan selectores estables de elementos y se reservan coordenadas sólo para excepciones justificadas.",
            proof: "La ejecución funciona en las resoluciones aprobadas sin recalibración manual.",
          },
          {
            title: "Machine group homogéneo",
            scenario: "Las máquinas tienen versiones y accesos distintos a las aplicaciones objetivo.",
            application: "El grupo mantiene imagen, resolución, software y permisos equivalentes.",
            proof: "El mismo desktop flow completa el escenario en cualquier máquina habilitada.",
          },
          {
            title: "Subflows recuperables",
            scenario: "Login, navegación y transacción están unidos en una secuencia difícil de reiniciar.",
            application: "Las etapas se separan en subflows de escritorio con entradas y salidas conocidas.",
            proof: "Una falla permite retomar o repetir la etapa segura sin reiniciar todo el proceso.",
          },
        ],
      },
    ],
  },
  "resiliencia-y-observabilidad": {
    intro:
      "Una automatización confiable transforma cada falla en un estado conocido, distingue errores transitorios de funcionales y genera evidencia suficiente para actuar y reprocesar.",
    practices: [
      {
        id: "at-g05-p01",
        title: "Toda falla termina en un estado conocido.",
        decision: "Usar scopes, Run after y Terminate para separar camino principal, manejo de errores y cierre.",
        why: "Sin una estructura explícita, una acción fallida puede dejar pasos omitidos, transacciones parciales o un run cuyo estado no representa el resultado real.",
        evidence: [
          "Patrón Try, Catch y Finally o equivalente.",
          "Estados finales y códigos de error definidos.",
          "Pruebas de falla y timeout.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows"],
        sourceIds: ["T08", "T10"],
        examples: [
          {
            title: "Try y Catch",
            scenario: "Una falla de actualización impide continuar, pero el flow no registra su contexto.",
            application: "Try contiene la operación y Catch se ejecuta por Run after ante falla o timeout.",
            proof: "El run queda Failed y conserva el contexto necesario para actuar.",
          },
          {
            title: "Finally para cierre",
            scenario: "Duración y resultado sólo se registran cuando el proceso termina con éxito.",
            application: "Finally se configura para ejecutarse después de éxito o error y cerrar la telemetría.",
            proof: "Todas las ejecuciones tienen hora final, duración y estado funcional.",
          },
          {
            title: "Terminate explícito",
            scenario: "Un dato inválido salta acciones y el run aparece como exitoso.",
            application: "Terminate marca Failed con código funcional cuando continuar no es seguro.",
            proof: "La historia de ejecución distingue error de negocio de finalización correcta.",
          },
        ],
      },
      {
        id: "at-g05-p02",
        title: "Retry, compensación y reproceso responden al tipo de error.",
        decision: "Reintentar sólo fallas transitorias y diseñar compensación o replay idempotente para operaciones parciales.",
        why: "Reintentar datos inválidos desperdicia capacidad, mientras repetir sin idempotencia puede duplicar efectos ya confirmados.",
        evidence: [
          "Política de retry por dependencia.",
          "Matriz de errores transitorios y funcionales.",
          "Procedimiento de compensación o reproceso.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows"],
        sourceIds: ["T07", "T10"],
        examples: [
          {
            title: "Retry exponencial para 429",
            scenario: "El servicio limita temporalmente las solicitudes.",
            application: "La acción usa retry exponencial dentro del SLA y del límite operativo.",
            proof: "Una falla transitoria se recupera sin generar una tormenta de requests.",
          },
          {
            title: "Dato inválido sin retry",
            scenario: "El destino rechaza un código inexistente con un error funcional.",
            application: "El flow no reintenta; registra la excepción y deriva su corrección.",
            proof: "El caso queda pendiente con motivo y owner, sin ejecuciones repetidas inútiles.",
          },
          {
            title: "Compensación de una operación parcial",
            scenario: "Se creó una reserva, pero falló la confirmación posterior.",
            application: "El diseño cancela la reserva o habilita un reproceso idempotente según la regla aprobada.",
            proof: "La prueba no deja una transacción huérfana ni duplica la reserva.",
          },
        ],
      },
      {
        id: "at-g05-p03",
        title: "La alerta debe permitir actuar sin abrir todo el flow.",
        decision: "Registrar correlation ID, proceso, ambiente, etapa y resultado, y enviar alertas con contexto y destino operativo.",
        why: "Una notificación que sólo dice que el flow falló obliga a investigar desde cero y aumenta el tiempo de recuperación.",
        evidence: ["Modelo de logging y correlación.", "Alertas accionables probadas.", "Exception queue con estado y owner."],
        appliesTo: ["Cloud flows", "Desktop flows"],
        sourceIds: ["C03", "T14"],
        examples: [
          {
            title: "Correlation ID de punta a punta",
            scenario: "Varias ejecuciones procesan el mismo tipo de caso y no puede relacionarse origen con destino.",
            application: "Cada run conserva correlation ID, proceso, etapa y resultado en su evidencia.",
            proof: "Soporte encuentra todos los eventos de una transacción con una sola clave.",
          },
          {
            title: "Alerta al canal operativo",
            scenario: "Los avisos llegan sólo al correo personal del maker.",
            application: "La alerta se envía al canal compartido con flow, ambiente, error y enlace al run.",
            proof: "El equipo de guardia recibe y asigna el incidente dentro del SLA.",
          },
          {
            title: "Exception queue",
            scenario: "Los casos fallidos se reintentan desde correos o notas sin estado común.",
            application: "La cola registra pendiente, cantidad de intentos, owner y resolución.",
            proof: "Cada excepción puede auditarse y reprocesarse una sola vez de forma controlada.",
          },
        ],
      },
    ],
  },
  "seguridad-y-gobierno": {
    intro:
      "La confianza exige identidades de mínimo privilegio, datos sensibles fuera del historial y un modelo de ownership que sostenga continuidad, auditoría y control humano.",
    practices: [
      {
        id: "at-g06-p01",
        title: "La identidad del flow recibe sólo el privilegio necesario.",
        decision:
          "Elegir owner, conexiones y permisos de ejecución según criticidad, alcance y continuidad, evitando co-ownership innecesario.",
        why: "Un flow actúa sobre sistemas con los privilegios de sus identidades; un permiso excesivo amplía el impacto de un error o abuso.",
        evidence: ["Matriz de identidades y permisos.", "Justificación del modelo de ownership.", "Pruebas con mínimo privilegio."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["T12", "T17"],
        examples: [
          {
            title: "Service principal como owner",
            scenario: "Un flow crítico no puede depender de la permanencia de una persona.",
            application: "Se usa service principal cuando los conectores, gobierno y licenciamiento lo soportan.",
            proof: "La baja del maker no altera ownership, permisos ni capacidad asignada.",
          },
          {
            title: "Run-only para consumidores",
            scenario: "Los usuarios sólo necesitan ejecutar, pero fueron agregados como co-owners.",
            application: "Se asigna run-only y se reserva co-ownership para mantenimiento autorizado.",
            proof: "Los consumidores ejecutan sin editar el flow ni consultar todo su historial.",
          },
          {
            title: "Acceso acotado a machine group",
            scenario: "Operadores de RPA necesitan ejecutar procesos, no administrar máquinas y conexiones.",
            application: "Los permisos del grupo distinguen usuario y co-owner según la tarea.",
            proof: "El operador ejecuta el desktop flow sin cambiar configuración del grupo.",
          },
        ],
      },
      {
        id: "at-g06-p02",
        title: "Secretos y datos sensibles no deben aparecer en el historial.",
        decision:
          "Eliminar hardcoding, usar almacenamiento de secretos aprobado y activar protección de inputs y outputs cuando corresponda.",
        why: "Quien puede consultar el run history puede ver entradas y salidas si las acciones no protegen la información sensible.",
        evidence: [
          "Inventario y ubicación de secretos.",
          "Secure inputs y outputs revisados.",
          "Autenticación de triggers externos validada.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows"],
        sourceIds: ["C05", "T11"],
        examples: [
          {
            title: "Inputs y outputs protegidos",
            scenario: "Una acción procesa datos que no deben mostrarse en el historial.",
            application: "Se activan secure inputs y secure outputs en las acciones correspondientes.",
            proof: "El run history oculta el contenido a quien inspecciona la ejecución.",
          },
          {
            title: "Secreto fuera del flow",
            scenario: "Una clave de API aparece escrita en una acción HTTP.",
            application: "El secreto se recupera desde el mecanismo aprobado, como Key Vault cuando aplique.",
            proof: "La definición exportada y el historial no contienen el valor secreto.",
          },
          {
            title: "Trigger HTTP con Entra",
            scenario: "La URL del trigger es el único control de acceso al proceso.",
            application: "El endpoint exige autenticación de Microsoft Entra para usuarios o principals autorizados.",
            proof: "Una solicitud sin token válido no inicia el flow.",
          },
        ],
      },
      {
        id: "at-g06-p03",
        title: "Gobierno incluye continuidad y control humano.",
        decision: "Aplicar data policies, owners y co-owners vigentes, auditoría y aprobación humana sobre acciones de alto impacto.",
        why: "La seguridad técnica no alcanza si el flow puede combinar conectores inadecuados, quedar huérfano o ejecutar decisiones sensibles sin supervisión.",
        evidence: ["Validación de data policy.", "Owners y suplencias aprobados.", "Controles de auditoría y aprobación."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C05", "C10", "T12"],
        examples: [
          {
            title: "Guardrail de conectores",
            scenario: "Un flow corporativo intenta combinar datos internos con un servicio personal.",
            application: "La data policy ubica ambos conectores en grupos incompatibles.",
            proof: "El flow no puede guardarse ni ejecutarse con la combinación bloqueada.",
          },
          {
            title: "Co-owner operativo",
            scenario: "Sólo el maker recibe alertas y puede actualizar conexiones.",
            application: "El flow productivo incorpora un co-owner operativo y un procedimiento de transferencia.",
            proof: "La ausencia del creador no impide investigar ni restaurar el servicio.",
          },
          {
            title: "Aprobación para acción sensible",
            scenario: "Una regla automática podría ejecutar una transacción financiera de alto impacto.",
            application: "La acción se detiene hasta recibir aprobación de un rol autorizado.",
            proof: "Ninguna transacción por encima del umbral evita la intervención humana.",
          },
        ],
      },
    ],
  },
  "pruebas-y-aprobacion": {
    intro:
      "La activación se aprueba sólo después de demostrar comportamiento correcto ante éxito, rechazo, volumen, duplicados, dependencias caídas y condiciones reales de RPA.",
    practices: [
      {
        id: "at-g07-p01",
        title: "La matriz de pruebas cubre éxito, rechazo y dependencia caída.",
        decision: "Probar caminos funcionales, errores de datos, permisos y fallas técnicas contra resultados esperados de la Spec.",
        why: "Una ejecución exitosa no demuestra que el flow se detenga, alerte y conserve consistencia cuando algo falla.",
        evidence: ["Matriz de escenarios y resultados.", "Evidencia de fallas controladas.", "Defectos con severidad y cierre."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C11", "T18"],
        examples: [
          {
            title: "Transacción válida",
            scenario: "El flow recibe un payload completo y autorizado.",
            application: "Se ejecuta el camino principal y se verifican cada escritura y respuesta.",
            proof: "La transacción finaliza una vez y devuelve el identificador esperado.",
          },
          {
            title: "Input obligatorio vacío",
            scenario: "La solicitud omite un dato requerido por el sistema destino.",
            application: "El flow valida antes de escribir y deriva la excepción funcional.",
            proof: "No se crea información parcial y el caso queda con motivo accionable.",
          },
          {
            title: "Conexión caída",
            scenario: "El conector no puede autenticar o alcanzar la dependencia.",
            application: "La prueba confirma Catch, alerta, estado Failed y ausencia de pasos posteriores inseguros.",
            proof: "La ejecución deja evidencia suficiente y una acción de recuperación conocida.",
          },
        ],
      },
      {
        id: "at-g07-p02",
        title: "Volumen y duplicados se prueban antes de activar.",
        decision: "Validar concurrencia, límites, throttling, retry e idempotencia con una carga representativa.",
        why: "Un flow estable con una ejecución puede fallar, desordenar o duplicar transacciones cuando el volumen real llega en paralelo.",
        evidence: ["Perfil de carga y datos de prueba.", "Resultados de throttling y retry.", "Pruebas de concurrencia e idempotencia."],
        appliesTo: ["Cloud flows"],
        sourceIds: ["T07", "T10"],
        examples: [
          {
            title: "Cien eventos simultáneos",
            scenario: "El proceso recibirá picos de eventos sobre un mismo período.",
            application: "La prueba envía cien eventos y observa concurrencia, duración y cola.",
            proof: "Todas las ejecuciones respetan el orden requerido y el SLA.",
          },
          {
            title: "Throttling controlado",
            scenario: "El conector responde 429 durante una ráfaga.",
            application: "Se verifica retry exponencial, alerta y consumo de acciones.",
            proof: "El flow se recupera o falla de forma controlada sin superar los límites acordados.",
          },
          {
            title: "Evento duplicado",
            scenario: "El origen reenvía el mismo mensaje después de no recibir confirmación.",
            application: "La prueba repite la misma clave idempotente durante y después de la primera ejecución.",
            proof: "El sistema registra una sola transacción y devuelve el resultado existente.",
          },
        ],
      },
      {
        id: "at-g07-p03",
        title: "UAT y RPA se ejecutan en condiciones reales.",
        decision: "Validar con usuarios, datos, identidades, sesiones y máquinas equivalentes a producción antes de firmar la aprobación.",
        why: "La aceptación del maker no reproduce permisos de negocio ni las dependencias físicas de un desktop flow.",
        evidence: [
          "UAT formal de negocio.",
          "Matriz de máquinas, sesiones y resoluciones.",
          "Prueba de continuidad de owner y credenciales.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C11", "T15", "T16"],
        examples: [
          {
            title: "UAT de punta a punta",
            scenario: "El equipo técnico validó acciones, pero negocio no confirmó el resultado funcional.",
            application: "Usuarios clave prueban salida, excepción y fallback con datos representativos.",
            proof: "El process owner aprueba cada criterio de la Spec sin defectos críticos abiertos.",
          },
          {
            title: "Desktop flow en el pool productivo",
            scenario: "El robot sólo se probó en la computadora del desarrollador.",
            application: "Se ejecuta en resoluciones, sesiones y máquinas equivalentes al pool de producción.",
            proof: "Selectores y recuperación funcionan en todas las configuraciones aprobadas.",
          },
          {
            title: "Cambio de owner o credencial",
            scenario: "Una conexión o identidad puede cambiar después del go-live.",
            application: "Se simula la transferencia y se ejecuta el procedimiento de continuidad.",
            proof: "El flow vuelve a operar sin recrearlo ni perder configuración.",
          },
        ],
      },
    ],
  },
  "alm-despliegue-y-activacion": {
    intro:
      "La activación productiva debe usar el mismo artifact aprobado, resolver configuración mediante pipeline y terminar con smoke test, alertas verificadas y recuperación disponible.",
    practices: [
      {
        id: "at-g08-p01",
        title: "El flow promovido es el artifact aprobado.",
        decision: "Mantener el flow como solution-aware y promover una solución managed y versionada según el estándar de ambientes.",
        why: "Recrear o editar flows manualmente entre ambientes rompe dependencias, trazabilidad y equivalencia con UAT.",
        evidence: ["Solución y artifact versionados.", "Dependencias y componentes validados.", "Aprobación vinculada a la versión."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C06", "C11", "T13"],
        examples: [
          {
            title: "Flow solution-aware",
            scenario: "La automatización y sus dependencias deben viajar juntas.",
            application: "El flow permanece dentro de la solución desde desarrollo hasta producción.",
            proof: "El artifact incluye definición, referencias y componentes requeridos.",
          },
          {
            title: "Managed en ambientes downstream",
            scenario: "UAT y producción no deben recibir personalizaciones ad hoc.",
            application: "La solución unmanaged de Dev se exporta como managed según el estándar aprobado.",
            proof: "El ambiente productivo no conserva capas activas no documentadas.",
          },
          {
            title: "Artifact vinculado a aprobación",
            scenario: "La evidencia de UAT no indica qué archivo o versión fue aprobada.",
            application: "Versión, artifact y firma se registran en el mismo release.",
            proof: "El equipo puede demostrar que producción recibió exactamente la versión aprobada.",
          },
        ],
      },
      {
        id: "at-g08-p02",
        title: "El pipeline resuelve configuración antes de activar.",
        decision:
          "Prevalidar dependencias y proporcionar conexiones, variables e identidad del ambiente destino como parte del despliegue.",
        why: "Activar primero y corregir configuración después puede ejecutar el flow contra sistemas o destinatarios equivocados.",
        evidence: [
          "Resultado de prevalidación.",
          "Configuración de connection references y variables.",
          "Registro de pipeline e identidad de despliegue.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C08", "C09"],
        examples: [
          {
            title: "Conexión productiva faltante",
            scenario: "Una referencia no tiene una conexión compatible en el ambiente destino.",
            application: "La prevalidación detiene el despliegue antes de activar el flow.",
            proof: "El pipeline señala la referencia faltante sin modificar producción.",
          },
          {
            title: "Variables del ambiente destino",
            scenario: "URLs y destinatarios difieren entre UAT y producción.",
            application: "El pipeline proporciona los valores productivos sin editar la definición.",
            proof: "El smoke test confirma endpoints y destinatarios correctos.",
          },
          {
            title: "Identidad técnica de despliegue",
            scenario: "La promoción depende de las credenciales interactivas de un maker.",
            application: "El proceso usa la identidad técnica aprobada y registra su ejecución.",
            proof: "El deploy es repetible y auditable sin acceso manual del desarrollador a producción.",
          },
        ],
      },
      {
        id: "at-g08-p03",
        title: "La activación incluye salud, alertas y rollback.",
        decision: "Ejecutar transacción controlada, confirmar observabilidad y mantener un procedimiento de desactivación y redeploy.",
        why: "Un import exitoso no demuestra que trigger, conexiones, identidad, alertas y sistemas destino funcionen en producción.",
        evidence: ["Smoke test productivo.", "Prueba de alerta y monitoreo.", "Artifact anterior y runbook de recuperación."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C08", "T12"],
        examples: [
          {
            title: "Transacción de smoke test",
            scenario: "El flow fue activado, pero todavía no procesó un evento real controlado.",
            application: "Se dispara una transacción identificable y se verifica cada salida.",
            proof: "Trigger, conexiones y destino completan el recorrido esperado una sola vez.",
          },
          {
            title: "Alerta productiva verificada",
            scenario: "Las alertas podrían seguir apuntando al equipo o canal de UAT.",
            application: "Se fuerza un error seguro y controlado durante la ventana de release.",
            proof: "El canal productivo recibe contexto y enlace correctos dentro del SLA.",
          },
          {
            title: "Redeploy de versión anterior",
            scenario: "La nueva versión presenta un defecto crítico después de activarse.",
            application: "El runbook permite desactivar y redesplegar el artifact anterior conservado.",
            proof: "El servicio puede recuperarse dentro del objetivo acordado.",
          },
        ],
      },
    ],
  },
  "operacion-y-mejora": {
    intro:
      "El flow se opera como servicio: salud, capacidad, conexiones, máquinas y valor se revisan con owners, alertas y una rutina explícita de mejora o retiro.",
    practices: [
      {
        id: "at-g09-p01",
        title: "Run history se convierte en indicadores operativos.",
        decision: "Definir métricas de éxito, falla, duración, volumen y SLA con umbrales, owners y alertas.",
        why: "Revisar ejecuciones caso por caso no permite detectar degradación, cambios de patrón ni incumplimientos sostenidos.",
        evidence: ["Dashboard o registro operativo.", "Umbrales y alertas aprobados.", "Historial suficiente para analizar tendencias."],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["C03", "T14"],
        examples: [
          {
            title: "Salud de ejecuciones",
            scenario: "El equipo conoce fallas aisladas, pero no la tendencia del servicio.",
            application: "El dashboard muestra success rate, failure rate y duración percentil.",
            proof: "Una degradación sostenida supera el umbral y genera una acción trazable.",
          },
          {
            title: "Seguimiento de SLA",
            scenario: "El flow finaliza, pero algunos casos superan el tiempo comprometido.",
            application: "Las alertas comparan duración y volumen contra el SLA funcional.",
            proof: "Operación detecta el incumplimiento antes de recibir un reclamo de negocio.",
          },
          {
            title: "Historial ampliado",
            scenario: "La ventana estándar de run history no alcanza para analizar una tendencia.",
            application: "Se usa historial en Dataverse o telemetría aprobada cuando la criticidad lo requiere.",
            proof: "El análisis puede comparar períodos y encontrar recurrencias más allá de la ventana básica.",
          },
        ],
      },
      {
        id: "at-g09-p02",
        title: "Conexiones, capacidad y máquinas forman parte de la salud.",
        decision: "Monitorear credenciales, owners, requests, licencias, gateways, colas y máquinas junto con el resultado del flow.",
        why: "El proceso puede degradarse por infraestructura o capacidad aunque su lógica no haya cambiado.",
        evidence: [
          "Inventario de conexiones y vencimientos.",
          "Consumo de requests y licencias.",
          "Métricas de colas, máquinas y runtime cuando aplique.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows"],
        sourceIds: ["T07", "T12", "T16"],
        examples: [
          {
            title: "Conexión próxima a vencer",
            scenario: "Una credencial o secreto puede expirar y detener ejecuciones futuras.",
            application: "El inventario asigna owner, fecha y procedimiento de renovación.",
            proof: "La conexión se renueva y prueba antes de la fecha de vencimiento.",
          },
          {
            title: "Cola de desktop flows",
            scenario: "La espera aumenta porque el machine group no absorbe el volumen.",
            application: "Operación observa profundidad, prioridad y tiempo en cola y activa el plan de capacidad.",
            proof: "La cola vuelve al umbral sin cancelar ni perder ejecuciones.",
          },
          {
            title: "Consumo y throttling",
            scenario: "El flow se acerca a los límites de requests de su perfil y conector.",
            application: "Se revisan acciones, retries, paginación y licencia antes de una suspensión.",
            proof: "El consumo vuelve al rango aprobado o se asigna capacidad justificada.",
          },
        ],
      },
      {
        id: "at-g09-p03",
        title: "El valor real decide mejora o retiro.",
        decision:
          "Comparar beneficio observado, incidentes y costo operativo para priorizar cambios o retirar automatizaciones sin valor vigente.",
        why: "Una automatización puede seguir ejecutando aunque el proceso cambie, el ahorro desaparezca o las excepciones consuman más esfuerzo que antes.",
        evidence: [
          "Beneficio actualizado contra baseline.",
          "Backlog priorizado por incidentes y excepciones.",
          "Plan de continuidad o retiro aprobado.",
        ],
        appliesTo: ["Cloud flows", "Desktop flows", "Business process flows"],
        sourceIds: ["T05", "T14"],
        examples: [
          {
            title: "Tiempo ahorrado observado",
            scenario: "El caso de negocio usa el volumen y la duración estimados antes del go-live.",
            application: "Se recalcula el ahorro con ejecuciones, duración y reproceso reales.",
            proof: "La revisión muestra beneficio neto y desvío frente a la meta original.",
          },
          {
            title: "Excepciones convertidas en backlog",
            scenario: "El equipo resuelve manualmente el mismo error sin eliminar su causa.",
            application: "Las excepciones se agrupan por causa, frecuencia e impacto y se prioriza una mejora.",
            proof: "El ítem de backlog vincula evidencia, owner y criterio de cierre.",
          },
          {
            title: "Retiro de un flow sin valor vigente",
            scenario: "La automatización no registra ejecuciones útiles ni mantiene owner de negocio.",
            application: "Se confirma ausencia de dependencias, se comunica, se desactiva y se retira mediante cambio aprobado.",
            proof: "No quedan triggers, conexiones ni alertas huérfanas después del retiro.",
          },
        ],
      },
    ],
  },
};
