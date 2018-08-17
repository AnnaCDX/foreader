export default{
  install(Vue,options)
  {
    Vue.prototype.isLogin = function () {
      return this.$cookie.get('web_tk')
    }

    Vue.prototype.clearLoginInfo = function () {
      this.$cookie.delete("id");
      this.$cookie.delete('web_tk');
    }
  }
}
