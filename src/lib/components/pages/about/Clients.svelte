<script>
    import { gsap } from 'gsap/dist/gsap'
	import { onMount } from 'svelte';
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
    export let heading
    export let clients
    export let baseUrl
    export let gradient

    let aboutClientSection
    

    onMount(()=>{
        const ctx = gsap.context(() => {
            const aboutClientsTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutClientSection,
                    start: 'top 40%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none reverse',
                }
            })
    
            aboutClientsTl.from('#about-clients-heading', {
                opacity: 0,
                duration: 3,
                ease: 'power2.out',
            })
    
            aboutClientsTl.from('.client-logo', {
                opacity: 0,
                duration: 3,
                stagger: 0.2,
                ease: 'power2.out',
            }, '-=2')
        }, aboutClientSection)
            
        return () => {
            ctx.revert()
        }
        
    })
</script>

<section id="about-clients-section" bind:this={aboutClientSection}>
    <div class="section-wrapper">
        <h2
            style="background-image: url({gradient});"
            id="about-clients-heading"
        >{heading}</h2>
        <div class="grid-wrapper">
            <div class="clients-wrapper">
                {#each clients as client }
                    <span>
                        <img class="client-logo" src="{baseUrl+client.attributes.clientLogo.data.attributes.url}" alt="{client.attributes.clientLogo.data.attributes.alternativeText}">
                    </span>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .section-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 10vw;
        padding-block: 10vh;
        justify-content: center;
        gap: 10vh;
    }

    h2 {
        text-align: center;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-position: 20% 50%;
        background-size: 150%;
        font-weight: bold;
    }

    .clients-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        align-items: center;
        justify-items: center;
        gap: 8vh;
    }

    .client-logo {
        max-width: 100px;
        max-height: 100px;
        object-fit: contain;
    }
</style>