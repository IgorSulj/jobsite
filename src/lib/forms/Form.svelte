<div class="wrapper">
    <slot name="header" />
    <div class="fields">
        <slot />
    </div>
</div>

<style>
    .wrapper {
        background-color: white;
        padding: 1rem;
        border-radius: 1.875rem;
        max-width: 800px;
        flex-grow: 1;
    }

    .fields {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
</style>
