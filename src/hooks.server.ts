const localeBg = "bg"
const localeEn = "en"

import type { Handle,  } from '@sveltejs/kit';
 
export const handle: Handle = async ({ event, resolve }) => {
  event.locals.locale = localeEn
 
  const response = await resolve(event);
  return response;
};