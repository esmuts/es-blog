<!-- Renders blog list -->
<script>
	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
	console.log(data.posts[0].meta.image)
</script>

<h3>Blog Posts</h3>

<ul>
	{#each data.posts as post}
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
	{/each}
</ul>
<br />

<style>
	li {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.image-box {
		width: 40px;
		min-width: 40px;
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
