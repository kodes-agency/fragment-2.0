<script lang="ts">
  import { page } from "$app/stores";

  function substituteLangParameter(
    inputString: string | null,
    lang: string,
    slug?: any
  ) {
    // @ts-expect-error
    if (!inputString.includes("slug")) {
      // @ts-expect-error
      return inputString.replace(/\[\[lang\]\]/g, lang);
    } else {
      // @ts-expect-error
      let param = inputString.replace(/\[\[lang\]\]/g, lang);
      return param.replace(/\[slug\]/g, slug);
    }
  }

</script>

<div class="flex space-x-4 items-center justify-center">
  <a
  data-sveltekit-reload
    href={substituteLangParameter($page.route.id, "en", $page.params.slug)}
    class="cursor-pointer transition-all hover:text-yellow text-xl {$page.params.lang == 'en' || !$page.params.lang ? "font-bold" : "font-normal"}"
  >
    EN
  </a>
  <a 
    data-sveltekit-reload
    href={substituteLangParameter($page.route.id, "bg", $page.params.slug)}
    class="cursor-pointer transition-all hover:text-yellow text-xl {$page.params.lang == 'bg' ? "font-bold" : "font-normal"}"
  >
    БГ
  </a>
</div>
