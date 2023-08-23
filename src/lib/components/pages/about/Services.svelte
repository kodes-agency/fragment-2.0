<script lang="ts">
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  import { onMount } from "svelte";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { ServiceEntity } from "../../../../__generated__/graphql";
  import { page } from "$app/stores";

  const imgGloveLeft = "/uploads/right_glove_3dd7ba6603.png";
  const imgGloveRight = "/uploads/left_glove_678d307ac5.png";

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
    const h2Elements = document.querySelectorAll(".h2-el");
    const pElements = document.querySelectorAll(".p-el");

    h2Elements.forEach((listItem) => {
      listItem.addEventListener("click", (event) => {
        h2Elements.forEach((h2Element) => {
          gsap.set(h2Element, {
            color: "var(--cyan-color)",
          });
        });
        pElements.forEach((pElement) => {
          gsap.set(pElement, {
            maxHeight: "0px",
            opacity: 0,
          });
        });
        //   @ts-ignore
        event.target.style.color = "var(--magenta-color)";
        //   @ts-ignore
        event.target.nextElementSibling.style.maxHeight = "500px";
        //  @ts-ignore
        event.target.nextElementSibling.style.opacity = "1";
      });
    });

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
    <div class="headings-wrapper">
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

    <ul bind:this={serviceWrapper} class="space-y-10">
      {#each services as service}
        <li id="li-el" data-service={service.attributes?.title}>
          <h2
            class="h2-el text-4xl z-10 font-bold transition-all duration-1000 w-fit cursor-pointer text-cyan"
          >
            {service.attributes?.title}
          </h2>
          <p
            class="p-el max-h-0 z-0 max-w-3xl text-black opacity-0 text-xl pointer-events-none"
          >
            {service.attributes?.text}
          </p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  li:first-child h2 {
    color: var(--magenta-color);
  }

  li:first-child p {
    opacity: 1;
    max-height: 500px;
  }
</style>
