<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string = ''
    export let points: Record<string, string>
    export let value: string = Object.keys(points)[0]

    $: entries = Object.entries(points)
</script>

{#each entries as [key, text] (key) }
    <label>
        <input 
            type="radio"
            name="{label}" 
            value="{key}" 
            bind:group={value}
        />
        {text}
    </label>
{/each}

