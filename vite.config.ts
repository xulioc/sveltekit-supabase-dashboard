import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],

	// ALLOW VITE SERVE README.md
	// https://vitejs.dev/config/server-options.html#server-fs-allow
	server: {
		fs: {
			allow: [
				// '/README.md',
			]
		}
	},

	// PREVENT CHARTS.JS ERROR
	// ssr: {
	// 	noExternal: ['chart.js']
	// }
};

export default config;
