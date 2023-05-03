<script>
	// import { browser } from '$app/environment';

	import WeatherChart from '$lib/components/dashboard/WeatherChart.svelte';
	import { toast } from '$lib/components/Toast';
	/** @type {import('./$types').PageData} */
	export let data;

	const action = () => {
		toast.push('TOAST!', { classes: ['alert-success'] });
	};
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="alert alert-success shadow-lg mb-5">
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current flex-shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>Welcome to SvelteKit Supabase Dashboard!</span>
	</div>
	<div class="flex-none">
		<!-- <button class="btn btn-sm btn-primary">OK</button> -->
		<a class="btn btn-sm btn-primary" href="https://github.com/xulioc/sveltekit-supabase-dashboard"
			>GITHUB</a
		>
	</div>
</div>

<!-- {#if $page.data.session.user.app_metadata.role=='admin'}
ADMIN
	
{/if} -->

<div class="card flex-col bg-base-100 shadow-xl">
	<div class="stats bg-primary text-primary-content">
		<div class="stat">
			<div class="stat-title">You are in</div>
			<div class="stat-value">{data.location.region} ({data.location.country_name})</div>
			<div class="stat-actions">
				<button on:click={action} class="btn btn-sm btn-success">Yes I DO!</button>
			</div>
		</div>

		<div class="stat">
			<div class="stat-title">Temperature in {data.location.city}</div>
			<div class="stat-value">{data.weather.current_weather.temperature} ºC</div>
			<div class="stat-actions">
				<button class="btn btn-sm">i feel hot</button>
				<button class="btn btn-sm">i feel cold</button>
			</div>
		</div>
	</div>
</div>

<div class="card mt-5 p-3 bg-neutral shadow-xl">
	<h1 class="text-center text-2xl font-bold">Temperature forecast at {data.location.city}</h1>
	<div><WeatherChart weather={data.weather} /></div>
</div>

<div class="card flex-col lg:flex-row bg-base-200 shadow-xl mt-5">
	<div class="hero">
		<div class="hero-content flex-col lg:flex-row">
			<!-- <img
				alt="alt"
				height="260"
				width="260"
				src="https://placeimg.com/260/260/arch"
				class="max-w-sm rounded-lg shadow-2xl"
			/> -->
			<div>
				<h1 class="text-5xl font-bold">Box Office News!</h1>
				<p class="py-6">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
					exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
				</p>
				<button class="btn btn-primary">Get Started</button>
			</div>
		</div>
	</div>
</div>

<div class="carousel w-full mt-5">
	<div id="item1" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/arch" class="w-full" />
	</div>
	<div id="item2" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/nature" class="w-full" />
	</div>
	<div id="item3" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/people" class="w-full" />
	</div>
	<div id="item4" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/tech" class="w-full" />
	</div>
</div>
<div class="flex justify-center w-full py-2 gap-2">
	<a href="#item1" class="btn btn-xs">1</a>
	<a href="#item2" class="btn btn-xs">2</a>
	<a href="#item3" class="btn btn-xs">3</a>
	<a href="#item4" class="btn btn-xs">4</a>
</div>
