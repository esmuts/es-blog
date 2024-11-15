import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
const src = "/_app/immutable/assets/early-morning-hike.DKRIiBHh.jpg";
const css = {
  code: "img.svelte-1fjitr0{margin-top:1rem;width:95%;max-width:340px}p.svelte-1fjitr0{padding:1vmin}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  <p class="svelte-1fjitr0" data-svelte-h="svelte-x4oglu">I&#39;m a Lecturer in the Department of English at Stellenbosch University. My research explores the
	confluence of social and ecological issues in literary texts, focusing especially on postcolonial
	writing. Currently, I&#39;m working on a book about alternative temporalities in a range of novels by
	Southern African authors, including Zoë Wicomb, Bessie Head, Nadine Gordimer, Imraan Coovadia, and
	J.M. Coetzee. From time to time I write short stories, and I try to never be too far away from the
	sea.</p> <center data-svelte-h="svelte-1p5mdqx"><img${add_attribute("src", src, 0)} alt="Eckard Smuts profile pic" class="svelte-1fjitr0"></center> <center data-svelte-h="svelte-jl91bn"><p class="svelte-1fjitr0">Contact: eckards@sun.ac.za</p></center> <br>`;
});
export {
  Page as default
};
