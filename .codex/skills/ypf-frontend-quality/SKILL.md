---
name: ypf-frontend-quality
description: Validate and improve frontend quality for the Datalizacion YPF static portal, including responsive layout, accessibility, console errors, horizontal overflow, visual hierarchy, text wrapping, performance budgets, Playwright checks, axe-core accessibility scans, HTML validation, CSS linting, and production smoke tests.
---

# YPF Frontend Quality

Use this skill before shipping any visual, layout, navigation, copy, or data-rendering change.

## Workflow

1. Run `npm run build` after content or code changes.
2. Run `npm run lint` when CSS, JS, HTML, Markdown, skills, or docs changed.
3. Run `npm run qa:agents` after changing `.codex/agents`, `.codex/skills`, or `.mcp`.
4. Run `npm run qa:e2e` for page, navigation, responsive, accessibility, or methodology changes.
5. Inspect desktop and mobile layouts when a page section becomes denser.
6. Treat console warnings, horizontal overflow, missing key sections, and accessibility violations as release blockers.

## Quality Gates

- Desktop viewport: 1440px wide.
- Mobile viewport: 390px wide.
- No forced HTML line breaks.
- No text clipped inside cards, buttons, badges, or nav.
- No visual connector that crosses unrelated content.
- No UI card nested inside another card unless it is a modal or repeated item.
- No production deploy without checking the aliased Vercel URL.

## References

Read `references/quality-gates.md` when adding a new page, changing CSS architecture, or updating QA scripts.
