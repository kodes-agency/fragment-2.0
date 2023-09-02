<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText";
  import ScrollDown from "$lib/components/elements/ScrollDown.svelte";
  import { langStore } from "$lib/stores/store";


  gsap.registerPlugin(SplitText);
  const tl = gsap.timeline({});
  
  $: sectionData = $page.data.data?.homePage?.data?.attributes
  let section: HTMLElement;
  let subheading: HTMLElement;
  let headerWrapper: HTMLElement;
  
  onMount(() => {
    let split = new SplitText(subheading, { type: "lines, words" });
    new SplitText(subheading, { type: "lines", linesClass: "lineParent" });
    gsap.set(".lineParent", { overflow: "hidden" });

    let ctx = gsap.context(() => {
      tl.set(headerWrapper, {
        opacity: 1,
      });

      tl.from("h1", {
        opacity: 0,
        duration: 3,
        ease: "power2.out",
      });

      tl.from(
        split.lines,
        {
          y: "-150%",
          rotation: -45,
          delay: 0.5,
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


<section class="h-screen flex items-center relative">
  <div
    bind:this={headerWrapper}
    class="flex-col px-5 md:px-20 lg:px-40 opacity-0"
  >
  <!-- svelte-ignore a11y-missing-attribute -->
    <h1 class="gradient gradient-text gradient-anm text-6xl md:text-7xl pb-5 lg:text-8xl 2xl:text-9xl font-bold">
      {sectionData?.heroHeading}
    </h1>

    {#key $langStore }  
      <h2 bind:this={subheading} class="text-2xl md:text-3xl max-w-screen-md 2xl:max-w-screen-lg 2xl:text-4xl">
        {sectionData?.heroSubtext}
      </h2>
    {/key}
  </div>
  <ScrollDown />
</section>
