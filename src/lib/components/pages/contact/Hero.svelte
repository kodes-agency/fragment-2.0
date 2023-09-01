<script lang="ts">
  import { onMount } from "svelte";
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  // @ts-expect-error
  import { SplitText } from "gsap/dist/SplitText";
  import ScrollDown from "$lib/components/elements/ScrollDown.svelte";
  import { page } from "$app/stores";

  $: sectionData = $page.data.data?.contactPage?.data?.attributes;

  let section: HTMLElement;
  let heading: HTMLElement;
  let subHeading: HTMLElement;


  onMount(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(subHeading, {
        type: "lines, words",
      });
      new SplitText(subHeading, { type: "lines", linesClass: "lineParent" });
      gsap.set(".lineParent", { overflow: "hidden"});
      const contactHeroTl = gsap.timeline({});
      contactHeroTl.from(heading, {
        opacity: 0,
        duration: 3,
        stagger: 0.5,
        delay: 1.3,
        ease: "power2.out",
      });

      contactHeroTl.from(
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
    }, section);

    return () => {
      ctx.revert();
    };
  });
</script>

<section bind:this={section} class="h-screen flex flex-col justify-center px-5 lg:px-52 space-y-10">
  <h1 bind:this={heading} class="text-7xl lg:text-8xl 2xl:text-9xl font-bold max-w-screen-md ">{sectionData?.heroHeading}</h1>
  <h3 bind:this={subHeading} class="text-3xl max-w-screen-sm 2xl:max-w-screen-lg 2xl:text-4xl">{sectionData?.heroSubtextNormal} <i>{sectionData?.heroSubtextItalicBold}</i></h3>
  <ScrollDown />
</section>

<style>
</style>
