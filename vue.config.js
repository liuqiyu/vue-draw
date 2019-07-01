module.exports = {
  chainWebpack: config => {
    config.module
      .rule('xml')
      .test(/\.xml$/)
      .use('xml-loader')
      .loader('xml-loader')
      .end()
    // config.plugin('optimize-css').tap(([{ cssnanoOptions, ...args }]) => {
    //   const preset = cssnanoOptions.preset || []
    //   preset.forEach(item => {
    //     if (typeof item === 'object') {
    //       item.calc = false
    //     }
    //   })
    //   cssnanoOptions.preset = preset
    //   return [{ cssnanoOptions, ...args }]
    // })
  }
}