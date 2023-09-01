<script lang="ts">
  import Hero from '$lib/components/pages/home/Hero.svelte';
  import Work from '$lib/components/pages/home/Work.svelte';  
  import Services from '$lib/components/pages/home/Services.svelte';  
  import Blog from '$lib/components/pages/home/Blog.svelte';  
  import Contact from '$lib/components/pages/home/Contact.svelte';  
  import { langStore } from '$lib/stores/store';

</script>
{#key $langStore }
<Hero/>
{/key}
<Work/>
<Services/>
<Blog/>
<Contact/>