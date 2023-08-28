<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { BlogLayoutDynamicZone } from "../../../../__generated__/graphql";

  let layout: BlogLayoutDynamicZone[];
  // @ts-expect-error
  $: layout = $page.data.data?.blog?.data?.attributes?.layout;

</script>

<section class="">
  {#if layout[0]}
    <article class=" bg-white min-h-screen flex flex-col p-5 md:px-40 2xl:px-60 py-20 space-y-14 md:space-y-20">
      {#each layout as element}
        {#if element.__typename == "ComponentBlogLayoutParagraph"}
          <p class="text-xl text-black md:px-20">{element?.paragraph}</p>
        {/if}
        {#if element.__typename == "ComponentBlogLayoutImage"}
            <img
              class="w-full"
              src={PUBLIC_IMAGE_URL + element?.image?.data?.attributes?.formats.compress.url}
              alt={element.image?.data?.attributes?.alternativeText}
            />
        {/if}
        {#if element.__typename == "ComponentBlogLayoutQuote"}
          <div class="space-y-5 md:px-20">
            <h2 class="text-2xl text-magenta font-bold italic">"{element.quote}"</h2>
            <p class="text-2xl text-black font-bold italic">{element?.author}</p>
          </div>
        {/if}
        {#if element.__typename == "ComponentBlogLayoutHeading"}
          <h2 class="text-black text-4xl font-bold">{element?.heading}</h2>
        {/if}
      {/each}
      </article>
  {/if}
</section>
