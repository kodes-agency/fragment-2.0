import { json } from '@sveltejs/kit'
import { langStore } from '$lib/stores/store';

  

// export async function POST({request, cookies}) {
//     const { lang } = await request.json()

//     if(lang.includes('en') || lang.includes('bg')){
//       cookies.set('lang', lang, {
//         path: "/"
//       })
//       langStore.set(lang)
//       return json({lang})
//     } else {
//       langStore.set('en')
//       return json({
//         error: "The chosen language is not supported."
//       })
//     }
// }