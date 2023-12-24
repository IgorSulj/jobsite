<script lang="ts">
    import Personal from "./Personal.svelte";
    import Contacts from "./Contacts.svelte";
    import Education from "./Education.svelte";
    import Experience from "./Experience.svelte";
    import Additional from "./Additional.svelte";

    let personal: Personal
    let contacts: Contacts
    let education: Education
    let experience: Experience
    let additional: Additional

    let serverPromise: Promise<{}> = Promise.resolve({});

    function collect() {
        let personalData = personal.collect()
        let contactsData = contacts.collect()
        let educationData = education.collect()
        let experienceData = experience.collect()
        let additionalData = additional.collect()
        return personalData &&
               contactsData &&
               educationData &&
               experienceData &&
               additionalData && {
            personal: personalData,
            contacts: contactsData,
            education: educationData,
            experience: experienceData,
            additional: additionalData,
        }
    }

    function handleClick() {
        const collected = collect();
        if (collected === undefined) {
            serverPromise = Promise.reject('Некоторые поля не заполнены или заполнены некорректно.')
            return
        }
        serverPromise = fetch('http://localhost:8000/', {
            method: 'POST',
            body: JSON.stringify(collected),
            headers: {'Content-Type': 'application/json'}
        }).catch(() => Promise.reject('Произошла ошибка. Повторите попытку.'))
    }
</script>
<div>
    <button on:click={() => window.history.back()} class='go-back'>Назад</button>
</div>
<form on:submit|preventDefault={handleClick}>
    <Personal bind:this={personal} />
    <Contacts bind:this={contacts} />
    <Education bind:this={education} />
    <Experience bind:this={experience} />
    <Additional bind:this={additional} />
    <div class="button-wrapper">
        <button class="submit">
            {#await serverPromise}
            ...
            {:then}
            Отправить
            {:catch}
            Отправить
            {/await}
        </button>
        {#await serverPromise catch error}
        <p class="error">{error}</p>
        {/await}
    </div>
</form>

<style>
    .go-back {
        margin-bottom: 2rem;
        padding: 0.5rem;
        border: 2px solid black;
        border-radius: 0.5rem;
        background-color: transparent;
        font-family: var(--geologica);
        font-size: 1.25rem;
        cursor: pointer;
    }

    .go-back:hover {
        background-color: #ddd;
    }

    form {
        padding: 0 1rem;
    }

    form > :global(*) {
        margin: 0 auto 2rem;
    }

    form > :global(*):last-child {
        margin: 0 auto;
    }

    form {
        padding-bottom: 2rem;
    }

    .button-wrapper {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        max-width: 800px;
        padding-bottom: 2rem;
    }

    .error {
        color: red;
        font-family: var(--geologica);
    }

    .submit {
        font-family: var(--geologica);
        font-size: 1.25rem;
        padding: 0.5rem;
        width: 8rem;
    }
</style>
