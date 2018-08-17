export default{
  install(Vue,options)
  {
    Vue.prototype.isLogin = function () {
      return this.$cookie.get('web_tk')
    }
  }
}
