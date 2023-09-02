<script lang="ts">
  import { onMount } from "svelte";
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  // @ts-expect-error
  import { SplitText } from "gsap/dist/SplitText";
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";

  let section: HTMLElement;
  let img: HTMLElement;
  // @ts-expect-error
  $: sectionData = $page.data.data?.landingPages?.data[0]?.attributes;

  onMount(() => {
    const ctx = gsap.context(() => {
      const projectHeroTl = gsap.timeline({});
      const split = new SplitText(".heading-anm", { type: "lines" });
      new SplitText(".heading-anm", { type: "lines", linesClass: "lines" });
      gsap.set(".lines", { overflow: "hidden", lineHeight: "1.2" });

      projectHeroTl.to(section, {
        filter: "blur(0px)",
        opacity: 1,
        duration: 1,
      });

      projectHeroTl.from(split.lines, {
        y: "-150%",
        rotation: -45,
        transformOrigin: "0% 50% -50",
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3,
      });
    }, section);
    return () => {
      ctx.revert();
    };
  });
</script>

<section bind:this={section} class="relative blur-md flex h-[60vh] opacity-0">
  <img
    loading="lazy"
    class="absolute top-0 h-[60vh] object-center object-cover opacity-50 -z-10 w-full"
    src={PUBLIC_IMAGE_URL +
      sectionData?.thumbnail?.data?.attributes?.url +
      "?format=webp"}
    alt={sectionData?.thumbnail?.data?.attributes?.alternativeText}
  />
  <div
    class="content-wrapper relative h-[60vh] flex flex-col p-5 md:p-20 lg:p-52 justify-center"
  >
    <span class="flex flex-col space-y-7 md:space-y-10">
      <div class="overflow-hidden">
        <h1 class="heading-anm text-4xl md:text-6xl lg:text-7xl">
          {sectionData?.title}
        </h1>
      </div>
      {#if sectionData?.client?.data}
        <div class="overflow-hidden">
          <h2 class="font-bold text-2xl md:text-3xl heading-anm">
            {sectionData?.client?.data?.attributes?.clientName}
          </h2>
        </div>
      {/if}
    </span>
    {#if sectionData?.categories?.data}
      <div
        class="absolute bottom-14 flex flex-col justify-between max-w-2xl overflow-hidden"
      >
        {#each sectionData?.categories?.data as category}
          <p class="heading-anm uppercase text-yellow italic font-bold text-xl">
            {category?.attributes?.category}
          </p>
        {/each}
      </div>
    {/if}
  </div>
</section>

<div
  class="w-fit fixed bottom-20 right-5 md:right-10 lg:bottom-20 lg:right-10 z-20"
>
  <a
    class="px-2 py-1 border-2 bg-magenta hover:bg-[rgba(0,0,0,0.5)] border-white"
    href={sectionData.actionButtonLink}>{sectionData.actionButtonText}</a
  >
</div>
