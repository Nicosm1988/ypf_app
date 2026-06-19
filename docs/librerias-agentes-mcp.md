# Librerias, agentes y MCPs para proyectos BI/IA

Este documento guarda el catalogo de herramientas que podemos evaluar e instalar cuando el proyecto lo requiera. No significa que todas deban estar instaladas ahora: funcionan como inventario tecnico para futuras specs, automatizaciones y pruebas.

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
