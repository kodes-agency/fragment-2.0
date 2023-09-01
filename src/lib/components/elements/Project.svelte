<script lang="ts">
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { Maybe } from "graphql/jsutils/Maybe";
  import LazyImg from "./LazyImg.svelte";
  import { page } from "$app/stores";

  export let slug: Maybe<string>;
  export let category: Maybe<string>;
  export let title: Maybe<string>;
  export let client: Maybe<string>;
  export let img: Maybe<string>;
  export let alt: Maybe<string> = "";

  let section: HTMLElement;
  let content: HTMLElement;
</script>

<a href="/work/{slug}" data-sveltekit-preload-data="tap">
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <article
    bind:this={section}
    class="{category} bg-dark-black lg:bg-transparent p-2 lg:p-0 lg:relative lg:aspect-square overflow-hidden transition-all duration-500"
    on:mouseenter={() => {
      if (window.innerWidth >= 1024) {
        content.style.opacity = "1";
        section.classList.add("gradient", "gradient-anm");
      }
    }}
    on:mouseleave={() => {
      if (window.innerWidth >= 1024) {
        content.style.opacity = "0";
        section.classList.remove("gradient", "gradient-anm");
      }
    }}
  >
    <img
      src={PUBLIC_IMAGE_URL + img}
      {alt}
      class="lg:absolute lg:p-2 lg:top-0 opacity-70 lg:opacity-100 h-full w-full lg:w-auto aspect-square object-cover z-0"
    />
    <div
      bind:this={content}
      class="content-wrapper lg:opacity-0 z-10 flex lg:relative lg:m-2 lg:bg-[rgba(0,0,0,0.3)] flex-col justify-center h-full p-5 transition-all duration-300"
    >
      <div class="">
        <h3 class="text-xl">{title}</h3>
        <p class="text-md font-bold">{client}</p>
      </div>
      <p class="underline hidden md:block  font-bold text-sm lg:absolute bottom-8 left-6">
        {$page.data.layoutData?.data?.menu?.data?.attributes?.openCase}
      </p>
    </div>
  </article>
</a>
