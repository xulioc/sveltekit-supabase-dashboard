<script lang="ts">
	import Time from 'svelte-time/src/Time.svelte';
	export let row;
</script>

<div>
	<Time timestamp={row.created_at} />
</div>
