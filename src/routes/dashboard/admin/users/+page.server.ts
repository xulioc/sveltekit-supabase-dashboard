import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/supabase';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const result = await fetch('https://dummyjson.com/users');
    // const users = await result.json();

    const { data, error } = await supabaseClient.auth.api.listUsers()

    console.log(data, error)



    throw error(404, 'Not found');
}