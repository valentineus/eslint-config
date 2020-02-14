import rDefault from "./rules/vue/default.json";

module.exports = {
	"extends": [
		"./typescript",
		"plugin:vue/base",
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"plugin:vue/strongly-recommended",
	],
	"parser": "vue-eslint-parser",
	"parserOptions": {
		extraFileExtensions: [
			".vue",
		],
		parser: "@typescript-eslint/parser",
	},
	"plugins": ["vue"],
	"rules": { ...rDefault },
};
