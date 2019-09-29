<template lang="html">
    <section>
        <div class="vector-image">
            <img src="../../assets/Vector2.png" alt="">
        </div>
        <b-container class="bv-example-row">
            <div class="title-result-block">
                <span>ВЛИЯНИЕ РЕЗУЛЬТАТОВ<br> ПЕРЕПИСИ НАСЕЛЕНИЯ</span>
            </div>
            <div class="your-result-wrap">
                <b-row>
                    <b-col cols="6">
                        <div class="your-result-item">
                            <div class="title-item">
                                <span>Социально-демографические характеристики</span>
                            </div>
                            <ul>
                                <li>Строительство детских садов</li>
                                <li>Строительство школ</li>
                                <li>Обустройство общественных пространств</li>
                            </ul>
                        </div>
                    </b-col>
                    <b-col cols="6">
                        <div class="your-result-item">
                            <div class="title-item">
                                <span>Занятость</span>
                            </div>
                            <ul>
                                <li>Меры государственной поддержки бизнеса</li>
                                <li>Величина прожиточного минимума</li>
                                <li>Строительство дорог</li>
                                <li>Количество бюджетных мест</li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <div class="your-result-item">
                            <div class="title-item">
                                <span>Жилищные условия</span>
                            </div>
                            <ul>
                                <li>Льготные условия ипотечного кредитования</li>
                                <li>Создание городских агломераций</li>
                                <li>Тарифы ЖКХ</li>
                            </ul>
                        </div>
                    </b-col>
                    <b-col cols="6">
                        <div class="your-result-item">
                            <div class="title-item">
                                <span>Образование</span>
                            </div>
                            <ul>
                                <li>Количество бюджетных мест</li>
                                <li>Инвестполитика</li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <div class="your-result-item">
                            <div class="title-item">
                                <span>Источник средств к существованию</span>
                            </div>
                            <ul>
                                <li>Меры государственной поддержки бизнеса</li>
                                <li>Величина прожиточного минумума</li>
                                <li>Меры социальной поддрежки населения</li>
                            </ul>
                        </div>
                    </b-col>
                    <b-col cols="6">
                        <div class="your-result-item">
                            <div class="title-item">
                                <span>Национальная принадлежность, гражанство, миграция, владения языками</span>
                            </div>
                            <ul>
                                <li>Сохранение культурных ценностей</li>
                                <li>Государственная поддержка СМИ</li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <div class="banner-wrap">
            <span>ДОСТОВЕРЕНЫЕ ОТВЕТЫ<br>ОПРЕДЕЛЯЮТ ОБРАЗ БУДУЩЕГО<br>ТВОЕЙ СТРАНЫ</span>
        </div>
    </section>
</template>

<script>

export default {
    name: "result-block",
    data() {
        return {

        }
    }
}
</script>

<style lang="css" scoped>
    section {
        position: relative;
    }
    .vector-image {
        position: absolute;
        top: -100px;
        left: 0;
        right: 0;
        height: 275px;
        z-index: 1;
    }
    .vector-image img {
        height: 100%;
        width: 100%;
    }
    .title-result-block {
        text-align: right;
        margin-bottom: 60px;
        position: relative;
        z-index: 2;
    }
    .title-result-block span {
        font-size: 72px;
        line-height: 88px;
        font-weight: bold;
    }
    .your-result-item {
        margin-bottom: 40px;
    }
    .your-result-item ul {
        margin: 0;
        margin-left: 25px;
        padding: 0;
        list-style-type: none;
    }
    .your-result-item ul li::before {
        content: '';
        border-radius: 50%;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        left: -25px;
        background-color: #FE5464;
    }
    .your-result-item ul li {
        position: relative;

    }
    .title-item {
        margin-bottom: 25px;
    }
    .title-item span {

    }
    .banner-wrap {
        margin-top: 40px;
        background-image: url('../../assets/image2.jpg');
        background-position: top;
        background-repeat: no-repeat;
        width: 100%;
        background-size: cover;
        height: 480px;
        display: flex;
        padding: 0 96px;
    }
    .banner-wrap span {
        margin-top: auto;
        text-align: right;
        margin-left: auto;
        font-weight: bold;
        font-size: 48px;
        line-height: 64px;
        color: #FE5464;
        margin-bottom: 30px;
    }
</style>
