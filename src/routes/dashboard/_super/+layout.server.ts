import { imSuper } from '$lib/utils';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const { session } = await getSupabase(event);

	if (!imSuper(session?.user)) {
		console.log('UNAUTHORIZED');
		throw redirect(303, '/dashboard');
	}
};
