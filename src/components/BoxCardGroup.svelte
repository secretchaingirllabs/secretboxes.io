<script lang="ts">
    import { BoxMetadata } from "src/lib/Boxes";
    import { toKebabCase } from "src/lib/utils";
    import Button from '@components/Button.svelte'
    import Tag from '@components/Tag.svelte';

    export let data: BoxMetadata[]
    export let posts;

    function getFirstBoxPost(box) {
        let filter = posts.filter(p => p.frontmatter.box.title === box.title && p.frontmatter.index === 1);

        if (filter[0]) {
            return toKebabCase(filter[0].frontmatter.title);
        } else {
            return '404';
        }
    }
</script>

{#if data.length === 0}
    <div class="text-center text-purple-100 mt-16">No boxes could be found!</div> 
{/if}

<div class="mx-4 mt-8 mb-16 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:w-fit lg:mx-auto space-y-4 lg:space-y-0 lg:gap-y-4 lg:mb-56">
    {#each data as d}
        <div class="inline-flex flex-col py-4 px-6 items-center w-[340px] h-[380px] border border-solid border-[#e3e3e3] dark:border-dark-bg-secondary box-border rounded-2xl">
            <div class="self-end">
                <Tag text={d.difficulty}></Tag>
            </div>

            <img src={d.image} alt="">
            <p class="mb-3.5 font-display tacking-1 text-[24px] leading-[27px] text-center dark:text-dark-primary">{d.title}</p>
            <p class="mb-4 text-sm text-[#6E7191] text-center dark:text-dark-secondary">{d.prelude}</p>

            <div class="flex space-x-4">
                <Button 
                    kind="primary" 
                    size="sm" 
                    styles=""
                    disabled={false}
                    handler={{ action: '/' }}>
					<img class="mr-2" src="/icons/gitpod_icon.svg" alt="">
                    Launch
                </Button>

                <Button 
                    kind="secondary" 
                    size="sm" 
                    styles=""
                    disabled={false}
                    handler={{ action: `/boxes/${toKebabCase(d.title)}/${getFirstBoxPost(d)}` }}>
                    Learn More
                </Button>
            </div>
        </div>
    {/each}
</div>