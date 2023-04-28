<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_DEMO_MODE } from '$env/static/public';
	import { AlertTriangleIcon } from 'svelte-feather-icons';
	const role = $page.data.session?.user.app_metadata.role ?? 'user';
</script>

{#if PUBLIC_DEMO_MODE == 'true'}
	{#if role != 'user'}
		<div
			class="w-full alert alert-warning shadow-lg mb-3"
			class:bg-warning={role == 'admin'}
			class:bg-accent={role == 'super'}
		>
			<div>
				<AlertTriangleIcon />
				<span>You are {role.toUpperCase()}!</span>
			</div>
		</div>
	{/if}
{/if}
