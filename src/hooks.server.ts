import type { Handle } from '@sveltejs/kit';
 
export const handle = (async ({ event, resolve }) => {
  const langParam = event.params.lang || "en"
  if(langParam){
    event.locals.locale = langParam
  }
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', langParam)
  });
}) satisfies Handle;
