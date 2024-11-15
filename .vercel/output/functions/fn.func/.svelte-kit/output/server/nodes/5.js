import * as universal from '../entries/pages/blog/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/5.Jh4ouFNx.js","_app/immutable/chunks/scheduler.LR2eQXLY.js","_app/immutable/chunks/index.CqoyEDq_.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.BFH14JZE.css"];
export const fonts = [];
