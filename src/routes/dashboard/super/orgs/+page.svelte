<script>
	import { PUBLIC_DEMO_MODE } from '$env/static/public';
	import OrgTable from '$lib/components/dashboard/OrgTable.svelte';
	
	/** @type {import('./$types').PageData} */
	export let data;

	// console.log(data)
</script>

{#if PUBLIC_DEMO_MODE == 'true'}
	<div class="alert alert-info shadow-lg mb-5">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			<span>Organizations must be created using Supabase UI</span>
		</div>
	</div>
{/if}

<div class="card flex-col lg:flex-row bg-base-300 shadow-xl">
	<div class="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 overflow-y-scroll">
		<OrgTable orgs={data.orgs} />
	</div>
</div>
