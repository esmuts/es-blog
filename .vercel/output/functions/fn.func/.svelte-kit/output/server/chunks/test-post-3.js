import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Test Post Three",
  "date": "2024-02-13"
};
const Test_post_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1bohba7">Wait till you see how this one rocks your boat</h1> <p data-svelte-h="svelte-uj9wez">It’s the most incredible thing, but I’ve never actually…</p> <p data-svelte-h="svelte-1snmq44">I should print a <em>t-shirt</em> 👕with that on.</p>`;
});
export {
  Test_post_3 as default,
  metadata
};
