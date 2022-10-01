<script lang="ts">
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
		<form method="post" use:enhance={handleSubmit}>
			<div class="form-control">
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
				<label class="label">
					<a href="#" class="label-text-alt link link-hover">Forgot password?</a>
				</label>
			</div>
			<div class="form-control mt-6">
				<button disabled={loading} class="btn btn-primary">Sign In</button>
			</div>
		</form>
	</div>
</div>
