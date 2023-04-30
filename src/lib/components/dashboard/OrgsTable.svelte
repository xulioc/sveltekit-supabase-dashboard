<script lang="ts">
	import SvelteTable from 'svelte-table';
	import TableActions from './TableActions.svelte';
	import TimeInTable from './TimeInTable.svelte';
	export let orgs: Array<any>;
	export let onAction;

	const columns = [
		{
			key: 'name',
			title: 'Name',
			value: (v: any) => v.name,
			sortable: true
		},
		{
			key: 'created_by',
			title: 'Created by',
			value: (v: any) => v.created_by,
			sortable: true
		},
		{
			key: 'created_at',
			title: 'Created at',
			value: (v: any) => v.created_at,
			sortable: true,
			renderComponent: {
				component: TimeInTable,
				props: { field: 'created_at', format: 'YYYY-MM-DD HH:mm' }
			}
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
	rows={orgs}
	sortBy="name"
	classNameTable={'table table-compact table-zebra'}
	classNameThead={'bg-black'}
/>
