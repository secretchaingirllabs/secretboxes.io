<script lang="ts">

export let text: string = '';

const BASE_STYLES = 'inline-flex items-center text-xsm2 font-semibold tracking-1.25 rounded-full px-3.5 h-[1.875rem]';
const BEGINNER_STYLES = 'text-blue-800 bg-blue-rgba';
const INTERMEDIATE_STYLES = 'text-orange-100 bg-orange-rgba';
const ADVANCED_STYLES = 'text-green bg-green-rgba';


// Note: Tag for some reason has a different font-size, line-height, and letter spacing
// depending on if it is on the home page or on the BoxesListView page. Why? 
function style() {
    switch(text.toLowerCase()) {
        case 'beginner': return `${BASE_STYLES} ${BEGINNER_STYLES}`
        case 'intermediate': return `${BASE_STYLES} ${INTERMEDIATE_STYLES}`
        case 'advanced': return `${BASE_STYLES} ${ADVANCED_STYLES}`
        default: return `${BASE_STYLES}` 
    }
}

</script>

<div class={style()}>
    {text.toUpperCase()}
</div>