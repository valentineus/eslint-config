import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";

module.exports = {
	input: {
		javascript: "src/javascript.ts",
		typescript: "src/typescript.ts",
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
			sourcemap: false,
		}),
	],
};
