module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  css: {
    // extract: false // 将组件css提取到一个单独的css文件，只用在生产环境;
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // config.module
    //   .rule('js')
    //   .include.add('/packages')
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options;
    //   });
    config.resolve.symlinks(true);
  },
  configureWebpack: {
    externals: {
      //   AMap: 'AMap'
    }
  }
};
