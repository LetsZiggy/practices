module.exports = function () {
	return function ({ addUtilities, theme }) {
		const opacityFill = (() => {
			const fillOpacity = {}

			for (const [ key, value ] of Object.entries(theme("opacity"))) {
				fillOpacity[`.fill-opacity-${ key }`] = {
					"fill-opacity": `${ value }`,
				}
			}

			return { ...fillOpacity }
		})()


		addUtilities({
			...opacityFill,
		}, [ "responsive" ])
	}
}
