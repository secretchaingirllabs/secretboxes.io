<script lang="ts">
    import Button from '@components/Button.svelte';
    import BoxCardGroup from '@components/BoxCardGroup.svelte'
    import CustomSelect from '@components/CustomSelect.svelte';
    import { BoxMetadata } from 'src/lib/Boxes';
    import { onMount } from 'svelte';

    export let boxes: BoxMetadata[];
    let cache: BoxMetadata[] = [];

    let fitlerOptions = ['All Boxes', 'Beginner', 'Intermediate', 'Advanced', 'Recently Added'];

    function filterEventHandler(e) {
        filter(e.detail.value);
    }

    function filter(difficulty: string) {
        switch (difficulty.toLowerCase()) {
            case 'beginner': 
                let beginner = boxes.filter(box => box.difficulty.toLowerCase() === 'beginner');
                cache = beginner;
                break;
            case 'intermediate': 
                let intermediate = boxes.filter(box => box.difficulty.toLowerCase() === 'intermediate');
                cache = intermediate;
                break;
            case 'advanced': 
                let advanced = boxes.filter(box => box.difficulty.toLowerCase() === 'advanced');
                cache = advanced;
                break;
            case 'added-recently': 
                return
            default: cache = boxes;
        }
    }

    onMount(() => {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            // @ts-ignore: Unreachable code error
            get: (searchParams, prop) => searchParams.get(prop),
        });

        // @ts-ignore: Unreachable code error
        let difficulty = params.difficulty; 

        if (difficulty) {
            console.log(`Difficulty ${difficulty} detected`)
            filter(difficulty);
        } else {
            console.log(`No difficulty detected`)
            cache = boxes
        }
    })
</script>

<div class="flex items-center justify-start w-3/5 mx-auto space-x-3 mb-4">
    <Button 
        styles="" 
        disabled={true}
        handler={{ action: '/' }}
        size="sm" 
        kind="primary">
        Create Boxes
    </Button>

    <p class="text-xsm2 text-[#E3662f] tracking-[0.4px]">COMING SOON</p>
    <div class="grow text-right justify-self-end">Filter & Sort</div>
    <CustomSelect
        on:select={filterEventHandler}
        options={fitlerOptions}
        placeholder="All Boxes"
        name="box-filter"
        ></CustomSelect>
</div>

<BoxCardGroup data={cache}></BoxCardGroup> 
