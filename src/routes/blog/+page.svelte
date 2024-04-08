<!-- Renders blog list -->
<script>
	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
</script>

<br />
<center><h3>Blog Feed</h3></center>

<div class="blog-posts-display">
	{#each data.posts as post}
		<div class="image-box">
			<a href={post.path}><img src={post.meta.image} alt={post.meta.alt} /></a>
		</div>
	{/each}
</div>
<br />

<style>
	.blog-posts-display {
		display: grid;
		gap: 1vmin;
		grid-template-columns: repeat(3, 33%);
		grid-template-rows: auto;
	}

	.image-box {
		position: relative;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		aspect-ratio: 1/1;
	}

	a {
		text-decoration: none;
	}

	@media screen and (min-width: 768px) {
		.blog-posts-display {
			grid-template-columns: repeat(4, 25%);
		}
	}
</style>
