<script lang="ts">    
    // @ts-expect-error
    import { gsap } from 'gsap/dist/gsap.js'
	import { onMount } from 'svelte';
    // @ts-expect-error
    import { SplitText } from "gsap/dist/SplitText.js"
    import ScrollDown from '$lib/components/elements/ScrollDown.svelte';

    import { page } from '$app/stores';
    import { PUBLIC_IMAGE_URL } from '$env/static/public';
    import type { Blog } from '../../../../__generated__/graphql';

    let blogs: {attributes: Blog}[]
    // @ts-expect-error
    $: blogs = $page.data.data?.blogs?.data
    $: sectionData = $page.data.data?.blogsPage?.data?.attributes

    let section:HTMLElement

    onMount(()=>{
        const ctx = gsap.context(()=>{
            const blogsSubtextSplit = new SplitText('#blogs-hero-subtext', {type: 'lines'})
            new SplitText('#blogs-hero-subtext', {type: 'lines', linesClass: 'parentLine'})
            gsap.set('.parentLine', {overflow: 'hidden'})
            const blogsHeroTl = gsap.timeline({})
    
            blogsHeroTl.from('.heading', {
                opacity: 0,
                duration: 3,
                stagger: 0.3,
                delay: 1,
                ease: 'power2.out'
            })
    
            blogsHeroTl.from(blogsSubtextSplit.lines, {
                y: '-150%',
                rotation: -45,
                opacity: 0,
                transformOrigin: '0% 50% -50',
                duration: 1,
                ease: 'power3.out',
                stagger: 0.15
            }, '-=2.5')
        }, section)
        
        return () => {
            ctx.revert()
        }
    })
    
</script>

<section bind:this={section} class="relative h-screen">
    <img class="absolute top-0 left-0 w-screen h-screen object-cover object-bottom opacity-70 z-0" src={PUBLIC_IMAGE_URL+sectionData?.heroImage?.data?.attributes?.formats.compress.url} alt={sectionData?.heroImage?.data?.attributes?.alternativeText}>
        <div class="relative z-10 flex flex-col justify-center h-full px-5 md:px-20 lg:px-40 space-y-3">
            <span class="flex flex-wrap">
                <h1 class="heading text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold">{sectionData?.heroHeadingBold}</h1>
                <h1 class="heading text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold">&#160;</h1>
                <h1 class="heading text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl italic">{sectionData?.heroHeadingItalic}</h1>
            </span>
            <h2 id="blogs-hero-subtext" class="blogs-hero-subtext text-3xl max-w-screen-sm 2xl:max-w-screen-lg 2xl:text-4xl">{sectionData?.heroSubtext}</h2>
        </div>
    <ScrollDown></ScrollDown>
</section>