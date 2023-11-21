<!-- 结构 -->
<template>
    <div class="listing" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <el-skeleton animated :rows="4" v-if="!contentList.length" />
        <div class="item" v-for="(v, i) in contentList" :key="i" @click="goContent(i)">
            <div class="content">
                <div class="title">{{ v.title }}</div>
                <div class="text">
                    <span>{{ v.simple }}</span>
                </div>
                <div class="footer">
                    <span>{{ v.userID }}</span>
                    <span style="margin-left: 70%;">点赞</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>评论</span>
                </div>
            </div>
        </div>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: 'Listing',
    data() {
        return {
            loading: false,
            noMore: false,
        }
    },
    computed: {
        contentList() {
            return this.$store.state.contentList
        },
        disabled() {
            return this.loading || this.noMore   //都为真时，禁用
        }
    },
    methods: {
        // 跳转到文章详情页
        goContent(id) {
            this.$router.push(`/forum/essayshow?id=${id}`)
        },
        async load() {
            console.log('触发')
            if (this.contentList.length) {   // 判断是否有数据
                    this.loading=true
                    const length = await this.$store.dispatch('reqContentList', this.contentList.length)
                    if(length){
                        this.loading=false
                    }else {
                        this.loading = false
                        this.noMore=true
                    }
            } else {  // 没有数据时，加载第一页
                await this.$store.dispatch('reqContentList', 1)
            }
        }
    },
}
</script>

<!-- 样式 -->
<style scoped>
.listing {
    width: 100%;
    height: auto;
}

.listing .item {
    width: 100%;
    height: 128px;
    margin: 10px auto;
    overflow: hidden;
}

.listing .item :hover {
    background-color: #eae9e9;
}

.content {
    width: 100%;
    height: 100%;
    /* margin: 1%; */
    /* background-color: aquamarine; */
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
}

.content .title {
    width: 100%;
    height: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin: 10px 0;
}

.content .text {
    width: 100%;
    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
    color: #999898;
    margin-bottom: 10px;
}

.content .footer {
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #939191;
    margin-bottom: 10px;
}
</style>