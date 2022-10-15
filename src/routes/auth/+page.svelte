<script lang="ts">
	import { PUBLIC_APP_NAME, PUBLIC_DEMO_MODE } from '$env/static/public';

	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	export let form: any;
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			loading = false;
			await applyAction(result);
			if (result.type === 'redirect') {
				await invalidateAll();
			}
		};
	};
</script>

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
	<div class="card-body">
		<!-- <h1 class="text-center text-xl">{PUBLIC_APP_NAME}</h1> -->
		<h1 class="text-primary-content text-center text-4xl mb-8">Sign In</h1>

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

		<form method="post" use:enhance={handleSubmit}>
			<div class="form-control">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Email</span>
				</label>
				<input
					id="email"
					name="email"
					value={form?.values?.email ?? ''}
					class="input input-bordered"
					type="email"
					placeholder="email"
					required
				/>

				<!-- <input type="text" placeholder="email" class="input input-bordered" /> -->
			</div>

			<div class="form-control">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Password</span>
				</label>
				<!-- <input type="text" placeholder="password" class="input input-bordered" /> -->
				<input
					id="password"
					name="password"
					class="input input-bordered"
					type="password"
					placeholder="password"
					required
				/>
								<!-- svelte-ignore a11y-label-has-associated-control -->

				<label class="label">
					<a href="/" class="label-text-alt link link-hover">Forgot password?</a>
				</label>
			</div>
			<div class="form-control mt-6">
				<button disabled={loading} class="btn btn-primary">Sign In</button>
			</div>
		</form>
	</div>
</div>
