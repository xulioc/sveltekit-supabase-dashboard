<script lang="ts">
	export let orgs: Array<any>;
</script>

<table class="table w-full">
	<thead>
		<tr>
			<th>Id</th>
			<!-- <th>Logo</th> -->
			<th>Name</th>
			<th>Created</th>
			<th>Created By</th>
		</tr>
	</thead>
	<tbody>
		{#each orgs as org}
			<tr>
				<td>{org.id}</td>
				<!-- <td>
					{#if org.logo}
						<img alt={org.name} src={org.logo} width="30" height="30" />
					{/if}
				</td> -->
				<td>{org.name}</td>
				<!-- <td><Time timestamp={org.created_at ?? null} /></td>
				<td><Time timestamp={org.updated_at ?? null} /></td> -->
				<td>{org.created_at}</td>
				<td>{org.created_by}</td>
			</tr>
		{/each}
	</tbody>
</table>
