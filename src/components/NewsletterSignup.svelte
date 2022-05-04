<script>
    import Input from '@components/Input.svelte';
    import Button from '@components/Button.svelte';

    let email;

    function handleSignup() {
        const formData = new FormData();

        formData.append('form-name', 'newsletter');
        formData.append('email', email);

        fetch('/', {
            method: 'POST',
            body: formData,
        })
        .then(() => console.log('Newsletter form submitted'))
        .catch((err) => alert(err));
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
<slot></slot>


