import { supabaseAdminClient } from '$lib/server/supabase';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	const user = session?.user;
	return user;
};

export const actions: Actions = {
	save: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		const form_data = await request.formData();
		const org = form_data.get('org')?.toString();

		let res;
		res = await supabase
			.from('orgs')
			.upsert({ name: org, created_by: session?.user.email })
			.select('id')
			.single();
		if (res.error) {
			if (res.error.code == '23505')
				return fail(400, { error: 'Organization name already exists!' });
			else return fail(400, { error: res.error.details });
		}

		res = await supabaseAdminClient.auth.admin.updateUserById(session?.user.id ?? '', {
			app_metadata: { org: { id: res.data.id, name: org }, role: 'admin' }
		});

		if (res.error) {
			return fail(400, { error: res.error });
		}

		// REFRESH SESSION
		res = await supabase.auth.getSession();

		return { success: 'Organization created succesfully' };
	}
};
