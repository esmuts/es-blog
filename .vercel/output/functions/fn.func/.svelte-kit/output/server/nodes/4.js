

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/academic/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CoQXM-Wr.js","_app/immutable/chunks/scheduler.LR2eQXLY.js","_app/immutable/chunks/index.CqoyEDq_.js"];
export const stylesheets = [];
export const fonts = [];
