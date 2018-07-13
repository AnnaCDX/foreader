<template>
  <div>

      <div class="hp-body">
        <p class="info">个人信息  <router-link to="/changeInfo">修改信息</router-link></p>
        <p>ID:<span>1234</span></p>
        <p>昵称：<span>小微</span></p>
        <p>性别：<span>男</span></p>
        <p>生日：<span>1993</span>年 <span>8</span>月 <span>76</span>号</p>
        <p>个性签名：<span>你是不是傻</span></p>
        <div class="wallet">
          <p>我的钱包</p>
          <p>阅读币：<span>1111</span></p>
          <router-link to="/recharge">充值</router-link>
        </div>
        <p>账户安全</p>
        <p>手机号：<span>138478784022</span></p>
        <p>微信：<router-link to="/bindwx">去绑定</router-link><router-link to="/rmvwx" v-show="isShow">解绑</router-link></p>
        <p>QQ：<router-link to="/bindqq">去绑定</router-link><router-link to="/rmvqq" v-show="isShow">解绑</router-link></p>
      </div>

  </div>
</template>

<script>
    export default {
        dada() {
          return{
            isShow:false
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .hp-body
      width: 200px
      p
        margin:5px 0
      .info

        a
          position: absolute;
          right: 100px;
          top: 0;
      div
        border-top:1px solid #666
        border-bottom:1px solid #666
        a
          position: absolute;
          right: 100px;
          bottom: 114px;
</style>
