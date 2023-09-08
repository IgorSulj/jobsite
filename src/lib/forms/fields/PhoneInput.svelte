<script lang="ts">
    import NumberField from "./NumberField.svelte";
    import StringField from "./StringField.svelte";

    let code: string
    let number: number

    export let phoneNumber = ''
    $: (phoneNumber = code + number)
</script>
<div class="wrapper">
    <StringField label="Код" bind:value={code} />
    <div class="number-field">
        <NumberField label="Телефон" bind:value={number} />
    </div>
</div>

<style>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.625rem;
        width: 100%;
    }

    .number-field {
        grid-column: span 4;
    }
</style>
