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
        fetch('http://localhost:8000/', {
            method: 'POST',
            body: JSON.stringify(collect()),
            headers: {'Content-Type': 'application/json'}
        })
    }
</script>

<form on:submit|preventDefault={handleClick}>
    <Personal bind:this={personal} />
    <Contacts bind:this={contacts} />
    <Education bind:this={education} />
    <Experience bind:this={experience} />
    <Additional bind:this={additional} />
    <div class="button-wrapper">
        <button>Отправить</button>
    </div>
</form>

<style>
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
        max-width: 800px;
        padding-bottom: 2rem;
    }

    button {
        float: right;
        font-family: var(--geologica);
        font-size: 1.25rem;
        padding: 0.5rem;
    }
</style>
