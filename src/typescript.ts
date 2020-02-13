import overrides from "./rules/typescript/overrides.json";
import rules from "./rules/typescript/default.json";

module.exports = {
	"extends": ["./javascript"],
	"overrides": [
		{
			files: [
				"*.ts",
				"*.tsx",
			],
			rules: { ...overrides },
		},
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		tsconfigRootDir: __dirname,
	},
	"plugins": ["@typescript-eslint"],
	"rules": { ...rules },
};
