import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Input, 
  Form, 
  FormItem, 
  Upload, 
  Radio, 
  Link, 
  Message, 
  Checkbox,
  Row,
  Col,
  Descriptions,
  DescriptionsItem,
  Avatar,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Skeleton,
  SkeletonItem,
  Divider,
  PageHeader,
  Dialog,
  InfiniteScroll,
} from "element-ui"
import store from './store'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(Radio)
Vue.use(Link)
Vue.use(Checkbox)
Vue.use(Row)
Vue.use(Col)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Avatar)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Skeleton)
Vue.use(SkeletonItem)
Vue.use(Divider)
Vue.use(PageHeader)
Vue.use(Dialog)
Vue.use(InfiniteScroll)
Vue.prototype.$message = Message;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
