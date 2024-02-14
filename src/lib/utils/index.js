// I'm basically just copying this from
// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
// A lot of the complexity here has to do with the fact that multiple promises
// need to be fulfilled (i.e. all the markdown files need to be imported).

export const fetchMarkdownPosts = async () => {
	// import.meta.glob is a Vite function that allows importing multiple
	// modules from the file system.
	// See - https://vitejs.dev/guide/features
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	// Object.entries returns an array of the given object's enumerable
	// string-keyed property key-value pairs (as per MDN web docs).
	const iterablePostFiles = Object.entries(allPostFiles);

	// Promise.all takes iterable array of promises as input, and returns a
	// single promise, as an array of fulfilled values, when all the input
	// promises have been fulfilled (as per MDN web docs).
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			// The filepath returned as key for the import.meta.glob array will
			// be '/src/routes/blog/*.md'. But since the post route loads from
			// +page.svelte in '/routes', the path we need for link is '/blog/*'
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
