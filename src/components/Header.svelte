<script>
    import Input from '@components/Input.svelte';
    import ThemeToggle from '@components/ThemeToggle.svelte';
    import TopNav from '@components/TopNav.svelte';
    import SearchModal from '@components/SearchModal.svelte';

    export let posts = [];

    let isVisible = false;
</script>

{#if isVisible}
    <SearchModal posts={posts} on:click_outside={() => { isVisible = false }}></SearchModal>
{/if}

<header class="grid grid-cols-2 h-20 items-center">
    <a class="inline justify-self-center" href="/">
        <img class="inline" src="/logos/logo_48x48.svg" alt="Secret Boxes Logo">
    </a>

    <div class="inline-flex items-center space-x-4">
        <TopNav></TopNav>

        <div class="relative h-[38px] w-40" on:click={() => {isVisible = true}}>
            <Input 
                name="top-search"
                text=""
                styles="bg-search bg-no-repeat bg-left-center pl-8 pr-2"
                placeholder="Search">
            </Input>
        </div>

        <ThemeToggle></ThemeToggle>
    </div>
</header>
