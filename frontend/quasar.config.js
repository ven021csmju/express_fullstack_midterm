module.exports = function (ctx) {
  return {
    build: {
      vueRouterMode: 'history'
    },
    devServer: {
      port: 8080
    },
    framework: {
      iconSet: 'mdi-v6'
    }
  }
}