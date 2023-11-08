<script lang="ts">
    export let errors: string[] = []
</script>

<div class="wrapper" class:has-errors={errors.length > 0}>
    <slot name="header" />
    <div class="fields">
        <slot />
    </div>
    {#each errors as error }
        <p>{error}</p>
    {/each}
</div>

<style>
    .wrapper {
        background-color: white;
        padding: 1rem;
        border-radius: 1.875rem;
        max-width: 800px;
        flex-grow: 1;
    }

    .has-errors {
        border: 1px solid red;
    }

    p {
        color: red;
        font-family: var(--geologica);
    }

    .fields {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
</style>
