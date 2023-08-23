<script lang="ts">
  import { page } from "$app/stores";
  import type { ProjectLayoutDynamicZone } from "../../../__generated__/graphql";

  let layout: ProjectLayoutDynamicZone[]

  $: project = $page.data.data?.project?.data?.attributes
  // @ts-expect-error
  $: layout = $page.data.data?.project?.data?.attributes?.layout

</script>
<h1>{project?.title}</h1>
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
