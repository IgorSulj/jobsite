<script>
    import ArticleHead from "../ArticleHead.svelte";
    import flag from '$lib/img/Flag_of_Europe.svg'
</script>

<svelte:head>
    <title>Работа в Европе</title>
</svelte:head>

<ArticleHead header="Работа в Европе" img={flag} altImg='Флаг Европы' />
<h1>Работа вахтой</h1>
<div id="content" class="limiter">
    <p class="offer">
        Хотите работать в Германии?
        Нет образования, нет языка, но есть опыт или желание? 
        Тогда это предложение для Вас.
    </p>
    <p class="requirements">Что необходимо для работы вахтой:</p>
    <ul id="requirements__list">
        <li>
            виза для въезда и подачи на ВНЖ Литвы 
            (стоимость визы, проезда и ВНЖ оплачивается самостоятельно);
        </li>
        <li>справка о несудимости с апостилем и переводом 
            (можем помочь с получением за доп. оплату);
        </li>
        <li>свидетельство о присвоении профессии/разряда, 
            диплом колледжа с необходимой профессией 
            (уточнять у менеджера +375256331908) с апостилем, 
            переводом на англ. язык, заверенный нотариально.
        </li>
    </ul>
    Поможем получить польскую рабочую или деловую визу. Стоимость от &euro;250.
    <p class="bold">
        Апостилирование и нотариальный перевод необходимых документов
        выполняется самостоятельно или оплачивается дополнительно.
    </p>
    <p>
        Для информации: работа на территории Германии, 
        наниматель Литва, работа от 3 месяцев. 
        При желании остаться в Германии - поможем легализоваться, 
        найти постоянную работу и оформить все необходимые документы. 
        Основные требования для трудоустройства на постоянную работу 
        можно узнать <a href="/" class="link">здесь</a> 
    </p>
</div>

<style>
    #content {
        text-align: justify;
        font-family: var(--geologica);
        line-height: 20px;
        margin-bottom: 30px;
    }

    .offer {
        font-size: 20px;
        color: red;
        font-weight: 700;
        margin-bottom: 30px;
    }

    .requirements {
        font-size: 16px;
    }

    #requirements__list {
        padding-left: 20px;
        margin-bottom: 30px;
    }

    #requirements__list li::marker {
        content: '- ';
    }

    .bold {
        font-weight: 700;
    }

    .link {
        color: black;
        font-weight: 700;
    }
</style>


