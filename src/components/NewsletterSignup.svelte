<script>
    import Input from '@components/Input.svelte';
    import Button from '@components/Button.svelte';

    let email;
    let hasEmailError = false;

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
            .then(() => console.log('Newsletter form submitted'))
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

<form name="newsletter" netlify class="relative w-96 h-[52px]">
    <Input 
        on:update={updateEmail}
        name="email" 
        text=""
        styles="pr-36 pl-4" 
        placeholder="paul@altermail.com">
            <Button 
                styles="absolute top-1.5 right-3.5 cursor-pointer leading-none z-10 translate-x-2 tracking-0.5"
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


