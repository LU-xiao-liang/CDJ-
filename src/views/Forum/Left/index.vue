<!-- 结构 -->
<template>
    <div class="content">
        <div class="radius user">
            <div class="avatar"><el-avatar :size="50" :src="user.headPortrait||circleUrl"></el-avatar></div>
            <el-descriptions class="margin-top" :colon="false" :column="1">
                <el-descriptions-item label="昵称：">{{ user.name || "" }}</el-descriptions-item>
                <el-descriptions-item label="性别：">{{ user.gender || "" }}</el-descriptions-item>
                <el-descriptions-item label="学号：">{{ user.ID || "" }}</el-descriptions-item>
                <el-descriptions-item label="简介：">{{ user.informationText || "" }}</el-descriptions-item>
            </el-descriptions>
            <el-button @click="goCreate" style="width: 90%;">写帖子</el-button>
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
    },
    computed: {
        user() {
            return this.$store.state.user
        },
    },
    methods: {
        goCreate() {
            this.$router.push('/forum/create')
        },
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
.radius {
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 10px;
}

.radius:hover {
    box-shadow: 0 0 10px #ccc;
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


.el-button {
    margin: 5px;
}
</style>