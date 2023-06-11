<script lang="ts">
    import {navigating} from '$app/stores'
    import 'reset-css/reset.css'
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import Spinner from '$lib/components/Spinner.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100;500;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />
{#if $navigating}
    <Spinner />
{:else}
<article>
    <slot></slot>
</article>
{/if}
<Footer />

<style>
    :global(*) {
        box-sizing: border-box;
    }

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
    :global(:root) {
        --geologica: 'Geologica', sans-serif;
        --roboto-mono: 'Roboto Mono', monospace;
        --blue: #3081BB;
        --brown: #F8EBE3;
        --grey: #CECECE;
    }

    article {
        flex-grow: 1;
    }
</style>
