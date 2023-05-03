<script lang="ts">
	import { applyAction, deserialize, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { toast } from '$lib/components/Toast';
	import DashboardPage from '$lib/components/dashboard/DashboardPage.svelte';
	import OrgsTable from '$lib/components/dashboard/OrgsTable.svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { ArchiveIcon, EditIcon, PlusIcon, XIcon } from 'svelte-feather-icons';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let view = 'home';

	// https://kit.svelte.dev/docs/form-actions#progressive-enhancement-custom-event-listener
	const deleteAction = async (id) => {
		const data = new FormData();
		data.append('id', id);
		const response = await fetch('orgs?/delete', {
			method: 'POST',
			body: data
		});

		const result: ActionResult = deserialize(await response.text());
		console.log(result);

		if (result.type === 'success') {
			// re-run all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);
	};

	const onAction = (a) => {
		console.log(a);
		switch (a.action) {
			case 'delete':
				deleteAction(a.row.id);
				break;
		}
	};

	$: {
		if (form?.success) {
			view = 'home';
			toast.push(form.success, { classes: ['alert-success'] });
		}
		if (form?.error) {
			toast.push(form.error, { classes: ['alert-error'] });
		}
	}
</script>

<!-- https://svelte.dev/repl/b17c13d4f1bb40799ccf09e0841ddd90?version=3.55.0 -->

{#if view == 'home'}
	<DashboardPage>
		<span slot="icon"><ArchiveIcon /></span>
		<span slot="title">Organizations</span>
		<span slot="actions">
			<button
				class="btn btn-primary gap-2"
				on:click={() => {
					view = 'add';
				}}
			>
				<PlusIcon class="h-4 w-4" />
				add org
			</button>
		</span>
		<span slot="content" class="w-full">
			<OrgsTable orgs={data.orgs} {onAction} />
		</span>
	</DashboardPage>
{:else if view == 'add'}
	<DashboardPage>
		<span slot="icon"><EditIcon /></span>
		<span slot="title">Add organization</span>>
		<span slot="actions">
			<!-- <button type="submit" form="user" class="btn btn-primary mx-2">
				<SaveIcon class="mr-2 h-4 w-4" />
				SAVE
			</button> -->
			<button
				on:click={() => {
					view = 'home';
				}}
				class="btn btn-primary"
			>
				<XIcon class="mr-2 h-4 w-4" />
				CANCEL
			</button>
		</span>
		<span slot="content" class="w-full">
			<form id="user" method="POST" action="?/create" enctype="multipart/form-data" use:enhance>
				<div class="form-control gap-y-3">
					<div class="flex flex-row">
						<label class="input-group w-full">
							<span class="text-xl w-1/4 min-w-min bg-primary">Name</span>
							<input
								autocomplete="name"
								id="name"
								name="name"
								class="w-full input input-bordered"
								type="text"
								placeholder="Organization name"
								required
							/>
						</label>
					</div>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary">ADD ORGANIZATION</button>
				</div>
			</form>
		</span>
	</DashboardPage>
{/if}
