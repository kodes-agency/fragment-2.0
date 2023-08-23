<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText.js";
  import type { ComponentStepsLayoutStep } from "../../../../__generated__/graphql";

  let section: HTMLElement;

  let steps: ComponentStepsLayoutStep[];

  $: sectionData = $page.data.data?.aboutPage?.data?.attributes;
  // @ts-expect-error
  $: steps = $page.data.data?.aboutPage?.data?.attributes?.step;

  onMount(() => {
    const ctx = gsap.context(() => {
      const splitStep0 = new SplitText("#step-text-0", {
        type: "words, chars",
      });
      const splitStep1 = new SplitText("#step-text-1", {
        type: "words, chars",
      });
      const splitStep2 = new SplitText("#step-text-2", {
        type: "words, chars",
      });

      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 40%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      const stepsTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 30%",
          end: "bottom 90%",
          // pin: true,
          toggleActions: "play none none none",
        },
      });

      headingTl.from("#about-steps-heading", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      stepsTl.from("#step-heading-0", {
        y: "-150%",
        rotation: -45,
        opacity: 0,
        transformOrigin: "0% 50% -50",
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.15,
      });

      stepsTl.from(splitStep0.chars, {
        opacity: 0,
        stagger: 0.02,
        ease: "power2.out",
      });

      stepsTl.from("#step-heading-1", {
        y: "-150%",
        rotation: -45,
        opacity: 0,
        transformOrigin: "0% 50% -50",
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.15,
      });

      stepsTl.from(splitStep1.chars, {
        opacity: 0,
        stagger: 0.02,
        ease: "power2.out",
      });

      stepsTl.from("#step-heading-2", {
        y: "-150%",
        rotation: -45,
        opacity: 0,
        transformOrigin: "0% 50% -50",
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.15,
      });

      stepsTl.from(splitStep2.chars, {
        opacity: 0,
        stagger: 0.02,
        ease: "power2.out",
      });
    }, section);

    return () => {
      ctx.revert();
    };
  });
</script>

<section
  class="min-h-screen flex flex-col justify-center items-center p-5 py-20 md:p-20 lg:p-40 space-y-10"
  bind:this={section}
>
  <h2
    id="about-steps-heading"
    class="gradient gradient-text gradient-anm text-4xl md:text-6xl font-bold"
  >
    {sectionData?.stepsHeading}
  </h2>
  <div class="flex flex-col justify-between space-y-10">
    {#each steps as step, i}
      <div class="step flex w-auto md:w-1/2 flex-col space-y-3">
        <div class="overflow-hidden">
          <h3 id="step-heading-{i}" class="text-3xl md:text-5xl font-bold">
            {step.heading}
          </h3>
        </div>
        <p id="step-text-{i}" class="text-2xl md:text-3xl">
          {step.text}
        </p>
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .step:nth-of-type(2) {
    margin-left: 20vw;
  }

  .step:nth-of-type(3) {
    margin-left: 40vw;
  }

  @media only screen and (max-width: 700px) {
    .step:nth-of-type(n) {
      margin-left: 0px;
    }
  }
</style>
