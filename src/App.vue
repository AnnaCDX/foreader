<template>
    <div>
      <vueHeadful
        title="速更小说"
        description="速更小说"
        image="./assets/img/home/favicon.ico"
      />
      <div class="container" >
        <!--<Header v-show="$route.meta.showHead" @closeTip="closeTip(true,arguments)"></Header>-->
        <div class="header" v-show="$route.meta.showHead">
          <HearderBack></HearderBack>
          <HeaderFix @closeTip="closeTip(true,arguments)"></HeaderFix>
          <HeaderBottom></HeaderBottom>
        </div>
        <router-view></router-view>
      </div>
      <div class="login" v-show="isShow"><!--isShow-->
        <div class="login-body">
          <i  class="cha iconfont icon-chahao" @click="closeTip(false)"></i>

          <!--<div class="login-header">-->
            <!--&lt;!&ndash;<a href="javascript:;" @click="setLoginWay(true)" :class="{on: loginWay}">登录</a>&ndash;&gt;-->
            <!--&lt;!&ndash;<a href="javascript:;" @click="setLoginWay(false)" :class="{on: !loginWay}">注册</a>&ndash;&gt;-->
          <!--</div>-->
          <div class="login-main">
            <form @submit.prevent="login">
              <div class="login-part" v-if="loginWay">
                <div class="lgn-part-phone">
                  <i class="icon iconfont icon-shoujihao"></i>
                  <input class="phone-login" type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                </div>
                <span class="phone-alert" v-show="phoneAlert">请输入11位有效手机号码</span>
                <div class="lgn-part-capture">
                  <div class="capture-left">
                    <i class="icon iconfont icon-xiaoxi"></i>
                    <input class="capture-login" type="text" placeholder="验证码" v-model="password">
                  </div>
                  <button class="get_verification"
                          v-if="!computedTime"
                          :class="{right_phone_number:rightPhoneNumber}"
                          @click.prevent="getVerifyCode">获取验证码
                  </button>
                  <button disabled="disabled" class="get_verification" v-else>已发送({{computedTime}}s)</button>
                </div>
                <span class="phone-alert" v-show="captureAlert">请输入四位有效验证码</span>
                <div class="auto-forget">
                  <label><input name="isLogin" type="checkbox" value="" v-model="isSelect"/></label>
                  <span class="isAuto" :class="{selected:isSelect}">自动登录</span>
                  <router-link class="fgt-pswd" to="/forget">忘记密码</router-link>
                </div>
                <input type="submit" value="登 录" class="login_submit">
                <div class="otherWay">
                  <p class="other-click"><a href="###">其它方式登录</a></p>
                  <div class="wx-qq">
                    <a href="###" class="weixin"><i class="icon iconfont icon-weixin"></i></a><a href="###" class="qq"><i class="icon iconfont icon-qq"></i></a>
                  </div>
                </div>
              </div>
              <!--<div class="register-part" v-else>-->
                <!--<div class="lgn-part-phone">-->
                  <!--<Select v-model="choose" class="down-list" style="width: 72px;height: 40px;" placeholder="+86">-->
                    <!--<Option v-for="(item,index) in phonePrefix" :value="item.value" :key="index">{{item.label}}</Option>-->
                  <!--</Select>-->
                  <!--<input class="phone-login"  type="tel" maxlength="11" placeholder="手机号" v-model="phone">-->
                <!--</div>-->
                <!---->
                <!--<div class="lgn-part-capture">-->
                  <!--<div class="capture-left">-->
                    <!--<i class="icon iconfont icon-xiaoxi"></i>-->
                    <!--<input class="capture-login" type="text" placeholder="验证码" v-model="password">-->
                  <!--</div>-->
                  <!--<button class="get_verification"-->
                          <!--v-if="!computedTime"-->
                          <!--:class="{right_phone_number:rightPhoneNumber}"-->
                          <!--@click.prevent="getVerifyCode">获取验证码-->
                  <!--</button>-->
                  <!--<button disabled="disabled" class="get_verification" v-else>已发送({{computedTime}}s)</button>-->
                <!--</div>-->
                <!--<div class="agreement">-->
                  <!--<label><input name="isLogin" type="checkbox" value="" v-model="isRight"/></label>-->
                  <!--<a href="###" class="is-agree">我已阅读并同意《用户服务协议》</a>-->
                <!--</div>-->
                <!--<input type="submit" :disabled="!isRight" :class="{on:isRight}" value="注册" class="login_submit">-->
              <!--</div>-->
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import {captureLogin,reqCapture} from './api'
  import {Select,Option,Input} from 'iview'
  import {mapActions,mapState} from 'vuex'
  import HearderBack from "./components/HeaderBack/HeaderBack"
  import HeaderFix from "./components/HeaderFix/HeaderFix"
  import HeaderBottom from "./components/HeaderBottom/HeaderBottom"
  import vueHeadful from 'vue-headful'

  export default {
        data(){
          return {
            isShow:false,
            computedTime: 0,
            phone: "", //电话号
            password: '', //验证码
            loginWay:true,
            isSelect:false,
            isRight:false,
            phonePrefix:[
              {
                value: '+86',
                label: '+86'
              },
              {
                value: '+20',
                label: '+20'
              },
              {
                value: '+10',
                label: '+10'
              },
              {
                value: '+13',
                label: '+13'
              },
            ],
            choose:"",
            alertInfo:"",
            phoneAlert:false,
            captureAlert:false
          }
        },
        computed:{
          rightPhoneNumber: function () {
            return /^1\d{10}$/.test(this.phone)
          }
        },
        methods:{
          ...mapActions(["recordUserInfo"]),
          closeTip(bool){
            this.isShow=bool
          },
          setLoginWay(bool){
            this.loginWay = bool
          },
          async getVerifyCode() {
            if (this.rightPhoneNumber) {
              this.computedTime = 60
              this.intervalId = setInterval(() => {
                this.computedTime--
                if (this.computedTime == 0) {
                  clearInterval(this.intervalId)
                }
              }, 1000)
              let {phone} = this
              console.log(phone)
              //发送短信验证码
           await reqCapture(phone)
            }
          },
          async login() {
            // debugger

            if (!this.phone) {
              this.phoneAlert = true
              return
            } else if (!(/^\d{4}$/gi.test(this.password))) {
             this.captureAlert = true
              return
            }

            //手机号短信登录
            const result = await captureLogin("password",this.phone, this.password,'dxsatfpxrna86ifu7v29m5n9s0rdr2dafmmyp0d8',"phone");
            if(result.user) {
              this.$cookies.set("tk",result.access_token)
              this.$cookies.set("id",result.user.id)
              this.isShow = false
              this.recordUserInfo(result.user)
            } else {
              this.alertInfo = '登陆失败, 手机号或验证不正确'

            }

            }
          },
        components:{
          HearderBack,
          Option,
          HeaderFix,
          HeaderBottom,
          Select,
          Input,
          vueHeadful
        }

 }

</script>
<style lang="stylus" rel="stylesheet/stylus" >
img
  object-fit cover
.container
  width:100%
  height 100%
  min-height 100vh
  background #F8F8F8
  font-family:
   system, -apple-system, BlinkMacSystemFont,
   "PingFang SC", "Segoe UI", "Microsoft YaHei", "wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
   "Helvetica Neue", Helvetica, Arial, sans-serif;
  .header
    .header-top
      position relative
      margin:0 auto
      width: 990px
      height: 64px
      overflow hidden
      .top-head,.top-center,.top-tail
        line-height: 64px
        height:64px
      .top-head
        float left
        width 142px
        background rgba(216,216,216,1)
      .top-center
        font-size 0
        .ivu-input-wrapper
          width:261px
          .ivu-input
            border-radius 4px 0 0 4px
        .span
          display inline-block
          vertical-align middle
          width:45px
          height:32px
          line-height 32px
          text-align center
          border-radius 0 4px 4px 0
          background rgba(77,139,238,1)
          .icon
            font-size 14px
      .top-tail
          float: right
          width:135px
          font-size 0
        .search-btn
          display inline-block
          font-size 14px
          margin:0 8px
          .icon
            font-size:16px
      .private
          width 162px

    .header-bottom
      width: 100%
      background rgba(77,139,238,1)
      .bottom-content
        position relative
        margin:0 auto
        width: 990px
        height: 48px
        line-height: 48px
        a
          display inline-block
          width: 80px
          font-size 14px
          text-align center
          color: #eee
          vertical-align middle
          height: 100%;
          position: relative;
          top: -1px;
        .router-link-active
          background rgba(70,127,217,1)
          color: #fff
        .write
          float: right
.login
  position fixed
  top:0
  bottom 0
  left 0
  right 0
  background rgba(0,0,0,.5)
  z-index 300
  .login-body
    position absolute
    top: 50%
    left: 50%
    margin-top -215px
    margin-left -216px
    width: 432px;
    height: 430px;
    border-radius: 4px;
    padding: 7px 15px 10px 16px
    background-color: #ffffff;
    .cha
      position absolute
      top:0
      right:0
    .login-header
      width:100%
      height:49px
      padding 0 40px
      a
        display inline-block
        width:136px
        height:49px
        text-align center
        line-height 49px
        box-sizing border-box
        color #9b9b9b
        &.on
          border-bottom 2px solid #4d8bee
          color: #4d8bee
      /*.icon*/
        /*position absolute*/
        /*top:0*/
        /*right:0*/

    .login-main
      margin-top: 34px
      padding: 0 16px
      .login-part
        .icon
          width: 12px
          height: 14px
          font-size 12px
          margin-left: 8px
          color: rgba(0,0,0,.25)
        input
          &::-moz-placeholder
            color: rgba(0,0,0,.25)
            font-size 12px
          &::-webkit-input-placeholder
            color:rgba(0,0,0,.25)
          &:-ms-input-placeholder
            color:rgba(0,0,0,.25)
        .lgn-part-phone
          width: 368px;
          height: 40px;
          border-radius: 4px;
          background-color: #ffffff;
          border: solid 1px #d9d9d9;
          line-height 40px
          .phone-login
            height:30px
            width:92%
        .phone-alert
          color red
        .lgn-part-capture
          position relative
          margin:24px 0
          .capture-left
            display inline-block
            line-height: 40px;
            width: 258px;
            height: 40px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #d9d9d9;
           .capture-login
              height:30px
              width:90%
          .get_verification
            height:40px
            width: 102px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #d9d9d9;
            outline none
            vertical-align middle
            line-height 30px
            text-align center
            color: #eee
            position: absolute;
            top: 0px;
            right: 0;
            &.right_phone_number
              color: #000
        .auto-forget
          margin-bottom 22px
          .isAuto
            color rgba(0,0,0,.45)
            font-family: PingFangSC;
          .selected
            color: #4d8bee
          .fgt-pswd
            float right
        .login_submit
          width: 368px;
          height: 40px;
          border-radius: 4px;
          background-color: #4d8bee;
          color: #fff
          margin-botom 32px

        .otherWay
          margin-top 40px
          .other-click
            text-align center
            margin-bottom 17px
            a
              color rgba(0,0,0,.65)
          .wx-qq
            text-align center
            a
              display inline-block
              width:35px
              height:35px
              border-radius 50%
              border:1px solid rgba(0,0,0,.65)
              text-align center
              line-height 35px
            .icon
              font-size 26px
              border-radius 4px
              color rgba(0,0,0,.65)
              margin-left:-11px
            .weixin
              margin-right 13px
            .qq
              margin-left 13px
      .register-part
        .icon
          width: 12px
          height: 14px
          font-size 12px
          margin-left: 8px
          color: rgba(0,0,0,.25)
        input
          &::-moz-placeholder
            color: rgba(0,0,0,.25)
            font-size 12px

          &::-webkit-input-placeholder
            color:rgba(0,0,0,.25)
            font-size 12px

          &:-ms-input-placeholder
            color:rgba(0,0,0,.25)
            font-size 12px

        .lgn-part-phone
          width: 368px;
          height: 40px;
          border-radius: 4px;
          border:1px solid #d9d9d9
          line-height 40px
          background-color: #ffffff;
          .down-list
            .ivu-select-selection
              height:36px
              border:none
              border-right:1px solid #d9d9d9
              border-radius 4px 0 0 4px
              .ivu-select-selected-value
                text-align center
          .phone-login
            height:34px
            width:79%
            border-radius 4px
        .lgn-part-capture
          position relative
          margin:24px 0
          .capture-left
            display inline-block
            line-height: 40px;
            width: 258px;
            height: 40px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #d9d9d9;
          .capture-login
            height:30px
            width:90%
          .get_verification
            height:40px
            width: 102px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #d9d9d9;
            outline none
            vertical-align middle
            line-height 30px
            text-align center
            color: #eee
            position: absolute;
            top: 0px;
            right: 0;
            &.right_phone_number
              color: #000
        .agreement
          margin 44px 0 22px
          .is-agree

            font-size 14px
            color: rgba(0,0,0,.65)
        .login_submit
          width: 368px;
          height: 40px;
          border-radius: 4px;
          background-color: rgba(77,139,238,.8);
          color: #fff
          margin-botom 32px
          &.on
            background-color #4d8bee
</style>
