<script lang="ts">
	export let row;
	const role = row.app_metadata.role;
</script>

<div
	class="badge"
	class:badge-secondary={role === 'user'}
	class:badge-warning={role === 'admin'}
	class:badge-accent={role === 'super'}
>
	{role}
</div>
