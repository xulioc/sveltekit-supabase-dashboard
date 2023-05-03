<script lang="ts">
	import SvelteTable from 'svelte-table';
	import RoleBadge from './RoleBadge.svelte';
	import TableActions from './TableActions.svelte';
	import TimeInTable from './TimeInTable.svelte';
	export let users: Array<any>;
	export let onAction: any | null = null;

	const columns = [
		{
			key: 'email',
			title: 'EMAIL',
			value: (v: any) => v.email,
			sortable: true
		},
		{
			key: 'role',
			title: 'ROLE',
			value: (v: any) => v.app_metadata.role,
			renderComponent: RoleBadge,
			sortable: true
		},
		{
			key: 'org',
			title: 'ORG',
			value: (v: any) => v.app_metadata.org?.name,
			sortable: true
		},
		{
			key: 'created',
			title: 'CREATED',
			value: (v: any) => v.created_at,
			sortable: true,
			renderComponent: {
				component: TimeInTable,
				props: { field: 'created_at', format: 'YY-MM-DD HH:mm' }
			}
		},
		{
			key: 'last',
			title: 'LAST SEEN',
			value: (v: any) => v.last_sign_in_at,
			sortable: true,
			renderComponent: {
				component: TimeInTable,
				props: { field: 'last_sign_in_at', format: 'YY-MM-DD HH:mm' }
			}
		},
		{
			key: 'actions',
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
