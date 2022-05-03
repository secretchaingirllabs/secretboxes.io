<script>
    import { clickOutside } from '../lib/clickOutside';
    let dropDownIsVisible = false;

    function showDropdown() {
        dropDownIsVisible = true
    }

    function hideDropdown() {
        dropDownIsVisible = false
    }
</script>

<span on:click={showDropdown} class="cursor-pointer">
    <img class="inline" src="/icons/down_arrow_icon.svg" alt="Top navigation drop down icon">
</span>
{#if dropDownIsVisible}
    <div use:clickOutside on:click_outside={hideDropdown} class="absolute z-10 mt-2.5 border border-solid border-[#dbdce3] rounded-lg bg-white">

        <a href="/boxes/?difficulty=beginner">
            <div class="flex items-center hover:bg-[#f7f7f7] px-8 pt-4 pb-2">
                <div class="flex w-[31px] h-[31px] items-center justify-center bg-[#f4f4f4] rounded mr-4">
                    <img width="19" height="19" src="/icons/blue_square_icon.svg" alt="Blue square icon for beginner boxes">
                </div>
                <div>
                    <p class="leading-[19.2px] tracking-1 text-[#282828]">Beginner</p>
                    <p class="text-xsm4 text-[#525870] tracking-[0.4px]">Just the stuff you need to get started!</p>
                </div>
            </div>
        </a>


        <a href="/boxes/?difficulty=intermediate">
            <div class="flex items-center hover:bg-[#f7f7f7] px-8 py-2">
                <div class="flex w-[31px] h-[31px] items-center justify-center bg-[#f4f4f4] rounded mr-4">
                    <img width="19" height="19" src="/icons/orange_triangle_icon.svg" alt="Orange triangle icon for intermediate boxes">
                </div>
                <div>
                    <p class="leading-[19.2px] tracking-1 text-[#282828]">Intermediate</p>
                    <p class="text-xsm4 text-[#525870] tracking-[0.4px]">Go beyond the basics</p>
                </div>
            </div>
        </a>
        
        <a href="/boxes/?difficulty=advanced">
            <div class="flex items-center hover:bg-[#f7f7f7] px-8 py-2">
                <div class="flex w-[31px] h-[31px] items-center justify-center bg-[#f4f4f4] rounded mr-4">
                    <img width="19" height="19" src="/icons/green_polygon_icon.svg" alt="Green polygon icon for advanced boxes">
                </div>
                <div>
                    <p class="leading-[19.2px] tracking-1 text-[#282828]">Advanced</p>
                    <p class="text-xsm4 text-[#525870] tracking-[0.4px]">The world's best kept secret</p>
                </div>
            </div>
        </a>

        <a class="block py-4 mx-8 pointer-events-auto cursor-pointer text-xsm3 text-blue-600 border-t border-solid border-gray pt-[0.563rem]" href="/boxes">Unbox All Secrets</a>
    </div>
{/if}