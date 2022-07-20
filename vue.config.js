const { defineConfig } = require('@vue/cli-service')
const path = require('path')// 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = defineConfig({
  transpileDependencies: true,
  /*configureWebpack: {//cli3版本设置目录别名的方法
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src'),
        '@com': '@/components',
        '@utils': '@/utils',
        '@views': '@/views',
        '@assets': '@/assets'
      }
    }
  },*/
  chainWebpack: config => {//cli4版本设置目录别名的方法
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
  },
  outputDir: 'dist',
})
