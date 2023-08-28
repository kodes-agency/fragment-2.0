<script lang="ts">
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText";
  import ScrollDown from "$lib/components/elements/ScrollDown.svelte";

  let section: HTMLElement;

  $: sectionData = $page.data.data?.aboutPage?.data?.attributes;

  onMount(() => {
    const ctx = gsap.context(() => {
      const heroSubtextSplit = new SplitText("#about-hero-subtext", {
        type: "lines",
      });
      new SplitText("#about-hero-subtext", {
        type: "lines",
        linesClass: "parentLine",
      });
      gsap.set(".parentLine", { overflow: "hidden" });

      const aboutHeroTl = gsap.timeline({});

      aboutHeroTl.from("#about-hero-heading", {
        opacity: 0,
        delay: 1,
        duration: 3,
        ease: "power2.out",
      });

      aboutHeroTl.from(
        heroSubtextSplit.lines,
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
    }, section);

    return () => {
      ctx.revert();
    };
  });
</script>

<section id="about-hero-section" class="relative" bind:this={section}>
  <img
    src={PUBLIC_IMAGE_URL + sectionData?.heroBgImage?.data?.attributes?.formats.compress.url}
    class="absolute top-0 left-0 z-0 h-screen w-screen object-cover"
    alt={sectionData?.heroBgImage?.data?.attributes?.alternativeText}
  />
  <div
    class="min-h-screen flex flex-col p-2 md:p-20 lg:p-40 justify-center space-y-7 relative z-10"
  >
    <h1 id="about-hero-heading" class="text-5xl md:text-7xl font-bold">
      {sectionData?.heroHeading}
    </h1>
    <h3 id="about-hero-subtext" class="text-3xl max-w-3xl">
      {sectionData?.heroSubtext}
    </h3>
  </div>
  <ScrollDown />
</section>
