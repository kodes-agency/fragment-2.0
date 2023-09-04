<script lang="ts">
  import { onMount } from "svelte";
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap";
  // @ts-expect-error
  import { SplitText } from "gsap/dist/SplitText";
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  import type { ProjectLayoutDynamicZone } from "../../../../__generated__/graphql";
  import "@splidejs/svelte-splide/css/core";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";

  let layout: ProjectLayoutDynamicZone[];
  // @ts-expect-error
  $: layout = $page.data.data?.landingPages?.data[0].attributes?.layout;

  let projectLayoutSection;

  onMount(() => {
    const ctx = gsap.context(() => {
      layout.forEach(async (element) => {
        //DynamicText animation
        if (element.__typename == "ComponentProjectLayoutDynamicText") {
          const nElements = layout.filter((element) => {
            return element.__typename == "ComponentProjectLayoutDynamicText";
          }).length;
          for (let i = 1; i < nElements + 1; i++) {
            const heading = new SplitText(
              ".dynamicText-heading-" + element.id,
              { type: "lines" }
            );
            new SplitText(".dynamicText-heading-" + element.id, {
              type: "lines",
              linesClass: "lineParent",
            });
            const text = new SplitText(".dynamicText-text-" + element.id, {
              type: "chars, lines",
            });
            gsap.set(text.chars, { color: "gray", lineHeight: "1.2" });
            gsap.set(".lineParent", { overflow: "hidden" });

            const dynamicTextTl = gsap.timeline({
              scrollTrigger: {
                trigger: ".dynamicText-" + element.id,
                start: "top 50%",
                end: "bottom 80%",
                toggleActions: "play none none none",
              },
            });

            const dynamicTextTl2 = gsap.timeline({
              scrollTrigger: {
                trigger: ".dynamicText-" + element.id,
                start: "top 30%",
                end: "bottom 40%",
                scrub: 1,
                toggleActions: "play none none none",
              },
            });

            dynamicTextTl.from(heading.lines, {
              y: "-150%",
              rotation: -45,
              transformOrigin: "0% 50% -50",
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
            });

            dynamicTextTl.from(
              text.lines,
              {
                opacity: 0,
                stagger: 0.1,
                duration: 1,
              },
              "-=0.5"
            );

            dynamicTextTl2.to(text.chars, {
              color: "var(--magenta-color)",
              stagger: 0.06,
              duration: 1,
            });
          }
        }

        if (element.__typename == "ComponentProjectLayoutLargeHeading") {
          const nElements = layout.filter((element) => {
            return element.__typename == "ComponentProjectLayoutLargeHeading";
          }).length;
          for (let i = 1; i < nElements + 1; i++) {
            const heading = new SplitText(".heading-" + element.id, {
              type: "lines",
            });
            new SplitText(".heading-" + element.id, {
              type: "lines",
              linesClass: "lineParent",
            });
            gsap.set(".lineParent", { overflow: "hidden", lineHeight: "1.2" });

            const headingTl = gsap.timeline({
              scrollTrigger: {
                trigger: ".heading-" + element.id,
                start: "top 70%",
                toggleActions: "play none none none",
              },
            });

            headingTl.from(heading.lines, {
              y: "-150%",
              rotation: -45,
              transformOrigin: "0% 50% -50",
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
            });
          }
        }

        if (element.__typename == "ComponentProjectLayoutInlineGallery") {
          const galleryTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".inlineGallery",
              start: "top 70%",
              toggleActions: "play none none none",
            },
          });

          galleryTl.from(".solo-img-inline", {
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            stagger: 0.15,
          });
        }

        // if (element.__typename == "ComponentProjectLayoutBgImageNDynamicText") {
        //   const nElements = layout.filter((element) => {
        //     return (
        //       element.__typename == "ComponentProjectLayoutBgImageNDynamicText"
        //     );
        //   }).length;
        //   for (let i = 1; i < nElements + 1; i++) {
        //     const text = new SplitText(`.dynamic-img-text-${element.id}`, {
        //       type: "chars, lines",
        //     });
        //     gsap.set(text.chars, { color: "gray" });

        //     const dynamicImgTextTl = gsap.timeline({
        //       scrollTrigger: {
        //         trigger: `.bg-img-dynamic-text-wrapper-${element.id}`,
        //         start: "top 50%",
        //         toggleActions: "play none none none",
        //       },
        //     });

        //     const dynamicImgTextT2 = gsap.timeline({
        //       scrollTrigger: {
        //         trigger: `.bg-img-dynamic-text-wrapper-${element.id}`,
        //         start: "top 50%",
        //         end: "bottom 90%",
        //         scrub: 1,
        //         toggleActions: "play none none none",
        //       },
        //     });

        //     dynamicImgTextTl.from(
        //       text.lines,
        //       {
        //         opacity: 0,
        //         stagger: 0.1,
        //       },
        //       "-=0.5"
        //     );

        //     dynamicImgTextT2.to(text.chars, {
        //       color: "var(--white-color)",
        //       stagger: 0.02,
        //     });
        //   }
        // }

        // if (element.__typename == "ComponentProjectLayoutBgImagaNText") {
        //   const nElements = layout.filter((element) => {
        //     return element.__typename == "ComponentProjectLayoutBgImagaNText";
        //   }).length;

        //   for (let i = 1; i < nElements + 1; i++) {
        //     const textSplit = new SplitText(`.text-${element.id}`, {
        //       type: "lines",
        //     });
        //     new SplitText(`.text-${element.id}`, {
        //       type: "lines",
        //       linesClass: "lineParent",
        //     });
        //     gsap.set(".lineParent", { overflow: "hidden" });
        //     gsap.set(`.bg-img-text-wrapper-${element.id}`, {
        //       opacity: 0,
        //     });

        //     const bgImageNTextTl1 = gsap.timeline({
        //       scrollTrigger: {
        //         trigger: `.bg-img-text-wrapper-${element.id}`,
        //         start: "top 5%",
        //         end: "bottom 90%",
        //         toggleActions: "play none none none",
        //       },
        //     });

        //     bgImageNTextTl1.to(`.bg-img-text-wrapper-${element.id}`, {
        //       opacity: 1,
        //       duration: 1.5,
        //     });

        //     bgImageNTextTl1.from(
        //       textSplit.lines,
        //       {
        //         y: "-150%",
        //         rotation: -45,
        //         transformOrigin: "0% 50% -50",
        //         duration: 1,
        //         ease: "power3.out",
        //         stagger: 0.15,
        //       },
        //       "-=1"
        //     );
        //   }
        // }

        if (element.__typename == "ComponentProjectLayoutLargeVideo") {
        }
      });
    });
    return () => {
      ctx.revert();
    };
  });
</script>

<section
  id="layout-wrapper"
  bind:this={projectLayoutSection}
  class="bg-black z-10"
>
  {#if layout[0]}
    <div class="flex flex-col overflow-hidden space-y-12">
      {#each layout as element}
        <!-- DynamicText -->
        {#if element.__typename == "ComponentProjectLayoutDynamicText"}
          <div class="dynamicText-{element.id}">
            <h2
              class="text-4xl md:text-5xl font-bold px-5 md:px-20 lg:px-40 leading-normal mt-20 mb-10 dynamicText-heading-{element.id}"
            >
              {element.dynamicTitle}
            </h2>
            <div class="flex flex-col px-5 md:px-20 lg:px-56">
              <p
                class="text-2xl md:text-5xl font-bold uppercase dynamicText-text-{element.id}"
              >
                {element.dynamicText}
              </p>
            </div>
          </div>
        {/if}

        <!-- Large Image -->
        {#if element.__typename == "ComponentProjectLayoutLargeImage"}
          <div class="largeImage flex flex-col px-5 md:px-20 lg:px-56">
            <img
              loading="lazy"
              src={PUBLIC_IMAGE_URL + element.image?.data?.attributes?.url+"?format=webp"}
              alt={element.image?.data?.attributes?.alternativeText}
            />
          </div>
        {/if}

        <!-- Heading -->
        {#if element.__typename == "ComponentProjectLayoutLargeHeading"}
          <h2
            class="text-4xl md:text-6xl font-bold px-5 md:px-20 lg:px-40 leading-loose heading-{element.id}"
          >
            {element.heading}
          </h2>
        {/if}

        <!-- Inline Gallery -->
        {#if element.__typename == "ComponentProjectLayoutInlineGallery"}
          <div class="inlineGallery px-5 md:px-20 lg:px-56 grid">
            {#each element?.images?.data as item}
              <img
                loading="lazy"
                class="solo-img-inline inline-img"
                src={PUBLIC_IMAGE_URL + item.attributes.url}
                alt={item.attributes.alternativeText}
              />
            {/each}
          </div>
        {/if}

        <!-- Inline Image & Text -->
        {#if element.__typename == "ComponentProjectLayoutImageNText"}
          <div class="flex flex-col px-5 md:px-20 lg:px-56">
            <div class="inner-container">
              <img
                loading="lazy"
                class="w-full aspect-square object-cover object-center"
                src={PUBLIC_IMAGE_URL + element.image?.data?.attributes?.url+"?format=webp"}
                alt={element.image?.data?.attributes?.alternativeText}
              />
              <span>
                <p class="text-3xl">{element.text}</p>
              </span>
            </div>
          </div>
        {/if}

        <!-- Carousel -->
        {#if element.__typename == "ComponentProjectLayoutProjectCarousel"}
          <Splide
            hasTrack={false}
            aria-label="Featured projects"
            options={{
              rewind: true,
              autoplay: true,
            }}
          >
            <div
              class="px-5 md:px-20 lg:px-56 flex flex-col items-end space-y-5"
            >
              <SplideTrack>
                {#each element?.images.data as item}
                  <SplideSlide>
                    <img
                      class=""
                      src={PUBLIC_IMAGE_URL + item.attributes?.url}
                      alt={item.attributes?.alternativeText}
                    />
                  </SplideSlide>
                {/each}
              </SplideTrack>
              <div class="splide__arrows flex space-x-5">
                <button class="splide__arrow splide__arrow--prev">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16L20.25 9.0718L20.25 22.9282L9 16Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M9 16L20.25 9.0718L20.25 22.9282L9 16Z"
                      stroke="#F5F5F5"
                    />
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
                    <path
                      d="M22 15L10.75 21.9282L10.75 8.0718L22 15Z"
                      fill="#F5F5F5"
                    />
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
          </Splide>
        {/if}

        <!-- Paragraph -->
        {#if element.__typename == "ComponentProjectLayoutParagraph"}
          <div class="flex flex-col px-5 md:px-20 lg:px-56">
            <p class="paragraph-{element.id} text-xl">{element.paragraph}</p>
          </div>
        {/if}

        <!-- Background image & Dynamic text
                {#if element.__typename == 'ComponentProjectLayoutBgImageNDynamicText'}
                    <div class="bg-img-dynamic-text" style="background-image: url({PUBLIC_IMAGE_URL+element.image?.data?.attributes?.formats?.compress?.url}); background-size: cover; background-position: center; background-repeat: no-repeat">
                        <div class="bg-img-dynamic-text-opacity bg-img-dynamic-text-wrapper-{element.id}">
                            <h2 class="text-4xl md:text-5xl font-bold px-5 md:px-20 lg:px-40 leading-normal dynamic-img-text-{element.id}">
                                {element.dynamicText}
                            </h2>
                        </div>
                    </div>
                {/if} -->

        <!-- Background image & text
                {#if element.__typename == 'ComponentProjectLayoutBgImagaNText' && element.id % 2 == 0}
                    <div class="bg-img-text" style="background-image: url({PUBLIC_IMAGE_URL+element.image?.data?.attributes?.formats?.compress?.url}); background-size: cover; background-position: center; background-repeat: no-repeat">
                        <div class="bg-img-text-opacity bg-img-text-wrapper-{element.id}">
                            <div class="overflow-hidden">
                                <p class="text-heading heading-{element.id}">{element.title}</p>
                            </div>
                            <div class="overflow-hidden">
                                <p class="text text-{element.id}">{element.text}</p>
                            </div>
                        </div>
                    </div>
                {/if}

                {#if element.__typename == 'ComponentProjectLayoutBgImagaNText' && element.id % 2 != 0}
                    <div class="bg-img-text" style="background-image: url({PUBLIC_IMAGE_URL+element.image?.data?.attributes?.formats?.compress?.url}); background-size: cover; background-position: center; background-repeat: no-repeat">
                        <div class="bg-img-text-opacity bg-img-text-wrapper-{element.id}">
                            <div class="overflow-hidden">
                                <p class="text-heading reversed heading-{element.id}">{element.title}</p>
                            </div>
                            <div class="overflow-hidden">
                                <p class="text reversed text-{element.id}">{element.text}</p>
                            </div>
                        </div>
                    </div>
                {/if} -->

        <!-- Large Video -->
        {#if element.__typename == "ComponentProjectLayoutLargeVideo"}
          <iframe
            title="video"
            src={element.videoLink}
            allow="autoplay"
            class="px-5 md:px-20 lg:px-56 w-full h-[70vh]"
          />
        {/if}

        <!-- Inline Videos
                {#if element.__typename ==  'ComponentProjectLayoutInlineVideos' }
                    <div class="video-wrapper">
                        {#each element?.Videos.data as video }
                            <video class="inline-video" controls src={PUBLIC_IMAGE_URL+video.attributes?.url}></video>
                        {/each}
                    </div>
                {/if}    -->
      {/each}
    </div>
  {/if}
  <div class="flex justify-center items-center py-32">
    <div class="flex items-center w-fit justify-center gradient gradient-anm">
      <a
        class="border-2 whitespace-nowrap border-white bg-black hover:bg-[rgba(0,0,0,0.3)] text-center w-full h-full py-1 px-10"
        href="/work?repeat=true"
        >{$page.data.layoutData?.data?.menu?.data?.attributes?.moreWork}</a
      >
    </div>
  </div>
</section>

<style lang="postcss">
  /* Inline gallery */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2vw;
  }

  /* Inline Image N Text */
  .inner-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2vw;
    align-items: center;
  }

  /* Backgounrd Image & Dynamic Text */
  .bg-img-dynamic-text {
    height: 100vh;
  }

  .bg-img-dynamic-text-opacity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* Background image & text */
  .bg-img-text {
    height: 100vh;
  }

  .bg-img-text-opacity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    padding: 15vh;
  }

  .text-heading {
    font-size: 30px;
    font-weight: bold;
  }

  .text {
    font-size: 25px;
  }

  .reversed {
    text-align: end;
  }

  /* Bottom Button */

  @media only screen and (max-width: 750px) {
    /* Inline Gallery */
    .grid {
      gap: 2vh;
    }

    /* Inline Image N Text */
    .inner-container {
      grid-template-columns: 1fr;
      gap: 2vh;
    }

    /* Background image & text */
    .bg-img-text-opacity {
      padding: 5vw;
    }

    .reversed {
      text-align: start;
    }
  }
</style>
