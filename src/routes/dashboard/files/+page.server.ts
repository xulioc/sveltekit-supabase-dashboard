import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	const res = await supabase.storage.from('files').list(session?.user.app_metadata.org.name, {
		sortBy: { column: 'name', order: 'asc' }
	});
	// console.log(res.data);

	if (res.error) {
		fail(400, { error: 'Something went wrong!' });
	}

	const files_ = res.data?.filter((x) => x.id);
	const files = files_?.filter((x) => x.name != '.emptyFolderPlaceholder');
	// console.log(files);
	return { files };
};
