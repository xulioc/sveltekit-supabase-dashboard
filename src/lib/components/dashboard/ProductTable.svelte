<script lang="ts">
	import SvelteTable from 'svelte-table';
	export let products: Array<any>;

	const columns = [
		{
			key: 'title',
			title: 'Name',
			value: (v) => v.title,
			sortable: true
		},
		{
			key: 'brand',
			title: 'Brand',
			value: (v) => v.brand,
			sortable: true
		},
		{
			key: 'price',
			title: 'Price',
			value: (v) => v.price,
			sortable: true
		}
	];
</script>

<!-- https://svelte.dev/repl/8b2264e66d9a456abeb5f2b9322605f7?version=3.49.0 -->
<SvelteTable
	{columns}
	rows={products}
	classNameTable={['table table-compact table-zebra']}
	classNameRow="hover cursor-pointer"
/>
