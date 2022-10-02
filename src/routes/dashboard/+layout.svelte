<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';

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
</script>

<section id="body" class="flex flex-row h-screen">
	<!-- LEFT MENU -->
	<div class="border-2 border-neutral z-50">
		<div class="flex flex-col p-3">
			<a class="px-4 pt-2 pb-3" href="/">
				<SmileIcon class="stroke-primary" />
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

			<!-- PRODUCTS -->
			<div class="py-2 tooltip tooltip-right" data-tip="Products">
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

			{#if role === 'admin'}
				<!-- TODO: HIDE FOR NORMAL USER  -->
				<div class="divider" />

				<!-- USERS -->
				<div class="py-2 tooltip tooltip-right" data-tip="Users">
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
			{/if}

			<!-- USER  -->
			<div class="fixed bottom-0 dropdown dropdown-right dropdown-end mb-5">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-circle">
					<UserIcon class="{role === 'admin' ? 'stroke-accent' : ''}"/>
				</label>
				<ul tabindex="0" class="dropdown-content menu p-3 shadow bg-neutral rounded-box w-fit">
					<li>
						<a href="/dashboard/profile"><SettingsIcon />Settings</a>
					</li>
					<li>
						<form action="/logout" method="post" use:enhance={logout}>
							<!-- <a type="submit"><LogOutIcon />LogOut</a> -->
							<button class="w-max" type="submit"><LogOutIcon />Sign Out</button>
						</form>
						<!-- <a href="/logout"><LogOutIcon />LogOut</a> -->
						<!-- <a on:click={() => (document.location = '/api/auth/logout')}><LogOutIcon />LogOut</a> -->
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex flex-col w-full">
		<!-- NAV BAR -->
		<div class="navbar px-5 border-b-2 border-neutral bg-base-100">
			<!-- APP TITLE  -->
			<div class="flex-1">
				<a href="/dashboard" class="link no-underline text-xl text-primary">
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
			{#if $navigating}
				<div class="flex h-full items-center justify-center">
					<Jumper size="60" unit="px" duration="500ms" />
				</div>
			{:else}
				<slot />
			{/if}
		</div>
	</div>
</section>
