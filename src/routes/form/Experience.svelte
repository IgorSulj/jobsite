<script lang="ts">
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import MultiForm from "$lib/forms/MultiForm.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import YearSpanField from "$lib/forms/fields/YearSpanField.svelte";
    import { guardAgainst } from "./forms";

    const defaultData = {
        organization: '',
        position: '',
        skills: '',
        start: 2000,
        end: 2000
    }

    const guard = guardAgainst<typeof defaultData>(
        ['Некоторые поля не заполнены', data => data.organization == '' || data.position == '' || data.skills == ''],
        ['Некорректный интервал', data => data.end < data.start]
    )

    let {organization, position, skills, start, end} = defaultData
    let form: MultiForm<typeof defaultData>

    export function collect() {
        return form.collect()
    }

    $: form?.update({organization, position, skills, start, end})
</script>

<MultiForm createDefault={() => defaultData} 
        on:onindexchange={e => ({organization, position, skills, start, end} = e.detail)}
        {guard}  
        bind:this={form}>
    <FormHeader>Опыт работы</FormHeader>
    <StringField label="Организация" bind:value={organization}  />
    <StringField label="Должность" bind:value={position} />
    <StringField label="Навыки" bind:value={skills} />
    <YearSpanField label="Годы работы" bind:start bind:end />
</MultiForm>