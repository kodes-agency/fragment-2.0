<script lang="ts">
  import formatDate from "$lib/functions/formatDate";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { Maybe } from "graphql/jsutils/Maybe";
  export let title: any;
  export let id: number | string;
  export let img: Maybe<string>;
  export let date: Maybe<Date> | string;
  export let alt: Maybe<string>;

  const dateFormatted = formatDate(date);
  let imgElement: HTMLElement;
</script>

<article class="">
  <a
    href="/blog/{id}"
    on:mouseenter={(event) => {
      imgElement.style.opacity = "0.7";
      imgElement.style.transform = "scale(1)";
    }}
    on:mouseleave={() => {
      imgElement.style.opacity = "0.5";
      imgElement.style.transform = "scale(1.1)";
    }}
  >
    <div class="relative h-96 md:h-80 2xl:h-96 overflow-hidden">
      <div class="flex flex-col justify-end h-full relative z-10 p-5">
        <span>
          <p class="font-bold text-md">{title}</p>
          <p class="date">{dateFormatted}</p>
        </span>
        <p class="border-b border-white text-sm w-fit">read full article</p>
      </div>
      <img
        class="absolute top-0 left-0 w-full h-full object-cover opacity-50 scale-110 z-0 transition-all duration-500"
        src={PUBLIC_IMAGE_URL + img}
        {alt}
        bind:this={imgElement}
      />
    </div>
  </a>
</article>

<style lang="postcss">
</style>
