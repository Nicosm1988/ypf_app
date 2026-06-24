---
name: ypf-tooling-curator
description: Research, select, document, or install libraries, AI agents, MCP servers, browser tools, QA tooling, BI/Fabric helpers, and deployment capabilities for the Datalizacion YPF portal. Use when evaluating whether a tool belongs in the repo, updating the tooling catalog, adding MCP configuration, or preventing tool sprawl.
---

# YPF Tooling Curator

Use this skill to keep the portal's tool ecosystem intentional, current, and defensible.

## Workflow

1. Define the job-to-be-done before naming tools.
2. Prefer official or primary sources for claims about MCPs, agents, libraries, and deployment tools.
3. Classify each candidate as `install now`, `document only`, `requires token`, `future evaluation`, or `reject`.
4. Install only development dependencies that improve build, quality, accessibility, release safety, or documentation.
5. Do not add runtime dependencies to this static portal unless there is a clear user-facing capability.
6. Update `docs/librerias-agentes-mcp.md`, `data/toolingLibrary.js`, and `.mcp/registry.json` together when the catalog changes.
7. Run `npm audit` after package changes and remove tools that create avoidable risk.

## Decision Criteria

- Does it reduce a real risk in BI delivery?
- Does it fit a static Vercel portal?
- Can it run without exposing secrets?
- Is there an owner and validation command?
- Is the source official, maintained, and compatible with current Node?

## References

Read `references/tooling-matrix.md` before adding or recommending tools.
