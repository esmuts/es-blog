<!-- Renders Home page -->

<script>
	import Quote from '$lib/components/Quote.svelte';
	import src from '$lib/images/profile-square.webp';
	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;

	// Date converstion:
	// let date = new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});
	// console.log(date);
</script>

<svelte:head>
	<title>Eckard Smuts</title>
</svelte:head>

<div class="home-display">
	<Quote />
	<center><img {src} alt="Eckard Smuts profile pic" /></center>

	<div class="blog-feed">
		<center><h4>-- Recent Posts --</h4></center>
		<!-- This is copy pasted from the Blog +page.svelte -- refactor to component? -->
		<ul>
			{#each data.posts as post}
				<li>
					<a href={post.path}>
						{post.meta.title}
					</a>
					<small>({post.meta.date})</small>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.home-display {
		display: flex;
		flex-direction: column;
		gap: 10vmin;
		height: 100%;
	}

	img {
		width: 100%;
		max-width: 420px;
	}

	ul {
		list-style-type: disc;
		padding-inline-start: 4vmin;
	}

	li {
		width: 100%;
	}

	a {
		text-decoration: none;
	}
</style>
