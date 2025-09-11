import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    excludedFiles: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "prisma/**",       // ignore tous les fichiers Prisma
      "generated/**",    // ignore les fichiers générés
      "**/*.prisma",
    ],
    rules: {
      // tes règles custom ici si besoin
    },
  },
];

export default eslintConfig;