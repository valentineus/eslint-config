import rDefault from "./rules/typescript/default.json";

module.exports = {
	"extends": [
		"./javascript",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/typescript",
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		createDefaultProgram: true,
	},
	"plugins": [
		"@typescript-eslint",
	],
	"rules": { ...rDefault },
};
