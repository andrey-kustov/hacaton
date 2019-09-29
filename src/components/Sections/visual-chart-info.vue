<template lang="html">
    <section>
        <div class="visual_chart_info">
            <div class="parametrs_info">
                <p>Параметры</p>
            </div>
            <div class="wrapper-charts">
                <line-chart></line-chart>
            </div>
            <div class="wrapper-charts">
                <bar-chart></bar-chart>
            </div>
            <div class="wrapper-charts">
                <pie-chart></pie-chart>
            </div>
        </div>
    </section>
</template>

<script>

import LineChart from "@/components/Charts/line-chart"
import BarChart from "@/components/Charts/bar-chart"
import PieChart from "@/components/Charts/pie-chart"

export default {
    name: "visual-chart-info",
    components: {
        "line-chart" : LineChart,
        "bar-chart" : BarChart,
        "pie-chart" : PieChart
    }
}
</script>

<style lang="css" scoped>

.wrapper-charts {
    width: 300px;
    height: 300px;
}

</style>
