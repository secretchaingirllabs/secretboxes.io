<script lang="ts">
// 
// RouteButton.svelte is a  button component for used for routing to
// internal and external pages. It contains our main button styles: 
// primary, secondary, text, and landing.
// 
const SHARED_STYLES = `
    inline-flex 
    items-center
    font-semibold
    tracking-1.25
    rounded-lg
    w-fit
    px-6
`

const PRIMARY_BUTTON_STYLES = `
    text-white 
    bg-purple-100 
    hover:bg-purple-200 
    focus:outline
    focus:outline-4
    focus:outline-yellow 
    disabled:bg-gray
`
const SECONDARY_BUTTON_STYLES = `
    text-purple-100
    border
    border-solid
    border-purple-100
    hover:bg-tan
    focus:outline
    focus:outline-4
    focus:outline-[#D8D8D8]
    disabled:border-gray
    disabled:text-gray
`
const TEXT_BUTTON_STYLES = `
    text-blue-600
    hover:underline
`
const LANDING_BUTTON_STYLES = `
    text-white
    bg-gradient-to-b 
    from-blue-400 
    to-blue-500
    hover:from-blue-200
    hover:to-blue-300
`
export let kind: string;
export let route: string;
export let size: string;
export let styles: string = ''; // Used for arbitrary styling

function style() {
    switch(kind.toLowerCase()) {
        case 'primary': return `${getPrimaryStyles()} ${getHeight()} ${styles}`;
        case 'secondary': return `${getSecondaryStyles()} ${getHeight()} ${styles}`;
        case 'text': return `${getTextStyles()} ${getHeight()} ${styles}`;
        case 'landing': return `${getLandingStyles()} ${getHeight()} ${styles}`;
        default: return `${getPrimaryStyles()} ${getHeight()} ${styles}`;
    }
}

function getPrimaryStyles() {
    return `${SHARED_STYLES} ${PRIMARY_BUTTON_STYLES}`;
}

function getSecondaryStyles() {
    return `${SHARED_STYLES} ${SECONDARY_BUTTON_STYLES}`;
}

function getTextStyles() {
    return `${SHARED_STYLES} ${TEXT_BUTTON_STYLES}`;
}

function getLandingStyles() {
    return `${SHARED_STYLES} ${LANDING_BUTTON_STYLES}`;
}

function getHeight() {
    switch(size) {
        case 'lg': return 'h-14' // 56px
        case 'md': return 'h-12' // 48px
        case 'sm': return 'h-10' // 40px
        default: return 'h-14'
    }
}
</script>

<a class={style()} href={route}>
    <slot />
</a>