<script>
    import { createEventDispatcher } from 'svelte';

    // May need to make Input.astro account for variable widths in some situations.
    export let placeholder = '';
    export let width = 'w-96';
    export let padding = 'pl-4';
    export let height = 'h-[52px]';
    export let styles = '';
    export let name = '';

    const BASE_WRAPPER_STYLES = `relative ${height} ${width}`
    const BASE_INPUT_STYLES = `
        h-full
        w-full 
        ${padding} 
        outline-none 
        border 
        border-solid 
        border-purple-100 
        box-border 
        rounded-lg
        ${styles}
        hover:border-none
        hover:shadow-input
        focus:border-none
        focus:shadow-input-double
        disabled:bg-gray
        disabled:text-[#83d7d8]
        disabled:border-none
    `

    const dispatch = createEventDispatcher();

    let text;

    function emitInput() {
        dispatch('update', {
            value: text,
        });
    };
</script>

<div class={BASE_WRAPPER_STYLES}>
    <input on:change={emitInput} bind:value={text} name={name} class={BASE_INPUT_STYLES} type="text" placeholder={placeholder}>
    <slot></slot>
</div>
