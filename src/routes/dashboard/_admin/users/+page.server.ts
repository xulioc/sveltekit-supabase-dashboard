import type { User } from '@supabase/supabase-js';
import type { Actions, PageServerLoad } from './$types';

import { supabaseAdminClient as supabaseClient } from '$lib/server/supabase';
import { fail } from '@sveltejs/kit';


export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	const org = session?.user.app_metadata.org;

	const res = await supabaseClient.auth.admin.listUsers();
	// console.log(res.data.users)
	let users: User[] = [];
	users = res.data.users.filter((user) => user.app_metadata.org.id == org.id);

	// console.log(users)
	return { users };
};

export const actions: Actions = {
	create: async ({ request, locals: { getSession } }) => {
		const session = await getSession();
		const form_data = await request.formData();
		const email = form_data.get('email')?.toString();
		const role = form_data.get('role')?.toString();
		const password = form_data.get('password')?.toString();

		if (role == 'super') {
			return fail(400, { error: "You are kidding me?" })
		}

		// console.log(session)
		const org = session.user.app_metadata.org;

		const res = await supabaseClient.auth.admin.createUser({
			email,
			password,
			app_metadata: { org, role }
		});
		console.log(res)

		if (res.error) {
			return fail(400, { error: res.error.message })
		}

		return ({ success: "User created succesfully" })
	},

	delete: async ({ request }) => {

		const form_data = await request.formData();
		const id = form_data.get('id')?.toString();

		// TODO PREVENT DELETING USERS FROM OTHER ORGS

		if (id) {
			const res = await supabaseClient.auth.admin.deleteUser(id);
			if (res.error) {
				// console.log(res)
				return fail(400, { error: res.error.message })

			}
		} else {
			return fail(400, { error: "Invalid data" })
		}
		return ({ success: "User deleted succesfully" })
	}
};
