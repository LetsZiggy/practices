"use strict"

module.exports = {
	opts: {
		destination: "./documentation", // -d ./out/
		encoding: "utf8", // -e utf8
		recurse: true, // -r
		template: "templates/default", // -t templates/default
		// "tutorials": "path/to/tutorials", // -u path/to/tutorials
	},
	tags: {
		allowUnknownTags: true,
		dictionaries: [
			"jsdoc",
			"closure",
		],
	},
	sourceType: "module",
	source: {
		// "include": [],
		exclude: [
			"documentation",
			"node_modules",
			"scripts",
		],
		includePattern: ".+\\.js(doc|x)?$",
		excludePattern: "(^|\\/|\\\\)_",
	},
	recurseDepth: 10,
	templates: {
		"cleverLinks": false,
		"monospaceLinks": false,
		"default": {
			outputSourceFiles: false,
			includeDate: true,
			useLongnameInNav: false,
			// layoutFile: "layout.tmpl",
			// staticFiles: {
			// 	include: [],
			// 	exclude: [],
			// 	includePattern: "",
			// 	excludePattern: "",
			// },
		},
	},
	plugins: [],
}
