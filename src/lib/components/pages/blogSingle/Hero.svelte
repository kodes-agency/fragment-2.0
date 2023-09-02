<script lang="ts">
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";

  let section: HTMLElement;
  let blogWrapper: HTMLElement;
  let blogHeadingWrapper: HTMLElement;
  let blogShortWrapper: HTMLElement;

  $: sectionData = $page.data?.singleBlog?.data?.blogs?.data[0]?.attributes
 
  function effectHandler() {
    const singleBlogHeroTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 0%",
        end: "bottom 40%",
        scrub: true,
        toggleActions: "play none none none",
      },
    });

    gsap.to(section, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5
    })

    singleBlogHeroTl2.to(blogWrapper, {
      width: "100%",
      ease: "power2.out",
    });
  }

  onMount(() => {
    const ctx = gsap.context(() => {
      effectHandler();
    }, section);

    return () => {
      ctx.revert();
    };
  });
</script>

<section
  bind:this={section}
  class="relative blur-md flex flex-col justify-end opacity-0 items-center min-h-screen"
>
  <img
    class="absolute w-screen min-h-screen object-cover top-0 left-0 z-0 opacity-10"
    src={PUBLIC_IMAGE_URL +
      sectionData?.thumbnail?.data?.attributes?.url+"?format=webp"}
    alt={sectionData?.thumbnail?.data?.attributes?.alternativeText}
  />
  <article bind:this={blogWrapper} class="wrapper z-10 bg-white">
    <div class="relative h-2/6 md:h-4/6">
      <img
        class="w-full h-full object-cover"
        src={PUBLIC_IMAGE_URL +
          sectionData?.thumbnail?.data?.attributes?.url+"?format=webp"}
        alt={sectionData?.thumbnail?.data?.attributes?.alternativeText}
      />
      <div
        bind:this={blogHeadingWrapper}
        class="absolute bottom-8 md:bottom-20 bg-[rgba(230,5,117,0.8)] w-full flex items-center justify-center px-4 md:px-10 py-3"
      >
        <div class="texty">
          <h1 class="text-white text-xl md:text-4xl font-bold texty">
            {sectionData?.title}
          </h1>
          <p class="text-white text-lg texty">
            {$page.data.layoutData?.data?.menu?.data?.attributes?.articleBy + " "} {sectionData?.author}
          </p>
        </div>
      </div>
    </div>
    <div
      class="px-5 py-20 md:px-10 h-4/6 md:h-2/6 relative flex flex-col justify-center items-center"
      bind:this={blogShortWrapper}
    >
      <p class="text-black texty font-bold text-md md:text-lg">
        {sectionData?.shortDescription}
      </p>
    </div>
  </article>
</section>

<style lang="postcss">
  .texty {
    width: 55vw;
  }

  .wrapper {
    height: 80vh;
    width: 60vw;
  }

  @media only screen and (max-width: 766px) {
    .texty {
      width: 77vw;
    }

    .wrapper {
      width: 85vw;
      height: 90vh;
    }
  }
</style>
