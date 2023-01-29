<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { Jumper } from 'svelte-loading-spinners';

	import { applyAction, type SubmitFunction } from '$app/forms';
	import { invalidate } from '$app/navigation';

	import DashboardMenu from '$lib/components/dashboard/DashboardMenu.svelte';
	import DashboardNavBar from '$lib/components/dashboard/DashboardNavBar.svelte';
	import DemoUserNotice from '$lib/components/DemoMode/DemoUserNotice.svelte';
	import { Toast } from '$lib/components/Toast';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});

	// console.log("LAYOUT...")

	const logout: SubmitFunction = () => {
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await invalidate('supabase:auth');
			} else {
				await applyAction(result);
			}
		};
	};

	let menu = 'home';

	const role = $page.data.session.user.app_metadata.role;
	const org = $page.data.session.user.app_metadata.org;

	let role_color = '';
	if (role === 'admin') role_color = 'stroke-warning';
	if (role === 'super') role_color = 'stroke-accent';

	// console.log(role);
	// console.log(PUBLIC_DEMO_MODE);
</script>

<section id="body" class="flex flex-row h-screen">
	<Toast />
	<DashboardMenu />

	<div class="flex flex-col w-full">
		<DashboardNavBar />

		<!-- CONTENT -->
		<div class="w-full h-full p-5 overflow-auto">
			<DemoUserNotice />

			{#if $navigating}
				<div class="flex h-full items-center justify-center">
					<Jumper size="60" unit="px" duration="1s" />
				</div>
			{:else}
				<slot />
			{/if}
		</div>
	</div>
</section>
