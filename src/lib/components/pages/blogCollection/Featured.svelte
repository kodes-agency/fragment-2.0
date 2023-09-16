<script lang="ts">
  //  @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  import { onMount } from "svelte";
  //  @ts-ignore
  import { SplitText } from "gsap/dist/SplitText";
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";

  $: sectionData = $page.data.data?.blogsPage?.data?.attributes;

  let section: HTMLElement;
  let img: HTMLElement;
  let blogLink: HTMLElement;
  let blogTitle: HTMLElement;

  function mouseMoveHandler(e: any) {
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;
    const centerX = img.offsetLeft + imgWidth / 2;
    const centerY = img.offsetTop + imgHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (-1 * 4 * mouseY) / (imgHeight / 2);
    const rotateYimg = (4 * mouseX) / (imgWidth / 2);
    if (img)
      img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateYimg}deg)`;
  }

  onMount(() => {
    const ctx = gsap.context(() => {
      let split = new SplitText(blogTitle, { type: "lines, words" });
      new SplitText(blogTitle, { type: "lines", linesClass: "lineParent" });
      gsap.set(".lineParent", { overflow: "hidden", lineHeight: "1.2" });
      if (section && img && window.innerWidth > 750) {
        section.addEventListener("mousemove", mouseMoveHandler);
      }
      const blogsFeaturedTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      });

      blogsFeaturedTl.from(section, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      blogsFeaturedTl.from(".badge", {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "back.out(3)",
      });

      blogsFeaturedTl.from(split.lines, {
        y: "-150%",
        rotation: -45,
        transformOrigin: "0% 50% -50",
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
        opacity: 0,
      });
    }, section);

    return () => {
      ctx.revert();
      section.removeEventListener("mousemove", mouseMoveHandler);
    };
  });
</script>

<section class="bg-white p-5 md:px-40 md:py-32 lg:px-56 flex flex-col items-center justify-center py-20" bind:this={section}>
  <a href="{$page.params.lang ? "/"+$page.params.lang : ""}/blog/{sectionData?.featuredBlog?.data?.attributes?.slug}">
    <div class="blog-wrapper max-w-[1000px]">
      <div class="relative">
        <div
          class="badge absolute -bottom-7 left-3 md:-top-12 w-20 h-20 md:-left-12 md:h-36 md:w-36 rounded-full bg-magenta flex items-center justify-center z-10"
        >
          <p class="text-2xl md:text-3xl font-bold">NEW</p>
        </div>
        <img
          bind:this={img}
          class="w-full"
          src={PUBLIC_IMAGE_URL +
            sectionData?.featuredBlog?.data?.attributes?.thumbnail?.data
              ?.attributes?.url}
          alt={sectionData?.featuredBlog?.data?.attributes?.thumbnail?.data
            ?.attributes?.alternativeText}
        />
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class="overflow-hidden flex flex-col space-y-4 md:space-y-0 md:space-x-5 md:flex-row justify-between md:items-end px-5 md:px-2 mt-10"
        on:mouseenter={() => {
          blogTitle.style.transform = "scale(0.9)";
          blogLink.style.transform = "scale(0.9)";
        }}
        on:mouseleave={() => {
          blogTitle.style.transform = "scale(1)";
          blogLink.style.transform = "scale(1)";
        }}
      >
        <h2
          bind:this={blogTitle}
          id="featured-title"
          class="text-magenta text-3xl md:text-5xl font-bold transition-all"
        >
          {sectionData?.featuredBlog?.data?.attributes?.title}
        </h2>
        <p
          bind:this={blogLink}
          class="blog-link text-magenta w-fit text-xl whitespace-nowrap border-b-2 border-magenta transition-all"
        >
        {$page.data.layoutData?.data?.menu?.data?.attributes?.readFullArticle}
        </p>
      </span>
    </div>
  </a>
</section>
