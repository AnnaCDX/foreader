<template>
  <div>
    <div class="msite-container">
      <div class="left">
        <div class="left-container">
          <div class="avatar-name">
            <img :src="userInfo.avatar" alt="">
            <p>{{userInfo.name}}</p>
          </div>
          <div class="mine">
            <router-link to="/msite/homePage"><i class="icon iconfont icon-zhuye1"></i>我的主页</router-link>
            <router-link to="/msite/collection"> <i class="icon iconfont icon-weibiaoti2fuzhi03"></i>我的收藏</router-link>
            <router-link to="/msite/wallet"><i class="icon iconfont icon-qianbao"></i>我的钱包</router-link>
            <!--<router-link to="/msite/shelter"> <i class="icon iconfont icon-qianbao"></i>我的书架</router-link>-->
          </div>
        </div>
        <div class="homepage">
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        data() {
          return {
          }
        },
      created(){
        let id = this.$cookies.get("id")
        let token = this.$cookies.get('tk')
        let config={
          headers:{
            "Authorization":"Bearer "+token
          }
        }
        this.$store.dispatch("getInfor",{id,config}),
          this.$store.dispatch("getWalletInfo",{id,config})
      },
      mounted(){


      },
        computed:{
          ...mapState(['userInfo'])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.msite-container
  width:100%
  .left
    overflow hidden
    width: 990px
    margin 20px auto 20px
    height:620px
    .left-container
      float: left
      width:260px
      height:100%
      background #fff

      .avatar-name
        width: 100%
        height: 208px
        border-radius: 4px;
        background-color: rgba(243, 121, 156, 0.84);
        text-align center
        padding-top: 41px;
        img
          border-radius 50%
          width: 100px
          height: 100px
        p
          font-size 14px
          margin:15px 0 20px
      .mine
        margin-top: 40px
        a
          .icon
            width 20px
            height: 20px
            font-size 16px
            margin-left: 32px
            margin-right 16px
          color: #000
          display block
          height:48px
          line-height 48px
        .router-link-active
          color: lightpink
          background #fff7f9

    .homepage
      float:right
      width:710px


</style>
