 <script lang="ts">
    // @ts-expect-error
    import { gsap } from 'gsap/dist/gsap'
	import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { PUBLIC_IMAGE_URL } from '$env/static/public';
    import type { Client } from '../../../../__generated__/graphql';

    let aboutClientSection: HTMLElement

    let clients: {attributes: Client}[] 
    // @ts-expect-error
    $: clients = $page.data.data?.clients?.data
    

    onMount(()=>{
        const ctx = gsap.context(() => {
            const aboutClientsTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutClientSection,
                    start: 'top 40%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none none',
                }
            })
    
            aboutClientsTl.from('#about-clients-heading', {
                opacity: 0,
                duration: 3,
                ease: 'power2.out',
            })
    
            aboutClientsTl.from('.client-logo', {
                opacity: 0,
                duration: 2,
                stagger: 0.2,
                ease: 'power2.out',
            }, '-=2')
        }, aboutClientSection)
            
        return () => {
            ctx.revert()
        }
        
    })
</script>

<section class="min-h-screen flex flex-col py-20 justify-center md:space-y-10" bind:this={aboutClientSection}>
        <h2
            id="about-clients-heading"
            class="text-center text-4xl md:text-6xl font-bold p-10 gradient gradient-anm gradient-text "
        >{$page.data.data?.aboutPage?.data?.attributes?.clientsHeading}</h2>
        <div class="grid-wrapper">
            <div class="clients-wrapper p-5 md:px-20">
                {#each clients as client }
                    {#if client.attributes.clientLogo?.data }             
                        <span>
                            <img class="client-logo max-w-[200px] h-24 object-contain" src="{PUBLIC_IMAGE_URL+client.attributes.clientLogo?.data?.attributes?.url+"?format=webp"}" alt="{client.attributes.clientLogo?.data?.attributes?.alternativeText}">
                        </span>
                    {/if}
                {/each}
            </div>
        </div>
</section>

<style lang="postcss">
    .clients-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        align-items: center;
        justify-items: center;
        gap: 10vh;
    }
</style>