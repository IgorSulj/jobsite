<script lang="ts">
    const links = [
        ['/', 'Германия'],
        ['/rabota-v-evrope', 'Европа'],
        ['/contacts', 'Контакты']
    ] as const
</script>

<header>
    {#each links as [link, name] }
        <a href="{link}" class="link">{name}</a>
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
        color: var(--blue);
        font-family: var(--geologica);
        font-weight: 500;
        font-size: 24px;
        text-decoration: none;
    }
</style>
