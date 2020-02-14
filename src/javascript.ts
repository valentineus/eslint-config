import rDefault from "./rules/default.json";
import rImport from "./rules/import.json";
import rSecurity from "./rules/security.json";
import rSonarJS from "./rules/sonarjs.json";
import rUnicorn from "./rules/unicorn.json";

module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/recommended",
		"plugin:import/warnings",
		"plugin:security/recommended",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/recommended",
	],
	"plugins": [
		"import",
		"security",
		"sonarjs",
		"unicorn",
	],
	"rules": {
		...rDefault,
		...rImport,
		...rSecurity,
		...rSonarJS,
		...rUnicorn,
	},
};
