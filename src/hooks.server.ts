import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { imAdmin, imSuper } from '$lib/utils';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	/**
	 * a little helper that is written for convenience so that instead
	 * of calling `const { data: { session } } = await supabase.auth.getSession()`
	 * you just call this `await getSession()`
	 */
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	// PROTECT ROUTES
	const session = await event.locals.getSession();

	if (event.url.pathname.startsWith('/dashboard')) {
		if (!session) {
			// the user is not signed in
			throw redirect(303, '/');
		}
	}

	if (event.url.pathname.startsWith('/dashboard/_admin')) {
		if (!imAdmin(session?.user)) {
			console.log('You are not ADMIN!');
			throw redirect(303, '/dashboard');
		}
	}

	if (event.url.pathname.startsWith('/dashboard/_super')) {
		if (!imSuper(session?.user)) {
			console.log('You are not SUPER!');
			throw redirect(303, '/dashboard');
		}
	}

	const ret = resolve(event, {
		/**
		 * There´s an issue with `filterSerializedResponseHeaders` not working when using `sequence`
		 *
		 * https://github.com/sveltejs/kit/issues/8061
		 */
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});

	// LOG EVENTS HERE
	// console.log(event)
	if (import.meta.env.DEV) {
		// DISCARD LOCALHOST EVENTS
		if (event.url.toString().startsWith('http://localhost')) {
			return ret;
		}
	}

	// DISCARD _app events
	if (event.url.toString().includes('/_app/')) {
		return ret;
	}

	// if (event.request.method === 'POST') {
	//     const form_data = await event.request.formData()
	//     console.log(form_data)
	// }

	const res = await event.locals.supabase
		.from('tracking')
		.insert([{ user: session?.user, event: event.url }]);
	if (res.error) {
		console.log(res.error);
	}

	return ret;
};
