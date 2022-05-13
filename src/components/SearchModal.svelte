<script>
    import CustomSelect from '@components/CustomSelect.svelte';
    import Fuse from 'fuse.js';
    import { onMount, createEventDispatcher } from 'svelte';
    import { clickOutside } from 'src/lib/clickOutside';
    import { toKebabCase } from 'src/lib/utils';
    
    export let posts = [];

    const options = {
        shouldSort: true,
        includeScores: true,
        includeMatches: true,
        minMatchCharLength: 3,
        threshold: 0.1,
        location: 0,
        distance: 500,
        keys: [
            'frontmatter.title', 
            'frontmatter.description', 
            'frontmatter.box.description', 
            'frontmatter.box.title', 
            'frontmatter.box.prelude', 
        ]
    };

    const filterOptions = [
        'Most Relevant',
        'Newest to Oldest',
        'Oldest to Newest',
    ];

    const fuse = new Fuse(posts, options);
    const dispatch = createEventDispatcher();

    let isVisible = false;
    let query = '';
    let caches = [];

    // This component only appears when the user has clicked on an input
    // in the header. We need switch focus from the input they clicked on
    // to this input for better usability.
    onMount(() => {
        document.getElementById('search-bar-modal-input').focus();
    })

    function goTo(post) {
        let box = toKebabCase(post.item.frontmatter.box.title);
        let postTitle = toKebabCase(post.item.frontmatter.title);
        window.location.replace(`/boxes/${box}/${postTitle}`);
    }

    function emitClickOutside() {
        dispatch('click_outside');
    }

    function insertTag(str, start, end, open, close) {
        return str.slice(0, start) + open + str.slice(start, end + 1) + close + str.slice(end + 1, str.length);
    }

    function getHtml(result, key) {
        const openTag = '<span class="text-[#3f61ff]">';
        const closeTag = '</span>';
        let str = result.item.frontmatter[key];
        
        result.matches.forEach((match) => {
            if (match.key === 'frontmatter.' + key) {
                match.indices.forEach(([start, end], index) => {
                    start = start + index * (openTag.length + closeTag.length);
                    end = end + index * (openTag.length + closeTag.length);

                    str = insertTag(str, start, end, openTag, closeTag);
                })
            } 
        })

        return str;
    }

    function filterResults(e) {
        switch (e.detail.value) {
            case 'most-relevant': 
                results = fuse.search(query);

                break;
            case 'oldest-to-newest':
                results.sort((a, b) => {
                    return new Date(b.item.frontmatter.box.createdAt).getTime() - new Date(a.cretedAt).getTime();
                });

                break;

            case 'newest-to-oldest': 
                results.sort((a, b) => {
                    return new Date(a.item.frontmatter.box.createdAt).getTime() - new Date(b.cretedAt).getTime();
                });

                break;
    
            default: return;
        }
    }
    
    $: results = fuse.search(query)
</script>

<div class="fixed w-full h-full top-0 left-0 bg-modal overflow-auto z-10">
    <div use:clickOutside on:click_outside={emitClickOutside}>
        <input id="search-bar-modal-input" bind:value={query} on:input={() => isVisible = true} class="block w-1/2 h-14 mx-auto mt-[200px] outline-none bg-white rounded-lg bg-search bg-no-repeat bg-left-center pl-8 pr-2" type="text" placeholder="search"/>

        {#if isVisible && query !== '' && query.length > 2}
            <div class="mt-3 w-1/2 mx-auto h-80 bg-white rounded-lg overflow-scroll px-4">
                <!-- Search results go here -->
                <div class="grid grid-cols-2 mt-5 items-center">
                    <p>{results.length} result(s) for "{query}"</p>
                    <div class="justify-self-end">
                        <p class="inline-block mr-4">Sort</p>
                        <CustomSelect 
                            on:select={filterResults}
                            options={filterOptions} 
                            placeholder="Most Relevant" 
                            width="w-[140px]"
                            height="h-[26px]"
                            textStyles="text-xsm3"
                            top="top-10"
                            rounded="rounded-sm"
                            name="search-filter" 
                            kind="markdown"></CustomSelect>
                    </div>
                </div>

                {#each results as r}
                    <div class="border-b border-solid pb-3.5 mt-3.5 cursor-pointer" on:click={goTo(r)}>
                        <div class="text-search tracking-search mb-2.5">{@html getHtml(r, 'title')}</div>
                        <div class="text-xsm tracking-search">{@html getHtml(r, 'description')}</div>
                        <div class="text-[#ff8a00] text-xsm tracking-search mt-1.5">{r.matches.length} more in this page</div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>