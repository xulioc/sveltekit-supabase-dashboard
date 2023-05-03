import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	const user = session?.user;
	return user;
};

export const actions: Actions = {
	save: async ({ request, locals: { supabase } }) => {
		const form_data = await request.formData();
		const user_name = form_data.get('user_name');

		const res = await supabase.auth.updateUser({
			data: { name: user_name }
		});

		if (res.error) {
			console.log(res.error);
		}
	}
};
