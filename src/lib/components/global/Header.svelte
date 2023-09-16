<script lang="ts">
  //@ts-ignore
  import { gsap } from "gsap/dist/gsap";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Subscribe from "../elements/Subscribe.svelte";
  import ProgressBar from "../elements/ProgressBar.svelte";
  import Language from "./Language.svelte";

  let fadeAnimationElements;
  let navLinks: HTMLElement[];

  function linkMouseEnterAnimation(event: any) {
    navLinks.forEach((link) => {
      link.style.transform = "scale(0.8)";
      event.target.style.transform = "scale(1.2)";
      event.target.classList.add("gradient", "gradient-anm", "gradient-text")
    });
  }

  function linkMouseLeaveAnimation() {
    navLinks.forEach((link) => {
      link.classList.remove("gradient", "gradient-anm", "gradient-text")
      link.style.transform = "scale(1)";
    });
  }

  let isOpen = false;
  let openTl = gsap.timeline({
    paused: true,
    ease: "Power1.easeOut",
    onStart: () => {
      isOpen = true;
    },
    onReverseComplete: () => {
      isOpen = false;
    },
  });

  function initMenuAnimation() {
    openTl.reversed(!openTl.reversed());
  }

  onMount(() => {
    fadeAnimationElements = document.querySelectorAll(".nav-animation");
    // @ts-expect-error
    navLinks = document.querySelectorAll(".nav-link");

    openTl.set(".menu", {
      display: "flex",
    });

    openTl.to(".menu", {
      opacity: 1,
      duration: 0.5
    });

    openTl.from(fadeAnimationElements, {
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    });
    openTl.reverse();
  });
</script>

<nav class="fixed w-full top-0 z-50">
  <ProgressBar />
  <section class="flex justify-between items-center md:items-start p-5 md:p-10 lg:p-12">
    <!-- Logo container  -->
    <div class="">
      <a
        aria-label="Home page"
        href="{$page.params.lang ? "/"+$page.params.lang : ""}/"
        on:click={() => {
          if (isOpen == true) {
            initMenuAnimation();
          }
        }}
        data-sveltekit-preload-data="tap"
      >
        <svg
          id="logo"
          width="200"
          height="28"
          viewBox="0 0 200 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <g clip-path="url(#clip0_137_13)">
            <path
              d="M0 1.68942V27.4233H5.75376V16.7917H16.7068V12.3925H5.75376V6.44634H18.3929V1.68942H0Z"
              fill="#F5F5F5"
            />
            <path
              d="M34.0863 13.3313C35.4043 13.3313 36.395 13.0407 37.054 12.464C37.713 11.8873 38.0448 10.9529 38.0448 9.65189C38.0448 8.35089 37.7176 7.49697 37.054 6.92918C36.395 6.36586 35.4043 6.08421 34.0863 6.08421H27.7871V13.3313H34.0863ZM36.136 1.68942C37.3085 1.68942 38.3629 1.8772 39.3037 2.24827C40.2445 2.61935 41.0489 3.12902 41.7216 3.78175C42.3942 4.43001 42.9032 5.18111 43.2623 6.03503C43.6168 6.88895 43.794 7.80546 43.794 8.7935C43.794 10.3091 43.4713 11.619 42.8214 12.7233C42.1761 13.8276 41.1171 14.6681 39.6537 15.2448V15.3164C40.3627 15.5086 40.949 15.8037 41.4125 16.2016C41.8761 16.5995 42.2533 17.0645 42.5487 17.6054C42.8442 18.1464 43.0578 18.741 43.1896 19.3893C43.3259 20.0375 43.4168 20.6858 43.4622 21.3385C43.485 21.7454 43.5122 22.2282 43.535 22.7781C43.5577 23.3325 43.6031 23.8958 43.6622 24.4725C43.7213 25.0493 43.8213 25.5947 43.9576 26.1133C44.094 26.6275 44.294 27.0701 44.5621 27.4277H38.8083C38.4902 26.6096 38.2948 25.6394 38.2221 24.5083C38.1493 23.3772 38.0403 22.2997 37.8948 21.2625C37.6994 19.9168 37.2858 18.9332 36.6495 18.3073C36.0133 17.6814 34.977 17.3685 33.5363 17.3685H27.7826V27.4233H22.0288V1.68942H36.136Z"
              fill="#F5F5F5"
            />
            <path
              d="M58.4829 8.03347H58.5556L61.8552 17.4758H55.0788L58.4829 8.03347ZM55.6242 1.68942L45.7346 27.4233H51.5202L53.5745 21.6917H63.3549L65.3319 27.4233H71.3039L61.5234 1.68942H55.6242Z"
              fill="#F5F5F5"
            />
            <path
              d="M87.4926 27.2221C86.2473 27.7362 84.9884 27.9956 83.7204 27.9956C81.7161 27.9956 79.9164 27.6513 78.3166 26.9673C76.7168 26.2832 75.367 25.3399 74.2671 24.1373C73.1673 22.9346 72.3265 21.5263 71.7402 19.9034C71.1539 18.2805 70.863 16.5325 70.863 14.6592C70.863 12.7859 71.1539 10.9529 71.7402 9.30767C72.3265 7.66242 73.1673 6.2273 74.2671 5.0023C75.367 3.7773 76.7168 2.81609 78.3166 2.11864C79.9164 1.4212 81.7161 1.07248 83.7204 1.07248C85.0657 1.07248 86.3655 1.26919 87.6198 1.66709C88.8788 2.06499 90.015 2.6462 91.0285 3.41517C92.042 4.18415 92.8782 5.13195 93.5372 6.26306C94.1962 7.39417 94.6007 8.6907 94.7461 10.1571H89.2514C88.9106 8.71305 88.2516 7.63112 87.2744 6.91133C86.2973 6.19153 85.1111 5.8294 83.7204 5.8294C82.4251 5.8294 81.3252 6.07529 80.4208 6.56708C79.5164 7.05886 78.7847 7.72054 78.2211 8.54763C77.6576 9.37473 77.2485 10.3181 76.994 11.3776C76.7395 12.4372 76.6077 13.5281 76.6077 14.6547C76.6077 15.7814 76.735 16.7873 76.994 17.8111C77.2485 18.8304 77.6576 19.7514 78.2211 20.5696C78.7847 21.3877 79.5164 22.0405 80.4208 22.5323C81.3252 23.024 82.4251 23.2699 83.7204 23.2699C85.6247 23.2699 87.0972 22.796 88.1334 21.8438C89.1696 20.8959 89.7741 19.5189 89.9468 17.7172H84.1567V13.5013H95.1461V27.4144H91.483L90.8967 24.4949C89.8695 25.7915 88.7333 26.699 87.488 27.2176"
              fill="#F5F5F5"
            />
            <path
              d="M119.875 1.68942L114.089 19.3848H114.016L107.894 1.68942H99.8V27.4233H105.186V9.36576H105.258L111.671 27.4233H116.102L122.515 9.18693H122.588V27.4233H127.973V1.68942H119.875Z"
              fill="#F5F5F5"
            />
            <path
              d="M133.027 1.68942V27.4233H152.884V22.6664H138.781V16.3581H151.457V11.9633H138.781V6.44634H152.593V1.68942H133.027Z"
              fill="#F5F5F5"
            />
            <path
              d="M173.476 1.68942V18.9511H173.399L162.482 1.68942H156.77V27.4233H162.155V10.1973H162.228L173.108 27.4233H178.857V6.44634H186.406V27.4233H192.16V6.44634H200V1.68942H173.476Z"
              fill="#F5F5F5"
            />
          </g>
          <defs>
            <clipPath id="clip0_137_13">
              <rect
                width="200"
                height="26.9231"
                fill="white"
                transform="translate(0 1.07693)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
      {#if $page.route.id == "/blog/[blog]" || $page.route.id == "/blog"}
        <p class="text-xl font-bold italic text-magenta">Independent</p>
      {/if}
    </div>
    <!-- Navigation elements -->
    <div class="flex justify-between items-center space-x-5">
      <!-- Action button -->
      <div class="cta-button hidden md:block">
          <a class="px-4 py-1 border-2 bg-black hover:bg-[rgba(0,0,0,0.2)] border-white" href="mailto:office@fragment.bg" target="_blank">
            {$page.data.layoutData?.data?.menu?.data?.attributes?.letsTalk}
          </a>
      </div>
      <!-- Navigation button -->
      <button
        id="toggle"
        aria-label="Menu toggle button"
        class="transition-all {isOpen ? "isRotated" : ""}"
        on:click={() => {
          initMenuAnimation();
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <line
            x1="1"
            y1="11.0476"
            x2="21"
            y2="11.0476"
            stroke="#F5F5F5"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="11"
            y1="21"
            x2="11"
            y2="1"
            stroke="#F5F5F5"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </section>
</nav>
<!-- Navigation menu modal -->
<div
  class="menu hidden opacity-0 bg-black fixed top-0 py-5 px-5 md:px-10 lg:px-12 z-40 flex-col min-h-screen justify-end space-y-6 md:space-y-10 items-center w-full"
>
  <div class="flex flex-col space-y-5">
    <!-- Navigation links -->
    <div class="nav-animation text-center flex flex-col text-4xl md:text-5xl lg:text-6xl space-y-2 pb-8">
      {#each $page.data.layoutData?.data?.menu?.data?.attributes?.menuItems as item }
        <a
          class=" hover:-translate-y-5 transition-all duration-300 nav-link p-1"
          on:click={initMenuAnimation}
          on:mouseenter={(event) => {
            linkMouseEnterAnimation(event);
          }}
          on:mouseleave={() => {
            linkMouseLeaveAnimation();
          }}
          data-sveltekit-preload-data="tap"
          href="{$page.params.lang ? "/"+$page.params.lang : ""}{item?.link}"
          >{item?.menuItem}
        </a>
      {/each}
    </div>
    <!-- Language switch -->
    <div class="nav-animation">
      <Language/>
    </div>
  </div>
  <!-- Subscribe element -->
  <div class="nav-animation">
    <Subscribe 
      placeholder={$page.data.layoutData?.data?.menu?.data?.attributes?.subscribePlaceholder}
      subscribeMessage={$page.data.layoutData?.data?.menu?.data?.attributes?.subscribeSuccess}
      buttonText={$page.data.layoutData?.data?.menu?.data?.attributes?.subscribeToOurMailing}
    />
  </div>
  <!-- Bottom modal links -->
  <div
    class="flex flex-col items-center space-y-4 nav-animation w-full"
  >
    <div class="bg-white h-px w-full" />
    <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between w-full pb-5">
      <a
        href="{$page.params.lang ? '/' + $page.params.lang : ''}/policy"
        class="text-white text-center md:text-start text-md"
        >{$page.data.layoutData?.data?.menu?.data?.attributes?.privacyMenuItem}</a
      >
      <a
        href="{$page.params.lang ? '/' + $page.params.lang : ''}/gdpr"
        class="text-white text-center md:text-start text-md"
        >{$page.data.layoutData?.data?.menu?.data?.attributes?.gdprMenuItem}</a
      >
      <a
        href="{$page.params.lang ? '/' + $page.params.lang : ''}/cookies"
        class="text-white text-center md:text-start text-md md:pr-14"
        >{$page.data.layoutData?.data?.menu?.data?.attributes?.cookiesMenuItem}</a
      >
    </div>
  </div>
</div>
<style lang="postcss">

  nav {
  background: linear-gradient(to bottom, rgba(24, 24, 24, 1) 0%, rgba(24, 24, 24, 0.738) 19%, rgba(24, 24, 24, 0.541) 34%, rgba(24, 24, 24, 0.382) 47%, rgba(24, 24, 24, 0.278) 56.5%, rgba(24, 24, 24, 0.194) 65%, rgba(24, 24, 24, 0.126) 73%, rgba(24, 24, 24, 0.075) 80.2%, rgba(24, 24, 24, 0.042) 86.1%, rgba(24, 24, 24, 0.021) 91%, rgba(24, 24, 24, 0.008) 95.2%, rgba(24, 24, 24, 0.002) 98.2%, transparent 100%);
  }


  .isRotated {
    transform: rotate(45deg);
  }

</style>
