import rDefault from "./rules/default.json";
import rImport from "./rules/import.json";

module.exports = {
	"extends": ["eslint:all"],
	"rules": {
		...rDefault,
		...rImport,
	},
};
