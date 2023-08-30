<script>
    import CheckIcon from "$lib/icons/CheckIcon.svelte";
    import FormWrapper from "./FormWrapper.svelte";
</script>

<article>
    <div class="subform-buttons">
        <CheckIcon />
        <CheckIcon />
        <CheckIcon />
        <CheckIcon />
        <CheckIcon />
        <CheckIcon />
    </div>
    <div class="subform-buttons lower">
        <CheckIcon text="ВУЗ..." complete />
        <CheckIcon />
    </div>
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
    }

    .subform-buttons {
        display: flex;
        padding: 15px 10px;
        justify-content: center;
        align-items: flex-start;
        gap: 10px; 
    }

    .lower {
        padding: 0;
    }
</style>
