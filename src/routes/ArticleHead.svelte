<script lang="ts">
    export let header: string
    export let img: string
    export let altImg: string = ''
</script>

<div id="header__bottom" class="limiter">
    <div class="flag side">
        <img src="{img}" alt={altImg}>
    </div>
    <div>{header}</div>
    <div class="side"></div>
</div>
    
<style>
    #header__bottom {
        display: flex;
        align-items: center;
        gap: 20px;
        font-family: var(--geologica);
        font-weight: 250;
        margin-bottom: 30px;
    }

    #header__bottom div {
        flex-basis: 0;
        flex-grow: 1;
    }

    #header__bottom div:nth-child(2) {
        text-transform: uppercase;
        font-family: 'Geologica', sans-serif;
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        flex-basis: auto;
    }

    .side {
        max-width: 80px;
        flex-basis: 0;
    }

    .flag img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 450px) {
        #header__bottom div:nth-child(2) {
            font-size: 32px;
        }

        .side {
            display: none;
        }
    }
</style>
