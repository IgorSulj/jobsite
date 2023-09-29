<script lang="ts">
    import Input from "./Input.svelte";
    import NoIcon from '$lib/img/NoIcon.svg'

    export let label: string
    export let files: FileList | undefined = undefined
    
    export let src: string = NoIcon
    
    $: {
        if (files && files[0]) {
            let reader = new FileReader()
            reader.onload = function() {
                if (this.result == null) return
                src = this.result as string
            }
            reader.readAsDataURL(files[0])
        } else {
            src = NoIcon
        }
    }
</script>

<Input {label}>
    <input type="file" bind:files>
    <div class="icon" class:not-empty={![NoIcon, ''].find(s => s == src)}>
        <img src={src || NoIcon} alt="Нет иконки">
    </div>
</Input>

<style>
    input {
        display: none;
    }

    .icon {
        cursor: pointer;
        border-radius: 0.625rem;
        overflow: hidden; /* cut image */
        display: flex;
        align-items: center;
    }
    
    .icon.not-empty {
        border: 2px solid #828282;
    }

    img {
        max-height: 10rem;
        object-fit: cover;
    }
</style>