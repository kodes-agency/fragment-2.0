<script lang="ts">
    import { page } from '$app/stores';
    import type { Project, ProjectCategory, ProjectLayoutDynamicZone } from '../../__generated__/graphql';
    import Hero from '$lib/components/pages/projectCollection/Hero.svelte';
    import Work from '$lib/components/pages/projectCollection/Work.svelte'

    let projectCategories: {attributes: ProjectCategory}[]
    let projects: {attributes: Project}[]


    $: workPage = $page.data.data?.workPage?.data?.attributes
    // @ts-expect-error
    $: projects = $page.data.data?.projects?.data
    // @ts-expect-error
    $: projectCategories = $page.data.data?.projectCategories?.data
      
  </script>
  
  <Hero />
  <Work />