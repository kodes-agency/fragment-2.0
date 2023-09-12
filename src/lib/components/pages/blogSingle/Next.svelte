<script lang="ts">
	import BlogsElement from "$lib/components/elements/Blog.svelte";
    import type { Blog } from "../../../../__generated__/graphql";
    import { page } from "$app/stores";

    let blogs: {id:number, attributes: Blog}[]
    $: blogs = $page.data.singleBlogPage?.data?.blogs?.data

    console.log($page.data)

    let displayBlogs: {id:number, attributes: Blog}[]
    $: displayBlogs = blogs.filter(blog=>{return blog.attributes.slug != $page.params.slug}).sort(() => 0.5 - Math.random()).slice(0,3)

</script>
 
<section class="flex flex-col items-center justify-center p-7 py-20 md:p-20 lg:p-40 space-y-12">
        <h2 class="center font-bold text-4xl md:text-5xl gradient gradient-anm gradient-text py-5">{$page.data?.layoutData?.data?.menu?.data?.attributes?.youMayFindInteresting}</h2>
        <div class="blogs-wrapper">
            {#each displayBlogs as blog}
                <BlogsElement
                    title={blog.attributes?.title}
                    slug={blog.attributes?.slug}
                    img={blog.attributes?.thumbnail?.data?.attributes?.url+"?format=webp"}
                    date={blog.attributes?.publishedAt}
                    alt={blog.attributes?.thumbnail?.data?.attributes?.alternativeText}
                    
                />
            {/each}
        </div>
        <div class="gradient gradient-anm">
            <a class="py-1 px-10 border border-white h-full w-full bg-black hover:bg-[rgba(0,0,0,0.2)]" href="{$page.params.lang ? "/"+$page.params.lang : ""}/blog?repeat=true#collection">{$page.data.layoutData?.data?.menu?.data?.attributes?.viewAllBlogs}</a>
        </div>
</section>

<style lang="postcss">
    .blogs-wrapper {
        width: 85vw;
        max-width: 1100px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2vh;
    }
</style>