<script lang="ts">
	import Time from "svelte-time";
	export let orgs: Array<any>;
</script>

<table class="table w-full">
	<thead>
		<tr>
			<!-- <th>Id</th> -->
			<th>Logo</th>
			<th>Name</th>
			<th>Created</th>
			<th>Updated</th>
		</tr>
	</thead>
	<tbody>
		{#each orgs as org}
			<tr>
				<!-- <td>{org.id}</td> -->
				<td>
					{#if org.logo}
					<img alt={org.name} src={org.logo} width="30" height="30"/>
					{/if}
				</td>
				<td>{org.name.toUpperCase()}</td>
				<td><Time timestamp={org.created_at}/></td>
				<td><Time timestamp={org.updated_at}/></td>
			</tr>
		{/each}
	</tbody>
</table>
