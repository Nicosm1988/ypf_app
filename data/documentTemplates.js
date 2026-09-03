import { powerPlatformProducts } from "./powerPlatformProducts.js";

export const documentTemplateVersion = "2.0.0";
export const documentTemplateStatus = "Vigente";
export const documentTemplateReviewedAt = "2026-07-31";
export const documentTemplateNextReviewAt = "2027-01-31";

const sharedMetadata = {
  owner: "Portal de Datalización YPF",
  version: documentTemplateVersion,
  status: documentTemplateStatus,
  reviewedAt: documentTemplateReviewedAt,
  nextReviewAt: documentTemplateNextReviewAt,
  route: "/road-y-metodologia#modelos-prd-spec",
  format: "Word editable",
};

const prdSections = [
  {
    id: "resumen-ejecutivo",
    title: "1. Resumen ejecutivo",
    objective: "Explicar qué proceso se quiere datalizar, por qué importa y qué resultado operativo debe producir.",
    prompts: [
      "¿Qué tarea manual, fragmentada o repetitiva se quiere eliminar o reducir?",
      "¿Qué decisión, acción, alerta o aprobación debe quedar habilitada?",
      "¿Qué evidencia demuestra que el problema existe y cuál es su impacto?",
    ],
    deliverables: ["Resumen de una página", "Objetivo de negocio", "Resultado esperado"],
    acceptance: "Sponsor y responsable funcional acuerdan el problema, el resultado y la prioridad.",
  },
  {
    id: "proceso-actual",
    title: "2. Proceso actual",
    objective: "Describir el flujo vigente de punta a punta para distinguir valor, esperas, retrabajo, controles y excepciones.",
    prompts: [
      "¿Qué evento inicia el proceso y quién lo ejecuta?",
      "¿Qué sistemas, planillas, correos, archivos o validaciones intervienen?",
      "¿Dónde aparecen demoras, duplicación, pérdida de trazabilidad o riesgo?",
    ],
    deliverables: ["Mapa del proceso actual", "Actores y sistemas", "Dolores priorizados"],
    acceptance: "El flujo actual puede explicarse con entrada, pasos, responsables, excepciones y salida.",
  },
  {
    id: "problema-oportunidad",
    title: "3. Problema y oportunidad",
    objective: "Cuantificar la brecha entre la situación actual y la operación deseada sin anticipar una solución técnica.",
    prompts: [
      "¿Cuál es la causa observable y cuál es solamente un síntoma?",
      "¿Qué costo, tiempo, error, riesgo o decisión tardía genera?",
      "¿Qué pasaría si el proceso no se modifica?",
    ],
    deliverables: ["Declaración del problema", "Línea base", "Oportunidad cuantificada"],
    acceptance: "La necesidad está respaldada por evidencia y no por una preferencia de herramienta.",
  },
  {
    id: "disparador-entradas-salidas",
    title: "4. Disparador, entradas y salidas",
    objective: "Definir el contrato funcional del proceso: cuándo comienza, qué recibe, qué transforma y qué entrega.",
    prompts: [
      "¿Qué evento, frecuencia, umbral o solicitud inicia el proceso?",
      "¿Qué datos o documentos necesita y quién es su owner?",
      "¿Qué salida recibe cada usuario y qué acción debe realizar después?",
    ],
    deliverables: ["Disparador definido", "Inventario de entradas", "Salidas y acciones esperadas"],
    acceptance: "Cada entrada y salida tiene responsable, frecuencia y condición funcional verificable.",
  },
  {
    id: "usuarios-responsabilidades",
    title: "5. Usuarios y responsabilidades",
    objective: "Acordar quién patrocina, decide, usa, opera, mantiene y responde por los datos y la solución.",
    prompts: [
      "¿Quiénes son los usuarios principales, secundarios y afectados?",
      "¿Quién aprueba alcance, reglas y salida a producción?",
      "¿Quién asume ownership funcional, técnico, de datos y de operación?",
    ],
    deliverables: ["Mapa de stakeholders", "Matriz RACI", "Owners y suplencias"],
    acceptance: "No quedan decisiones o activos críticos sin una persona o rol responsable.",
  },
  {
    id: "reglas-excepciones",
    title: "6. Reglas de negocio y excepciones",
    objective: "Convertir el conocimiento del proceso en reglas claras, priorizadas y comprobables.",
    prompts: [
      "¿Qué condiciones, umbrales, prioridades y cálculos deben aplicarse?",
      "¿Qué casos borde, excepciones o aprobaciones humanas existen?",
      "¿Qué acción corresponde a cada resultado y qué evidencia debe conservarse?",
    ],
    deliverables: ["Catálogo de reglas", "Matriz condición-acción", "Tratamiento de excepciones"],
    acceptance: "Negocio puede revisar cada regla con ejemplos positivos, negativos y de borde.",
  },
  {
    id: "kpis-exito",
    title: "7. KPIs y criterios de éxito",
    objective: "Definir cómo se medirá el impacto operativo, la calidad, la adopción y la sostenibilidad.",
    prompts: [
      "¿Cuál es la línea base, la meta, la frecuencia y el owner de cada KPI?",
      "¿Cómo se medirán tiempo ahorrado, retrabajo, errores, SLA y adopción?",
      "¿Qué señales obligan a corregir, pausar o retirar la solución?",
    ],
    deliverables: ["Matriz de KPIs", "Línea base y meta", "Plan de medición"],
    acceptance: "Cada criterio de éxito tiene fórmula, fuente, frecuencia, meta y responsable.",
  },
  {
    id: "alcance",
    title: "8. Alcance y exclusiones",
    objective: "Delimitar la primera entrega para evitar expectativas implícitas y expansión no controlada.",
    prompts: [
      "¿Qué procesos, usuarios, ubicaciones, fuentes y salidas están incluidos?",
      "¿Qué queda explícitamente fuera de alcance y por qué?",
      "¿Qué dependencias o etapas futuras deben registrarse sin incorporarse ahora?",
    ],
    deliverables: ["Alcance incluido", "Fuera de alcance", "Dependencias y backlog posterior"],
    acceptance: "Sponsor, usuarios y equipo técnico comparten los mismos límites de la entrega.",
  },
  {
    id: "riesgos-supuestos",
    title: "9. Riesgos, supuestos y restricciones",
    objective: "Hacer visibles las condiciones que podrían impedir el resultado o cambiar la viabilidad.",
    prompts: [
      "¿Qué restricciones de datos, seguridad, licencias, capacidad, tiempo o integración existen?",
      "¿Qué supuestos deben validarse antes de construir?",
      "¿Cuál es la mitigación, el owner y la fecha de decisión de cada riesgo?",
    ],
    deliverables: ["Registro de riesgos", "Supuestos por validar", "Mitigaciones y decisiones"],
    acceptance: "Los riesgos críticos tienen owner, tratamiento y criterio de escalamiento.",
  },
  {
    id: "aceptacion-funcional",
    title: "10. Criterios de aceptación funcional",
    objective: "Establecer evidencia observable para decidir si el producto resuelve el proceso definido.",
    prompts: [
      "¿Qué escenarios principales, negativos y de borde deben pasar?",
      "¿Qué resultado, permiso, tiempo de respuesta y trazabilidad se espera?",
      "¿Quién valida cada criterio y qué bloquea la aprobación?",
    ],
    deliverables: ["Criterios Given/When/Then o equivalentes", "Casos de UAT", "Aprobadores"],
    acceptance: "Los criterios son específicos, medibles y trazables al problema, las reglas y los KPIs.",
  },
];

const productSpecConfig = {
  "power-bi": {
    id: "spec-power-bi-fabric",
    product: "Power BI y Microsoft Fabric",
    title: "Modelo Spec - Power BI y Microsoft Fabric",
    subtitle: "Datos, modelo semántico, DAX, seguridad, experiencia, despliegue y operación",
    eyebrow: "Spec por producto · Power BI/Fabric",
    summary: "Convierte el PRD aprobado en una implementación analítica construible, versionable, comprobable y operable.",
    purpose:
      "Definir las decisiones técnicas y los gates necesarios para entregar una solución Power BI/Fabric segura, trazable y accionable.",
    preview: [
      "PRD, arquitectura y fuentes",
      "Preparación de datos y Power Query/Fabric",
      "Modelo semántico y DAX",
      "Seguridad, UX y performance",
      "PBIP, UAT, publicación y operación",
    ],
  },
  "power-apps": {
    id: "spec-power-apps",
    product: "Microsoft Power Apps",
    title: "Modelo Spec - Microsoft Power Apps",
    subtitle: "Arquitectura, datos, UX, Power Fx, integraciones, gobierno, ALM y operación",
    eyebrow: "Spec por producto · Power Apps",
    summary: "Convierte el PRD aprobado en una aplicación de negocio accesible, segura, desplegable y sostenible.",
    purpose: "Definir tipo de app, datos, experiencia, lógica, integraciones, controles y ciclo de vida antes de construir y publicar.",
    preview: [
      "Caso, arquitectura y datos",
      "UX, accesibilidad y Power Fx",
      "Integraciones, seguridad y gobierno",
      "Pruebas, performance y UAT",
      "Solutions, ALM, publicación y operación",
    ],
  },
  "power-automate": {
    id: "spec-power-automate",
    product: "Microsoft Power Automate",
    title: "Modelo Spec - Microsoft Power Automate",
    subtitle: "Proceso, triggers, conectores, orquestación, resiliencia, seguridad, ALM y operación",
    eyebrow: "Spec por producto · Power Automate",
    summary: "Convierte el PRD aprobado en un flujo repetible, observable, seguro y recuperable.",
    purpose: "Definir el contrato de ejecución, las dependencias y los controles operativos de una automatización antes de activarla.",
    preview: [
      "Proceso, viabilidad y diseño",
      "Triggers, datos y conectores",
      "Orquestación, idempotencia y resiliencia",
      "Seguridad, pruebas y aprobación",
      "Solutions, activación, monitoreo y SLA",
    ],
  },
};

function buildSpecSections(product) {
  return product.phases.map((phase, index) => ({
    id: phase.slug,
    title: `${index + 1}. ${phase.title}`,
    objective: phase.objective,
    prompts: phase.keyActivities,
    deliverables: phase.deliverables,
    acceptance: `${phase.gate}. ${phase.targetOutcome}`,
  }));
}

function buildProductSpec(product) {
  const config = productSpecConfig[product.id];

  return {
    ...sharedMetadata,
    ...config,
    kind: "Spec",
    productId: product.id,
    sourceMarkdown: `docs/modelos/${config.id}.md`,
    downloadPath: `/assets/docs/modelos/${config.id}.docx`,
    sections: buildSpecSections(product),
  };
}

export const documentTemplates = [
  {
    ...sharedMetadata,
    id: "prd-datalizacion",
    kind: "PRD",
    productId: "cross-product",
    product: "Power BI, Power Apps y Power Automate",
    title: "Modelo PRD - Proyecto de datalización",
    subtitle: "Proceso, usuarios, reglas, alcance, riesgos y criterios de éxito",
    eyebrow: "PRD común · Producto y negocio",
    summary: "Define el problema, el proceso y el resultado antes de elegir cómo resolverlos con Power BI, Power Apps o Power Automate.",
    purpose:
      "Alinear a sponsor, usuarios, negocio y equipo técnico sobre qué proceso se quiere mejorar, por qué importa y cómo se aceptará el resultado.",
    sourceMarkdown: "docs/modelos/prd-datalizacion.md",
    downloadPath: "/assets/docs/modelos/prd-datalizacion.docx",
    preview: [
      "Problema, proceso actual y oportunidad",
      "Disparador, entradas, salidas y usuarios",
      "Reglas de negocio y excepciones",
      "KPIs, alcance, riesgos y supuestos",
      "Criterios de aceptación funcional",
    ],
    sections: prdSections,
  },
  ...powerPlatformProducts.map(buildProductSpec),
];

export const getDocumentTemplateById = (id) => documentTemplates.find((template) => template.id === id);
