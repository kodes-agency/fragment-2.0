import { getClient } from "$lib/functions/getClient";
import querySingle from "$lib/queries/pageQueries/singleBlogQuery";
import queryPage from "$lib/queries/pageQueries/singleBlogPageQuerry.js";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals, params }) => {
    const singleBlog = getClient().query({
        query: querySingle(locals.locale, params.slug,)
    })

    const singleBlogPage = getClient().query({
        query: queryPage(locals.locale)
    })

    return {singleBlog, singleBlogPage}
}