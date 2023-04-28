<script lang="ts">
	import DashboardPage from '$lib/components/dashboard/DashboardPage.svelte';
	import { onMount } from 'svelte';

	import { toast } from '$lib/components/Toast';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const user = data.session?.user;

	onMount(async () => {
		// if (form?.success) {
		// 	toast.push(form.success, { classes: ['alert-success'] });
		// }
		if (form?.error) {
			toast.push(form.error, { classes: ['alert-error'] });
		}
	});
</script>

<DashboardPage>
	<span slot="content">
		<div class="hero bg-base-200">
			<div class="hero-content">
				<div>
					{#if form?.success}
						<h1 class="text-2xl font-bold">Organization created!</h1>
						<h2>Please sign out for the changes to take effect.</h2>
						<form action="/auth?/signout" method="POST">
							<button class="btn btn-primary" type="submit">Sign Out</button>
						</form>
					{:else}
						<h1 class="text-2xl font-bold">Welcome {user?.email}!</h1>
						<h2>This is your first login so please enter a Organization name below.</h2>

						<h2>You will be the Admin for this organization.</h2>

						<form class="w-full" method="POST" action="?/save">
							<div class="mb-6 form-control">
								<label class="input-group">
									<input required name="org" type="text" class="input input-bordered" />
								</label>
							</div>
							<button class="btn btn-primary">Create Organization</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</span>
</DashboardPage>
