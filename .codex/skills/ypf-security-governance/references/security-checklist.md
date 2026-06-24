# Security Checklist

## Static Portal Baseline

- No credentials.
- No real internal datasets.
- No private API endpoints.
- No analytics or tracking without review.
- CSP remains restrictive.

## MCP Review

- Classify each MCP by read/write scope.
- Prefer local and read-only integrations.
- Require explicit approval for authenticated MCPs.
- Store tokens outside the repo.
- Document owner, purpose and rollback.

## Dependency Review

- Run `npm audit`.
- Avoid dependencies with unresolved runtime vulnerabilities.
- Prefer dev-only tools for quality checks.
- Remove tools that create more risk than value.

## Deployment Review

- Confirm cache headers.
- Confirm service worker versioning.
- Smoke test production after deploy.
