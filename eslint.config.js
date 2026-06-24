import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".playwright-mcp/**", ".qa/**"],
  },
  js.configs.recommended,
  {
    files: ["app.js", "data/**/*.js", "scripts/**/*.mjs", "service-worker.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.serviceworker,
      },
    },
    rules: {
      "no-console": "off",
    },
  },
];
