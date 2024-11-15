import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const css = {
  code: "img.svelte-q5o23e{width:100%;max-width:340px}@media screen and (min-width: 768px){img.svelte-q5o23e{margin-right:4vmin;margin-bottom:1vmin;width:50%;max-width:340px;float:left}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `   <article><h1>${escape(data.title)}</h1> <p><i>Published: ${escape(data.date)}</i></p> <center><img${add_attribute("src", data.image, 0)}${add_attribute("alt", data.alt, 0)} class="svelte-q5o23e"></center>  <span>${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</span></article> <br>`;
});
export {
  Page as default
};
