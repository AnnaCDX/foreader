<template>
  <div >
    <div class="login-container">
      <div class="login-body">
        <p class="lgn-title">登录</p>
        <form @submit.prevent="login">
          <div class="login_message">
            <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
            <button class="get_verification"
                    v-if="!computedTime"
                    :class="{right_phone_number:rightPhoneNumber}"
                    @click.prevent="getVerifyCode">获取验证码
            </button>
            <button disabled="disabled" class="get_verification" v-else>已发送({{computedTime}}s)</button>
          </div>
          <div class="login_verification">
            <input type="text" maxlength="8" placeholder="验证码" v-model="password">
          </div>
          <input type="submit" value="登录" class="login_submit">
        </form>
      </div>
      <alert-tip v-if="showAlert"
                 @closeTip="closeTip"
                 :alertText="alertText"/>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {captureLogin,reqCapture} from '../../api'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {setStore} from '../../common/utils/storageUtils'
  export default {
    data() {
      return {
        showPassword: false, // 是否显示密码
        computedTime: 0, //倒数记时
        phone: "", //电话号码
        password: '', //短信验证码
        name: '', //用户名
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
      }
    },

    computed: {
      //判断手机号码
      rightPhoneNumber: function () {
        return /^1\d{10}$/.test(this.phone)
      }
    },

    methods: {
      ...mapActions(['recordUserInfo']),

      // 获取短信验证码
      async getVerifyCode() {
        if (this.rightPhoneNumber) {
          this.computedTime = 30
          this.intervalId = setInterval(() => {
            this.computedTime--
            if (this.computedTime == 0) {
              clearInterval(this.intervalId)
            }
          }, 1000)
          let {phone} = this
          console.log(phone)
          //发送短信验证码
           let result = await reqCapture(phone)
        }
      },

      // 发送登录信息
      async login() {
        // debugger

          if (!this.phone) {
            this.showAlert = true;
            this.alertText = '手机号码不正确'
            return
          } else if (!(/^\d{4}$/gi.test(this.password))) {
            this.showAlert = true;
            this.alertText = '短信验证码不正确'
            return
          }

          //手机号短信登录
          const result = await captureLogin("password",this.phone, this.password,'dxsatfpxrna86ifu7v29m5n9s0rdr2dafmmyp0d8',"phone");
          if(result.user) {
            this.userInfo = result.user
          } else {
            this.userInfo = {
              msg: '登陆失败, 手机号或验证不正确'
            }
          }
        console.log(this.userInfo)
        //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
        if (!this.userInfo.id) {
          this.showAlert = true
          this.alertText = this.userInfo.msg
        } else {
          this.recordUserInfo(this.userInfo)
          setStore("userinfo",this.userInfo)
          this.$router.push("/home")

        }
      },
      // 关系提示框
      closeTip() {
        this.showAlert = false
      }
      },
    components: {
      AlertTip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.login-container
  .login-body
    width:300px
    height:300px
    border:1px solid #eeeeee
    margin:0 auto
    .lgn-title
      font-weight: bold
      font-size: 16px
      text-align center
      vertical-align middle
      margin: 50px auto 20px
    form
      width:250px
      height:200px
      margin:0 auto
      .login_message
        position relative
        margin-bottom 15px
        input
          width 100%
          height:30px
          border-radius 4px 0 0 4px

        .get_verification
          height:30px
          background rgba(255, 255, 255, 0)
          outline none
          vertical-align middle
          line-height 30px
          text-align center
          color: #eee
          border-radius 0 4px 4px 0
          position: absolute;
          top: 0px;
          right: 0;
          border: none;
          &.right_phone_number
            color: #000
      .login_verification
          input
            width 100%
            height:30px
            border-radius 4px
      .login_submit
        width:100%
        height:30px
        background #2d8cf0
        text-align center
        margin-top: 20px
        vertical-align middle
</style>
