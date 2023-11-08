<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string = ''
    export let value: number | null = NaN
</script>

<div class="wrapper">
    <Input {label}>
        <input type="number" bind:value class:error={value == null}>
    </Input>
</div>

<style>
    .wrapper {
        width: 20rem;
    }

    .error {
        border-color: red;
    }
</style>
