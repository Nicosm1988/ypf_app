---
name: ypf-executive-communication
description: Rewrite, audit, or create Spanish executive communication for the Datalizacion YPF portal, including page copy, titles, section structure, decision trees, PRD/Spec narrative, management-ready BI explanations, and human-sounding Argentine formal prose. Use when content must be clearer, more fluent, less AI-like, more board-ready, or structured from conclusion to evidence without naming communication frameworks.
---

# YPF Executive Communication

Use this skill to turn BI, methodology, tooling, and roadmap content into concise management communication with operational evidence.

## Workflow

1. Read the relevant page data in `data/`, not only rendered HTML.
2. State the conclusion first, then the reasons, then the operational evidence.
3. Use formal Argentine Spanish with natural connectors: `por eso`, `en ese sentido`, `a partir de ahi`, `dicho de otro modo`, `en consecuencia`.
4. Keep titles as assertions, not labels. A title should tell the reader what to think or decide.
5. Avoid visible references to consulting frameworks, authors, or meta-methods unless the user explicitly asks.
6. Remove AI-sounding filler: `robusto`, `transformacional`, `potenciar`, `integral` when they do not add precision.
7. Validate that every paragraph answers one of four questions: what decision, why it matters, what evidence, what action.

## Content Rules

- Do not force line breaks with `<br>`.
- Do not add concepts only because they are fashionable.
- Prefer concrete BI examples over abstract claims.
- Keep the portal tone formal, practical, and academic without becoming stiff.
- For methodology content, connect each concept to PRD, Spec, model, DAX, security, UX, release, publication, or operation.

## References

Read `references/style-guide.md` when rewriting a full page, adding a new section, or resolving user feedback about tone.
