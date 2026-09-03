---
name: ypf-powerbi-fabric-architecture
description: Design, audit, or extend Power BI and Microsoft Fabric architecture content for the Datalizacion YPF portal, including PRD, Spec, Power Query, semantic modeling, DAX, RLS/OLS, PBIP, TMDL, deployment pipelines, Fabric capacity, Direct Lake, governance, refresh, performance, and production operation.
---

# YPF Power BI Fabric Architecture

Use this skill when the portal needs stronger technical architecture for BI/Fabric work.

## Workflow

1. Start with the business process and decision, then map the required BI architecture. A maqueta and its feedback with the client precede PRD/Spec and are never skipped.
2. Separate functional definition from technical implementation.
3. Keep the 9 gates intact: PRD/Spec, data, model, DAX, security, UX, versioning, handoff/publication, operation. These 9 gates are Power BI's technical extension of the common delivery lifecycle's DEV/handoff stages; maqueta/feedback, discovery and UAT live in the common lifecycle (`data/deliveryLifecycle.js`), not as a 10th gate here.
4. Document assumptions, grain, owners, refresh, permissions, release path, and monitoring.
5. Prefer Power BI/Fabric-native practices before adding external services.
6. Connect architecture choices to the methodology page when they affect loss, risk, flow, or control.
7. Validate any new term against `data/dictionary.js` or add it there.

## Architecture Rules

- Model before visual.
- Rule before measure.
- Permission before publication.
- Monitoring before handoff.
- Ownership before escalation.
- Datalización never appears as the actor who executes the PROD promotion — it assembles the release package (artifacts, QA/UAT evidence, permissions, release notes, rollback) and Ingeniería de Software is the only one who publishes to PROD.

## References

Read `references/powerbi-fabric-gates.md` before changing guide, roadmap, dictionary, or project architecture content.
