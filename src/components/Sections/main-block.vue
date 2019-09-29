<template lang="html">
    <section class="main_block_wrapper">
        <section class="title_page">
            <h1>ЗНАЕШЬ<br> СВОЮ СТРАНУ
                <vue-typer
                    :text='["?","!","..."]'
                    :pre-erase-delay='800'>
                </vue-typer>
            </h1>
            <div class="count_question">
                <span>{{count}}</span>
                <span>/</span>
                <span>5</span>
            </div>
        </section>
        <section class="online_test" v-if="visible">
            <div v-if="step === 1" class="online_test_item">
                <question-block
                    :key="`1`"
                    @click="handlerQuestion"
                    :question="`В 2020 году в России пройдет масштабная перепись всего населения страны`"
                    :answer="true"
                    :text="`Всероссийская перепись пройдет в период с 1 по 31 октября 2020 года на всей территории Российской Федерации`">
                </question-block>
            </div>
            <div v-if="step === 2" class="online_test_item">
                <question-block
                    :key="`2`"
                    @click="handlerQuestion"
                    :question="`Россия входит в пятерку крупнейших стран мира по численности населения`"
                    :answer="false"
                    :text="`По состоянию на 1 января 2019 года Россия занимает 9-е место в мире по численности населения. А вот по площади территории – России нет равных в мире`">
                </question-block>
            </div>
            <div v-if="step === 3" class="online_test_item">
                <question-block
                    :key="`3`"
                    @click="handlerQuestion"
                    :question="`За последние 10 лет продолжительность жизни в России выросла на 5 лет`"
                    :answer="true"
                    :text="`В 2018 году продолжительность жизни составила 73 года, что на 5 лет больше, чем в 2008 году.  Продолжительность жизни женщин в России примерно на 10 лет больше, чем у мужчин.`">
                </question-block>
            </div>
            <div v-if="step === 4" class="online_test_item">
                <question-block
                    :key="`4`"
                    @click="handlerQuestion"
                    :question="`В России две трети населения проживают в сельской местности`"
                    :answer="false"
                    :text="`По состоянию 1 января 2019 года 74,6% населения проживают в городах.
                            С 2001 года численность сельского населения сократилась на 1,9 млн. человек.`">
                </question-block>
            </div>
            <div v-if="step === 5" class="online_test_item">
                <question-block
                    :key="`5`"
                    @click="handlerQuestion"
                    :question="`Собранные по итогам переписи персональные данные используются для доначисления налогов `"
                    :answer="false"
                    :text="`Данные собираются в обезличенном виде, полностью конфиденциальны и не подлежат перепроверке. Передача данных в какие-либо ведомства запрещена законом, они обрабатываются только Росстатом и используются для корректировки дальнейшей государственной политики`">
                </question-block>
            </div>

        </section>
        <section v-if="!visible">
            <div class="result">
                <p>Ваш результат: {{this.total}}%</p>
            </div>
        </section>
    </section>
</template>

<script>
import QuestionBlock from "@/components/Tests/question-block"

export default {
    name: "main-block",
    components: {
        "question-block" : QuestionBlock
    },
    data() {
        return {
            step: 1,
            count: 1,
            visible: true,
            success: 0,
            total: 0
        }
    },
    methods: {
        handlerQuestion(result) {
            if ( result ) {
                this.success ++
            }

            if ( this.step !== 5 ) {

                this.count ++
                this.step ++
            } else if ( this.step == 5 ) {
                this.count = 5;
                this.step = 5;
                this.visible = false;
                this.total = this.success/5 * 100;
                console.log(this.success)
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .result {
        font-size: 70px;
        line-height: 88px;
        color: #fff;
    }
    .title_page {

    }
    .title_page h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 72px;
        line-height: 88px;
        color: #fff;
    }
    .count_question {
        margin-top: 40px;
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: bold;
        font-size: 140px;
        line-height: 140px;
        color: #fff;
        width: 250px;
        justify-content: space-between;
    }
    .count_question span {

    }
    .title_page h1 span {
        color: #fff;
    }
    .main_block_wrapper {
        display: flex;
        background-image: url('../../assets/main.jpg');
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        width: 100%;
        height: 80vh;
        padding: 104px 20px 246px 113px;
    }
    .title_page {
        width: 50%;
        padding-right: 15px;
    }
    .online_test {
        width: 50%;
        padding-left: 15px;
    }
</style>
