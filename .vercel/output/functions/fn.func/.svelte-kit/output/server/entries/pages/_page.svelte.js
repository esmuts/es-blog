import { c as create_ssr_component, v as validate_component, f as each, e as escape, b as add_attribute } from "../../chunks/ssr.js";
const css$1 = {
  code: "article.svelte-1syf4py{text-align:center}",
  map: null
};
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="svelte-1syf4py" data-svelte-h="svelte-1ddr28m"><p><i>&quot;Dear future generations: Please accept our apologies. We were rolling drunk on petroleum.&quot;</i></p> <p>-- Kurt Vonnegut</p> </article>`;
});
const css = {
  code: "ul.svelte-1fq2jo5{max-height:40vh;overflow:scroll;scrollbar-width:0}ul.svelte-1fq2jo5::-webkit-scrollbar{display:none}ul.svelte-1fq2jo5::-webkit-scrollbar{-ms-overflow-style:none;scrollbar-width:none}li.svelte-1fq2jo5{width:100%}a.svelte-1fq2jo5{text-decoration:none}@media screen and (min-width: 1024px){.blog-feed.svelte-1fq2jo5{padding-left:5vmin;padding-right:5vmin}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `  ${$$result.head += `<!-- HEAD_svelte-13dt3pw_START -->${$$result.title = `<title>Eckard Smuts</title>`, ""}<!-- HEAD_svelte-13dt3pw_END -->`, ""} <div class="home-display"><br> <br> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {})} <br> <br> <br> <br> <div class="blog-feed svelte-1fq2jo5"><center data-svelte-h="svelte-g9bg63"><h5>--- Recent Posts ---</h5></center>  <ul class="svelte-1fq2jo5">${each(data.posts, (post) => {
    return `<li class="svelte-1fq2jo5"><i><small>${escape(post.meta.date)}</small></i> <a${add_attribute("href", post.path, 0)} class="svelte-1fq2jo5">${escape(post.meta.title)}</a> </li>`;
  })}</ul></div> </div>`;
});
export {
  Page as default
};
