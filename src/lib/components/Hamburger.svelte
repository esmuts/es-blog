<!-- Lots of this is adapted https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/static/css/header-and-footer.css -->

<script>
	import hamburgerSVG from '$lib/assets/svg/bars-solid.svg';
	import xSVG from '$lib/assets/svg/xmark-solid.svg';
	import { menuIsOpen } from '../assets/js/store.js';

	// Toggles hamburger menu
	const toggleMenu = () => {
		menuIsOpen.set(!$menuIsOpen);
	};
</script>

<!-- Hamburger menu button -->
<button class="hamburger-menu" aria-pressed={$menuIsOpen} on:click={toggleMenu}>
	{#if $menuIsOpen}
		<img src={xSVG} alt="close menu" />
	{:else}
		<img src={hamburgerSVG} alt="open menu" />
	{/if}
</button>

<style>
	button {
		position: fixed;
		top: 5vmin;
		right: 5vmin;
		background: transparent !important;
		color: inherit;
		padding: 0;
		border: 0;
	}

	.hamburger-menu {
		width: 7vmin;
		display: flex;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		/* Color to filter converter: https://codepen.io/sosuke/pen/Pjoqqp */
		filter: invert(94%) sepia(90%) saturate(7346%) hue-rotate(180deg) brightness(108%)
			contrast(103%);
	}
</style>
