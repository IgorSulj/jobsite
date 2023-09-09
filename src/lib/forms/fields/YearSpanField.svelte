<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string
</script>

<Input {label}>
    <div>
        <input type="text" class="year" size="5">
        -
        <input type="text" class="year" size="5">
    </div>
</Input>

<style>
    .year {
        display: inline;
        width: auto;
    }
</style>
