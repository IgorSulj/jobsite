<script lang="ts">
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import MultiForm from "$lib/forms/MultiForm.svelte";
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import PhotoField from "$lib/forms/fields/PhotoField.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import YearSpanField from "$lib/forms/fields/YearSpanField.svelte";
    import { get, type Writable } from "svelte/store";
    import { createEducationStore, getLocalStorageStore } from "./forms";
    import { beforeUpdate } from "svelte";

    let currentStoreRaw: ReturnType<typeof createEducationStore>['raw'] = createEducationStore(0).raw

    let photo = ''
    let start: number = 2023
    let end: number = 2023
    let name = ''
    let specialization = ''
    let qualification = '';

    ({photo, start, end, name, specialization, qualification} = get(getLocalStorageStore("form:education:0", {
        photo,
        start,
        end,
        name,
        specialization,
        qualification
    })))


    $: {
        currentStoreRaw?.set({
            photo,
            start,
            end,
            name,
            specialization,
            qualification
        })
    }
</script>

<MultiForm createStore={createEducationStore} 
            maxSize={3} 
            on:onstorechange={e => {
                let data = get(e.detail);
                ({photo, start, end, name, specialization, qualification} = data)
                currentStoreRaw = e.detail
            }}>
    <FormHeader slot="header">
        Высшее образование
    </FormHeader>
    <InputRow>
        <PhotoField label="Фото" bind:src={photo} />
        <YearSpanField label="Годы обучения" bind:start bind:end />
    </InputRow>
    <StringField label="Название УЗ" bind:value={name} />
    <StringField label="Специальность" bind:value={specialization} />
    <StringField label="Квалификация" bind:value={qualification} />
</MultiForm>