<script lang="ts">
    import Input from "./Input.svelte";

    export let label: string = ''
    export let value: string | undefined = undefined
</script>

<Input {label}>
    <select bind:value>
        <option value="not-married">
            Холост
        </option>
    </select>
</Input>
