import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

module.exports = {
	input: {
		"javascript": "src/javascript.ts",
		"react-javascript": "src/react-javascript.ts",
		"react-typescript": "src/react-typescript.ts",
		"typescript": "src/typescript.ts",
		"vue-javascript": "src/vue-javascript.ts",
		"vue-typescript": "src/vue-typescript.ts",
	},
	output: {
		dir: ".",
		entryFileNames: "[name].js",
		format: "cjs",
	},
	plugins: [
		json({
			compact: true,
			namedExports: false,
		}),
		typescript(),
		terser({
			compress: true,
			output: {
				comments: false,
			},
		}),
	],
};
