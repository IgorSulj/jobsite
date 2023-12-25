<script context="module" lang="ts">
    const options = [
        'not-married'
    ] as const

    export type FamilyStatus = (typeof options)[number]
</script>

<script lang="ts">
    import Input from "./Input.svelte";


    export let label: string = ''
    export let value: FamilyStatus = 'not-married'
</script>


<Input {label}>
    <select bind:value>
        <option value="not-married">
            Холост
        </option>
    </select>
</Input>
