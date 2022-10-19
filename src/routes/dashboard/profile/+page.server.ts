import { withAuth } from '@supabase/auth-helpers-sveltekit';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = withAuth((async ({ getSupabaseClient, session }) => {

    const  user  = getSupabaseClient().auth.user();
    // console.log(user);
    return user;

}))

/** @type {import('./$types').Actions} */
export const actions = {
    save: async (event: any) => {

        const form_data = await event.request.formData();
        const user_name= form_data.get('user_name');
        console.log('SAVING ', user_name)
       
    }
};
