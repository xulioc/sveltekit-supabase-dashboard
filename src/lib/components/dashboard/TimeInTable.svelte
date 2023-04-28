<script lang="ts">
	import Time from 'svelte-time/src/Time.svelte';
	export let row;
	export let format;
</script>

<div>
	<Time timestamp={row.timestamp} {format} />
</div>
