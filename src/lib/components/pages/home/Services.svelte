<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // @ts-expect-error
  import { gsap } from "gsap/dist/gsap.js";
  // @ts-expect-error
  import { SplitText } from "gsap/dist/SplitText";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";

  $: sectionData = $page.data.data?.homePage?.data?.attributes;
  let section: HTMLElement;
  let img1: HTMLElement;
  let img2: HTMLElement;

  function mouseMoveHandler(e: any) {
    const img1Width = img1.offsetWidth;
    const img1Height = img1.offsetHeight;
    const centerX = img1.offsetLeft + img1Width / 2;
    const centerY = img1.offsetTop + img1Height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (-1 * 4 * mouseY) / (img1Height / 2);
    const rotateYimg1 = (4 * mouseX) / (img1Width / 2);
    const rotateYimg2 = (3 * mouseX) / (img1Width / 2);
    if (img1)
      img1.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateYimg1}deg)`;
    if (img2)
      img2.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateYimg2}deg)`;
  }

  onMount(() => {
    if (section && window.innerWidth > 650) {
      section.addEventListener("mousemove", mouseMoveHandler);
    }

    const ctx = gsap.context(() => {
      let digital = new SplitText("#digital", { type: "chars, words" });
      let analog = new SplitText("#analog", { type: "chars, words" });
      let paragraph = new SplitText("#subtext", { type: "lines" });
      new SplitText("#subtext", { type: "lines", linesClass: "lineParent" });
      gsap.set(".lineParent", { overflow: "hidden" });
      gsap.set(digital.chars, { color: "var(--cyan-color)" });

      analog.words[0].addEventListener("mouseenter", () => {
        gsap.to(analog.chars, {
          color: "var(--cyan-color)",
          webkitTextStroke: "0px var(--white-color)",
          stagger: 0.1,
          ease: "power2.out",
        });
        gsap.to(digital.chars, {
          webkitTextStroke: "2px var(--white-color)",
          color: "transparent",
          stagger: 0.1,
          ease: "power2.out",
        });
      });

      digital.words[0].addEventListener("mouseenter", () => {
        gsap.to(digital.chars, {
          color: "var(--cyan-color)",
          webkitTextStroke: "0px var(--white-color)",
          stagger: 0.1,
          ease: "power2.out",
        });
        gsap.to(analog.chars, {
          webkitTextStroke: "2px var(--white-color)",
          color: "transparent",
          stagger: 0.1,
          ease: "power2.out",
        });
      });

      let tlServices = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 30%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.set(analog.chars, {
        color: "transparent",
        webkitTextStroke: "2px var(--white-color)",
      });

      tlServices.from(
        digital.chars,
        {
          delay: 0.5,
          duration: 0.5,
          opacity: 0,
          stagger: 0.08,
          y: -20,
          ease: "power2.out",
        },
        "-=0.5"
      );

      tlServices.from(
        "#slash",
        {
          duration: 0.5,
          opacity: 0,
          y: -20,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tlServices.from(
        analog.chars,
        {
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          y: -20,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tlServices.from(
        paragraph.lines,
        {
          y: "-150%",
          rotation: -45,
          transformOrigin: "0% 50% -50",
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.2"
      );

      tlServices.from(
        "#service-button",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, section);

    return () => {
      ctx.revert();
      section.removeEventListener("mousemove", mouseMoveHandler);
    };
  });
</script>

<section
  id="service-section"
  class="relative flex flex-col justify-center items-center h-screen p-5"
  bind:this={section}
>
  <img
    bind:this={img1}
    class="img"
    id="img1"
    src={PUBLIC_IMAGE_URL + sectionData?.servicesImage1?.data?.attributes?.formats.compress.url}
    alt={sectionData?.servicesImage1?.data?.attributes?.formats.compress.url}
  />
  <img
    bind:this={img2}
    class="img"
    id="img2"
    src={PUBLIC_IMAGE_URL + sectionData?.servicesImage2?.data?.attributes?.formats.compress.url}
    alt={sectionData?.servicesImage2?.data?.attributes?.formats.compress.url}
  />
  <div class="flex p-5 md:p-auto flex-col space-y-20">
    <div class="flex flex-col space-y-5">
      <div class="flex flex-col md:flex-row">
        <span class="flex">
          <h2 id="digital" class="text-7xl md:text-8xl 2xl:text-9xl font-bold">
            digital
          </h2>
          <h2 id="slash" class="text-7xl md:text-8xl 2xl:text-9xl font-bold">
            &#160/
          </h2>
        </span>
        <h2 id="analog" class="text-7xl md:text-8xl 2xl:text-9xl font-bold">
          analog
        </h2>
      </div>
      <div class="services-text">
        <p id="subtext" class="text-3xl">
          {sectionData?.servicesSubtext}
        </p>
      </div>
    </div>
    <div id="service-button">
      <a class="border-b-2 border-cyan text-lg" href="/about">browse all</a>
    </div>
  </div>
</section>

<style>
  .img {
    position: absolute;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
    width: 48vw;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  #img1 {
    bottom: 20vh;
    left: 5vw;
    z-index: -1;
  }

  #img2 {
    top: 20vh;
    right: 5vw;
    z-index: -2;
  }

  @media only screen and (max-width: 950px) {
    .img {
      position: absolute;
      aspect-ratio: 9/16;
      object-fit: cover;
      object-position: center;
      width: auto;
      max-height: 50vh;
    }

    #img1 {
      bottom: 28vh;
      right: 5vw;
      left: auto;
      z-index: -2;
      width: 60vw;
    }

    #img2 {
      top: 15vh;
      left: 5vw;
      right: auto;
      z-index: -1;
      width: 50vw;
    }

    #subtext {
      width: auto;
    }
  }
</style>
