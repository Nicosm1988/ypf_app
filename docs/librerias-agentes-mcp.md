# Librerías, agentes y MCPs para productos de Datalización

Este documento conserva el catálogo de herramientas que se pueden evaluar cuando una necesidad del producto lo justifique. Una herramienta listada no está necesariamente instalada, configurada, aprobada ni activa. La versión navegable del inventario vive en `data/toolingLibrary.js`.

Datalización Hub es un deploy público y estático. El catálogo no autoriza conexiones con sistemas internos ni el uso de credenciales; cualquier integración externa requiere una Spec, revisión de seguridad y aprobación explícita.

## Sistema instalado en este repo

El repositorio cuenta con una capa local de calidad, agentes, skills y un registro documental de MCPs.

### Skills repo-locales

- `ypf-executive-communication`: narrativa ejecutiva, fluidez formal argentina y comunicación gerencial.
- `ypf-bi-methodology`: OEE BI, DMAIC, Lean Six Sigma, VSM, FMEA, Kaizen, SMED, Poka-Yoke, Kata y 4P aplicados a BI.
- `ypf-powerbi-fabric-architecture`: arquitectura Power BI/Fabric desde PRD hasta operación.
- `ypf-frontend-quality`: QA visual, responsive, accesibilidad, consola, overflow y performance local.
- `ypf-tooling-curator`: selección gobernada de librerías, agentes y MCPs.
- `ypf-security-governance`: seguridad, privacidad, caché, CSP, dependencias y credenciales.
- `ypf-release-operations`: build, commit, GitHub, Vercel, caché y smoke test productivo.

### Agentes operativos

- `Executive Editor`
- `BI Methodology Architect`
- `Power BI Fabric Architect`
- `Frontend Quality Engineer`
- `Tooling Curator`
- `Security Governance Reviewer`
- `Release Manager`

Los agentes están definidos en `.codex/agents/` y el registro está en `.codex/agents/registry.json`.

### Tooling instalado como dependencia de desarrollo

- Playwright.
- axe-core para Playwright.
- ESLint.
- Stylelint.
- HTML Validate.
- Markdownlint.
- Prettier.
- Local link checker.

### MCP registry

El registro MCP está en `.mcp/registry.json`. Documenta Playwright MCP, Chrome DevTools MCP, Filesystem MCP, Memory MCP, GitHub MCP, Vercel MCP, Figma MCP, Fetch MCP y Sequential Thinking MCP. Estar registrado no equivale a estar instalado o activo. Los servidores con credenciales quedan marcados como `requires-token` y requieren aprobación explícita antes de activarse.

### Comandos de validación

- `npm run build`
- `npm run lint`
- `npm run qa:agents`
- `npm run qa:links`
- `npm run qa:e2e`
- `npm run quality`

## Fuentes primarias revisadas

- [Model Context Protocol servers](https://github.com/modelcontextprotocol/servers)
- [Playwright MCP](https://playwright.dev/docs/getting-started-mcp)
- [Chrome DevTools para agentes](https://developer.chrome.com/docs/devtools/agents/get-started)
- [GitHub MCP Server](https://github.com/github/github-mcp-server)
- [Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp)
- [Pruebas de accesibilidad con Playwright](https://playwright.dev/docs/accessibility-testing)
- [Paquetes npm de axe-core](https://github.com/dequelabs/axe-core-npm)
- [HTML Validate](https://html-validate.org/usage)
- [Instalación de Prettier](https://prettier.io/docs/install)
- [Introducción a ESLint](https://eslint.org/docs/latest/use/getting-started)

## Bases de datos y almacenamiento

- PostgreSQL / CrystalDBA
- Qdrant
- MongoDB
- SQLite
- DuckDB
- BigQuery
- Neon
- MySQL
- Airtable
- Snowflake
- DBUtils
- TiDB
- Supabase
- Amazon DynamoDB
- Amazon Aurora
- Amazon DocumentDB
- Amazon Neptune
- Amazon Keyspaces

## Infraestructura, nube y despliegue

- Kubernetes
- AWS MCP
- AWS EKS
- AWS ECS
- AWS Lambda
- AWS S3
- AWS IAM
- AWS CloudFormation
- Azure MCP
- Google Cloud MCP
- Cloudflare Workers
- Cloudflare KV
- Cloudflare R2
- Vercel MCP
- Docker
- Tinybird

## Herramientas de desarrollo y control de versiones

- GitHub
- GitLab
- Git local
- Phabricator
- Chrome DevTools
- Next.js DevTools
- XcodeBuildMCP
- Proxyman
- OpenRPC
- Postman
- marimo

## Búsqueda, web y scraping

- Puppeteer
- Playwright
- Exa Search
- Firecrawl
- Brave Search
- Kagi Search
- Fetch
- Tavily
- ArXiv
- Search1API
- Bright Data
- Browserbase

## Monitorización y observabilidad

- Sentry
- Grafana
- PagerDuty
- Raygun
- Metoro
- Amazon CloudWatch

## Productividad y colaboración

- Slack
- Atlassian Jira
- Atlassian Confluence
- Linear
- Notion
- Obsidian
- Apple Notes
- Todoist
- Google Drive
- Cal.com
- Superlist

## IA, machine learning y APIs externas

- OpenAI
- Perplexity
- HuggingFace Spaces
- LlamaCloud
- PiAPI
- Chronulus AI
- MiniMax
- Alpha Vantage
- Stripe
- CoinMarket

## Agentes de IA y entornos de desarrollo

### Agentes de terminal y código abierto

- Claude Code
- Aider
- OpenCode
- Cline
- pi.dev
- Kilo Code

### IDEs nativos de IA

- Cursor
- Windsurf / Cascade
- Devin Desktop
- GitHub Copilot / Copilot Agent HQ
- JetBrains AI
- Replit Agent
- Warp

### Asistentes cloud o específicos

- OpenAI Codex
- Amazon Q Developer
- Gemini Code Assist
- Snyk Code
- Qodo

## Sandboxing y ejecución aislada

### Tecnologias base

- Firecracker
- gVisor
- Kata Containers
- Kubernetes Namespaces
- Docker Containers

### Plataformas de sandboxing

- Modal
- E2B
- Daytona
- Blaxel
- Vercel Sandbox
- Cloudflare Sandboxes
- Bunnyshell / hopx.ai

## Frameworks y librerías tradicionales

### Java

- Spring Boot
- Spring Data JPA
- Hibernate

### Python, datos y machine learning

- JAX
- Diffrax
- Pymatgen
- Scanpy
- Daft
- Huey
- tqdm
- MLflow
- SHAP-IQ
- XGBoost
- PyTorch
- TensorRT-LLM

### Desarrollo web

- React
- Next.js
- Node.js
- TypeScript

## Criterio de uso

- Primero se define el PRD: qué problema resuelve, para quién y con qué métrica de éxito.
- Luego se redacta la Spec: qué herramientas se necesitan, por qué, cómo se integran y cómo se prueban.
- La instalación se decide caso por caso; aparecer en este inventario no justifica sumar una dependencia.
- Toda herramienta productiva debe tener owner, criterio de seguridad, rollback y observabilidad.
