import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import oxlint from "eslint-plugin-oxlint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Disable ESLint rules that oxlint already covers
  oxlint.configs["flat/all"],
  {
    ignores: [".next/**", "out/**", "dist/**", "node_modules/**"],
  },
];

export default eslintConfig;
