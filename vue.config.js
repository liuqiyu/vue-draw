module.exports = {
  chainWebpack: config => {
    config.module
      .rule('xml')
      .test(/\.xml$/)
      .use('xml-loader')
      .loader('xml-loader')
      .end()
  }
}