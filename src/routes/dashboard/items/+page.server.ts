import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	const org = session?.user.app_metadata.org;

	return { items: [] };
};
