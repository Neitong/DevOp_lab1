import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["coverage/", "node_modules/", ".pnp.*"],
  },
  js.configs.recommended,
  {
    rules: {
      "no-console": "off",
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha
      },
    },
  },
  {
    files: ["src/test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];