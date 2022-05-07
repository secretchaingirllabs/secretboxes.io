<script>
    // PostCountIndicator.svelte is used as a way to preview
    // multiple posts which belong to a single Secret Box

    // Note: I understand this may not be the behavior the team is looking for,
    // but this is component is a bit of a pain to style. With some clarity, I
    // can improve this later.
    export let posts = [];
    export let index;

    const SELECTED_NUM_STYLES = 'selected-num bg-[#3fa991] text-white';
    const FINISHED_NUM_STYLES = 'bg-[#3fa991] text-white';
    const NOT_SELECTED_NUM_STYLES = 'bg-[#DCE3E9] text-[#252A31]';

    const SELECTED = 'selected';
    const FINISHED = 'finished';
    const NOT_SELECTED = 'not-selected';

    // Reduce the width of the lines up to a certain number of posts
    const MAX_LINE_WIDTH = 1000;
    const LINE_WIDTH = `${posts.length >= 1 ? Math.floor(MAX_LINE_WIDTH / posts.length) : MAX_LINE_WIDTH}px`

    function styleNumber(i) {
        if (index < i) {
            return NOT_SELECTED_NUM_STYLES;
        } else if (index > i) {
            return FINISHED_NUM_STYLES;
        } else {
            return SELECTED_NUM_STYLES
        }
    }

    function styleLine(i) {

        if (index < i) {
            return NOT_SELECTED;
        } else if (index > i) {
            return FINISHED;
        } else {
            return SELECTED;
        }
    }
</script>

<div class="hidden lg:flex justify-evenly w-full mb-20 relative" style="--line-width: {LINE_WIDTH}">
    {#each posts as post, i}
        <div class="relative flex flex-col items-center w-36 {styleLine(i+1)}">
            <div class="flex items-center justify-center w-5 h-5 text-xsm rounded-full {styleNumber(i + 1)}">{i + 1}</div>
            <div class="text-[#4f5e71] text-center mt-4 dark:text-dark-tertiary">{post.frontmatter.title}</div>
        </div>
    {/each}
</div>

<style>
    .selected::after {
        content: '';
        position: absolute;
        z-index: -10;
        height: 3px;
        top: 10%;
        width: var(--line-width);
        background: linear-gradient(
            to right,
            #3fa991 0%, 
            #3fa991 50%, 
            #dce3e9 50%, 
            #dce3e9 100%
        );
        border-radius: 9999px;
    }

    .not-selected::after {
        content: '';
        position: absolute;
        z-index: -10;
        height: 3px;
        top: 10%;
        width: var(--line-width);
        background-color: #dce3e9;
        border-radius: 9999px;
    }

    .finished::after {
        content: '';
        position: absolute;
        z-index: -10;
        height: 3px;
        top: 10%;
        width: var(--line-width);
        background-color: #3fa991 ;
        border-radius: 9999px;
    }

    .selected-num::before {
        content: " ";
        position: absolute;
        z-index: -1;
        top: -2;
        right: 10;
        width: 25px;
        height: 25px;
        border: 10px solid #c1e1dc;
        border-radius: 9999px;

    }
</style>


