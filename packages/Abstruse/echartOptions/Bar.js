import {Base} from "./Base";

class Bar extends Base {
    constructor() {
        super();
        this.option = null;
        this.funnelOption = null;
        this.baseBarOption = null;
        this.polarOption = null;
    }

    /**
     * 基础柱状图
     */
    initBasicBar() {
        this.baseBarOption = {
            color: ["#75DDFF", "#a5cede", "#428EFE", "#cadfe5"],

            xAxis: {
                type: "category",
                axisLine: {
                    lineStyle: {
                        color: "#ffffff"
                    }
                },
                data: ["农村", "国企", "学校", "高校", "农村", "国企", "学校", "高校"]
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
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130, 130],
                type: "bar",
                barWidth: 30,
                itemStyle: {

                    normal: {
                        label: {
                            formatter: "{c}" + "小时",
                            show: true,
                            position: "top",
                            textStyle: {
                                fontWeight: "bolder",
                                fontSize: "12",
                                color: "#fff"
                            }
                        },
                        opacity: 1,
                        color: this.linearGradientColor("#DCFCAB", "#4FC4AA", "#1A4440", true),

                    }
                }
            }]
        };
    }

    /**
     * let xAxis = ['学习时长','视频学习时长']
     * let data1 = [100,200]
     * @param xAxis
     * @param data1
     */
    refreshBasicBar(xAxis, data1) {
        this.baseBarOption.xAxis.data = xAxis;
        this.baseBarOption.series[0].data = data1;
    }

    initBarMany() {
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            legend: {
                x: "center",
                bottom: 0,
                itemHeight: 10, // w和h
                itemWidth: 5,
                textStyle: { // 汉字的样式
                    lineHeight: 12,
                    padding: [2, 0, 0, 0], // 因为汉字和图形块没有垂直居中，所以加了padding
                    fontSize: 12,
                    color: '#ffffff',
                },
                icon: 'circle', // 图形块的形状
                left: 'center',
                itemGap: 15,
            },
            grid: {
                left: '5%',
                right: '0%',
                top: '10%',
                bottom: "30%",
                containLabel: false
            },
            xAxis: {
                type: 'category',
                axisLine: { // x轴的颜色
                    lineStyle: {
                        color: '#DADFEA',
                    },
                    show: false
                },
                axisTick: { // x轴隐藏刻度
                    show: false,
                },
                data: ['一月', '二月', '三月', '四月', '五月', '六月']
            },
            yAxis: {
                type: 'value',
                axisLine: { // x轴的颜色
                    lineStyle: {
                        color: '#ffffff',
                    },
                    show: false
                },
                splitLine: {show: false},
                axisTick: { // x轴隐藏刻度
                    show: false,
                },
                show: false,

            },
            series: [
                {
                    name: '抢劫1',
                    type: 'bar',
                    barWidth: 15,
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 302, 301, 334, 390, 330]
                },
                {
                    name: '抢劫2',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230]
                },
                {
                    name: '抢劫3',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330]
                },
                {
                    name: '抢劫4',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 212, 201, 154, 190, 330]
                },
                {
                    name: '抢劫5',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 832, 901, 934, 1290, 1330]
                }
            ]
        };
    }

    /**
     * 交错正负轴标签
     *   ---|-----
     *  ----|---
     *   ---|--
     *   ---|-----
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
     */
    initRightLeft(data1, data2) {
        let option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true,
                        backgroundColor: "#333"
                    }
                },
                formatter: function (params) {
                    if (params) {
                        let str = "";
                        params.forEach(item => {
                            str += item.marker + item.seriesName + "：" + Math.abs(item.value) + "<br/>";
                        });
                        return str;
                    } else {
                        return "";
                    }
                }
            },
            grid: {top: 40, right: 40, bottom: 10, left: 40, containLabel: true},
            legend: {
                data: ["男性", "女性"],
                textStyle: {
                    color: "#FFF"
                },
                x: "right",
                top: 0
            },
            xAxis: [{
                type: "value",
                splitLine: {
                    show: false,
                    lineStyle: {color: "rgba(255,255,255,0.2)"}
                },
                // name: "人数",
                // nameTextStyle: { color: "#fff" },
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {
                    show: true,
                    fontWeight: 10,
                    fontsize: 5,
                    color: "#fff",
                    formatter: function (params) {
                        return params < 0 ? -params : params;
                    }
                }
            }],
            yAxis: {
                type: "category",
                // name: "年龄",
                // nameTextStyle: { color: "#fff" },
                data: data1.map(item => item.name),
                axisTick: {alignWithLabel: true},
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "#FFF"
                    }
                },
                axisLabel: {fontsize: 2, align: "center", color: "#fff", margin: 35}
            },
            series: [{
                name: "男性",
                type: "bar",
                stack: "总量",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        barBorderRadius: 2,
                        // color: "#FFDF58",
                        color: this.linearGradientColor("#DCFCAB", "#4FC4AA", "#1A4440", true),

                    }
                },
                data: data1.map(item => item.value)
            }, {
                name: "女性",
                type: "bar",
                stack: "总量",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        barBorderRadius: 2,
                        // color: "#a4fff6",
                        color: this.linearGradientColor("#377bf1", "#4FC4AA", "#1A4440", true),

                    }
                },
                data: data2.map(item => item.value)
            }]
        };
        this.option = option
    }

    /**
     * 漏斗图
     * -----------
     *  ---------
     *   -------
     *    ----
     *     --
     * const data = [
     *      { name: "博士及以上", value: 77 },
     *      { name: "硕士", value: 88 },
     *      { name: "本科", value: 100 }
     * ];
     */
    initFunnel(data) {
        this.funnelOption = {
            title: {
                text: "",
                subtext: ""
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}%"
            },

            legend: {
                data: ["展现", "点击", "访问", "咨询", "订单"],
                textStyle: {color: "#fcfcfc"}

            },

            series: [
                {
                    name: "漏斗图",
                    type: "funnel",
                    left: "10%",
                    top: 60,
                    // x2: 80,
                    bottom: 60,
                    width: "80%",
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: "0%",
                    maxSize: "100%",
                    sort: "descending",
                    gap: 2,
                    label: {
                        show: true,
                        position: "inside"
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: "solid"
                        }
                    },
                    itemStyle: {
                        borderColor: "#fff",
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data: [
                        {value: 60, name: "访问"},
                        {value: 40, name: "咨询"},
                        {value: 20, name: "订单"},
                        {value: 80, name: "点击"},
                        {value: 100, name: "展现"}
                    ]
                }
            ]
        };

        if (data) {
            this.refreshFunnel(data);
        }
    }

    refreshFunnel(data) {
        this.funnelOption.legend.data = [];
        this.funnelOption.series[0].data = [];

        data.forEach(item => {
            this.funnelOption.legend.data.push(item.name);
            this.funnelOption.series[0].data.push(item);
        });
    }

    /**
     * 极坐标柱状图
     *
     */
    initPolar() {
        this.polarOption = {
            color: ["#2AFFC7", "#D79F31", "#78F5FF", "#D79F31"],
            tooltip: {
                show: true,
                trigger: "axis",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                },
                textStyle: {
                    fontSize: 18
                },
                formatter: function (params) {
                    let str = params[0].name + "<br/>";
                    params.forEach(item => {
                        str += item.seriesName + ":" + item.data + "<br/>";
                    });
                    let {name, value} = params[0];
                    return str;
                }
            },
            // 圆周轴
            angleAxis: {
                type: "category",
                splitLine: {
                    lineStyle: {color: "#ccc"}
                },
                axisLabel: {
                    color: "#FFF",
                    fontSize: 16
                },
                data: ["基本保障", "基本制度", "基本活动", "基本组织", "基本队伍"]

            },
            // 半径轴
            radiusAxis: {
                splitLine: {
                    lineStyle: {color: "#ccc"}
                },
                axisLabel: {
                    show: true,
                    color: "#FFF",
                    fontSize: 16
                },
                axisLine: {
                    show: false,
                    lineStyle: {color: "#ccc", width: 1, type: "solid"}
                }
            },
            polar: {},
            series: [{
                type: "bar",
                data: [0, 0, 0, 0, 0],
                coordinateSystem: "polar",
                name: "需达标数",
                stack: "a",
                emphasis: {
                    focus: "series"
                }
            }, {
                type: "bar",
                data: [0, 0, 0, 0, 0],
                coordinateSystem: "polar",
                name: "已达标数",
                stack: "a",
                emphasis: {
                    focus: "series"
                }
            }, {
                type: "bar",
                data: [0, 0, 0, 0, 0],
                coordinateSystem: "polar",
                name: "正在进行中",
                stack: "a",
                emphasis: {
                    focus: "series"
                }
            }, {
                type: "bar",
                data: [0, 0, 0, 0, 0],
                coordinateSystem: "polar",
                name: "未达标数",
                stack: "a",
                emphasis: {
                    focus: "series"
                }
            }],
            legend: {
                show: true,
                top: 0,
                x: "right",
                orient: "vertical",
                textStyle: {color: "#fcfcfc"},
                data: ["需达标数", "已达标数", "正在进行中", "未达标数"]
            }
        };
    }

    /**
     *
     * @param angleAxis ["基本保障","基本制度","基本活动","基本组织","基本队伍"]
     * @param legend ['需达标数','已达标数','正在进行中','未达标数']
     * @param data [
     [0,0,0,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0],
     ]
     */
    refreshPolar(angleAxis, legend, data) {
        this.polarOption.angleAxis.data = angleAxis;
        this.polarOption.legend.data = legend;
        this.polarOption.series = [];
        data.forEach((item, index) => {
            this.polarOption.series.push(
                {
                    type: "bar",
                    data: item,
                    coordinateSystem: "polar",
                    name: legend[index],
                    stack: "a",
                    emphasis: {
                        focus: "series"
                    }
                }
            );
        });
    }

    /**
     * bar 上面是折现
     data1 = [
     {name: "05", value: 4255, year: "2020年"},
     {name: "06", value: 4264, year: "2020年"},
     {name: "07", value: 4292, year: "2020年"}
     ]
     data2 = [
     {name: "05", value: "96.20", year: "2020年"},
     {name: "06", value: "96.41", year: "2020年"},
     {name: "07", value: "97.04", year: "2020年"}
     ]
     data1Name  = "数量"
     data2Name = "比例"
     */
    initBarLine(data1, data2, data1Name, data2Name) {
        let tempData = [];
        let tempValue = 0;
        tempData = data1.map(item => {
            return {name: item.name, value: tempValue};
        });
        if (tempValue) {
            data2.forEach(item => {
                item.value = +item.value + 2;
            });
        }
        let option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {type: "shadow"},
                formatter: function (params) {
                    if (!params.length) return;
                    let str = params[0].name + "<br/>";
                    params.forEach(item => {
                        if (item.seriesType === "line" && tempValue) item.value = item.value - 2;
                        let unit = "人";
                        if (item.seriesName.indexOf("率") !== -1 || item.seriesName.indexOf("比例") !== -1 || item.seriesName.indexOf("占比") !== -1) unit = "%";
                        if (item.seriesName.indexOf("人数") !== -1) unit = "人";
                        if (item.seriesName.indexOf("指数") !== -1) unit = "";
                        if (item.seriesName.indexOf("排名") !== -1) unit = "名";
                        str += item.seriesName + "：" + item.value + unit + "<br/>";
                    });
                    return str;
                }
            },
            legend: {
                data: [data1Name, data2Name],
                textStyle: {
                    color: "#fff"
                },
                right: 100
            },
            grid: {right: 30, left: 30, top: 40, bottom: 10, containLabel: true},
            xAxis: {
                type: "category",
                data: data1.map(item => item.name),
                axisLabel: {
                    textStyle: {color: "#fff"},
                    interval: 0
                },
                axisLine: {show: true, lineStyle: {color: "#3f6fa0"}},
                axisTick: {show: false}
            },
            yAxis: [
                {
                    type: "value",
                    scale: true,
                    name: data1Name,
                    nameTextStyle: {color: "#FFF"},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: true, lineStyle: {color: "#3f6fa0"}},
                    axisLabel: {textStyle: {color: "#fff"}},
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                },
                {
                    type: "value",
                    scale: true,
                    name: data2Name || "",
                    nameTextStyle: {color: "#FFF"},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: true, lineStyle: {color: "#3f6fa0"}},
                    axisLabel: {textStyle: {color: "#fff"}},
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                }
            ],
            series: [
                {
                    name: "",
                    data: tempData,
                    type: "bar",
                    stack: "a",
                    barWidth: 30,
                    itemStyle: {color: "transparent"},
                    tooltip: {trigger: "none"}
                }, {
                    name: data1Name,
                    data: data1,
                    type: "bar",
                    stack: "a",
                    barWidth: 30,
                    itemStyle: {
                        color: this.linearGradientColor("#DCFCAB", "#4FC4AA", "#1A4440", true)
                    }
                }, {
                    name: data2Name,
                    type: "line",
                    yAxisIndex: 1,
                    // symbol: "rect",
                    symbolSize: 10,
                    lineStyle: {color: "#FFF", width: 3},
                    itemStyle: {
                        color: "#FFF",
                        borderWidth: 6,
                        borderColor: "rgba(131,217,171, .6)"
                    },
                    data: data2
                }
            ]
        };

        this.option = option
    }

    /**
     * 双柱状图
     */
    initDoubleBar() {
        this.option = {
            xAxis: {
                type: 'category',
                data: ['MySql', 'Redis', 'MogoDB'],
                // show:false,
                axisTick: { // x轴隐藏刻度
                    show: true,
                },
                axisLine: { // x轴的颜色
                    lineStyle: {
                        color: '#DADFEA',
                    }
                },
                axisLabel: { // x轴汉字的颜色
                    color: "#ffffff",
                    fontSize: 14,
                    interval: 0, // 不缩放，放不下也放
                },
            },
            yAxis: {
                axisTick: { // x轴隐藏刻度
                    show: false,
                },
                axisLine: { // x轴的颜色
                    lineStyle: {
                        color: '#DADFEA',
                    }
                },
                splitLine: {show: false},

            },
            legend: {
                data: ['累计', '当前',],
                itemHeight: 10, // w和h
                itemWidth: 10,
                textStyle: { // 汉字的样式
                    lineHeight: 12,
                    padding: [2, 0, 0, 0], // 因为汉字和图形块没有垂直居中，所以加了padding
                    fontSize: 12,
                    color: '#82929F',
                },
                icon: 'rect', // 图形块的形状
            },

            grid: { // 图形尽量的铺满盒子
                left: 26,
                top: 40,
                right: 0,
                bottom: 24,
            },
            tooltip: {
                trigger: 'axis', // 滑过x轴的时候，显示tooltip
                axisPointer: { // 有阴影层
                    type: 'shadow'
                }
            },
            series: [
                {
                    name: '累计',
                    data: [5, 3, 2,],
                    type: 'bar',
                    itemStyle: { // 柱子的样式
                        // color: '#FF7C7C', // 柱子颜色
                        barBorderRadius: [2, 2, 0, 0], // 柱子的圆角
                        color: this.linearGradientColor("#DCFCAB", "#4FC4AA", "#1A4440", true),

                    },
                    label: { // 柱子上显示当前值的数值(图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等)
                        show: true,
                        position: 'insideTop', // 位置，好多个选项:'top','bottom','insideTop','insideTopLeft'....
                        distance: 8, // 距离，可以设置(距离图形元素的距离。)
                        color: "#fff",
                        // formatter: function (params) { // 柱子上提示的数字：dataIndex是第几个；
                        //     console.log("参数：", params);
                        //     // params.dataIndex
                        //     return params.value + '\n(百分比%)'
                        // },
                    },
                    // barWidth: 20, // 柱条的宽度，不设时自适应。支持设置成相对于类目宽度的百分比。
                    // barMaxWidth: 40,
                    barGap: '30%',// 不同系列的柱间距离，（如 '30%'，表示柱子宽度的 30%）(同一个系列里，不同柱子的间距)
                    barCategoryGap: '30%', // 同一系列的柱间距离，默认为类目间距的20%，可设固定值（系列之间的间距，比较少的时候，可以条大点）（属性共享，给最后一个加就ok）
                },
                {
                    name: '当前',
                    data: [1, 2, 3],
                    type: 'bar',
                    itemStyle: { // 图形样式。(柱子的样式)

                        normal: {
                            color: this.linearGradientColor("#5D9BFE", "#5691F0", "#16366F", true),
                            barBorderRadius: [2, 2, 0, 0], // 柱子的圆角
                        },
                    },
                    label: { // 柱子上显示当前值的数值
                        show: true,
                        position: 'insideTop', // 位置，好多个选项
                        distance: 8, // 距离，可以设置
                        color: "#fff",
                        // formatter: function (params) { // 柱子上提示的数字：dataIndex是第几个；
                        //     console.log("参数：", params);
                        //     // return params.value + '\n(百分比%)'
                        // },
                    },
                    barCategoryGap: '30%', // 系列之间的间距，比较少的时候，可以条大点
                },
            ],
        }

    }

    refreshDoubleBar(angleAxis, legend, data) {
        this.option.xAxis.data = angleAxis
        this.option.legend.data = legend
        this.option.series[0].data = data[0]
        this.option.series[0].name = legend[0]

        this.option.series[1].data = data[1]
        this.option.series[1].name = legend[1]
    }

    /**
     * 横向双柱
     */
    initDoubleBarLevel(data, legend, angleAxis) {
        this.option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['销量', "分类1"]
            },
            xAxis: {
                axisLine: { // x轴的颜色
                    lineStyle: {
                        color: '#DADFEA',
                    }
                },
            },
            yAxis: {
                type: "category",
                data: angleAxis,
                axisLine: { // x轴的颜色
                    lineStyle: {
                        color: '#DADFEA',
                    }
                },
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: data[0],
                itemStyle: { // 柱子的样式
                    // color: '#FF7C7C', // 柱子颜色
                    barBorderRadius: [2, 2, 0, 0], // 柱子的圆角
                    color: this.linearGradientColor("#DCFCAB", "#4FC4AA", "#1A4440", true),

                },
            }, {
                name: '分类1',
                type: 'bar',
                data: data[1],
                itemStyle: { // 图形样式。(柱子的样式)

                    normal: {
                        color: this.linearGradientColor("#5D9BFE", "#5691F0", "#16366F", true),
                        barBorderRadius: [2, 2, 0, 0], // 柱子的圆角
                    },
                },
            }]
        }
    }
}

export {Bar};
