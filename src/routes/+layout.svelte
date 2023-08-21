<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100;500;700&display=swap" rel="stylesheet">
</svelte:head>

<slot />

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(:root) {
        --geologica: 'Geologica', sans-serif;
        --roboto-mono: 'Roboto Mono', monospace;
        --blue: #3081BB;
        --brown: #F8EBE3;
        --grey: #CECECE;
    }
</style>
