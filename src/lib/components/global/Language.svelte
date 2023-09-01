<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  
let chosenLang = $page.data.lang

function substituteLangParameter(inputString:string, lang:string, slug?:any) {
  if(!inputString.includes('slug')){
    return inputString.replace(/\[\[lang\]\]/g, lang);
  } else {
    let param = inputString.replace(/\[\[lang\]\]/g, lang);
    return param.replace(/\[slug\]/g, slug);
  }
}

onMount(()=>{
  chosenLang
})

async function onChangeHandler() {
    // @ts-expect-error
    window.location = (substituteLangParameter($page.route.id, chosenLang, $page.params.slug))
  }
</script>

<form method="POST" class="flex space-x-4 items-center justify-center">
  <div>
    <input type="radio" id="lang-en" value="en" class="hidden peer" name="lang" bind:group={chosenLang} on:change={onChangeHandler}>
    <label for="lang-en" class="cursor-pointer peer-checked:font-bold peer-checked:italic transition-all hover:text-yellow text-xl">
        EN
    </label>
  </div>
  <div>
    <input type="radio" id="lang-bg" value="bg" class="hidden peer" name="lang" bind:group={chosenLang} on:change={onChangeHandler}>
    <label for="lang-bg" class="cursor-pointer peer-checked:font-bold peer-checked:italic transition-all hover:text-yellow text-xl">
        БГ
    </label>
  </div>
</form>