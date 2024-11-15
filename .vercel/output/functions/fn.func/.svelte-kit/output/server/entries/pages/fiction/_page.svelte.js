import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const Fiction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 data-svelte-h="svelte-136iw1z">Short Stories</h3> <ul data-svelte-h="svelte-1ytp1op"><li><p>“Let The Worms Have It.” <em>The Johannesburg Review of Books</em>, 2022. (<a href="https://johannesburgreviewofbooks.com/2022/12/20/fiction-issue-read-let-the-worms-have-it-a-new-short-story-by-eckard-smuts/" rel="nofollow">short story</a>)</p></li> <li><p>“Home(TM).” <em>The Johannesburg Review of Books</em>, 2022. (<a href="https://johannesburgreviewofbooks.com/2022/05/02/new-short-fiction-home-by-eckard-smuts/" rel="nofollow">short story</a>)</p></li></ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fiction, "Fiction").$$render($$result, {}, {}, {})} <br>`;
});
export {
  Page as default
};
