import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals: { supabase, getSession } }) => {

	try {

		const result = await fetch('https://dummyjson.com/users');
		const users = await result.json();
		if (users) {
			return users;
		}
	}
	catch {
		throw error(404, 'SOMETHING WRING');
	}

	throw error(404, 'Not found');
}
