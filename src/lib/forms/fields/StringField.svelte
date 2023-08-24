<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string = ''
    export let value: string = ''
</script>

<Input {label}>
    <input type="text" bind:value>
</Input>
