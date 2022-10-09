<script lang="ts">
	import { PUBLIC_APP_NAME, PUBLIC_DEMO_MODE } from '$env/static/public';

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
	import { Jumper, Square } from 'svelte-loading-spinners';
	import { page, navigating } from '$app/stores';

	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	const logout: SubmitFunction = () => {
		return async ({ result }) => {
			await invalidateAll();
			applyAction(result);
		};
	};

	let menu = 'home';

	const role = $page.data.session.user.app_metadata.role;
	const org = $page.data.session.user.app_metadata.org;
	// console.log(role);

	// console.log(PUBLIC_DEMO_MODE);
</script>

<section id="body" class="flex flex-row h-screen">
	<!-- LEFT MENU -->
	<!-- <div class="flex flex-col w-full"></div> -->
	<div class="flex flex-col h-full border-r border-opacity-10 border-base-content z-50">
		<!-- <div class="flex flex-col p-3"> -->
		<div class="navbar flex flex-col h-full bg-base-100">
			<div class="mt-1 mb-7">
				<a class="px-3 pt-2" href="/">
					<!-- <SmileIcon class="" /> -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						fill="white"
						stroke="white"
						stroke-width="1"
						><rect x="3" y="3" width="7" height="7" /><rect
							x="14"
							y="3"
							width="7"
							height="7"
						/><rect x="14" y="14" width="7" height="7" /><rect
							x="3"
							y="14"
							width="7"
							height="7"
						/></svg
					>
				</a>
			</div>
			<!-- <div class="divider my-2" /> -->

			<!-- HOME -->
			<div class="py-2 tooltip tooltip-right tooltip-primary" data-tip="Home">
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
			<div class="py-2 tooltip tooltip-right tooltip-primary" data-tip="Tables">
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
			<div class="py-2 tooltip tooltip-right tooltip-primary" data-tip="Charts">
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

			<!-- PRODUCTS -->
			<div class="py-2 tooltip tooltip-right tooltip-primary" data-tip="Products">
				<a
					href="/dashboard/products"
					role="button"
					class="btn btn-square gap-2 btn-ghost"
					class:btn-active={menu === 'products'}
					on:click={() => (menu = 'products')}
				>
					<RadioIcon />
				</a>
			</div>

			<!-- USERS -->
			<div class="py-2 tooltip tooltip-right tooltip-primary" data-tip="Users">
				<a
					href="/dashboard/users"
					role="button"
					class="btn btn-square gap-2 btn-ghost"
					class:btn-active={menu === 'users'}
					on:click={() => (menu = 'users')}
				>
					<UsersIcon />
				</a>
			</div>

			{#if role === 'admin'}
				<!-- TODO: HIDE FOR NORMAL USER  -->
				<div class="divider" />

				<!-- ADMIN USERS -->
				<div class="tooltip tooltip-right tooltip-accent" data-tip="Users">
					<a
						href="/dashboard/admin/users"
						role="button"
						class="btn btn-square btn-ghost"
						class:btn-active={menu === 'admin_users'}
						on:click={() => (menu = 'admin_users')}
					>
						<UsersIcon class="stroke-accent" />
					</a>
				</div>

				<div class="divider" />
			{/if}

			<div class="flex flex-1" />

			<!-- USER  -->
			<div class="dropdown dropdown-right dropdown-end mb-4">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<UserIcon class={role === 'admin' ? 'stroke-accent' : ''} />
				</label>
				<ul tabindex="0" class="dropdown-content menu w-max ml-2 p-3 bg-primary rounded-box">
					<li>
						<div class="flex flex-row">
							<a class="flex w-max" href="/dashboard/profile"
								><SettingsIcon class="mr-4" />Settings</a
							>
						</div>
					</li>
					<li>
						<div class="flex flex-row">
							<form action="/logout" method="post" use:enhance={logout}>
								<button class="flex w-max" type="submit"><LogOutIcon class="mr-4" />Sign Out</button
								>
							</form>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex flex-col w-full">
		<!-- NAV BAR -->
		<div class="navbar px-5 border-b border-opacity-10 border-base-content">
			<!-- APP TITLE  -->
			<div class="flex-1">
				<a href="/dashboard" class="link no-underline text-xl">
					{PUBLIC_APP_NAME}
				</a>
			</div>

			<!-- USER -->
			{#if $page.data.session.user}
				<div class="px-5">
					<div class={role === 'admin' ? 'text-accent' : ''}>
						{$page.data.session.user.email}
						{#if org}
							({org})
						{/if}
					</div>
				</div>
			{/if}

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
		<div class="w-full h-full p-5 overflow-auto">
			{#if PUBLIC_DEMO_MODE=='true'}
				{#if role == 'admin'}
					<div class="alert alert-warning shadow-lg mb-5">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-current flex-shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/></svg
							>
							<span>You are an ADMIN!</span>
						</div>
					</div>
				{/if}
			{/if}

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
