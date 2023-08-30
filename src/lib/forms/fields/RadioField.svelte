<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string = ''
    export let points: Record<string, string>
    export let value: string = Object.keys(points)[0]

    $: entries = Object.entries(points)
</script>

<label class="wrapper">
    {label}
    {#each entries as [key, text] (key) }
    <label>
        <input 
            type="radio"
            value="{key}" 
            bind:group={value}
        />
        {text}
    </label>
    {/each}
</label>
    
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: var(--geologica);
        font-size: 1.25rem;
        font-weight: 100;
    }
</style>
