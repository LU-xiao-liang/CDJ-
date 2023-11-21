<!-- 结构 -->
<template>
    <div class="content">
        <div class="background">
            <img src="@/assets/background/350.jpg" alt="">
        </div>
        <div class="text">
            <p>CDJforum</p>
            <p style="font-size: 40px;">一个基于学院的论坛</p>
        </div>
        <div class="form">
            <div class="title">
                <p>CDJforum登录</p>
            </div>
            <div class="login">
                <el-form :label-position="labelPosition" label-width="50px" :model="userAccount">
                    <el-form-item label="学号">
                        <el-input v-model="userAccount.studentNumder" placeholder="请输入学号" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="userAccount.pass" show-password ></el-input>
                        <el-checkbox v-model="userAccount.checked">记住密码</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width: 100%;" type="primary" @click="handleLogin">登录</el-button>
                        <p style="text-align: right;"><el-link type="primary">忘记密码</el-link></p>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: '',
    data() {
        return {
            labelPosition: 'right',
            userAccount: {
                studentNumder: '',
                pass: '',
                checked:false
            }
        };
    },
    methods:{
        async handleLogin(){
            // 验证学号是否输入
            if(!this.validatorForm()) return

            const data = {
                studentNumder: this.userAccount.studentNumder,
                pass: this.userAccount.pass
            }
            const result = await this.$store.dispatch('reqLogin',data)
            if(this.$store.state.user.name){
                this.$router.push('/forum')
                this.setLocalStorage()
            }else {
                console.log(result)
                this.$message.error(result)
            }
        },
        // 判断用户是否记住密码，如果记住就把账号信息存储在本地
        setLocalStorage(){
            if(this.userAccount.checked){
                localStorage.setItem('userAccount',JSON.stringify(this.userAccount))
            }else{
                localStorage.removeItem('userAccount')
            }
        },
        // 验证表单
        validatorForm(){
            if(!this.userAccount.studentNumder){
                this.$message.error('学号不能为空')
                return false
            }else if(!this.userAccount.pass){
                this.$message.error('密码不能为空')
                return false
            }else {
                return true
            }
        }
    },
    mounted() {
        // 获取用户缓存
        if(localStorage.getItem('userAccount')){
            this.userAccount = JSON.parse(localStorage.getItem('userAccount'))
        }
    }
}
</script>

<!-- 样式 -->
<style scoped>
.content {
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    /* position: relative; */
    overflow: hidden;
}

.form {
    width: 50vh;
    height: 60vh;
    position: absolute;
    top: 54%;
    left: 80%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 2%;
    box-shadow: 1px 1px 10px #6e6d6d;
}

.form .title {
    width: 100%;
    height: 20%;
    text-align: center;
    color: #6e6d6d;
    font-size: 30px;
    font-weight: 900;
    border-bottom: 1px solid #6e6d6d;
    overflow: hidden;
}

.form .login {
    width: 80%;
    height: 80%;
    overflow: hidden;
    margin-top: 50px;
    margin-left: 20px;
}

.background {
    width: 100%;
    height: 100%;
}

.background img {
    width: 100%;
    height: 100%;
}

.content .text {
    position: absolute;
    top: 20%;
    left: 5%;
    /* transform: translate(-20%, -50%); */
    font-size: 100px;
    font-weight: 900;
    color: #fff;
    letter-spacing: 10px;
    transform: rotate(-20deg) skew(20deg);
    text-shadow:
        -1px 1px 0 #ddd,
        -2px 2px 0 #ddd,
        -3px 3px 0 #ddd,
        -4px 4px 0 #ddd,
        -5px 5px 0 #ddd,
        -6px 6px 0 #ddd,
        -7px 7px 0 #ddd,
        -8px 8px 0 #ddd,
        -9px 9px 0 #ddd,
        -10px 10px 0 #ddd;
}
</style>    