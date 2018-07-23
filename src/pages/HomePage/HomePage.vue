<template>
  <div>

      <div class="hp-body" v-if="userInfo">
        <p class="info">个人信息  <router-link to="/msite/modify">修改信息</router-link></p>
        <p class="marginTop">ID:<span>{{userInfo.id}}</span></p>
        <p class="marginTop">昵称：<span>{{userInfo.name}}</span></p>
        <p class="marginTop">性别：<span>{{userInfo.sex==0?"女":"男"}}</span></p>
        <p class="marginTop">生日：<span>{{userInfo.birthday}} </span></p>
        <p class="marginTop">个性签名：<span>{{userInfo.description}}</span></p>
        <div class="wallet">
          <p class="wallet-title">我的钱包</p>
          <div class="line"></div>
          <span class="read-coin">阅读币：<span>{{myWallet.primary_balance + myWallet.secondary_balance}}</span></span>
          <router-link to="/recharge" class="charge">充值</router-link>
        </div>
        <div class="security">
          <p class="security-title">账户安全</p>
          <div class="line"></div>
          <p class="my-phone">手机号：<span>{{userInfo.mobile}}</span></p>
          <p class="my-wx">微信：<router-link to="/bindwx">去绑定</router-link><router-link to="/rmvwx" v-show="isShow">解绑</router-link></p>
          <p class="my-qq">QQ：<router-link to="/bindqq">去绑定</router-link><router-link to="/rmvqq" v-show="isShow">解绑</router-link></p>
        </div>
      </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getStore} from '../../common/utils/storageUtils'
    export default {
        data() {
          return {
            isShow:false
          }
        },
        mounted(){
        },
        methods:{
        },
      watch:{
      },
        computed:{
          ...mapState(["userInfo","myWallet"]),

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .hp-body
      background #fff
      width: 710px
      height: 710px
      padding: 0 30px 44px
      .info
        height: 68px
        line-height 68px
        border-bottom 1px solid #e8e8e8
        font-family: PingFangSC;
        font-size: 18px;
        font-weight: 500;
        color rgba(0,0,0,.85)
        a
          margin-left 80%
          font-size 12px
      .marginTop
        margin-top: 20px
        font-family: PingFangSC;
        font-size: 14px;
        line-height: 1
        color #9b9b9b
        span
          color: rgba(0, 0, 0, 0.85);
          line-height 1
          font-family "PingFang SC"
      .wallet
        margin 60px 0
        .wallet-title
          font-family: PingFangSC;
          font-size: 18px;
          font-weight: 500;
          color rgba(0,0,0,.85)

        .line
          border 1px solid #e8e8e8
          margin 20px 0
        .read-coin
          display inline-block
          height 24px
          color #e8e8e8
          span
            color #f3799c
        .charge
          width: 54px;
          height: 24px;
          border-radius: 2.9px;
          background-color: #f3799c;
          text-align center
          line-height:24px
          margin-left 15px
          color #fff

      .security
        .security-title
          ont-family: PingFangSC;
          font-size: 18px;
          font-weight: 500;
          color rgba(0,0,0,.85)
        .line
          border 1px solid #e8e8e8
          margin 20px 0
        .my-phone
          color #e8e8e8
          span
            color rgba(0,0,0,.85)
        .my-wx
          color #e8e8e8
          margin 14px 0
        .my-qq
          color #e8e8e8

</style>
