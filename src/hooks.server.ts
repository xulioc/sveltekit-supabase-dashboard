import '$lib/supabase';
// import { dev } from '$app/environment';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '@supabase/auth-helpers-sveltekit/server';
import { supabaseClient } from '$lib/supabase';

// TRACK USER EVENTS
/** @type {import('@sveltejs/kit').Handle} */
async function track({ event, resolve }) {
    // console.log("TRACK")
    // console.log(event)

    await supabaseClient.from('tracking').insert([
        { 'event': event }
    ])

    const response = await resolve(event);
    return response;
}

export const handle = sequence(auth(), track);