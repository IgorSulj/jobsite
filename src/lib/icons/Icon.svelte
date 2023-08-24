<script lang="ts">
    export let text: string = ''
    export let complete: boolean = false
</script>

<button id="wrapper" class:complete>
    <div id="wrapper__icon">
        <div id="icon">
            <slot />
        </div>
    </div>
    {#if text}
        <p>{text}</p>
    {/if}
</button>

<style>
    #wrapper {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    #wrapper__icon {
        margin: auto;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue);
        border-radius: 50%;
    }

    #icon {
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
    }

    #icon :global(svg *) {
        fill: white;
    }

    .complete #wrapper__icon {
        background-color: white;
    }

    .complete #icon :global(svg *) {
        fill: var(--blue);
    }

    p {
        font-family: var(--geologica);
        font-weight: 100;
        font-size: 0.875rem;
        color: var(--blue);
        text-align: center;
    }
</style>
