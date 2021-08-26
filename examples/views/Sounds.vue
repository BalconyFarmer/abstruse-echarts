<!--各种播放器:  https://uneedcode.com/article/204327968730472723-->
<template>
    <div>
        自动播放音乐
        <el-button @click="run">run</el-button>
        <el-button @click="pause">pause</el-button>
    </div>
</template>

<script>
import {Howl, Howler} from 'howler';

export default {
    name: "Sounds.vue",
    data() {
        return {
            soundApp: null
        }
    },
    methods: {
        run() {
            if (this.soundApp) {
                this.soundApp.play()
            } else {
                this.soundApp = new Howl({
                    src: ['http://101.34.131.94:8081/0staticFixed/test/heni.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 1,
                    html5: true, // 强制进入播放
                });
                this.soundApp.play();
            }

        },
        pause() {
            this.soundApp.pause()
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
