import { deleteSession } from '@supabase/auth-helpers-sveltekit/server';
import { redirect, Actions } from '@sveltejs/kit';

export const actions: Actions = {
	async default({ cookies }) {
		console.log("LOGOUT...")
		deleteSession(cookies);
		throw redirect(303, '/');
	}
};
