<!-- 结构 -->
<template>
    <div class="content">
        <div class="back">
            <img src="@/assets/background/1645602915215_vXVFc.png"
                alt="">
        </div>
        <div class="register">
            <div class="register-title">
                <p><em>CDJforum</em>注册</p>
            </div>
            <div class="register-form">
                <el-form :label-position="labelPosition" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm"
                    label-width="80px" :model="formLabelAlign">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="formLabelAlign.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="学号" prop="studentNumder">
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
                        <el-upload class="avatar-uploader" :action="actionUrl" :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
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
            <el-button style="width: 30%;height: 50px;margin: 0 auto;" type="primary" @click="register">注册</el-button>
            <el-link style="margin-left: auto;" @click="gologin" :underline="false">已有账号,点击登录...</el-link>
        </div>

    </div>
</template>

<!-- 逻辑 -->
<script >
import { reqtRegister } from "@/api";

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
        const validateStudentNumder = (rule, value, callback) => {
            const error = ""
            if (value === '') {
                callback(new Error('请输入学号'))
            } else if (value.length !== 9 || !+value) {
                console.log(+value)
                callback(new Error('您的学号好像不正确，请仔细检查'))
            } else {
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
                textarea: "", //个人简介
                image: '',
            },
            imageUrl: '',
            rules: {
                name: [
                    { validator: validateName, trigger: 'blur' }
                ],
                studentNumder: [
                    { validator: validateStudentNumder, trigger: 'blur' }
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
    computed: {
        // 验证表单是否填写完成
        checkForm() {
            return !(this.formLabelAlign.name === '' || this.formLabelAlign.studentNumder === '' || this.formLabelAlign.pass === '' || this.formLabelAlign.checkPass === '')
        },
    },
    methods: {
        async beforeAvatarUpload(file) {
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
            this.imageUrl = await this.readAsDataURL(file)  //读成dataURL用于展示

            this.formLabelAlign.image = this.imageUrl
            return isJPG && isLt2M;
        },
        // 把图片读成一个dataurl ,还有很多的读取方法，读取成不同内容
        readAsDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();  //文本读取器
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    resolve(e.target.result);
                }
            })
        },
        // 注册按钮事件
        async register() {
            if (this.checkForm) {
                // 发送请求
                const result = await reqtRegister(this.formData())
                if (result.code == 200) {
                    this.$message({
                        message: `恭喜你，${result.message}`,
                        type: 'success'
                    });
                }

            } else {
                this.$message.error('内容有错误或未填写完整');
            }
        },
        // 整理表单数据
        formData() {
            return {
                name: this.formLabelAlign.name,
                studentNumder: this.formLabelAlign.studentNumder,
                pass: this.formLabelAlign.pass,
                gender: this.formLabelAlign.gender,
                textarea: this.formLabelAlign.textarea,
                image: this.formLabelAlign.image,
            }
        },
        // 跳转到登录页面
        gologin() {
            this.$router.push({ path: '/login' })
        }
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

.register {
    width: 90vh;
    height: 90vh;
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

.register-title {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    overflow: hidden;
}

.register-title p {
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


.register-form {
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