<script>
    import Animation from '@components/Animation.svelte';
    import Button from '@components/Button.svelte';
    import GenericModal from "@components/GenericModal.svelte";
    import { onMount } from "svelte";

    let isVisible = false

    onMount(() => {
        let ignoreFirstVisitModal = localStorage.getItem('ignoreFirstVisitModal');

        if (ignoreFirstVisitModal === null || !ignoreFirstVisitModal) {
            isVisible = true;
        }
    })

    function setIgnore() {
        isVisible = false;
        localStorage.ignoreFirstVisitModal = true;
    }
</script>

{#if isVisible}
    <GenericModal style="w-1/2">
        <div class="px-8">
            <Animation 
                id="welcome-modal-animation" 
                path="https://assets5.lottiefiles.com/private_files/lf30_0vbtxqrd.json" 
                loop={true}
                styles="w-[250px] h-[170.63px] mx-auto"></Animation>
            <h2 class="text-center font-display text-h2 mb-4">Welcome to Secret Boxes!</h2>
            <p class="text-center text-purple-100 mb-4">Secret Boxes is in active development, so you'll find that some of the features of this site are not yet ready. You can learn more about the project by subscribing to our newsletter or reaching out in the network <a class="text-blue-600" href="https://discord.gg/y8dFaXPkUz">Discord</a></p>
            <div class="flex justify-center">
                <Button kind="primary" size="md" styles="" handler={{ action: setIgnore }}>
                    Ok, don't show me this again.
                </Button>
            </div>
        </div>
    </GenericModal>
{/if}