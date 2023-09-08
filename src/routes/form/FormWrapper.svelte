<script lang="ts">
    import { getLocalStorageStore, validatedStore, validatePersonalForm } from "./forms";
    import Personal from "$lib/forms/Personal.svelte";
    import Contacts from "$lib/forms/Contacts.svelte";

    const personalStore = getLocalStorageStore("form:personal", {})
    const contactsStore = getLocalStorageStore('form:contacts', {})

    const personalData = validatedStore(personalStore, validatePersonalForm)
    const contactsData = validatedStore(personalStore, () => true)

    export const data = {
        personal: $personalData,
        contacts: $contactsData
    }
</script>

<div class="wrapper">
    <Personal store={personalStore} />
    <Contacts store={contactsStore} />
</div>

<style>
    div > :global(*) {
        margin: 0 auto 2rem;
    }
</style>
