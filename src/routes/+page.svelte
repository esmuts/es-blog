<!-- Renders Home page -->

<script>
	import Quote from '$lib/components/Quote.svelte';
	import src from '$lib/images/es-profile-mountain.jpg';
	// 'data' is what is returned from +page.js -- built in with SvelteKit.
	// In this case, the first five blog posts.
	export let data;
</script>

<svelte:head>
	<title>Eckard Smuts</title>
</svelte:head>

<div class="home-display">
	<Quote />

	<center><img {src} alt="Eckard Smuts profile pic" /></center>

	<p>
		I'm a Lecturer in the Department of English at Stellenbosch University. My research explores the
		confluence of social and ecological issues in literary texts, focusing especially on
		postcolonial writing. Currently, I'm working on a book about alternative temporalities in a
		range of novels by Southern African authors, including Zoë Wicomb, Bessie Head, Nadine Gordimer,
		Imraan Coovadia, and J.M. Coetzee. From time to time I write short stories, and I try to never
		be too far away from the sea.
	</p>

	<div class="blog-feed">
		<center><h3>-- Recent Blog Posts --</h3></center>

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
		gap: 5vmin;
		height: 100%;
	}

	img {
		width: 100%;
		/* max-width: 680px; */
	}

	.blog-feed {
		margin-top: 10vmin;
	}

	ul {
		list-style-type: disc;
		padding-inline-start: 3vmin;
	}

	li {
		width: 100%;
	}

	a {
		text-decoration: none;
	}

	/**
	@media screen and (min-width: 768px) {
		.home-display {		
			
		}
	}
	*/
</style>
