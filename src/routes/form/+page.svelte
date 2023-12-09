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
        width: 100%;
        min-height: 100vh;
        padding: 2rem 0.5rem 0;
    }

</style>
