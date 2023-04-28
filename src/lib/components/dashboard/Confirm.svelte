<script>
	import { fade } from 'svelte/transition';
	// export let themeColor = 200;
	export let confirmTitle = 'Confirm';
	export let cancelTitle = 'Cancel';

	let showDialog = false;
	let functionToCall = {
		func: null,
		args: null
	};

	function callFunction() {
		showDialog = false;
		functionToCall['func'](...functionToCall['args']);
	}

	function confirm(func, ...args) {
		functionToCall = { func, args };
		showDialog = true;
	}
</script>

<slot {confirm} />

{#if showDialog}
	<div class="modal modal-open" in:fade={{ duration: 200 }} out:fade={{ delay: 50, duration: 200 }}>
		<div class="modal-box">
			<h3 class="font-bold text-lg">
				<slot name="title">Are you sure you want to perform this action?</slot>
			</h3>
			<p class="py-4">
				<slot name="description">This action can't be undone!</slot>
			</p>

			<div class="flex flex-row justify-end">
				<div class="modal-action">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<label for="my-modal" class="btn mx-3" on:click={() => (showDialog = false)}>
						<slot name="cancel">
							{cancelTitle}
						</slot>
					</label>
				</div>

				<div class="modal-action">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<label for="my-modal" class="btn btn-error" on:click={callFunction}>
						<slot name="confirm">
							{confirmTitle}
						</slot>
					</label>
				</div>
			</div>
		</div>
	</div>
{/if}
