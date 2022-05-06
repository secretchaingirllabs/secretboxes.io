<script>
    import GenericModal from '@components/GenericModal.svelte';
    import Button from '@components/Button.svelte'

    export let image;
    export let alt;

    let isVisible = false;

    function downloadImage() {
        console.log('Download image');
        let el = document.createElement("a");
        el.setAttribute("href", image);
        el.setAttribute("download", image);
        document.body.appendChild(el);
        el.click();
        el.remove();
    }
</script>

{#if isVisible}
    <GenericModal>
        <div class="flex flex-col">
            <svg on:click={() => isVisible = false} class="self-end mr-4 mb-2 cursor-pointer" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 4.75L14.8629 14.8629" stroke="#14142B" stroke-width="3.93281" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.75 14.8633L14.8629 4.7504" stroke="#14142B" stroke-width="3.93281" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <img class="px-11" src={image} alt={alt}>
            <div class="self-end mr-11 mt-4">
                <Button kind="secondary" size="sm" handler={{ action: downloadImage }}>
                    Download
                    <img class="ml-2" src="/icons/download_file.svg" alt="Download file icon">
                </Button>
            </div>
        </div>
    </GenericModal>
{/if}
<div class="relative">
    <div class="flex absolute w-full h-full justify-center items-center">
        <svg on:click={() => isVisible = true} class="cursor-pointer" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m14.554 16.482-5.19 5.19V18.82H8V24h5.18v-1.363h-2.852l5.19-5.19-.964-.965ZM18.82 8v1.363h2.852l-5.19 5.19.964.965 5.19-5.19v2.853H24V8h-5.18Z" fill="#FCFCFC"/><rect x=".5" y=".5" width="31" height="31" rx="7.5" stroke="#FCFCFC"/></svg>
    </div>

    <img src={image} alt={alt}>
</div>