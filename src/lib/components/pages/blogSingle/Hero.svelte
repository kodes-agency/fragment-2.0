<script lang="ts">
    import { onMount } from 'svelte'
    // @ts-ignore
    import { gsap } from 'gsap/dist/gsap'
    import { page } from '$app/stores';
    import { PUBLIC_IMAGE_URL } from '$env/static/public';

    let section: HTMLElement
    let blogWrapper: HTMLElement
    let blogHeadingWrapper: HTMLElement
    let blogShortWrapper: HTMLElement

    $: sectionData = $page.data.data?.blog?.data?.attributes
    
    console.log($page.data.data?.blog?.data?.attributes)
    
    let mm = gsap.matchMedia();

    function effectHandler() {
        const singleBlogHeroTl2 = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 0%',
                end: 'bottom 40%',
                scrub: true,
                toggleActions: 'play none none reset'
            }
        })

        singleBlogHeroTl2.to(blogWrapper, {
            width: "100%",
            ease: 'power2.out',
        })
    }


    onMount(()=>{
        const ctx = gsap.context(()=>{
            effectHandler()
        },section)

        return () => {
            ctx.revert()
        }
    })




</script>

<section bind:this={section} class="relative flex flex-col justify-end items-center h-screen">
    <img class="absolute w-screen h-screen object-cover top-0 left-0 z-0 opacity-30" src="{PUBLIC_IMAGE_URL+sectionData?.thumbnail?.data?.attributes?.url}" alt="{sectionData?.thumbnail?.data?.attributes?.alternativeText}">
    <article bind:this={blogWrapper} class="wrapper z-10 bg-white">
        <div class="relative h-4/6">
            <img class="w-full h-full object-cover" src="{PUBLIC_IMAGE_URL+sectionData?.thumbnail?.data?.attributes?.url}" alt="{sectionData?.thumbnail?.data?.attributes?.alternativeText}">
            <div bind:this={blogHeadingWrapper} class="absolute bottom-20 bg-[rgba(230,5,117,0.7)] w-full flex items-center justify-center px-5 md:px-10 py-5">
                <div class="texty">
                    <h1 class="text-white text-3xl md:text-4xl font-bold texty">{sectionData?.title}</h1>
                    <p class="text-white text-lg texty">article by {sectionData?.author}</p>
                </div>
            </div>
        </div>
        <div class="px-5 md:px-10 h-2/6 relative flex flex-col justify-center items-center" bind:this={blogShortWrapper}>
            <p class="text-black texty font-bold text-md md:text-lg">{sectionData?.shortDescription}</p>
        </div>
    </article>
</section>

<style lang="postcss">
    .texty {
        width: 60vw;
    }

    .wrapper {
        height: 80vh;
        width: 70vw;
    }

    @media only screen and (max-width: 766px) {
        .texty {
            width: 75vw;
        }

        .wrapper {
            width: 85vw;
            height: 90vh;
        }
    }
</style>