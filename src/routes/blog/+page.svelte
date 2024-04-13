<!-- Renders blog list -->
<script>
	/* 'data' is what is returned from +page.js -- built in with SvelteKit */
	export let data;
</script>

<center><h3>Blog Feed</h3></center>

<ul>
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
			</li></a
		>
		<center><div class="border-line"></div></center>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
	}

	li {
		display: flex;
		gap: 3vmin;
		max-height: 20vmin;
		margin-top: 5vmin;
		margin-bottom: 5vmin;
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

	.border-line {
		width: 100%;
		margin-top: 6vmin;
		border-bottom: 1px solid #66667f;
	}

	@media screen and (min-width: 768px) {
		ul {
			width: 80%;
			align-self: center;
			margin-top: 2vmin;
		}

		li {
			max-height: 10vmin;
			margin-top: 2vmin;
			margin-bottom: 2vmin;
		}

		img {
			height: 10vmin;
		}

		.border-line {
			margin-top: 3vmin;
			margin-bottom: 3vmin;
		}
	}
</style>
