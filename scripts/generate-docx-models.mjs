import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  HeadingLevel,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { mkdir, writeFile } from "node:fs/promises";

const outputDir = "assets/docs/modelos";
const brandBlue = "0054A6";
const darkBlue = "102334";
const yellow = "FFD200";
const lightBlue = "EAF4FF";
const lightGray = "F5F7FA";

const models = [
  {
    fileName: "prd-datalizacion.docx",
    title: "Modelo PRD de Datalización",
    subtitle: "Proceso, negocio, usuarios, reglas funcionales y criterios de éxito",
    owner: "Equipo de Datalización - Piso 16",
    purpose:
      "Alinear qué proceso se quiere automatizar, por qué importa, quién lo usa, qué trabajo manual elimina y cómo se medirá el resultado.",
    sections: [
      {
        title: "1. Resumen ejecutivo",
        objective: "Explicar en una página qué proceso se quiere datalizar y qué resultado operativo se espera.",
        prompts: [
          "Qué tarea manual, repetitiva o fragmentada se quiere eliminar.",
          "Qué decisión, alerta, aprobación o acción debe quedar automatizada.",
          "Qué indicador demuestra que el proceso mejoró.",
        ],
        deliverable: "Resumen aprobado por negocio, producto BI e ingeniería.",
      },
      {
        title: "2. Proceso actual y problema operativo",
        objective: "Describir cómo se trabaja hoy, dónde aparece el retrabajo y qué riesgo genera mantenerlo manual.",
        prompts: [
          "Quién inicia el proceso y con qué disparador.",
          "Qué planillas, correos, validaciones o pasos manuales existen.",
          "Qué errores, demoras o pérdidas de trazabilidad aparecen.",
        ],
        deliverable: "Mapa simple del proceso actual con dolor operativo priorizado.",
      },
      {
        title: "3. Usuarios, responsables y decisiones",
        objective: "Identificar quién consume la salida, quién decide, quién opera y quién responde si algo falla.",
        prompts: [
          "Usuarios principales y secundarios.",
          "Responsable funcional, responsable técnico y owner de datos.",
          "Decisión o acción esperada después de recibir la señal.",
        ],
        deliverable: "Matriz de usuarios, responsables y decisiones.",
      },
      {
        title: "4. Reglas funcionales, KPIs y alcance",
        objective: "Convertir conocimiento de negocio en reglas claras, medibles y verificables.",
        prompts: [
          "Reglas de cálculo, umbrales, prioridades y excepciones.",
          "KPIs de impacto, adopción, tiempo ahorrado o reducción de errores.",
          "Qué queda dentro y fuera del alcance.",
        ],
        deliverable: "Reglas funcionales y KPIs acordados.",
      },
      {
        title: "5. Criterios de aceptación",
        objective: "Definir cuándo negocio puede decir que el proceso quedó correctamente automatizado.",
        prompts: [
          "Qué evidencia debe verse en la salida.",
          "Qué pruebas deben pasar antes de construir o publicar.",
          "Qué casos borde no pueden romper el proceso.",
        ],
        deliverable: "Checklist de aceptación funcional firmado.",
      },
    ],
  },
  {
    fileName: "spec-datalizacion.docx",
    title: "Modelo Spec Técnica de Datalización",
    subtitle: "Arquitectura, datos, modelo, DAX, seguridad, UX, release y operación",
    owner: "Equipo de Datalización - Piso 16",
    purpose: "Transformar el PRD aprobado en una implementación construible, versionable, testeable y operable con Power BI/Fabric.",
    sections: [
      {
        title: "1. Arquitectura y fuentes",
        objective: "Definir de dónde vienen los datos, con qué frecuencia se actualizan y qué arquitectura sostiene el proceso.",
        prompts: [
          "Fuentes, owners, credenciales, latencia, volumen y restricciones.",
          "Modo de conexión: Import, DirectQuery, Direct Lake, Lakehouse, Warehouse, Dataflow o Pipeline.",
          "Contratos de datos, linaje y controles de calidad.",
        ],
        deliverable: "Mapa técnico de fuentes y arquitectura aprobada.",
      },
      {
        title: "2. Preparación de datos y Power Query",
        objective: "Documentar transformaciones repetibles y validables antes del modelado.",
        prompts: [
          "Pasos de Power Query, parámetros, tipos de datos y nombres.",
          "Validación de nulos, duplicados, claves huérfanas y Query Folding.",
          "Plan de refresh, gateway e incremental refresh cuando aplique.",
        ],
        deliverable: "Consultas o pipelines preparados con checklist de calidad.",
      },
      {
        title: "3. Modelo semántico",
        objective: "Diseñar una estructura entendible, performante y alineada al proceso.",
        prompts: [
          "Hechos, dimensiones, granularidad, calendario y relaciones.",
          "Cardinalidad, dirección de filtro, columnas necesarias y jerarquías.",
          "Modo de almacenamiento y criterios de performance.",
        ],
        deliverable: "Modelo semántico validado y documentado.",
      },
      {
        title: "4. DAX y reglas calculadas",
        objective: "Convertir reglas de negocio en medidas consistentes, legibles y testeables.",
        prompts: [
          "Medidas base, derivadas, KPIs, formatos y carpetas.",
          "Uso de VAR, contexto de filtro e iteradores cuando correspondan.",
          "Pruebas contra criterios de aceptación del PRD.",
        ],
        deliverable: "Diccionario de medidas DAX con pruebas funcionales.",
      },
      {
        title: "5. Seguridad, UX y salida operativa",
        objective: "Asegurar que la salida llegue al usuario correcto con permisos, navegación y acción esperada.",
        prompts: [
          "RLS/OLS, grupos, workspace, app, audiencia y sensibilidad.",
          "Wireframes, drill-through, alertas, tareas o seguimiento operativo.",
          "Validación de adopción, lectura rápida y trazabilidad de decisiones.",
        ],
        deliverable: "Salida accionable con seguridad y experiencia validadas.",
      },
      {
        title: "6. Versionado, publicación y operación",
        objective: "Controlar el paso a producción y sostener la solución después de la salida a producción.",
        prompts: [
          "PBIP/TMDL, Git, ramas, pull request, Dev-Test-Prod y checklist de release.",
          "Publicación, credenciales, refresh inicial, endorsement y comunicación.",
          "Monitoreo, incidentes, SLA, runbook, capacidad y backlog de mejora.",
        ],
        deliverable: "Release aprobado, publicado y operado con responsables claros.",
      },
    ],
  },
];

await mkdir(outputDir, { recursive: true });

for (const model of models) {
  const doc = createModelDocument(model);
  const buffer = await Packer.toBuffer(doc);
  await writeFile(`${outputDir}/${model.fileName}`, buffer);
  console.log(`Generated ${outputDir}/${model.fileName}`);
}

function createModelDocument(model) {
  return new Document({
    creator: "Equipo de Datalización YPF",
    title: model.title,
    description: model.subtitle,
    styles: {
      default: {
        document: {
          run: { font: "Aptos", size: 22, color: darkBlue },
          paragraph: { spacing: { after: 120, line: 276 } },
        },
      },
      paragraphStyles: [
        {
          id: "Title",
          name: "Title",
          basedOn: "Normal",
          next: "Normal",
          run: { size: 42, bold: true, color: brandBlue },
          paragraph: { spacing: { after: 220 } },
        },
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          run: { size: 28, bold: true, color: brandBlue },
          paragraph: { spacing: { before: 280, after: 120 } },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 900, right: 820, bottom: 820, left: 820 },
          },
        },
        headers: { default: createHeader() },
        footers: { default: createFooter() },
        children: [
          ...createCover(model),
          ...model.sections.flatMap((section) => createSection(section)),
          createChecklist(model.title.includes("PRD") ? "Checklist funcional final" : "Checklist técnico final"),
        ],
      },
    ],
  });
}

function createHeader() {
  return new Header({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({ text: "YPF", bold: true, color: brandBlue }),
          new TextRun({ text: " | Equipo de Datalización", color: darkBlue }),
        ],
      }),
    ],
  });
}

function createFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Torre YPF, Macacha Güemes 515, Puerto Madero, CABA, Argentina - Piso 16",
            size: 18,
            color: "667788",
          }),
        ],
      }),
    ],
  });
}

function createCover(model) {
  return [
    new Paragraph({
      children: [
        new TextRun({ text: "YPF", bold: true, color: brandBlue, size: 30 }),
        new TextRun({ text: "  |  Datalización", bold: true, color: darkBlue, size: 30 }),
      ],
      spacing: { after: 260 },
    }),
    new Paragraph({ text: model.title, heading: HeadingLevel.TITLE }),
    new Paragraph({
      children: [new TextRun({ text: model.subtitle, size: 26, color: darkBlue })],
      spacing: { after: 180 },
    }),
    callout(`Propósito: ${model.purpose}`),
    metaTable([
      ["Equipo", model.owner],
      ["Uso", "Plantilla editable para proyectos internos de automatización BI/Fabric"],
      ["Estado", "Base inicial para completar, revisar y versionar"],
    ]),
    spacer(),
  ];
}

function createSection(section) {
  return [
    new Paragraph({ text: section.title, heading: HeadingLevel.HEADING_1 }),
    new Paragraph({ children: [new TextRun({ text: section.objective, color: darkBlue })] }),
    metaTable([
      ["Preguntas guía", section.prompts.map((item) => `• ${item}`).join("\n")],
      ["Entregable esperado", section.deliverable],
    ]),
  ];
}

function createChecklist(title) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      tableRow([title, "Estado", "Responsable"], true),
      tableRow(["Documento completo y revisado", "Pendiente / En curso / Aprobado", ""]),
      tableRow(["Criterios de aceptación claros", "Pendiente / En curso / Aprobado", ""]),
      tableRow(["Riesgos y responsables definidos", "Pendiente / En curso / Aprobado", ""]),
      tableRow(["Listo para pasar al siguiente gate", "Sí / No", ""]),
    ],
  });
}

function callout(text) {
  return new Paragraph({
    shading: { fill: lightBlue },
    border: {
      left: { style: BorderStyle.SINGLE, size: 16, color: yellow },
    },
    spacing: { before: 160, after: 220 },
    indent: { left: 240 },
    children: [new TextRun({ text, bold: true, color: darkBlue })],
  });
}

function metaTable(rows) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    rows: rows.map(([label, value]) => tableRow([label, value])),
  });
}

function tableRow(cells, isHeader = false) {
  return new TableRow({
    children: cells.map(
      (cell, index) =>
        new TableCell({
          width: index === 0 ? { size: 30, type: WidthType.PERCENTAGE } : undefined,
          shading: { fill: isHeader || index === 0 ? lightBlue : lightGray },
          borders: cellBorders(),
          children: String(cell)
            .split("\n")
            .map(
              (line) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: line,
                      bold: isHeader || index === 0,
                      color: index === 0 ? brandBlue : darkBlue,
                    }),
                  ],
                }),
            ),
        }),
    ),
  });
}

function cellBorders() {
  return {
    top: { style: BorderStyle.SINGLE, size: 1, color: "D9E2EC" },
    bottom: { style: BorderStyle.SINGLE, size: 1, color: "D9E2EC" },
    left: { style: BorderStyle.SINGLE, size: 1, color: "D9E2EC" },
    right: { style: BorderStyle.SINGLE, size: 1, color: "D9E2EC" },
  };
}

function spacer() {
  return new Paragraph({ text: "", spacing: { after: 220 } });
}
