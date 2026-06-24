# Quality Gates

## Required Commands

- `npm run build`: content and static build validation.
- `npm run lint`: JS, CSS, HTML, Markdown, skills and docs.
- `npm run qa:agents`: repo-local agent, skill and MCP registry validation.
- `npm run qa:e2e`: browser route smoke, accessibility, console, responsive and overflow checks.

## Visual Checks

- Desktop: 1440px.
- Mobile: 390px.
- Check first viewport, dense cards, navigation wrap, methodology process, concept tree, roadmap and guide flow.
- Text must wrap naturally and stay inside cards.

## Accessibility Checks

- Use axe through Playwright.
- Treat missing labels, contrast issues, invalid landmarks, duplicate IDs and inaccessible names as blockers.

## Performance Budget

- Local load budget in QA: 8000ms per route.
- Prefer static assets, local data modules and no client-side network dependencies.
