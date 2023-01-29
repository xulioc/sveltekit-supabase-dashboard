const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui'), require('tailwind-scrollbar')],

	daisyui: {
		themes: ['light', 'dark', 'black', 'business']
	}
};

module.exports = config;
