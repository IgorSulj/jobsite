<script lang="ts">
    import { page } from '$app/stores'

    export let links: readonly (readonly [string, string])[]
</script>

<header>
    {#each links as [link, name] }
        <a href="{link}" class="link" class:active={$page.route.id == link}>{name}</a>
    {/each}
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        height: 50px;
        margin-bottom: 40px;
    }

    .link {
        color: #CECECE;
        font-family: var(--geologica);
        font-weight: 500;
        font-size: 24px;
        text-decoration: none;
    }

    .active {
        color: var(--blue);
    }
</style>