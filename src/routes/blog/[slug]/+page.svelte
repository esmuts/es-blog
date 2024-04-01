<!-- Renders blog post -->

<script>
	// 'data' is automatically loaded from load function in '+page.js'.
	export let data;
</script>

<!--
	Injects Open Graph metadata into page head 
	See:https://ogp.me/
		https://svelteboard.com/blog/open-graph
-->
<svelte:head>
	<meta property="og:title" content={data.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={data.url} />
	<meta property="og:image" content={data.ogImage} />
	<meta property="og:description" content={data.description} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<!-- Renders a blog post -->

<article>
	<h1>{data.title}</h1>
	<p><i>Published: {data.date}</i></p>
	<div class="image-box">
		<center><img src={data.image} alt={data.alt} /></center>
		<center><small><i>{data.credit}</i></small></center>
	</div>

	<!-- svelte:component is a dynamic component, provided as the 'this' prop value. -->
	<span>
		<svelte:component this={data.content} />
	</span>
</article>
<br />

<style>
	.image-box {
		padding-top: 3vmin;
		padding-bottom: 3vmin;
	}

	img {
		width: 100%;
		max-width: 340px;
	}

	@media screen and (min-width: 768px) {
		.image-box {
			float: left;
			padding-top: 1vmin;
			padding-bottom: 1vmin;
			margin-right: 5vmin;
		}
	}
</style>
