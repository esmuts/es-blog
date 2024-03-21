<!-- Renders blog post -->

<script>
	// 'data' is automatically loaded from load function in '+page.js'.
	export let data;
</script>

<!-- Renders a blog post -->

<article>
	<h1>{data.title}</h1>
	<p><i>Published: {data.date}</i></p>
	<center><img src={data.image} alt={data.alt} /></center>
	<!-- svelte:component is a dynamic component, provided as the 'this' prop value. -->
	<span>
		<svelte:component this={data.content} />
	</span>
</article>

<style>

	img {
		width: 100%;
		max-width: 340px;
	}

@media screen and (min-width: 768px) {
	img {
		margin-right: 4vmin;
		margin-bottom: 1vmin;
		width: 50%;
		max-width: 340px;
		float: left;
	}
}
</style>
