<script lang="ts">
    import CheckIcon from "$lib/icons/CheckIcon.svelte";
    import FormWrapper from "./FormWrapper.svelte";
    import { type FormStep, steps } from "./forms";

    let step: FormStep

    let data: any
</script>

<article>
    <div class="subform-buttons">
        {#each steps as curr_step }
            <button on:click={() => step = curr_step} class="upper-icon">
                <CheckIcon></CheckIcon>
            </button>
        {/each}
    </div>
    <div class="subform-buttons lower">
        <CheckIcon text="ВУЗ..." complete />
        <CheckIcon />
    </div>
    <FormWrapper bind:step bind:data />
</article>

<style>
    :global(body) {
        margin: 0;
    }

    article {
        background-color: #eee;
        width: 100vw;
        min-height: 100vh;
    }

    .subform-buttons {
        display: flex;
        padding: 15px 10px;
        justify-content: center;
        align-items: flex-start;
        gap: 10px; 
    }

    .lower {
        padding: 0;
    }

    .upper-icon {
        background-color: transparent;
        border: none;
    }
</style>
