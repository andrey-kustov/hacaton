<template lang="html">
    <section>
        <b-container class="bv-example-row">
            <div class="defender-image">

            </div>
            <div class="defender-info-wrap">
                <div class="defender-info-item">
                    <div class="defender-info-title">
                        <p>Все ответы обезличены, документы не нужны</p>
                    </div>
                    <div class="defender-info-body">
                        <p>Наряду с переписчиками, которые будут иметь специализированные планшеты, заполнить переписной лист можно будет через Единый портал государственных услуг gosuslugi.ru и в центрах</p>
                    </div>
                </div>
                <div class="defender-info-item">
                    <div class="defender-info-title">
                        <p>Никто не узнает<br> твои секреты</p>
                    </div>
                    <div class="defender-info-body">
                        <p>Наряду с переписчиками, которые будут иметь специализированные планшеты, заполнить переписной лист можно будет через Единый портал государственных услуг gosuslugi.ru и в центрах</p>
                    </div>
                </div>
                <div class="defender-info-item">
                    <div class="defender-info-title">
                        <p>Пройти перепись можно самостоятельно</p>
                    </div>
                    <div class="defender-info-body">
                        <p>Наряду с переписчиками, которые будут иметь специализированные планшеты, заполнить переписной лист можно будет через Единый портал государственных услуг gosuslugi.ru и в центрах</p>
                    </div>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
export default {
    name: "defender-info-body"
}
</script>

<style lang="css" scoped>
    section {
        margin-top: 250px;
        background-color: #fff;
    }
    .defender-image {
        width: 84px;
        height: 98px;
        background-repeat: no-repeat;
        background-image: url('../../assets/defender.png');
        margin-bottom: 40px;
    }
    .defender-info-wrap {
        display: flex;
        align-items: flex-start;
    }
    .defender-info-item {
        width: 33%;
        padding-right: 100px;
    }
    .defender-info-title {
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 2px solid #FE5464;
    }
    .defender-info-title p {
        height: 60px;
        margin-bottom: 0;
    }
</style>
