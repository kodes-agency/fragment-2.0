<script lang="ts">
  import { page } from "$app/stores";
  import type { LandingPageLayoutDynamicZone } from "../../../__generated__/graphql";

  let layout: LandingPageLayoutDynamicZone[]

  $: landingPage = $page.data.data?.landingPage?.data?.attributes
  // @ts-expect-error
  $: layout = $page.data.data?.landingPage?.data?.attributes?.layout
</script>

<h1>{landingPage?.title}</h1>

{#each layout as element }
  {#if element.__typename == 'ComponentProjectLayoutDynamicText'}
    <div class="dynamicText-{element.id}">
        <h3 class="m-top-l dynamicText-heading-{element.id}">{element.dynamicTitle}</h3>
        <div class="element-container m-top-m">
            <p class="dynamic-text dynamicText-text-{element.id}">{element.dynamicText}</p>
        </div>
    </div>
  {/if}
{/each}

<style>
</style>
