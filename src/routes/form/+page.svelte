<script lang="ts">
    import FormWrapper from "./FormWrapper.svelte";
</script>

<article>
    <FormWrapper />
</article>

<style>
    :global(body) {
        margin: 0;
    }

    article {
        background-color: #eee;
        width: 100vw;
        min-height: 100vh;
        padding-top: 2rem;
    }

</style>
