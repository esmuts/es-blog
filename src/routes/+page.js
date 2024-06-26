/* Loads first 5 blog posts for use in feed on home page. */

// 'fetch' is a special argument available to the 'load' function in SvelteKit.
export const load = async ({ fetch }) => {
    const response = await fetch(`/api/posts`);
    const posts = await response.json();
    
    // Truncates blog post array down to 10 if it has more entries.
    if (posts.length > 5) {
        posts.length = 5;
    }

    return {
        // 'posts' returns to +page.svelte as 'data' -- this is built in with
        // +page.js files, it seems.
        posts
    };
}