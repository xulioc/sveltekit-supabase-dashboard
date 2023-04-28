<script lang="ts">
	import SvelteTable from 'svelte-table';
	import RoleBadge from './RoleBadge.svelte';
	import TableActions from './TableActions.svelte';
	export let users: Array<any>;
	export let onAction: any | null = null;

	const columns = [
		{
			key: 'email',
			title: 'EMAIL',
			value: (v: any) => v.email,
			sortable: true,
			class: 'w-10 text-ellipsis '
		},
		{
			key: 'role',
			title: 'ROLE',
			renderComponent: {
				component: RoleBadge
			},
			sortable: true
		},
		{
			key: 'created',
			title: 'CREATED',
			value: (v: any) => v.created_at,
			sortable: true
		},
		{
			key: 'last',
			title: 'LAST SEEN',
			value: (v: any) => v.last_sign_in_at,
			sortable: true
		},
		{
			title: '',
			renderComponent: {
				component: TableActions,
				props: { actions: ['delete'], onAction }
			}
		}
	];
</script>

<SvelteTable
	{columns}
	rows={users}
	classNameTable={'table table-compact table-zebra'}
	classNameThead={'bg-black'}
/>
