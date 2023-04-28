<script lang="ts">
	import { enhance } from '$app/forms';
	import { FrownIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;
</script>

<div class="card-body">
	<h1 class="text-center text-4xl mb-8">Send invite link</h1>

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
		action="/auth?/invite"
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
			<!-- <input id="to" name="to" value={to} hidden /> -->
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

		<div class="form-control mt-6">
			<button class="btn btn-primary" class:loading>Invite</button>
		</div>
	</form>
</div>
