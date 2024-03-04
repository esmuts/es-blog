<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '$lib/styles/layout.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
