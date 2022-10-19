<script>
	/** @type {import('./$types').PageData} */
	export let data;
	// console.log(data);

	const user = data.session.user;
</script>

<form class="w-full max-w-sm" method="POST" action="?/save">
	<div class="md:flex md:items-center mb-6 form-control">
		<label class="input-group">
			<span class="md:w-1/3">Email</span>
			<input type="text" placeholder={user?.email} disabled class="input input-bordered md:w-2/3 " />
		</label>

		<label class="input-group">
			<span class="md:w-1/3">Organization</span>
			<input
				type="text"
				placeholder={user?.app_metadata.org}
				disabled
				class="input input-bordered md:w-2/3 "
			/>
		</label>

		<label class="input-group">
			<span class="md:w-1/3">Role</span>
			<input
				type="text"
				placeholder={user?.app_metadata.role}
				disabled
				class="input input-bordered md:w-2/3"
			/>
		</label>

		<label class="input-group">
			<span class="md:w-1/3">User Name</span>
			<input type="text" name="user_name" placeholder={user?.user_metadata.name} class="input input-bordered md:w-2/3" />
		</label>

		<input type="submit" value="SAVE" class="btn w-full"/>
	</div>
</form>
