// This function connects URL slug to blog post name in 'blog' folder.
// Post data returned by 'load' function is automatically passed to +page.svelte.

export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date, image, alt, teaser } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date,
			image,
			alt,
			teaser
		};
	} catch (e) {
		console.log(e);
	}
}
