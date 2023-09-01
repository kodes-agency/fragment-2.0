import type { Handle } from '@sveltejs/kit';
 
export const handle: Handle = async ({ event, resolve }) => {

  const langParam = event.params.lang
  const langCookie: any = event.cookies.get('lang')
  
  if(!langCookie && !langParam){
    event.locals.locale = 'en'
    event.cookies.set('lang', 'en', {
      path: "/"
    })
  } else if(langParam?.includes('en') || langParam?.includes('bg')){
    event.locals.locale = langParam
    event.cookies.set('lang', langParam, {
      path: "/"
    })
  } else {
    event.locals.locale = langCookie
  }

  const response = await resolve(event);
  return response;
};