<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { PUBLIC_DEMO_MODE } from '$env/static/public';
	import { FrownIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let form: ActionData;
	const to: string | null = $page.url.searchParams.get('to');
	let loading = false;
</script>

<div in:fade class="flex justify-center align-middle h-screen w-screen">
	<div class="flex my-auto align-middle justify-center w-1/2">
		<div>
			<div class="card my-5 w-full max-w-sm shadow-2xl bg-black">
				<div class="card-body">
					<h1 class="text-center text-4xl mb-8">Sign In</h1>

					{#if PUBLIC_DEMO_MODE == 'true'}
						<div class="alert bg-secondary shadow-lg">
							<div>
								<span>USER: 'user@test.com' pass 'user'</span>
							</div>
						</div>

						<div class="alert alert-warning shadow-lg">
							<div>
								<span>ADMIN: 'admin@test.com' pass 'admin'</span>
							</div>
						</div>

						<div class="alert alert-warning bg-accent shadow-lg">
							<div>
								<span>SUPER: 'super@test.com' pass 'super'</span>
							</div>
						</div>
					{/if}

					{#if form?.error}
						<div in:fade class="alert alert-error shadow-lg">
							<div>
								<FrownIcon />
								<span>{form?.error}</span>
							</div>
						</div>
					{/if}

					<form
						method="POST"
						action="/auth?/signin"
						use:enhance={() => {
							loading = true;
							return async ({ result, update }) => {
								update();
								// console.log(result);
								if (result.type == 'failure') {
									loading = false;
								}
							};
						}}
					>
						<div class="form-control">
							<input id="to" name="to" value={to} hidden />
							<label for="email" class="label">
								<span class="label-text">Email</span>
							</label>
							<input
								autocomplete="username"
								id="email"
								name="email"
								value={form?.values?.email ?? ''}
								class="input input-bordered"
								type="email"
								placeholder="email"
								required
							/>
						</div>

						<div class="form-control">
							<label for="password" class="label">
								<span class="label-text">Password</span>
							</label>
							<input
								autocomplete="current-password"
								id="password"
								name="password"
								class="input input-bordered"
								type="password"
								placeholder="password"
								required
							/>
						</div>
						<div class="form-control mt-6">
							<button class="btn btn-primary" class:loading>Sign In</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
