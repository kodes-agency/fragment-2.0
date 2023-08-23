<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText";
  import ScrollDown from "$lib/components/elements/ScrollDown.svelte";

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

    const ctx = gsap.context(() => {
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

<section class="h-screen flex items-center relative" bind:this={section}>
  <div
    bind:this={headerWrapper}
    class="flex-col px-5 md:px-20 lg:px-40 opacity-0"
  >
    <h1 class="gradient gradient-text gradient-anm text-7xl lg:text-8xl 2xl:text-9xl font-bold py-5">
      {sectionData?.heroHeading}
    </h1>

    <h2 bind:this={subheading} class="text-3xl max-w-screen-sm 2xl:max-w-screen-lg 2xl:text-4xl">
      {sectionData?.heroSubtext}
    </h2>
  </div>
  <ScrollDown />
</section>