// For svelte/store, see: https://svelte.dev/docs/svelte-store
// I am adapting from: https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/src/lib/assets/js/store.js

import { writable } from 'svelte/store';

export const menuIsOpen = writable(false);
