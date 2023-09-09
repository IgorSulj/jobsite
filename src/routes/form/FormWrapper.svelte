<script lang="ts">
    import { getLocalStorageStore, validatedStore, validatePersonalForm } from "./forms";
    import Personal from "./Personal.svelte";
    import Contacts from "./Contacts.svelte";
    import Education from "./Education.svelte";

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
