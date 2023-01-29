<div class="alert alert-info shadow-lg mb-5">
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current flex-shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span
			><a href="https://daisyui.com/components/table/">DaisyUI</a> table example with static data</span
		>
	</div>
</div>

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
				<!-- row 1 -->
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img
										src="https://placeimg.com/64/64/people"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">Hart Hagerty</div>
								<div class="text-sm opacity-50">United States</div>
							</div>
						</div>
					</td>
					<td>
						Zemlak, Daniel and Leannon
						<br />
						<span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
					</td>
					<td>Purple</td>
					<th>
						<button class="btn btn-ghost btn-xs">details</button>
					</th>
				</tr>
				<!-- row 2 -->
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img
										src="https://placeimg.com/64/64/people"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">Brice Swyre</div>
								<div class="text-sm opacity-50">China</div>
							</div>
						</div>
					</td>
					<td>
						Carroll Group
						<br />
						<span class="badge badge-ghost badge-sm">Tax Accountant</span>
					</td>
					<td>Red</td>
					<th>
						<button class="btn btn-ghost btn-xs">details</button>
					</th>
				</tr>
				<!-- row 3 -->
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img
										src="https://placeimg.com/64/64/people"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">Marjy Ferencz</div>
								<div class="text-sm opacity-50">Russia</div>
							</div>
						</div>
					</td>
					<td>
						Rowe-Schoen
						<br />
						<span class="badge badge-ghost badge-sm">Office Assistant I</span>
					</td>
					<td>Crimson</td>
					<th>
						<button class="btn btn-ghost btn-xs">details</button>
					</th>
				</tr>
				<!-- row 4 -->
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img
										src="https://placeimg.com/64/64/people"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">Yancy Tear</div>
								<div class="text-sm opacity-50">Brazil</div>
							</div>
						</div>
					</td>
					<td>
						Wyman-Ledner
						<br />
						<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
					</td>
					<td>Indigo</td>
					<th>
						<button class="btn btn-ghost btn-xs">details</button>
					</th>
				</tr>
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
