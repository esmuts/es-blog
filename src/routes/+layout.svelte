<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Gets current pathname
	import { page } from '$app/stores';

	import '$lib/styles/layout.css';
	// Not sure if this is the best place to import fonts.css?
	import '$lib/styles/fonts.css';
</script>

<Header currentPath={$page.url.pathname} />

<main>
	<slot />
</main>

<Footer />
