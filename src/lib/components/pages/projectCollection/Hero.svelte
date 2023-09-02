<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  // @ts-expect-error
  import { SplitText } from "gsap/dist/SplitText";
  import ScrollDown from "$lib/components/elements/ScrollDown.svelte";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";

  let section: HTMLElement;
  $: sectionData = $page.data.data?.workPage?.data?.attributes;

  onMount(() => {
    if($page.url.search != "?repeat=true"){
        const ctx = gsap.context(() => {
          const subtext = new SplitText("#work-hero-subtext", { type: "lines" });
          new SplitText("#work-hero-subtext", {
            type: "lines",
            linesClass: "parentLine",
          });
          gsap.set(".parentLine", { overflow: "hidden" });
    
          const workHeroTl = gsap.timeline({});

          workHeroTl.to(section, {
            filter: "blur(0px)",
            opacity: 1,
            duration: 1.5
          })
    
          workHeroTl.from(".work-heading", {
            opacity: 0,
            duration: 3,
            ease: "power2.out",
            stagger: 0.5,
          });
    
          workHeroTl.from(
            subtext.lines,
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
    }
  });
</script>

{#if $page.url.search != "?repeat=true"}
  <section
    bind:this={section}
    class="relativ flex flex-col blur-md justify-center h-[100svh] opacity-0"
  >
    <img
      class="h-[100svh] w-full object-cover object-bottom absolute top-0 left-0"
      src={PUBLIC_IMAGE_URL +
        sectionData?.workBackgroundImage?.data?.attributes?.url+"?format=webp"}
      alt={PUBLIC_IMAGE_URL +
        sectionData?.workBackgroundImage?.data?.attributes?.alternativeText}
    />
    <div class="flexs relative px-5 md:px-20 lg:px-56 space-y-5">
      <span class="flex flex-wrap">
        <h1 class="work-heading text-7xl font-bold">
          {sectionData?.heroHeadingBold1}
        </h1>
        {#if sectionData?.heroHeadingItalic && sectionData?.heroHeadingBold2 }
          <h1 class="italic work-heading text-7xl">
            {sectionData?.heroHeadingItalic}
          </h1>
          <h1 class="work-heading text-7xl font-bold">
            {sectionData?.heroHeadingBold2}
          </h1>
        {/if}
      </span>
      <h2 id="work-hero-subtext" class="text-2xl">
        {sectionData?.heroSubtext}
      </h2>
    </div>
    <ScrollDown />
  </section>
{/if}
