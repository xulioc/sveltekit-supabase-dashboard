<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade, fly } from 'svelte/transition';
	import ToastItem from './ToastItem.svelte';
	import { toast } from './stores.js';

	export let options = {};
	export let target = 'default';

	$: toast._init(target, options);

	let items: any;
	$: items = $toast.filter((i) => i.target === target);
</script>

<!-- <div
	class="fixed -translate-x-1/2 trans z-50 top-3 w-max pointer-events-none left-1/2 right-1/2 max-w-full"
> -->

<!-- class={item.classes.join(' ')} -->

<div class="toast toast-top w-full z-50">
	<ul>
		{#each items as item (item.id)}
			<li class="mb-2" in:fly={item.intro} out:fade animate:flip={{ duration: 200 }}>
				<ToastItem {item} />
			</li>
		{/each}
	</ul>
</div>
