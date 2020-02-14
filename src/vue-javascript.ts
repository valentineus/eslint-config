import rDefault from "./rules/vue/default.json";

module.exports = {
	"extends": [
		"./javascript",
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
	},
	"plugins": ["vue"],
	"rules": { ...rDefault },
};
