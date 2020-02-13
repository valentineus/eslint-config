import rules from "./rules/default.json";

module.exports = {
	"extends": ["eslint:all"],
	"rules": { ...rules },
};
