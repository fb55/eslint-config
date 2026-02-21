export const commonTypeScriptRules = Object.freeze({
    curly: [2, "multi-line"],
    "@typescript-eslint/prefer-for-of": 0,
    "@typescript-eslint/member-ordering": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unnecessary-condition": 2,
    "@typescript-eslint/no-use-before-define": [
        2,
        {
            functions: false,
        },
    ],
    "@typescript-eslint/consistent-type-definitions": [2, "interface"],
    "@typescript-eslint/prefer-function-type": 2,
    "@typescript-eslint/no-unnecessary-type-arguments": 2,
    "@typescript-eslint/prefer-string-starts-ends-with": 2,
    "@typescript-eslint/prefer-readonly": 2,
    "@typescript-eslint/prefer-includes": 2,
    "@typescript-eslint/switch-exhaustiveness-check": 2,
    "@typescript-eslint/prefer-nullish-coalescing": 2,
});
