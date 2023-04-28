<script>
	import ActionButton from '$lib/components/dashboard/ActionButton.svelte';
	import DashboardPage from '$lib/components/dashboard/DashboardPage.svelte';
	import { SaveIcon, SettingsIcon } from 'svelte-feather-icons';

	/** @type {import('./$types').PageData} */
	export let data;
	// console.log(data);

	const user = data.session?.user;
</script>

<DashboardPage>
	<span slot="icon"><SettingsIcon /></span>
	<span slot="title">Settings</span>
	<span slot="actions">
		<ActionButton text="SAVE" form="edit" type="submit">
			<span slot="icon"><SaveIcon /></span>
		</ActionButton>

		<!-- <ActionButton
			text="CANCEL"
			onAction={() => {
				history.back();
			}}
		>
			<span slot="icon"><XIcon /></span>
		</ActionButton> -->
	</span>
	<span slot="content">
		<form id="edit" class="w-full max-w-sm" method="POST" action="?/save">
			<div class="md:flex md:items-center mb-6 form-control">
				<label class="input-group">
					<span class="md:w-1/3 mr-1">Email</span>
					<input type="text" value={user?.email} disabled class="input input-bordered md:w-2/3" />
				</label>

				<label class="input-group pt-2">
					<span class="md:w-1/3 mr-1">Organization</span>
					<input
						type="text"
						value={user?.app_metadata.org.name}
						disabled
						class="input input-bordered md:w-2/3"
					/>
				</label>

				<label class="input-group pt-2">
					<span class="md:w-1/3 mr-1">Role</span>
					<input
						type="text"
						value={user?.app_metadata.role}
						disabled
						class="input input-bordered md:w-2/3"
					/>
				</label>

				<!-- <label class="input-group pt-2 pb-5">
					<span class="md:w-1/3 mr-1">User Name</span>
					<input
						type="text"
						name="user_name"
						value={user?.user_metadata.name}
						class="input input-bordered md:w-2/3"
					/>
				</label> -->
			</div>
		</form>
	</span>
</DashboardPage>
