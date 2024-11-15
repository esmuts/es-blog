import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.CtChHSKL.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.LR2eQXLY.js","_app/immutable/chunks/index.CqoyEDq_.js"];
export const stylesheets = ["_app/immutable/assets/6.PZdbrRt0.css"];
export const fonts = [];
