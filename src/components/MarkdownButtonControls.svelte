<script>
    import Button from '@components/Button.svelte';
    export let index;
    export let count;
    export let box;

    let isFirst = index === 1;
    let isLast = index === count;
    let isOnlyOne = count === 1;

    let next = `/boxes/${box}/${index + 1}`;
    let prev = `/boxes/${box}/${index - 1}`;
</script>

<div class="md-controls flex justify-center space-x-6">
    {#if isFirst && !isOnlyOne}
        <Button 
            kind="secondary" 
            handler={{ action: next }}
            size="md">
            Next
            <img class="ml-2"src="/icons/right_arrow_icon.svg" alt="Right arrow icon">
        </Button>
    {:else if isLast && !isOnlyOne}
        <Button 
            kind="secondary" 
            handler={{ action: prev }}
            size="md">
            <img class="mr-2" src="/icons/left_arrow_icon.svg" alt="Right arrow icon">
            Previous
        </Button>

    {:else if !isLast && !isFirst && !isOnlyOne}
        <Button 
            kind="secondary" 
            handler={{ action: prev }}
            size="md">
            <img class="mr-2" src="/icons/left_arrow_icon.svg" alt="Right arrow icon">
            Previous
        </Button>

        <Button 
            kind="secondary" 
            handler={{ action: next }}
            size="md">
            Next
            <img class="ml-2" src="/icons/right_arrow_icon.svg" alt="Right arrow icon">
        </Button>
    {/if}
</div>