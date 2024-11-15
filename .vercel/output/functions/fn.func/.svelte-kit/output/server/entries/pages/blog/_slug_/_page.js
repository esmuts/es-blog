const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../test-post-1.md": () => import("../../../../chunks/test-post-1.js"), "../test-post-2.md": () => import("../../../../chunks/test-post-2.js"), "../test-post-3.md": () => import("../../../../chunks/test-post-3.js") }), `../${params.slug}.md`);
    const { title, date, image, alt, teaser } = post.metadata;
    const content = post.default;
    return {
      content,
      title,
      date,
      image,
      alt,
      teaser
    };
  } catch (e) {
    console.log(e);
  }
}
export {
  load
};
