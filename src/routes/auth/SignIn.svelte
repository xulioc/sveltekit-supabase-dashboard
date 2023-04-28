<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_DEMO_MODE } from '$env/static/public';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;
</script>

<div class="card-body">
	<h1 class="text-center text-4xl mb-6">Sign In</h1>
	<form
		method="POST"
		action="/auth?/signin"
		use:enhance={() => {
			loading = true;
			return async ({ result, update }) => {
				update();
				if (result.type == 'failure') {
					loading = false;
				}
			};
		}}
	>
		<div class="form-control">
			<input
				autocomplete="username"
				id="email"
				name="email"
				value={form?.values?.email ?? ''}
				class="input text-center"
				type="email"
				placeholder="email"
				required
			/>

			<input
				autocomplete="current-password"
				id="password"
				name="password"
				class="input text-center mt-2"
				type="password"
				placeholder="password"
				required
			/>
		</div>

		<div class="form-control mt-4 mb-4">
			<button class="btn btn-primary" class:loading>Sign In</button>
		</div>

		<div class="text-sm text-secondary text-center">
			<a class="link no-underline" href="?signup">Don't have an account? Sign-Up</a>
		</div>

		<div class="text-sm text-secondary text-center">
			<a class="link no-underline" href="?forgot">Forgot password?</a>
		</div>
	</form>
</div>

{#if PUBLIC_DEMO_MODE == 'true'}
	<div class="m-3 pb-8 bg-warning text-black shadow-xl">
		<div class="card-body">
			<p>For testing purposes you can use the test users brelow or create your own account.</p>
		</div>
		<div class="card-actions justify-center">
			<ul>
				<li>'user@test.com' pass 'user'</li>
				<li>'admin@test.com' pass 'admin'</li>
				<li>'super@test.com' pass 'super'</li>
			</ul>
		</div>
	</div>
{/if}
