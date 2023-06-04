<script lang="ts">
    import {page} from '$app/stores'
    export let links: readonly (readonly [string, string])[]
</script>

<header id="big-header">
    <div id="header__wrapper" class="limiter">
        <div id="header__menu">
            {#each links as [link, name] }
            <a href={link} class="header__link"
            class:active={$page.url.pathname == link}>{name}</a>
            {/each}
        </div>
        <div id="phones">
            <p>+375 (17) 360-05-08</p>
            <p>+375 (25) 633-19-08</p>
        </div>
    </div>
</header>

<style>
    header {
        height: 80px;
        background-color: black;
        margin-bottom: 30px;
    }

    #header__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        gap: 20px;
    }
    
    #header__menu {
        display: flex;
        align-items: center;
        gap: 80px;
        height: 100%;
    }
    
    .header__link {
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        font-family: var(--geologica);
        font-size: 14px;
        font-weight: 700;
    }

    .header__link.active {
        color: #e6d00b
    }

    #phones {
        color: white;
        font-weight: 700;
        font-family: var(--geologica);
    }
</style>
