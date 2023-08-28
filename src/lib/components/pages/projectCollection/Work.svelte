<script lang="ts">
  import ProjectItem from "$lib/components/elements/Project.svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  // @ts-ignore
  import { Flip } from "gsap/dist/Flip";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText";
  import type {
    ProjectCategory,
    Project,
  } from "../../../../__generated__/graphql";
  gsap.registerPlugin(Flip);
  
  let section: HTMLElement;

  let categories: { attributes: ProjectCategory }[];
  let projects: {id:number, attributes: Project }[];

  $: sectionData = $page.data.data?.workPage?.data?.attributes;
  // @ts-ignore
  $: categories = $page.data.data?.projectCategories?.data;

  // @ts-ignore
  $: projects = $page.data.data?.projects?.data;

//   onMount(() => {
//     if($page.url.search != "?repeat=true"){
//     const ctx = gsap.context(() => {
//             const workH4split = new SplitText("#work-h4", { type: "lines" });
//             new SplitText("#work-h4", { type: "lines", linesClass: "parentLine" });
//             gsap.set(".parentLine", { overflow: "hidden" });
//             let filterButtons = document.querySelectorAll(".work-button");
      
//             const workWrokTl = gsap.timeline({
//               scrollTrigger: {
//                 trigger: section,
//                 start: "top 50%",
//                 toggleActions: "play none none none ",
//               },
//             });
      
//             workWrokTl.from("#work-h2", {
//               opacity: 0,
//               duration: 3,
//               ease: "power2.out",
//             });
      
//             workWrokTl.from(
//               workH4split.lines,
//               {
//                 y: "-150%",
//                 rotation: -45,
//                 transformOrigin: "0% 50% -50",
//                 duration: 1,
//                 ease: "power3.out",
//                 stagger: 0.15,
//                 opacity: 0,
//               },
//               "-=2.5"
//             );
      
//             workWrokTl.fromTo(
//               ".work-button",
//               {
//                 autoAlpha: 0,
//               },
//               {
//                 autoAlpha: 1,
//                 stagger: 0.2,
//               },
//               "-=1.5"
//             );
      
//             workWrokTl.from(
//               ".grid-item",
//               {
//                 duration: 1,
//                 opacity: 0,
//                 stagger: 0.1,
//                 scale: 0.9,
//                 ease: "power2.out",
//               },
//               "-=0.8"
//             );
//         }, section);
        
//         return () => {
//             ctx.revert();
//         };
//     }
//   });

  function filterProjects(event: any) {
    let projectItems = document.querySelectorAll(".grid-item");
    const state = Flip.getState(".grid-item");
    const buttons = document.querySelectorAll(".work-button");
    buttons.forEach((button) => {
      button.classList.remove("isActive");
      event.target.classList.add("isActive");
    });

    if (event.target.dataset.category == "all") {
      projectItems.forEach((project) => {
        // @ts-expect-error
        project.style.display = "block";
      });
    } else {
      projectItems.forEach((project) => {
        // @ts-expect-error
        if (project.dataset.category != event.target.dataset.category) {
          // @ts-expect-error
          project.style.display = "none";
        } else {
          // @ts-expect-error
          project.style.display = "block";
        }
      });
    }

    Flip.from(state, {
      duration: 0.7,
      scale: true,
      ease: "power1.inOut",
      absolute: true,
      stagger: 0.08,
      onEnter: (elements: any) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1 }
        ),
      onLeave: (elements: any) =>
        gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
    });
  }
</script>

<section
  id="work"
  class=" relative min-h-[130vh] p-5 py-40 md:p-20 lg:p-40 flex flex-col items-center"
  bind:this={section}
>
  <div class="flex flex-col space-y-3 pb-10">
    <h2
      class="gradient gradient-anm gradient-text text-center font-bold text-5xl lg:text-6xl"
      id="work-h2"
    >
      {sectionData?.workHeading}
    </h2>
    <div class="overflow-hidden">
      <h4 id="work-h4" class="text-center text-3xl">
        {sectionData?.workSubtext}
      </h4>
    </div>
  </div>
  <div
    class="flex items-center md:justify-center md:space-x-5 flex-wrap pb-16 justify-start"
  >
    <button
      on:click={filterProjects}
      data-category="all"
      class="work-button border-b-2 border-white my-5 md:my-0 text-lg transition-all mr-5 md:m-0 duration-300 lowercase whitespace-nowrap isActive"
    >
      all
    </button>
    {#each categories as category}
      <button
        class="work-button border-b-2 border-white text-lg mr-5 md:m-0 transition-all duration-300 lowercase whitespace-nowrap"
        data-category={category.attributes.category}
        on:click={filterProjects}
      >
        {category.attributes.category}
      </button>
    {/each}
  </div>
  <div class="projects-wrapper">
    {#each projects as project}
      <div
        class="grid-item md:max-w-[28vw]"
        data-category={project.attributes.category?.data?.attributes?.category}
      >
        <ProjectItem
          id={project.id}
          title={project.attributes.title}
          client={project.attributes.client?.data?.attributes?.clientName}
          category={project.attributes.category?.data?.attributes?.category}
          img={project.attributes.thumbnail?.data?.attributes?.formats.compress.url}
          alt={project.attributes.thumbnail?.data?.attributes?.alternativeText}
        />
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  button:hover {
    color: var(--cyan-color);
    border-bottom-color: var(--cyan-color);
    transform: scale(1.05);
    transition: 0.3s;
  }

  .isActive {
    font-style: italic;
    color: var(--cyan-color);
    border-bottom-color: var(--cyan-color);
    transform: scale(1.05);
    transition: 0.3s;
  }

  .projects-wrapper {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto;
    gap: 3vh;
    max-width: 70vw;
    /* position: relative; */
  }

  @media only screen and (max-width: 700px) {
    .projects-wrapper {
      max-width: 90vw;
      display: flex;
      flex-direction: column;
    }
  }
</style>
