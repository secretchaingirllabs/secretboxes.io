<script>
    import Input from '@components/Input.svelte'
    import CustomSelect from '@components/CustomSelect.svelte';

    export let boxOptions;
    let osOptions = ['Mac OS', 'Windows', 'Linux', 'Ubunutu'];

    let email = '';
    let subject = '';
    let box = '';
    let os = '';
    let files;
    let message = '';

    let hasEmailError = false;
    let hasSubjectError = false;
    let hasBoxError = false;
    let hasOsError = false;
    let hasFilesError = false;
    let hasMessageError = false;

    function handleSubmit(e) {
        if (validateForm()) {
            console.log('Form is valid')
            const formData = new FormData();

            formData.append('form-name', 'support')
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('box', box);
            formData.append('os', os);
            formData.append('message', message);

            if (files) {
                formData.append('file', files[0]);
            }

            fetch('/', {
                method: 'POST',
                body: formData,
            })
            .then(() => { 
                clearForm();
                // Show success modal
            })
            .catch((err) => alert(err));
        }
    }

    function clearForm() {
        email = '';
        subject = '';
        box = '';
        os = '';
        files = null;
        message = '';
    }

    function validateForm() {
        hasEmailError = !validateEmail();
        hasSubjectError = !validateGeneric(subject);
        hasBoxError = !validateGeneric(box);
        hasOsError = !validateGeneric(os);
        hasFilesError = !validateFiles()
        hasMessageError = !validateGeneric(message);

        return !hasEmailError && !hasSubjectError && !hasBoxError && !hasOsError && !hasFilesError && !hasMessageError;
    }

    function validateEmail() {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    function validateGeneric(str) {
        return str !== '' && str !== null;
    }

    function validateFiles() {
        return !files || files.length <= 1;
    }

    function updateBox(e) {
        box = e.detail.value 
    }

    function updateOS(e) {
        os = e.detail.value
    }

    function updateEmail(e) {
        email = e.detail.value
    }

    function updateSubject(e) {
        subject = e.detail.value
    }
</script>

<!--Note: Basic Form action would be a mailto:address@email-->
<!--But we may want a better integration-->
<form name="support" netlify enctype="multipart/form-data" on:submit|preventDefault={handleSubmit} class="flex flex-col mt-11">
    <label for="email">Email Address</label>
    <div class="relative w-96 h-[45px] mb-5 {hasEmailError ? 'border-b-2 border-solid rounded-lg border-[#e8101f]' : ''}">
        <Input 
            on:clicked={() => { hasEmailError = false }}
            on:update={updateEmail}
            text={email}
            name="email" 
            styles="pl-4"
            placeholder="wumpus@foo.com">
        </Input>
    </div>
    
    <label for="subject">Subject</label>
    <div class="relative w-96 h-[45px] mb-5 {hasSubjectError ? 'border-b-2 border-solid rounded-lg border-[#e8101f]' : ''}">
        <Input 
            on:clicked={() => {hasSubjectError = false}}
            on:update={updateSubject}
            text={subject}
            name="subject" 
            styles="pl-4"
            placeholder="setting up validator nodes">
        </Input>
    </div>
    <!-- HTML select & option tag do not enable enough styling options -->
    <!-- in order to reproduce the designs in Figma. A custom select -->
    <!-- component would be required. -->
    <div class="flex h-[45px] mb-5">
        <div on:click={() => {hasBoxError = false}} class="w-fit h-fit {hasBoxError ? 'text-[#e8101f]' : ''}">
            <CustomSelect 
                on:select={updateBox}
                name="box"
                options={boxOptions} 
                placeholder="Select Boxes"></CustomSelect>

        </div>
        
        <div on:click={() => {hasOsError = false}} class="w-fit h-fit {hasOsError ? 'text-[#e8101f]' : ''}">
            <CustomSelect 
                on:select={updateOS}
                name="os"
                options={osOptions} 
                placeholder="Operating System"></CustomSelect>

        </div>
    </div>

    <textarea on:click={() => {hasMessageError = false}} bind:value={message} class="mb-5 p-2 w-3/5 h-40 outline-none rounded-lg border border-solid border-purple-100 {hasMessageError ? 'border-[#e8101f]' : ''}" placeholder="I need help with getting my environment setup." name="message" id="message"></textarea>

    <label for="attachments">Attachments (optional)</label>
    <label class="flex items-center justify-center space-x-3 cursor-pointer w-52 mb-5 h-11 bg-[#f7f7fc] border border-solid border-purple-100 rounded-lg {hasFilesError ? 'border-b-2 border-solid rounded-lg border-[#e8101f]' : ''}" id="support-form-attachments" for="file">
        <img class="inline-block" src="/icons/file_upload.svg" alt="Icon for file uploads">
        <span>Add or Drop Files</span>
    </label>
    <input bind:files={files} class="hidden" id="file" name="file" type="file">

    {#if hasEmailError || hasSubjectError || hasBoxError || hasOsError || hasFilesError || hasMessageError}
        <div class="text-[#e8101f] mb-5">Form is invalid. Please check your submission.</div>
    {/if}
    <input class="font-semibold tracking-1.25 w-52 px-6 text-center h-11 rounded-lg text-white bg-purple-100 hover:bg-purple-200 focus:outline focus:outline-4 focus:outline-yellow disabled:bg-gray" type="submit" value="Submit a request">
</form>

<!-- Slot to simply get rid of weird dev compiler warning -->
<slot></slot>