<script>
	import { supabaseClient } from '$lib/supabase';
	import { page } from '$app/stores';

	// export const prerender = false
	// export const ssr = false

	// console.log($page.data.session);

	let user=[]

	async function loadUser(id) {
		const { data, error } = await supabaseClient.from('profiles').select().eq('id', id).single();
		// console.log(data,error)
		user=data
		console.log(user)
	}

	$: if ($page.data.session.user) {
		loadUser($page.data.session.user.id)
  	}

</script>

{#if $page.data.session.user}

<div>
	{user.username}
</div>

<div>
	{$page.data.session.user.email}
</div>

<div>
	{$page.data.session.user.app_metadata.org} ({$page.data.session.user.app_metadata.role})
</div>


	
{/if}