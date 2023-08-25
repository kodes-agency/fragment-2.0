<script lang="ts">
    // @ts-expect-error
    import { gsap } from 'gsap/dist/gsap'
	import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import type { ComponentContactChannelsContactChannel } from '../../../../__generated__/graphql';
    import Accordion from '$lib/components/elements/accordion/accordion.svelte';
    import AccordionItem from '$lib/components/elements/accordion/accordion-item.svelte';


    let contacts: ComponentContactChannelsContactChannel[]
    // @ts-expect-error
    $: contacts = $page.data.data?.contactPage?.data?.attributes?.contactChannels

    
    let section:HTMLElement

    onMount(()=>{
        const ctx = gsap.context(()=>{
            //Animation
            const contactMainTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 50%",
                    end: "bottom 80%",
                    toggleActions: "play none none none"
                }
            });
    
            contactMainTl.from(section, {
                opacity: 0,
                duration: 2,
            })
        }, section)

        return () => {
            ctx.revert()
        }

        //List item click
    })
</script>

<section bind:this={section} id="contact-main-wrapper-1" class="px-5 md:px-20 lg:px-60 flex flex-col justify-center py-20">
        <Accordion collapse --accordion-width="60ch" --accordion-color="var(--white-color)">
            {#each contacts as contact, i }  
                <AccordionItem>
                    <svelte:fragment slot="title">
                        <h2 class="anmClass title font-bold text-start text-4xl md:text-5xl uppercase transition-all duration-700">
                            {contact.channelName}
                        </h2>
                    </svelte:fragment>
                    <svelte:fragment slot="content">
                        <a class="text-cyan" target="_blank" href="{contact.channelLink}">{contact.channelInfo}</a>
                    </svelte:fragment>
                </AccordionItem>
            {/each}
        </Accordion>
</section>