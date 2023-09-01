import { getClient } from "$lib/functions/getClient";
import query from "$lib/queries/pageQueries/homePageQuery";

// export const actions = {
//     setLang: async ({ cookies, request }) => {
//         const formData = await request.formData()
//         const lang: any = formData.get('lang')
//         cookies.set('lang', lang);
//         return {
//             success: true
//         }
//     }
// }



/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals }) => {
    const data = getClient().query({
        query: query(locals.locale)
    })

    return await data
}

