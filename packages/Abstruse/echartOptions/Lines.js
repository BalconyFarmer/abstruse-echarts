// import echarts from 'echarts'
import * as echarts from 'echarts'

import {Base} from "./Base";

/**
 * BaseBaseBase
 * @constructor
 */
class Lines extends Base {
    constructor() {
        super();
        this.option = null;
        this.init();

        // this.changeXYLineColor('#000000');
        // this.changeLegendColor("red");
    }

    /**
     * const see1 = new Lines();
     * this.JCDWRightOption = see1.option;
     */
    init() {
        this.option = {
            color: ["#75DDFF", "#a5cede", "#428EFE", "#cadfe5",],

            title: {
                text: ""
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["邮件营销", "联盟广告", "视频广告", "直接访问"],
                textStyle: {// 图例文字的样式
                    color: "#ccc",
                    fontSize: 16
                }
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            toolbox: {
                feature: {
                    // saveAsImage: {}
                }
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: "#ffffff"
                    }
                },
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {
                type: "value",
                axisLine: {
                    lineStyle: {
                        color: "#ffffff"
                    }
                },
                splitLine: {show: false},

            },
            series: [
                {
                    name: "邮件营销",
                    type: "line",
                    stack: "总量",
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: "联盟广告",
                    type: "line",
                    stack: "总量",
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: "视频广告",
                    type: "line",
                    stack: "总量",
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: "直接访问",
                    type: "line",
                    stack: "总量",
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        };
    }

    /**
     * data:
     [
     { legend: "支部委员会", name: ["1月", "2月", "3月"], value: [120, 132, 101] },
     { legend: "主题党日", name: ["1月", "2月", "3月"], value: [11, 22, 33] },
     { legend: "党费缴纳", name: ["1月", "2月", "3月"], value: [44, 44, 44] },
     { legend: "积分申报", name: ["1月", "2月", "3月"], value: [33, 22, 23] }
     ]
     */
    addValue(data) {
        this.option.legend.data = [];
        data.forEach(item => {
            this.option.legend.data.push(item.legend);
        });

        this.option.xAxis.data = [];
        data[0].name.forEach(item => {
            this.option.xAxis.data.push(item);
        });

        this.option.series = [];
        data.forEach(item => {
            this.option.series.push({
                name: item.legend,
                type: "line",
                // stack: "总量",
                data: item.value
            });
        });
    }

    /**
     * 改变坐标轴颜色
     * @param color
     */
    changeXYLineColor(color) {
        this.option.xAxis.axisLine.lineStyle.color = color;
        this.option.yAxis.axisLine.lineStyle.color = color;
    }

    /**
     * 改变分类颜色
     * @param color
     */
    changeLegendColor(color) {
        this.option.legend.textStyle.color = color;
    }

    /**
     * scatter 球球
     */
    initScatter(data) {
        this.option = {
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: ['#00c9ff']
                    }
                },
                name: '年龄',
                nameTextStyle: {color: '#fff'},
                axisLine: {lineStyle: {color: '#fff'}},
                max: 80,
                min: 0
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: ['#00c9ff']
                    }
                },
                scale: true,
                name: '党龄',
                nameTextStyle: {color: '#fff'},
                axisLine: {lineStyle: {color: '#fff'}},
                max: 40
            },
            tooltip: {
                show: true,
                formatter: function (param) {
                    return param.data[4] + '<br>' + param.data[3] + '<br>人数：' + param.data[2];
                },
            },
            series: [{
                name: '党龄分析',
                data: data,
                type: 'scatter',
                symbolSize: function (data) {
                    if (data[2] >= 1000) {
                        return 40
                    } else if (data[2] < 900 && data[2] > 450) {
                        return data[2] / 30
                    } else {
                        return 15
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: 'rgb(129, 227, 238)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(25, 183, 207)'
                            }])
                    }
                }
            }]
        }
    }
}

export {Lines};
