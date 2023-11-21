<!-- 结构 -->
<template>
    <div class="content">
        <div class="carousel">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in imgarr">
                    <img style="width: 120%;height: 120%;object-fit: cover;" :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="main">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="推荐" name="first">
                </el-tab-pane>
                <el-tab-pane label="最新" name="second">
                </el-tab-pane>
            </el-tabs>
            <Listing></Listing>
        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
import Listing from "./Listing"
export default {
    name: 'Center',
    data() {
        return {
            activeName: 'first',
            imgarr: [
                {
                    url: require('@/assets/background/1661836284376_a3UDj.jpg')
                },
                {
                    url: require('@/assets/background/1669078863206_pf7cN.png')
                },
                {
                    url: require('@/assets/background/1679296774317_SHSQs.png')
                },
                {
                    url: require('@/assets/background/1696772088258_cAHcx.jpg')
                },
            ]

        };
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab.label);
        }
    },
    components: {
        Listing
    }
}
</script>

<!-- 样式 -->
<style scoped>
.content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    overflow: auto;
    --width: calc(100% - 20px);
    /* padding: 10px; */
}
.content:hover{
    box-shadow: 0 0 10px #ccc;
}
.carousel {
    width: var(--width);
    height: 300px;
    margin: 10px;
}

.main {
    width: var(--width);
    height: 300px;
    margin: 10px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>