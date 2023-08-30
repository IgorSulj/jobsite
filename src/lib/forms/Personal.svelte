<script lang="ts">
    import { get, type Writable } from "svelte/store";
    import Form from "./Form.svelte";
    import FormHeader from "./FormHeader.svelte";
    import NextButton from "./NextButton.svelte";
    import DateField from "./fields/DateField.svelte";
    import FamilyStatusInput from "./fields/FamilyStatusInput.svelte";
    import type {FamilyStatus} from './fields/FamilyStatusInput.svelte'
    import InputRow from "./fields/InputRow.svelte";
    import NumberField from "./fields/NumberField.svelte";
    import RadioField from "./fields/RadioField.svelte";
    import StringField from "./fields/StringField.svelte";

    export let store: Writable<any>

    let russianName = ''
    let englishName = ''
    let birthday: string
    let familyStatus: FamilyStatus
    let salary: number | undefined = undefined
    let wantedJob: 'germany' | 'europe' = 'germany';

    ({russianName, englishName, birthday, familyStatus, salary, wantedJob} = get(store))

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
    <StringField label="ФИО латиницей" bind:value={englishName} />
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
    <NextButton />
</Form>