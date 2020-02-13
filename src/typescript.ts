import rDefault from "./rules/typescript/default.json";
import rOverrides from "./rules/typescript/overrides.json";

module.exports = {
	"extends": [
		"./javascript",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/typescript",
	],
	"overrides": [
		{
			files: [
				"*.ts",
				"*.tsx",
			],
			rules: { ...rOverrides },
		},
	],
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint",
		"import",
	],
	"rules": { ...rDefault },
};
