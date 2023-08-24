<script lang="ts">
  import { page } from "$app/stores";
  import type { Blog, BlogLayoutDynamicZone } from "../../../__generated__/graphql";
  import Hero from "$lib/components/pages/blogSingle/Hero.svelte";
  import Content from "$lib/components/pages/blogSingle/Content.svelte";
  import Next from "$lib/components/pages/blogSingle/Next.svelte";


  let layout: BlogLayoutDynamicZone[]
  let blogs: {attributes: Blog}[]
  
  $: blog = $page.data.data?.blog?.data?.attributes
  // @ts-expect-error
  $: layout = $page.data.data?.blog?.data?.attributes?.layout
  // @ts-expect-error
  $: blogs = $page.data.data?.blogs?.data


</script>

<Hero/>
<Content/>
<Next/>

<style>
</style>
