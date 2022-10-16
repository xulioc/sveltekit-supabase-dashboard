import type { PageLoad } from './$types';
import { withAuth } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = withAuth(async ({ getSupabaseClient, session }) => {

  if (!session.user) {
    throw redirect(303, '/');
  }

  const { data: orgs, error: e } = await getSupabaseClient()
    .from('orgs')
    .select()

  // console.log(orgs, e)

  return { orgs: orgs };

});