import type { PageLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);

	if (!session?.user) {
		throw redirect(303, '/');
	}

	const { data: orgs, error: e } = await supabaseClient.from('orgs').select();

	// console.log(orgs, e)

	return { orgs: orgs };
};
