<script lang="ts">
	// https://joyofcode.xyz/sveltekit-google-analytics

	import { page } from '$app/stores';

	const url = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', MEASUREMENT_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src={url}>
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', MEASUREMENT_ID);
	</script>
</svelte:head>
