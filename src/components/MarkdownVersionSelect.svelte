<script>
    import CustomSelect from "@components/CustomSelect.svelte";
    import { toKebabCase } from "src/lib/utils";

    export let versions = [];

    function handleSelect(e) {
        let formatted = versions.map(v => toKebabCase(v));

        for (let v of formatted) {
            if (v === e.detail.value) {
                show(v);
            } else {
                hide(v);
            }
        }
    }

    function hide(version) {
        const el = document.getElementById(version);
        el.classList.add(['hidden'])
    }

    function show(version) {
        const el = document.getElementById(version);
        el.classList.remove(['hidden'])
    }
</script>

<CustomSelect 
    on:select={handleSelect} 
    options={versions} 
    placeholder={versions[0]} 
    width="w-28"
    kind="markdown"
    name="md-version-select"></CustomSelect>