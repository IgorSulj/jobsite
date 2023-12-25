<script lang="ts">
    import Input from "./Input.svelte";
    import { getDateNowString } from "./utils";

    export let label: string= ''
    export let value: string = '2000-01-01'
</script>

<div class="wrapper">
    <Input {label}>
        <input type="date"
         min="1900-01-01"
         max="{getDateNowString()}" 
         bind:value />
    </Input>
</div>

<style>
    .wrapper {
        width: 13rem;
    }
</style>
