<script>
    import { createEventDispatcher } from 'svelte';
    import { toKebabCase } from '../lib/utils';

    export let options;
    export let placeholder;
    export let name;

    let selected;

    const dispatch = createEventDispatcher();

    function emitSelection() {
        dispatch('select', {
            value: selected,
        });
    };
</script>

<div class="relative">
    <select name={name} bind:value={selected} on:change={emitSelection} class="select-native relative w-56 h-11 outline-none border border-solid border-purple-100 bg-[#eff0f6] selected mr-4 rounded-lg px-4 text-left">
        <option value="" disabled selected hidden>{placeholder}</option>
        {#each options as opt}
            <option value={toKebabCase(opt)}>{opt}</option> 
        {/each}
    </select>

    <!-- <div class="select-custom absolute top-0 left-0 w-56 h-11 outline-none border border-solid border-[#9EA3BD] selected mr-4 rounded-lg px-4 text-left" aria-hidden="true">
        <div>{placeholder}</div>
        <div class="bg-purple-100 rounded-lg">
            {#each options as opt}
                <div class="bg-purple-200" data-value={toKebabCase(opt)}>{opt}</div> 
            {/each}
        </div>
    </div> -->
</div>

<style>
    /* @media (hover: hover) {
        .select-custom {
            display: block;
        }
    }

    @media (hover: hover) {
        .select-native:focus + .select-custom {
            display: none;
        }
} */
</style>