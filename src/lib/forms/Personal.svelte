<script>
    import Form from "./Form.svelte";
    import FormHeader from "./FormHeader.svelte";
    import DateField from "./fields/DateField.svelte";
    import FamilyStatusInput from "./fields/FamilyStatusInput.svelte";
    import InputRow from "./fields/InputRow.svelte";
    import NumberField from "./fields/NumberField.svelte";
    import RadioField from "./fields/RadioField.svelte";
    import StringField from "./fields/StringField.svelte";

</script>
<Form>
    <FormHeader slot="header">Личные данные</FormHeader>
    <StringField label="ФИО на русском" />
    <StringField label="ФИО латиницей" />
    <InputRow>
        <DateField label="Дата рождения" />
        <FamilyStatusInput label="Семейное положение" />
    </InputRow>
    <InputRow>
        <NumberField label="Желаемая зарплата в месяц, €" />
        <RadioField label="Я хочу" points={{
            'germany': 'работать в Германии',
            'europe': 'работать вахтой'
        }} />
    </InputRow>
</Form>