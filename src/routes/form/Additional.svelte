<script lang="ts">
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import Input from "$lib/forms/fields/Input.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";

    const defaultData = {
        drivingLicense: '',
        hadCriminalLiability: false,
        additional: ''
    }

    let {drivingLicense, hadCriminalLiability, additional} = defaultData

    export function collect() {
        return {drivingLicense, hadCriminalLiability, additional}
    }
</script>

<Form>
    <FormHeader>Доп. информация</FormHeader>
    <StringField label="Категории водительского удостоверения" bind:value={drivingLicense} />
    <Input label="Привлекались ли вы к уголовной ответственности" inlineLabel={true}>
        <input type="checkbox" bind:checked={hadCriminalLiability}>
    </Input>
    <Input label="Доп.информация">
        <textarea rows="5" bind:value={additional}></textarea>
    </Input>
</Form>

<style>
    textarea {
        resize: vertical;
    }
</style>
