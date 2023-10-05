<script lang="ts">
    import Personal from "./Personal.svelte";
    import Contacts from "./Contacts.svelte";
    import Education from "./Education.svelte";
    import Experience from "./Experience.svelte";
    import Additional from "./Additional.svelte";
</script>

<div class="wrapper">
    <Personal />
    <Contacts />
    <Education />
    <Experience />
    <Additional />
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
