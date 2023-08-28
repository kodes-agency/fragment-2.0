<script lang="ts">
    // @ts-expect-error
    import { gsap } from 'gsap/dist/gsap'
	import { onMount } from 'svelte';
    import { page } from '$app/stores'
    // @ts-expect-error
    import { SplitText } from "gsap/dist/SplitText"

    let section: HTMLElement
    $: sectionData = $page.data.data?.contactPage?.data?.attributes

    onMount(()=>{
        const ctx = gsap.context(()=>{
            const spotifyHeading = new SplitText("#spotify-heading", {type: "lines"})
            new SplitText("#spotify-heading", {type: "lines", linesClass: "parentLine"})
            gsap.set('.parentLine', {overflow: 'hidden'})
    
            const contactSpotifyTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 50%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse",
                }
            });
    
            contactSpotifyTl.from("#spotify-icon", {
                opacity: 0,
                scale: 0.5,
                duration: 1,
                ease: "back.out(2)",
            })
    
            contactSpotifyTl.from(spotifyHeading.lines, {
                y: "-150%",
                rotation: -45,
                opacity: 0,
                transformOrigin: "0% 50% -50",
                duration: 1,
                ease: "power3.out",
                stagger: 0.15
            })
    
            contactSpotifyTl.from(".spotify-p", {
                y: "-150%",
                rotation: -45,
                opacity: 0,
                transformOrigin: "0% 50% -50",
                duration: 1,
                ease: "power3.out",
                stagger: 0.15
            }, '-=1')
        }, section)
        
        return () => {
            ctx.revert()
        }
     })
</script>

<section id="contact-spotify" class="py-60 p-5" bind:this={section}>
    <a href="{sectionData?.spotifyLink}" target="_blank" rel="noreferrer">
        <div class="flex flex-col justify-center items-center space-y-6">
            <svg id="spotify-icon" class="" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 0C16.1274 0 0 16.1274 0 36C0 55.8726 16.1274 72 36 72C55.8726 72 72 55.8726 72 36C72 16.1274 55.8726 0 36 0ZM50.6177 52.9694C50.0081 52.9694 49.6306 52.7806 49.0645 52.4468C40.0065 46.9887 29.4677 46.7564 19.0597 48.8903C18.4935 49.0355 17.7532 49.2677 17.3323 49.2677C15.9242 49.2677 15.0387 48.15 15.0387 46.9742C15.0387 45.479 15.9242 44.7677 17.0129 44.5355C28.9016 41.9081 41.0516 42.1403 51.4161 48.3387C52.3016 48.9048 52.8242 49.4129 52.8242 50.7339C52.8242 52.0548 51.7935 52.9694 50.6177 52.9694ZM54.5226 43.4468C53.7677 43.4468 53.2597 43.1129 52.7371 42.8371C43.6645 37.4661 30.1355 35.3032 18.1016 38.5694C17.4048 38.7581 17.0274 38.9468 16.3742 38.9468C14.821 38.9468 13.5581 37.6839 13.5581 36.1306C13.5581 34.5774 14.3129 33.5468 15.8081 33.1258C19.8435 31.9935 23.9661 31.1516 30.0048 31.1516C39.4258 31.1516 48.5274 33.4887 55.6984 37.7565C56.8742 38.4532 57.3387 39.3532 57.3387 40.6161C57.3242 42.1839 56.1048 43.4468 54.5226 43.4468ZM59.0226 32.3855C58.2677 32.3855 57.8032 32.1968 57.15 31.8194C46.8145 25.65 28.3355 24.1694 16.3742 27.5081C15.8516 27.6532 15.1984 27.8855 14.5016 27.8855C12.5855 27.8855 11.1194 26.3903 11.1194 24.4597C11.1194 22.4855 12.3387 21.3677 13.6452 20.9903C18.7548 19.4952 24.4742 18.7839 30.7016 18.7839C41.2984 18.7839 52.4032 20.9903 60.5177 25.7226C61.65 26.3758 62.3903 27.2758 62.3903 29.0032C62.3903 30.9774 60.7935 32.3855 59.0226 32.3855Z" fill="#F5F5F5"/>
            </svg>
            <h2 id="spotify-heading" class="font-bold text-4xl text-center md:text-5xl">{sectionData?.spotifyHeading}</h2>
            <span class="flex flex-col md:flex-row">
                <div class="overflow-hidden">
                    <p class="spotify-p text-2xl text-center">{sectionData?.spotifySubtextNormal}</p>
                </div>
                <p class="text-2xl hidden md:block">&#160;</p>
                <div class="overflow-hidden">
                    <p class="italic font-bold text-2xl spotify-p text-center">{sectionData?.spotifySubtextItalicBold}</p>
                </div> 
            </span>
        </div>
    </a>
</section>