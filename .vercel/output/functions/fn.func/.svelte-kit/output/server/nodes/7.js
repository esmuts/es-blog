

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fiction/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.BJc5CLQG.js","_app/immutable/chunks/scheduler.LR2eQXLY.js","_app/immutable/chunks/index.CqoyEDq_.js"];
export const stylesheets = [];
export const fonts = [];
