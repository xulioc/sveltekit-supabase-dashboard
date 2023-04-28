import { imSuper } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request, locals: { supabase, getSession } }) => {
    const session = await getSession();

    if (imSuper(session?.user ?? null)) {
        // GET ALL ORGS
        const res = await supabase
            .from('orgs')
            .select()
        if (res.data) {
            return { orgs: res.data };
        }
    }
}

export const actions: Actions = {
    create: async ({ request, locals: { supabase, getSession } }) => {

        const session = await getSession();
        let res;

        // if (PUBLIC_DEMO_MODE == 'true') {
        //     return { error: true, message: "ORGANIZATION CREATION DISABLED IN DEMO MODE!" }
        // }

        const formData = await request.formData();
        const name = formData.get('name')?.toString()

        if (!name) {
            return fail(400, { error: "NAME ERROR" });
        }

        // CHECK IF ORG EXISTS
        res = await supabase
            .from('orgs')
            .select('id')
            .eq('name', name)
            .single()
        if (res.data) {
            return fail(400, { error: "ORG ALREADY EXISTS" });
        }

        // INSERT ORG
        res = await supabase
            .from('orgs')
            .upsert({ name, created_by: session?.user.email })
            .select('id')
            .single()

        if (res.error) {
            console.log(res.error)
            return fail(400)
        }

        return { success: `Organization ${name} created succesfully` }
    }
}