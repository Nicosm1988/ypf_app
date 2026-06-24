# Power BI Fabric Gates

## Gate Rules

1. PRD and Spec define the decision, user, trigger, scope and acceptance criteria.
2. Power Query and data contracts define source reliability, refresh, latency and quality controls.
3. Semantic model defines grain, facts, dimensions, relationships and storage mode.
4. DAX defines reusable measures, calculation rules, edge cases and performance constraints.
5. Security defines RLS/OLS, audience, ownership, sensitivity and lineage.
6. UX defines signal, cause, impact, detail and action.
7. Versioning defines PBIP/TMDL, review, UAT and rollback.
8. Publication defines app, workspace, permissions, gateway, credentials and communication.
9. Operation defines SLA, incident flow, adoption, capacity, backlog and improvement cadence.

## Architecture Bias

Use Power BI/Fabric-native patterns first. Introduce external services only when they solve a defined bottleneck in scale, governance, automation or observability.
