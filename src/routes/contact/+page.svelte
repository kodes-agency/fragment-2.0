<script lang="ts">
    import { page } from '$app/stores';
    $: contactPage = $page.data.data?.contactPage?.data?.attributes
    
  </script>
  
  <h1>{contactPage?.heroHeading}</h1>
  
  
  <style>
  </style>
  