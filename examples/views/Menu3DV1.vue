<template>
    <div class="all_3DMenu">
        <canvas width="2000px" height="1000px" style="z-index: 99999; border: 1px solid yellow"
                id="D3Container"></canvas>
    </div>
</template>

<script>
import {Abstruse} from "../../packages/Abstruse/Abstruse";
// import {Abstruse} from "../../lib/index.umd.js";

export default {
    name: "Menu3DV1.vue",
    data() {
        return {}
    },
    methods: {
        init3D() {
            const self = this
            const dom = document.getElementById('D3Container')

            const menuData = [
                {assert: '1.png', routerAdress: 1},
                {assert: '2.png', routerAdress: 2},
                {assert: '3.png', routerAdress: 3},
                {assert: '4.png', routerAdress: 4},
                {assert: '5.png', routerAdress: 5},
                {assert: '6.png', routerAdress: 6},
                {assert: '7.png', routerAdress: 7},
                {assert: '8.png', routerAdress: 8},
            ]

            this.menu3D = new Abstruse.Menu3D1(dom)
            this.menu3D.init3D(menuData)

            this.menu3D.eventBus.addEventListener('jumpRoute', function (data) {
                console.log(data.message, 'data.messagedata.messagedata.messagedata.message')
                self.menu3D.moveTo(data.message)
            })
        },
    },
    mounted() {
        this.init3D()
    }
}
</script>

<style scoped lang="scss">

.all_3DMenu {
    margin: 0;
    overflow: hidden;
    background: url("./img/baseMap.png") center no-repeat;
    background-size: 40% 40%;
    background-position: center 55%;
    border: 1px solid yellow;
}

.all_3DMenu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
