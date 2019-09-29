<template lang="html">
    <div class="information_section">
        <b-container class="bv-example-row">
            <div class="info-title">
                <p>Чтобы собрать подробную статистику о жителях нашей <br>страны проводят всероссийскую</p>
            </div>
            <div class="title-page">
                <span class="text">ПЕРЕПИСЬ НАСЕЛЕНИЯ</span>
                <span class="count">2020</span>
            </div>
            <div class="information-wrapper">
                <div class="item-info-wrapper">
                    <div class="item-info" @click="visibleInfp(1)">
                        <span class="step">1</span>
                        <p>Перепись населения регулярно проводится во всех развитых странах мира. Первая перепись в России проведена в 1897 году. ПО рекомендации ООН перепись проводится с интервалом раз в 10 лет.</p>
                    </div>
                    <div class="item-info" @click="visibleInfp(2)">
                        <span class="step">2</span>
                        <p>Процедура переписи займет не более 20 минут. Принять участие в переписи можно в любое удобное для Вас время. На портале <a href="gosuslugi.ru">gosuslugi.ru</a> опросные листы можно заполнять в несколько приемов, сохроняя уже внесенную информацию</p>
                    </div>
                    <div class="item-info" @click="visibleInfp(3)">
                        <span class="step">3</span>
                        <p>В России принять участие в переписи можно 3 способами: - самостоятельно на портале <a href="gosuslugi.ru">gosuslugi.ru</a> - при поквартирном обходе переписчиком - на ближайшем стационарном опросном пункте</p>
                    </div>
                </div>
                <div class="text-info-wrapper">
                    <div v-if="step == 1" class="text-info">
                        <div class="img-block"></div>
                        <p>Всероссийская перепись населения пройдет с 1 по 31 октября 2020 года. Первые итоги переписи будут подведены уже в декабре 2020 года, окончательные – в 2022 году. При обработке результатов переписи впервые будут использованы технологии анализа Big data. Это позволит повысить качество и точность результатов, оценить ситуацию в динамике.</p>
                    </div>
                    <div v-else-if="step == 2" class="text-info">
                        <div class="img-block"></div>
                        <p>Всероссийская перепись населения пройдет с 1 по 31 октября 2020 года. Первые итоги переписи будут подведены уже в декабре 2020 года, окончательные – в 2022 году. При обработке результатов переписи впервые будут использованы технологии анализа Big data. Это позволит повысить качество и точность результатов, оценить ситуацию в динамике.</p>
                    </div>
                    <div v-else-if="step == 3" class="text-info">
                        <div class="img-block"></div>
                        <p>Всероссийская перепись населения пройдет с 1 по 31 октября 2020 года. Первые итоги переписи будут подведены уже в декабре 2020 года, окончательные – в 2022 году. При обработке результатов переписи впервые будут использованы технологии анализа Big data. Это позволит повысить качество и точность результатов, оценить ситуацию в динамике.</p>
                    </div>
                    <button type="button" name="button">Стать переписчиком</button>
                </div>
            </div>

            <div class="map-search-wrapper">
                <div class="image-png">

                </div>
                <div class="title-search-map">
                    <p>Опросные пункты на карте:</p>
                </div>
                <div class="map-image">
                    <div class="info-map">
                        <span class="number">№ 245</span>
                        <span class="name_center">Многофункциональный центр предоставления государственных и муниципальных услуг в Республике Татарстан</span>
                        <span class="adress">Ямашева проспект, 82</span>
                        <span class="work_time">Открыто 08:00–18:00 <br>по будням</span>
                        <span class="start_time">! Старт переписи 1 октября 2020 года</span>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "info-census",
    data() {
        return {
            step: 1
        }
    },
    methods: {
        visibleInfp(val) {
            this.step = val;
        }
    }
}
</script>

<style lang="css" scoped>
    .text-info-wrapper .img-block {
        background-image: url('../../assets/infor.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 293px;
        margin-bottom: 25px;
    }
    .info-map {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 468px;
        background-color: #1D1D1D;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 24px;
        color: #fff;
    }
    .info-map span {
        display: block;
    }
    .info-map .number {
        margin-bottom: 20px;
    }
    .info-map .name_center {
        margin-bottom: 20px;
    }
    .info-map .adress {
        margin-bottom: 20px;
    }
    .info-map .work_time {
        margin-bottom: 20px;
    }
    .info-map .start_time {
        margin-bottom: 20px;
        color: #FE5464;
    }
    .map-search-wrapper .map-image {
        position: absolute;
        background-repeat: no-repeat;
        background-image: url('../../assets/mapnew.png');
        bottom: -192px;
        width: 1044px;
        height: 384px;
    }
    .map-search-wrapper .image-png {
        width: 84px;
        height: 84px;
        background-repeat: no-repeat;
        background-image: url('../../assets/search.png');
        margin-bottom: 40px;
    }
    .title-search-map {
        margin-bottom: 140px;
    }
    .information-wrapper {
        display: flex;
        margin-bottom: 64px;
    }
    .item-info-wrapper {
        width: 50%;
        padding-right: 35px;
    }
    .text-info-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding-left: 35px;
    }
    .text-info-wrapper button {
        margin-top: auto;
        width: 276px;
        height: 56px;
        background: #FE5464;
        color: #fff;
        text-align: center;
        border: 0;

    }
    .item-info {
        background-color: #fff;
        padding: 32px;
        margin-bottom: 48px;
        cursor: pointer;
        position: relative;
    }
    .item-info:last-child {
        margin-bottom: 0;
    }
    .text-info p {
        color: #000;
    }
    .item-info .step {
        position: absolute;
        top: -24px;
        left: -24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FE5464;
        color: #fff;
        width: 48px;
        height: 48px;
    }
    .info-title {
        font-size: 20px;
        line-height: 28px;
        color: #1D1D1D;
        margin-bottom: 17px;
    }
    .title-page {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
    }
    .title-page span {
        width: 50%;
    }
    .title-page span.text {
        font-weight: bold;
        font-size: 72px;
        line-height: 88px;
        padding-left: 80px;

    }
    .title-page span.count {
        font-weight: bold;
        font-size: 180px;
        line-height: 180px;
        color: #FE5464;
    }
    .information_section {
        background-color: #F2F2F2;
        position: relative;
        padding-top: 70px;
        padding-bottom: 70px;
    }
</style>
