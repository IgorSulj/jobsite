<script lang="ts">
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import DateField from "$lib/forms/fields/DateField.svelte";
    import FamilyStatusInput, { type FamilyStatus } from "$lib/forms/fields/FamilyStatusInput.svelte";
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import NumberField from "$lib/forms/fields/NumberField.svelte";
    import RadioField from "$lib/forms/fields/RadioField.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import { guardAgainst, validated } from "./forms";

    const defaultData = {
        russianName: '',
        englishName: '',
        birthday: '',
        familyStatus: 'not-married' as FamilyStatus,
        salary: 0,
        wantedJob: ''
    }

    const guard = guardAgainst<typeof defaultData>(
        ['Некоторые поля не заполнены', data => [data.russianName, data.englishName, data.birthday, data.wantedJob].indexOf('') != -1],
        ['Зарплата должна быть положительным числом', ({salary}) => isNaN(salary) || salary <= 0]
    )

    let {russianName, englishName, birthday, familyStatus, salary, wantedJob} = defaultData

    export function collect() {
        return validated(guard, {
            russianName,
            englishName,
            birthday,
            familyStatus,
            salary,
            wantedJob
        })
    }

    $: errors = guard({russianName, englishName, birthday, familyStatus, salary, wantedJob})
</script>
<Form {errors}>
    <FormHeader slot="header">Личные данные</FormHeader>
    <StringField label="ФИО на русском" bind:value={russianName} />
    <StringField label="ФИО латиницей (как в паспорте)" bind:value={englishName} />
    <div class="wrapper">
        <DateField label="Дата рождения" bind:value={birthday} />
        <FamilyStatusInput label="Семейное положение" bind:value={familyStatus} />
    </div>
    <div class="wrapper">
        <NumberField label="Желаемая зарплата в месяц, €" bind:value={salary} />
        <RadioField label="Я хочу" points={{
            'germany': 'работать в Германии',
            'europe': 'работать вахтой'
        }} bind:value={wantedJob} />
    </div>
</Form>

<style>
    .wrapper {
        display: flex;
        gap: 0.625rem;
    }

    @media (max-width: 600px) {
        .wrapper {
            flex-direction: column;
        }
    }
</style>
