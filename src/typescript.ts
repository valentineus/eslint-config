import rDefault from "./rules/typescript/default.json";

module.exports = {
	"extends": [
		"./javascript",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/typescript",
	],
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint",
	],
	"rules": { ...rDefault },
};
