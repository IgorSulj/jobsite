<script lang="ts">
    import close from '$lib/img/close.svg'
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'

    let active = false
    let main: HTMLElement | undefined
    let upper: HTMLElement | undefined
    let lower: HTMLElement | undefined
    const paddingBorder = 56 + 4
    const innerMargin = 20

    $: height = (() => {
        if (!upper) return 'auto'
        let upperHeight = upper.offsetHeight
        let lowerHeight = active && lower ? lower.offsetHeight + innerMargin : 0
        return upperHeight + lowerHeight + paddingBorder + 'px'
    })()

    onMount(() => {
        let observer = new ResizeObserver(() => {
            upper = upper
            lower = lower
        })
        observer.observe(main!)

        return observer.disconnect()
    })

    const handleSwitch = () => {active = !active}
</script>

<button id="main"
    on:click={handleSwitch} 
    on:keypress={handleSwitch}
    bind:this={main}
    style="height: {height}">
    <div id="upper" bind:this={upper}>
        <slot name="header"></slot>
        <div id="icon" class:active><img src="{close}" alt="Закрыть"></div>
    </div>
    {#if active}
        <div id="lower" bind:this={lower} class:active transition:fade|local="{{duration: 250}}">
            <slot name="text"></slot>
        </div>
    {/if}
</button>

<style>
    #main {
        display: block;
        max-width: 1400px;
        width: 100%;
        border: 2px solid var(--blue);
        border-radius: 20px;
        padding: 28px;
        transition: height ease-out 0.25s;
        overflow: hidden;
        cursor: pointer;
        background: transparent;
        text-align: left;
    }

    #icon {
        display: flex;
        transition: rotate ease-out 0.25s;
        rotate: -45deg;
    }

    #icon.active {
        rotate: 0deg;
    }

    #upper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        background: transparent;
    }

    #lower {
        margin-top: 20px;
    }
</style>
