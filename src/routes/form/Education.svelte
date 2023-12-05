<script lang="ts">
    import { updated } from "$app/stores";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import MultiForm from "$lib/forms/MultiForm.svelte";
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import PhotoField from "$lib/forms/fields/PhotoField.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import YearSpanField from "$lib/forms/fields/YearSpanField.svelte";
    import { guardAgainst } from "./forms";

    const defaultData = {
        photo: '',
        start: 2023,
        end: 2023,
        name: '',
        specialization: '',
        qualification: ''
    }

    let {photo, start, end, name, specialization, qualification} = defaultData
    let form: MultiForm<typeof defaultData>


    export function collect() {
        return form.collect()
    }

    $: form?.update({photo, start, end, name, specialization, qualification})

</script>

<MultiForm createDefault={() => defaultData}
            maxSize={3}
            guard={guardAgainst(
                ['Некоторые поля пусты', data => data.photo == '' || data.name == '' || data.specialization == '' || data.qualification == ''],
                ['Даты - не числа', data => isNaN(data.start) || isNaN(data.end)],
                ['Конец интервала раньше начала', data => data.end < data.start]
            )}
            on:onindexchange={e => {
                ({photo, start, end, name, specialization, qualification} = e.detail)
            }}
            bind:this={form}>
    <FormHeader slot="header">
        Образование
    </FormHeader>
    <InputRow>
        <PhotoField label="Фото" bind:src={photo} />
        <YearSpanField label="Годы обучения" bind:start bind:end />
    </InputRow>
    <StringField label="Название УЗ" bind:value={name} />
    <StringField label="Специальность" bind:value={specialization} />
    <StringField label="Квалификация" bind:value={qualification} />
</MultiForm>