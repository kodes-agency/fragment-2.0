import { getClient } from "$lib/functions/getClient";
import query from "$lib/queries/pageQueries/projectPageQuery";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals, params }) => {
    const data = getClient().query({
        query: query(locals.locale, params.id,)
    })

    return data
}