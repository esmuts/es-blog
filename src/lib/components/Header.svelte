<script>
	import Hamburger from './Hamburger.svelte';
</script>

<header>
	<h1><a href="/">eckard smuts</a></h1>
	<nav>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/academic">Academic</a></li>
			<li><a href="/talks">Talks</a></li>
			<li><a href="/fiction">Fiction</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>
<style>
	header {
		grid-row: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: calc(2rem + 2vh);
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
