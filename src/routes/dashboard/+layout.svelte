<script lang="ts">
	// import '../../app.postcss';
	import {
		HomeIcon,
		LayoutIcon,
		BarChartIcon,
		UserIcon,
		UsersIcon,
		LogOutIcon,
		SmileIcon,
		SettingsIcon,
		BellIcon,
		RadioIcon
	} from 'svelte-feather-icons';
	import { Jumper } from 'svelte-loading-spinners';
	import { navigating } from '$app/stores';

	let menu = 'home';
</script>

<section id="body" class="flex flex-row h-screen">
	<!-- LEFT MENU -->
	<div class="border-2 border-neutral z-50">
		<div class="flex flex-col p-3">
			<a class="px-4 pt-2 pb-3" href="/">
				<SmileIcon class="stroke-accent" />
			</a>

			<!-- HOME -->
			<div class="py-2 tooltip tooltip-right" data-tip="Home">
				<a
					href="/dashboard"
					role="button"
					class="btn btn-square gap-2 btn-ghost"
					class:btn-active={menu === 'home'}
					on:click={() => {
						menu = 'home';
						location.href = '/dashboard';
					}}
				>
					<HomeIcon />
				</a>
			</div>

			<!-- TABLES -->
			<div class="py-2 tooltip tooltip-right" data-tip="Tables">
				<a
					href="/dashboard/tables"
					role="button"
					class="btn btn-square gap-2 btn-ghost"
					class:btn-active={menu === 'tables'}
					on:click={() => (menu = 'tables')}
				>
					<LayoutIcon />
				</a>
			</div>

			<!-- CHARTS -->
			<div class="py-2 tooltip tooltip-right" data-tip="Charts">
				<a
					href="/dashboard/"
					role="button"
					class="btn btn-square gap-2 btn-ghost"
					class:btn-active={menu === 'charts'}
					on:click={() => (menu = 'charts')}
				>
					<BarChartIcon />
				</a>
			</div>
		</div>
	</div>

	<div class="flex flex-col w-full">
		<!-- NAV BAR -->
		<div class="navbar px-5 border-b-2 border-neutral bg-base-100">
			<!-- APP TITLE  -->
			<div class="flex-1">
				<a href="/dashboard" class="link no-underline text-xl text-accent">
					SvelteKit Supabase Dahsboard
				</a>
			</div>

			<div class="flex-none">
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<div class="indicator">
							<BellIcon />
							<span class="badge bg-accent indicator-item" />
						</div>
					</label>
					<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
						<div class="card-body">
							<span class="font-bold text-lg">8 Items</span>
							<div class="card-actions">
								<button class="btn btn-primary btn-block">View Alerts</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CONTENT -->
		<div class="w-full h-full overflow-auto">
			{#if $navigating}
				<div class="flex h-1/2 items-center justify-center">
					<Jumper size="60" unit="px" duration="500ms" />
				</div>
			{:else}
					<slot />
			{/if}
		</div>
	</div>
</section>
