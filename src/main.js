import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button ,Input ,Form ,FormItem ,Upload ,Radio,Link,Message} from "element-ui"
import './assets/css/style.css'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(Radio)
Vue.use(Link)
Vue.prototype.$message = Message;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
