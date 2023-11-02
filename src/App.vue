<template>
  <div id="app">
    <Header v-if="isHeader"></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer: () => import('./components/Footer')
  },
  computed:{
    // 头部是否显示
    isHeader(){
      return this.$route.meta.isHeader;
    }
  }  
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;

}

#app {
  position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   zoom: 100%;
   overflow: hidden;
   /* transform: translateY(50%); */
}
</style>
