# Librerias, agentes y MCPs para proyectos BI/IA

Este documento guarda el catalogo de herramientas que podemos evaluar e instalar cuando el proyecto lo requiera. No significa que todas deban estar instaladas ahora: funcionan como inventario tecnico para futuras specs, automatizaciones y pruebas.

## Sistema instalado en este repo

El portal ya cuenta con una capa local de calidad, agentes, skills y MCP registry para evolucionar con criterio productivo.

### Skills repo-locales

- `ypf-executive-communication`: narrativa ejecutiva, fluidez formal argentina y copy gerencial.
- `ypf-bi-methodology`: OEE BI, DMAIC, Lean Six Sigma, VSM, FMEA, Kaizen, SMED, Poka-Yoke, Kata y 4P aplicados a BI.
- `ypf-powerbi-fabric-architecture`: arquitectura Power BI/Fabric desde PRD hasta operacion.
- `ypf-frontend-quality`: QA visual, responsive, accesibilidad, consola, overflow y performance local.
- `ypf-tooling-curator`: seleccion gobernada de librerias, agentes y MCPs.
- `ypf-security-governance`: seguridad, privacidad, cache, CSP, dependencias y credenciales.
- `ypf-release-operations`: build, commit, GitHub, Vercel, cache y smoke test productivo.

### Agentes operativos

- `Executive Editor`
- `BI Methodology Architect`
- `Power BI Fabric Architect`
- `Frontend Quality Engineer`
- `Tooling Curator`
- `Security Governance Reviewer`
- `Release Manager`

Los agentes estan definidos en `.codex/agents/` y el registro esta en `.codex/agents/registry.json`.

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

El registro MCP esta en `.mcp/registry.json`. Incluye Playwright MCP, Chrome DevTools MCP, Filesystem MCP, Memory MCP, GitHub MCP, Vercel MCP, Figma MCP, Fetch MCP y Sequential Thinking MCP. Los servidores con credenciales quedan marcados como `requires-token` y requieren aprobacion explicita antes de activarse.

### Comandos de validacion

- `npm run build`
- `npm run lint`
- `npm run qa:agents`
- `npm run qa:links`
- `npm run qa:e2e`
- `npm run quality`

## Fuentes primarias revisadas

- Model Context Protocol servers: https://github.com/modelcontextprotocol/servers
- Playwright MCP: https://playwright.dev/docs/getting-started-mcp
- Chrome DevTools para agentes: https://developer.chrome.com/docs/devtools/agents/get-started
- GitHub MCP Server: https://github.com/github/github-mcp-server
- Vercel MCP: https://vercel.com/docs/agent-resources/vercel-mcp
- Playwright accessibility testing: https://playwright.dev/docs/accessibility-testing
- axe-core npm packages: https://github.com/dequelabs/axe-core-npm
- HTML Validate: https://html-validate.org/usage
- Prettier install: https://prettier.io/docs/install
- ESLint getting started: https://eslint.org/docs/latest/use/getting-started

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

## Busqueda, web y scraping

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

## Monitorizacion y observabilidad

- Sentry
- Grafana
- PagerDuty
- Raygun
- Metoro
- Amazon CloudWatch

## Productividad y colaboracion

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

### Agentes de terminal y codigo abierto

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

### Asistentes nube o especificos

- OpenAI Codex
- Amazon Q Developer
- Gemini Code Assist
- Snyk Code
- Qodo

## Sandboxing y ejecucion aislada

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

## Frameworks y librerias tradicionales

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

- Primero se define el PRD: que problema resuelve, para quien y con que metrica de exito.
- Luego se redacta la Spec: que herramientas se necesitan, por que, como se integran y como se prueban.
- La instalacion se decide caso por caso, evitando agregar dependencias solo por entusiasmo tecnico.
- Toda herramienta productiva debe tener owner, criterio de seguridad, rollback y observabilidad.
