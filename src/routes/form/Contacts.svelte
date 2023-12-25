<script lang="ts">
    import Form from "$lib/forms/Form.svelte";
    import FormHeader from "$lib/forms/FormHeader.svelte";
    import InputRow from "$lib/forms/fields/InputRow.svelte";
    import StringField from "$lib/forms/fields/StringField.svelte";
    import { emailRegex, guardAgainst, phoneRegex, validated } from "./forms";

    const defaultData = {
        country: '',
        city: '',
        street: '',
        flat: '',
        index: '',
        phone: '',
        email: ''
    }

    const guard = guardAgainst<typeof defaultData>(
        ['Некоторые поля не заполнены', data => Object.values(data).indexOf('') != -1],
        ['Некорректный номер телефона', data => data.phone != "" && !data.phone.match(phoneRegex)],
        ['Некорректный формат email', data => data.email != "" && !data.email.match(emailRegex)]
    )

    let {country, city, street, flat, index, phone, email} = defaultData


    export function collect() {
        return validated(guard, {
            country,
            city,
            street,
            flat,
            index,
            phone,
            email
        })
    }

    $: errors = guard({country, city, street, flat, index, phone, email})
</script>
<Form {errors}>
    <FormHeader>Контакты</FormHeader>
    <div class="address-fields">
        <StringField label="Страна" bind:value={country} />
        <StringField label="Город" bind:value={city} />
        <StringField label="Улица или др." bind:value={street} />
        <StringField label="Квартира" bind:value={flat} />
        <StringField label="Индекс" bind:value={index} />
    </div>
    <StringField label="Номер телефона" bind:value={phone} />
    <StringField label="Электронная почта" bind:value={email} />
</Form>


<style>
    .address-fields {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 0.625rem;
    }
</style>
