<template>
  <div class="text-container">
    <vueHeadful
      title="帮助中心"
      description="速更-帮助中心"
    />
    <HeaderWithSearch></HeaderWithSearch>
    <div class="header-bottom">
      <div class="bottom-content">
        <router-link to="/home">首页</router-link>
        <router-link to="/rank">排行榜</router-link>
        <!--<router-link to="/library">书库</router-link>-->
        <!--<router-link to="/magic">玄幻</router-link>-->
        <!--<router-link to="/city">都市</router-link>-->
        <!--<router-link to="/net">网络</router-link>-->
        <!--<router-link to="/samePeople">同人</router-link>-->
        <!--<router-link to="/scine">科幻</router-link>-->
        <div class="write-phone">
          <!--<router-link to="/phone" class="phone-port">-->
          <!--<img  src="../../assets/img/web/home/sy_shoujiduan.png" alt="">-->
          <!--手机端-->
          <!--</router-link>-->
          <router-link to="/write" class="write-plat">
            <img src="../../assets/img/web/home/sy_xiezuopingtai.png" alt="">
            写作平台
          </router-link>

        </div>

      </div>
    </div>
    <div class="text-main">
      <div class="content-header">
        速更小说网帮助中心
      </div>
      <div class="content-main">
       <div class="each-item">
         <p class="type-title">意见反馈</p>
         <p class="type-content">QQ:1254851128（速速）</p>
       </div>
        <div class="each-item">
          <p class="type-title">版权合作</p>
          <p class="type-content">邮箱: <a href="javascript:;">liuxi@foreader.cn</a></p>
        </div>
        <div class="each-item">
          <p class="type-title">品牌合作</p>
          <p class="type-content">邮箱: <a href="javascript:;">jiashengting@foreader.cn</a></p>
        </div>
        <div class="each-item">
          <p class="type-title">投稿</p>
          <p class="type-content">邮箱: <a href="javascript:;">wangsy@foreader.cn</a></p>
        </div>
        <div class="each-item">
          <p class="type-title">工作时间</p>
          <p class="type-content">周一到周五 09：30-18：30</p>
        </div>
      </div>
    </div>
    <div class="footer ">
      <div class="center">
        <router-link to="/helpCenter" >帮助中心</router-link>
        <router-link to="/privacy">隐私策略</router-link>
        <router-link to="/aggreement">使用协议</router-link>
      </div>
      <p class="copy-right ">CopyRight &copy; 2018 foreader.com.cn All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
  import HeaderWithSearch from "../../components/HeaderWithSearch/HeaderWithSearch"
  import vueHeadful from 'vue-headful';

  export default {
    data() {
      return {

      }
    },
    mounted(){

    },
    methods:{

    },
    components:{
      vueHeadful,
      HeaderWithSearch
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  text-primary= rgba(0,0,0,.85)
  text-secondary = rgba(0,0,0,.65)
  .first-intro
    font-weight: bold
  .text-container
    background-color: transparent
    font-family:
      system, -apple-system, BlinkMacSystemFont,
      "PingFang SC", "Segoe UI", "Microsoft YaHei", "wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", Helvetica, Arial, sans-serif;

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
          height: 47px
          font-size 14px
          text-align center
          color: #eee
          vertical-align middle
        .router-link-active
          background #f3799c
          color: #fff
        .write-phone
          position absolute
          right 0
          bottom 0
          .write-plat,.phone-port
            img
              width 20px
              height 20px
              vertical-align middle


    .text-main
      background-color #fff
      width 990px
      margin 20px auto
      .content-header
        height 120px
        background url("../../assets/img/web/helpAgreement/bg.png")
        background-repeat no-repeat
        background-size 100% 100%
        padding-left 85px
        color #637fa1
        font-size 20px
        font-weight 500
        font-family "PingFang SC"
        line-height 120px
      .content-main
        padding 77px  125px 54px 85px
        .each-item
          margin-top 30px
          .type-title
            color rgba(0,0,0,.85 )









          &:last-child
            margin-bottom 30px
    .footer
      width: 990px;
      margin 0 auto
      .copy-right
        margin 0 auto 30px
        width 720px
        color #d9d9d9
        text-align center
      .center
        width 720px
        margin 30px auto
        text-align center
        a
          color #b9b9b9


  h2
    color: text-primary;
    font-size: 14px;
    line-height: 24px;
    margin-top: 25px;
    font-weight: bold;
  p
    color: text-primary;
    font-size: 12px;
    line-height: 18px;

  @media (max-width: 500px) and (min-width: 100px), (max-width: 500px) and (min-height: 200px) {
    .text-container {
      background-color: white;
      color: rgba(38, 48, 54, .5);
      padding: 15px;
      width: auto;
      font-family: system, -apple-system, BlinkMacSystemFont,
        "PingFang SC", "Segoe UI", "Microsoft YaHei", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-align: justify;
    }

    .header-bottom,.content-header,.header-fix,.footer {
      display none
    }
    .text-container>.text-main {
      background-color transparent
      width 100%
      margin 0
    }
    .text-container>.text-main>.content-main {
      padding 0
    }
  }

</style>
