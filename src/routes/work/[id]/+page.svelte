<script lang="ts">
  import { page } from "$app/stores";
  import type { ProjectLayoutDynamicZone } from "../../../__generated__/graphql";
  import Hero from "$lib/components/pages/projectSingle/Hero.svelte";
  import Layout from "$lib/components/pages/projectSingle/Layout.svelte";

  let layout: ProjectLayoutDynamicZone[]

  $: project = $page.data.data?.project?.data?.attributes
  // @ts-expect-error
  $: layout = $page.data.data?.project?.data?.attributes?.layout

</script>

<Hero />
<Layout />