# Release Checklist

## Before Commit

- `git status -sb`
- `npm run build`
- `npm run lint`
- `npm run qa:agents`
- `npm run qa:e2e` when UI, routes, accessibility, data-rendering or methodology changed.
- `npm audit` after dependency changes.

## Cache Review

- Bump `service-worker.js` cache name when cached app shell or data modules change.
- Keep `/data/(.*)` on `max-age=0, must-revalidate` to avoid module mismatch.
- Verify Vercel headers with `curl -I`.

## Production Verification

- Deploy with Vercel CLI.
- Open the aliased production URL.
- Check console, expected DOM, desktop and mobile.
- Report commit hash and production URL.
