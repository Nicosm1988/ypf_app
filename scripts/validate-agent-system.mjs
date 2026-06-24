import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const skillRoot = path.join(root, ".codex", "skills");
const agentRoot = path.join(root, ".codex", "agents");
const mcpRegistryPath = path.join(root, ".mcp", "registry.json");
const requiredSkills = [
  "ypf-executive-communication",
  "ypf-bi-methodology",
  "ypf-frontend-quality",
  "ypf-tooling-curator",
  "ypf-release-operations",
  "ypf-security-governance",
  "ypf-powerbi-fabric-architecture",
];
const requiredAgents = [
  "executive-editor.md",
  "bi-methodology-architect.md",
  "frontend-quality-engineer.md",
  "tooling-curator.md",
  "release-manager.md",
  "security-governance-reviewer.md",
  "powerbi-fabric-architect.md",
];

for (const skill of requiredSkills) {
  const skillText = await readFile(path.join(skillRoot, skill, "SKILL.md"), "utf8");
  assert(skillText.startsWith("---\n"), `${skill} debe tener frontmatter YAML.`);
  assert(skillText.includes(`name: ${skill}`), `${skill} debe declarar su name correcto.`);
  assert(!skillText.includes("TODO"), `${skill} no debe contener placeholders TODO.`);
  assert(skillText.includes("## Workflow"), `${skill} debe explicar su workflow.`);
  await readFile(path.join(skillRoot, skill, "agents", "openai.yaml"), "utf8");
}

const agentFiles = await readdir(agentRoot);
for (const agent of requiredAgents) {
  assert(agentFiles.includes(agent), `Falta agente ${agent}.`);
  const agentText = await readFile(path.join(agentRoot, agent), "utf8");
  assert(agentText.includes("## Mission"), `${agent} debe tener Mission.`);
  assert(agentText.includes("## Output"), `${agent} debe tener Output.`);
  assert(agentText.includes("## Quality Gates"), `${agent} debe tener Quality Gates.`);
}

const registry = JSON.parse(await readFile(path.join(agentRoot, "registry.json"), "utf8"));
assert(registry.agents.length === requiredAgents.length, "El registry de agentes debe listar todos los agentes.");

const mcpRegistry = JSON.parse(await readFile(mcpRegistryPath, "utf8"));
assert(mcpRegistry.servers.length >= 8, "El registry MCP debe listar servidores priorizados.");
assert(mcpRegistry.servers.some((server) => server.id === "playwright-mcp"), "Debe existir Playwright MCP.");
assert(mcpRegistry.servers.some((server) => server.id === "github-mcp"), "Debe existir GitHub MCP.");
assert(mcpRegistry.policy?.approvalRequiredForTokens === true, "Los MCP con tokens deben requerir aprobacion.");

console.log("Agent and MCP system OK");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
