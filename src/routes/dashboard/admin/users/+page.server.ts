import { PUBLIC_DEMO_MODE } from '$env/static/public';
import { withAuth } from '@supabase/auth-helpers-sveltekit';
import { supabaseClient } from '$lib/server/supabase';
// import { redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = withAuth((async ({ session }) => {

    // console.log(session)
    const org = session.user?.app_metadata.org
    const role = session.user?.app_metadata.role
    // console.log(org)

    // GET USERS
    const { data: users_all, error: users_error } = await supabaseClient.auth.api.listUsers()
    // console.log(users_all,users_error)

    // GET ORGS (MAYBE ONLY IF IM SUPER?)
    const { data: orgs, error: orgs_error } = await supabaseClient.from('orgs').select('id, name');
    // console.log(orgs,orgs_error)

    let users = []
    if (role === "super") {
        users = users_all
    } else {
        users = users_all.filter(user => user.app_metadata.org == org)
    }
    // console.log(users)

    return { users, orgs }

}));

/** @type {import('./$types').Actions} */
export const actions = {
    create: async (event: any) => {

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

        const { data, error } = await supabaseClient.auth.api.createUser({
            email, password, app_metadata: { org: organization, role: role }
        })
        // console.log(data, error)

        if (error) {
            return { error: true, message: error.message }
        } else {
            return { error: false, message: `User ${data.email} created succesfully!` }
        }
    },

    delete: async (event: any) => {

        const form_data = await event.request.formData();
        const user = form_data.get('user');
        // console.log('DELETE USER ', user)

        if (PUBLIC_DEMO_MODE=='true'){
            return { error: true, message: "USER DELETION DISABLED IN DEMO MODE!" }
        }

        const { data, error } = await supabaseClient.auth.api.deleteUser(user)
        // console.log(data, error)

        if (error) {
            return { error: true, message: error.message }
        } else {
            return { error: false, message: `User deleted!` }
        }
    }
};