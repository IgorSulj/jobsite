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
        <div class="insta-logo">
            <img src="{instaLogo}" alt="Лого Instagram">
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: black;
        padding: 20px 0;
        font-family: 'Geologica', sans-serif;
        font-size: 16px;
    }

    #elems {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .insta-logo img {
        width: 80px;
    }
</style>
