import rules from "./rules/eslint.json";

module.exports = {
	"extends": ["eslint:all"],
	"rules": { ...rules }
};
