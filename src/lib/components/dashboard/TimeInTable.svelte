<script lang="ts">
	import Time from 'svelte-time/src/Time.svelte';
	export let row: any;
	export let field: string;
	export let format: string;
</script>

<div>
	<Time timestamp={row[field]} {format} />
</div>
