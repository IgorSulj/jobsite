<script>
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import PhotoField from "$lib/forms/fields/PhotoField.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import YearSpanField from "$lib/forms/fields/YearSpanField.svelte";

</script>

<Form>
    <FormHeader slot="header">
        Высшее образование
    </FormHeader>
    <InputRow>
        <PhotoField label="Фото" />
        <YearSpanField label="Годы обучения" />
    </InputRow>
    <StringField label="Название УЗ" />
    <StringField label="Специальность" />
    <StringField label="Квалификация" />
</Form>