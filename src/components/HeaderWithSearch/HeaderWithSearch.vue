<template>
  <div class="header-fix" >
    <div class="fix-body">
      <img src="../../assets/img/title.jpeg" alt="">
      <slot name="headerSearch"></slot>
      <div class="private" >
        <router-link to="/phone" class="phone-login"><i class="icon iconfont icon-shoujiduan"></i>手机端</router-link>
        <a class="phone-login" v-if="!loginInfo.id && !id" ><i class="icon iconfont icon-gerenzhongxin"></i>登录</a>
        <router-link to="/msite" class="phone-login" v-else><i class="icon iconfont icon-gerenzhongxin"></i>个人中心</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        data() {
            return {
              id:this.$cookies.get("id"),

            }
        },
        computed:{
          ...mapState(["loginInfo"])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-fix
    .fix-body
      position relative
      width:990px
      height:40px
      line-height:40px
      margin:0 auto
      img
        width: 142px;
        height: 40px;
        object-fit cover
      .private
        float: right
        phone-login
          display inline-block
          font-size 14px
          margin:0 8px
          .icon
            font-size:16px
</style>
