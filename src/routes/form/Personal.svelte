<script lang="ts">
    import { get, type Writable } from "svelte/store";
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import NextButton from "$lib/forms/NextButton.svelte";
    import DateField from "$lib/forms/fields/DateField.svelte";
    import FamilyStatusInput from "$lib/forms/fields/FamilyStatusInput.svelte";
    import type {FamilyStatus} from '$lib/forms/fields/FamilyStatusInput.svelte'
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import NumberField from "$lib/forms/fields/NumberField.svelte";
    import RadioField from "$lib/forms/fields/RadioField.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";

    export let store: Writable<any>

    let russianName: string
    let englishName: string
    let birthday: string
    let familyStatus: FamilyStatus
    let salary: number
    let wantedJob: 'germany' | 'europe';
    
    ({russianName, englishName, birthday, familyStatus, salary, wantedJob} = get(store))

    russianName ??= ''
    englishName ??= ''
    salary ??= NaN
    wantedJob ??= 'germany'

    $: $store = {
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