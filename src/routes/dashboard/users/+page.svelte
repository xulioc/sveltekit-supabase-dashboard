<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<div class="card flex-col lg:flex-row bg-base-300 shadow-xl">
	<div class="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 overflow-y-scroll">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each data.users as user}
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="rounded-full ring ring-primary w-12 h-12">
										<img src={user.image} alt="Avatar Tailwind CSS Component" />
										<!-- <img src="https://placeimg.com/64/64/people" alt="Avatar Tailwind CSS Component" /> -->
										<!-- <img src="https://i.pravatar.cc/64" alt="Avatar Tailwind CSS Component" /> -->
										
									</div>
								</div>
								<div>
									<div class="font-bold">{user.firstName} {user.lastName}</div>
									<div class="text-sm opacity-50">{user.address.city}</div>
								</div>
							</div>
						</td>
						<td>
							{user.company.department}
							<br />
							<span class="badge badge-ghost badge-sm">{user.company.title}</span>
						</td>
						<td>{user.eyeColor}</td>
						<th>
							<button class="btn btn-primary btn-xs">details</button>
						</th>
					</tr>
				{/each}
			</tbody>
			<!-- foot -->
			<tfoot>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th />
				</tr>
			</tfoot>
		</table>
	</div>
</div>
