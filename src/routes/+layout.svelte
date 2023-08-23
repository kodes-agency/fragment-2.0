<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/global/Header.svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap.js";
  // @ts-ignore
  import { SplitText } from "gsap/dist/SplitText.js";
  // @ts-ignore
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import Footer from "$lib/components/global/Footer.svelte";

  gsap.registerPlugin(SplitText, ScrollTrigger);
</script>

<Header />
<slot />
<Footer />
