<script lang="ts">
	export let role: String;
</script>

<div
	class="badge"
	class:badge-secondary={role === 'user'}
	class:badge-warning={role === 'admin'}
	class:badge-accent={role === 'super'}
>
	{role}
</div>
