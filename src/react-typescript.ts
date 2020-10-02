import rJsxA11y from "./rules/jsx-a11y/default.json";
import rReactHooks from "./rules/react-hooks/default.json";
import rDefault from "./rules/react/default.json";

module.exports = {
	"extends": [
		"./typescript",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
	],
	"parserOptions": {
		ecmaFeatures: {
			jsx: true,
		},
	},
	"plugins": [
		"jsx-a11y",
		"react",
		"react-hooks",
	],
	"rules": {
		...rDefault,
		...rJsxA11y,
		...rReactHooks,
	},
};
