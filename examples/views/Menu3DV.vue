<template>
    <div class="all_3DMenu">
        <canvas width="2000px" height="1000px" style="z-index: 99999; border: 1px solid yellow" id="D3Container"></canvas>
    </div>
</template>

<script>
import {Menu3D} from "../../packages/Abstruse/ThreeD/Menu3D";

export default {
    name: "Menu3DV.vue",
    data() {
        return {
        }
    },
    methods: {
        init3D() {
            const self = this
            const dom = document.getElementById('D3Container')

            const menuData = [
                {assert: '党员教育0.png', routerAdress: "/PartyMemberPortrait"},
                {assert: '党员教育0.png', routerAdress: "/PartyMemberPortrait"},
                {assert: '党员教育0.png', routerAdress: "/PartyMemberPortrait"},
                {assert: '党员教育0.png', routerAdress: "/PartyMemberPortrait"},
            ]

            this.menu3D = new Menu3D(dom)
            this.menu3D.init3D(menuData)

            this.menu3D.eventBus.addEventListener('jumpRoute', function (data) {
                console.log(data.message, 'data.messagedata.messagedata.messagedata.message')
                self.$router.push(data.message)
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
