import rJsxA11y from "./rules/jsx-a11y/default.json";
import rDefault from "./rules/react/default.json";

module.exports = {
	"extends": [
		"./javascript",
	],
	"plugins": [
		"jsx-a11y",
	],
	"rules": {
		...rDefault,
		...rJsxA11y,
	},
};
