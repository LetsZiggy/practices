"use strict"

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled: false,
		// preserveHtmlElements: false,
		// layers: [ "base", "components", "utilities" ],
		// mode: "layers",
		// content: [],
		// options: {
		/*
			css: [],
			extractors: [],
			fontFace: true,
			keyframes: true,
			variables: true,
			rejected: true,
			whitelist: [],
			whitelistPatterns: [],
			whitelistPatternsChildren: [],
		*/
		// },
	},
	target: "relaxed",
	prefix: "",
	important: false,
	separator: ":",
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		colors: {
			current: "currentColor",
			transparent: "transparent",

			black: "#000", // rgb(0, 0, 0)
			white: "#fff", // rgb(255, 255, 255)

			grey: {
				100: "#f7fafc", // rgb(247, 250, 252)
				200: "#edf2f7", // rgb(237, 242, 247)
				300: "#e2e8f0", // rgb(226, 232, 240)
				400: "#cbd5e0", // rgb(203, 213, 224)
				500: "#a0aec0", // rgb(160, 174, 192)
				600: "#718096", // rgb(113, 128, 150)
				700: "#4a5568", // rgb(74, 85, 104)
				800: "#2d3748", // rgb(45, 55, 72)
				900: "#1a202c", // rgb(26, 32, 44)
			},
			red: {
				100: "#fff5f5", // rgb(255, 245, 245)
				200: "#fed7d7", // rgb(254, 215, 215)
				300: "#feb2b2", // rgb(254, 178, 178)
				400: "#fc8181", // rgb(252, 129, 129)
				500: "#f56565", // rgb(245, 101, 101)
				600: "#e53e3e", // rgb(229, 62, 62)
				700: "#c53030", // rgb(197, 48, 48)
				800: "#9b2c2c", // rgb(155, 44, 44)
				900: "#742a2a", // rgb(116, 42, 42)
			},
			orange: {
				100: "#fffaf0", // rgb(255, 250, 240)
				200: "#feebc8", // rgb(254, 235, 200)
				300: "#fbd38d", // rgb(251, 211, 141)
				400: "#f6ad55", // rgb(246, 173, 85)
				500: "#ed8936", // rgb(237, 137, 54)
				600: "#dd6b20", // rgb(221, 107, 32)
				700: "#c05621", // rgb(192, 86, 33)
				800: "#9c4221", // rgb(156, 66, 33)
				900: "#7b341e", // rgb(123, 52, 30)
			},
			yellow: {
				100: "#fffff0", // rgb(255, 255, 240)
				200: "#fefcbf", // rgb(254, 252, 191)
				300: "#faf089", // rgb(250, 240, 137)
				400: "#f6e05e", // rgb(246, 224, 94)
				500: "#ecc94b", // rgb(236, 201, 75)
				600: "#d69e2e", // rgb(214, 158, 46)
				700: "#b7791f", // rgb(183, 121, 31)
				800: "#975a16", // rgb(151, 90, 22)
				900: "#744210", // rgb(116, 66, 16)
			},
			green: {
				100: "#f0fff4", // rgb(240, 255, 244)
				200: "#c6f6d5", // rgb(198, 246, 213)
				300: "#9ae6b4", // rgb(154, 230, 180)
				400: "#68d391", // rgb(104, 211, 145)
				500: "#48bb78", // rgb(72, 187, 120)
				600: "#38a169", // rgb(56, 161, 105)
				700: "#2f855a", // rgb(47, 133, 90)
				800: "#276749", // rgb(39, 103, 73)
				900: "#22543d", // rgb(34, 84, 61)
			},
			teal: {
				100: "#e6fffa", // rgb(230, 255, 250)
				200: "#b2f5ea", // rgb(178, 245, 234)
				300: "#81e6d9", // rgb(129, 230, 217)
				400: "#4fd1c5", // rgb(79, 209, 197)
				500: "#38b2ac", // rgb(56, 178, 172)
				600: "#319795", // rgb(49, 151, 149)
				700: "#2c7a7b", // rgb(44, 122, 123)
				800: "#285e61", // rgb(40, 94, 97)
				900: "#234e52", // rgb(35, 78, 82)
			},
			blue: {
				100: "#ebf8ff", // rgb(235, 248, 255)
				200: "#bee3f8", // rgb(190, 227, 248)
				300: "#90cdf4", // rgb(144, 205, 244)
				400: "#63b3ed", // rgb(99, 179, 237)
				500: "#4299e1", // rgb(66, 153, 225)
				600: "#3182ce", // rgb(49, 130, 206)
				700: "#2b6cb0", // rgb(43, 108, 176)
				800: "#2c5282", // rgb(44, 82, 130)
				900: "#2a4365", // rgb(42, 67, 101)
			},
			indigo: {
				100: "#ebf4ff", // rgb(235, 244, 255)
				200: "#c3dafe", // rgb(195, 218, 254)
				300: "#a3bffa", // rgb(163, 191, 250)
				400: "#7f9cf5", // rgb(127, 156, 245)
				500: "#667eea", // rgb(102, 126, 234)
				600: "#5a67d8", // rgb(90, 103, 216)
				700: "#4c51bf", // rgb(76, 81, 191)
				800: "#434190", // rgb(67, 65, 144)
				900: "#3c366b", // rgb(60, 54, 107)
			},
			purple: {
				100: "#faf5ff", // rgb(250, 245, 255)
				200: "#e9d8fd", // rgb(233, 216, 253)
				300: "#d6bcfa", // rgb(214, 188, 250)
				400: "#b794f4", // rgb(183, 148, 244)
				500: "#9f7aea", // rgb(159, 122, 234)
				600: "#805ad5", // rgb(128, 90, 213)
				700: "#6b46c1", // rgb(107, 70, 193)
				800: "#553c9a", // rgb(85, 60, 154)
				900: "#44337a", // rgb(68, 51, 122)
			},
			pink: {
				100: "#fff5f7", // rgb(255, 245, 247)
				200: "#fed7e2", // rgb(254, 215, 226)
				300: "#fbb6ce", // rgb(251, 182, 206)
				400: "#f687b3", // rgb(246, 135, 179)
				500: "#ed64a6", // rgb(237, 100, 166)
				600: "#d53f8c", // rgb(213, 63, 140)
				700: "#b83280", // rgb(184, 50, 128)
				800: "#97266d", // rgb(151, 38, 109)
				900: "#702459", // rgb(112, 36, 89)
			},
		},
		spacing: {
			px: "1px",
			0: "0",
			1: "0.25rem",
			2: "0.5rem",
			3: "0.75rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			8: "2rem",
			10: "2.5rem",
			12: "3rem",
			16: "4rem",
			20: "5rem",
			24: "6rem",
			32: "8rem",
			40: "10rem",
			48: "12rem",
			56: "14rem",
			64: "16rem",
		},
		backgroundColor: (theme) => theme("colors"),
		backgroundImage: {
			"none": "none",
			"gradient-to-t": "linear-gradient(to top, var(--gradient-color-stops))",
			"gradient-to-tr": "linear-gradient(to top right, var(--gradient-color-stops))",
			"gradient-to-r": "linear-gradient(to right, var(--gradient-color-stops))",
			"gradient-to-br": "linear-gradient(to bottom right, var(--gradient-color-stops))",
			"gradient-to-b": "linear-gradient(to bottom, var(--gradient-color-stops))",
			"gradient-to-bl": "linear-gradient(to bottom left, var(--gradient-color-stops))",
			"gradient-to-l": "linear-gradient(to left, var(--gradient-color-stops))",
			"gradient-to-tl": "linear-gradient(to top left, var(--gradient-color-stops))",
		},
		gradientColorStops: (theme) => theme("colors"),
		backgroundOpacity: (theme) => theme("opacity"),
		backgroundPosition: {
			"bottom": "bottom",
			"center": "center",
			"left": "left",
			"left-bottom": "left bottom",
			"left-top": "left top",
			"right": "right",
			"right-bottom": "right bottom",
			"right-top": "right top",
			"top": "top",
		},
		backgroundSize: {
			auto: "auto",
			cover: "cover",
			contain: "contain",
		},
		borderColor: (theme) => ({
			...theme("colors"),
			"default": theme("colors.grey.300", "currentColor"),
		}),
		borderOpacity: (theme) => theme("opacity"),
		borderRadius: {
			"none": "0",
			"sm": "0.125rem",
			"default": "0.25rem",
			"md": "0.375rem",
			"lg": "0.5rem",
			"full": "9999px",
		},
		borderWidth: {
			"default": "1px",
			"0": "0",
			"2": "2px",
			"4": "4px",
			"8": "8px",
		},
		boxShadow: {
			"xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
			"sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			"default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
			"md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			"lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			"xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
			"inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
			"outline": "0 0 0 3px rgba(66, 153, 225, 0.5)",
			"none": "none",
		},
		container: {},
		cursor: {
			"auto": "auto",
			"default": "default",
			"pointer": "pointer",
			"wait": "wait",
			"text": "text",
			"move": "move",
			"not-allowed": "not-allowed",
		},
		divideColor: (theme) => theme("borderColor"),
		divideOpacity: (theme) => theme("borderOpacity"),
		divideWidth: (theme) => theme("borderWidth"),
		fill: {
			current: "currentColor",
			transparent: "transparent", /* Added */
		},
		flex: {
			1: "1 1 0%",
			auto: "1 1 auto",
			initial: "0 1 auto",
			none: "none",
		},
		flexGrow: {
			"0": "0",
			"default": "1",
		},
		flexShrink: {
			"0": "0",
			"default": "1",
		},
		fontFamily: {
			sans: [
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: [
				"Georgia",
				"Cambria",
				'"Times New Roman"',
				"Times",
				"serif",
			],
			mono: [
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace",
			],
		},
		fontSize: {
			"xs": "0.75rem",
			"sm": "0.875rem",
			"base": "1rem",
			"lg": "1.125rem",
			"xl": "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
		},
		fontWeight: {
			hairline: "100",
			thin: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
		},
		height: (theme) => ({
			auto: "auto",
			...theme("spacing"),
			full: "100%",
			screen: "100vh",
		}),
		inset: (theme) => ({
			0: "0",
			auto: "auto",
			...theme("spacing"), /* Added */
		}),
		letterSpacing: {
			tighter: "-0.05em",
			tight: "-0.025em",
			normal: "0",
			wide: "0.025em",
			wider: "0.05em",
			widest: "0.1em",
		},
		lineHeight: {
			none: "1",
			tight: "1.25",
			snug: "1.375",
			normal: "1.5",
			relaxed: "1.625",
			loose: "2",
			3: "0.75rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
		},
		listStyleType: {
			none: "none",
			disc: "disc",
			decimal: "decimal",
		},
		margin: (theme, { negative }) => ({
			auto: "auto",
			...theme("spacing"),
			...negative(theme("spacing")),
		}),
		maxHeight: {
			full: "100%",
			screen: "100vh",
		},
		maxWidth: (theme, { breakpoints }) => ({
			"none": "none",
			"xs": "20rem",
			"sm": "24rem",
			"md": "28rem",
			"lg": "32rem",
			"xl": "36rem",
			"2xl": "42rem",
			"3xl": "48rem",
			"4xl": "56rem",
			"5xl": "64rem",
			"6xl": "72rem",
			"full": "100%",
			...breakpoints(theme("screens")),
		}),
		minHeight: {
			0: "0",
			full: "100%",
			screen: "100vh",
		},
		minWidth: {
			0: "0",
			full: "100%",
		},
		objectPosition: {
			"bottom": "bottom",
			"center": "center",
			"left": "left",
			"left-bottom": "left bottom",
			"left-top": "left top",
			"right": "right",
			"right-bottom": "right bottom",
			"right-top": "right top",
			"top": "top",
		},
		opacity: {
			0: "0",
			25: "0.25",
			50: "0.5",
			75: "0.75",
			100: "1",
		},
		order: {
			first: "-9999",
			last: "9999",
			none: "0",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
		},
		padding: (theme) => theme("spacing"),
		placeholderColor: (theme) => theme("colors"),
		placeholderOpacity: (theme) => theme("opacity"),
		space: (theme, { negative }) => ({
			...theme("spacing"),
			...negative(theme("spacing")),
		}),
		stroke: {
			current: "currentColor",
			transparent: "transparent", /* Added */
		},
		strokeWidth: {
			"0": "0",
			"1/2": "0.5", /* Added */
			"1": "1",
			"3/2": "1.5", /* Added */
			"2": "2",
		},
		textColor: (theme) => theme("colors"),
		textOpacity: (theme) => theme("opacity"),
		width: (theme) => ({
			"auto": "auto",
			...theme("spacing"),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			"1/5": "20%",
			"2/5": "40%",
			"3/5": "60%",
			"4/5": "80%",
			"1/6": "16.666667%",
			"2/6": "33.333333%",
			"3/6": "50%",
			"4/6": "66.666667%",
			"5/6": "83.333333%",
			"1/12": "8.333333%",
			"2/12": "16.666667%",
			"3/12": "25%",
			"4/12": "33.333333%",
			"5/12": "41.666667%",
			"6/12": "50%",
			"7/12": "58.333333%",
			"8/12": "66.666667%",
			"9/12": "75%",
			"10/12": "83.333333%",
			"11/12": "91.666667%",
			"full": "100%",
			"screen": "100vw",
		}),
		zIndex: {
			auto: "auto",
			0: "0",
			10: "10",
			20: "20",
			30: "30",
			40: "40",
			50: "50",
		},
		gap: (theme) => theme("spacing"),
		gridTemplateColumns: {
			none: "none",
			1: "repeat(1, minmax(0, 1fr))",
			2: "repeat(2, minmax(0, 1fr))",
			3: "repeat(3, minmax(0, 1fr))",
			4: "repeat(4, minmax(0, 1fr))",
			5: "repeat(5, minmax(0, 1fr))",
			6: "repeat(6, minmax(0, 1fr))",
			7: "repeat(7, minmax(0, 1fr))",
			8: "repeat(8, minmax(0, 1fr))",
			9: "repeat(9, minmax(0, 1fr))",
			10: "repeat(10, minmax(0, 1fr))",
			11: "repeat(11, minmax(0, 1fr))",
			12: "repeat(12, minmax(0, 1fr))",
		},
		gridColumn: {
			"auto": "auto",
			"span-1": "span 1 / span 1",
			"span-2": "span 2 / span 2",
			"span-3": "span 3 / span 3",
			"span-4": "span 4 / span 4",
			"span-5": "span 5 / span 5",
			"span-6": "span 6 / span 6",
			"span-7": "span 7 / span 7",
			"span-8": "span 8 / span 8",
			"span-9": "span 9 / span 9",
			"span-10": "span 10 / span 10",
			"span-11": "span 11 / span 11",
			"span-12": "span 12 / span 12",
		},
		gridColumnStart: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
			13: "13",
		},
		gridColumnEnd: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
			13: "13",
		},
		gridTemplateRows: {
			none: "none",
			1: "repeat(1, minmax(0, 1fr))",
			2: "repeat(2, minmax(0, 1fr))",
			3: "repeat(3, minmax(0, 1fr))",
			4: "repeat(4, minmax(0, 1fr))",
			5: "repeat(5, minmax(0, 1fr))",
			6: "repeat(6, minmax(0, 1fr))",
		},
		gridRow: {
			"auto": "auto",
			"span-1": "span 1 / span 1",
			"span-2": "span 2 / span 2",
			"span-3": "span 3 / span 3",
			"span-4": "span 4 / span 4",
			"span-5": "span 5 / span 5",
			"span-6": "span 6 / span 6",
		},
		gridRowStart: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
		},
		gridRowEnd: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
		},
		transformOrigin: {
			"center": "center",
			"top": "top",
			"top-right": "top right",
			"right": "right",
			"bottom-right": "bottom right",
			"bottom": "bottom",
			"bottom-left": "bottom left",
			"left": "left",
			"top-left": "top left",
		},
		scale: {
			0: "0",
			50: "0.5",
			75: "0.75",
			90: "0.9",
			95: "0.95",
			100: "1",
			105: "1.05",
			110: "1.1",
			125: "1.25",
			150: "1.5",
		},
		rotate: {
			"-180": "-180deg",
			"-90": "-90deg",
			"-45": "-45deg",
			"0": "0",
			"45": "45deg",
			"90": "90deg",
			"180": "180deg",
		},
		translate: (theme, { negative }) => ({
			...theme("spacing"),
			...negative(theme("spacing")),
			"-full": "-100%",
			"-1/2": "-50%",
			"1/2": "50%",
			"full": "100%",
		}),
		skew: {
			"-12": "-12deg",
			"-6": "-6deg",
			"-3": "-3deg",
			"0": "0",
			"3": "3deg",
			"6": "6deg",
			"12": "12deg",
		},
		transitionProperty: {
			"none": "none",
			"all": "all",
			"default": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
			"colors": "background-color, border-color, color, fill, stroke",
			"opacity": "opacity",
			"shadow": "box-shadow",
			"transform": "transform",
		},
		transitionTimingFunction: {
			"linear": "linear",
			"in": "cubic-bezier(0.4, 0, 1, 1)",
			"out": "cubic-bezier(0, 0, 0.2, 1)",
			"in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
		},
		transitionDuration: {
			75: "75ms",
			100: "100ms",
			150: "150ms",
			200: "200ms",
			300: "300ms",
			500: "500ms",
			700: "700ms",
			1000: "1000ms",
		},
		transitionDelay: {
			75: "75ms",
			100: "100ms",
			150: "150ms",
			200: "200ms",
			300: "300ms",
			500: "500ms",
			700: "700ms",
			1000: "1000ms",
		},
		animation: {
			none: "none",
			spin: "spin 1s linear infinite",
			ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
			pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			bounce: "bounce 1s infinite",
		},
		keyframes: {
			spin: {
				to: { transform: "rotate(360deg)" },
			},
			ping: {
				"75%, 100%": { transform: "scale(2)", opacity: "0" },
			},
			pulse: {
				"50%": { opacity: ".5" },
			},
			bounce: {
				"0%, 100%": {
					transform: "translateY(-25%)",
					animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
				},
				"50%": {
					transform: "none",
					animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
				},
			},
		},
	},
	variants: {
		"accessibility": [ "responsive", "focus" ],
		"alignContent": [ "responsive" ],
		"alignItems": [ "responsive" ],
		"alignSelf": [ "responsive" ],
		"appearance": [ "responsive" ],
		"backgroundAttachment": [ "responsive" ],
		"backgroundClip": [ "responsive" ],
		"backgroundColor": [ "responsive", "first", "last", "even", "odd", "hover", "focus", "disabled" ],
		"backgroundImage": [ "responsive" ],
		"gradientColorStops": [ "responsive", "hover", "focus", "disabled" ],
		"backgroundOpacity": [ "responsive", "hover", "focus", "disabled" ],
		"backgroundPosition": [ "responsive" ],
		"backgroundRepeat": [ "responsive" ],
		"backgroundSize": [ "responsive" ],
		"borderCollapse": [ "responsive" ],
		"borderColor": [ "responsive", "hover", "focus", "disabled" ],
		"borderOpacity": [ "responsive", "hover", "focus", "disabled" ],
		"borderRadius": [ "responsive" ],
		"borderStyle": [ "responsive" ],
		"borderWidth": [ "responsive" ],
		"boxShadow": [ "responsive", "hover", "focus", "disabled" ],
		"boxSizing": [ "responsive" ],
		"container": [ "responsive" ],
		"cursor": [ "responsive", "disabled" ],
		"display": [ "responsive" ],
		"divideColor": [ "responsive" ],
		"divideOpacity": [ "responsive" ],
		"divideStyle": [ "responsive" ],
		"divideWidth": [ "responsive" ],
		"fill": [ "responsive", "hover", "focus", "disabled" ],
		"flex": [ "responsive" ],
		"flexDirection": [ "responsive" ],
		"flexGrow": [ "responsive" ],
		"flexShrink": [ "responsive" ],
		"flexWrap": [ "responsive" ],
		"float": [ "responsive" ],
		"clear": [ "responsive" ],
		"fontFamily": [ "responsive" ],
		"fontSize": [ "responsive" ],
		"fontSmoothing": [ "responsive" ],
		"fontVariantNumeric": [ "responsive" ],
		"fontStyle": [ "responsive" ],
		"fontWeight": [ "responsive", "hover", "focus", "disabled" ],
		"height": [ "responsive" ],
		"inset": [ "responsive" ],
		"justifyContent": [ "responsive" ],
		"justifyItems": [ "responsive" ],
		"justifySelf": [ "responsive" ],
		"letterSpacing": [ "responsive" ],
		"lineHeight": [ "responsive" ],
		"listStylePosition": [ "responsive" ],
		"listStyleType": [ "responsive" ],
		"margin": [ "responsive" ],
		"maxHeight": [ "responsive" ],
		"maxWidth": [ "responsive" ],
		"minHeight": [ "responsive" ],
		"minWidth": [ "responsive" ],
		"objectFit": [ "responsive" ],
		"objectPosition": [ "responsive" ],
		"opacity": [ "responsive", "hover", "focus", "disabled" ],
		"order": [ "responsive" ],
		"outline": [ "responsive", "focus" ],
		"overflow": [ "responsive" ],
		"overscrollBehavior": [ "responsive" ],
		"padding": [ "responsive" ],
		"placeContent": [ "responsive" ],
		"placeItems": [ "responsive" ],
		"placeSelf": [ "responsive" ],
		"placeholderColor": [ "responsive", "focus" ],
		"placeholderOpacity": [ "responsive", "focus" ],
		"pointerEvents": [ "responsive" ],
		"position": [ "responsive" ],
		"resize": [ "responsive" ],
		"space": [ "responsive" ],
		"stroke": [ "responsive", "hover", "focus", "disabled" ],
		"strokeWidth": [ "responsive", "hover" ],
		"tableLayout": [ "responsive" ],
		"textAlign": [ "responsive" ],
		"textColor": [ "responsive", "first", "last", "even", "odd", "hover", "focus", "disabled" ],
		"textOpacity": [ "responsive", "hover", "focus", "disabled" ],
		"textDecoration": [ "responsive", "hover", "focus", "disabled" ],
		"textTransform": [ "responsive" ],
		"userSelect": [ "responsive" ],
		"verticalAlign": [ "responsive" ],
		"visibility": [ "responsive" ],
		"whitespace": [ "responsive" ],
		"width": [ "responsive" ],
		"wordBreak": [ "responsive" ],
		"zIndex": [ "responsive" ],
		"gap": [ "responsive" ],
		"gridAutoFlow": [ "responsive" ],
		"gridTemplateColumns": [ "responsive" ],
		"gridColumn": [ "responsive" ],
		"gridColumnStart": [ "responsive" ],
		"gridColumnEnd": [ "responsive" ],
		"gridTemplateRows": [ "responsive" ],
		"gridRow": [ "responsive" ],
		"gridRowStart": [ "responsive" ],
		"gridRowEnd": [ "responsive" ],
		"transform": [ "responsive" ],
		"transformOrigin": [ "responsive" ],
		"scale": [ "responsive", "hover", "focus", "disabled" ],
		"rotate": [ "responsive", "hover", "focus", "disabled" ],
		"translate": [ "responsive", "hover", "focus", "disabled" ],
		"skew": [ "responsive", "hover", "focus", "disabled" ],
		"transitionProperty": [ "responsive" ],
		"transitionTimingFunction": [ "responsive" ],
		"transitionDuration": [ "responsive" ],
		"transitionDelay": [ "responsive" ],
		"animation": [ "responsive" ],
	},
	corePlugins: {
		// box-alignment
		alignContent: false,
		alignItems: false,
		alignSelf: false,
		justifyContent: false,
		justifyItems: false,
		justifySelf: false,
		placeContent: false,
		placeItems: false,
		placeSelf: false,

		// grid
		gap: false,
		gridAutoFlow: false,
		gridColumn: false,
		gridColumnStart: false,
		gridColumnEnd: false,
		gridRow: false,
		gridRowStart: false,
		gridRowEnd: false,
		gridTemplateColumns: false,
		gridTemplateRows: false,
	},
	plugins: [
		require("tailwindcss-grid-plugin")({
			gridRows: [ 12, 14 ],
			gridCols: [ 12, 14 ],
			rowMultiples: 5,
			colMultiples: 1,
			gaps: [ 0 ],
		}),
		require("./tailwindcss-plugins/box-alignment")(),
		require("./tailwindcss-plugins/fill-opacity")(),
	],
}
