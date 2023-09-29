<script lang="ts" generics="T">
    import { createEventDispatcher } from 'svelte'

    import type { Readable, Writable } from "svelte/store";
    import Form from "./Form.svelte";

    type ValidatedStore<T> = {
        raw: Writable<T>,
        valid: Readable<T | undefined>
    }

    export let dispatcher = createEventDispatcher<{
        onstorechange: Writable<T>
    }>()

    export let createStore: (index: number) => ValidatedStore<T>
    export let maxSize: number
    export let stores: ValidatedStore<T>[] = [createStore(0)]

    let index = 0
    $: currentStore = stores[index]
</script>
<Form>
    <svelte:fragment slot="header">
        <div class="selector">
            <div class="left">
                {#if index > 0}
                    <button on:click={() => {
                        dispatcher('onstorechange', stores[index - 1].raw);
                        index--
                    }}>&lt;</button>
                {/if}
            </div>

            <div class="status">
                {#each stores as _, i (i)}
                    <div class="store__status" class:active-store={i == index}></div>
                {/each}
            </div>
            <div class="right">
                {#if index == stores.length - 1 && stores.length < maxSize}
                    <button on:click={() => {
                        let newStore = createStore(index + 1)
                        dispatcher('onstorechange', newStore.raw)
                        stores.push(newStore)
                        index++
                    }}>+</button>
                {:else if index < maxSize - 1}
                    <button on:click={() => {
                        dispatcher('onstorechange', stores[index + 1].raw)
                        index++
                    }}>{">"}</button>
                {/if}
            </div>
        </div>
        <slot name="header" />
    </svelte:fragment>
    <slot current={currentStore.raw} />
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
        width: 2rem;
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
</style>
