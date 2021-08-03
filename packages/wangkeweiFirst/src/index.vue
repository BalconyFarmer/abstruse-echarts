<template>
    <div class="img">wangkewei first</div>
</template>

<script>
export default {
    // 等下 index.js 里面要用到
    name:"wangkewei-first",
    props: {
        // 限制类型
        href: String,
        type: {
            type: String,
            default: 'default'
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        color: yellow;
    }
    .img {
        background-image: url("./imgg/1.png");
        background-size: 100% 100%;
    }
</style>
