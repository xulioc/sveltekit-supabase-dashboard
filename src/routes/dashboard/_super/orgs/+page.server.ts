import { PUBLIC_DEMO_MODE } from '$env/static/public';
import { imSuper } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (imSuper(session?.user ?? null)) {
		// GET ALL ORGS
		const res = await supabase.from('orgs').select();
		if (res.data) {
			return { orgs: res.data };
		}
	}
};

export const actions: Actions = {
	create: async ({ request, locals: { supabase, getSession } }) => {
		// if (PUBLIC_DEMO_MODE == 'true') {
		//     return { error: "ORGANIZATION CREATION DISABLED IN DEMO MODE!" }
		// }

		const session = await getSession();
		const formData = await request.formData();
		const name = formData.get('name')?.toString();

		// INSERT ORG
		const res = await supabase
			.from('orgs')
			.upsert({ name, created_by: session?.user.email })
			.select('id')
			.single();

		if (res.error) {
			return fail(400, { error: res.error.details });
		}

		return { success: `Organization ${name} created succesfully` };
	},

	delete: async ({ request, locals: { supabase } }) => {
		if (PUBLIC_DEMO_MODE == 'true') {
			return { error: 'ORGANIZATION DELETE DISABLED IN DEMO MODE!' };
		}

		// console.log('deleting org')
		const form_data = await request.formData();
		const id = form_data.get('id')?.toString();

		// console.log(form_data)

		const res = await supabase.from('orgs').delete().eq('id', id);

		// console.log(res)

		if (res.error) {
			return fail(400, { error: res.error.message });
		}

		return { success: 'Organization deleted succesfully' };
	}
};
