<script lang="ts">
  import Time from "svelte-time";
	export let users: Array<any>;
	// console.log(users)
</script>

<table class="table w-full">
	<!-- head -->
	<thead>
		<tr>
			<!-- <th>
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
			</th> -->
			<th>email</th>
			<th>organization</th>
			<th>role</th>
			<th>created</th>
			<th>last sign in</th>
			<!-- <th /> -->
		</tr>
	</thead>
	<tbody>
		{#each users as user}
			<tr>
				<td>
					{user.email}
				</td>
				<td>
					{user.app_metadata.org}
				</td>
				<td>
					<div
						class="badge"
						class:badge-secondary={user.app_metadata.role === 'user'}
						class:badge-warning={user.app_metadata.role === 'admin'}
						class:badge-accent={user.app_metadata.role === 'super'}
					>
						{user.app_metadata.role}
					</div>
				</td>
				
				<td>
					<Time timestamp={user.created_at} />
					
				</td>
				<td>
					<Time timestamp={user.last_sign_in_at}/>
					
				</td>
				<!-- <td>
					<label for="user-modal" class="btn btn-primary btn-xs modal-button">details</label>
				</td> -->
			</tr>
		{/each}
	</tbody>
	<!-- foot -->
	<tfoot />
</table>

<!-- Put this part before </body> tag -->
<!-- <input type="checkbox" id="user-modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<label for="user-modal" class="btn">Yay!</label>
		</div>
	</div>
</div> -->
