<template>
    <div class="all">
        <div style="background-color: black;z-index: 99999;color: white;position: absolute;left: 0px;top: 0px;"
             v-show="toolTipShow"
             id="toolTip">
            <span>{{ toolTipName }}</span>
        </div>
        <div id="forEMap" style="width: 100%;height: 100%"></div>
        <div class="menu">
            <div class="menuInner">
                <div>
                    <el-select
                        size="mini"
                        @change="initEMap"
                        v-model="value"
                        allow-create
                        multiple
                        filterable
                        placeholder="请选择文章标签">
                        <el-option
                            v-for="item in cityList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-button size="mini" @click="addIcons">添加图标effectScatter</el-button>
                </div>
                <div>
                    <el-button size="mini" @click="addIconsCustom">添加自定义图标</el-button>
                </div>
                <div>
                    <el-button size="mini" @click="addIconsCustomEvent">添加自定义图标事件</el-button>
                </div>

                <div>
                    <el-button size="mini" @click="addHeat">添加热力图</el-button>

                </div>
                <div>
                    <el-button size="mini" @click="addToolTips">添加Tooltip</el-button>

                </div>

                <div>
                    <el-button size="mini" @click="addFlyLine">添加飞行线</el-button>
                </div>

                <div>
                    <el-button size="mini" @click="objEmap.addTrainTrack()">添加铁路线</el-button>
                </div>
                <div>
                    <el-button size="mini" @click="addAutoTooltip">添加自动ToolTip</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Abstruse} from "../../packages/Abstruse/Abstruse";
// import {Abstruse} from "../../lib/index.umd.js";

export default {
    name: "EchartMap.vue",
    data() {
        return {
            toolTipShow: false,
            toolTipName: '暂无数据',
            cityList: [
                {
                    value: '云南省',
                    label: '云南省(功能演示地区)'
                },
                {
                    value: '昆明市',
                    label: '昆明市'
                },
                {
                    value: '临沧市',
                    label: '临沧市'
                },
                {
                    value: '广灵县',
                    label: '广灵县'
                },
                {
                    value: '丽江市',
                    label: '丽江市'
                },
                {
                    value: '保山市',
                    label: '保山市'
                },
                {
                    value: '大理白族自治州',
                    label: '大理白族自治州'
                },
                {
                    value: '德宏傣族景颇族自治州',
                    label: '德宏傣族景颇族自治州'
                },
                {
                    value: '怒江傈僳族自治州',
                    label: '怒江傈僳族自治州'
                },
                {
                    value: '文山壮族苗族自治州',
                    label: '文山壮族苗族自治州'
                },
                {
                    value: '昭通市',
                    label: '昭通市'
                },
                {
                    value: '普洱市',
                    label: '普洱市'
                },
                {
                    value: '曲靖市',
                    label: '曲靖市'
                },
                {
                    value: '楚雄彝族自治州',
                    label: '楚雄彝族自治州'
                },
                {
                    value: '玉溪市',
                    label: '玉溪市'
                },
                {
                    value: '红河哈尼族彝族自治州',
                    label: '红河哈尼族彝族自治州'
                },
                {
                    value: '迪庆藏族自治州',
                    label: '迪庆藏族自治州'
                },
            ],
            value: '',

        }
    },
    methods: {
        initEMap(data) {

            if (data) {
                this.objEmap = new Abstruse.MapFormEchart("forEMap")
                this.objEmap.refreshEchartMap(data[0])
            } else {
                this.objEmap = new Abstruse.MapFormEchart("forEMap")
                this.objEmap.refreshEchartMap("云南省")
            }

        },
        addHeat() {
            const data1 = [
                {name: '昆明市', value: 10},
                {name: '玉溪市', value: 100},
                {name: '普洱市', value: 1000},
            ]
            this.objEmap.addHeatMapEffect(data1)
        },
        addFlyLine() {
            this.objEmap.addFlyLine()
        },
        addAutoTooltip() {
            this.objEmap.startAutoRun()
        },
        addIcons() {
            let data1 = [
                {
                    center: [101.323602, 26.722348],
                    showDatas: {
                        nocheckNum: 0,
                        offlineNum: 67,
                        onlineNum: 71,
                        totalNum: 138,
                    }
                },
                {
                    center: [100.323602, 26.722348],
                    showDatas: {
                        nocheckNum: 0,
                        offlineNum: 67,
                        onlineNum: 71,
                        totalNum: 138,
                    }
                },
                {
                    center: [101.323602, 25.722348],
                    showDatas: {
                        nocheckNum: 0,
                        offlineNum: 67,
                        onlineNum: 71,
                        totalNum: 138,
                    }
                },
                {
                    center: [101.323602, 24.722348],
                    showDatas: {
                        nocheckNum: 0,
                        offlineNum: 67,
                        onlineNum: 71,
                        totalNum: 138,
                    }
                },
            ]

            data1.forEach(item => {
                this.objEmap.addIconSecond(item.center, item.showDatas)

            })
        },
        addToolTips() {
            this.objEmap.addTooltip()

        },
        addIconsCustom() {

            let datas = [
                {
                    center: [100.08697, 23.886567],
                    data: {
                        cameraId: "aad45bcca6ba4fd1a9fd5282d0c3e28a",
                        name: "临沧市委组织部指挥中心"
                    }
                },
                {
                    center: [101.08697, 23.886567],
                    data: {
                        cameraId: "aad45bcca6ba4fd1a9fd5282d0c3e28a",
                        name: "临沧市委组织部指挥中心"
                    }
                },
                {
                    center: [100.08697, 24.886567],
                    data: {
                        cameraId: "aad45bcca6ba4fd1a9fd5282d0c3e28a",
                        name: "临沧市委组织部指挥中心"
                    }
                },
            ]
            datas.forEach(item => {
                this.objEmap.addBJCamera(item.center, item.data)

            })
        },
        addIconsCustomEvent() {
            const self = this
            this.objEmap.addMouseOverEvent()
            this.objEmap.eventBus.addEventListener("mouseover", function (event) {
                console.log(event, 'eventevent')
                if (event.message.mouseE.seriesType == "scatter") {
                    self.toolTipShow = true;
                    const left = event.message.mouseE.event.offsetX;
                    const top = event.message.mouseE.event.offsetY;
                    const dom = document.getElementById("toolTip");
                    dom.style.left = left + "px";
                    dom.style.top = top + "px";
                    self.toolTipName = event.message.name;
                } else {
                    console.log(event, 'eventeventevent')
                }
            });

            this.objEmap.eventBus.addEventListener("mouseout", function (event) {
                if (event.message.mouseE.seriesType == "scatter") {
                    setTimeout(function () {
                        self.toolTipShow = false;
                    }, 5000);
                }
            });
        }

    },
    mounted() {
        this.initEMap()

    }
}
</script>

<style scoped lang="scss">
#forEMap {
    background-image: url("./img/yn.png");
    background-position: 50% 47%;
    background-repeat: no-repeat;
    background-size: 46% 80%;
}

.all {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("./img/background.png");

    .menu {
        position: absolute;
        left: 0;
        top: 0;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .menuInner {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            div {
                margin: 10px;
            }
        }

    }
}

</style>
