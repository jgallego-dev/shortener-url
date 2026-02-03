import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "*.config.js"],
  },
  eslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
        Bun: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  prettier,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    ignores: ["*.config.js"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Program",
          message:
            "JavaScript files are not allowed in this project. Use TypeScript (.ts/.tsx) instead.",
        },
      ],
    },
  },
];
