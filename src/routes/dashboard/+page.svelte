<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="card flex-col lg:flex-row bg-base-100 shadow-xl">
	<div class="hero">
		<div class="hero-content flex-col lg:flex-row">
			<img
				alt="alt"
				height="260"
				width="260"
				src="https://placeimg.com/260/260/arch"
				class="max-w-sm rounded-lg shadow-2xl"
			/>
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

<div class="card flex-col lg:flex-row bg-base-100 shadow-xl">
	<div class="stats bg-primary text-primary-content">
		<div class="stat">
			<div class="stat-title">Account balance</div>
			<div class="stat-value">$89,400</div>
			<div class="stat-actions">
				<button class="btn btn-sm btn-success">Add funds</button>
			</div>
		</div>

		<div class="stat">
			<div class="stat-title">Current balance</div>
			<div class="stat-value">$89,400</div>
			<div class="stat-actions">
				<button class="btn btn-sm">Withdrawal</button>
				<button class="btn btn-sm">deposit</button>
			</div>
		</div>
	</div>
</div>
