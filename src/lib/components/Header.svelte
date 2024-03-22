<script>
	import Hamburger from './Hamburger.svelte';
	import xSVG from '$lib/assets/svg/xmark-solid.svg';
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
	<div class="title"><a href="/" on:click={hideMenu}>eckard smuts</a></div>
	<nav>
		<Hamburger />

		<div class="mobile-menu" class:menu-open={$menuIsOpen}>
			<button
				class="x-menu"
				class:x-menu-option={$menuIsOpen}
				aria-pressed={$menuIsOpen}
				on:click={toggleMenu}
			>
				<img src={xSVG} alt="open menu" />
			</button>
			<ul>
				<li><a href="/" on:click={toggleMenu}><strong>Home</strong></a></li>
				<li><a href="/academic" on:click={toggleMenu}><strong>Academic</strong></a></li>
				<li><a href="/talks" on:click={toggleMenu}><strong>Talks</strong></a></li>
				<li><a href="/fiction" on:click={toggleMenu}><strong>Fiction</strong></a></li>
				<li><a href="/about" on:click={toggleMenu}><strong>About</strong></a></li>
				<li><a href="/blog" on:click={toggleMenu}><strong>Blog</strong></a></li>
			</ul>
		</div>

		<!-- 
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/academic">Academic</a></li>
			<li><a href="/talks">Talks</a></li>
			<li><a href="/fiction">Fiction</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
		-->
	</nav>
</header>

<style>
	header {
		grid-row: 1;
		margin-top: 5vmin;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5vmin;
	}

	.title {
		font-size: calc(2rem + 1.5vh);
	}

	.mobile-menu {
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
		top: 5vmin;
		right: 5vmin;
		background: transparent !important;
		color: inherit;
		padding: 0;
		border: 0;
	}

	.x-menu {
		width: 7vmin;
		display: none;
	}

	.x-menu-option {
		display: flex;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		/* Color to filter converter: https://codepen.io/sosuke/pen/Pjoqqp */
		filter: invert(9%) sepia(44%) saturate(571%) hue-rotate(201deg) brightness(91%) contrast(94%);
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 4vmin;
		padding-right: 6vmin;
		margin-top: 25vmin;
		color: #1d1d2f;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
