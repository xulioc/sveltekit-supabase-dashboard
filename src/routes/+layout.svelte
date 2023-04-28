<script lang="ts">
	import '../app.postcss';

	// import { supabaseClient } from '$lib/supabase';
	// import { invalidate } from '$app/navigation';
	// import { onMount } from 'svelte';

	// onMount(() => {
	// 	const {
	// 		data: { subscription }
	// 	} = supabaseClient.auth.onAuthStateChange(() => {
	// 		invalidate('supabase:auth');
	// 	});

	// 	return () => {
	// 		subscription.unsubscribe();
	// 	};
	// });
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-J1TGFG0V29"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-J1TGFG0V29');
	</script>
</svelte:head>

<slot />
