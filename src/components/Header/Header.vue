<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="top-head"></div>
        <div class="top-center">
          <Input placeholder="默认搜索词" class="tc-input"/>
          <span ><i class="icon iconfont icon-sousuo"></i></span>
        </div>
        <div class="top-tail" :class="{private:!isSee}">
          <router-link to="/phone" class="search-btn"><i class="icon iconfont icon-shoujiduan"></i>手机端</router-link>
          <router-link to="/login" class="search-btn" v-show="isSee"><i class="icon iconfont icon-gerenzhongxin"></i>登陆</router-link>
          <router-link to="/msite" class="search-btn" v-show="!isSee"><i class="icon iconfont icon-gerenzhongxin"></i>个人中心</router-link>

        </div>
      </div>
      <div class="header-bottom">
        <div class="bottom-content">
          <router-link to="/home">首页</router-link>
          <router-link to="/rank">排行榜</router-link>
          <router-link to="/library">书库</router-link>
          <router-link to="/magic">玄幻</router-link>
          <router-link to="/city">都市</router-link>
          <router-link to="/net">网络</router-link>
          <router-link to="/same">同人</router-link>
          <router-link to="/scine">科幻</router-link>
          <router-link to="/reading">阅读</router-link>

          <router-link to="/write" class="write">
            <i class="icon iconfont icon-xiezuo"></i>
            写作平台
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Input} from "iview"

  export default {
      data() {
          return {
            isSee:true
          }
        },
      components:{
        Input
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
        position absolute
        top:0
        left:343px
        width:306px
        font-size 0
        .ivu-input-wrapper
          width:261px
        span
          display inline-block
          vertical-align middle
          width:45px
          height:32px
          line-height 32px
          text-align center
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
          height: 47px
          font-size 14px
          text-align center
          color: #eee
          vertical-align middle
        .router-link-active
          background rgba(70,127,217,1)
          color: #fff
        .write
          float: right

</style>
