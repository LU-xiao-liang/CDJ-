import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);



const router = new VueRouter({
    mode: 'hash',
    routes
})
// 修改路由方法
const routerPush = router.push
const routerReplace = router.replace
router.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
router.replace = function replace(location) {
    return routerReplace.call(this, location).catch(error=> error)
}
// 配置路由守卫
// 前置
router.beforeEach((to, from, next) =>{

    // 原路径与目的路径一致时不跳转
    // if(to.path === from.path){
    //     return
    // }
    next()
})


// 后置
router.afterEach((to, from) => {
    // 修改title标签
    const title = document.querySelector('title')
    title.innerText = to.meta.title
})


export default router