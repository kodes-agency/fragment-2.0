<script>
	import Blogs from "$lib/elements/blog/Blogs.svelte";
    export let blogs
    export let locale
    export let baseUrl
    export let currentSlug

    let displayBlogs

    $: displayBlogs = blogs.filter(blog=>{return blog.id != currentSlug}).sort(() => 0.5 - Math.random()).slice(0,3)

</script>

<section>
    <div class="section-wrapper">
        <h2>You may also find <b>interesting to read:</b></h2>
        <div class="blogs-wrapper">
            {#each displayBlogs as blog}
                <Blogs
                    locale={locale}
                    baseUrl={baseUrl}
                    blog={blog}
                    title={blog.attributes.title}
                    id={blog.id}
                    img={blog.attributes.thumbnail.data.attributes.url}
                    date={blog.attributes.publishedAt}
                ></Blogs>
            {/each}
        </div>
        <div class="more-work-wrapper">
            {#if locale == 'en' }
                <a class="more-link" href="/blogs/blog-more">View all blogs</a>
            {:else}
                <a class="more-link" href="/blogs/blog-more">Всички статии</a>
            {/if}
        </div>
    </div>
</section>

<style>

    b {
        color:var(--magenta-color);
    }

    h2 {
        text-align: center;
    }

    .section-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10vw;
        gap: 5vh;
    }

    .blogs-wrapper {
        max-width: 80vw;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2vh;
    }

    .more-work-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .more-link {
        border: 2px solid var(--white-color);
        padding-inline: 4vw;
        padding-block: 5px;
    }

    .more-link:hover {
        background-image: url('http://45.91.94.21/uploads/Fragment_Gradient_1200x1200_saturated_861feb5604.jpg');
        background-size: 200%;
        animation: gradient 3s infinite linear;
        transform: translateY(-2px);
        transition: transform 0.3s;
    }

    @media only screen and (max-width: 700px){
        .section-wrapper {
            padding: 5vw;
            padding-block: 10vh;
        }
        
        .blogs-wrapper {
            max-width: 90vw;
        }
    }


</style>