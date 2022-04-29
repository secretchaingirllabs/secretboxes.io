<script lang="ts">
    import { BoxMetadata } from "src/lib/Boxes";
    import { toKebabCase } from "src/lib/utils";

    export let data: BoxMetadata[]
</script>

<div class="w-3/5 mx-auto space-x-4 space-y-4 mb-56">
    {#each data as d}
        <div class="inline-flex flex-col py-4 px-6 items-center w-[340px] h-[380px] border border-solid border-[#e3e3e3] box-border rounded-2xl">
            <div class="self-end">Beginner</div>
            <img src={d.image} alt="">
            <p class="mb-3.5 font-display tacking-1 text-[24px] leading-[27px] text-center">{d.title}</p>
            <p class="mb-4 text-sm text-[#6E7191] text-center">{d.prelude}</p>

            <div class="space-x-4">
                <button>Launch</button>
                <a href={`boxes/${toKebabCase(d.title)}/1`}>Learn More</a>
            </div>
        </div>
    {/each}
</div>