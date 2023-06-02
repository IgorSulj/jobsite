<script>
    import flag from 'src/lib/img/GermanyFlag.svg'
</script>

<div id="header__bottom" class="limiter">
    <div class="flag">
        <img src="{flag}" alt="Флаг Германии">
    </div>
    <div>Работа в Европе</div>
    <div class="phones">
        ПОЗВОНИТЕ или НАПИШИТЕ НАМ
        <span class="bold">+375 (17) 360-05-08</span>
        <span class="bold">+375 (25) 633-19-08</span>
    </div>
</div>

<style>
    #header__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Geologica', sans-serif;
        font-weight: 100;
        margin-bottom: 30px;
    }

    #header__bottom div:nth-child(2) {
        text-transform: uppercase;
        font-family: 'Geologica', sans-serif;
        font-size: 36px;
        font-weight: 700;
    }

    .flag {
        width: 70px;
    }

    .flag img {
        width: 100%;
        height: 100%;
    }

    .phones {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    span.bold {
        font-size: 18px;
        font-weight: 700;
    }
</style>
