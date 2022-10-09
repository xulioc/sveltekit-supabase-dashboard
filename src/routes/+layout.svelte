<script lang="ts">
	import '../app.postcss';

	// we need to make sure the supabase instance is initialized on the client
	import '$lib/supabase';
	import { startSupabaseSessionSync } from '@supabase/auth-helpers-sveltekit';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	// this sets up automatic token refreshing
	startSupabaseSessionSync({
		page,
		handleRefresh: () => invalidateAll()
	});
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
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
