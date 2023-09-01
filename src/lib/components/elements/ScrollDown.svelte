<script lang="ts">
    import { onMount } from 'svelte'
    // @ts-expect-error
    import { gsap } from 'gsap/dist/gsap'
        // @ts-expect-error
    import { SplitText } from 'gsap/dist/SplitText';
    import { page } from '$app/stores';

    let scrollDownTextSection: HTMLElement
    console.log($page.data)

    onMount(() => {
        const ctx = gsap.context(()=>{
            let scrollSplit = new SplitText('#scroll-down-text', {type: 'chars'});
            const scollDownTl = gsap.timeline({repeat: 3})
            scollDownTl.from(scrollSplit.chars, {
                opacity: 0,
                stagger: 0.1,
                delay: 4,
            })
            
            scollDownTl.to(scrollSplit.chars, {
                opacity: 0,
                stagger: 0.1,
            }, '-=0.2')
        }, scrollDownTextSection)

        return () => {
            ctx.revert()
        }
    })
</script>

<div class="scroll-down-wrapper" bind:this={scrollDownTextSection}>
    <p id="scroll-down-text">{$page.data.layoutData?.data?.menu?.data?.attributes?.scrollDown}</p>
</div>

<style>
    .scroll-down-wrapper {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>