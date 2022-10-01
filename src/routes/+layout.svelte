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

<slot />
