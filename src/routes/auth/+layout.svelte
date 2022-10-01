<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	const logout: SubmitFunction = () => {
		return async ({ result }) => {
			await invalidateAll();
			applyAction(result);
		};
	};
</script>

<svelte:head>
	<title>Sign In</title>
</svelte:head>

<main class="container is-max-desktop mx-auto">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">

			<div class="text-center lg:text-left">
				<h1 class="text-5xl font-bold">Sign In Now!</h1>
				<p class="py-6">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
					exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
				</p>
			</div>

			<slot />
			
		</div>
	</div>

	<!-- <div class="navbar-menu my-4"> -->
	<!-- <div class="card bg-neutral"> -->
	<div class="card-body w-max bg-neutral items-center text-center">
		<div class="navbar-start">
			<a class="my-2" href="/">Supabase Auth Helpers Demo</a>
		</div>
		<div class="navbar-end">
			{#if $page.data.session.user}
				<form action="/logout" method="post" use:enhance={logout}>
					<button type="submit">Sign out</button>
				</form>
			{/if}
		</div>
	</div>

	<div class="flex bg-neutral justify-center">
		<div class="card-body w-max bg-neutral items-center text-center">
			
		</div>
	</div>
</main>
