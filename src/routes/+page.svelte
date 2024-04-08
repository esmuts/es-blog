<!-- Renders Home page -->

<script>
	import Quote from '$lib/components/Quote.svelte';
	import src from '$lib/images/profile-square.webp';

	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
</script>

<svelte:head>
	<title>Eckard Smuts</title>
</svelte:head>

<div class="home-display">
	<center><img {src} alt="Eckard Smuts profile pic" /></center>

	<br />
	<Quote />
</div>
<br />
<div class="blog-feed">
	<center><h5>-- Recent Posts --</h5></center>
	<!-- This is copy pasted from the Blog +page.svelte -- refactor to component? -->
	<ul>
		{#each data.posts as post}
			<li>
				<small>{post.meta.date}</small>
				<small
					><a href={post.path}>
						{post.meta.title}
					</a></small
				>
			</li>
		{/each}
	</ul>
</div>
<br />

<style>
	.home-display {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	img {
		margin-top: 2rem;
		width: 100%;
		max-width: 340px;
	}

	ul {
		list-style-type: disc;
		padding-inline-start: 4vmin;
		max-height: 40vmin;
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
