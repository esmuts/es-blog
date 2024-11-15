import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/test-post-1.md": () => import("../../../../chunks/test-post-1.js"), "/src/routes/blog/test-post-2.md": () => import("../../../../chunks/test-post-2.js"), "/src/routes/blog/test-post-3.md": () => import("../../../../chunks/test-post-3.js") });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return json(sortedPosts);
};
export {
  GET
};
