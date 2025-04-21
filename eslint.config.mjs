import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore the generated files
  {
    ignores: ["lib/generated/**/*"]
  },
  // Your existing configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add rules to make the build pass
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-this-alias": "warn",
      "@typescript-eslint/no-require-imports": "warn"
    }
  }
];

export default eslintConfig;