<script>
    export let style = 'w-1/3';
</script>
<div class="fixed w-full h-full top-0 left-0 bg-modal overflow-auto z-10">
    <div class="{style} mx-auto mt-72 bg-white pb-11 pt-9 rounded-lg">
        <slot></slot>
    </div>
</div>