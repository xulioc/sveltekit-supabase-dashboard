const tailwind_typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');
const tailwind_scrollbar = require('tailwind-scrollbar');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [tailwind_typography, tailwind_scrollbar, daisyui],
	
	daisyui: {
		themes: ["light", "dark", "black", "business" ]},
};

module.exports = config;
