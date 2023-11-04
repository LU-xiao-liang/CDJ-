<!-- 结构 -->
<template>
    <div class="content">
        <div class="piece the-list">
            <div class="title">
                <span>热门话题</span>
            </div>
            <div class="list">
                <div class="item" v-for="i in num">
                    <el-link :underline="false">{{ i }}: lorem ipsum dolor sit amet consectetur adipisicing elit.</el-link>
                </div>
            </div>
            <div class="footer">
                <el-link :underline="false" @click="isNum">{{ is ? "收起" : "查看更多" }}</el-link>
            </div>
        </div>
        <div class="piece frame">
            <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in imgarr" :key="item">
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
                    url:"https://public.giantapp.cn/upload/931f708fe11748449b5ceda777321646/wallpapers/def1da45652c9f4f07435e683b927b9f/1697367477768_aE4si.jpeg"
                },
                {
                    url:"http://web.livewallpaper.giantapp.cn/livewallpaper/upload/wallpapers/713718036e2046a7a5ba0870c8ba085b/755bdf59647ee5b100014a2b2873715f/1671101693339_OiqSd.jpg"
                },
                {
                    url:"https://ts1.cn.mm.bing.net/th/id/R-C.828d8ebf1a293ac1c07bc876db7fbcaf?rik=futTywE335eA9Q&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f96%2f9696_10.jpg&ehk=fC8r1n1Nq3uqlDSaOPbgrzMsc6nUKCw%2f4gkEaZOlA2Q%3d&risl=&pid=ImgRaw&r=0"
                }
            ]
        }
    },
    methods: {
        isNum() {
            this.num = this.is ? 5 : 10
            this.is = !this.is
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