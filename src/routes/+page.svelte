<script>
    import Openable from '$lib/components/Openable.svelte';
import check from '$lib/img/check.svg'
</script>

<div class="limiter" id="main-content">

    <div id="banner">
        <div id="banner__left">
            <h2>Работа в Германии по немецкой визе D</h2>
        </div>
        <div id="banner__right">
            <div class="point">
                <div><img src="{check}" alt="Галка"></div>
                <p>
                    Легальная работа у прямого работодателя в Германии:
                    контракты от 1 года, мед. страховка, возможность забрать семью.
                </p>
            </div>
            <div class="point">
                <div><img src="{check}" alt="Галка"></div>
                <p>
                    Возможность подтвердить профессионально-техническое,
                    средне-специальное или высшее образование.
                </p>
            </div>
            <div class="point">
                <div><img src="{check}" alt="Галка"></div>
                <p>Возможность карьерного роста и роста заработной платы.</p>
            </div>
            <div class="point">
                <div><img src="{check}" alt="Галка"></div>
                <p>
                    Через 6 месяцев Вы получите немецкое ВНЖ, 
                    через 5 лет - возможность претендовать на ПМЖ.
                </p>
            </div>
        </div>
    </div>
    <div id="bottom-list">
        <Openable>
            <h3 class="bottom-list__header" slot="header">Требования к соискателю работы</h3>
            <ol class="bottom-list__list" slot="text">
                <li>1. Возраст от 18 до 43 лет;</li>
                <li>2. Оконченное образование от 1 года (лицей, ПТУ, колледж, ВУЗ);</li>
                <li>3. Немецкий язык, требуемый консульским учреждением и работодателем (минимальный уровень А1-А2);</li>
                <li>4. Опыт по полученному образованию или в смежной профессии.</li>
            </ol>
        </Openable>
        <Openable>
            <h3 class="bottom-list__header" slot="header">Документы, необходимые для подачи на рабочую Визу D</h3>
            <ol class="bottom-list__list" slot="text">
                <li>
                    1. <span class="blue-bold">Апостиль на диплом и выписку.</span> 
                    Проставляет Департамент контроля качества образования 
                    Министерства образования Республики Беларусь по адресу ул. Козлова 28, 
                    Минск, время работы: будние дни с 08:00 до 12:00. 
                    Стоимость 5 базовых величин за 1 документ;
                </li>
                <li>
                    2. <span class="blue-bold">Перевод на немецкий язык диплома, 
                    выписки к диплому, трудовой.</span>
                    Необходим нотариальный перевод;
                </li>
                <li>
                    3. <span class="blue-bold">Нотариально заверить документы и перевод на немецкий язык</span> 
                    (диплом, выписка, трудовая, паспорт). 
                    Может выполнить любая нотариальная контора;
                </li>
                <li>4. <span class="blue-bold">Справка из учебного заведения (лицей, ПТУ, колледж)</span>, что вы обучались.</li>
                <br>
                <li>
                    *Если мы занимаемся документами из пункта 1 
                    (кроме справки из учебного заведения) - оплата 200 бел. руб.
                </li>
            </ol>
        </Openable>
        <Openable>
            <h3 class="bottom-list__header" slot="header">Что необходимо оплатить</h3>
            <ol class="bottom-list__list" slot="text">
                <li>
                    1. Наши услуги в размере €600 по курсу НБ РБ на день оплаты для граждан 
                    Республики Беларусь. 
                    Для граждан других государств с любым образованием уточнять у менеджера;
                </li>
                <li>
                    2. Визу D - €75 (оплата лично в Посольстве), 
                    страховку на 30 дней для въезда и 3 фото для Посольства.
                </li>
            </ol>
        </Openable>
    </div>
</div>

<style>
    #banner {
        background-color: var(--brown);
        border-radius: 20px;
        max-width: 1400px;
        margin: 0 auto 40px;
        display: flex;
        justify-content: space-between;
    }

    #banner__left {
        font-family: var(--geologica);
        font-weight: 500;
        font-size: 36px;
        flex-basis: 430px;
        height: 600px;
        padding: 68px 0 68px 68px;
    }

    #banner__right {
        height: 600px;
        flex-basis: 780px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
        padding: 50px 70px 50px 0;
    }

    .point {
        display: flex;
    }

    .point div {
        margin-top: 16px;
    }

    .point p {
        margin-top: 28px;
        font-family: var(--geologica);
        font-weight: 250;
        font-size: 24px;
    }

    #bottom-list {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto 40px;
    }

    .bottom-list__header {
        font-family: var(--geologica);
        font-weight: 500;
        font-size: 36px;
    }

    .bottom-list__list {
        font-family: var(--geologica);
        font-weight: 250;
        font-size: 24px;
    }

    .blue-bold {
        color: var(--blue);
        font-weight: 500;
    }
</style>
