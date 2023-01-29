import { supabaseClient } from '$lib/supabase';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async({ request, url }) => {
	// async default({ request, url }) {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (!email) {
			return fail(400, {
				error: 'Please enter your email'
			});
		}
		if (!password) {
			return fail(400, {
				error: 'Please enter a password'
			});
		}

		const { data, error } = await supabaseClient.auth.api.signUpWithEmail(email, password, {
			redirectTo: url.origin
		});

		if (error || !data) {
			if (error?.status === 400) {
				return fail(400, {
					error: 'invalid credentials'
				});
			}
			return fail(500, {
				error: 'Server error. Try again later.'
			});
		}

		return { success: true };
	}
} satisfies Actions;
