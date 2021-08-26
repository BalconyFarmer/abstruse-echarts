<!--各种播放器:  https://uneedcode.com/article/204327968730472723-->
<template>
    <div class="musicAll" id="_musicAll">
        自动播放音乐
        <el-button @click="run">run</el-button>
        <el-button @click="pause">pause</el-button>

        <audio src="http://101.34.131.94:8081/0staticFixed/test/heni.mp3" controls></audio>
    </div>
</template>

<script>
import {Howl, Howler} from 'howler';

export default {
    name: "Sounds.vue",
    data() {
        return {
            soundApp: null,
            first: true
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
        const self = this
        const dom = document.getElementById("_musicAll")
        dom.addEventListener('mousedown',function (){
            // debugger
            if (self.first) {
                self.run()
                const see = 1
                console.log(see,'see')
            }
            self.first = false
        })

    }
}
</script>

<style scoped>
.musicAll {
    width: 100%;
    height: 100%;
}
</style>
