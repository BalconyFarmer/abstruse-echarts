<!--基于已有3D图片库-->
<template>
    <div class="ii6">
        <div id="projectDone" class="height-full pos-rel"></div>
        <div id="bar"></div>
        <div id="urlInfo"></div>
    </div>
</template>

<script>
import init from "../../packages/Abstruse/ThreeD/Img3D/3d-pic";

export default {
    name: "PicturesWalls.vue",
    methods: {
        init3DImg() {
            let list = [
                {
                    regionId: "530113",
                    projectId: "5005dd26b14111eabd55",
                    poName: "中共昆明市东川区委员会",
                    src: "https://datavisioner.net/wp-content/uploads/2020/04/javascript-illustration.png",
                    url: "11111"
                },
                {
                    regionId: "530113",
                    projectId: "5005dd26b14111eabd55",
                    poName: "中共昆明市东川区委员会",
                    src: "https://file.ylxf.1237125.cn/group1/M00/01/D1/Cgob3WB_gNKAd9WxABSXowb0OJI686.JPG?a=TEST",
                    url: "javascript:void(0)"
                },
                {
                    regionId: "530113",
                    projectId: "5005dd26b14111eabd55",
                    poName: "中共昆明市东川区委员会",
                    src: "https://file.ylxf.1237125.cn/group1/M00/01/D1/Cgob3WB_gNKAd9WxABSXowb0OJI686.JPG?a=TEST",
                    url: "javascript:void(0)"
                },
            ]
            this.$nextTick(() => {
                setTimeout(() => {
                    init(list, (res) => {
                        this.projectId = res.projectId;
                        this.projectName = res.title;
                        this.poName = res.poName;
                        this.projectShow = true;
                        console.log(res, 'resres')
                    });
                }, 500);
            });
        },
    },
    mounted() {
        this.init3DImg()
    },
}
</script>

<style lang="scss">

.ii6 {
    width: 50%;
    height: 50%;
    border: 4px solid yellow !important;
    z-index: 1;

    #projectDone {
        width: 100%;
        height: 100%;
        overflow: hidden !important;

        img, canvas {
            position: absolute;
            left: -9999px;
            cursor: pointer;
            image-rendering: optimizeSpeed;
        }

        .fog {
            position: absolute;
            background: #fff;
            opacity: 0.1;
            filter: alpha(opacity=10);
        }
    }

    #bar {
        position: relative;
        left: 1em;
        top: 1em;
        height: 160px;
    }

    #bar .button {
        position: absolute;
        background: #222;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    #bar .loaded {
        background: #666;
    }

    #bar .viewed {
        background: #fff;
    }

    #bar .selected {
        background: #f00;
    }

    #urlInfo {
        position: absolute;
        visibility: hidden;
        z-index: 30000;
        padding-left: 12px;
        cursor: pointer;
        border: 4px solid yellow;
    }

}
</style>
