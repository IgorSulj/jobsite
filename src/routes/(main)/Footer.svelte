<script>
    import instaLogo from '$lib/img/instaLogo.svg'
</script>

<footer>
    <div id="elems" class="limiter">
        <div id="description">
            <p>Частное унитарное предприятие по оказанию услуг ГрандАлира</p>
            <p>Республика Беларусь, г. Минск, пр. Партизанский, 81-507</p>
            <p>т. +375 25 633 19 08, г. т. +375 17 360 05 08</p>
            <p>grandalira@gmail.com</p>
        </div>
        <a href="https://www.instagram.com/rabotavsem.by/" class="insta-logo">
            <img src="{instaLogo}" alt="Лого Instagram">
        </a>
    </div>
</footer>

<style>
    footer {
        background-color: black;
        padding: 20px 0;
        font-family: var(--geologica);
        font-size: 16px;
        line-height: 20px;
    }

    #elems {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        align-items: center;
        color: white;
    }

    .insta-logo img {
        width: 80px;
    }
</style>
