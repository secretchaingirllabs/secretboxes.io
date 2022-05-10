<script lang="ts">
    import Button from '@components/Button.svelte';
    import BoxCardGroup from '@components/BoxCardGroup.svelte'
    import CustomSelect from '@components/CustomSelect.svelte';
    import { BoxMetadata } from 'src/lib/Boxes';
    import { onMount } from 'svelte';

    export let posts;

    let boxes: BoxMetadata[] = posts.filter(p => p.frontmatter.box)
        .map(p => p.frontmatter.box)
        .filter((p, index, self) => {
           return index === self.findIndex((t) => {
               return t.title === p.title
           })
        })
    let cache: BoxMetadata[] = [];

    // Note: CustomSelect can take an empty option and insert a divider
    let fitlerOptions = ['All Boxes', 'Beginner', 'Intermediate', 'Advanced', '', 'Recently Added'];

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
            case 'recently-added': 
                let temp = boxes;

                temp.sort((a, b) => {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                })

                cache = temp;
            default: cache = boxes;
        }
    }

    function getDifficultyCompareScore(difficulty: string) {
        switch(difficulty.toLowerCase()) {
            case 'beginner': return 0;
            case 'intermediate': return 1;
            case 'advanced': return 2;
            default: return 3;
        }
    }

    // When this component is loaded into the page, theres a chance the user
    // passed a query string in the URL to prefilter the listed boxes by difficulty
    // If they didn't pass query string, we just return all boxes sorted by difficulty. 
    onMount(() => {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            // @ts-ignore: Unreachable code error
            get: (searchParams, prop) => searchParams.get(prop),
        });

        // @ts-ignore: Unreachable code error
        let difficulty = params.difficulty; 

        if (difficulty) {
            filter(difficulty);
        } else {
            cache = boxes.sort((a, b) => {
                let aRank = getDifficultyCompareScore(a.difficulty);
                let bRank = getDifficultyCompareScore(b.difficulty);

                if (aRank < bRank) {
                    return -1;
                }

                if (aRank > bRank) {
                    return 1;
                }

                return 0
            })
        }
    })
</script>

<div class="flex flex-col lg:flex-row space-y-3 justify-center items-center lg:justify-start lg:w-[54.8%] lg:mx-auto lg:space-x-3 lg:space-y-0 lg:mb-4">
    <Button 
        styles="" 
        disabled={true}
        handler={{ action: '/' }}
        size="sm" 
        kind="primary">
        Create Boxes
    </Button>

    <p class="text-xsm2 text-[#E3662f] tracking-[0.4px]">COMING SOON</p>
    <div class="lg:grow lg:text-right lg:justify-self-end dark:text-dark-primary">Filter & Sort</div>
    <CustomSelect
        on:select={filterEventHandler}
        width="lg:w-40"
        options={fitlerOptions}
        placeholder="All Boxes"
        name="box-filter"
        ></CustomSelect>
</div>

<BoxCardGroup data={cache} posts={posts}></BoxCardGroup> 
