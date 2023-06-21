<script>
    import Banner from "$lib/components/Banner.svelte";
    import BannerHeader from "$lib/components/BannerHeader.svelte";
    import BannerItem from "$lib/components/BannerItem.svelte";
    import Openable from "$lib/components/Openable.svelte";
    import flag from '$lib/img/Flag_of_Europe.svg'
</script>

<div class="limiter">
    <Banner flag={flag}>
        <BannerHeader slot="header">
            Работа в Германии вахтой 3-6 месяцев
        </BannerHeader>
        <BannerItem>
            Рост заработной платы по результатам труда. 
            Возможность претендовать на постоянную работу по 
            немецкой визе D.
        </BannerItem>
        <BannerItem>
            Нет жесткого ограничения по возрасту.
            Знание немецкого языка приветствуется, но необязательно.
        </BannerItem>
        <BannerItem>
            Достаточно курсов 1-3 месяца (присвоение разряда или профессии). 
            Есть опыт работы, желание обучаться и работать.
        </BannerItem>
        <BannerItem>
            Долгосрочное сотрудничество и постоянная занятость у литовского работодателя, 
            ВНЖ и другие необходимые документы для работы.
        </BannerItem>
    </Banner>

    <div id="bottom-list">
        <Openable>
            <h2 class="bottom-list__header" slot="header">
                Требования к соискателю работы
            </h2>
            <ol class="bottom-list__list" slot="text">
                <li>1. Возраст от 18 до 55 лет;</li>
                <li>2. Курсы 1-3 месяца или ПТУ (колледж);</li>
                <li>
                    3. Отсутствие вредных привычек, 
                    умение работать в команде и 
                    самостоятельно;
                </li>
                <li>
                    4. Опыт работы по вакантной профессии
                     или желание обучаться.
                </li>
            </ol>
        </Openable>
        <Openable>
            <h2 class="bottom-list__header" slot="header">
                Документы, необходимые для подачи на ВНЖ Литвы
            </h2>
            <ol class="bottom-list__list" slot="text">
                <li>
                    1. Свидетельство (диплом) с апостилем и 
                    переводом на английский язык, заверенное нотариально.
                </li>
                <li>
                    2. Справка о несудимости с апостилем и переводом на литовский язык. 
                    Справка действительна 6 месяцев со дня выдачи.
                </li>
                <li>
                    3. Справка о том, что вы работали по профессии с переводом на литовский язык 
                    (уточнить у менеджера форму справки +375256331908).
                </li>
                <br>
                <li>
                    *Мы можем помочь в получении данных документов - 
                    по оплате уточнять дополнительно.
                </li>
            </ol>
        </Openable>
        <Openable>
            <h2 class="bottom-list__header" slot="header">
                Что необходимо оплатить
            </h2>
            <div class="payment-list" slot="text">
                Самостоятельно оплачиваются следующие расходы
                <ul class="bottom-list__list">
                    <li>виза для въезда (помощь в получении при необходимости);</li>
                    <li>страховка;</li>
                    <li>
                        документы для ВНЖ 
                        (можем помочь с получением документов, проставлением апостиля, 
                        нотариальный перевод);
                    </li>
                    <li>пошлина за получение ВНЖ (оплачивается при подаче на ВНЖ самостоятельно);</li>
                    <li>билеты Беларусь-Германия-Беларусь (у нас можно забронировать прямой рейс).</li>
                </ul>
            </div>
        </Openable>
    </div>
</div>

<style>
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

    .bottom-list__list, .payment-list {
        font-family: var(--geologica);
        font-weight: 250;
        font-size: 24px;
    }

    .payment-list .bottom-list__list {
        list-style-type: disc;
        margin-left: 25px;
    }
</style>
