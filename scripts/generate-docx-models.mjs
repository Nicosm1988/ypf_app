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
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { format, resolveConfig } from "prettier";
import { documentTemplates } from "../data/documentTemplates.js";

const documentOutputDir = "assets/docs/modelos";
const markdownOutputDir = "docs/modelos";
const brandBlue = "0054A6";
const darkBlue = "102334";
const yellow = "FFD200";
const lightBlue = "EAF4FF";
const lightGray = "F5F7FA";
const prettierConfig = (await resolveConfig(".")) ?? {};

await Promise.all([mkdir(documentOutputDir, { recursive: true }), mkdir(markdownOutputDir, { recursive: true })]);

for (const template of documentTemplates) {
  const markdownPath = `${markdownOutputDir}/${template.id}.md`;
  const markdown = await format(renderMarkdown(template), {
    ...prettierConfig,
    parser: "markdown",
    filepath: markdownPath,
  });
  await writeTextIfChanged(markdownPath, markdown);

  const doc = createModelDocument(template);
  const buffer = await Packer.toBuffer(doc);
  const documentPath = `${documentOutputDir}/${template.id}.docx`;
  await writeFile(documentPath, buffer);
  console.log(`Generated ${markdownPath} and ${documentPath}`);
}

function createModelDocument(template) {
  return new Document({
    creator: template.owner,
    lastModifiedBy: template.owner,
    revision: 2,
    title: template.title,
    subject: template.product,
    description: template.summary,
    keywords: `Datalización, ${template.kind}, ${template.product}`,
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
          ...createCover(template),
          ...template.sections.flatMap((section) => createSection(section)),
          createChecklist(template.kind === "PRD" ? "Checklist funcional final" : "Checklist técnico final"),
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
            text: "Portal de Datalización YPF · Material metodológico de referencia",
            size: 18,
            color: "667788",
          }),
        ],
      }),
    ],
  });
}

function createCover(template) {
  return [
    new Paragraph({
      children: [
        new TextRun({ text: "YPF", bold: true, color: brandBlue, size: 30 }),
        new TextRun({ text: "  |  Datalización", bold: true, color: darkBlue, size: 30 }),
      ],
      spacing: { after: 260 },
    }),
    new Paragraph({ text: template.title, heading: HeadingLevel.TITLE }),
    new Paragraph({
      children: [new TextRun({ text: template.subtitle, size: 26, color: darkBlue })],
      spacing: { after: 180 },
    }),
    callout(`Propósito: ${template.purpose}`),
    metaTable([
      ["Producto", template.product],
      ["Responsable", template.owner],
      ["Versión", template.version],
      ["Estado", template.status],
      ["Revisión", `${template.reviewedAt} · próxima revisión ${template.nextReviewAt}`],
      ["Uso", "Plantilla editable: completar, revisar, aprobar y versionar por proyecto"],
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
      ["Entregables esperados", section.deliverables.map((item) => `• ${item}`).join("\n")],
      ["Criterio de aceptación", section.acceptance],
    ]),
  ];
}

function renderMarkdown(template) {
  const sections = template.sections
    .map(
      (section) => `## ${section.title}

### Objetivo

${section.objective}

### Preguntas y controles guía

${section.prompts.map((prompt) => `- ${prompt}`).join("\n")}

### Entregables esperados

${section.deliverables.map((deliverable) => `- ${deliverable}`).join("\n")}

### Criterio de aceptación

${section.acceptance}`,
    )
    .join("\n\n");

  return `<!-- Generado desde data/documentTemplates.js. No editar manualmente. -->

# ${template.title}

> ${template.subtitle}

| Control | Valor |
| --- | --- |
| Producto | ${template.product} |
| Tipo | ${template.kind} |
| Responsable | ${template.owner} |
| Versión | ${template.version} |
| Estado | ${template.status} |
| Última revisión | ${template.reviewedAt} |
| Próxima revisión | ${template.nextReviewAt} |

## Propósito

${template.purpose}

## Forma de uso

1. Duplicar la plantilla para el proyecto.
2. Completar cada sección con evidencia y responsables.
3. Resolver supuestos, riesgos y decisiones abiertas.
4. Revisar con negocio, producto y responsables técnicos.
5. Aprobar y versionar antes de pasar al siguiente gate.

${sections}

## Checklist final

- [ ] Documento completo y revisado.
- [ ] Criterios de aceptación trazables y comprobables.
- [ ] Riesgos, decisiones y responsables definidos.
- [ ] Evidencias y aprobaciones adjuntas al proyecto.
- [ ] Gate aprobado antes de iniciar la etapa siguiente.
`;
}

async function writeTextIfChanged(filePath, content) {
  try {
    if ((await readFile(filePath, "utf8")) === content) {
      return;
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  await writeFile(filePath, content);
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
