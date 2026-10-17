// Load the Supabase client on first use instead of at page load.
//
// The client and its dependencies are ~330 KB of source, and the site only talks
// to Supabase when a visitor submits a form or runs the style quiz. Importing
// `./client` statically put all of it in the entry chunk every visitor downloads.
// The dynamic import is cached by the module loader, so later calls are instant.
export const getSupabase = () => import("./client").then((module) => module.supabase);
