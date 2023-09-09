<script lang="ts">
    import { get, type Writable } from "svelte/store";
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import PhoneInput from "$lib/forms/fields/PhoneInput.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";

    export let store: Writable<any>
    
    let country: string
    let city: string
    let street: string
    let flat: string
    let index: string
    let phone: string
    let email: string;

    ({country, city, street, flat, index, phone, email} = get(store))

    $: $store = {
        country,
        city,
        street,
        flat,
        index,
        phone,
        email
    }
</script>
<Form>
    <FormHeader>Контакты</FormHeader>
    <InputRow>
        <StringField label="Страна" bind:value={country} />
        <StringField label="Город" bind:value={city} />
        <StringField label="Улица или др." bind:value={street} />
        <StringField label="Квартира" bind:value={flat} />
        <StringField label="Индекс" bind:value={index} />
    </InputRow>
    <StringField label="Номер телефона" bind:value={phone} />
    <StringField label="Электронная почта" bind:value={email} />
</Form>