<script>
	export let data;
</script>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					<!-- 'title' property originates in the frontmatter for the .md file. -->
					{post.meta.title}
				</a>
			</h2>
			<!-- 'date' property also originates in the frontmatter for the .md file. -->
			Published {post.meta.date}
		</li>
	{/each}
</ul>
