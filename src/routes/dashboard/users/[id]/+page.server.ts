import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	console.log(params.id);
	return {};

	throw error(404, 'Not found');
}
