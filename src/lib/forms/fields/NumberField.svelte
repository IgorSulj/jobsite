<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string = ''
    export let value: number = NaN

    function handleInput(e: any) {
        value = parseFloat(e.target.value)
    }
</script>

<div class="wrapper">
    <Input {label}>
        <input type="text"
        class:error={isNaN(value)} 
        inputmode="numeric" 
        on:input={handleInput}
        >
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
