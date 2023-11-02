<!-- 结构 -->
<template>

<div class="footer">
    <div class="main">
        <ul class="list">
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
        </ul>
        <ul class="list">
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
        </ul>
        <ul class="list">
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
        </ul>
    </div>
</div>

</template>

<!-- 逻辑 -->
<script >
export default {
    name:'Footer',
}
</script>

<!-- 样式 -->
<style scoped>
    .footer{
        width: 100%;
        background-color: #fff;
    }
    .footer .main{
        margin: 0 auto;
        width: 1000px;
        display: flex;

        justify-content: space-around;
    }
    .footer .main .list{
        list-style-type: none;
    }
</style>