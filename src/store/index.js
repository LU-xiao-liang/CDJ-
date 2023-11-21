// 引入Vue核心库
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex';
// 应用Vuex插件
Vue.use(Vuex)

import {reqtLogin,reqtArticleList} from '@/api'

const actions = {
    // 登录
    async reqLogin(context,value){
        const result = await reqtLogin(value);
        if(result.code === 200){
            context.commit('REQLOGIN',result.data);
            return '登录成功';
        }else {
            return result.message;
        }
    },
    // 获取文章列表接口
    async reqContentList(context,value){
        const result = await reqtArticleList(value);
        if(result.code === 200){
            context.commit('REQCONTENTLIST',result.data);
            return result.data.length;
        }else {
            return 0;
        }
    }

};
// 准备mutations对象——修改state中的数据
const mutations = {
    REQLOGIN(state,result){
        state.user = result;
    },
    REQCONTENTLIST(state,result){
        state.contentList.push(...result);
    }
};
// 准备state对象——保存具体的数据
const state = {
    user:{}, //用户的一些信息
    contentList:[],  // 文章列表
};

const store = new Vuex.Store({
    actions,
    mutations,
    state
})

// 创建并暴露store
export default store
