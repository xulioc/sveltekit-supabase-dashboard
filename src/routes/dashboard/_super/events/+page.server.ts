import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	// GET EVENTS
	// console.log("EVENTS")
	const res = await supabase
		.from('tracking')
		.select()
		.order('timestamp', { ascending: false })
		.limit(50);
	// console.log(res)
	if (res.data) {
		return { events: res.data };
	}
};
