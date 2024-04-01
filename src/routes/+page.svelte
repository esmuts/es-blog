<!-- Renders Home page -->

<script>
	import Quote from '$lib/components/Quote.svelte';

	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
</script>

<svelte:head>
	<title>Eckard Smuts</title>
</svelte:head>

<div class="home-display">
	<Quote />
	<div class="blog-feed">
		<center><h5>--- Recent Posts ---</h5></center>
		<!-- This is copy pasted from the Blog +page.svelte -- refactor to component? -->
		<ul>
			{#each data.posts as post}
				<li>
					<small>{post.meta.date}</small>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.home-display {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
	}

	ul {
		list-style-type: disc;
		padding-inline-start: 4vmin;
		max-height: 10vh;
		overflow-y: scroll;
		scrollbar-width: 0;
	}

	/* Hiding scrollbar from https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp */

	ul::-webkit-scrollbar {
		display: none; /* Hide scrollbar for Chrome, Safari, Opera */
	}

	ul::-webkit-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	li {
		width: 100%;
	}

	a {
		text-decoration: none;
	}
</style>
