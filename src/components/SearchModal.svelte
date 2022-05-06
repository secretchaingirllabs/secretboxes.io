<script>
    import Fuse from 'fuse.js';
    import { createEventDispatcher } from 'svelte';
    import { clickOutside } from 'src/lib/clickOutside';
    import { toKebabCase } from 'src/lib/utils';
    
    export let posts = [];

    const options = {
        includeScores: true,
        keys: [
            'frontmatter.title', 
            'frontmatter.description', 
            'frontmatter.box.title',
            'frontmatter.box.description',
            'frontmatter.box.prelude',
            'frontmatter.box.difficulty',
        ]
    };

    const fuse = new Fuse(posts, options);
    const dispatch = createEventDispatcher();

    let isVisible = false;
    let query = '';

    function goTo(post) {
        let box = toKebabCase(post.item.frontmatter.box.title);
        let postTitle = toKebabCase(post.item.frontmatter.title);
        window.location.replace(`/boxes/${box}/${postTitle}`);
    }

    function emitClickOutside() {
        dispatch('click_outside');
    }
    
    $: results = fuse.search(query)
</script>

<div class="fixed w-full h-full top-0 left-0 bg-modal overflow-auto z-10">
    <div use:clickOutside on:click_outside={emitClickOutside}>
        <input bind:value={query} on:input={() => isVisible = true} class="block w-1/2 h-14 mx-auto mt-[200px] outline-none bg-white rounded-lg bg-search bg-no-repeat bg-left-center pl-8 pr-2" type="text" placeholder="search"/>

        {#if isVisible && query !== ''}
            <div class="mt-3 w-1/2 mx-auto h-80 bg-white rounded-lg overflow-scroll px-4">
                <!-- Search results go here -->
                <p class="mt-5">{results.length} results for "{query}"</p>

                {#each results as r}
                    <div class="border-b border-solid pb-3.5 mt-3.5 cursor-pointer" on:click={goTo(r)}>
                        <div class="text-search tracking-search mb-2.5">{r.item.frontmatter.title}</div>
                        <div class="text-xsm tracking-search">{r.item.frontmatter.description}</div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>