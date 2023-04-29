<script lang="ts">
	import { enhance } from '$app/forms';

	let loading = false;
	let disabled = true;

	let password = '';
	let password2 = '';

	$: {
		if (password == password2) {
			disabled = false;
		} else {
			disabled = true;
		}
	}
</script>

<div class="card-body">
	<h1 class="text-center text-4xl mb-6">Reset password</h1>

	<form
		method="POST"
		action="/auth?/reset"
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
			<input
				id="password"
				name="password"
				class="input text-center mt-2"
				type="password"
				bind:value={password}
				placeholder="enter password"
				required
			/>

			<input
				id="password"
				name="password"
				class="input text-center mt-2"
				type="password"
				bind:value={password2}
				placeholder="confirm password"
				required
			/>

			<div class="form-control mt-6">
				<button class="btn btn-primary" class:loading>Reset Password</button>
			</div>
		</div>
	</form>
</div>
