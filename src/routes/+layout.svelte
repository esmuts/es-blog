<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	import '$lib/styles/layout.css';
	// Not sure if this is the best place to import fonts.css?
	import '$lib/styles/fonts.css';

</script>

<Header />

<main>
	<slot />
</main>

<Footer />

