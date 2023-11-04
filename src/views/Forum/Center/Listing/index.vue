<!-- 结构 -->
<template>

<div class="listing">
    <el-skeleton  animated :rows="4" />
    <div class="item" v-for="(v,i) in arr" :key="i">
        <div class="content">
            <div class="title">{{ v.title }}</div>
            <div class="text">
                <span>{{v.text}}</span>
            </div>
            <div class="footer">
                <span>{{v.name}}</span>
                <span style="margin-left: 80%;" >点赞</span>
                <el-divider direction="vertical"></el-divider>
                <span>评论</span>
            </div>
        </div>
    </div>
</div>

</template>

<!-- 逻辑 -->
<script >
export default {
    name:'Listing',
    props:{
        label:String,
    },
    data(){
        return {
            arr:[
            {
                name:"小亮",
                title:"标题:xxxxx",
                text:"内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            },
            {
                name:"小亮",
                title:"标题:xxxxx",
                text:"内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            },
            {
                name:"小亮",
                title:"标题:xxxxx",
                text:"内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            }
        ],
        }
    },
    mounted(){
        const arr = [
            {
                name:"小亮",
                title:"标题:xxxxx",
                text:"内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            },
            {
                name:"小亮",
                title:"标题:xxxxx",
                text:"内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            },
            {
                name:"小亮",
                title:"标题:xxxxx",
                text:"内容：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            }
        ]
        // setTimeout(()=>{
        //     this.arr = arr
        // },2000) 
    },
    beforeDestroy(){
        
    }
}
</script>

<!-- 样式 -->
<style scoped>
.listing{
    width: 100%;
    height: auto;
}
.listing .item{
    width: 100%;
    height: 128px;
    margin: 10px auto;
    overflow: hidden;
}

.listing .item :hover{
    background-color: #eae9e9;
}
.content{
    width: 100%;
    height: 100%;
    /* margin: 1%; */
    /* background-color: aquamarine; */
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.content .title{
    width: 100%;
    height: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin: 10px 0;
}

.content .text{
    width: 100%;
    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
    color: #999898;
    margin-bottom: 10px;
}

.content .footer{
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #939191;
    margin-bottom: 10px;
}
</style>