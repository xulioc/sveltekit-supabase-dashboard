<script lang="ts">
	import { page } from '$app/stores';
	import { isAdmin, isSuper, userColor } from '$lib/utils';
	import { LogOutIcon, SettingsIcon, UserIcon } from 'svelte-feather-icons';
	import NavBarButton from './NavBarButton.svelte';

	export let menu: any;

	const role: string = $page.data.session?.user.app_metadata.role ?? '';
</script>

<div class="flex flex-col h-full border-r border-opacity-10 border-base-content z-50">
	<div class="navbar flex flex-col h-full bg-base-100">
		<div class="mt-1 mb-8">
			<a class="px-3 pt-2" href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="white"
					stroke="white"
					stroke-width="1"
					><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect
						x="14"
						y="14"
						width="7"
						height="7"
					/><rect x="3" y="14" width="7" height="7" /></svg
				>
			</a>
		</div>

		{#each menu.user as m}
			<NavBarButton tooltip={m.tooltip} dest={m.dest}>
				<span slot="icon"><svelte:component this={m.icon} /></span>
			</NavBarButton>
		{/each}

		<div class="max-md:my-0 divider" />

		{#if isAdmin(role)}
			{#each menu.admin as m}
				<NavBarButton tooltip={m.tooltip} dest={m.dest}>
					<span slot="icon"><svelte:component this={m.icon} class="stroke-warning" /></span>
				</NavBarButton>
			{/each}
			<div class="divider" />
		{/if}

		{#if isSuper(role)}
			{#each menu.super as m}
				<NavBarButton tooltip={m.tooltip} dest={m.dest}>
					<span slot="icon"><svelte:component this={m.icon} class="stroke-accent" /></span>
				</NavBarButton>
			{/each}
			<div class="max-md:my-0 divider" />
		{/if}

		<!-- <NavBarButton tooltip="Help" dest="/dashboard/help">
			<span slot="icon"><HelpCircleIcon /></span>
		</NavBarButton>
		<div class="max-md:my-0 divider" /> -->

		<div class="flex flex-1" />

		<div class="dropdown dropdown-right dropdown-end mb-4">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<UserIcon class={userColor(role)} />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="dropdown-content menu w-max ml-2 p-3 bg-primary rounded-box">
				<li>
					<div class="flex flex-row">
						<a class="flex w-max" href="/dashboard/settings"
							><SettingsIcon class="mr-4" />Settings</a
						>
					</div>
				</li>
				<li>
					<div class="flex flex-row">
						<form action="/auth?/signout" method="POST">
							<button class="flex w-max" type="submit"><LogOutIcon class="mr-4" />Sign Out</button>
						</form>
					</div>
				</li>
			</ul>
		</div>

		{#if isSuper(role)}
			<!-- svelte-ignore missing-declaration -->
			<div class="dropdown dropdown-right dropdown-end mb-0 text-xs">{__VERSION__}</div>
		{/if}
	</div>
</div>
