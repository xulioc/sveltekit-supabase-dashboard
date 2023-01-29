<script>
	import UserTableAdmin from '$lib/components/dashboard/UserTableAdmin.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// console.log(data)
</script>

<div class="card flex-col lg:flex-row bg-base-300 shadow-xl">
	<div class="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 overflow-y-scroll">
		<UserTableAdmin users={data.users} />
	</div>
</div>
