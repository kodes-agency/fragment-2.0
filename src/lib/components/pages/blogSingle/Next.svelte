<script lang="ts">
	import BlogsElement from "$lib/components/elements/Blog.svelte";
    import type { Blog } from "../../../../__generated__/graphql";
    import { page } from "$app/stores";

    let blogs: {id:number, attributes: Blog}[]
    // @ts-expect-error
    $: blogs = $page.data.data?.blogs?.data

    let displayBlogs: {id:number, attributes: Blog}[]
    $: displayBlogs = blogs.filter(blog=>{return blog.id != Number($page.params.id)}).sort(() => 0.5 - Math.random()).slice(0,3)

</script>
 
<section class="flex flex-col items-center justify-center p-5 py-20 md:p-20 lg:p-40 space-y-12">
        <h2 class="center font-bold text-4xl md:text-5xl">You may also find <b class="text-magenta">interesting to read:</b></h2>
        <div class="blogs-wrapper">
            {#each displayBlogs as blog}
                <BlogsElement
                    title={blog.attributes?.title}
                    id={blog.id}
                    img={blog.attributes?.thumbnail?.data?.attributes?.formats.compress.url}
                    date={blog.attributes?.publishedAt}
                    alt={blog.attributes?.thumbnail?.data?.attributes?.alternativeText}
                />
            {/each}
        </div>
        <div class="gradient gradient-anm">
            <a class="py-1 px-10 border border-white h-full w-full bg-black hover:bg-[rgba(0,0,0,0.2)]" href="/blogs/blog-more">View all blogs</a>
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