import type { PageServerLoad, Actions } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: PageServerLoad = async (event) => {

    const { session } = await getSupabase(event);
    const user = session?.user;
    // console.log(user);
    return user;

}

export const actions: Actions = {
    save: async (event: any) => {

        const { session, supabaseClient } = await getSupabase(event);

        const form_data = await event.request.formData();
        const user_name = form_data.get('user_name');
        console.log('SAVING ', user_name)

        const {data, error} = await supabaseClient.auth.updateUser({data:{name:user_name}})
        console.log(data, error)

    }
};
