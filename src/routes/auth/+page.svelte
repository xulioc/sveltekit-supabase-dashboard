<script lang="ts">
	import { page } from '$app/stores';
	import { logo } from '$lib/stores';
	import { FrownIcon, SmileIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';
	import Forgot from './Forgot.svelte';
	import Invite from './Invite.svelte';
	import Reset from './Reset.svelte';
	import SignIn from './SignIn.svelte';
	import SignUp from './SignUp.svelte';

	export let form: ActionData;
	// const to: string | null = $page.url.searchParams.get('to');

	let view = 'signin';

	$: {
		if ($page.url.searchParams.has('signin')) {
			view = 'signin';
		}
		if ($page.url.searchParams.has('signup')) {
			view = 'signup';
		}
		if ($page.url.searchParams.has('invite')) {
			view = 'invite';
		}
		if ($page.url.searchParams.has('forgot')) {
			view = 'forgot';
		}
		if ($page.url.searchParams.has('reset')) {
			view = 'reset';
		}
	}
</script>

<div in:fade class="flex justify-center align-middle h-screen w-screen">
	<div class="flex my-auto align-middle justify-center w-1/2">
		<div>
			<div class="card my-5 w-full max-w-sm shadow-2xl bg-black">
				{#if $logo}
					<img class="mx-10 mt-10" alt="logo" src={$logo} />
				{/if}
				{#if view == 'signin'}
					<SignIn {form} />
				{:else if view == 'signup'}
					<SignUp {form} />
				{:else if view == 'invite'}
					<Invite {form} />
				{:else if view == 'forgot'}
					<Forgot {form} />
				{:else if view == 'reset'}
					<Reset />
				{/if}
			</div>
			{#if form?.error}
				<div in:fade class="alert alert-error shadow-lg">
					<div>
						<FrownIcon />
						<span>{form?.error}</span>
					</div>
				</div>
			{/if}

			{#if form?.message}
				<div in:fade class="alert alert-success shadow-lg">
					<div>
						<SmileIcon />
						<span>{form?.message}</span>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
