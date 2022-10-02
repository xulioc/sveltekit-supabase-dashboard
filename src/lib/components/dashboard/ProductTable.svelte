<script lang=ts>
	import SvelteTable from 'svelte-table';
	export let products: Array<any>;

	const columns = [
		{
			key: 'firstName',
			title: 'Name',
			value: (v) => v.firstName,
			sortable: true
		},
		{
			key: 'brand',
			title: 'Name',
			value: (v) => v.brand,
			sortable: true
		},
		{
			key: 'firstName',
			title: 'Name',
			value: (v) => v.firstName,
			sortable: true
		}
	];
	// console.log(products)
</script>

<!-- https://svelte.dev/repl/8b2264e66d9a456abeb5f2b9322605f7?version=3.49.0 -->
<SvelteTable
	{columns}
	rows={products}
	classNameTable={['table table-compact table-zebra']}
	classNameRow="hover cursor-pointer"
/>
