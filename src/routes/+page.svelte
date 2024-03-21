<script>
	import Quote from '$lib/components/Quote.svelte';

	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
</script>

<svelte:head>
	<title>Eckard Smuts</title>
</svelte:head>

<Quote />

<div class="blog-feed">
	<center><h5>Latest Blog Posts</h5></center>

	<!-- This is copy pasted from the Blog +page.svelte -- refactor to component? -->
	<ul>
		{#each data.posts as post}
			<p>
				<li>
					<div class="image-box">
						<img src={post.meta.image} alt={post.meta.alt} />
					</div>
					<div>
						<i><small>{post.meta.date}</small></i>
						<br />
						<a href={post.path}>
							{post.meta.title}
						</a>
					</div>
				</li>
			</p>
		{/each}
	</ul>
</div>

<style>
	.blog-feed {
		width: 66vmin;
		align-self: center;
	}

	h5 {
		padding: 2vmin;
		border-top: 1px solid #eef;
		border-bottom: 1px solid #eef;
	}

	ul {
		max-height: 40vh;
		padding-left: 2vmin;
		padding-right: 2vmin;
		overflow: scroll;
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
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.image-box {
		width: 40px;
		min-width: 40px;
		aspect-ratio: 1/1;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	a {
		text-decoration: none;
	}
</style>
