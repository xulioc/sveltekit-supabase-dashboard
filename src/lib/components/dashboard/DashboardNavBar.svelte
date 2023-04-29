<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { BellIcon, MoonIcon, SunIcon } from 'svelte-feather-icons';
</script>

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
			<!-- <div class={role === 'admin' ? 'text-accent' : ''}> -->
			<div>
				{$page.data.session?.user.email}
				{#if $page.data.session?.user.app_metadata.org?.name}
					({$page.data.session?.user.app_metadata.org?.name})
				{/if}
			</div>
		</div>
	{/if}

	<!-- THEME CHANGE -->
	<div class="flex-none mx-3">
		<label class="btn btn-ghost btn-circle swap swap-rotate">
			<!-- this hidden checkbox controls the state -->
			<input data-toggle-theme="business, light" data-act-class="ACTIVECLASS" type="checkbox" />
			<MoonIcon class="swap-on fill-current" />
			<SunIcon class="swap-off fill-curren" />
		</label>
	</div>

	<!-- ALERTS  -->
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<BellIcon />
					<span class="badge bg-accent indicator-item" />
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
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
