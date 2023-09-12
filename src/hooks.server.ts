import type { Handle } from '@sveltejs/kit';
 
export const handle = (async ({ event, resolve }) => {
  const langParam = event.params.lang
  if(langParam){
    event.locals.locale = langParam
  } else {
    event.locals.locale = "en"
  }
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', langParam)
  });
}) satisfies Handle;
