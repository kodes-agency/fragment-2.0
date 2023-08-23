<script lang="ts">
  import type { Project } from "../../../../__generated__/graphql";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import "@splidejs/svelte-splide/css/core";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap.js";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText";

  let projects: { attributes: Project }[];
  $: sectionData = $page.data.data?.homePage?.data?.attributes;
  // @ts-expect-error
  $: projects =
    $page.data.data?.homePage?.data?.attributes?.featuredProjects?.data;

  let section: HTMLElement;
  let projectElements: any;
  let sectionHeading: HTMLElement

  let tlSlider = gsap.timeline({
    paused: true,
  });

  onMount(() => {
    projectElements = document.querySelectorAll(".project");

    const ctx = gsap.context(() => {
      let tlSection = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 30%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          tlSlider.restart();
        },
      });
      
      let split = new SplitText(sectionHeading, { type: "lines, words" });
      new SplitText(sectionHeading, { type: "lines", linesClass: "lineParent" });
      gsap.set(".lineParent", { overflow: "hidden" });

      tlSection.from(split.lines, {
        y: "-150%",
        rotation: -45,
        delay: 0.5,
        opacity: 0,
        transformOrigin: "0% 50% -50",
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      });

      projectElements.forEach((element:any) => {
        let split = new SplitText(element, { type: "lines, words" });
        new SplitText(element, { type: "lines", linesClass: "lineParent" });
        gsap.set(".lineParent", { overflow: "hidden" });

        tlSlider.from(
          split.lines,
          {
            y: "-150%",
            rotation: -45,
            opacity: 0,
            transformOrigin: "0% 50% -50",
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=3"
        );
      }, section);
    });

    return () => {
      ctx.revert();
    };
  });
</script>

<Splide
  hasTrack={false}
  aria-label="Featured projects"
  options={{
    rewind: true,
  }}
  on:move={() => {
    tlSlider.restart();
  }}
>
  <div bind:this={section} class="relative">
    <div class="absolute top-1/3 px-5 md:px-32 z-20">
      <h2 bind:this={sectionHeading} class="text-5xl md:text-7xl xl:text-8xl 2xl:max-w-5xl font-bold">
        {sectionData?.workHeading}
      </h2>
    </div>
    <SplideTrack>
      {#each projects as project}
        <SplideSlide>
          <article class="h-screen w-full relative">
            <section
              class="relative h-full z-10 p-5 py-32 md:p-32 flex flex-col justify-between"
            >
              <span>
                <h2 class="project text-2xl">{project?.attributes?.title}</h2>
                <p class="project font-bold">
                  {project?.attributes?.client?.data?.attributes?.clientName}
                </p>
              </span>
              <p class="project font-bold text-xl italic uppercase text-yellow">
                {project?.attributes?.category?.data?.attributes?.category}
              </p>
            </section>
            <img
              class="absolute top-0 opacity-50 left-0 h-screen w-screen object-cover"
              src={PUBLIC_IMAGE_URL +
                project.attributes.thumbnail?.data?.attributes?.url}
              alt={project.attributes.thumbnail?.data?.attributes
                ?.alternativeText}
            />
          </article>
        </SplideSlide>
      {/each}
    </SplideTrack>

    <div
      class="absolute bottom-20 left-5 md:left-auto md:bottom-36 md:right-24 flex items-center space-x-8"
    >
      <a class="border-b-2 border-white text-lg hover:scale-110 transition-all" href="/work">browse all</a>
      <div class="splide__arrows flex space-x-5">
        <button class="splide__arrow splide__arrow--prev">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 16L20.25 9.0718L20.25 22.9282L9 16Z" fill="#F5F5F5" />
            <path d="M9 16L20.25 9.0718L20.25 22.9282L9 16Z" stroke="#F5F5F5" />
            <rect
              x="1"
              y="1"
              width="29"
              height="29"
              stroke="#F5F5F5"
              stroke-width="2"
            />
          </svg>
        </button>
        <button class="splide__arrow splide__arrow--next">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 15L10.75 21.9282L10.75 8.0718L22 15Z" fill="#F5F5F5" />
            <path
              d="M22 15L10.75 21.9282L10.75 8.0718L22 15Z"
              stroke="#F5F5F5"
            />
            <rect
              x="30"
              y="30"
              width="29"
              height="29"
              transform="rotate(180 30 30)"
              stroke="#F5F5F5"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</Splide>
