<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string = ''
    export let value: number | undefined = undefined

    function handleInput(e: any) {
        value = Number(e.target.value)
    }
</script>

<div class="wrapper">
    <Input {label}>
        <input type="text" 
        inputmode="numeric" 
        on:input={handleInput}
        >
    </Input>
</div>

<style>
    .wrapper {
        width: 20rem;
    }
</style>
