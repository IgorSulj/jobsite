<script>
    import Form from "./Form.svelte";
    import FormHeader from "./FormHeader.svelte";
    import InputRow from "./fields/InputRow.svelte";
    import PhoneInput from "./fields/PhoneInput.svelte";
    import StringField from "./fields/StringField.svelte";

</script>
<Form>
    <FormHeader>Контакты</FormHeader>
    <InputRow>
        <StringField label="Страна" />
        <StringField label="Город" />
        <StringField label="Улица или др." />
        <StringField label="Квартира" />
        <StringField label="Индекс" />
    </InputRow>
    <PhoneInput />
    <StringField label="Электронная почта" />
</Form>