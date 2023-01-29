import type { LayoutServerLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);

	if (!session) {
		console.log('SESSION NOT FOUND');
		throw redirect(303, '/');
	}

	if (!session.user) {
		console.log('USER NOT FOUND');
		throw redirect(303, '/');
	}

	// console.log(session.user.app_metadata)

	if (session.user.app_metadata.role !== 'super') {
		console.log('UNAUTHORIZED');
		throw redirect(303, '/dashboard');
	}
};
