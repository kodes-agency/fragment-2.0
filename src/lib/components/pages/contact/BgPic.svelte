<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_IMAGE_URL } from "$env/static/public";
  $: sectionData = $page.data.data?.contactPage?.data?.attributes;
</script>

<img class="fixed top-0 w-full h-screen object-cover opacity-50 -z-10" src="{PUBLIC_IMAGE_URL+sectionData?.contactBgImage?.data?.attributes?.url}" alt="{sectionData?.contactBgImage?.data?.attributes?.alternativeText}">

