<script lang="ts">
	import { navigating } from '$app/stores';
	import DashboardMenu from '$lib/components/dashboard/DashboardMenu.svelte';
	import DashboardNavBar from '$lib/components/dashboard/DashboardNavBar.svelte';
	import DemoUserNotice from '$lib/components/DemoMode/DemoUserNotice.svelte';
	import { Toast } from '$lib/components/Toast';
	import { onMount } from 'svelte';
	import { Jumper } from 'svelte-loading-spinners';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<section id="body" class="flex flex-row h-screen">
	<DashboardMenu />
	<Toast />

	<div class="flex flex-col w-full">
		<DashboardNavBar />
		<!-- CONTENT -->
		<div class="w-full h-full p-5 overflow-auto">
			{#if $navigating}
				<div class="flex h-full items-center justify-center">
					<Jumper size="120" unit="px" duration="1s" color="#FFFFFF" />
				</div>
			{:else}
				<slot />
			{/if}
		</div>
		<div class="w-full px-5 overflow-none">
			<DemoUserNotice />
		</div>
	</div>
</section>
