<script>
    import { createEventDispatcher } from 'svelte';

    // May need to make Input.astro account for variable widths in some situations.
    export let placeholder = '';
    export let styles = '';
    export let name = '';
    export let text;

    const BASE_INPUT_STYLES = `h-full w-full outline-none border border-solid border-purple-100 box-border rounded-lg ${styles} hover:border-none hover:shadow-input focus:border-none focus:shadow-input-double disabled:bg-gray disabled:text-[#83d7d8] disabled:border-none`
    const dispatch = createEventDispatcher();

    function emitInput() {
        dispatch('update', {
            value: text,
        });
    };

    function emitClick() {
        dispatch('clicked', {
            value: '',
        });
    };

</script>

<input on:click={emitClick} on:change={emitInput} bind:value={text} name={name} class={BASE_INPUT_STYLES} type="text" placeholder={placeholder}>
<slot></slot>