<template>
    <div class="rightMain1">
        <div class="columItem">
            <div class="e11" id="eContainer9">111</div>
            <div class="e11" id="eContainer10"></div>
        </div>
        <div class="columItem">
            <div class="e11" id="eContainer8">111</div>
            <div class="e11" id="eContainer8_1">111</div>
            <div class="e11" id="eContainer8_2">111</div>
            <div class="e11" id="eContainer8_3">111</div>
        </div>
        <div class="columItem">
            <div class="e11" id="eContainer1">111</div>
            <div class="e11" id="eContainer2">111</div>
        </div>
        <div class="columItem">
            <div class="e11" id="eContainer3">111</div>
            <div class="e11" id="eContainer6_1">111</div>

            <div class="e11" id="eContainer4">111</div>
            <div class="e11" id="eContainer5">111</div>
            <div class="e11" id="eContainer6">111</div>
            <div class="e11" id="eContainer6_double">111</div>

            <div class="e11" id="eContainer6_double1">111</div>

        </div>
        <div class="columItem">
            <div class="e11" id="eContainer7">111</div>
            <div class="e11" id="eContainer7_1"></div>
        </div>

        <div class="columItem">
            <div class="e11" id="eContainer_wordCloud">111</div>
            <div class="e11" id="eContainer_wordCloud1">111</div>
        </div>

        <div class="columItem">
            <div class="e11" id="eContainer_Graph">111</div>
        </div>
    </div>
</template>

<script>
import {Abstruse} from "../../packages/Abstruse/Abstruse";
// import {Abstruse} from "../../lib/index.umd.js";

import * as echarts from 'echarts'

export default {
    name: "EchartExamples.vue",
    components: {},
    methods: {

        update1() {
            this.makeRadio1()
            this.makeRadio2()
            this.makeBar1()
            this.makeBar2()
            this.makeBar3()
            this.makeBar4()
            this.makeBar4_1()
            this.makeBar4_2()
            this.makeBar5()
            this.makeLine1()
            this.makeLine2()
            this.makePie1()
            this.makePie2()
            this.makePie3()
            this.makePie4()
            this.makeSingleNumber1()
            this.makeSingleNumber2()
            this.makeWordCloud()
            this.makeWordCloud1()
            this.makeGraphic()
        },
        makeRadio1() {
            const a = new Abstruse.Radio()
            const dom = document.getElementById('eContainer1')
            const newChart = echarts.init(dom);
            const data = [
                {"name": "基本组织1", value: 150, legend: "tooltipContent"},
                {"name": "基本组织11", value: 100, legend: ""},
                {"name": "基本组织111", value: 112, legend: ""}
            ]
            a.addValue(data)
            newChart.setOption(a.option);
        },
        makeRadio2() {
            const a = new Abstruse.Radio()
            const dom = document.getElementById('eContainer2')
            const newChart = echarts.init(dom);
            const data = [
                {"name": "基本组织", value: 150, legend: "2020年"},
                {"name": "基本组织", value: 100, legend: "2020年"},
                {"name": "基本组织", value: 112, legend: "2020年"}
            ]
            const data2 = [
                {"name": "基本组织", value: 333, legend: "2021年"},
                {"name": "基本组织", value: 444, legend: "2021年"},
                {"name": "基本组织", value: 555, legend: "2021年"}
            ]
            a.addValue(data, data2)
            a.changeLegendPosition('bottom')
            newChart.setOption(a.option);
        },
        makeBar1() {
            const a = new Abstruse.Bar()
            const dom = document.getElementById('eContainer3')
            const newChart = echarts.init(dom);
            a.initBasicBar()
            let xAxis = ['学习时长', '视频学习时长']
            let data1 = [100, 200]
            a.refreshBasicBar(xAxis, data1)
            newChart.setOption(a.baseBarOption);
        },
        makeBar2() {
            const a = new Abstruse.Bar()
            const dom = document.getElementById('eContainer4')
            const newChart = echarts.init(dom);
            const data1 = [
                {name: "18-25", value: -1},
                {name: "25-35", value: -2},
                {name: "35-45", value: -0},
                {name: "45-55", value: -1},
                {name: "55-60", value: -2},
                {name: "60以上", value: -0}
            ]
            const data2 = [
                {name: "18-25", value: 1},
                {name: "25-35", value: 2},
                {name: "35-45", value: 0},
                {name: "45-55", value: 1},
                {name: "55-60", value: 2},
                {name: "60以上", value: 0},
            ]
            a.initRightLeft(data1, data2)
            newChart.setOption(a.option);
        },
        makeBar3() {
            const a = new Abstruse.Bar()
            const dom = document.getElementById('eContainer5')
            const newChart = echarts.init(dom);
            const data = [
                {name: "博士及以上", value: 77},
                {name: "硕士", value: 88},
                {name: "本科", value: 100}
            ];
            a.initFunnel(data)
            newChart.setOption(a.funnelOption);
        },
        makeBar4() {
            const a = new Abstruse.Bar()
            const dom = document.getElementById('eContainer6')
            const newChart = echarts.init(dom);
            a.initPolar()
            const angleAxis = ["基本保障", "基本制度", "基本活动", "基本组织", "基本队伍"]
            const legend = ['需达标数', '已达标数', '正在进行中', '未达标数']
            const data = [
                [10, 10, 10, 10, 10],
                [0, 0, 10, 0, 0],
                [0, 0, 0, 10, 0],
                [0, 0, 0, 0, 10],
            ]
            a.refreshPolar(angleAxis, legend, data)
            newChart.setOption(a.polarOption);
        },
        makeBar4_1() {
            const a = new Abstruse.Bar()
            const dom = document.getElementById('eContainer6_double')
            const newChart = echarts.init(dom);

            const angleAxis = ['MySql', 'Redis', 'MogoDB']
            const legend = ['累计', '当前',]
            const data = [
                [50, 30, 20,],
                [10, 20, 30],
            ]
            a.initDoubleBar()
            a.refreshDoubleBar(angleAxis, legend, data)

            newChart.setOption(a.option);
        },
        makeBar4_2() {
            const a = new Abstruse.Bar()
            const dom = document.getElementById('eContainer6_double1')
            const newChart = echarts.init(dom);

            const angleAxis = ['MySql', 'Redis', 'MogoDB']
            const legend = ['累计', '当前',]
            const data = [
                [50, 30, 20,],
                [10, 20, 30],
            ]
            a.initDoubleBarLevel(data, legend, angleAxis)

            newChart.setOption(a.option);
        },
        makeBar5() {
            const a = new Abstruse.Bar()
            const dom = document.getElementById('eContainer6_1')
            const newChart = echarts.init(dom);
            const data1 = [
                {name: "05", value: 4255, year: "2020年"},
                {name: "06", value: 4264, year: "2020年"},
                {name: "07", value: 4292, year: "2020年"}
            ]
            const data2 = [
                {name: "05", value: "96.20", year: "2020年"},
                {name: "06", value: "96.41", year: "2020年"},
                {name: "07", value: "97.04", year: "2020年"}
            ]
            const data1Name = "数量"
            const data2Name = "比例"
            a.initBarLine(data1, data2, data1Name, data2Name)
            newChart.setOption(a.option);
        },
        makeLine1() {
            const a = new Abstruse.Lines()
            const dom = document.getElementById('eContainer7')
            const newChart = echarts.init(dom);
            a.init()
            const data = [
                {legend: "支部委员会", name: ["1月", "2月", "3月"], value: [120, 132, 101]},
                {legend: "主题党日", name: ["1月", "2月", "3月"], value: [11, 22, 33]},
                {legend: "党费缴纳", name: ["1月", "2月", "3月"], value: [44, 44, 44]},
                {legend: "积分申报", name: ["1月", "2月", "3月"], value: [33, 22, 23]}
            ]
            a.addValue(data)
            newChart.setOption(a.option);
        },
        makeLine2() {
            const a = new Abstruse.Lines()
            const dom = document.getElementById('eContainer7_1')
            const newChart = echarts.init(dom);
            // a.init()
            const data = [
                // [0] x轴坐标 [1] y轴坐标
                [25, 15, 184, "10 < 党龄 <= 20", "20 < 年龄 <= 30"],
                [25, 7.5, 4206, "5 < 党龄 <= 10", "20 < 年龄 <= 30"],
                [25, 2.5, 6004, "党龄 <= 5", "20 < 年龄 <= 30"],
                [25, 25, 6, "党龄>20", "20 < 年龄 <= 30"],
                [35, 15, 12514, "10 < 党龄 <= 20", "30 < 年龄 <= 40"],
                [35, 7.5, 11536, "5 < 党龄 <= 10", "30 < 年龄 <= 40"],
                [35, 2.5, 5729, "党龄 <= 5", "30 < 年龄 <= 40"],
                [35, 25, 107, "党龄>20", "30 < 年龄 <= 40"],
                [45, 15, 14845, "10 < 党龄 <= 20", "40 < 年龄 <= 50"],
                [45, 7.5, 6261, "5 < 党龄 <= 10", "40 < 年龄 <= 50"],
                [45, 2.5, 2117, "党龄 <= 5", "40 < 年龄 <= 50"],
                [45, 25, 6967, "党龄>20", "40 < 年龄 <= 50"],
                [55, 15, 6506, "10 < 党龄 <= 20", "50 < 年龄 <= 60"],
                [55, 7.5, 2259, "5 < 党龄 <= 10", "50 < 年龄 <= 60"],
                [55, 2.5, 400, "党龄 <= 5", "50 < 年龄 <= 60"],
                [55, 30, 13073, "党龄>20", "50 < 年龄 <= 60"],
                [10, 7.5, 176, "5 < 党龄 <= 10", "年龄 < 20"],
                [10, 25, 217, "党龄>20", "年龄 < 20"],
                [70, 15, 1053, "10 < 党龄 <= 20", "年龄>60"],
                [70, 7.5, 243, "5 < 党龄 <= 10", "年龄>60"],
                [70, 2.5, 33, "党龄 <= 5", "年龄>60"],
                [70, 30, 24037, "党龄>20", "年龄>60"]
            ]
            a.initScatter(data)
            newChart.setOption(a.option);
        },
        makePie1() {
            const a = new Abstruse.Pie()
            const dom = document.getElementById('eContainer8')
            const newChart = echarts.init(dom);
            a.init()
            a.changeLegendPosition('right')
            newChart.setOption(a.option);
        },
        makePie2() {
            const a = new Abstruse.Pie()
            const dom = document.getElementById('eContainer8_1')
            const newChart = echarts.init(dom);
            const echartData = [
                {name: "农村党支部", value: 236, count: 4423, rate: 0},
                {name: "gaili", value: 236, count: 4423, rate: 0},
            ]
            const name = '默认'
            a.circlePie(echartData, name, newChart)
            a.changeLegendPosition('bottom')
            newChart.setOption(a.option);
        },
        makePie3() {
            const a = new Abstruse.Pie()
            const dom = document.getElementById('eContainer8_2')
            const newChart = echarts.init(dom);
            const data = [
                {name: "村（居）民小组党组织书记和主任", value: 88},
                {name: "村（居）", value: 288},
                {name: "村（党组织书记和主任", value: 288},
            ]
            a.deformityPie(data)
            newChart.setOption(a.option);
        },
        makePie4() {
            const a = new Abstruse.Pie()
            const dom = document.getElementById('eContainer8_3')
            const newChart = echarts.init(dom);
            a.initMotherSon()

            const dataMother = [
                //母图
                {
                    value: 335, //占比
                    name: '少数民族', //描述项

                },
                {
                    value: 310,
                    name: '汉族',
                },

            ]

            const dataChildren = [
                {
                    value: 335, //占比
                    name: '白族', //描述项
                    selected: true,
                },
                {
                    value: 679,
                    name: '黑族',
                },
                {
                    value: 1548,
                    name: '彝族',
                }]
            a.updataMotherSon(dataMother, dataChildren)
            newChart.setOption(a.option);
        },
        makeSingleNumber1() {
            const a = new Abstruse.SingleNumber()
            const dom = document.getElementById('eContainer9')
            const newChart = echarts.init(dom);
            a.initCarMeter()
            newChart.setOption(a.option);
        },
        makeSingleNumber2() {
            const a = new Abstruse.SingleNumber()
            const dom = document.getElementById('eContainer10')
            const newChart = echarts.init(dom);
            a.singlePie(90, '#111111')
            newChart.setOption(a.option);
        },
        makeWordCloud() {
            const a = new Abstruse.Others()
            const dom = document.getElementById('eContainer_wordCloud')
            const newChart = echarts.init(dom);
            let data = [
                {name: "keke", value: 100},
                {name: "keke", value: 100},
                {name: "keke", value: 100},
            ]
            a.init(data)
            newChart.setOption(a.option);


        },
        makeWordCloud1() {
            const a = new Abstruse.Others()
            const dom = document.getElementById('eContainer_wordCloud1')
            const newChart = echarts.init(dom);
            let data = [
                {name: "keke", value: 100},
                {name: "keke", value: 100},
                {name: "keke", value: 100},
            ]
            a.initNoCircleWordCloud(data)
            newChart.setOption(a.option);


        },
        makeGraphic() {
            const a = new Abstruse.Others()
            const dom = document.getElementById('eContainer_Graph')
            const newChart = echarts.init(dom);
            let data = [
                {name: "keke", value: 100},
                {name: "keke", value: 100},
                {name: "keke", value: 100},
            ]
            a.initGrahpic(data)
            newChart.setOption(a.option);
        }

    },
    mounted() {
        this.update1()
    }
}
</script>

<style scoped lang="scss">
#eContainer11 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.rightMain1 {

    width: 200%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;


    .columItem {
        width: auto;
        height: auto;
        margin: 20px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .e11 {
            width: 400px;
            height: 400px;
            border: 1px solid grey;
            margin: 20px;

        }
    }
}

</style>
