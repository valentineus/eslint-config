import rDefault from "./rules/default.json";
import rImport from "./rules/import.json";
import rSecurity from "./rules/security.json";

module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/recommended",
		"plugin:import/warnings",
		"plugin:security/recommended",
	],
	"plugins": [
		"import",
		"security",
	],
	"rules": {
		...rDefault,
		...rImport,
		...rSecurity,
	},
};
