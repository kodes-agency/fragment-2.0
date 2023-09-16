<script lang="ts">
  import { onMount } from "svelte";
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  // @ts-expect-error
  import { SplitText } from "gsap/dist/SplitText";
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import formatDate from "$lib/functions/formatDate";

  let section: HTMLElement;
  let img: HTMLElement;
  $: sectionData = $page.data.data?.projects?.data[0].attributes

  onMount(() => {
    const ctx = gsap.context(() => {
      const projectHeroTl = gsap.timeline({});
      const split = new SplitText(".heading-anm", { type: "lines" });
      new SplitText(".heading-anm", { type: "lines", linesClass: "lines" });
      gsap.set(".lines", { overflow: "hidden", lineHeight: "1.2" });

      projectHeroTl.to(section, {
        filter: "blur(0px)",
        opacity: 1,
        duration: 1
      })

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

<section bind:this={section} class="relative blur-md flex opacity-0">
  <img
    loading="lazy"
    class="absolute top-0 h-[100svh] min-h-[90vh] object-center object-cover opacity-50 -z-10 w-full"
    src={PUBLIC_IMAGE_URL +
      sectionData?.thumbnail?.data?.attributes?.url+"?format=webp"}
    alt={sectionData?.thumbnail?.data?.attributes?.alternativeText}
  />
  <div
    class="content-wrapper relative h-[100svh] min-h-[90vh] flex flex-col p-5 md:p-20 lg:p-52 justify-center w-full"
  >
    <span class="flex flex-col space-y-7 md:space-y-10">
      <div class="overflow-hidden">
        <h1 class="heading-anm text-4xl md:text-6xl lg:text-7xl">
          {sectionData?.title}
        </h1>
      </div>
      <div class="overflow-hidden">
        <h2 class="font-bold text-2xl md:text-3xl heading-anm">
          {sectionData?.client?.data?.attributes?.clientName}
        </h2>
      </div>
    </span>
    <div
      class="absolute bottom-20 portrait:right-auto landscape:right-5 landscape:md:right-auto flex flex-col overflow-hidden"
    >
    {#each sectionData?.categories?.data as category }  
      <p class="heading-anm uppercase text-yellow italic font-bold text-xl landscape:text-end landscape:md:text-start">
          {category?.attributes?.category}
      </p>
    {/each}
    </div>
    <div class="absolute bottom-10 md:bottom-20 md:right-40 flex flex-col overflow-hidden">
      {#if sectionData.dateStart }
        <p class="heading-anm uppercase text-white text-xl">
          {formatDate(sectionData.dateStart)}
        </p>
      {/if}
      {#if sectionData.dateFinish }
        <p class="heading-anm uppercase text-white text-xl">
          {formatDate(sectionData.dateFinish)}
        </p>
      {/if}
    </div>
  </div>
</section>
