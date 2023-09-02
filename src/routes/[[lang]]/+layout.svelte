<script lang="ts">
  import "../../app.css";
  import Header from "$lib/components/global/Header.svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap.js";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText.js";
  // @ts-ignore
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import Footer from "$lib/components/global/Footer.svelte";
  import "@beyonk/gdpr-cookie-consent-banner/style.css"; // optional, you can also define your own styles
  import { Banner as GdprBanner } from "@beyonk/gdpr-cookie-consent-banner";
  import { page } from "$app/stores";

  function initAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-4N5M0K1N5X");
  }

  function initTracking() {
    // @ts-ignore-all
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "879181756475539");
    fbq("track", "PageView");
  }

  gsap.registerPlugin(SplitText, ScrollTrigger);

  $: cookiesPolicy =
    $page?.data?.layoutData?.data?.cookiesPolicy?.data?.attributes;
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-4N5M0K1N5X"
  ></script>
  <title>{$page.data.layoutData.data?.menu?.data?.attributes?.seoTitle}</title>
  <meta name="description" content={$page.data.layoutData.data?.menu?.data?.attributes?.seoDescription}>
  <meta name="keywords" content={$page.data.layoutData.data?.menu?.data?.attributes?.seoKeywords}>

</svelte:head>

{#if $page.route.id != "/[[lang]]/landing/[slug]" }
<GdprBanner
  cookieName="gdpr_cookie_consent"
  heading={cookiesPolicy.bannerHeading}
  description={cookiesPolicy.bannerDescription}
  acceptLabel={cookiesPolicy.acceptLabel}
  rejectLabel={cookiesPolicy.rejectLabel}
  settingsLabel={cookiesPolicy.settingsLabel}
  closeLabel={cookiesPolicy.closeLabel}
  editLabel={cookiesPolicy.editLabel}
  choices={{
    necessary: {
      label: `${cookiesPolicy.necessaryLabel}`,
      description: `${cookiesPolicy.necessaryDescription}`,
      value: true,
    },
    tracking: {
      label: `${cookiesPolicy.trackingLabel}`,
      description: `${cookiesPolicy.trackingDescription}`,
      value: true,
    },
    analytics: {
      label: `${cookiesPolicy.analyticsLabel}`,
      description: `${cookiesPolicy.analyticsDescription}`,
      value: true,
    },
    marketing: {
      label: `${cookiesPolicy.marketingLabel}`,
      description: `${cookiesPolicy.marketingDescription}`,
      value: true,
    },
  }}
  on:analytics={initAnalytics}
  on:tracking={initTracking}
/>
{/if}
<Header />
<slot />
<Footer />

<style lang="postcss">
  :global(.cookieConsentWrapper) {
    background-color: var(--white-color);
  }

  :global(.cookieConsentWrapper p) {
    color: var(--black-color);
  }

  :global(.cookieConsentWrapper a) {
    color: var(--black-color);
  }

  :global(.cookieConsentOperations label) {
    color: var(--black-color);
  }

  :global(.cookieConsentOperations span) {
    color: var(--black-color);
  }

  :global(.cookieConsentToggle) {
    background-color: var(--white-color);
    right: 40px;
    left: auto;
  }

  :global(.cookieConsentToggle path) {
    fill: var(--black-color);
  }

  :global(.cookieConsent__Button) {
    border: 1px solid var(--black-color);
    background-color: var(--white-color);
    text-transform: uppercase;
    font-size: 15px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 0px;
    color: var(--black-color);
  }

  :global(.cookieConsent__Button:hover) {
    color: var(--white-color);
    background-color: var(--black-color);
    opacity: 1;
  }

  @media only screen and (max-width: 400px) {
    :global(.cookieConsent__Right) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    :global(.cookieConsent__Button) {
      padding: auto;
      width: 80vw;
    }

    :global(.cookieConsentToggle) {
      background-color: var(--white-color);
      right: 15px;
      bottom: 15px;
      left: auto;
    }
  }
</style>
