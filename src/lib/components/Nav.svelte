<script>
	import menuSVG from '$lib/assets/svg/bars-solid.svg';
	import xSVG from '$lib/assets/svg/xmark-solid.svg';

	// Useful to have menu status as store, so it can be used in different
	// components and routes.
	import { menuIsOpen } from '../assets/js/store.js';

	// See https://kit.svelte.dev/docs/modules#$app-navigation - I'm using this
	// to make sure the mobile menu closes when navigating.
	// Very helpful: https://svelte.dev/blog/view-transitions
	import { onNavigate } from '$app/navigation';

	onNavigate(async (navigation) => {
		menuIsOpen.set(false);
	});

	// Toggles hamburger menu
	const toggleMenu = () => {
		menuIsOpen.set(!$menuIsOpen);
	};
</script>

<nav class:menu-open={$menuIsOpen}>
	<div class="mobile-menu-icon">
		{#if !$menuIsOpen}
			<button aria-pressed={$menuIsOpen} on:click={toggleMenu}
				><img class="burger-menu-icon" src={menuSVG} alt="open menu" /></button
			>
		{:else}
			<button class="x-menu-icon" aria-pressed={$menuIsOpen} on:click={toggleMenu}
				><img src={xSVG} alt="close menu" /></button
			>
		{/if}
	</div>
	<ul class:show-list-items={$menuIsOpen}>
		<li><a href="/"><strong>Home</strong></a></li>
		<li><a href="/about"><strong>About</strong></a></li>
		<li><a href="/academic"><strong>Academic</strong></a></li>
		<li><a href="/fiction"><strong>Fiction</strong></a></li>
		<li><a href="/blog"><strong>Blog</strong></a></li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		width: 0;
		background: #51f5b6;
		transition: width 0.2s ease;
	}

	.menu-open {
		width: 35vmin;
	}

	button {
		position: fixed;
		z-index: 10;
		top: 5vmin;
		right: 4vmin;
		width: 5vmin;
		background: transparent !important;
		color: inherit;
		padding: 0;
		border: 0;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.burger-menu-icon {
		/* Color to filter converter: https://codepen.io/sosuke/pen/Pjoqqp */
		filter: invert(94%) sepia(90%) saturate(7346%) hue-rotate(180deg) brightness(108%)
			contrast(103%);
	}

	.x-menu-icon {
		/* Color to filter converter: https://codepen.io/sosuke/pen/Pjoqqp */
		filter: invert(9%) sepia(44%) saturate(571%) hue-rotate(201deg) brightness(91%) contrast(94%);
	}

	ul {
		list-style-type: none;
		display: none;
		flex-direction: column;
		align-items: end;
		gap: 2vmin;
		padding-right: 4vmin;
		padding-top: 30vmin;
		color: #1d1d2f;
		transition: width 0.2s ease;
	}

	.show-list-items {
		display: flex;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@media screen and (min-width: 768px) {
		.mobile-menu-icon {
			display: none;
		}

		nav {
			left: 0;
			width: 100vw;
			height: 10vmin;
			display: flex;
			align-items: center;
			justify-content: end;
			background: #1d1d2f;
			transition-duration: 0s;
		}

		ul {
			display: flex;
			color: #eef;
			flex-direction: row;
			gap: 3vmin;
			padding: 6vmin;
			justify-content: end;
		}
	}
</style>
