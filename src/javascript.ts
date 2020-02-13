import rDefault from "./rules/default.json";
import rImport from "./rules/import.json";

module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/recommended",
		"plugin:import/warnings",
	],
	"plugins": ["import"],
	"rules": {
		...rDefault,
		...rImport,
	},
};
