<!-- 结构 -->
<template>
    <div class="content">
        <div class="radius user">
            <div class="avatar"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
            <el-descriptions class="margin-top" :colon="false" :column="1">
                <el-descriptions-item label="昵称">小亮</el-descriptions-item>
                <el-descriptions-item label="性别">男</el-descriptions-item>
                <el-descriptions-item label="学号">210309061</el-descriptions-item>
                <el-descriptions-item label="院系">电子信息工程系</el-descriptions-item>
                <el-descriptions-item label="班级">计应21.2班</el-descriptions-item>
            </el-descriptions>
            <el-button style="width: 90%;">编辑资料</el-button>
            <el-button style="width: 90%;">写帖子</el-button>
        </div>
        <div class="radius frame">

        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: 'Left',
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        }
    }
}
</script>

<!-- 样式 -->
<style scoped>
.content {
    width: 100%;
    height: 100%;
}

/* 设置圆角边框与背景，不允许盒子溢出 外边距*/
.radius{
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 10px;
}
.user {

    padding: 10px;
}

.avatar {
    text-align: center;
    margin-bottom: 10px;
}

.margin-top {
    margin: 0 auto;
    width: 80%;
}

.frame {
    width: 100%;
    height: 240px;
    background-color: #fff;
}

.el-button{
    margin:5px;
}
</style>