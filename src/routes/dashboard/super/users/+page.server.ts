import { supabaseClient } from '$lib/server/supabase';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const { data: users } = await supabaseClient.auth.api.listUsers()

    return {
        users: users
    }

    throw error(404, 'Not found');
}