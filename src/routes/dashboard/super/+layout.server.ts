import type { LayoutServerLoad } from './$types';
import { withAuth } from '@supabase/auth-helpers-sveltekit';
import { redirect, error } from '@sveltejs/kit';

export const load:LayoutServerLoad = withAuth((async ({ session }) => {

    if (!session) {
        console.log("SESSION NOT FOUND")
        throw redirect(303, '/');
    }

    if (!session.user) {
        console.log("USER NOT FOUND")
        throw redirect(303, '/');
    }

    // console.log(session.user.app_metadata)

    if (session.user.app_metadata.role !== 'super') {
        console.log("UNAUTHORIZED")
        throw error(403, 'UNAUTHORIZED');
    }

}));
