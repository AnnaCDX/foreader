<template>
  <div>
    <div class="header">
     <div class="header-back">
       <div class="header-top">
         <div class="top-content">
           <div class="top-logo"></div>
           <div class="top-center">
             <Input placeholder="默认搜索词" class="tc-input"/>
             <span ><i class="icon iconfont icon-sousuo"></i></span>
           </div>
         </div>
       </div>
     </div>
      <div class="header-fix">
        <div class="fix-body">
          <div class="private" >
            <router-link to="/phone" class="phone-login"><i class="icon iconfont icon-shoujiduan"></i>手机端</router-link>
            <router-link to="/login" class="phone-login" v-show="!userInfo.id"><i class="icon iconfont icon-gerenzhongxin"></i>登陆</router-link>
            <router-link to="/msite" class="phone-login" v-show="userInfo.id"><i class="icon iconfont icon-gerenzhongxin"></i>个人中心</router-link>
          </div>
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
import {mapState} from "vuex"
  export default {
      data() {
          return {
            isSee:true
          }
        },
    methods:{
      ...mapState(['userInfo'])
    },
      components:{
        Input
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    .header-back
      background url("../../assets/img/title.jpeg")
      background-repeat no-repeat
      background-size 100% 100%
      .header-top
        position relative
        margin:0 auto
        width: 990px
        height: 170px
        overflow hidden
      .top-content
        width:60%
        overflow hidden
        margin-top: 77px
        .top-logo,.top-center
          line-height: 64px
          height:64px
        .top-logo
          float left
          width 142px
          background rgba(216,216,216,1)
        .top-center
          float: right
          font-size:0
          .ivu-input-wrapper
            width:261px
            .ivu-input
              border-radius
                0
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
    .header-fix
      z-index 100
      position: fixed
      top:0
      width:100%
      background: rgba(255,255,255,.65)
      .fix-body
        width:990px
        height:40px
        line-height:40px
        margin:0 auto
        .private
          float: right
          phone-login
            display inline-block
            font-size 14px
            margin:0 8px
            .icon
              font-size:16px
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
