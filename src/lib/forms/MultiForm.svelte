<script lang="ts" generics="T">
    import { createEventDispatcher } from 'svelte'
    import DeleteIcon from '$lib/img/form/delete.svg'

    import Form from "./Form.svelte";

    export let createDefault: (index: number) => T
    export let maxSize: number = Infinity

    let formsetData: T[] = [createDefault(0)]
    let index = 0
    export let guard: (value: T) => string[] = () => []
    $: errors = guard(formsetData[index])

    export let dispatch = createEventDispatcher<{
        onindexchange: T
    }>()

    export function collect() {
        return formsetData.find(elem => guard(elem).length == 0) ? formsetData : undefined
    }

    export function update(value: T) {
        formsetData[index] = value
        formsetData = formsetData
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
                <div class="delete">
                    <img src={DeleteIcon} alt="Удалить">
                </div>
                {#if index == formsetData.length - 1 && formsetData.length < maxSize}
                    <button on:click={() => {
                        formsetData.push(createDefault(index + 1))
                        dispatch('onindexchange', formsetData[index + 1])
                        index++
                    }}>+</button>
                {:else if index < maxSize - 1}
                    <button on:click={() => {
                        dispatch('onindexchange', formsetData[index + 1])
                        index++
                    }}>{">"}</button>
                {/if}
            </div>
        </div>
        <slot name="header" />
    </svelte:fragment>
    <slot current={formsetData[index]} />
</Form>

<style>
    .selector {
        display: flex;
    }

    .selector button {
        border: none;
        background-color: transparent;
        color: #777;
        font-size: 2rem;
        cursor: pointer;
    }

    .left {
        width: 2rem;
    }

    .right {
        display: flex;
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
        aspect-ratio: 1 / 1;
        height: 100%;
        position: relative;
    }

    .delete img {
        width: 100%;
        height: 100%;
    }
</style>
