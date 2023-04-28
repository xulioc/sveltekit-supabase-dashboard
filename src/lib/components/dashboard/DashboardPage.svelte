<div class="flex flex-col h-full">
	{#if $$slots.title}
		<div class="flex w-full items-center mb-4">
			<button class="btn btn-ghost btn-square btn-active">
				<slot name="icon" />
			</button>
			<div class="flex grow w-full mx-3">
				<span class="text-2xl flex grow font-medium w-full">
					<slot name="title" />
				</span>
			</div>
			<div class="flex w-full justify-end">
				<slot name="actions" />
			</div>
		</div>
	{/if}
	<div class="flex w-full h-full overflow-x-hidden overflow-y-auto">
		<slot name="content" />
	</div>
	<!-- <div class="footer flex w-full p-2 bottom-0 border">
		<slot name="footer" />
	</div> -->
</div>
