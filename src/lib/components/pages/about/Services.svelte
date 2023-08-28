<script lang="ts">
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  import { onMount } from "svelte";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { ServiceEntity } from "../../../../__generated__/graphql";
  import { page } from "$app/stores";
  import Accordion from "$lib/components/elements/accordion/accordion.svelte";
  import AccordionItem from "$lib/components/elements/accordion/accordion-item.svelte";

  const imgGloveLeft = "/uploads/Mask_group_1_307b223e42.png";
  const imgGloveRight = "/uploads/Mask_group_d48b5efe64.png";

  let section: HTMLElement;
  let services: ServiceEntity[];
  let heading: HTMLElement;
  let subHeading: HTMLElement;
  let serviceWrapper: HTMLElement;

  $: sectionData = $page.data.data?.aboutPage?.data?.attributes;
  // @ts-expect-error
  $: services = $page.data.data?.services?.data;

  const tl = gsap.timeline();

  onMount(() => {
    const ctx = gsap.context(() => {
      const aboutImgTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 20%",
          end: "bottom 90%",
          // pin: true,
          scrub: 0.5,
          toggleActions: "play none none none",
        },
      });

      const aboutServicesTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          // end: "bottom 90%",
          toggleActions: "play none none none",
        },
      });

      aboutServicesTl.from(heading, {
        y: "-150%",
        rotation: -45,
        opacity: 0,
        duration: 1,
        transformOrigin: "0% 50% -50",
        ease: "power3.out",
        stagger: 0.15,
      });

      aboutServicesTl.from(subHeading, {
        opacity: 0,
      });

      aboutImgTl.to("#leftImg", {
        x: "-90%",
        duration: 1,
        ease: "power4.out",
      });

      aboutImgTl.to(
        "#rightImg",
        {
          x: "90%",
          duration: 1,
          ease: "power4.out",
        },
        "-=1"
      );

      aboutImgTl.from(
        serviceWrapper,
        {
          opacity: 0,
        },
        "-=1"
      );
    }, section);

    return () => {
      //   ctx.revert();
    };
  });
</script>

<section
  id="about-services-section"
  class=" bg-light-blue relative overflow-hidden"
  bind:this={section}
>
  <img
    id="leftImg"
    class="absolute top-1/3 w-2/3 z-10 right-1/2"
    src={PUBLIC_IMAGE_URL + imgGloveLeft}
    alt="Choose your service"
  />
  <img
    id="rightImg"
    class="absolute top-1/3 w-2/3 z-10 left-1/2"
    src={PUBLIC_IMAGE_URL + imgGloveRight}
    alt="Choose your service"
  />
  <div
    class="flex flex-col space-y-10 px-5 lg:px-72 2xl:px-96 min-h-screen py-20"
  >
    <div class="headings-wrapper mb-10">
      <div class="overflow-hidden">
        <h2
          bind:this={heading}
          class="text-black text-center font-bold text-5xl md:text-5xl lg:text-6xl p-2"
        >
          {sectionData?.servicesHeading}
        </h2>
      </div>
      <h2
        bind:this={subHeading}
        class="text-cyan text-center italic font-bold text-5xl md:text-4xl lg:text-5xl 2xl:text-6xl p-2"
      >
        {sectionData?.servicesSubtext}
      </h2>
    </div>

    <div bind:this={serviceWrapper}>
      <Accordion
        collapse
        --accordion-width="70ch"
        --accordion-color="var(--white-color)"
        --text-color="var(--magenta-color)"
      >
        {#each services as service, i}
          <AccordionItem open={i === 0}>
            <svelte:fragment slot="title">
              <h2
                class="anmClass text-cyan title font-bold text-start text-4xl md:text-5xl transition-all duration-700 mb-4"
              >
                {service.attributes?.title}
              </h2>
            </svelte:fragment>
            <svelte:fragment slot="content">
              <p class="text-black text-xl">{service.attributes?.text}</p>
            </svelte:fragment>
          </AccordionItem>
        {/each}
      </Accordion>
    </div>
  </div>
</section>