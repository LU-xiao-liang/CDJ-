const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/cdjforum': {
        target: 'http://192.168.1.110:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/cdjforum': ''
        }
      }
    }
  }
})
