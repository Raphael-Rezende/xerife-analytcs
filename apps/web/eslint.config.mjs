import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * ESLint Flat Config (ESLint v9+).
 *
 * - nextVitals / nextTs: presets do Next.js (inclui regras e plugins necessários)
 * - eslintConfigPrettier: desliga regras que entram em conflito com o Prettier
 *
 * Por que o Prettier fica por último?
 * Porque ele precisa "ganhar" na hora de desligar regras conflitantes.
 */
export default defineConfig([
  // Presets do Next (não espalhar com ... para evitar incompatibilidades de tipo)
  nextVitals,
  nextTs,

  // Ignorar artefatos gerados
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),

  // Deve ser o ÚLTIMO
  eslintConfigPrettier,
]);