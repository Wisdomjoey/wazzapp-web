/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				shadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.2)",
			},
			animation: {
				play: "play 5s linear",
			},
		},
		colors: {
			primary: "rgb(var(--primary) / <alpha-value>)",
			primaryDark: "rgb(var(--primary-dark) / <alpha-value>)",
			secondary: "rgb(var(--secondary) / <alpha-value>)",
			secondaryLight: "rgb(var(--secondary-light) / <alpha-value>)",
			secondaryBorder: "rgb(var(--secondary-border) / <alpha-value>)",
			darker: "rgb(var(--darker) / <alpha-value>)",
		},
		keyframes: {
			play: {
				"0%": {
					width: "0px",
				},
				"100%": {
					width: "100%",
				},
			},
		},
	},
	plugins: [],
};

