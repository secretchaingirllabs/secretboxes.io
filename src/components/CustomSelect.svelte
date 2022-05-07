<script>
    // CustomSelect.svelte is responsible for creating a custom selection
    // component. On desktop, where mouse clicks can be expected, custom
    // form components work fine. On other, smaller devices a normal
    // select is preferred for accessibility
    import { createEventDispatcher } from 'svelte';
    import { toKebabCase } from '../lib/utils';
    import { clickOutside } from 'src/lib/clickOutside';

    export let options;
    export let placeholder;
    export let name;
    export let width = 'w-56';
    
    let selected;
    let screenWidth;
    let isVisible = false;

    const dispatch = createEventDispatcher();

    function emitSelection() {
        dispatch('select', {
            value: selected,
        });
    };

    function handleCustomSelectClick(e, option) {
        isVisible = false;
        selected = e.target.dataset.value;
        placeholder = option;

        console.table({
            isVisible,
            selected,
            placeholder,
        })
        emitSelection();
    }
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<div class="relative {width} lg:{width} mr-2 lg:mr-0" use:clickOutside on:click_outside={() => {isVisible = false}}>
    {#if screenWidth > 1280}
        <div on:click={() => {isVisible = !isVisible}} class="grid grid-flow-col cursor-pointer content-center relative h-11 outline-none border border-solid border-[#9EA3BD] bg-[#f7f7fc] rounded-lg px-4 {isVisible ? 'border-0 bg-[#eff0f6]' : ''}" aria-hidden="true">
            <div class="text-purple-100">{placeholder}</div>
            {#if isVisible}
                <img class="justify-self-end self-center" src="/icons/dropdown_up_arrow.svg" alt="Custom dropdown down arrow">
            {:else}
                <img class="justify-self-end self-center" src="/icons/dropdown_down_arrow.svg" alt="Custom dropdown down arrow">
            {/if}
        </div>

        {#if isVisible}
            <div class="absolute border border-solid border-[#9ea3bd] text-purple-100 top-14 left-0 {width} rounded-lg z-10 bg-white overflow-hidden">
                {#each options as opt}
                    {#if opt === ''}
                        <!-- If we pass the custom select an empty option we want to render a divider-->
                        <div class="w-[90%] mx-auto h-[0.5px] bg-[#e3e3e3]"></div>
                    {:else}
                        <div on:click={(e) => handleCustomSelectClick(e, opt)} class="cursor-pointer hover:bg-[#fced98] pl-4 py-1 m-0 first:rounded-t-lg last:rounded-b-lg" on:click={handleCustomSelectClick} data-value={toKebabCase(opt)}>{opt}</div> 
                    {/if}
                {/each}
            </div>
        {/if}

    {:else}
        <select name={name} bind:value={selected} on:change={emitSelection} class="relative h-11 outline-none border border-solid border-purple-100 bg-[#eff0f6] lg:mr-4 rounded-lg px-4 text-left">
            <option value="" disabled selected hidden>{placeholder}</option>
            {#each options as opt}
                {#if opt !== ''}
                    <option value={toKebabCase(opt)}>{opt}</option> 
                {/if}
            {/each}
        </select>
    {/if}
</div>