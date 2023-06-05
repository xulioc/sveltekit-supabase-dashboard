<script lang="ts">
	import DashboardPage from '$lib/components/dashboard/DashboardPage.svelte';
	import UsersTable from '$lib/components/dashboard/UsersTable.svelte';
	import { BoxIcon } from 'svelte-feather-icons';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<DashboardPage>
	<span slot="icon"><BoxIcon /></span>
	<span slot="title">Items</span>
	<span slot="content" class="w-full">
		<div class="card flex-col lg:flex-row bg-base-300 shadow-xl">
			<div class="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 overflow-y-scroll">
				<UsersTable users={data.items} />
			</div>
		</div>
	</span>
</DashboardPage>
