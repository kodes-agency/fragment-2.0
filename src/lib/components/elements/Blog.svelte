<script lang="ts">
  import formatDate from "$lib/functions/formatDate";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { Maybe } from "graphql/jsutils/Maybe";
  import { page } from "$app/stores";
  export let title: any;
  export let slug: number | string;
  export let img: Maybe<string>;
  export let date: Maybe<Date> | string;
  export let alt: Maybe<string>;
  let imgElement: HTMLElement;
</script>

<article class="">
  <a
    href="{$page.params.lang ? "/"+$page.params.lang : ""}/blog/{slug}"
    on:mouseenter={(event) => {
      imgElement.style.opacity = "0.6";
      imgElement.style.transform = "scale(1)";
    }}
    on:mouseleave={() => {
      imgElement.style.opacity = "0.4";
      imgElement.style.transform = "scale(1.1)";
    }}
  >
    <div class="relative aspect-square md:aspect-auto md:h-80 2xl:h-96 overflow-hidden">
      <div class="flex flex-col justify-end h-full relative z-10 p-5">
        <span>
          <p class="font-bold text-md">{title}</p>
          <p class="date">{formatDate(date)}</p>
        </span>
        <p class="border-b border-white text-sm w-fit">{$page.data.layoutData?.data?.menu?.data?.attributes?.readFullArticle}</p>
      </div>
      <img
        loading="lazy"
        class="absolute top-0 left-0 w-full h-full object-cover opacity-40 scale-110 z-0 transition-all duration-500"
        src={PUBLIC_IMAGE_URL + img}
        {alt}
        bind:this={imgElement}
      />
    </div>
  </a>
</article>

<style lang="postcss">
</style>
