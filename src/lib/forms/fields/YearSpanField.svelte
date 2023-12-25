<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string
    
    export let start: number = NaN
    export let end: number = NaN
</script>

<Input {label}>
    <div>
        <input type="number" class="year" size="5" bind:value={start}>
        -
        <input type="number" class="year" size="5" bind:value={end}>
    </div>
</Input>

<style>
    .year {
        display: inline;
        width: auto;
    }
</style>
