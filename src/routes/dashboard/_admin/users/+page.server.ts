import type { User } from '@supabase/supabase-js';
import type { Actions, PageServerLoad } from './$types';

import { PUBLIC_DEMO_MODE } from '$env/static/public';
import { supabaseAdminClient as supabaseClient } from '$lib/server/supabase';
import { roleAdmin, roleSuper } from '$lib/utils';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	const org = session?.user.app_metadata.org;

	const res = await supabaseClient.auth.admin.listUsers();
	let users: User[] = [];
	let orgs = [];
	// console.log(session.user)
	if (roleAdmin(session)) {
		users = res.data.users;

		const r = await supabase.from('orgs').select('id,name');
		orgs = r.data;
		// console.log(orgs)

		// ONLY GET ORGS FROM ALREADY CREATED USERS
		// orgs = users.map(x => x.app_metadata.org.name);
		// // console.log(orgs)
		// orgs = orgs.filter((x, i, a) => a.indexOf(x) == i)
		// orgs = orgs.filter((x) => x)
		// // console.log(orgs)
	} else {
		users = res.data.users.filter((user) => user.app_metadata.org.id == org.id);
	}
	return { users, orgs };
};

export const actions: Actions = {
	create: async ({ request, locals: { getSession } }) => {
		const session = await getSession();
		const form_data = await request.formData();
		const email = form_data.get('email')?.toString();
		const role = form_data.get('role')?.toString();
		const password = form_data.get('password')?.toString();
		let org: any | undefined;

		if (roleSuper(session)) {
			const tmp = JSON.parse(form_data.get('org')?.toString() ?? '');
			org = { id: tmp.id, name: tmp.name };
			console.log(org);
		} else {
			if (role == 'super') {
				return fail(400, { error: 'You are kidding me?' });
			}
			org = session?.user.app_metadata.org;
		}

		// console.log(session)

		const res = await supabaseClient.auth.admin.createUser({
			email,
			password,
			app_metadata: { org, role },
			email_confirm: true
		});
		// console.log(res)

		if (res.error) {
			return fail(400, { error: res.error.message });
		}

		return { success: 'User created succesfully' };
	},

	delete: async ({ request }) => {
		if (PUBLIC_DEMO_MODE == 'true') {
			return fail(400, { error: 'USER DELETION DISABLED IN DEMO MODE!' });
		}

		const form_data = await request.formData();
		const id = form_data.get('id')?.toString();

		// TODO PREVENT DELETING USERS FROM OTHER ORGS

		if (id) {
			const res = await supabaseClient.auth.admin.deleteUser(id);
			if (res.error) {
				// console.log(res)
				return fail(400, { error: res.error.message });
			}
		} else {
			return fail(400, { error: 'Invalid data' });
		}
		return { success: 'User deleted succesfully' };
	}
};
