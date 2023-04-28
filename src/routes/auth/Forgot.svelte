<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;
</script>

<div class="card-body">
	<h1 class="text-center text-4xl mb-6">Forgot password?</h1>

	<form
		method="POST"
		action="/auth?/forgot"
		use:enhance={() => {
			loading = true;
			return async ({ result, update }) => {
				update();
				if (result.type == 'failure') {
					loading = false;
				}
				loading = false;
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
		</div>

		<div class="form-control mt-4">
			<button class="btn btn-primary" class:loading>SEND RESET LINK</button>
		</div>
	</form>
</div>
