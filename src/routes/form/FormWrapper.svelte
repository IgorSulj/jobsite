<script lang="ts">
    import { type FormStep, getLocalStorageStore } from "./forms";
    import Personal from "$lib/forms/Personal.svelte";
</script>

<div class="wrapper">
    <Personal store={getLocalStorageStore("form:personal", {})} />
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
    }
</style>
