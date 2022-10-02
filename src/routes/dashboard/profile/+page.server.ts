import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/supabase';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {

  const user_id = locals.session.user.id
  // console.log(user_id)

  const { data, error } = await supabaseClient
    .from('profiles')
    .select()
    .eq('id', user_id)
    .single()

  // console.log(data)

  return { 'profile': data };

  throw error(404, 'Not found');
}