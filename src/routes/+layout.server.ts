import type { LayoutServerLoad } from './$types';

// /** @type {import('./$types').LayoutServerLoad} */
export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		session: locals.session
	};
};