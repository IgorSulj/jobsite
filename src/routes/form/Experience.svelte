<script lang="ts">
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import MultiForm from "$lib/forms/MultiForm.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import YearSpanField from "$lib/forms/fields/YearSpanField.svelte";
    import { get, type Writable } from "svelte/store";
    import { createExperienceStore, getLocalStorageStore } from "./forms";

    let organization: string = ''
    let position: string = ''
    let skills: string = ''
    let start: number = 2000
    let end: number = 2000

    let currentStore: ReturnType<typeof createExperienceStore>['raw'] = 
        getLocalStorageStore("form:experience:0", {
            organization,
            position,
            skills,
            start,
            end
        });
    
    ({organization, position, skills, start, end} = get(currentStore))

    $: $currentStore = {
        organization,
        position,
        skills,
        start,
        end
    }
</script>

<MultiForm createStore={createExperienceStore} on:onstorechange={e => {
    let data = get(e.detail);
    ({organization, position, skills, start, end} = data)
    currentStore = e.detail
}}>
    <FormHeader>Опыт работы</FormHeader>
    <StringField label="Организация" bind:value={organization}  />
    <StringField label="Должность" bind:value={position} />
    <StringField label="Навыки" bind:value={skills} />
    <YearSpanField label="Годы работы" bind:start bind:end />
</MultiForm>