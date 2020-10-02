<p align="center">
	<img height="60px" width="60px" src="https://eslint.org/assets/img/favicon.512x512.png" />
	<h1 align="center">Personal ESLint configuration</h1>
</p>

<p align="center">
	<a href="https://www.npmjs.com/package/@valentineus/eslint-config">
		<img src="https://flat.badgen.net/npm/v/@valentineus/eslint-config" />
	</a>
	<a href="https://www.npmjs.com/package/@valentineus/eslint-config">
		<img src="https://flat.badgen.net/packagephobia/install/@valentineus/eslint-config" />
	</a>
	<a href="https://github.com/valentineus/eslint-config">
		<img src="https://flat.badgen.net/github/last-commit/valentineus/eslint-config" />
	</a>
</p>

## Configurations

* `javascript`
* `typescript`
* `react-javascript`
* `react-typescript`
* `vue-javascript`
* `vue-typescript`

## Example

* Install dependencies:

```shell script
npm install --save-dev @typescript-eslint/eslint-plugin \
                       @typescript-eslint/parser \
                       @valentineus/eslint-config \
                       eslint \
                       eslint-plugin-eslint-comments \
                       eslint-plugin-import \
                       eslint-plugin-jsx-a11y \
                       eslint-plugin-react \
                       eslint-plugin-react-hooks \
                       eslint-plugin-security \
                       eslint-plugin-sonarjs \
                       eslint-plugin-unicorn \
                       eslint-plugin-vue
 
# or
yarn add --dev @typescript-eslint/eslint-plugin \
               @typescript-eslint/parser \
               @valentineus/eslint-config \
               eslint \
               eslint-plugin-eslint-comments \
               eslint-plugin-import \
               eslint-plugin-jsx-a11y \
               eslint-plugin-react \
               eslint-plugin-react-hooks \
               eslint-plugin-security \
               eslint-plugin-sonarjs \
               eslint-plugin-unicorn \
               eslint-plugin-vue
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
