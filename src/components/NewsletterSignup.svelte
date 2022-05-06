<script>
    import Input from '@components/Input.svelte';
    import Button from '@components/Button.svelte';
    import GenericModal from '@components/GenericModal.svelte';
    import Animation from '@components/Animation.svelte';

    let email;
    let hasEmailError = false;
    let modalIsActive = false;

    function handleSignup() {
        if (validateEmail()) {
            const formData = new FormData();

            hasEmailError = false;

            formData.append('form-name', 'newsletter');
            formData.append('email', email);

            fetch('/', {
                method: 'POST',
                body: formData,
            })
            .then(() => modalIsActive = true)
            .catch((err) => alert(err));
        } else {
            hasEmailError = true;
        }
    }

    function validateEmail() {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    function updateEmail(e) {
        email = e.detail.value;
    };
</script>

{#if modalIsActive}
<GenericModal>
    <Animation loop={false} styles="flex justify-center w-10 h-10" id="newsletter-checkmark" path="https://assets4.lottiefiles.com/packages/lf20_pljonmfg.json"></Animation>
    <div class="font-display text-center text-h4 tracking-1.25 font-bold">Request Submitted</div>
    <div class="text-sm text-center mb-4">Thanks for joining our newsletter! We promise to send you only high quality alpha 😎</div>
    <div class="flex justify-center">
        <Button
            kind="primary"
            size="sm"
            styles=""
            disabled={false}
            handler={{ action: '/' }}>Ok
        </Button>
    </div>
</GenericModal>
{/if}
<form name="newsletter" netlify class="relative w-96 h-[52px]">
    <label for="email" class="hidden">Email</label>
    <Input 
        on:update={updateEmail}
        name="email" 
        text=""
        styles="pr-36 pl-4" 
        placeholder="paul@altermail.com">
            <Button 
                styles="absolute top-1.5 right-3.5 cursor-pointer leading-none translate-x-2 tracking-0.5"
                kind="primary" 
                disabled={false}
                handler={{ action: handleSignup }}
                size="sm">
                Subscribe
            </Button>
    </Input>
</form>
{#if hasEmailError}
    <div class="text-[#e8101f]">Please enter a valid email address.</div>
{/if}
<slot></slot>


