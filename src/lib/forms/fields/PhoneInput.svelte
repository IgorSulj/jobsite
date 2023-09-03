<script>
    import NumberField from "./NumberField.svelte";
    import StringField from "./StringField.svelte";

</script>
<div class="wrapper">
    <StringField label="Код" />
    <div class="number-field">
        <NumberField label="Телефон" />
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
