<!-- 结构 -->
<template>
    <div class="content">
        <div class="piece the-list">
            <div class="title">
                <span>热门话题</span>
            </div>
            <div class="list">
                <div class="item" v-for="(v,i) in contentArr">
                    <el-link @click="goessayshow(i)" :underline="false">{{ i+1 }}: {{ v.title }}</el-link>
                </div>
            </div>
            <div class="footer">
                <el-link :underline="false" @click="isNum">{{ is ? "收起" : "查看更多" }}</el-link>
            </div>
        </div>
        <div class="piece frame">
            <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in imgarr" >
                    <img style="height: 100%;width: 100%; object-fit: cover;" :src="item.url" >
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: 'Right',
    data() {
        return {
            is: false,
            num: 5,
            imgarr: [
                {
                    url:require("@/assets/background/1671101693339_OiqSd.jpg")
                },
                {
                    url:require("@/assets/background/1697367477768_aE4si.avif")
                },
                {
                    url:require("@/assets/background/R-C.jpg")
                }
            ]
        }
    },
    computed:{
        contentArr(){
            // return this.$store.state.contentList.slice(0,11)
            if(this.is){
                return this.$store.state.contentList.slice(0,10) || []
            }else {
                return this.$store.state.contentList.slice(0,5) || []
            }
        }
    },
    methods: {
        isNum() {
            this.num = this.is ? 5 : 10
            this.is = !this.is
            console.log(this.contentArr);
        },
        goessayshow(id){
            this.$router.push(`/forum/essayshow?id=${id}`)
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

/* 设置每个版块的外边距与圆角边框 */
.piece {
    margin: 10px 0;
    border-radius: 10px;
    overflow: hidden;
}
.piece:hover{
    box-shadow: 0 0 10px #ccc;
}
.the-list {
    background-color: #fff;
    padding: 20px;
    margin-top: 0;
}

.the-list .title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
}

.the-list .list .item {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 4px 0;
}

.the-list .footer {
    text-align: right;
    margin-top: 10px;
    font-style: italic;
}

.frame {
    width: 100%;
    height: 150px;
    background-color: #fff;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>