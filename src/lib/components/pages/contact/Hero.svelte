<script lang="ts">
  import { onMount } from "svelte";
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  // @ts-expect-error
  import { SplitText } from "gsap/dist/SplitText";
  import ScrollDown from "$lib/components/elements/ScrollDown.svelte";
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";

  $: sectionData = $page.data.data?.contactPage?.data?.attributes;

  let section: HTMLElement;
  let heading: HTMLElement;
  let subHeading: HTMLElement;
  let img: HTMLElement


  onMount(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(subHeading, {
        type: "lines, words",
      });
      new SplitText(subHeading, { type: "lines", linesClass: "lineParent" });
      gsap.set(".lineParent", { overflow: "hidden"});
      const contactHeroTl = gsap.timeline({});

      gsap.to(img,{
        opacity: 0.5,
        filter: "blur(0px)",
        duration: 1
      })

      contactHeroTl.to(section, {
        opacity: 1,
        duration: 1
      })

      contactHeroTl.from(heading, {
        opacity: 0,
        duration: 3,
        stagger: 0.5,
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

<section bind:this={section} class="h-screen opacity-0 flex flex-col justify-center px-5 lg:px-52 space-y-5">
  <img bind:this={img} class="fixed blur-md top-0 left-0 opacity-0 w-full h-screen object-cover -z-10" src="{PUBLIC_IMAGE_URL+sectionData?.contactBgImage?.data?.attributes?.url+"?format=webp"}" alt="{sectionData?.contactBgImage?.data?.attributes?.alternativeText}">
  <h1 bind:this={heading} class="text-6xl lg:text-7xl 2xl:text-8xl font-bold max-w-screen-md ">{sectionData?.heroHeading}</h1>
  <h3 bind:this={subHeading} class="text-3xl max-w-screen-sm 2xl:max-w-screen-lg 2xl:text-4xl">{sectionData?.heroSubtextNormal} <i>{sectionData?.heroSubtextItalicBold}</i></h3>
  <ScrollDown />
</section>

<style>
</style>
