<script lang="ts">
    import 'reset-css/reset.css'
    import HeaderMenu from './HeaderMenu.svelte';
    import HeaderBottom from './HeaderBottom.svelte';
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100;700&display=swap" rel="stylesheet">
</svelte:head>

<header id="header">
    <HeaderMenu />
    <HeaderBottom />
</header>
<slot></slot>
<footer id="footer"></footer>

<style>
    :global(.limiter) {
        max-width: 1440px;
        margin: auto;
    }

    #header {
        height: 80px;
        background-color: black;
        padding: 0 80px;
    }
</style>
