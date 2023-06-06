<script lang="ts">
	// https://joyofcode.xyz/sveltekit-google-analytics

	import { page } from '$app/stores';
	import { PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID } from '$env/static/public';

	const url = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`;

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID, {
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
		gtag('config', PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID);
	</script>
</svelte:head>
