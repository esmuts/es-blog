<!-- Renders blog list -->
<script>
	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
</script>

<br />
<center><h3>Blog Feed</h3></center>
<br />

<div class="blog-list-display">
	<ul>
		<hr />
		{#each data.posts as post}
		<a href={post.path}>	
		<li>
				
				<img src={post.meta.image} alt={post.meta.alt} />
				<h5>
					{post.meta.title}
					<br />
					<small class="post-date">{post.meta.date}</small>
				<br />
				</h5>
				
			</li>
		</a>
			<hr />
		{/each}
	</ul>
</div>
<br />

<style>
	ul {
		list-style-type: none;
	}

	li {
		display: flex;
		gap: 3vmin;
		max-height: 20vmin;
		margin-top: 4vmin;
		margin-bottom: 4vmin;
		align-items: center;
		overflow-y: hidden;
	}

	img {
		object-fit: cover;
		height: 20vmin;
		aspect-ratio: 1 / 1;
	}

	.post-date {
		font-weight: 400;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	hr {
		background-color: #eef;
		margin-top: 4vmin;
		margin-bottom: 4vmin;
	}

	@media screen and (min-width: 768px) {
		li {
			max-height: 10vmin;
			margin-top: 2vmin;
			margin-bottom: 2vmin;
		}

		img {
			height: 10vmin;
		}

		hr {
			margin-top: 0;
			margin-bottom: 0;
		}
	}
</style>
