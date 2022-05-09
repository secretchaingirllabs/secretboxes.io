<script>
    function copy(e) {
        let copyBtnElement = e.currentTarget;
        let text = copyBtnElement.nextElementSibling.textContent;
        navigator.clipboard.writeText(text);
    }
</script>

<div class="relative">
    <div on:click={copy} class="absolute top-3 right-4 p-2 border border-solid border-[#ded8d5] rounded-lg cursor-pointer hover:bg-gray">
        <img src="/icons/copy_icon.svg" alt="Copy Icon">
    </div>
    <div class="snippet">
        <slot></slot>
    </div>
</div>

