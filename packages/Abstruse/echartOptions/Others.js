import {Base} from "./Base";

/**
 * 单一数字初始化类 如: 液体图 仪表盘 百分比图等
 */
class Others extends Base {
    constructor() {
        super();
        this.option = null;
    }

    init(data) {

        let datalist = [
            {offset: [56, 48], symbolSize: 120, opacity: 0.1, fontSize: 18, color: "#f467ce"},
            {offset: [35, 80], symbolSize: 95, opacity: 0.88, fontSize: 18, color: "#7aabe2"},
            {offset: [20, 43], symbolSize: 90, opacity: 0.84, fontSize: 18, color: "#ff7123"},
            {offset: [83, 30], symbolSize: 90, opacity: 0.8, fontSize: 18, color: "#ffc400"},
            {offset: [36, 20], symbolSize: 65, opacity: 0.75, fontSize: 18, color: "#5e333f"},
            {offset: [64, 10], symbolSize: 70, opacity: 0.7, fontSize: 16, color: "#6b3442"},
            {offset: [75, 75], symbolSize: 60, opacity: 0.68, fontSize: 14, color: "#8a3647"},
            {offset: [88, 62], symbolSize: 50, opacity: 0.6, fontSize: 12, color: "#68333f"},
            {offset: [95, 72], symbolSize: 50, opacity: 0.6, fontSize: 12, color: "#68333f"},
            {offset: [97, 82], symbolSize: 50, opacity: 0.6, fontSize: 12, color: "#68333f"}
        ];
        let resData = [];
        let min = 20;
        let max = 500;
        let size = 1;
        for (let a = 0; a < data.length; a++) {
            let item = data[a];
            let itemToStyle = datalist[a];
            resData.push({
                name: item.name,
                size: item.value / 100,
                value: itemToStyle.offset,
                // value: itemToStyle.offset,

                symbolSize: item.value == 0 ? 0 : (item.value * size > min ? (item.value * size < max ? item.value * size : max) : min),
                label: {
                    normal: {
                        textStyle: {
                            fontSize: itemToStyle.fontSize
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: itemToStyle.color,
                        opacity: 0.8
                    }
                }
            });
        }
        let option = {
            tooltip: {
                trigger: "item",
                formatter: function (params) {
                    return "<br/>" + (params.data.size * 100) + "个";
                }
            },
            grid: {show: false, top: 10, bottom: 10},
            xAxis: {gridIndex: 0, type: "value", show: false, min: 0, max: 100, nameLocation: "middle", nameGap: 5},
            yAxis: {gridIndex: 0, min: 0, show: false, max: 100, nameLocation: "middle", nameGap: 30},
            series: [{
                type: "scatter",
                symbol: "circle",
                symbolSize: 120,
                label: {
                    normal: {
                        show: true,
                        formatter: "{b}",
                        color: "#fff",
                        textStyle: {
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00acea"
                    }
                },
                data: resData
            }]
        };
        this.option = option
        return option;
    }


}

export {Others};
