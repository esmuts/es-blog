<script>
	// 'data' is automatically loaded from load function in '+page.js'.
	export let data;
</script>

<!-- Renders a blog post -->
<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<!-- svelte:component is a dynamic component, provided as the 'this' prop value. -->
	<svelte:component this={data.content} />
</article>
