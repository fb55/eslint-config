import js from "@eslint/js";
import globals from "globals";
import eslintPluginN from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { baseRules } from "./rules.js";

const packageJsonRuleOverrides = {
    "package-json/require-exports": "off",
    "package-json/valid-name": "off",
};

const sharedRuleOverrides = {
    "unicorn/no-null": "off",
    "unicorn/prefer-add-event-listener": "off",
    "unicorn/prefer-at": "off",
    "unicorn/prefer-code-point": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-switch": [2, { emptyDefaultCase: "do-nothing-comment" }],
    "unicorn/prefer-string-replace-all": "off",
    "unicorn/prefer-string-slice": "off",
};

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: baseRules,
    },
    eslintPluginN.configs["flat/recommended"],
    eslintPluginUnicorn.configs.recommended,
    { rules: sharedRuleOverrides },
    packageJson.configs.recommended,
    { files: ["**/package.json"], rules: packageJsonRuleOverrides },
];
