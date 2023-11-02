<!-- 结构 -->
<template>
    <div class="content">
        <div class="back">
            <img src="http://web.livewallpaper.giantapp.cn/livewallpaper/upload/wallpapers/0cb91fd1c3c545ccaf950c19f9923d59/617ef50c6215ff4107eb7561051abebd/1645602915215_vXVFc.png"
                alt="">
        </div>
        <div class="login">
            <div class="login-title">
                <p><em>CDJforum</em>注册</p>
            </div>
            <div class="login-form">
                <el-form :label-position="labelPosition"  status-icon  :rules="rules" ref="ruleForm"  class="demo-ruleForm" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="姓名" prop="name">
                        <el-input  v-model="formLabelAlign.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="学号" prop="studentNumder" >
                        <el-input v-model="formLabelAlign.studentNumder" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="formLabelAlign.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="formLabelAlign.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="上传头像">
                        <el-upload class="avatar-uploader" :action="actionUrl"  :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio v-model="formLabelAlign.gender" label="男">男</el-radio>
                        <el-radio v-model="formLabelAlign.gender" label="女">女</el-radio>
                    </el-form-item>
                    <el-form-item label="个人简介">
                        <el-input type="textarea" resize="none" rows="3" placeholder="请输入内容"
                            v-model="formLabelAlign.textarea" maxlength="30" show-word-limit>
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
            <el-button style="width: 30%;height: 50px;margin: 0 auto;" type="primary">注册</el-button>
            <el-link style="margin-left: auto;" :underline="false">已有账号, 点击登录...</el-link>
        </div>

    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: 'Register',
    data() {
        // 校验是否输入姓名
        const validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入姓名'));
            } else {
                callback();
            }
        }
        // 校验是否输入学号，且输入的学号是否正确
        const validateStudentNumder=(rule,value,callback)=>{
            const error =""
            if(value===''){
                callback(new Error('请输入学号'))
            }else if(value.length !== 9){
                callback(new Error('您的学号好像不正确，请仔细检查'))
            }else{
                callback()
            }
        }
        // 校验是否输入密码
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formLabelAlign.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        // 校验密码是否一致
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formLabelAlign.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            actionUrl: "", // 配置上传的地址
            labelPosition: 'right',  //设置表单格式
            formLabelAlign: {  //表单
                name: '',
                studentNumder: '',
                pass: '',
                checkPass: '',
                gender: "",  //性别
                textarea: "" //个人简介
            },
            imageUrl: '',   // 预览图片内容
            rules: {
                name: [
                    { validator: validateName, trigger: 'blur'  }
                ],
                studentNumder: [
                    { validator: validateStudentNumder, trigger: 'blur'  }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            console.log(res, file)
            // this.imageUrl = URL.createObjectURL(file.raw);
            // console.log(this.imageUrl)
        },
        beforeAvatarUpload(file) {
            // this.imageUrl = URL.createObjectURL(file.raw);
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                return
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                return
            }
            const reader = new FileReader();
            reader.readAsDataURL(file); // 把图片读成一个dataurl ,还有很多的读取方法，读取成不同内容
            reader.onload = (e) => {
                this.imageUrl = e.target.result;
            }
            return isJPG && isLt2M;
        },
    }
}
</script>

<!-- 样式 -->
<style scoped>
.content {
    width: 100%;
    height: 100%;
}

.back {
    width: 100%;
    height: 100%;
}

.back img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

.login {
    width: 90vh;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-10%, -50%);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.login-title {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    overflow: hidden;
}

.login-title p {
    font-size: 7vh;
    -webkit-text-stroke: 1px #fff;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.2);
    text-shadow:
        -1px 1px #bbb,
        -2px 2px #bbb,
        -3px 3px #bbb,
        -4px 4px #bbb,
        10px 10px rgba(82, 81, 81, 0.533);
}


.login-form {
    margin: 0 auto;
    width: 90%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.avatar-uploader .el-upload {
    border: 1px dashed #7f7b7b;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid #ccc;
}

.avatar {
    width: 100px;
    height: 100px;
    display: block;
}
</style>