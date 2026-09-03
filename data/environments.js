// Modelo independiente de entornos (Dimensión B, punto 4.1 y 6.1 del prompt maestro).
// No se mezcla con las etapas del ciclo de trabajo: un mismo entorno participa de varias etapas.
export const environments = [
  {
    id: "dev",
    label: "DEV — Datalización",
    purpose: "Taller interno de construcción: borradores, datos/Power Query, modelo, reglas, UX, versionado y documentación. No es entorno de aceptación del cliente ni producción.",
    allowedActors: ["Datalización"],
    entryCriteria: ["PRD y Spec aprobados"],
    exitCriteria: ["Versión candidata con pruebas de desarrollador y evidencia mínima"],
    promotionOwner: "Datalización",
    guardrails: ["El Teams/SharePoint de Datalización nunca es fuente de datos para tableros productivos"],
  },
  {
    id: "test",
    label: "QA/TEST",
    purpose: "Ambiente de validación: QA interno (Datalización prueba funcionalidad, datos, reglas, seguridad, accesibilidad, performance, refresh, permisos y regresiones) y UAT (el cliente valida escenarios reales y da un OK trazable).",
    allowedActors: ["Datalización", "Cliente/negocio (sólo en UAT)"],
    entryCriteria: ["Versión candidata construida en DEV"],
    exitCriteria: ["Candidato apto para UAT", "OK explícito y trazable del cliente"],
    promotionOwner: "Datalización propone; Ingeniería de Software habilita la promoción a PROD",
    guardrails: ["Los defectos vuelven a DEV; no se corrigen directamente en PROD", "'QA/TEST' y 'UAT' no son sinónimos: UAT es la aceptación del cliente dentro de QA/TEST"],
  },
  {
    id: "prod",
    label: "PROD",
    purpose: "Ambiente productivo que consume el negocio, con permisos, apps, refresh, soporte y operación.",
    allowedActors: ["Ingeniería de Software (única responsable de ejecutar el pase productivo)", "Datalización (entrega el paquete y acompaña la verificación)"],
    entryCriteria: ["Sign-off funcional y paquete de release: artefactos, versión, evidencias de QA/UAT, dependencias, permisos, configuración por ambiente, release notes, monitoreo y rollback"],
    exitCriteria: ["Release productivo verificado; si falta evidencia, el gate no se aprueba"],
    promotionOwner: "Ingeniería de Software",
    guardrails: ["Datalización no ejecuta el pase productivo", "La publicación ocurre por promoción entre ambientes, no por archivos sueltos"],
  },
];

export function getEnvironment(id) {
  return environments.find((environment) => environment.id === id) || null;
}
