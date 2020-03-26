import rComments from "./rules/eslint-comments/default.json";
import rImport from "./rules/import/default.json";
import rDefault from "./rules/javascript/default.json";
import rSecurity from "./rules/security/default.json";
import rSonarJS from "./rules/sonarjs/default.json";
import rUnicorn from "./rules/unicorn/default.json";

module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:eslint-comments/recommended",
		"plugin:import/errors",
		"plugin:import/recommended",
		"plugin:import/warnings",
		"plugin:security/recommended",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/recommended",
	],
	"plugins": [
		"eslint-comments",
		"import",
		"security",
		"sonarjs",
		"unicorn",
	],
	"rules": {
		...rComments,
		...rDefault,
		...rImport,
		...rSecurity,
		...rSonarJS,
		...rUnicorn,
	},
};
