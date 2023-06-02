<script lang="ts">
    import {page} from '$app/stores'

    const links: [string, string][] = [
        ['/', 'Работа Германия']
    ]
</script>

<div id="header__menu" class="limiter">
    {#each links as [link, name] }
    <a href={link} class="header__link"
        class:active={$page.url.pathname == link}>{name}</a>
    {/each}
</div>

<style>
    #header__menu {
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 100px;
        height: 100%;
        margin-bottom: 30px;
    }
    
    .header__link {
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        font-family: 'Geologica', sans-serif;
        font-size: 14px;
        font-weight: 700;
    }

    .header__link.active {
        color: #e6d00b
    }
</style>