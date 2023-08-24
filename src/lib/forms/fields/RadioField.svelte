<script lang="ts" generics="T extends string">
    import Input from "./Input.svelte";

    export let label: string
    export let points: Record<T, string>
    export let value: T = Object.keys(points)[0] as T

    $: entries = Object.entries(points) as [T, string][]
</script>

<Input {label}>
    {#each entries as [key, value] (key) }
        <label>
            <input type="radio" name="{label}" value="{key}" bind:group={value}>
            <span>{points[key]}</span>
        </label>
    {/each}
</Input>
