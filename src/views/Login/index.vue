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
                <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
                    <el-form-item label="用户">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="formLabelAlign.region"></el-input>
                        <el-checkbox v-model="formLabelAlign.checked">记住密码</el-checkbox>
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
            formLabelAlign: {
                name: '',
                region: '',
                checked:false
            }
        };
    },
    methods:{
        handleLogin(){
            console.log(this.formLabelAlign)
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