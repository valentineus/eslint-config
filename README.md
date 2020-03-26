# Personal ESLint configuration

## Configurations

* `javascript`
* `typescript`
* `vue-javascript`
* `vue-typescript`

## Example

* Install dependencies:

```shell script
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser         \
                       @valentineus/eslint-config eslint eslint-plugin-eslint-comments    \
                       eslint-plugin-import eslint-plugin-security eslint-plugin-sonarjs  \
                       eslint-plugin-unicorn eslint-plugin-vue
 
# or
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser         \
               @valentineus/eslint-config eslint eslint-plugin-eslint-comments    \
               eslint-plugin-import eslint-plugin-security eslint-plugin-sonarjs  \
               eslint-plugin-unicorn eslint-plugin-vue
```

* Create config file:

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "@valentineus/eslint-config/vue-typescript"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "createDefaultProgram": true,
    "ecmaVersion": 2020,
    "project": "tsconfig.json",
    "sourceType": "module",
    "tsconfigRootDir": "."
  },
  "rules": {}
}
```

## License

[Apache-2.0](LICENSE.txt).
Copyright (c) [Valentin Popov](mailto:info@valentineus.link).
