import { CLIOptions, build } from "aurelia-cli"
import gulp from "gulp"
import project from "../aurelia.json"
import sass from "gulp-sass"
import postcss from "gulp-postcss"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcssUrl from "postcss-url"
import tailwindcss from "tailwindcss"
import purgecss from "gulp-purgecss"
import through2 from "through2"

const env = CLIOptions.getEnvironment()

export default function processCSS () {
	return gulp
		.src(project.cssProcessor.source, {
			sourcemaps: true,
			since: gulp.lastRun(processCSS),
		})
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss([
			tailwindcss({ config: "tailwind.config.js" }),
			autoprefixer(),
			postcssUrl({ url: "inline", encodeType: "base64" }),
			cssnano(),
		]))
		.pipe((env === "prod")
			? purgecss({
				content: project.markupProcessor.source,
				css: project.cssProcessor.source,
				extractors: [
					{
						extractor: class TailwindExtractor {
							static extract (content) {
								return content.match(/[A-Za-z0-9-_:/]+/g) || []
							}
						},
						extensions: [ "css", "html" ],
					},
				],
			})
			: through2.obj(),
		)
		.pipe(build.bundle())
}
