import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { session } = await getSupabase(event);
	if (session?.user) {
		throw redirect(303, '/dashboard');
	}
}

// https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#saving-and-deleting-the-session

export const actions: Actions = {

	signin: async (event) => {

		const { supabaseClient } = await getSupabase(event)
		const formData = await event.request.formData()
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		const to = formData.get('to') as string


		const { error } = await supabaseClient.auth.signInWithPassword({
			email,
			password,
		})

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: 'Invalid credentials.',
					values: {
						email,
					},
				})
			}
			return fail(500, {
				error: 'Server error. Try again later.',
				values: {
					email,
				},
			})
		}



		if (to) {
			throw redirect(303, to)
		} else {
			throw redirect(303, '/dashboard')
		}
	},

	signout: async (event) => {
		const { supabaseClient } = await getSupabase(event)
		await supabaseClient.auth.signOut()
		throw redirect(303, '/')
	},
};