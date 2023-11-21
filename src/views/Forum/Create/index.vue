<template>
  <!-- ckeditor 父元素 -->
  <div class="content">

    <div class="editor-view">
      <el-page-header @back="goBack">
      </el-page-header>
      <div>
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
        <Editor style="height: 500px; overflow-y: hidden;" v-model="form.userText" :defaultConfig="editorConfig"
          :mode="mode" @onCreated="onCreated" />
      </div>
      <div class="text-button">
        <el-button plain @click="empty">清 空</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">确 定</el-button>
      </div>
      <el-dialog title="提示" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="标签" label-width="120px">
            <el-input v-model="form.title" placeholder="请输入文章标签" style="width: 200px;" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="内容" label-width="120px">
            <el-input type="textarea" maxlength="50" show-word-limit :rows="2" v-model="form.simple"
              placeholder="请输入文章简要内容，便于用户理解" style="width: 60%;" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="issue">发 布</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
  
<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { reqtPublishArticle } from '@/api'
export default {
  name: 'Create',
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      toolbarConfig: {},
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'simple', // or 'simple'
      dialogFormVisible: false,
      form: {
        title: '',
        simple: '',
        userText: ""
      }
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    goBack() {
      this.$router.go(-1)
    },
    empty() {
      this.form.userText = ''
    },
    async issue() {
      // 检查
      this.dialogFormVisible = this.verify()
      // 弹出表单设置文章标题与简要内容

      if (this.dialogFormVisible) return
      const data = {
        ...this.form,
        userID: this.$store.state.user.ID,
      }
      const result = await reqtPublishArticle(data)
      if (result.code === 200) {
        this.$message({
          message: '发布成功',
          type: 'success'
        });
      }
    },
    verify() {
      if (this.form.title.length < 1 || this.form.simple.length < 1) {
        this.$message.error('标题和内容不能为空')
        return true
      }
      return false
    }
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  border-radius: 10px;
  position: relative;
}

.editor-view {
  margin: 10px;
}

.text-button {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
</style>