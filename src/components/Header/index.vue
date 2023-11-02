<!-- 结构 -->
<template>

<div class="header">
    <div class="logo">
        <img src="../../assets/logo.jpg" @click="goHome"  alt="">
    </div>
    <el-button class="signIn" round @click="goRegister"> 注册</el-button>
    <el-button class="login" type="primary" round @click="goLogin">登录</el-button>
</div>

</template>

<!-- 逻辑 -->
<script >
export default {
    name:'Header',
    data(){
        return {
            input:''
        }
    },
    methods:{
        goLogin(){
            this.$router.push('/login')
        },
        goHome(){
            this.$router.push('/')
        },
        goRegister(){
            this.$router.push('/register')
        }
    }
}
</script>

<!-- 样式 -->
<style scoped>
    .header{
        display: flex;
        width: 100%;
        height: 8%;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        color: black;
        background-color: #fff;
        position: relative;
        z-index: 10;
        border-bottom: 1px solid #ccc;
    }
    .header .logo{
        /* flex-grow: 1; */
        /* padding-left:50px; */
        height: 100%;
        width: 15%;
        overflow: hidden;
    }

    .header .logo img{
        height: 120%;
        width: 100%;
        
    }
    .header .signIn{
        margin-left: auto;
    }
    .header .login{
        margin-right: 3%;
    }
</style>