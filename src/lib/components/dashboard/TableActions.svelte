<script lang="ts">
	import {
		ChevronDownIcon,
		ChevronUpIcon,
		EditIcon,
		InfoIcon,
		RotateCwIcon,
		TrashIcon
	} from 'svelte-feather-icons';
	import Confirm from './Confirm.svelte';

	export let row: any;
	export let onAction: any;
	export let actions: Array<any> = [];
</script>

<div class="flex justify-center text-left space-x-2">
	{#if actions.includes('up')}
		<button
			on:click|preventDefault={() => onAction({ action: 'up', row })}
			class="btn btn-sm btn-circle btn-ghost btn-primary"
		>
			<ChevronUpIcon class="" />
		</button>
	{/if}

	{#if actions.includes('down')}
		<button
			on:click|preventDefault={() => onAction({ action: 'down', row })}
			class="btn btn-sm btn-circle btn-ghost btn-primary"
		>
			<ChevronDownIcon class="" />
		</button>
	{/if}

	{#if actions.includes('info')}
		<button
			on:click|preventDefault={() => onAction({ action: 'info', row })}
			class="btn btn-sm btn-circle btn-ghost"
		>
			<InfoIcon class="" />
		</button>
	{/if}

	{#if actions.includes('edit')}
		<button
			on:click|preventDefault={() => onAction({ action: 'edit', row })}
			class="btn btn-sm btn-circle btn-ghost btn-primary"
		>
			<EditIcon class="" />
		</button>
	{/if}

	{#if actions.includes('refresh')}
		<button
			on:click|preventDefault={() => onAction({ action: 'refresh', row })}
			class="btn btn-sm btn-circle btn-ghost btn-primary"
		>
			<RotateCwIcon class="" />
		</button>
	{/if}

	{#if actions.includes('delete')}
		<Confirm let:confirm={confirmThis} confirmTitle="DELETE" cancelTitle="CANCEL">
			<button
				on:click|preventDefault={() => confirmThis(onAction, { action: 'delete', row })}
				class="btn btn-sm btn-circle btn-ghost btn-error"
			>
				<TrashIcon class="stroke-error" />
			</button>

			<span slot="title"> Delete this item? </span>
			<span slot="description"> You won't be able to revert this! </span>
		</Confirm>
	{/if}
</div>
