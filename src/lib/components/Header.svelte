<script>
	import Nav from '$lib/components/Nav.svelte';
	import { menuIsOpen } from '../assets/js/store.js';

	// Toggles hamburger menu
	const toggleMenu = () => {
		menuIsOpen.set(!$menuIsOpen);
		console.log($menuIsOpen);
	};

	// Hides hamburger menu
	const hideMenu = () => {
		menuIsOpen.set(false);
	};
</script>

<header>
	<a class="title" href="/" on:click={hideMenu}>eckard smuts</a>
	<Nav />
</header>

<style>
	header {
		grid-row: 1;
		margin-top: 5vmin;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: calc(2rem + 2vh);
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
