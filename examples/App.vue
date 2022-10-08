<template>
    <div id="app">
        <div class="mainFirst">
            <div class="left">
                <div class="leftList">
                    <div class="btns" @click="changeRoute(1)">ECharts</div>
                    <div class="btns" @click="changeRoute(2)">EChartsMap</div>
                    <div class="btns" @click="changeRoute(3)">高德地图</div>
                    <div class="btns" @click="changeRoute('4_1')">3DMenu_1</div>
                </div>
            </div>
            <div class="right">
                <div v-if="route == 1" class="rightMain">
                    <EchartExamples></EchartExamples>
                </div>

                <div v-if="route == 2" class="rightMain">
                    <EchartMap></EchartMap>
                </div>

                <div v-if="route == 3" class="rightMain">
                    <GaodeMap></GaodeMap>
                </div>

                <div v-if="route == '4_1'" class="rightMain">
                    <Menu3DV1></Menu3DV1>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import EchartExamples from "./views/EchartExamples";
import EchartMap from "./views/EchartMap";
import GaodeMap from "./views/GaodeMap";
import Menu3DV1 from "./views/Menu3DV1";

export default {
    components: {
        EchartExamples, EchartMap, GaodeMap, Menu3DV1
    },
    data: function () {
        return {
            route: "4_1",
        }
    },
    watch: {
        route() {
            this.switchClass()
        }
    },
    methods: {
        changeRoute(num) {
            const self = this
            this.route = 0
            setTimeout(() => {
                self.route = num
            }, 50)
        },
        switchClass() {
            switch (this.route) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
            }
        },
    },
    mounted() {
        this.switchClass()
    },
    destroy() {
    }
}
</script>

<style lang="scss">

body, html, #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    margin: 0px;
    overflow: hidden;
}

.mainFirst {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left {
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
        cursor: pointer;

        .btns {
            border-bottom: 2px solid gray;
            margin-top: 30px;
            margin-left: 30px;
        }
    }

    .right {
        display: flex;
        flex: 1;
        width: 0;
        height: 100%;
        overflow-y: auto;
        overflow-x: auto;
        background-color: #05114B;

        .rightMain {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

        }
    }
}

</style>
