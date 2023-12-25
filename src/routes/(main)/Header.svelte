<script lang="ts">
    import BigHeader from "$lib/components/BigHeader.svelte";
    import SmallHeader from "$lib/components/SmallHeader.svelte";
    import { mediaQuery } from "$lib/stores"

    const links = [
        ['/', 'Германия'],
        ['/rabota-v-evrope', 'Европа'],
        ['/contacts', 'Контакты'],
        ['/form', 'Анкета'],
    ] as const

    let isSmallQuery = mediaQuery('(max-width: 900px)')
</script>

{#if $isSmallQuery === undefined || $isSmallQuery}
    <SmallHeader links={links} />
{:else}
    <BigHeader links={links} />
{/if}
