const daisyui = require('daisyui');
const tailwind_scrollbar = require('tailwind-scrollbar');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [tailwind_scrollbar, daisyui]
};

module.exports = config;
