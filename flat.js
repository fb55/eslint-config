import js from "@eslint/js";
import globals from "globals";
import packageJson from "eslint-plugin-package-json";
import { baseRules } from "./rules.js";

const packageJsonRuleOverrides = {
    "package-json/require-exports": "off",
    "package-json/valid-name": "off",
};

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: baseRules,
    },
    packageJson.configs.recommended,
    { files: ["**/package.json"], rules: packageJsonRuleOverrides },
];
