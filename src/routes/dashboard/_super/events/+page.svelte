<script lang="ts">
	import ActionButton from '$lib/components/dashboard/ActionButton.svelte';
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
	<span slot="actions" class="flex align-middle gap-1">
		<ActionButton type="refresh" />
	</span>
	<span slot="content" class="w-full">
		<EventsTable events={data.events} />
	</span>
</DashboardPage>
