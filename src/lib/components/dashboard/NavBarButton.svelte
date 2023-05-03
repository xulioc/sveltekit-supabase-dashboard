<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let noghost: string | boolean = false;
	export let tooltip: string | null = null;
	export let dest = '/dashboard';
	let clazz: string | null = null;
	export { clazz as class };
	let active: string | boolean = false;

	$: {
		// TODO CLEAN THIS RUBISH
		active = (((dest ?? '').split('/') ?? []).at(-1) ?? '').includes(
			(($page.url.pathname ?? '').split('/') ?? []).at(-1) ?? ''
		);
	}
</script>

<div class="py-1 tooltip tooltip-right" data-tip={tooltip}>
	<label
		for="drawer"
		class={`drawer-button btn btn-square gap-2 ${clazz || ''}`}
		class:btn-active={active}
		class:btn-ghost={!noghost}
		on:click={() => {
			goto(dest);
		}}
		on:keypress={() => {
			goto(dest);
		}}
	>
		<slot name="icon" />
	</label>
</div>
