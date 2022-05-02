<script lang="ts">
    import { BoxMetadata } from "src/lib/Boxes";
    import { toKebabCase } from "src/lib/utils";
    import Button from '@components/RouteButton.svelte'
    import Tag from '@components/Tag.svelte';

    export let data: BoxMetadata[]
</script>

<div class="w-3/5 mx-auto space-y-4 mb-56">
    {#each data as d}
        <div class="inline-flex flex-col py-4 px-6 mr-4 items-center w-[340px] h-[380px] border border-solid border-[#e3e3e3] box-border rounded-2xl">
            <div class="self-end">
                <Tag text={d.difficulty}></Tag>
            </div>

            <img src={d.image} alt="">
            <p class="mb-3.5 font-display tacking-1 text-[24px] leading-[27px] text-center">{d.title}</p>
            <p class="mb-4 text-sm text-[#6E7191] text-center">{d.prelude}</p>

            <div class="flex space-x-4">
                <Button kind="primary" size="sm" route="/">
					<img class="mr-2" src="/icons/gitpod_icon.svg" alt="">
                    Launch
                </Button>

                <Button kind="secondary" size="sm" route={`/boxes/${toKebabCase(d.title)}/1`}>
                    Learn More
                </Button>
            </div>
        </div>
    {/each}
</div>