<script lang="ts">
    import arrowForward from '$lib/img/form/arrowForward.png'
</script>

<div class="wrapper">
    <button>
        <p>Далее</p>
        <div class="icon">
            <img src={arrowForward} alt="arrow forward">
        </div>
    </button>
</div>

<style>

    button {
        display: flex;
        gap: 0.625rem;
        border-radius: 0.625rem;
        background: var(--blue);
        align-items: center;
        padding: 0.625rem;
        border: none;
        float: right;
    }

    button:hover {
        filter: brightness(90%);
    }

    button:active {
        filter: brightness(80%);
    }

    p {
        margin: 0;
        font-family: var(--geologica);
        font-size: 1.5rem;
        font-weight: 500;
        color: white;
        border: none;
        outline: none;
    }

    button {
        flex-grow: 0;
        width: auto;
    }
</style>
