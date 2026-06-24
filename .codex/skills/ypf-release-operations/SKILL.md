---
name: ypf-release-operations
description: Prepare, validate, commit, push, deploy, and verify production releases for the Datalizacion YPF portal on GitHub and Vercel, including build validation, QA scripts, cache headers, service worker bumps, production smoke checks, rollback notes, and concise release summaries.
---

# YPF Release Operations

Use this skill whenever a change must reach GitHub and Vercel production.

## Workflow

1. Check `git status -sb` and avoid reverting unrelated user work.
2. Run the relevant validation path: `npm run build`, then `npm run quality` for structural or visual changes.
3. Confirm `vercel.json` cache behavior when `app.js`, `service-worker.js`, or `data/` modules changed.
4. Commit with a concise action-focused message.
5. Push to `origin main`.
6. Deploy with `npx --yes vercel@latest deploy --prod`.
7. Verify the aliased production URL, not only the deployment URL.
8. Report commit hash, deploy URL, validation commands, and any residual risk.

## Release Blockers

- Build failure.
- Console error in production.
- Data module cache mismatch.
- Broken route rewrite.
- Missing expected section after deploy.
- Uncommitted production changes.

## References

Read `references/release-checklist.md` before production deploys or service worker/cache changes.
