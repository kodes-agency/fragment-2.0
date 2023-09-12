<script lang="ts">
  import BlogItem from "$lib/components/elements/Blog.svelte";
  import "@splidejs/svelte-splide/css/core";
  import { page } from "$app/stores";
  import type { Blog } from "../../../../__generated__/graphql";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";

  let section: HTMLElement;
  let blogs: { id: number; attributes: Blog }[];

  $: sectionData = $page.data.data?.homePage?.data?.attributes;
  // @ts-expect-error
  $: blogs = $page.data.data?.homePage?.data?.attributes?.featuredBlogs?.data;
</script>

<section
  bind:this={section}
  class="min-h-screen px-5 md:px-20 lg:px-40 py-20 justify-center hidden md:block"
>
  <div class="grid-wrapper">
    <div
      class="flex flex-col justify-between col-span-2 2xl:col-span-3 element gradient transition-all z-10 gradient-anm h-80 2xl:h-96"
    >
      <a class="h-full w-full transition-all" href="{$page.params.lang ? "/"+$page.params.lang : ""}/blog">
        <div class="h-full p-5 relative flex flex-col justify-between">
          <div class="">
            <h2 class="text-5xl font-bold">{sectionData?.blogHeading}</h2>
            <h3 class="text-2xl font-normal">{sectionData?.blogSubtext}</h3>
          </div>
          <p class="border-b-2 border-white w-fit font-normal">{$page.data.layoutData?.data?.menu?.data?.attributes?.browseAll}</p>
        </div>
      </a>
    </div>
    {#each blogs as blog}
      <div class="">
        <BlogItem
          slug={blog?.attributes.slug}
          title={blog?.attributes?.title}
          date={blog.attributes.publishedAt}
          img={blog.attributes.thumbnail?.data?.attributes?.url+"?format=webp&resize=400x400&embed"}
          alt={blog.attributes.thumbnail?.data?.attributes?.alternativeText}
        />
      </div>
    {/each}
  </div>
</section>
<section class="md:hidden p-5 min-h-screen">
  <div class="mb-10">
    <h2 class="text-4xl font-bold">{sectionData?.blogHeading}</h2>
    <h3 class="text-xl font-normal">{sectionData?.blogSubtext}</h3>
  </div>
  <Splide
    hasTrack={false}
    aria-label="Slider with featured blogs"
    options={{
      rewind: true,
    }}
  >
    <SplideTrack>
      {#each blogs as blog}
        <SplideSlide>
          <div class="max-w-[90vh]">
            <BlogItem
              slug={blog?.attributes.slug}
              title={blog?.attributes?.title}
              date={blog.attributes.publishedAt}
              img={blog.attributes.thumbnail?.data?.attributes?.url+"?format=webp&resize=400x400&embed"}
              alt={blog.attributes.thumbnail?.data?.attributes?.alternativeText}
            />
          </div>
        </SplideSlide>
      {/each}
    </SplideTrack>

    <div class="flex justify-between mt-10">
      <a
        class="border-b-2 border-white text-lg hover:scale-110 transition-all"
        href="{$page.params.lang ? "/"+$page.params.lang : ""}/work">{$page.data.layoutData?.data?.menu?.data?.attributes?.browseAll}</a
      >
      <div class="flex space-x-5 splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 16L20.25 9.0718L20.25 22.9282L9 16Z" fill="#F5F5F5" />
            <path d="M9 16L20.25 9.0718L20.25 22.9282L9 16Z" stroke="#F5F5F5" />
            <rect
              x="1"
              y="1"
              width="29"
              height="29"
              stroke="#F5F5F5"
              stroke-width="2"
            />
          </svg>
        </button>
        <button class="splide__arrow splide__arrow--next">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 15L10.75 21.9282L10.75 8.0718L22 15Z" fill="#F5F5F5" />
            <path
              d="M22 15L10.75 21.9282L10.75 8.0718L22 15Z"
              stroke="#F5F5F5"
            />
            <rect
              x="30"
              y="30"
              width="29"
              height="29"
              transform="rotate(180 30 30)"
              stroke="#F5F5F5"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </Splide>
</section>

<style lang="postcss">
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
  }

  @media only screen and (min-width: 1450px) {
    .grid-wrapper {
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    }
  }
</style>
