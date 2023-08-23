<script lang="ts">
    import { page } from '$app/stores';
    import type { Project, ProjectCategory, ProjectLayoutDynamicZone } from '../../__generated__/graphql';


    let projectCategories: {attributes: ProjectCategory}[]
    let projects: {attributes: Project}[]


    $: workPage = $page.data.data?.workPage?.data?.attributes
    // @ts-expect-error
    $: projects = $page.data.data?.projects?.data
    // @ts-expect-error
    $: projectCategories = $page.data.data?.projectCategories?.data
      
  </script>
  
  <h1>{workPage?.heroSubtext}</h1>

  {#each projectCategories as category }
    <h3>{category.attributes.category}</h3>
  {/each}

  {#each projects as project }
    <h3>{project.attributes.title}</h3>
  {/each}
  
  <style>
  </style>
  