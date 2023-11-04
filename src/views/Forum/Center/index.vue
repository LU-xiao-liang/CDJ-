<!-- 结构 -->
<template>
    <div class="content">
        <div class="carousel">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 style="text-align: center;">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="main">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="推荐" name="first">
                    <div style="width: 100%;height: 400px;background-color: antiquewhite;">
                        推荐
                    </div>
                </el-tab-pane>
                <el-tab-pane label="最新" name="second">
                    <div style="width:100%;height: 400px; background-color: aquamarine;">
                        最新
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: 'Center',
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
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