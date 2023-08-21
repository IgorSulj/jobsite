<script lang="ts">
    import {navigating} from '$app/stores'
    import 'reset-css/reset.css'
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import Spinner from '$lib/components/Spinner.svelte';
</script>

<Header />
<article>
    {#if $navigating}
        <Spinner />
    {:else}
        <slot></slot>
    {/if}
</article>
<Footer />

<style>
    :global(h1) {
        font-family: var(--geologica);
        font-weight: 700;
        text-align: center;
        font-size: 36px;
        margin-bottom: 30px;
    }

    :global(.limiter) {
        max-width: 1460px; /* 1440 + 20 px */
        padding: 0 10px;
        margin: auto;
    }

    :global(body) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    article {
        flex-grow: 1;
    }
</style>
