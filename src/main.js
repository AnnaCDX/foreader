import Vue from 'vue'
import App from './App'
import VueCookie from 'vue-cookie'
import router from './router'
import {Input} from 'iview'
import store from './store/index'
import "jquery"
import 'babel-polyfill';
import "iview/dist/styles/iview.css"
import axios from 'axios'
import qs from 'qs'
// import "./filter/moment/moment"
import EventProxy from 'vue-event-proxy';
Vue.use(EventProxy);
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if(config.method!='get'){
    config.data=qs.stringify(config.data);
  }
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  let token = window.sessionStorage.getItem("TOKEN");

  if(token) {
    config.headers.common['Authorization'] = "Bearer " + token;
  }
  return config;
},function (error) {
  return Promise.reject(error)
})

//兼容
if (Number.parseInt === undefined) Number.parseInt = window.parseInt;
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat;

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
      || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());
Vue.use(VueCookie)
// Vue.use(iView)
Vue.component("Input",Input)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
