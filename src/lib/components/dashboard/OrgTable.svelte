<script lang="ts">
	import Time from "svelte-time";
	export let orgs: Array<any>;
</script>

<table class="table w-full">
	<thead>
		<tr>
			<th>id</th>
			<th>name</th>
			<th>created</th>
			<th>updated</th>
		</tr>
	</thead>
	<tbody>
		{#each orgs as org}
			<tr>
				<td>{org.id}</td>
				<td>{org.name.toUpperCase()}</td>
				<td><Time timestamp={org.created_at}/></td>
				<td><Time timestamp={org.updated_at}/></td>
			</tr>
		{/each}
	</tbody>
</table>
