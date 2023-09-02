<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { BlogLayoutDynamicZone } from "../../../../__generated__/graphql";

  let layout: BlogLayoutDynamicZone[];
  $: layout = $page.data?.singleBlog?.data?.blogs?.data[0]?.attributes?.layout

</script>

<section class="z-10 opacity-100 relative">
  {#if layout[0]}
    <article class=" bg-white min-h-screen flex flex-col p-5 md:px-32 lg:px-64 2xl:px-72 py-10 space-y-14 md:space-y-20">
      {#each layout as element}
        {#if element.__typename == "ComponentBlogLayoutImage"}
            <img
              class="w-full"
              src={PUBLIC_IMAGE_URL + element?.image?.data?.attributes?.url+"?format=webp"}
              alt={element.image?.data?.attributes?.alternativeText}
            />
        {/if}
        {#if element.__typename == "ComponentBlogLayoutParagraphContent"}
          <div class="htmlStyle">{@html element?.Paragraph}</div>
        {/if}
      {/each}
      </article>
  {/if}
</section>

<style lang="postcss">
  :global(.htmlStyle p, .htmlStyle a, .htmlStyle li) {
    color: var(--black-color);
    font-size: 18px;
  }

  :global(.htmlStyle ul) {
    list-style: inside;
  }

  :global(.htmlStyle h1) {
    color: var(--black-color);
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
  }

  :global(.htmlStyle h2) {
    color: var(--black-color);
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
  }

  :global(.htmlStyle h3) {
    color: var(--black-color);
    font-size: 25px;
    font-weight: bold;
    line-height: 1;
  }

  :global(.htmlStyle h4) {
    color: var(--black-color);
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
  }

  :global(.htmlStyle a) {
    font-weight: bold;
  }
</style>