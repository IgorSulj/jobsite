<script lang="ts">
    export let flag: string
</script>

<div id="banner__wrapper">
    <div id="banner">
        <div id="flag">
            <img src="{flag}" alt="">
        </div>
        <div id="banner__left">
            <slot name="header"></slot>
        </div>
        <div id="banner__right">
            <slot></slot>
        </div>
    </div>
</div>

<style>
    #banner__wrapper {
        max-width: 1400px;
        margin: 0 auto 40px;
    }

    #banner {
        position: relative;
        background-color: var(--brown);
        border-radius: 20px;
        display: flex;
        gap: 50px;
        justify-content: space-between;
    }

    #flag {
        display: flex;
        height: 65px;
        border-left: 1px solid black;
        position: absolute;
        left: 60px;
        transform-origin: top center;
        transform: rotate(180deg);
    }

    #flag img {
        align-self: flex-end;
        height: 35px;
        transform: rotate(180deg);
    }

    #banner__left {
        flex-basis: 430px;
        height: 600px;
        padding: 68px 0 68px 68px;
        font-family: var(--geologica);
        font-weight: 500;
        font-size: 36px;
    }

    #banner__right {
        flex-basis: 800px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 50px 70px 50px 0;
    }

    @media (max-width: 1000px) {
        #banner {
            flex-direction: column;
            gap: 20px;
        }

        #banner__left {
            height: auto;
            flex-basis: auto;
            padding: 68px 50px 0;
            text-align: center;
            font-size: 32px;
        }

        #banner__right {
            padding: 0 50px 70px;
            flex-basis: auto;
        }
    }

    @media (max-width: 800px) {
        #banner__left {
            padding: 68px 20px 0;
        }
        #banner__right {
            padding: 0 50px;
            margin-bottom: 70px;
            grid-template-columns: 1fr;
        }
    }
</style>
