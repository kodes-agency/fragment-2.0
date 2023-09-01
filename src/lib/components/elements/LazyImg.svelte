<script lang="ts">
  import { PUBLIC_IMAGE_URL } from '$env/static/public';
  import { onMount } from 'svelte';

  export let img: any
  export let style: string = ""

  let divElement: HTMLDivElement
  let imgElement: HTMLImageElement

  function loaded() {
    divElement.classList.add("loaded");
    divElement.classList.remove("blurry")
  }

  onMount(() => {
    if (imgElement.complete) {
      loaded();
    } else {
      imgElement.addEventListener("load", loaded);
    }
  });
</script>

<div bind:this={divElement} class="{style } bg-no-repeat bg-cover bg-center blurry" style="background-image: url({PUBLIC_IMAGE_URL+img.formats.thumbnail.url});">
  <img bind:this={imgElement} src={PUBLIC_IMAGE_URL+img.url} class="h-full w-full object-cover object-center" alt={img.alternativeText} loading="lazy" />
</div>


<style lang="postcss">
  .blurry {
    filter: blur(10px);
  }
</style>