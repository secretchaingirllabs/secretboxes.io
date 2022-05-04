<script>
    import Input from '@components/Input.svelte'
    import CustomSelect from '@components/CustomSelect.svelte';

    export let boxOptions;
    let osOptions = ['Mac OS', 'Windows', 'Linux', 'Ubunutu'];

    let email;
    let subject;
    let box;
    let os;
    let files;
    let message;

    function handleSubmit(e) {
        const formData = new FormData();

        formData.append('form-name', 'support')
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('box', box);
        formData.append('os', os);
        formData.append('message', message);
        formData.append('file', files[0]);

        fetch('/', {
            method: 'POST',
            body: formData,
        })
        .then(() => console.log('Form successfully submitted'))
        .catch((err) => alert(err));
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
<form name="support" netlify enctype="multipart/form-data" on:submit|preventDefault={handleSubmit} class="flex flex-col space-y-5">
    <label for="email">Email Address</label>
    <div class="relative w-96 h-[45px]">
        <Input 
            on:update={updateEmail}
            name="email" 
            styles="pl-4"
            placeholder="wumpus@foo.com">
        </Input>
    </div>
    
    <label for="subject">Subject</label>
    <div class="relative w-96 h-[45px]">
        <Input 
            on:update={updateSubject}
            name="subject" 
            styles="pl-4"
            placeholder="setting up validator nodes">
        </Input>
    </div>
    
    <!-- HTML select & option tag do not enable enough styling options -->
    <!-- in order to reproduce the designs in Figma. A custom select -->
    <!-- component would be required. -->
    <div class="flex h-[45px]">
        <CustomSelect 
            on:select={updateBox}
            name="box"
            options={boxOptions} 
            placeholder="Select Boxes"></CustomSelect>

        <CustomSelect 
            on:select={updateOS}
            name="os"
            options={osOptions} 
            placeholder="Operating System"></CustomSelect>
    </div>

    <textarea bind:value={message} class="p-2 w-3/5 h-40 outline-none rounded-lg border border-solid border-purple-100" placeholder="I need help with getting my environment setup." name="message" id="message"></textarea>

    <label for="attachments">Attachments (optional)</label>
    <label class="flex items-center justify-center space-x-3 cursor-pointer w-52 h-11 bg-[#f7f7fc] border border-solid border-purple-100 rounded-lg" id="support-form-attachments" for="file">
        <img class="inline-block" src="/icons/file_upload.svg" alt="Icon for file uploads">
        <span>Add or Drop Files</span>
    </label>
    <input bind:files={files} class="hidden" id="file" name="file" type="file">

    <input class="font-semibold tracking-1.25 w-52 px-6 text-center h-11 rounded-lg text-white bg-purple-100 hover:bg-purple-200 focus:outline focus:outline-4 focus:outline-yellow disabled:bg-gray" type="submit" value="Submit a request">
</form>