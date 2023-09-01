import { getClient } from "$lib/functions/getClient";
import query from "$lib/queries/pageQueries/layoutQuery.js";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals }) => {

  const lang = locals.locale
  const layoutData = getClient().query({
      query: query(locals.locale)
  })

  console.log(lang)
  return {lang, layoutData};
}