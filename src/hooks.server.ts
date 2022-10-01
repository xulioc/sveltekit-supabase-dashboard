// we need to make sure the supabase instance is initialized on the server
import '$lib/supabase';
import { dev } from '$app/environment';
import { auth } from '@supabase/auth-helpers-sveltekit/server';

export const handle = auth();

// use the sequence helper if you have additional Handle methods
// import { sequence } from '@sveltejs/kit/hooks';
// export const handle = sequence(auth(), yourHandler);