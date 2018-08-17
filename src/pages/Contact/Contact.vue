<template>
  <div class="text-container">
    <vueHeadful
      title="联系我们"
      description="速更-联系我们"/>

    <div class="text-main">
      <div class="content-header">
        联系我们
      </div>
      <div class="content-main">
        <div class="each-item">
          <p class="type-content">邮箱: <a href="javascript:;">kefu@foreader.cn</a></p>
        </div>
        <div class="each-item">
          <p class="type-title">编辑部联系方式</p>
          <p class="type-content">鲨鱼: <a href="javascript:;"> 1319505356@qq.com</a></p>
        </div>
        <div class="each-item">
          <p class="type-content">柠檬: <a href="javascript:;">2300488388@qq.com</a></p>
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "../../components/Footer/Footer"
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
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  text-primary= rgba(0,0,0,.85)
  text-secondary = rgba(0,0,0,.65)
  .first-intro
    font-weight: bold
  .text-container
    background-color: rgba(255, 255, 255, 0)

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

        line-height 120px
      .content-main
         min-height 450px
         padding 77px  125px 54px 85px
        .each-item
          margin-bottom 30px
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
        margin 30px auto 25px
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
      background-color rgba(255, 255, 255, 0)
      width 100%
      margin 0
    }
    .text-container>.text-main>.content-main {
      padding 0
    }
  }

</style>
