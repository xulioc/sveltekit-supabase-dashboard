<script>
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	// console.log(data.profile)

</script>

<div>
	{data.profile.username}
</div>

<div>
	{$page.data.session.user.email}
</div>

<div>
	{$page.data.session.user.app_metadata.org} ({$page.data.session.user.app_metadata.role})
</div>






