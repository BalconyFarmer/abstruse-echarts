<!--基于threejs-->
<template>
    <div class="all">
        <canvas style="z-index: 99999" id="D3ContainerPictures"></canvas>
        <canvas id="demoCanvas" width="250" height="150"></canvas>
    </div>
</template>

<script>
import {PicWall3D} from "../../packages/Abstruse/ThreeD/PicWall3D";

export default {
    name: "PicturesWall.vue",
    methods: {
        init3DPictures() {
            const self = this
            const dom = document.getElementById('D3ContainerPictures')
            const data = [
                {
                    pic: 'https://cdn.pixabay.com/photo/2021/05/15/14/58/pied-kingfisher-6255945_960_720.jpg',
                    id: '1111'
                }
            ]

            this.oPicWall = new PicWall3D(dom);
            this.oPicWall.initPicWall(data);
        },
    },
    mounted() {
        this.init3DPictures()
    }
}
</script>

<style scoped lang="scss">
    .all {
        width: 100%;
        height: 100%;
    }
</style>
