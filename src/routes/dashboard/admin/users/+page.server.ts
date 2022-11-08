import type { PageServerLoad, Actions } from './$types';
import type { User } from '@supabase/supabase-js';

import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { supabaseAdminClient as supabaseClient } from '$lib/server/supabase';
import { error, invalid } from '@sveltejs/kit';
// import { redirect } from '@sveltejs/kit';

import { PUBLIC_DEMO_MODE } from '$env/static/public';


export const load: PageServerLoad = async (event) => {

    const { session } = await getSupabase(event);

    // console.log(session)
    const org = session?.user.app_metadata.org
    const role = session?.user.app_metadata.role
    // console.log(org)

    // GET USERS
    const { data: { users: users_all }, error: users_error } = await supabaseClient.auth.admin.listUsers()
    // console.log(users_all,users_error)

    // GET ORGS (MAYBE ONLY IF IM SUPER?)
    const { data: orgs, error: orgs_error } = await supabaseClient.from('orgs').select('id, name');
    // console.log(orgs,orgs_error)

    let users: User[] = []
    if (role === "super") {
        users = users_all
    } else {
        users = users_all.filter(user => user.app_metadata.org == org);
    }
    // console.log(users)

    return { users, orgs }

};

export const actions: Actions = {
    create: async (event) => {

        const { session } = await getSupabase(event);

        if (!session) {
            // the user is not signed in
            throw error(403, { message: 'Unauthorized' });
        }

        const form_data = await event.request.formData();
        const email = form_data.get('email');
        // console.log(email)
        const password = form_data.get('password');
        // console.log(password)

        const organization = form_data.get('organization');
        // console.log(organization)

        const role = form_data.get('role');
        // console.log(role)

        if (PUBLIC_DEMO_MODE=='true'){
            return { error: true, message: "USER CREATION DISABLED IN DEMO MODE!" }
        }

        const { data, error: create_error } = await supabaseClient.auth.admin.createUser({
            email, password, app_metadata: { org: organization, role: role }
        })
        // console.log(data, error)

        // console.log(data, create_error)
    },

    delete: async (event) => {

        if (PUBLIC_DEMO_MODE=='true'){
            return { error: true, message: "USER DELETION DISABLED IN DEMO MODE!" }
        }

        const form_data = await event.request.formData();
        const user = form_data.get('user');

        if (user){
            const { data, error } = await supabaseClient.auth.admin.deleteUser(user.toString())
        }else{
            throw error(403, { message: 'USER NOT FOUND' });

        }
    }
};