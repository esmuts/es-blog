<script>
	import Nav from '$lib/components/Nav.svelte';
	import { menuIsOpen } from '../assets/js/store.js';

	export let currentPath = '/';

	// Toggles hamburger menu
	const toggleMenu = () => {
		menuIsOpen.set(!$menuIsOpen);
	};

	// Hides hamburger menu
	const hideMenu = () => {
		menuIsOpen.set(false);
	};
</script>

<header>
	{#if currentPath == '/'}
		<a class="big-title" href="/" on:click={hideMenu}>eckard smuts</a>
	{:else}
		<a class="small-title" href="/" on:click={hideMenu}>e.smuts</a>
	{/if}

	<Nav />
</header>

<style>
	header {
		display: flex;
		margin-top: 5vmin;
		justify-content: center;
		align-items: center;
	}

	.big-title {
		margin-top: 5vmin;
		font-size: calc(2rem + 2.5vh);
	}

	.small-title {
		position: absolute;
		z-index: 10;
		top: 4vmin;
		left: 4vmin;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@media screen and (min-width: 768px) {
		header {
			margin-top: 5vmin;
		}

		.big-title {
			font-size: calc(2rem + 3vh);
		}
		.small-title {
			font-size: calc(1rem + 0.75vh);
			top: 3.5vmin;
		}
	}
</style>
