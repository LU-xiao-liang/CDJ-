<!-- 结构 -->
<template>
    <div class="content">
        <div class="radius the-list">
            <el-descriptions title="排行榜" :column="1">
                <el-descriptions-item label="1">xxxxx</el-descriptions-item>
                <el-descriptions-item label="2">xxxxx</el-descriptions-item>
                <el-descriptions-item label="3">xxxxx</el-descriptions-item>
            </el-descriptions>
        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: 'Right',
}
</script>

<!-- 样式 -->
<style scoped>
.content {
    width: 100%;
    height: 100%;
}

.radius {
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
}

.the-list {}
</style>