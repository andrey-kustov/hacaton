<template>
    <div id="app">
        <main-block></main-block>
        <where-from></where-from>
        <info-census></info-census>
        <defender-block></defender-block>
        <your-scribe></your-scribe>
        <result-block></result-block>
        <subscribe-block></subscribe-block>
    </div>
</template>

<script>
import MainBlock from "@/components/Sections/main-block"
import VisualChartInfo from "@/components/Sections/visual-chart-info"
import InfoCensus from "@/components/Sections/info-census"
import WhereFrom from "@/components/Sections/where-from"
import DefenderBlock from "@/components/Sections/defender-block"
import YourScribe from "@/components/Sections/your-scribe"
import ResultBlock from "@/components/Sections/result-block"
import SubscribeBlock from "@/components/Sections/subscribe-block"

export default {
    name: 'App',
    components: {
        "main-block" : MainBlock,
        "visual-chart-info" : VisualChartInfo,
        "info-census" : InfoCensus,
        "where-from" : WhereFrom,
        "defender-block" : DefenderBlock,
        "your-scribe" : YourScribe,
        "result-block" : ResultBlock,
        "subscribe-block" : SubscribeBlock
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap&subset=cyrillic');

    html, body {
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        color: #000;
        font-weight: 400;
    }
    #app {
      font-family: 'Oswald', sans-serif;
    }
    /* #line-chart {
        height: 300px !important;
        width: 900px !important;
    } */
    .vue-typer .custom.caret {
        width: 3px;
    }
    .vue-typer .custom.char.typed {
      color: #fff;
    }
    .question-block-wrap .form-group > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 200px;
        margin: 0 auto;
    }
    .question-block-wrap .custom-radio.noactive .custom-control-input ~ .custom-control-label {
        color: rgba(29, 29, 29, 0.2);
    }
    .question-block-wrap .custom-control {
        padding: 0;
    }

    .question-block-item .custom-control-input ~ .custom-control-label {
        color: #000;
        cursor: pointer;
    }
    .active .question-block-item .custom-control-input ~ .custom-control-label {
        color: rgba(29, 29, 29, 0.2);
    }
    .active .question-block-item .custom-control-input:checked ~ .custom-control-label {
        color: #000;
    }

    .question-block-wrap .custom-control-input:hover ~ .custom-control-label::before {
        position: absolute;
        border-radius: 0;
        left: 0;
        display: block;
        outline: 0;
        border: 0;
        height: 3px;
        top: inherit;
        bottom: 0;
        width: 100%;
    }
    .question-block-wrap .custom-control-input:checked ~ .custom-control-label::before {
        position: absolute;
        border-radius: 0;
        left: 0;
        display: block;
        outline: 0;
        border: 0;
        height: 3px;
        top: inherit;
        bottom: 0;
        width: 100%;
    }
    .question-block-wrap .custom-control-input:focus ~ .custom-control-label::before {
        box-shadow: none;
    }
    .question-block-wrap .custom-radio .custom-control-label::before {
        display: none;
    }
    .question-block-wrap .custom-control-label::after {
        display: none;
    }
    .custom-control-input:checked ~ .custom-control-label::after {
        display: none;
    }

    .vs__dropdown-toggle {
        border: 0px;
        border-bottom: 1px solid #000;
        border-radius: 0px;
    }
</style>
