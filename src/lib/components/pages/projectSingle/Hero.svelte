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
  $: sectionData = $page.data.data?.project?.data?.attributes;

  onMount(() => {
    const ctx = gsap.context(() => {
      const projectHeroTl = gsap.timeline({});
      const split = new SplitText(".heading-anm", { type: "lines" });
      new SplitText(".heading-anm", { type: "lines", linesClass: "lines" });
      gsap.set(".lines", { overflow: "hidden", lineHeight: "1.2" });
      projectHeroTl.from(split.lines, {
        y: "-150%",
        rotation: -45,
        delay: 0.5,
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

<section bind:this={section} class="relative flex min-h-screen">
  <img
    loading="lazy"
    class="absolute top-0 min-h-screen object-center object-cover opacity-50 -z-10 w-full"
    src={PUBLIC_IMAGE_URL +
      sectionData?.thumbnail?.data?.attributes?.formats.compress.url}
    alt={sectionData?.thumbnail?.data?.attributes?.alternativeText}
  />
  <div
    class="content-wrapper relative h-screen flex flex-col p-5 md:p-20 lg:p-52 justify-center"
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
    <span
      class="absolute bottom-14 flex justify-between items-end max-w-2xl overflow-hidden"
    >
      <p class="heading-anm uppercase text-yellow italic font-bold text-xl">
        {sectionData?.category?.data?.attributes?.category}
      </p>
    </span>
  </div>
</section>
