<template lang="html">
    <div class="sad">
        <!-- <span>{{legendChart}}</span> -->
        <pie-chart :options="options" :chart-data="chartData" :styles="myStyles"></pie-chart>
    </div>
</template>

<script>
import PieChart from "@/components/Charts/pie-chart"
export default {
    name: "pie-diagramm",
    components: {
        "pie-chart" : PieChart,
    },
    props: {
        dataBar: {
            type: Array
        },
        labelCity: {
            type: String
        }
    },
    data() {
        return {
            dataPerepis: null,
            chartData: null,
            myStyles: {
                height: 300 + 'px',
                width: 100 + '%'
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    created() {
        this.chartData = {
        labels: [this.labelCity, 'Москва'],
        datasets: [
          {
            backgroundColor: ["#FE5464", "#5F3E6A"],
            data: this.dataBar
          }
        ]
      };
    },
    methods: {

    }
}
</script>

<style lang="css" scoped>
    .sad {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
