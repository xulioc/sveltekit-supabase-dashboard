import { supabaseAdminClient as supabaseClient } from '$lib/server/supabase';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const { data: users, error: e } = await supabaseClient.auth.admin.listUsers();

	console.log(users, e);

	return {
		users: users
	};

	throw error(404, 'Not found');
}
