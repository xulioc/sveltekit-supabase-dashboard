import { PUBLIC_SITE_URL } from '$env/static/public';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	if (session?.user) {
		throw redirect(303, '/dashboard');
	}
};

// https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#saving-and-deleting-the-session

export const actions: Actions = {
	signin: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const to = formData.get('to') as string;

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: error.message,
					values: {
						email
					}
				});
			}
			return fail(500, {
				error: 'Server error. Try again later.',
				values: {
					email
				}
			});
		}

		if (to) {
			throw redirect(303, to);
		} else {
			throw redirect(303, '/dashboard');
		}
	},

	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signUp({
			email,
			password
		})

		if (error) {
			if (error instanceof AuthApiError) {
				return fail(400, {
					error: error.message,
					values: {
						email
					}
				});
			}
			return fail(500, {
				error: 'Server error. Try again later.',
			});
		}

		throw redirect(303, '/dashboard/startup');

	},

	// invite: async ({ request, locals: { supabase, getSession } }) => {
	// 	console.log("invite");
	// 	console.log(supabaseAdminClient.auth.admin)

	// 	const formData = await request.formData();
	// 	const email = formData.get('email') as string;

	// 	const { data: user, error } = await supabaseAdminClient.auth
	// 		.admin
	// 		.inviteUserByEmail(email)
	// 	console.log(error)

	// },

	forgot: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		console.log(PUBLIC_SITE_URL + '/auth?reset')
		const { error } = await supabase.auth.resetPasswordForEmail(email, {

			redirectTo: PUBLIC_SITE_URL + '/auth?reset',
		})

		if (error) {
			if (error instanceof AuthApiError) {
				return fail(400, {
					error: error.message,
				});
			}
			return fail(500, {
				error: 'Server error. Try again later.',
			});
		} else {
			return {
				message: "Reset link sent to email"
			}
		}

	},

	reset: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.updateUser({
			password
		})

		if (error) {
			if (error instanceof AuthApiError) {
				return fail(400, {
					error: error.message,
				});
			}
			return fail(500, {
				error: 'Server error. Try again later.',
			});
		}

		throw redirect(303, '/dashboard');

	},

	signout: async ({ locals: { supabase } }) => {
		await supabase.auth.signOut();
		throw redirect(303, '/');
	}
};
