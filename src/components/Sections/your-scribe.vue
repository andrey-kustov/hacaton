<template lang="html">
    <section>
        <b-container class="bv-example-row">
            <div class="title-scribe">
                <span>Узнай своего переписчика</span>
            </div>
            <div class="scribe_item_wrap">
                <div class="scribe_item_header">
                    <div class="search">
                        <v-select :placeholder="`ID переписчика`" v-model="selected" @input="selectScribe" :options="['12315134', '45434345']"></v-select>
                    </div>
                    <button type="button" @click="resultScribe" name="button">Проверить</button>
                </div>
                <div class="scribe_item_body" :key="`1`" v-if="visible && selected == '12315134'">
                    <div class="">
                        <img src="../../assets/image.jpg" alt="">
                    </div>
                    <div class="scribe_info">
                        <div class="info_top">
                            <span>Госленко</span>
                            <span>Руслан</span>
                            <span>Степанович</span>
                        </div>
                        <div class="info_bottom">
                            <span>Тюменский район</span>
                        </div>
                    </div>
                </div>
                <div class="scribe_item_body" :key="`2`"  v-else-if="visible && selected == '45434345'">
                    <div class="">
                        <img src="../../assets/chel.jpg" alt="">
                    </div>
                    <div class="scribe_info">
                        <div class="info_top">
                            <span>Прытков</span>
                            <span>Роман</span>
                            <span>Петрович</span>
                        </div>
                        <div class="info_bottom">
                            <span>Тюменский район</span>
                        </div>
                    </div>
                </div>
            </div>

        </b-container>
    </section>
</template>

<script>
export default {
    name: "yout-scribe",
    data() {
        return {
            selected: '',
            visible: false
        }
    },
    methods: {
        resultScribe() {
            this.visible = true;
        },
        selectScribe(val) {
            this.visible = false;
        }
    }
}
</script>

<style lang="css" scoped>
    section {
        margin-top: 64px;
        margin-bottom: 120px;
    }
    .search {
        max-width: 369px;
        width: 100%;
        z-index: 10;
        position: relative;
    }
    .title-scribe {
        margin-bottom: 25px;
    }
    .title-scribe span {
        display: block;
        color: #FE5464;
    }
    .scribe_item_wrap {

    }
    .scribe_item_header {
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;
    }
    .scribe_item_header button {
        margin-top: auto;
        width: 276px;
        height: 56px;
        background: #FE5464;
        color: #fff;
        text-align: center;
        border: 0;
        margin-left: 35px;
    }
    .scribe_item_body {
        display: flex;
        align-items: flex-start;
    }
    .scribe_item_body .scribe_info .info_top span {
        display: block;
        line-height: 28px;
    }
    .scribe_item_body .scribe_info {
        display: flex;
        flex-direction: column;
        height: 180px;
        margin-left: 30px;
    }
    .scribe_item_body .scribe_info .info_bottom {
        margin-top: auto;
    }
</style>
