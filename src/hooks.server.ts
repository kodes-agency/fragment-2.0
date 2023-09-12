import type { Handle } from '@sveltejs/kit';
 
export const handle: Handle = async ({ event, resolve }) => {

  const langParam = event.params.lang
  if(langParam){
    event.locals.locale = langParam
  } else {
    event.locals.locale = "en"
  }

  const response = await resolve(event);
  return response;
};