<!--
    FormSupport.svelte refers to the ticketing support system
    found on the Support page. I'm predicting I'll want to use
    Svelte components for input validation.

    Note: Likely need to refactor other inputs with input validation in mind.
-->
<script>

</script>

<!--Note: Basic Form action would be a mailto:address@email-->
<!--But we may want a better integration-->
<form>
    <label for="support-form-email">Email Address</label>
    <input id="support-form-email" type="text" placeholder="youremail@gmail.com">

    <label for="support-form-subject">Subject</label>
    <input id="support-form-subject" type="text" placeholder="How do I...">

    <select name="support-form-topic" id="support-form-topic">
        <option value="secret-boxes">Secret Boxes</option>
    </select>

    <select name="support-form-os" id="support-form-os">
        <option value="mac-os">Mac OS</option>
        <option value="Windows">Windows</option>
        <option value="Linux">Linux</option>
        <option value="Ubuntu">Ubuntu</option>
    </select>

    <textarea name="support-form-message" id="support-form-message" cols="30" rows="10"></textarea>

    <label for="support-form-node-version">node version</label>
    <input id="support-form-node-version" type="text">
    <label for="support-form-node-version">Run the `node --version` command</label>

    <label for="support-form-node-version">npm version</label>
    <input id="support-form-node-version" type="text"> 
    <label for="support-form-node-version">Run the `npm --version` command</label>

    <label for="support-form-attachments">Attachments (optional)</label>
    <input type="file">

    <input type="submit">
</form>