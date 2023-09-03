<script lang="ts">
    import { getLocalStorageStore, validatedStore, validatePersonalForm } from "./forms";
    import Personal from "$lib/forms/Personal.svelte";
    import Contacts from "$lib/forms/Contacts.svelte";

    const personalStore = getLocalStorageStore("form:personal", {})

    const personalData = validatedStore(personalStore, validatePersonalForm)

    export const data = {
        personal: $personalData
    }
</script>

<div class="wrapper">
    <Personal store={personalStore} />
    <Contacts />
</div>

<style>
    div > :global(*) {
        margin: 0 auto 2rem;
    }
</style>
