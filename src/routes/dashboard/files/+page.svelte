<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { toast } from '$lib/components/Toast';
	import ActionButton from '$lib/components/dashboard/ActionButton.svelte';
	import DashboardPage from '$lib/components/dashboard/DashboardPage.svelte';
	import FilesTable from '$lib/components/dashboard/FilesTable.svelte';
	import { FileIcon, UploadIcon } from 'svelte-feather-icons';
	import type { PageData } from './$types';
	export let data: PageData;
	let view = 'home';

	const handleUpload = async (event: any) => {
		console.log(event.target.files);
		const file = event.target.files[0];

		const res = await data.supabase.storage.from('TEST').upload('TEST/' + file.name, file);

		if (res.error) {
			toast.push('FILE UPLOAD ERROR!', { classes: ['alert-error'] });
		} else {
			toast.push('File upload succesful!', { classes: ['alert-success'] });
		}

		view = 'home';
		invalidateAll();
	};
</script>

{#if view == 'home'}
	<DashboardPage>
		<span slot="icon"><FileIcon /></span>
		<span slot="title">Files</span>
		<span slot="actions">
			<ActionButton
				text="UPLOAD"
				onAction={() => {
					view = 'upload';
				}}
			>
				<span slot="icon"><UploadIcon /></span>
			</ActionButton>
		</span>
		<span slot="content" class="w-full">
			<FilesTable files={data.files} />
		</span>
	</DashboardPage>
{:else if view == 'upload'}
	<DashboardPage>
		<span slot="icon"><UploadIcon /></span>
		<span slot="title">Upload</span>

		<span slot="content" class="w-full">
			<input
				required
				id="file"
				name="file"
				type="file"
				class="file-input w-full"
				on:change={handleUpload}
			/>
		</span>
	</DashboardPage>
{/if}
