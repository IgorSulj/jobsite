<script lang="ts">
    import { get } from "svelte/store";
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import DateField from "$lib/forms/fields/DateField.svelte";
    import FamilyStatusInput, { type FamilyStatus } from "$lib/forms/fields/FamilyStatusInput.svelte";
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import NumberField from "$lib/forms/fields/NumberField.svelte";
    import RadioField from "$lib/forms/fields/RadioField.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import { personalFormData } from "./forms";

    const formData = personalFormData.raw

    let russianName: string, englishName: string, birthday: string, familyStatus: FamilyStatus, salary: number, wantedJob: string;

    ({russianName, englishName, birthday, familyStatus, salary, wantedJob} = get(formData))

    $: $formData = {
        russianName,
        englishName,
        birthday,
        familyStatus,
        salary,
        wantedJob
    }
</script>
<Form>
    <FormHeader slot="header">Личные данные</FormHeader>
    <StringField label="ФИО на русском" bind:value={russianName} />
    <StringField label="ФИО латиницей (как в паспорте)" bind:value={englishName} />
    <InputRow>
        <DateField label="Дата рождения" bind:value={birthday} />
        <FamilyStatusInput label="Семейное положение" bind:value={familyStatus} />
    </InputRow>
    <InputRow>
        <NumberField label="Желаемая зарплата в месяц, €" bind:value={salary} />
        <RadioField label="Я хочу" points={{
            'germany': 'работать в Германии',
            'europe': 'работать вахтой'
        }} bind:value={wantedJob} />
    </InputRow>
</Form>