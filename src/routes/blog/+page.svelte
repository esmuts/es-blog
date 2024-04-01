<!-- Renders blog list -->
<script>
	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
	console.log(data.posts[0].meta.image);
</script>

<center><h3>Blog Feed</h3></center>

<div class="blog-posts-display">
	{#each data.posts as post}
		<div class="image-box">
			<a href={post.path}><img src={post.meta.image} alt={post.meta.alt} /></a>
		</div>
	{/each}
</div>

<style>
	.blog-posts-display {
		display: grid;
		grid-template-columns: repeat(3, 33%);
	}

	.image-box {
		padding: 1vmin;
	}

	img {
		object-fit: cover;
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
