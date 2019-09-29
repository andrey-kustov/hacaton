<template lang="html">
    <div class="question-block-wrap" ref="fieldset">
        <div class="question-block-item" :class="[ result ? 'success' : 'error']">
            <p>{{question}}</p>
            <b-form-group>
              <b-form-radio v-model="selected" checked="false" name="some-radios" @change="selectedRadio($event)" :value="true">Правда</b-form-radio>
              <span>|</span>
              <b-form-radio v-model="selected" checked="false" name="some-radios" @change="selectedRadio($event)" :value="false">Обман</b-form-radio>
            </b-form-group>
            <button v-if="visible" class="btn_next" type="button" @click="questionNext" name="button"></button>
        </div>
        <div class="answer-block-item" v-if="visible">
            <p>{{text}}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "question-block",
    data() {
      return {
        selected: '',
        visible: false,
        result: ''
      }
    },
    props: {
        question: {
            type: String,
            required: true
        },
        answer: {
            type: Boolean,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        selectedRadio(val) {
            this.$refs.fieldset.classList.add("active");

            if ( val == this.answer ) {
                this.result = true;
            } else {
                this.result = false;
            }
            this.visible = true;
        },
        questionNext() {
            this.$refs.fieldset.classList.remove("active");
            this.$emit('click', this.result);
            this.visible = false;
        }
    }
}
</script>

<style lang="css" scoped>
    .success {
        color: green;
    }
    .error {
        color: red;
    }
    .question-block-item {
        max-width: 466px;
        width: 100%;
        background-color: #fff;
        color: #000;
        padding: 20px 40px;
        margin-bottom: 20px;
    }
    .answer-block-item {
        position: relative;
        max-width: 466px;
        width: 100%;
        background-color: #fff;
        color: #000;
        padding: 20px 50px;
        margin-bottom: 20px;
    }
    .answer-block-item::before {
        position: absolute;
        content: '';
        position: absolute;
        top: -20px;
        left: 15px;
        border: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }
    .active .question-block-item.success {
        border: 8px solid #009A75;
    }
    .active .question-block-item.error {
        border: 8px solid #C02323;
    }
    .question-block-item {
        position: relative;
    }
    .active .question-block-item .btn_next {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        right: -8px;
        width: 32px;
        bottom: 0;
        cursor: pointer;
        border: 0;
        outline: 0;
    }
    .active .question-block-item .btn_next::before {
        cursor: pointer;
        background-image: url('../../assets/arrow.png');
        content: '';
        display: block;
        width: 13px;
        height: 20px;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -6.5px;
        margin-top: -10px;
        z-index: 1;
    }
    .active .question-block-item.success .btn_next {
        background-color: #009A75;
    }
    .active .question-block-item.error .btn_next {
        background-color: #C02323;
    }

</style>
