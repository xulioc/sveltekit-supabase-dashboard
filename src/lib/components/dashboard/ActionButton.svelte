<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { RotateCwIcon } from 'svelte-feather-icons';

	export let onAction: any = null;
	export let text: string | null = null;
	export let type: string | null = null;
	export let form: string | null = null;
	let clazz: string | null = null;
	export { clazz as class };

	let loading: any = false;
</script>

{#if onAction}
	<button
		on:click|preventDefault={onAction}
		class={`btn btn-primary max-md:btn-square  ${clazz || ''}`}
	>
		<slot class="icon" id="icon" name="icon" />
		{#if text}
			<p class="ml-2 max-md:hidden">
				{text}
			</p>
		{/if}
	</button>
{:else if type == 'refresh'}
	<div class="tooltip tooltip-bottom" data-tip="Reload">
		<button
			class:loading
			class={`btn btn-square loading btn-primary ${clazz || ''}`}
			on:click={async () => {
				loading = true;
				await invalidateAll();
				loading = false;
			}}
		>
			{#if !loading}
				<RotateCwIcon />
			{/if}
		</button>
	</div>
{:else}
	<button class={`btn btn-primary max-md:btn-square  ${clazz || ''}`} {type} {form}>
		<slot class="icon" id="icon" name="icon" />
		{#if text}
			<p class="ml-2 max-md:hidden">
				{text}
			</p>
		{/if}
	</button>
{/if}
