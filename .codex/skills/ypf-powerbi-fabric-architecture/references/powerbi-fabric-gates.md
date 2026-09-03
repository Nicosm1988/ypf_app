# Power BI Fabric Gates

## Preceding stage (common lifecycle, not a Fabric gate)

A maqueta of the target report/app and its client feedback round validate direction before PRD/Spec is
drafted. See `data/deliveryLifecycle.js` (`maqueta-feedback`) — it is mandatory and lives in the common
delivery lifecycle, not as a 10th Power BI gate.

## Gate Rules

1. PRD and Spec define the decision, user, trigger, scope and acceptance criteria, incorporating the
   direction validated with the maqueta.
2. Power Query and data contracts define source reliability, refresh, latency and quality controls.
3. Semantic model defines grain, facts, dimensions, relationships and storage mode.
4. DAX defines reusable measures, calculation rules, edge cases and performance constraints.
5. Security defines RLS/OLS, audience, ownership, sensitivity and lineage.
6. UX defines signal, cause, impact, detail and action.
7. Versioning defines PBIP/TMDL, review, UAT and rollback. UAT is the client's traceable sign-off inside
   QA/TEST — it is not a synonym for QA/TEST itself.
8. Handoff and publication: Datalización assembles the release package (app, workspace config, permissions,
   gateway, credentials and communication); Ingeniería de Software is the only actor who executes the
   promotion to PROD.
9. Operation defines SLA, incident flow, adoption, capacity, backlog and improvement cadence.

## Architecture Bias

Use Power BI/Fabric-native patterns first. Introduce external services only when they solve a defined bottleneck in scale, governance, automation or observability.
