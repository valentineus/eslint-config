import rDefault from "./rules/vue/default.json";
import rOverrides from "./rules/vue/overrides.json";

module.exports = {
	"extends": [
		"./javascript",
		"plugin:vue/base",
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"plugin:vue/strongly-recommended",
	],
	"overrides": [
		{
			files: [
				"*.vue",
			],
			rules: {
				...rOverrides,
			},
		},
	],
	"parser": "vue-eslint-parser",
	"parserOptions": {
		extraFileExtensions: [
			".vue",
		],
	},
	"plugins": ["vue"],
	"rules": {
		...rDefault,
	},
};
