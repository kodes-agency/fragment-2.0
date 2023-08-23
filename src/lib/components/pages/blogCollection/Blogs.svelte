<script lang="ts">
  import BlogItem from "$lib/components/elements/Blog.svelte";
  //  @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  import { onMount } from "svelte";
  //  @ts-ignore
  import { SplitText } from "gsap/dist/SplitText";
  import { page } from "$app/stores";
  import type { Blog } from "../../../../__generated__/graphql";

  let section: HTMLElement;
  let blogs: { id: number; attributes: Blog }[];
  let heading: HTMLElement;
  let subHeading: HTMLElement;

  $: sectionData = $page.data.data?.blogsPage?.data?.attributes;
  // @ts-ignore
  $: blogs = $page.data.data?.blogs?.data;

  onMount(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(subHeading, { type: "lines" });
      new SplitText(subHeading, {
        type: "lines",
        linesClass: "parentLine",
      });
      gsap.set(".parentLine", { overflow: "hidden" });

      const blogsGalleryTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 40%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      blogsGalleryTl.from(heading, {
        opacity: 0,
        duration: 3,
        ease: "power2.out",
      });

      blogsGalleryTl.from(
        split.lines,
        {
          y: "-150%",
          rotation: -45,
          opacity: 0,
          transformOrigin: "0% 50% -50",
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=2.5"
      );

      blogsGalleryTl.from(
        ".blog-item",
        {
          opacity: 0,
          duration: 1,
          scale: 0.8,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=1.5"
      );
    }, section);

    return () => {
      ctx.revert();
    };
  });
</script>

<section
  id="blogs-gallery-section"
  class="p-5 md:p-20 lg:p-40 min-h-screen"
  bind:this={section}
>
  <div class="space-y-4">
    <h2
      bind:this={heading}
      class="heading gradient gradient-text gradient-anm text-center text-4xl md:text-6xl font-bold"
    >
      {sectionData?.blogsHeading}
    </h2>
    <p bind:this={subHeading} class="text-center text-2xl md:text-3xl">
      {sectionData?.blogsSubtext}
    </p>
  </div>
  <div class="blogs-wrapper mt-20">
    {#each blogs as blog}
      <div class="blog-item">
        <BlogItem
          title={blog.attributes.title}
          img={blog.attributes.thumbnail?.data?.attributes?.url}
          alt={blog.attributes.thumbnail?.data?.attributes?.alternativeText}
          id={blog.id}
          date={blog.attributes.publishedAt}
        />
      </div>
    {/each}
  </div>
</section>

<style>
  .blogs-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2vh;
  }
</style>
