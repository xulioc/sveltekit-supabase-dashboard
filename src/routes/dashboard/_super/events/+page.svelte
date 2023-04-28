<script lang="ts">
	import DashboardPage from '$lib/components/dashboard/DashboardPage.svelte';
	import EventsTable from '$lib/components/dashboard/EventsTable.svelte';
	import { ListIcon } from 'svelte-feather-icons';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data);
</script>

<DashboardPage>
	<span slot="icon"><ListIcon /></span>
	<span slot="title">Events</span>
	<span slot="content" class="w-full">
		<EventsTable events={data.events} />
	</span>
</DashboardPage>
