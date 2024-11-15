import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Test Post Two",
  "date": "2024-02-13"
};
const Test_post_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-14o1u2p">Here’s another test blog</h1> <p data-svelte-h="svelte-ci3u5n">So the other day I was walking down the road when an idea struck me:</p> <p data-svelte-h="svelte-144hgu4"><em>blah blah blah</em></p> <p data-svelte-h="svelte-e91ef4">And so on.</p>`;
});
export {
  Test_post_2 as default,
  metadata
};
