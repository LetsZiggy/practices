module.exports = function () {
	return function ({ addUtilities, theme }) {
		const itemsJustifyAlignPlace = (() => {
			const values = [ "start", "end", "center", "stretch" ]
			const justifyItems = {}
			const alignItems = {}
			const placeItems = {}

			for (const value of values) {
				justifyItems[`.justify-items-${ value }`] = {
					"justify-items": value,
				}

				alignItems[`.align-items-${ value }`] = {
					"align-items": value,
				}

				placeItems[`.place-items-${ value }`] = {
					"place-items": value,
				}
			}

			return { ...justifyItems, ...alignItems, ...placeItems }
		})()

		const contentJustifyAlignPlace = (() => {
			const values = [ "start", "end", "flexstart", "flexend", "center", "stretch", "space-around", "space-between", "space-evenly" ]
			const justifyContent = {}
			const alignContent = {}
			const placeContent = {}

			for (const value of values) {
				const name = value.includes("-")
					? value.split("-")[1]
					: value

				justifyContent[`.justify-content-${ name }`] = {
					"justify-content": value,
				}

				alignContent[`.align-content-${ name }`] = {
					"align-content": value,
				}

				placeContent[`.place-content-${ name }`] = {
					"place-content": value,
				}
			}

			return { ...justifyContent, ...alignContent, ...placeContent }
		})()

		const selfJustifyAlignPlace = (() => {
			const values = [ "start", "end", "center", "stretch" ]
			const justifySelf = {}
			const alignSelf = {}
			const placeSelf = {}

			for (const value of values) {
				justifySelf[`.justify-self-${ value }`] = {
					"justify-self": value,
				}

				alignSelf[`.align-self-${ value }`] = {
					"align-self": value,
				}

				placeSelf[`.place-self-${ value }`] = {
					"place-self": value,
				}
			}

			return { ...justifySelf, ...alignSelf, ...placeSelf }
		})()

		addUtilities({
			...itemsJustifyAlignPlace,
			...contentJustifyAlignPlace,
			...selfJustifyAlignPlace,
		}, [ "responsive" ])
	}
}
