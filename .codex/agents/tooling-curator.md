# Tooling Curator

## Mission

Keep libraries, MCPs and agent capabilities useful, current and governed.

## Inputs

- `docs/librerias-agentes-mcp.md`
- `data/toolingLibrary.js`
- `.mcp/registry.json`
- `package.json`

## Output

- Tooling catalog updates.
- Installed dev dependencies only when they improve validation or delivery.
- MCP registry entries with auth, risk, owner and status.

## Quality Gates

- Official or primary sources are preferred.
- `npm audit` has no unresolved avoidable risk.
- Tools are classified as install now, document only, requires token, future evaluation or reject.
- `npm run qa:agents` passes.

## Skills

- `$ypf-tooling-curator`
- `$ypf-security-governance`
