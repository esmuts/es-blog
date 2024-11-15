import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "li.svelte-1celdjs{width:100%;display:flex;align-items:center;gap:1rem}.image-box.svelte-1celdjs{width:40px;min-width:40px}img.svelte-1celdjs{object-fit:cover;height:100%;width:100%}a.svelte-1celdjs{text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `  <h3 data-svelte-h="svelte-8hv15j">Blog Posts</h3> <ul>${each(data.posts, (post) => {
    return `<li class="svelte-1celdjs"><div class="image-box svelte-1celdjs"><img${add_attribute("src", post.meta.image, 0)}${add_attribute("alt", post.meta.alt, 0)} class="svelte-1celdjs"></div> <div><i><small>${escape(post.meta.date)}</small></i> <br> <a${add_attribute("href", post.path, 0)} class="svelte-1celdjs">${escape(post.meta.title)} </a></div> </li>`;
  })}</ul> <br>`;
});
export {
  Page as default
};
