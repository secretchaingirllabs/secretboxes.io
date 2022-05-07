<script>
  import { onMount } from "svelte";

  export let theme = 'light';

  let isChecked = theme === 'dark';

  onMount(() => {
    // We only to worry about the dark case onMount
    // Light theme does not add a class and so onMount no class
    // needs tp be removed.
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  })

  function toggleTheme() {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      theme = 'dark';
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      theme = 'light';
      localStorage.theme = 'light';
    }
  }
</script>
<label for="theme-toggle" class="inline-block w-12 h-6 rounded-full cursor-pointer">
  <input on:click={toggleTheme} bind:checked={isChecked} id="theme-toggle" class="hidden" type="checkbox" />
  <div class="main relative w-full h-full rounded-full bg-[#FFD951]"></div>
</label>

<style>
  .main {
    transition: background 0.2s;
  }

  input:checked ~ .main {
    background-color: gray;
  }

  .main::after {
    content: '';
    @apply absolute top-0 left-0 h-6 w-6 bg-white rounded-full border-2 border-solid border-[#E59700];
    transition: transform 0.2s;
  }

  input:checked ~ .main::after {
    transform: translateX(1.5rem);
    @apply border-secondary;
  }
</style>