import { getClient } from "$lib/functions/getClient";
import query from "$lib/queries/pageQueries/homePageQuery";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals }) => {
    const data = getClient().query({
        query: query(locals.locale)
    })

    return await data
}

