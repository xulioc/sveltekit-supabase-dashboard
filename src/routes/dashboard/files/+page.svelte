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
	let uploading = false;
	let preview: any = null;

	const handleUpload = async (event: any) => {
		// console.log(event.target.files);
		const file = event.target.files[0];
		uploading = true;

		const res = await data.supabase.storage
			.from('files')
			.upload(data.session?.user.app_metadata.org.name + '/' + file.name, file);

		if (res.error) {
			toast.push(`FILE UPLOAD ERROR! (${res.error.message})`, { classes: ['alert-error'] });
		} else {
			toast.push('File upload succesful!', { classes: ['alert-success'] });
		}

		view = 'home';
		uploading = false;
		invalidateAll();
	};

	const deleteFile = async (file: any) => {
		const res = await data.supabase.storage
			.from('files')
			.remove([data.session?.user.app_metadata.org.name + '/' + file.name]);
		// console.log(res);

		if (res.error) {
			toast.push(`FILE DELETE ERROR! (${res.error.message})`, { classes: ['alert-error'] });
		} else {
			toast.push('File delete succesful!', { classes: ['alert-success'] });
		}

		invalidateAll();
	};

	const previewFile = async (file: any) => {
		const res = data.supabase.storage
			.from('files')
			.getPublicUrl(data.session?.user.app_metadata.org.name + '/' + file.name);

		// console.log(res);
		preview = {
			file: file,
			url: res.data.publicUrl
		};
	};

	const onAction = (a: any) => {
		switch (a.action) {
			case 'delete':
				deleteFile(a.row);
				break;
			case 'preview':
				previewFile(a.row);
				break;
		}
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
			{#if data.files?.length}
				<FilesTable files={data.files} {onAction} />
			{:else}
				There are no files!
			{/if}
		</span>
	</DashboardPage>
{:else if view == 'upload'}
	<DashboardPage>
		<span slot="icon"><UploadIcon /></span>
		<span slot="title">Upload</span>

		<span slot="content" class="w-full">
			{#if uploading}
				<progress class="progress progress-primary w-full" />
			{:else}
				<input
					required
					id="file"
					name="file"
					type="file"
					class="file-input w-full"
					on:change={handleUpload}
				/>
			{/if}
		</span>
	</DashboardPage>
{/if}

{#if preview}
	<div class="modal modal-open">
		<div class="modal-box">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<label
				on:click={(e) => {
					preview = false;
				}}
				for="preview-modal"
				class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
			>
			{#if preview?.file.metadata.mimetype.includes('image')}
				<img alt="preview" src={preview.url} />
			{:else if preview?.file.metadata.mimetype.includes('video')}
				<video autoplay controls class="flex mx-auto max-h-full max-w-full" src={preview?.url} />
			{:else}
				CANNOT PREVIEW THIS FILE
			{/if}
		</div>
	</div>
{/if}
