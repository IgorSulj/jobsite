<script lang="ts">
    export let label: string = ''
</script>


<label>
    {#if label}
    <p>{label}</p>
    {/if}
    <slot />
</label>

<style>
    label {
        font-family: var(--geologica);
        font-size: 1.25rem;
        font-weight: 100;
    }

    p {
        margin: 0;
        margin-bottom: 0.3125rem;
    }

    label :global(input), label :global(select) {
        width: 100%;
        border-radius: 0.625rem;
        border: 2px solid #828282;
        font-size: 1.5rem;
        font-family: var(--geologica);
        font-weight: 100;
        padding: 0.75rem;
    }

    label :global(select) {
        background-color: transparent;
    }
</style>
