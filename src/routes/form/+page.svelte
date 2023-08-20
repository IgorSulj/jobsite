<script>
    import CheckIcon from "$lib/icons/CheckIcon.svelte";
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
        <CheckIcon />
        <CheckIcon />
    </div>
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
        align-items: center;
        gap: 10px; 
    }

    .lower {
        padding: 0;
    }
</style>
