// 'fetch' is a special argument available to the 'load' function in SvelteKit.
export const load = async ({ fetch }) => {
    const response = await fetch(`/api/posts`);
    const posts = await response.json();

    return {
        // 'posts' returns to +page.svelte as 'data' -- this is built in with
        // +page.js files, it seems.
        posts
    };
}