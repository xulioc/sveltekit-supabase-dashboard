<script lang="ts">
	import SvelteTable from 'svelte-table';
	import TableActions from './TableActions.svelte';
	export let files: any;
	export let onAction: any | null = null;

	const columns = [
		{
			key: 'name',
			title: 'Name',
			value: (v: any) => v.name,
			sortable: true
		},
		{
			key: 'created_at',
			title: 'Created At',
			value: (v: any) => v.created_at,
			sortable: true
		},
		{
			key: 'type',
			title: 'TYPE',
			value: (v: any) => v.metadata.mimetype,
			sortable: true
		},
		{
			key: 'size',
			title: 'size',
			value: (v: any) => v.metadata.size,
			sortable: true
		},
		{
			key: 'actions',
			title: '',
			renderComponent: {
				component: TableActions,
				props: { actions: ['preview', 'delete'], onAction }
			}
		}
	];
</script>

<SvelteTable
	{columns}
	rows={files}
	sortBy="name"
	classNameTable={'table table-compact table-zebra'}
	classNameThead={'bg-black'}
/>
