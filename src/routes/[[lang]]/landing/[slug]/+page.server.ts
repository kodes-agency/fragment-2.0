import { getClient } from "$lib/functions/getClient";
import query from "$lib/queries/pageQueries/landingPageQuery";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals, params }) => {
    const data = getClient().query({
        query: query(locals.locale, params.slug)
    })

    return data
}