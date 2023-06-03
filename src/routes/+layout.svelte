<script lang="ts">
    import 'reset-css/reset.css'
    import Header from './Header.svelte';
    import ArticleHead from './ArticleHead.svelte';
    import Footer from './Footer.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@251;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />
<article>
    <ArticleHead />
    <slot></slot>
</article>
<Footer />

<style>
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
    }

    article {
        flex-grow: 1;
    }
</style>
