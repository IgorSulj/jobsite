<script lang="ts">
    import BigHeader from '$lib/components/BigHeader.svelte';
    import SmallHeader from '$lib/components/SmallHeader.svelte';
    import { onMount } from 'svelte';

    const links = [
        ['/', 'Работа Германия'],
        ['/rabota-v-evrope', 'Работа вахтой'],
        ['/contacts', 'Контакты']
    ] as const

    let isSmall = true;
    onMount(() => {
        let media = window.matchMedia('(max-width: 750px)')
        isSmall = media.matches
        media.addEventListener('change', event => isSmall = event.matches)
    })
</script>

{#if isSmall}
<SmallHeader links={links} />
{:else}
<BigHeader links={links} />
{/if}
