<!-- 结构 -->
<template>

<div class="content">
    <div class="centent">
        <el-page-header @back="goBack" :content="title">
      </el-page-header>
        <div class="text" v-html="textHtml" >
        </div>
    </div>
</div>

</template>

<!-- 逻辑 -->
<script >
export default {
    name:'EssayShow',
    data(){
        return {
            
        }
    },
    computed:{
        textHtml(){
            return this.$store.state.contentList[this.$route.query.id].userText
        }
    },
    methods:{
        goBack(){
            // 返回上一页
            this.$router.go(-1)
        }
    },
    mounted(){
        // TODO:通过query参数，来获取文章id，展示内容
       console.log('获取文章id，展示内容',this.$route.query.id)
    }
}
</script>

<!-- 样式 -->
<style scoped>
    .content{
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
        border-radius: 10px;
        overflow: auto;
    }
    .centent{
        margin: 10px;
    }
    .text{
        margin-top: 5px;
    }
</style>