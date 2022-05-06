<script>
    import Button from '@components/Button.svelte';
    import { onMount } from 'svelte';
    import { toKebabCase } from '../lib/utils';

    export let index;
    export let count;
    export let box; // Note this is the box title, not box metadata
    export let posts;

    let isFirst = index === 1;
    let isLast = index === count;
    let isOnlyOne = count === 1;

    function getNext() {
        let filterNext = posts.filter(p => p.frontmatter.box.title === box && p.frontmatter.index === index + 1);

        if (filterNext[0]) {
            return `/boxes/${toKebabCase(box)}/${toKebabCase(filterNext[0].frontmatter.title)}`;
        } else {
            return '';
        }
    }

    function getPrev() {
        let filterPrev = posts.filter(p => p.frontmatter.box.title === box && p.frontmatter.index === index - 1);

        if (filterPrev[0]) {
            return `/boxes/${toKebabCase(box)}/${toKebabCase(filterPrev[0].frontmatter.title)}`;
        } else {
            return '';
        }
    }
</script>

<div class="md-controls flex justify-center space-x-6">
    {#if isFirst && !isOnlyOne}
        <Button 
            kind="secondary" 
            handler={{ action: `${getNext()}` }}
            size="md">
            Next
            <img class="ml-2"src="/icons/right_arrow_icon.svg" alt="Right arrow icon">
        </Button>
    {:else if isLast && !isOnlyOne}
        <Button 
            kind="secondary" 
            handler={{ action: `${getPrev()}` }}
            size="md">
            <img class="mr-2" src="/icons/left_arrow_icon.svg" alt="Right arrow icon">
            Previous
        </Button>

    {:else if !isLast && !isFirst && !isOnlyOne}
        <Button 
            kind="secondary" 
            handler={{ action: `${getPrev()}` }}
            size="md">
            <img class="mr-2" src="/icons/left_arrow_icon.svg" alt="Right arrow icon">
            Previous
        </Button>

        <Button 
            kind="secondary" 
            handler={{ action: `${getNext()}` }}
            size="md">
            Next
            <img class="ml-2" src="/icons/right_arrow_icon.svg" alt="Right arrow icon">
        </Button>
    {/if}
</div>