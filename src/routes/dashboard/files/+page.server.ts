import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	const res = await supabase.storage.from('TEST').list(session?.user.app_metadata.org.name, {
		sortBy: { column: 'name', order: 'asc' }
	});

	if (res.error) {
		fail(400, { error: 'something went wrong!' });
	}
	console.log(res.data);
	const files = res.data?.filter((x) => x.id);
	return { files };
};
