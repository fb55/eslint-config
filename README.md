# @feedic/eslint-config

Shared ESLint flat-config baseline for my libraries.

## Install

```sh
npm install --save-dev eslint @feedic/eslint-config
```

If you use TypeScript rules from `@feedic/eslint-config/typescript`, also install:

```sh
npm install --save-dev typescript-eslint
```

## Usage

```js
import feedicConfig from "@feedic/eslint-config";
import { commonTypeScriptRules } from "@feedic/eslint-config/typescript";

export default [
    ...feedicConfig,
    {
        files: ["**/*.{c,m,}ts"],
        rules: commonTypeScriptRules,
    },
];
```
