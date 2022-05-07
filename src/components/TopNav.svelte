<script>
    import NavDropdown from "@components/NavDropdown.svelte";
</script>

<nav class="text-sm font-medium tracking-0.5 text-purple-100 dark:text-dark-primary">
    <span class="mx-2">
        <a href="/boxes">Boxes</a>
        <NavDropdown></NavDropdown>
    </span>
    <a class="mx-2" href="/guides">Guides</a>
    <a class="mx-2" href="/about">About</a>
    <a class="mx-2" href="/support">Support</a>
</nav>
<slot></slot>