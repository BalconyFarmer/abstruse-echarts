import {Base} from "./Base";

/**
 * 雷达图
 */
class Pie extends Base {
    constructor() {
        super()
        this.option = null;
    }

    /**
     * const b = new Pie();
     * b.init();
     * this.minzufenbu = b.option;
     */
    init() {
        this.option = {
            color: ["#75DDFF", "#428EFE"],
            title: {
                text: '',
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                textStyle: {// 图例文字的样式
                    color: "#ccc",
                    fontSize: 16
                }
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {value: 1048, name: '汉族'},
                        {value: 735, name: '哈尼族'},
                        {value: 580, name: '彝族'},
                        {value: 484, name: '白族'},
                        {value: 300, name: '摩梭族'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }

    /**
     * 多环图
     * @param data
     const data = [
     {name: "农村党支部", value: 236, count: 4423, rate: 0},
     {name: "gaili", value: 236, count: 4423, rate: 0},
     ]
     const name = '默认'
     * @returns {{legend: {itemGap: number, data: (*|*[]), orient: string, x: number, y: string, textStyle: {color: string}}, series: [{data: *, clockwise: boolean, center: [string, string], avoidLabelOverlap: boolean, itemStyle: {normal: {borderColor: string, borderWidth: number}}, minAngle: number, label: {normal: {formatter: string, show: boolean, rich: {text: {verticalAlign: string, padding: number, color: string, fontSize: number, align: string}, value: {verticalAlign: string, color: string, fontSize: number, align: string}}, position: string}, emphasis: {show: boolean, textStyle: {fontSize: number}}}, type: string, radius: [string, string]}]}}
     */
    circlePie(data, name, newChart) {
        let color = ["#efb41b", "#26dcec", "#2fe5bc", "#06a2fe", "#c87ef3"];
        this.option = {
            tooltip: {
                trigger: "item",
                formatter: function (params) {
                    return `<div>名称:  ${params.name}</div>
                            <div>数量:  ${params.value}</div>
                            <div>占比:  ${params.percent}%</div>`
                }
            },
            legend: {
                data: data,
                orient: "vertical",
                textStyle: {
                    color: "#fff",
                    rich: {
                        a0: {fontSize: 13, color: color[0], width: 80},
                        a1: {fontSize: 13, color: color[1], width: 80},
                        a2: {fontSize: 13, color: color[2], width: 80},
                        a3: {fontSize: 13, color: color[3], width: 80},
                        a4: {fontSize: 13, color: color[4], width: 80},
                        a5: {fontSize: 13, color: color[5], width: 80},
                        b: {fontSize: 14, color: "#fff"}
                    }
                },
                itemGap: 20,
                left: 'right',
                y: "center",
                formatter: function (e) {
                    let value = 0
                    data.map(item => {
                        if (item.name == e) {
                            value = item.value
                        }
                    })
                    return e + ':  ' + value
                },
                type: 'scroll',
                clickable: true,
                selectedMode: true,
                show: true
            },
            series: [{

                name: name,
                type: "pie",
                avoidLabelOverlap: true,
                label: { //  饼图图形上的文本标签
                    normal: { // normal 是图形在默认状态下的样式
                        show: false,
                        position: 'center',
                        color: 'white',
                        fontSize: 17,
                        fontWeight: 'bold',
                        formatter: '{d}%\n{b}' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                    }
                },
                emphasis: { // hover 中心显示
                    label: {
                        show: true,
                        fontSize: '17',
                        fontWeight: 'bold'
                    }
                },
                radius: ["60", "90"],
                center: ["50%", "50%"],
                color: color,
                itemStyle: {
                    normal: {
                        borderWidth: 4,
                        borderColor: "rgba(9, 44, 76, .8)"
                    }
                },
                data: data
            }]
        };

        setTimeout(function () {
            let index = 0
            newChart.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 0});
            // 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
            newChart.on('mouseover', function (e) {
                newChart.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: 0});
                if (e.dataIndex != index) {
                    newChart.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: index});
                }
                if (e.dataIndex == 0) {
                    newChart.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex});
                }
            });

            //当鼠标离开时，把当前项置为选中
            newChart.on('mouseout', function (e) {
                index = e.dataIndex;
                newChart.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex});
            });
        }, 200)


    }

    /**
     * deformity
     data = [
     {name: "村（居）民小组党组织书记和主任",value: 24888},
     {name: "村（居）民小组党组织书记和主任",value: 24888},
     {name: "村（居）民小组党组织书记和主任",value: 24888},
     ]
     */
    deformityPie(data) {
        let colorArr = []
        const _data = data
        _data.reverse()
        let allCount = 0
        let legendData = []
        let seriesData = []
        let currentIndex = 0

        function calcuAllCount() {
            _data.forEach(item => {
                allCount += item.value
            })
        }

        calcuAllCount()

        function makeLegendData() {
            _data.forEach(item => {
                legendData.push(item.name)
            })
        }

        makeLegendData()

        function makeSeriesData() {
            while (colorArr.length < 20) {
                do {
                    var color = Math.floor((Math.random() * 1000000) + 1);
                } while (colorArr.indexOf(color) >= 0);
                colorArr.push("#" + ("000000" + color.toString(16)).slice(-6));
            }

            _data.forEach(item => {
                currentIndex += 1
                const series = {
                    name: item.name,
                    type: 'pie',
                    radius: [(0.1 * currentIndex * 100) + '%', ((0.1 + 0.01) * currentIndex * 100) + '%'], // 外圆内圆半径
                    center: ['40%', 'center'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: item.value,
                            itemStyle: {
                                normal: {
                                    color: colorArr[currentIndex - 1]
                                }
                            }
                        },
                        {
                            value: allCount - item.value,
                            itemStyle: {
                                normal: {
                                    color: 'transparent'
                                }
                            }
                        }
                    ]
                }
                seriesData.push(series)
            })
        }

        makeSeriesData()

        const option = {
            tooltip: {
                show: false,//防止鼠标移到不需要的数据上弹出label
                trigger: 'item',
                formatter: "{a} : {c} ({d}%)"
            },
            color: colorArr,
            legend: {
                data: legendData,
                orient: 'vertical',
                x: '68%',
                top: '25%',
                itemHeight: 10, //图例的高度
                itemGap: 5,     //图例之间的间距
                textStyle: {//图例文字的样式
                    color: '#ccc',
                    fontSize: 16
                },
                formatter: function (e) {
                    let value = 0
                    data.map(item => {
                        if (item.name == e) {
                            value = item.value
                        }
                    })
                    return e + ':  ' + value
                },
            },
            series: seriesData
        };
        this.option = option

    }

    /**
     * 字母图
     */
    initMotherSon() {
        this.option = {
            title: {
                // text: '单位:个数/万元',
                subtext: '单位:个数',
                x: 'right',//控制标题的x轴位置
                y: 'bottom',//控制标题的y轴位置
                padding: 10//和外围的距离
            },
            tooltip: {
                trigger: 'item',//当trigger为’item’时只会显示该点的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
                formatter: ' {b}: {c} ({d}%)',//饼图、雷达图 : a（系列名称），b（数据项名称），c（数值）, d（百分比）
                backgroundColor: 'rgba(255,255,255,0.9)',//背景色
                borderColor: 'rgba(210,210,210,0.9)',//边框颜色
                borderWidth: 1,//边框宽度
                padding: 15,
                textStyle: {//可以给文本设置想要的样式
                    color: '	#717171'
                }
            },

            series: [
                {
                    name: '访问来源',
                    type: 'pie',//类型：饼图
                    selectedMode: 'single',
                    radius: [0, '40%'],
                    //  radius: '60%', //图的大小
                    center: ['50%', '50%'], //图的位置，距离左跟上的位置
                    // label: {
                    //   position: 'inner'
                    // },
                    labelLine: {
                        show: false
                    },
                    color: this.color,

                    data: [
                        //子图 children
                        {
                            value: 335, //占比
                            name: 'AMD', //描述项
                            selected: true,

                        },
                        {
                            value: 679,
                            name: 'GTX',

                        },
                        {
                            value: 1548,
                            name: 'xxx',
                            itemStyle: {
                                color: '#4CC971'
                            }
                        }
                    ],
                    label: {normal: {show: true, position: 'inner', formatter: '{b}\n{d}%'}}
                },
                //母图
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '65%'],
                    color: this.color,

                    label: {
                        formatter: '{b|{b}}\n{hr|}\n {c} {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,

                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 15,
                                align: 'center'
                            },

                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 12,
                                lineHeight: 20,
                                align: 'center'
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    },
                    data: [
                        //母图
                        {
                            value: 335, //占比
                            name: 'GTX2080TI', //描述项
                            itemStyle: {
                                color: '#F9D235'
                            }
                        },
                        {
                            value: 310,
                            name: 'Radeon VII',
                            itemStyle: {
                                color: '#389FFD'
                            }
                        },
                        {
                            value: 234,
                            name: 'GTX1650super',
                            itemStyle: {
                                color: '#34C9C9'
                            }
                        },

                        {
                            value: 1048,
                            name: 'RX580',
                            itemStyle: {
                                color: '#4CC971'
                            }
                        },
                        {
                            value: 251,
                            name: 'Titan RTX',
                            itemStyle: {
                                color: '#E7BCF3'
                            }
                        }
                    ],
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: '#fff',
                        normal: {
                            label: {
                                // show:ture,
                                formatter: '{b}:{c}\n ({d}%)',
                                textStyle: {
                                    color: 'rgb(130,130,130)'
                                }
                            }
                        }
                    }
                }
            ]
        }
    }

    /**
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

     * @param dataMother
     * @param dataChildren
     */
    updataMotherSon(dataMother, dataChildren) {

        this.option.series[0].data = []
        this.option.series[0].data = dataChildren

        this.option.series[1].data = []
        this.option.series[1].data = dataMother

    }
}

export {Pie};
