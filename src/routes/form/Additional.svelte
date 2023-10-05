<script lang="ts">
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import Input from "$lib/forms/fields/Input.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import { get } from "svelte/store";
    import { getLocalStorageStore } from "./forms";

    let drivingLicense: string
    let hadCriminalLiability: string
    let additional: string

    const store = getLocalStorageStore('form:additional', {
            drivingLicense: '',
            hadCriminalLiability: '',
            additional: ''
        }
    );

    ({drivingLicense, hadCriminalLiability, additional} = get(store))

    $: $store = {
        drivingLicense,
        hadCriminalLiability,
        additional
    }
</script>

<Form>
    <FormHeader>Доп. информация</FormHeader>
    <StringField label="Категории водительского удостоверения" bind:value={drivingLicense} />
    <Input label="Привлекались ли вы к уголовной ответственности" inlineLabel={true}>
        <input type="checkbox" bind:value={hadCriminalLiability}>
    </Input>
    <Input label="Доп.информация">
        <textarea rows="5" bind:value={additional}></textarea>
    </Input>
</Form>