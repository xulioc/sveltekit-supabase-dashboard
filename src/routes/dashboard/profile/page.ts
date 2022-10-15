import { error } from '@sveltejs/kit';
import { supabaseClient } from '$lib/supabase';

import { page } from '$app/stores'

/** @type {import('./$types').PageLoad} */
export async function load({}) {

  console.log(page.data.session)

  // console.log(locals)

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