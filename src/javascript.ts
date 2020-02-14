import rDefault from "./rules/default.json";
import rImport from "./rules/import.json";
import rSecurity from "./rules/security.json";
import rSonarJS from "./rules/sonarjs.json";

module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/recommended",
		"plugin:import/warnings",
		"plugin:security/recommended",
		"plugin:sonarjs/recommended",
	],
	"plugins": [
		"import",
		"security",
		"sonarjs",
	],
	"rules": {
		...rDefault,
		...rImport,
		...rSecurity,
		...rSonarJS,
	},
};
