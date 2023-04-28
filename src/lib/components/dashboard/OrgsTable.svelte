<script lang="ts">
	import SvelteTable from 'svelte-table';
	import TimeInTable from './TimeInTable.svelte';
	export let orgs: Array<any>;

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
			renderComponent: TimeInTable
		}
	];
</script>

<SvelteTable
	{columns}
	rows={orgs}
	classNameTable={'table table-compact table-zebra'}
	classNameThead={'bg-black'}
/>
