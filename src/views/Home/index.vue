<!-- 结构 -->
<template>
    <div class="main">
        <BackGround ></BackGround>
        <div class="center">
            <div class="container">
                <div class="header">
                    <h1 style="color: rgb(103, 134, 160)">欢迎来到<i>CDJforum</i></h1>
                </div>
                <div class="content">
                    <p>这是一个校园论坛，在论坛中你可以根据你的兴趣爱好，找到趣味相投的人。</p>
                    <p>在论坛中你可以发表学习问题，需要帮助等内容，向同学们求助。</p>
                    <p>在这里你还可以参加同学们举办的活动，让你收获不一样的校园生活。</p>
                    <p>在这里你还可以认识更多的朋友，结交更多的朋友。</p>
                    <p>在这里你还可以找到志同道合的人，一起学习，一起娱乐。</p>
                </div>
                <div class="enter">
                    <el-button  type="primary" round @click="goForum">进入论坛</el-button>
                    <el-button  round>点击注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
import BackGround from "./BackGround"

export default {
    name: 'Home',
    components:{
        BackGround
    },
    methods:{
        goForum(){
           this.$router.push('/forum')
        }
    }
}
</script>

<!-- 样式 -->
<style scoped>
.main {
    width: 100%;
    height: calc(100% - 60px);
    position: relative;
    overflow: hidden;
}

.main .center {
    margin-top: 5%;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 100;
    /* background-color: aqua; */
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    text-align: center;
}

.header h1 i {
    font-size: 48px;
    background-image: linear-gradient(to right, rgb(1, 249, 84), rgb(38, 181, 197), rgb(42, 132, 184), blue);
    background-clip: text;
    color: transparent;
    display: inline-block;
}

.content {
    font-size: 20px;
    line-height: 2.4;
    color: #9d9a9a;
    /* background-color: #ccc; */
}
.container .enter .el-button {
    width: 120px;
    height: 60px;
}
</style>    