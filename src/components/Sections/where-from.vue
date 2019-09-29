<template lang="html">
    <section>

        <b-container class="bv-example-row">

            <div class="header-section">
                <div class="title">
                    <span>ОТКУДА ТЫ?</span>
                </div>
                <div class="search">
                    <v-select v-model="selected" @input="selectCity" :placeholder="`Выберите город/район/область`" :options="['Тюменская область', 'Республика Татарстан']"></v-select>
                </div>
                <div class="search">
                    <v-select v-model="filter" :placeholder="`Выберите фильтр`" :options="['Численность населения', 'Средний возраст', 'Средний доход']"></v-select>
                </div>
                <div class="btn-filter">
                    <button type="button" @click="resultFilter" name="button">Показать</button>
                </div>
            </div>
            <div class="chart_line" v-if="dataPerepis">
                <span>{{legendChart}}</span>
                <line-chart :options="options" :chart-data="chartData" :styles="myStyles"></line-chart>
            </div>
            <div class="body-section" v-if="dataPerepis">
                <b-row>
                  <b-col cols="8">
                      <div class="table-data">
                          <table>
                              <thead>
                                  <th></th>
                                  <th class="city_one">{{selected}}</th>
                                  <th class="city_two">Москва</th>
                                  <!-- <th>Россия</th> -->
                              </thead>
                              <tbody>
                                  <tr class="first_block">
                                      <td @click="getDataTable(1340608, 11503501)">Численность населения, чел.</td>
                                      <td v-if="selected == 'Тюменская область'">1 340 608</td>
                                      <td v-else>3 786 488</td>
                                      <td>11 503 501</td>
                                      <!-- <td>142 856 536</td> -->
                                  </tr>
                                  <tr class="body_table">
                                      <td>Городское</td>
                                      <td v-if="selected == 'Тюменская область'">808 964</td>
                                      <td v-else>2 853 661</td>
                                      <td>11 503 501</td>
                                      <!-- <td>105 313 773</td> -->
                                  </tr>
                                  <tr class="body_table last">
                                      <td>Сельское</td>
                                      <td v-if="selected == 'Тюменская область'">531 624</td>
                                      <td v-else>932 827</td>
                                      <td>-</td>
                                      <!-- <td>37 542 763</td> -->
                                  </tr>


                                  <tr class="first_block">
                                      <td @click="getDataTable(34.8, 40.7)">Средний возраст, лет</td>
                                      <td v-if="selected == 'Тюменская область'">34,8</td>
                                      <td v-else>38,6</td>
                                      <td>40,7</td>
                                      <!-- <td>39</td> -->
                                  </tr>
                                  <tr class="body_table">
                                      <td>Мужчины</td>
                                      <td v-if="selected == 'Тюменская область'">33,4</td>
                                      <td v-else>36,1</td>
                                      <td>38,4</td>
                                      <!-- <td>36,3</td> -->
                                  </tr>
                                  <tr class="body_table last">
                                      <td>Женщины</td>
                                      <td v-if="selected == 'Тюменская область'">36,2</td>
                                      <td v-else>40,8</td>
                                      <td>42,7</td>
                                      <!-- <td>41,4</td> -->
                                  </tr>


                                  <tr class="first_block">
                                      <td @click="getDataTable(23169, 55937)">Средний доход, руб</td>
                                      <td v-if="selected == 'Тюменская область'">23 169</td>
                                      <td v-else>27 006</td>
                                      <td>55 937</td>
                                      <!-- <td>25 684</td> -->
                                  </tr>


                                  <tr class="first_block">
                                      <td @click="getDataTable(45729, 157236)">Стоимость 1м<sup>2</sup> жилья, руб</td>
                                      <td v-if="selected == 'Тюменская область'">45 729</td>
                                      <td v-else>36 259</td>
                                      <td>157 236</td>
                                      <!-- <td>54 071</td> -->
                                  </tr>
                                  <tr class="body_table">
                                      <td>Первичный рынок</td>
                                      <td v-if="selected == 'Тюменская область'">44 306</td>
                                      <td v-else>34 315</td>
                                      <td>144 342</td>
                                      <!-- <td>48 144</td> -->
                                  </tr>
                                  <tr class="body_table last">
                                      <td>Вторичный рынок</td>
                                      <td v-if="selected == 'Тюменская область'">47 151</td>
                                      <td v-else>38 203</td>
                                      <td>170 131</td>
                                      <!-- <td>59 998</td> -->
                                  </tr>

                                  <tr class="first_block last">
                                      <td @click="getDataTable(43.3, 54.2)">Доступ к интернету, %</td>
                                      <td v-if="selected == 'Тюменская область'">43,3</td>
                                      <td v-else>35,6</td>
                                      <td>54,2</td>
                                      <!-- <td>33,1</td> -->
                                  </tr>

                                  <tr class="first_block last">
                                      <td @click="getDataTable(39.8, 58.2)">Коренное население, %</td>
                                      <td v-if="selected == 'Тюменская область'">39,8</td>
                                      <td v-else>48,2</td>
                                      <td>58,2</td>
                                      <!-- <td>46,2</td> -->
                                  </tr>

                              </tbody>
                          </table>
                      </div>
                  </b-col>
                  <b-col cols="4">
                      <bar-diagramm :dataBar="pieData" :labelCity="selected" :key="pieData[0]"></bar-diagramm>
                  </b-col>
                </b-row>
                <div class="clone-city">
                    <div class="title-clone-city">
                        <span>На кого вы похожи</span>
                    </div>
                    <div class="clone-city-image">
                        <div class="item-clone">
                            <div class="img">
                                <img src="../../assets/map3.png" alt="">
                            </div>

                            <span>Тюменская область</span>
                        </div>
                        <div class="item-clone">
                            <div class="img">
                                <img src="../../assets/map2.png" alt="">
                            </div>

                            <span>Республика Татарстан</span>
                        </div>
                        <div class="item-clone">
                            <div class="img">
                                <img src="../../assets/map1.png" alt="">
                            </div>

                            <span>Краснодарский край</span>
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
        <div class="vector-image">
            <img src="../../assets/Vector1.png" alt="">
        </div>
    </section>
</template>

<script>
import LineChart from "@/components/Charts/line-chart"
import BarDiagramm from "@/components/Charts/bar-diagramm"

export default {
    name: "where-from",
    components: {
        "line-chart" : LineChart,
        "bar-diagramm" : BarDiagramm
    },
    data() {
        return {
            selected: '',
            filter: 'Численность населения',
            legendChart: '',
            pieData: [1340608, 3786488],
            myStyles: {
                height: 300 + 'px',
                width: 100 + '%'
            },
            dataPerepis: null,
            chartData: null,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }
        }
    },
    methods: {
        resultFilter() {
            this.legendChart = this.filter;

            if ( this.selected == 'Тюменская область') {
                if ( this.filter == 'Численность населения' ) {
                    this.dataPerepis = [1397217, 1419329, 1441929, 1466265, 1488341, 1508737];
                } else if ( this.filter == 'Средний возраст' ) {
                    this.dataPerepis = [34.8, 35.3, 35.8, 36, 71.03, 36.9, 37.1];
                } else if ( this.filter == 'Средний доход' ) {
                    this.dataPerepis = [23169, 25142, 27448, 27045, 27454, 29024];
                } else {
                    this.filter = 'Численность населения';
                    this.dataPerepis = [1397217, 1419329, 1441929, 1466265, 1488341, 1508737];
                    this.legendChart = this.filter;
                }

                this.chartData = {
                labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
                datasets: [
                  {
                    backgroundColor: "#f87979",
                    data: this.dataPerepis
                  }
                ]
              };
            } else if ( this.selected == 'Республика Татарстан' ) {

                if ( this.filter == 'Численность населения' ) {
                    this.dataPerepis = [3830134, 3846633, 3861883, 3876991, 3889768, 3896456];
                } else if ( this.filter == 'Средний возраст' ) {
                    this.dataPerepis = [38.6, 38.6, 38.8, 39, 39, 39.11, 37.1];
                } else if ( this.filter == 'Средний доход' ) {
                    this.dataPerepis = [27006, 29537, 32404, 32763, 32290, 33371];
                } else {
                    this.filter = 'Численность населения';
                    this.dataPerepis = [3830134, 3846633, 3861883, 3876991, 3889768, 3896456];
                    this.legendChart = this.filter;
                }

                this.chartData = {
                labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
                datasets: [
                  {
                    backgroundColor: "#f87979",
                    data: this.dataPerepis
                  }
                ]
              }
            }
        },
        selectCity(val) {
            console.log(val);

        },
        getDataTable(a, b) {

            let newArr = [a,b];
            this.pieData = newArr;
            console.log(this.pieData);
        }
    }
}
</script>

<style lang="css" scoped>
.city_one {
    color: #FE5464;
}
.city_two {
    color: #5F3E6A;
}
.btn-filter {
    margin-left: 10px;
}
.btn-filter button {
    margin-top: auto;
    width: 130px;
    height: 56px;
    background: #FE5464;
    color: #fff;
    text-align: center;
    border: 0;
    margin-left: 15px;
}

.vector-image img {
    width: 100%;
}
section {
    position: relative;
}
.clone-city {
    margin-top: 40px;
    margin-bottom: 50px;
}
.title-clone-city {
    margin-bottom: 30px;
}
.title-clone-city span {
    color: #FE5464;
}
.clone-city-image {
    display: flex;
    padding-left: 140px;
    padding-right: 140px;
}
.clone-city-image .item-clone {
    width: 33%;
}
.clone-city-image .item-clone .img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 220px;

}
.clone-city-image .item-clone img {
    max-height: 100%;
    max-width: 100%;
    margin: 0 auto;
}
.clone-city-image .item-clone span {
    display: block;
    text-align: center;
}
.chart_line {
    position: absolute;
    left: 40px;
    right: 40px;
    margin-bottom: 40px;
    margin-top: 40px;
}
.chart_line > span {
    display: block;
    text-align: center;
    margin-bottom: 15px;
}
table {
    width: 100%;
}
.body-section {
    margin-top: 400px;
}
thead th {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 30px;
}
.first_block td {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 16px;
}
.body_table.last td, .first_block.last td {
    padding-bottom: 25px;
}
.body_table td {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #9D9D9D;
}
.header-section {
    display: flex;
    align-items: center;
    margin-top: 40px;
}
.header-section .title span {
    display: block;
    font-weight: bold;
    font-size: 40px;
    line-height: 88px;
    text-align: center;
    width: 280px;
}
.search {
    max-width: 369px;
    width: 100%;
    margin-left: 30px;
}
</style>
