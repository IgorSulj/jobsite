<script lang="ts" generics="T">
    import { createEventDispatcher } from 'svelte'
    import DeleteIcon from '$lib/img/form/delete.svg'

    import Form from "./Form.svelte";

    export let createDefault: (index: number) => T
    export let maxSize: number = Infinity

    let formsetData: T[] = []
    let index = -1
    export let guard: (value: T) => string[] = () => []
    $: errors = formsetData.length > 0 ? guard(formsetData[index]) : []
    export let dispatch = createEventDispatcher<{
        onindexchange: T
    }>()

    export function collect() {
        return formsetData.find(elem => guard(elem).length != 0) ? undefined : formsetData
    }

    export function update(value: T) {
        formsetData[index] = value
        formsetData = formsetData
    }

    export const handleDelete = () => {
        formsetData.splice(index, 1)
        if (index == formsetData.length) index--
        dispatch('onindexchange', formsetData[index])
        formsetData = formsetData
    }

    export const handleCreate = () => {
        formsetData.push(createDefault(index + 1))
        dispatch('onindexchange', formsetData[index + 1])
        index++
    }

    export const handleGetNext = () => {
        dispatch('onindexchange', formsetData[index + 1])
        index++
    }

</script>
<Form {errors}>
    <svelte:fragment slot="header">
        <div class="selector">
            <div class="left">
                {#if index > 0}
                    <button on:click={() => {
                        dispatch('onindexchange', formsetData[index - 1])
                        index--
                    }}>&lt;</button>
                {/if}
            </div>

            <div class="status">
                {#each formsetData as _, i (i)}
                    <div class="store__status" class:active-store={i == index}></div>
                {/each}
            </div>
            <div class="right">
                {#if formsetData.length >= 1}
                    <button class="delete" on:click={handleDelete}>Удалить</button>
                {/if}
                {#if index == formsetData.length - 1 && formsetData.length < maxSize}
                    <button on:click={handleCreate}>Добавить</button>
                {:else if index < maxSize - 1}
                    <button on:click={handleGetNext}>След.</button>
                {/if}
            </div>
        </div>
        <slot name="header" />
    </svelte:fragment>
    {#if formsetData.length > 0}
        <slot form={formsetData[index]} />
    {/if}
</Form>

<style>
    .selector {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
    }

    .selector button {
        cursor: pointer;
    }

    .left {
        display: flex;
        align-items: center;
        width: 2rem;
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 0.5rem;
    }

    .store__status {
        width: 1rem;
        height: 1rem;
        background-color: #777;
        border-radius: 50%;
    }

    .active-store {
        background-color: hsl(214, 100%, 70%);
    }

    .status {
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
        gap: 0.5rem;
    }

    .delete {
        height: 100%;
        color: #777;
    }
</style>
