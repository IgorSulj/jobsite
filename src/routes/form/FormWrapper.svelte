<script lang="ts">
    import { personalFormData, contactsFormData } from "./forms";
    import Personal from "./Personal.svelte";
    import Contacts from "./Contacts.svelte";
    import Education from "./Education.svelte";

    const personal = personalFormData.valid
    const contacts = contactsFormData.valid

    const data = {
        personal: $personal,
        contacts: $contacts
    }
</script>

<div class="wrapper">
    <Personal />
    <Contacts />
    <Education />
</div>

<style>
    div > :global(*) {
        margin: 0 auto 2rem;
    }

    div > :global(*):last-child {
        margin: 0 auto;
    }

    div {
        padding-bottom: 2rem;
    }
</style>
