import eslint from "./rules/eslint.json";

module.exports = {
	"extends": ["eslint:all"],
	"rules": { ...eslint },
};
