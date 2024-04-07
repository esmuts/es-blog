<!-- Renders Home page -->

<script>
	import Quote from '$lib/components/Quote.svelte';
	import src from '$lib/images/profile-main.jpeg';

	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
</script>

<svelte:head>
	<title>Eckard Smuts</title>
</svelte:head>

<div class="home-display">
	<center><img {src} alt="Eckard Smuts profile pic" /></center>
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
	<br />
</div>

<style>
	.home-display {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
	}

	img {
		margin-top: 2rem;
		width: 95%;
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

	@media screen and (min-width: 768px) {
		/*
		.blog-feed {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			width: 25vw;
			padding: 5vmin;
			background: #51f5b6;
			color: #1d1d2f
		}



		a {
			color: inherit;
		}
		*/
	}
</style>
