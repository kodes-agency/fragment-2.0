<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { BlogLayoutDynamicZone } from "../../../../__generated__/graphql";

  let layout: BlogLayoutDynamicZone[];
  // @ts-expect-error
  $: layout = $page.data.data?.blog?.data?.attributes?.layout;
</script>

<section>
  {#if layout[0]}
    <div class="section-wrapper">
      {#each layout as element}
        {#if element.__typename == "ComponentBlogLayoutParagraph"}
          <p>{element?.paragraph}</p>
        {/if}
        {#if element.__typename == "ComponentBlogLayoutImage"}
          <div class="img-wrapper">
            <img
              src={PUBLIC_IMAGE_URL + element?.image?.data?.attributes?.url}
              alt={element.image?.data?.attributes?.alternativeText}
            />
          </div>
        {/if}
        {#if element.__typename == "ComponentBlogLayoutQuote"}
          <div class="quote-wrapper">
            <h4>"{element.quote}"</h4>
            <h4 class="author">{element?.author}</h4>
          </div>
        {/if}
        {#if element.__typename == "ComponentBlogLayoutHeading"}
          <h3>{element?.heading}</h3>
        {/if}
      {/each}
    </div>
  {/if}
</section>

<style>
  .section-wrapper {
    padding: 10vw;
    background-color: var(--white-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 4vh;
  }

  p {
    text-indent: 20px;
    color: var(--black-color);
    padding-inline: 5vw;
    font-size: 20px;
  }

  h4 {
    color: var(--black-color);
    font-weight: bold;
    font-style: italic;
    color: var(--magenta-color);
  }

  h3 {
    color: var(--black-color);
    font-weight: bold;
    font-size: 40px;
  }

  .author {
    color: var(--black-color);
  }

  .quote-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }

  .img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 700px) {
    .section-wrapper {
      padding-inline: 5vw;
    }

    p,
    h4 {
      padding-inline: 0px;
    }
  }
</style>
