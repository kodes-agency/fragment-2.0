import { getClient } from "$lib/functions/getClient";
import query from "$lib/queries/pageQueries/contactPageQuery";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals }) => {
    const data = getClient().query({
        query: query(locals.locale)
    })
    return data
}