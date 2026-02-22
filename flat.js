import js from "@eslint/js";
import globals from "globals";
import eslintPluginN from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { baseRules } from "./rules.js";

const requireJsdocForFileExports = [
    2,
    {
        publicOnly: {
            ancestorsOnly: true,
            esm: true,
            cjs: true,
            window: false,
        },
        require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: true,
            ClassExpression: false,
            FunctionDeclaration: true,
            FunctionExpression: false,
            MethodDefinition: false,
        },
        contexts: [
            "ExportNamedDeclaration > TSDeclareFunction",
            "ExportNamedDeclaration > TSEnumDeclaration",
            "ExportNamedDeclaration > TSInterfaceDeclaration",
            "ExportNamedDeclaration > TSTypeAliasDeclaration",
            "ExportNamedDeclaration > VariableDeclaration",
            "ExportDefaultDeclaration > ArrowFunctionExpression",
            "ExportDefaultDeclaration > ClassExpression",
            "ExportDefaultDeclaration > FunctionExpression",
        ],
    },
];

const requireParamDescriptionForFileExports = [
    2,
    {
        contexts: [
            "ExportNamedDeclaration > FunctionDeclaration",
            "ExportNamedDeclaration > TSDeclareFunction",
            "ExportDefaultDeclaration > FunctionDeclaration",
            "ExportDefaultDeclaration > FunctionExpression",
            "ExportDefaultDeclaration > ArrowFunctionExpression",
        ],
    },
];

const jsdocExportFiles = ["**/*.{c,m,}{j,t}s"];

const jsdocExportIgnores = [
    "**/*.{test,spec}.{c,m,}{j,t}s",
    "**/*.config.{c,m,}{j,t}s",
    "**/{__fixtures__,__tests__,fixtures,test,tests,website}/**",
];

const jsdocRuleOverrides = {
    "jsdoc/require-param-description": "off",
    "jsdoc/require-jsdoc": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/require-returns-check": "off",
};

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
    {
        plugins: { jsdoc: eslintPluginJsdoc },
        rules: {
            ...eslintPluginJsdoc.configs["flat/recommended-typescript"].rules,
            ...jsdocRuleOverrides,
        },
        settings: {
            jsdoc: {
                mode: "typescript",
                tagNamePreference: { category: "category" },
            },
        },
    },
    {
        files: jsdocExportFiles,
        ignores: jsdocExportIgnores,
        rules: {
            "jsdoc/require-jsdoc": requireJsdocForFileExports,
            "jsdoc/require-param-description":
                requireParamDescriptionForFileExports,
        },
    },
    packageJson.configs.recommended,
    { files: ["**/package.json"], rules: packageJsonRuleOverrides },
];
