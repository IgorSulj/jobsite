<script lang="ts">
    import {page} from '$app/stores'
    import { onMount } from 'svelte';
    let active = false
    let main_content: HTMLElement
    export let links: readonly(readonly [string, string])[]

    const handleClick = (event: MouseEvent) => {
        let target = event.target as Element
        if (target.closest('#burger__wrapper')) {
            active = !active
        }
        else if (!target.closest('#main_content')) {
            active = false
        }
    }

    const handleScroll = () => (active = false)

    onMount(() => {
        document.addEventListener('click', handleClick)
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('click', handleClick)
            document.removeEventListener('scroll', handleScroll)
        }
    })
</script>

<header class:active>
    <div id="header__wrapper" class="limiter">
        <button id="burger__wrapper" class:active>
            <span id="burger-top"></span>
            <span id="burger-middle"></span>
            <span id="burger-bottom"></span>
        </button>
    </div>
    <div id="main-content" class:active
        bind:this={main_content}
        style="height: {active ? main_content.scrollHeight + 'px' : 0}">
        {#each links as [link, name] (link)}
            <span class="border"></span>
            <a href="{link}" 
            class="link"
            class:active={$page.route.id == link}>{name}</a>
        {/each}
    </div>
</header>

<style>
    header {
        height: 80px;
        margin-bottom: 30px;
        position: sticky;
        top: 0;
        z-index: 120;
        background-color: transparent;
    }
    
    #header__wrapper {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        height: 100%;
    }

    #burger__wrapper {
        width: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    
    #burger__wrapper span {
        width: 100%;
        border: 1px solid var(--blue);
        border-radius: 2px;
    }
    
    #burger__wrapper:not(.active) #burger-top, #burger-bottom {
        transition: rotate 0.125s, translate 0.125s 0.125s;
    }
    
    #burger__wrapper.active :is(#burger-top, #burger-bottom) {
        transition: translate 0.125s, rotate 0.125s 0.125s;
    }

    #burger-middle {
        transition: opacity 0s 0.125s;
    }
    
    #burger__wrapper.active #burger-middle {
        opacity: 0;
    }
    
    #burger__wrapper.active #burger-top {
        translate: 0 12px;
        rotate: 45deg;
    }
    
    #burger__wrapper.active #burger-bottom {
        translate: 0 -12px;
        rotate: -45deg;
    }
    
    #main-content {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        background-color: transparent;
        transition: all 0.25s;
        overflow: hidden;
        width: 100%;
    }
    :is(header, #burger-wrapper) {
        transition: background 0.25s;
    }

    :is(header, #main-content, #burger__wrapper).active {
        background-color: white;
    }

    .link {
        width: 100%;
        text-align: center;
        padding: 20px;
        color: var(--grey);
        font-family: var(--geologica);
        text-decoration: none;
        font-weight: 500;
        font-size: 24px;
    }

    .link.active {
        color: var(--blue);
    }

    .border {
        height: 0;
        border: 0.5px solid var(--grey);
    }
</style>
