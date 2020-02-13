import rDefault from "./rules/typescript/default.json";
import rOverrides from "./rules/typescript/overrides.json";

module.exports = {
	"extends": ["./javascript"],
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
	"parserOptions": {
		tsconfigRootDir: __dirname,
	},
	"plugins": ["@typescript-eslint"],
	"rules": { ...rDefault },
};
