<template>
  <div class="header-bottom">
    <div class="bottom-content">
      <router-link to="/home">首页</router-link>
      <router-link to="/rank">排行榜</router-link>
      <router-link to="/library">书库</router-link>
      <!--<router-link to="/magic">玄幻</router-link>-->
      <!--<router-link to="/city">都市</router-link>-->
      <!--<router-link to="/net">网络</router-link>-->
      <!--<router-link to="/samePeople">同人</router-link>-->
      <!--<router-link to="/scine">科幻</router-link>-->
      <a href="https://www.foreader.com.cn/admin_login/" class="write">
        <img src="../../assets/img/web/home/sy_xiezuopingtai.png" alt="">
        写作平台
      </a>
      <a class="phone-login" v-on:mouseenter="hoverTest()" v-on:mouseleave="hoverLeaveTest()">
        <img  src="../../assets/img/web/home/ic_phone.png" alt="">
        手机端
      </a>

      <img class="android-qr-code" src="../../assets/img/qr_android_download.png" v-show="showQrcode"/>

    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              showQrcode: false
            }
        },
        methods: {
          hoverTest() {
            this.showQrcode = true
          },
          hoverLeaveTest() {
            this.showQrcode = false
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-bottom
    width: 100%
    background rgba(77,139,238,1)
    .bottom-content
      position relative
      margin:0 auto
      width: 990px
      height: 48px
      line-height: 48px
      .android-qr-code
        display block
        width 120px
        height 120px
        z-index 9999
        right: 68px;
        position absolute
      a
        display inline-block
        width: 80px
        height: 47px
        font-size 14px
        text-align center
        color: #eee
        vertical-align middle
      .router-link-active
        background-color:  #f3799c !important
        color: #fff
        border-radius 4px
        font-weight 500
        font-size 16px !important
      .write
        margin-left 10px

      .write,.phone-login
        float: right
        img
          width 20px
          height 20px
          vertical-align middle

</style>
