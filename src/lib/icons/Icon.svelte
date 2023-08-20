<script lang="ts">
    export let text: string = ''
</script>

<div id="wrapper">
    <div id="wrapper__icon">
        <div id="icon">
            <slot />
        </div>
    </div>
    {#if text}
    <p>{text}</p>
    {/if}
</div>

<style>
    #wrapper__icon {
        margin: auto;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3081BB;
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
</style>
