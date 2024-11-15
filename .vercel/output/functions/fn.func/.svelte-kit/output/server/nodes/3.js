

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BwaFJzQj.js","_app/immutable/chunks/scheduler.LR2eQXLY.js","_app/immutable/chunks/index.CqoyEDq_.js"];
export const stylesheets = ["_app/immutable/assets/3.DWzSk5x2.css"];
export const fonts = [];
