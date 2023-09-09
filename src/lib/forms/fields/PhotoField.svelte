<script lang="ts">
    import Input from "./Input.svelte";
    import NoIcon from '$lib/img/NoIcon.svg'

    export let label: string
    export let files: FileList | undefined = undefined
    
    let src: any = NoIcon
    
    $: {
        if (files && files[0]) {
            let reader = new FileReader()
            reader.onload = function() {
                console.log(this.result)
                src = this.result
            }
            reader.readAsDataURL(files[0])
        } else {
            src = NoIcon
        }
    }
</script>

<Input {label}>
    <input type="file" bind:files>
    <div class="icon">
        <img {src} alt="Нет иконки">
    </div>
</Input>

<style>
    input {
        display: none;
    }

    .icon {
        cursor: pointer;
        border: 2px solid #828282;
        border-radius: 0.625rem;
        overflow: hidden; /* cut image */
        display: flex;
        align-items: center;
    }

    img {
        max-height: 10rem;
        object-fit: cover;
    }
</style>