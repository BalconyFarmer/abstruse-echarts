<template>

    <div class="all">
        <div style="background-color: black;z-index: 99999;color: white;position: absolute;left: 0px;top: 0px;" v-show="toolTipShow"
             id="toolTip">
            <span>{{ toolTipName }}</span>
        </div>

        <div id="forEMap" style="width: 100%;height: 100%"></div>
        <div class="menu">
            <div>
                <el-button size="mini" @click="addIcons">添加图标effectScatter</el-button>
                <el-button size="mini" @click="addIconsCustom">添加自定义图标</el-button>
                <el-button size="mini" @click="addIconsCustomEvent">添加自定义图标事件</el-button>
            </div>

            <div>
                <el-button size="mini" @click="addHeat">添加热力图</el-button>
                <el-button size="mini" @click="addToolTips">添加Tooltip</el-button>

                <el-button size="mini" @click="addMapData">添加子区域数据</el-button>

            </div>

            <div>
                <el-button size="mini" @click="addFlyLine">添加飞行线</el-button>
                <el-button size="mini" @click="addAutoTooltip">添加自动ToolTip</el-button>
            </div>

            <div class="menuSelects">
                <el-select
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

        </div>
    </div>
</template>

<script>
import {Abstruse} from "../../packages/Abstruse/Abstruse";

export default {
    name: "EchartMap.vue",
    data() {
        return {
            toolTipShow: false,
            toolTipName: '暂无数据',
            cityList: [{
                value: '云南省',
                label: '云南省(功能演示地区)'
            }, {
                value: '昆明市',
                label: '昆明市'
            }, {
                value: '临沧市',
                label: '临沧市'
            }],
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
        addMapData() {
            const data1 = [
                {name: '昆明市', value: 10},
                {name: '玉溪市', value: 100},
                {name: '普洱市', value: 1000},
            ]
            this.objEmap.addMapData(data1)
        },
        addFlyLine() {
            this.objEmap.addFlyLine()
        },
        addAutoTooltip() {
            this.objEmap.startAutoRun()
        },
        addIcons() {
            const center = [101.323602, 25.722348];
            const data = {
                nocheckNum: 0,
                offlineNum: 67,
                onlineNum: 71,
                totalNum: 138,
            }
            this.objEmap.addIconSecond(center, data)
        },
        addToolTips() {
            this.objEmap.addTooltip()

        },
        addIconsCustom() {
            const center = [100.08697, 23.886567]
            const data = {
                cameraId: "aad45bcca6ba4fd1a9fd5282d0c3e28a",
                name: "临沧市委组织部指挥中心"
            }
            this.objEmap.addBJCamera(center, data)
        },
        addIconsCustomEvent() {
            const self = this
            this.objEmap.addMouseOverEvent()
            this.objEmap.eventBus.addEventListener("mouseover", function (event) {
                console.log(event,'eventevent')
                if (event.message.mouseE.seriesType == "scatter") {
                    self.toolTipShow = true;
                    const left = event.message.mouseE.event.offsetX;
                    const top = event.message.mouseE.event.offsetY;
                    const dom = document.getElementById("toolTip");
                    dom.style.left = left + "px";
                    dom.style.top = top + "px";
                    self.toolTipName = event.message.name;
                } else {
                    console.log(event,'eventeventevent')
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
.all {
    width: 100%;
    height: 100%;
    position: relative;

    .menu {
        position: absolute;
        left: 0;
        top: 0;
        text-align: left;

        .menuSelects {
            position: absolute;
            left: 0;
            top: 200px;
        }
    }
}

</style>
