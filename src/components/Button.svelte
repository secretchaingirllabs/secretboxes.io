<script>
// Button.svelte is a unique Button component
// Based on the type of handler.action provided
// Button will render as an a tag or a button tag.
// This allows us to handle click events in the parent component
// and also route to other pages depending on our needs.

const SHARED_STYLES = 'inline-flex items-center font-semibold tracking-1.25 rounded-lg w-fit px-6'
const PRIMARY_BUTTON_STYLES = 'text-white bg-purple-100 hover:bg-purple-200 focus:outline focus:outline-4 focus:outline-yellow disabled:bg-gray'
const SECONDARY_BUTTON_STYLES = 'text-purple-100 border border-solid border-purple-100 hover:bg-tan focus:outline focus:outline-4 focus:outline-[#D8D8D8] disabled:border-gray disabled:text-gray'
const TEXT_BUTTON_STYLES = 'text-blue-600 hover:underline'
const LANDING_BUTTON_STYLES = 'text-white bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-200 hover:to-blue-300'

// Used for deterministic styling of disabled a tag buttons
const DISABLED_PRIMARY_STYLES = 'bg-gray pointer-events-none';
const DISABLED_SECONDARY_STYLES = 'border-gray text-gray pointer-events-none';

export let kind;
export let size;
export let styles = ''; // Used for arbitrary styling
export let disabled = false;
export let handler = {
    action: ''
};

function style() {
    // Unique case: Button is a route that is disabled. We can't add a disabled mod to an a tag
    // Therefore the styling has to be written inline
    switch(kind.toLowerCase()) {
        case 'primary': 
            if (typeof handler.action === 'string' && disabled) {
                return `${getPrimaryStyles()} ${DISABLED_PRIMARY_STYLES} ${getHeight()} ${styles}`;
            } else {
                return `${getPrimaryStyles()} ${getHeight()} ${styles}`;
            }
        case 'secondary': 
            if (typeof handler.action === 'string' && disabled) {
                return `${getSecondaryStyles()} ${DISABLED_SECONDARY_STYLES} ${getHeight()} ${styles}`;
            }
            return `${getSecondaryStyles()} ${getHeight()} ${styles}`;
        case 'text': 
            return `${getTextStyles()} ${getHeight()} ${styles}`;
        case 'landing': 
            return `${getLandingStyles()} ${getHeight()} ${styles}`;
        default: 
            return `${getPrimaryStyles()} ${getHeight()} ${styles}`;
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

{#if typeof handler.action === 'string'}
    <a class={style()} href={handler.action}>
        <slot />
    </a>
{:else}
    <button class={style()} on:click|preventDefault={handler.action()} disabled={disabled}>
        <slot />
    </button>
{/if}
