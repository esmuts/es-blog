/* Loads first 10 blog posts for use in feed on Home page */

// 'fetch' is a special argument available to the 'load' function in SvelteKit.
export const load = async ({ fetch }) => {
    const response = await fetch(`/api/posts`);
    const posts = await response.json();
    
    // Truncates blog post array down to 10 if it has more entries.
    if (posts.length > 10) {
        posts.length = 10;
    }

    return {
        // 'posts' returns to +page.svelte as 'data' -- this is built in with
        // +page.js files, it seems.
        posts
    };
}