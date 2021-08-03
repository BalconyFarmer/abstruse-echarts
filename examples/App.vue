<template>
    <div id="app">
        <div class="mainFirst">
            <div class="left">
                <div class="leftList">
                    <div class="btns" @click="changeRoute(1)">ECharts</div>
                    <div class="btns" @click="changeRoute(2)">EChartsMap</div>
                    <div class="btns" @click="changeRoute(3)">高德地图</div>
                    <div class="btns" @click="changeRoute(4)">3DMenu</div>
                    <div class="btns" @click="changeRoute(5)">3DPicturesWalls</div>
                    <div class="btns" @click="changeRoute(6)">3DIMG</div>
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

                <div v-if="route == 4" class="rightMain">
                    <Menu3DV></Menu3DV>
                </div>

                <div v-if="route == 5" class="rightMain">
                    <PicturesWall></PicturesWall>
                </div>

                <div v-if="route == 6" class="rightMain ">
                    <PicturesWalls></PicturesWalls>
                </div>

<!--                <div v-if="route == 7" class="rightMain ">-->
<!--                    <PictureTree></PictureTree>-->
<!--                </div>-->

<!--                <div v-if="route == 8" class="rightMain ">-->
<!--                    <ScrollTable></ScrollTable>-->
<!--                </div>-->

<!--                <div v-if="route == 9" class="rightMain ">-->
<!--                    <fiveNumber></fiveNumber>-->
<!--                </div>-->

<!--                <div v-if="route == 10" class="rightMain ">-->
<!--                    <ThreeNumInGrid></ThreeNumInGrid>-->
<!--                </div>-->

<!--                <div v-if="route == 11" class="rightMain ">-->
<!--                    <ThingsInBread></ThingsInBread>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>

import PicturesWalls from './views/PicturesWalls'
import EchartExamples from "./views/EchartExamples";
import EchartMap from "./views/EchartMap";
import GaodeMap from "./views/GaodeMap";
import Menu3DV from "./views/Menu3DV"
import PicturesWall from "./views/PicturesWall";

export default {
    components: {
          PicturesWalls, EchartExamples, EchartMap, GaodeMap, Menu3DV, PicturesWall,
    },
    data: function () {
        return {
            route: 3,
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
        cursor:pointer;

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
